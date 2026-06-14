import "./globals.css";

export const metadata = {
  title: "Private Sellers Network",
  description: "Where successful brand owners share profit-driving hacks.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/private-sellers-network-logo.png", type: "image/png" },
    ],
    apple: "/private-sellers-network-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
