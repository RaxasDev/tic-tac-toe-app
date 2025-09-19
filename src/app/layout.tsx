import { Toaster } from "sonner";
import "../assets/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <main>{children}</main>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
