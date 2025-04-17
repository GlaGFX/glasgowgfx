import type { Metadata, ResolvingMetadata } from 'next/types';
import "./globals.css";
import { ThemeProvider } from '@/components/ThemeProvider';
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
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
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
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
