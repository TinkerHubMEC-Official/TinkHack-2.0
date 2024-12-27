import localFont from 'next/font/local';
import './globals.css';

// const satoshi = localFont({
//   src: [
//     {
//       path: "./fonts/Satoshi-Variable.ttf",
//       style: 'normal',
//     },
//   ],
//   src: [
//     {
//       path: "./fonts/Satoshi-VariableItalic.ttf",
//       style: 'italic',
//     },
//   ],
//   variable: "--font-satoshi",
// });

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi"
})

const khuja = localFont({
  src: "./fonts/KhujaUppercase-Uppercase.ttf",
  variable: "--font-khuja"
})

const productsansregular = localFont({
  src: "./fonts/Product-Sans-Regular.ttf",
  variable: "--font-product-sans-regular"
})

const productsansbold = localFont({
  src: "./fonts/Product-Sans-Bold.ttf",
  variable: "--font-product-sans-bold"
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${satoshi.variable} ${khuja.variable} ${productsansregular.variable} ${productsansbold.variable}`}>
      <body>{children}</body>
    </html>
  );
}
