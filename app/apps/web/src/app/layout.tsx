import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://29sfilm-cor.hyphen.it.com";
const siteTitle = "29 WITH — 29초영화제 꿈프·29프렌즈 운영 포털";
const siteDescription = "29 WITH는 29초영화제 영상 꿈나무 양성 프로젝트와 2026 29프렌즈 활동을 신청, 출품 확인, 혜택, 문서, 운영 공지까지 한 곳에서 관리하는 협력 포털입니다.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: "29 WITH",
    title: siteTitle,
    description: siteDescription,
    images: [{ url: "/brand/29film-logo-black-seo.webp", width: 720, height: 256, alt: "29초영화제 로고" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "29 WITH",
      url: siteUrl,
      logo: `${siteUrl}/brand/29film-logo-black-seo.webp`,
      sameAs: ["https://www.29sfilm.com", "https://www.29sking.com"],
      description: siteDescription,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "29 WITH",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "ko-KR",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: siteTitle,
      description: siteDescription,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      inLanguage: "ko-KR",
      primaryImageOfPage: `${siteUrl}/brand/29film-logo-black-seo.webp`,
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      name: "29 WITH 운영 포털",
      serviceType: "Festival collaboration and participant management portal",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "KR" },
      description: "영상 꿈나무 양성 프로젝트와 29프렌즈의 신청, 선정, 출품 확인, 활동 기록, 혜택, 문서 발급을 관리합니다.",
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#programs`,
      name: "29 WITH 주요 프로그램",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "영상 꿈나무 양성 프로젝트" },
        { "@type": "ListItem", position: 2, name: "2026 29프렌즈" },
        { "@type": "ListItem", position: 3, name: "29초영화제 출품·홍보 운영" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/#breadcrumb`,
      itemListElement: [{ "@type": "ListItem", position: 1, name: "29 WITH", item: siteUrl }],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
      </body>
    </html>
  );
}
