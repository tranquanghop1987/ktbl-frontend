import Footer from '@/app/shared/widgets/Footer';
import './globals.scss';
import Navbar from './shared/widgets/Navbar';
import localFont from 'next/font/local';

const myFont = localFont({
  src: '../../public/assets/font/KrungthaiFastWeb-Bold.woff',
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata = {
  title: 'KTBL',
  description: 'Generated by create next app',
};
/* tslint:disable:no-empty */
async function RootLayout({ children }: { children?: React.ReactNode }) {
  return (
    <html lang="en" className={`${myFont.variable} font-sans`}>
      <body suppressHydrationWarning={true}>
        <Navbar isHome={true} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
export default RootLayout;
