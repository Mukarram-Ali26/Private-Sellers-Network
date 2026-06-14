import "./globals.css";

export const metadata = {
  title: "Market Notes | Marketing Examples Clone",
  description: "A Next.js editorial archive inspired by Marketing Examples.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
