const Card = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="container bg-white px-6 md:px-8 mx-auto md:w-2/3 lg:w-3/4 border-2 border-blue-500 rounded-lg overflow-hidden shadow-lg">
      {children}
    </div>
  );
};
export default Card;
