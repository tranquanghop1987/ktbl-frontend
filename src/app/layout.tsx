import Footer from "@/widgets/Footer";
import "./globals.css";
// import { getGlobal } from "./widgets/Header/repo";
// import { getStrapiMedia } from "./utils/api-helper";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const global = await getGlobal();

  // TODO: CREATE A CUSTOM ERROR PAGE
  // if (!global.data) return null;

  // const footer = global.data.attributes.footerSection;
  // const {copyright, logo} = footer;

  // const footerLogoUrl = getStrapiMedia(
  //     logo.logoImage.data.attributes.url
  // );

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
