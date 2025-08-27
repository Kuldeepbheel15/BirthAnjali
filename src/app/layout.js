import "./globals.css";

export const metadata = {
  title: "Happiest Birthday Anjali!",
  description: "An emotional surprise filled with memories, smiles, and love, just for you on this Raksha Bandhan."

}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
