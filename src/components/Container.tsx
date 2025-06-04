const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[90%] sm:w-[85%] max-md:w-[80%] lg:w-[60%] mx-auto md:mt-20">
      {children}
    </div>
  );
};

export default Container;
