const Container = ({ children }: { children?: React.ReactNode }) => {
  return (
    <main className="w-full px-5 py-12 md:py-24 lg:py-32 flex justify-center items-center min-h-screen">
      {children}
    </main>
  );
};

export default Container;
