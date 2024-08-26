import Image from "next/image";
import Link from "next/link";
import Container from "./container";
import { useTheme } from "next-themes";

import EnchufandoBrand from "./EnchufandoBrand";

const Hero = () => {
  const { theme } = useTheme();
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="mt-4 mt:lg:0 max-w-2xl mb-8 md:ms-8">
            <EnchufandoBrand />

            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300 ">
              Enchufando, una empresa argentina fundada en 2006, líder en
              conexiones para la conducción de agua en Argentina.
            </p>

            <div className="flex flex-col items-center space-y-3 sm:space-x-3 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="/productos"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-blue-700 rounded-md "
              >
                Productos
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center lg:justify-end w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-end w-8/12 md:w-10/12 lg:w-full">
            {theme === "dark" ? (
              <img
                src="https://res.cloudinary.com/djbeg0zrq/image/upload/v1723169725/logos/ksoswjkido8k6utacxtp.png"
                width="416"
                height="317"
                className="object-cover"
                alt="Hero Illustration"
                loading="eager"
              />
            ) : (
              <img
                src="https://res.cloudinary.com/djbeg0zrq/image/upload/v1723169724/logos/fyuranu83qla1d6hlv5z.png"
                width="416"
                height="317"
                className="object-cover"
                alt="Hero Illustration"
                loading="eager"
              />
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
