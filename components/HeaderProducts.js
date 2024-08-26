import { setImage } from "../utils/functions";
const HeaderProducts = ({ title, type }) => {
  return (
    <div
      style={{
        backgroundImage: setImage(type),
        backgroundSize: "auto",
        backgroundPosition: "center",
      }}
      className="bg-gray-500 md:pl-32 xl:pl-48 2xl:pl-64 min-h-72 min-w-full flex justify-center md:justify-start items-center"
    >
      <article className=" bg-black w-full flex justify-center md:justify-start items-center">
        <img
          src="https://res.cloudinary.com/djbeg0zrq/image/upload/v1723169725/logos/ksoswjkido8k6utacxtp.png"
          width="70"
          height="70"
          className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full border-4 border-gray-800 shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl"
        />
        <h1 className="text-2xl md:text-5xl lg:text-7xl text-white font-bold uppercase">
          {title}
        </h1>
      </article>
    </div>
  );
};

export default HeaderProducts;
