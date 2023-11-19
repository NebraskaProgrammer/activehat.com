const Header = ({ children }: { children?: React.ReactNode }) => {
  return (
    <h1 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl">
      {children}
    </h1>
  );
};
export default Header;
