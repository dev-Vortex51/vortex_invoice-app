const Logo = () => {
  return (
    <div className="w-full flex-1">
      <div
        className="     relative flex flex-col
    h-[103px]
    max-md:h-[80px] max-md:w-[80px]"
      >
        <div
          className="  h-[65%] w-full
    bg-01
    rounded-tr-[20px]"
        ></div>
        <div
          className=" absolute
    h-[50%] w-full
    bg-02
    rounded-br-[20px] rounded-tl-[20px]
    top-[52px]

    max-md:top-[40px]"
        ></div>
        <img
          src="/download.svg"
          className=" absolute
    top-[33.29px] left-[32px]
    w-[40px] h-[40px]

    max-md:top-1/2 max-md:left-1/2
    max-md:transform max-md:-translate-x-1/2 max-md:-translate-y-1/2
    max-md:w-[31px] max-md:h-[31px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Logo;
