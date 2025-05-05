import Header from "@/components/Header";

type PublicLayoutProps = React.PropsWithChildren;

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <>
      <Header />
      <main className="flex-1 px-6 md:px-10 lg:px-24 py-4">{children}</main>
      {/* footer */}
    </>
  );
};

export { PublicLayout };
