import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css'; // Add import for bootstrap
import "./globals.css";
import { Container, SSRProvider } from '@/components/bootstrap';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Tutorial Project in Next.js 14.1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {/* use client component features internally. SSR Provider is for Bootstrap */}
      <SSRProvider>
        <main>
          <Container className="py-4"> 
            {children}
          </Container>
        </main>
      </SSRProvider>
      </body>
    </html>
  );
}
