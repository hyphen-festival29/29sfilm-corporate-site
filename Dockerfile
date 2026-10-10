FROM node:22-alpine AS builder

WORKDIR /workspace

RUN apk add --no-cache openssl

COPY app/package.json app/package-lock.json ./app/
COPY app/apps/api/package.json ./app/apps/api/
COPY app/apps/web/package.json ./app/apps/web/
COPY app/packages/database/package.json ./app/packages/database/
COPY app/packages/shared/package.json ./app/packages/shared/

WORKDIR /workspace/app
RUN npm ci

WORKDIR /workspace
COPY app ./app

WORKDIR /workspace/app
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run vercel-build

FROM node:22-alpine AS runner

WORKDIR /workspace/app

RUN apk add --no-cache openssl

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

COPY --from=builder /workspace/app ./ 

EXPOSE 3000

CMD ["npm", "run", "start", "--workspace", "@29with/web", "--", "-H", "0.0.0.0", "-p", "3000"]
