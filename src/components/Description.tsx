const Description = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="mx-auto max-w-[800px] text-zinc-500 md:text-xl">{children}</p>
  );
};
export default Description;
