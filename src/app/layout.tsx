import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Container from './components/Container';
import './globals.css';

const font = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Full stack developer portfolio',
  description:
    'Welcome to my Full Stack Developer portfolio! Explore my projects, skills, and experience in web development, including frontend technologies like React, Next.js, and CSS, as well as backend technologies like Node.js, Express, and MongoDB. Get in touch to discuss collaboration opportunities.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Container>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
