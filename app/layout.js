import localFont from 'next/font/local';
import './globals.css';

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Variable.ttf",
      weight: "500",
    },
  ],
  variable: "--font-satoshi",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
