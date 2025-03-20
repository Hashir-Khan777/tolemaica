const Card2 = ({ title, description, bg }) => {
  return (
    <div className="w-full md:w-[300px] h-[350px] md:h-[300px] border-[2px] border-white/64 rounded-[20px] flex flex-col justify-center  items-center text-center backdrop-blur-[12.5px] px-[32px] py-[32px]"
      style={{ background: bg }}
    >
      <div className="w-[302px] py-[12px] px-[32px] h-[175px] flex flex-col gap-[16px]">

        <h1 className="font-outfit capitalize text-[24px]/[130%] text-center font-[500] bg-gradient-to-r from-[#FF9966] to-white bg-clip-text text-transparent tracking-[5%]">
          {title}
        </h1>
        <p className="text-gray-400  font-outfit font-[200] text-[20px]/[130%] text-center tracking-[10%]">
          {description}
        </p>

      </div>
    </div>
  );
};

export default Card2;
