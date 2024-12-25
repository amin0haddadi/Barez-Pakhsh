import { rootMetadata } from "@/config/metadata";
import "./globals.css";
import { ReactQueryProvider } from "@/providers";
import { PublicLayout } from "@/public/PublicLayout";

export const metadata = rootMetadata;

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={`w-screen h-screen flex flex-col overflow-x-hidden`}>
        <ReactQueryProvider>
          <PublicLayout>{children}</PublicLayout>
        </ReactQueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
