import "./globals.css";

export const metadata = {
  title: "Federal Motors - Premium Car Showroom Rawalpindi",
  description: "Buy Toyota, Honda, Suzuki, Mercedes, BMW and more at Federal Motors, Rawalpindi.",
  openGraph: {
    title: "Federal Motors",
    description: "Premium Car Showroom – PWD Rawalpindi",
    url: "https://federalmotors.example.com",
    siteName: "Federal Motors",
    images: [{ url: "/cover.jpg", width: 1200, height: 630, alt: "Federal Motors" }],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Federal Motors",
    description: "Premium Car Showroom – PWD Rawalpindi",
    images: ["/cover.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
