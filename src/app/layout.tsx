import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PSP Project",
  description: "exam test",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
