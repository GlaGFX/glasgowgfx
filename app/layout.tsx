import type { Metadata } from "next";
import "./globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StarfieldBackground from '@/components/layout/StarfieldBackground';
import PageTransitionWrapper from '@/components/layout/PageTransitionWrapper';

export const metadata: Metadata = {
  title: "Nexus • Design Collective",
  description: "A collective of designers, developers, and strategists passionate about creating meaningful digital products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Starfield background component */}
        <StarfieldBackground />
        
        {/* Header */}
        <Header />
        
        {/* Main content with page transitions */}
        <PageTransitionWrapper>
          <main className="relative z-10">
            {children}
          </main>
        </PageTransitionWrapper>
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
