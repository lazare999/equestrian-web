import Footer from "@/components/footer/page";
import Header from "@/components/header/main-header/main-header";
import "../globals.css";

export const metadata = {
  title: "Equestrian in Georgia",
  description:
    "Explore stables, horse tours, showjumping competitions, and more across Georgia. Your ultimate equestrian guide!",
  openGraph: {
    title: "Equestrian Adventures in Georgia",
    description:
      "Explore stables, horse tours, showjumping competitions, and more across Georgia. Your ultimate equestrian guide!",
    url: "https://your-domain.com",
    siteName: "Equestrian Georgia",
    images: [
      {
        url: "https://www.designevo.com/res/templates/thumb_small/white-and-brown-horse-badge.webp",
        width: 1200,
        height: 630,
        alt: "Horseback Riding in Georgia",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Equestrian Adventures in Georgia",
    description: "Discover top stables, horse tours, and equestrian events in Georgia.",
    images: ["https://your-domain.com/images/og-image.jpg"],
  },
  // Add this line for the favicon
  icon: "public/header-logo/logo1.jpg", // or your preferred image
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add the favicon link */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="layout-container">
          <Header />
          <main className="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
