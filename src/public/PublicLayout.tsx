import Header from "@/components/Header";

type PublicLayoutProps = React.PropsWithChildren;

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      {/* footer */}
    </>
  );
};

export { PublicLayout };
