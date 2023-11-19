const CardContainer = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-y-6 md:gap-y-10 py-12">
      {children}
    </div>
  );
};

export default CardContainer;
