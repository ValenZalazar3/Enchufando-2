import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { Disclosure } from "@headlessui/react";
import { useTheme } from "next-themes";
import { Link as ScrollLink } from "react-scroll";
import CustomDropdown from "./CustomDropdown";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const [isHome, setIsHome] = useState(router.pathname === "/");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsHome(router.pathname === "/");
  }, [router.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigation = [
    { id: uuidv4(), name: "Beneficios", link: "beneficios" },
    { id: uuidv4(), name: "Presentación", link: "video" },
    { id: uuidv4(), name: "Preguntas frecuentes", link: "preguntas" },
  ];

  const handleNavClick = (link) => {
    if (!isHome) {
      localStorage.setItem("targetSection", link);
      router.push("/");
    }
  };

  return (
    <Disclosure>
      {({ open }) => (
        <div className="w-full fixed top-0 z-50 transition-colors bg-black">
          <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto xl:justify-between xl:px-0">
            {/* Logo */}
            <div className="flex flex-wrap items-center justify-between w-full xl:w-auto">
              <Link href="/">
                <span className="flex items-center space-x-2 text-2xl font-medium text-blue-500 dark:text-white">
                  <img
                    src="https://res.cloudinary.com/djbeg0zrq/image/upload/v1723169390/logos/t4htuseubqg4qrqcjpcr.png"
                    alt="N"
                    width="100"
                    height="100"
                    className="w-36"
                  />
                </span>
              </Link>

              <div className="xl:hidden flex items-center">
                {/*   <ThemeChanger className="mr-4" /> */}
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-white rounded-md xl:hidden :text-black focus:text-blue-500 focus:bg-blue-100 focus:outline-none dark:text-white dark:focus:bg-trueGray-5hover0"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open ? (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>
              </div>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 xl:hidden">
                {navigation.map((item) => (
                  <ScrollLink
                    key={item.id}
                    to={item.link}
                    smooth={true}
                    duration={500}
                    offset={-80} // Ajusta este valor según la altura del navbar
                    onClick={() => handleNavClick(item.link)}
                    className="w-full px-4 py-2 -ml-4 text-white rounded-md dark:text-white hover:text-gray-200 focus:text-blue-500 focus:bg-blue-100 dark:focus:bg-white focus:outline-none cursor-pointer"
                  >
                    {item.name}
                  </ScrollLink>
                ))}
                <ScrollLink
                  to="productos"
                  smooth={true}
                  duration={500}
                  offset={-80} // Ajusta este valor según la altura del navbar
                  onClick={() => handleNavClick("productos")}
                  className="w-full px-4 py-2 -ml-4 text-white rounded-md dark:text-white hover:text-gray-200 focus:text-blue-500 focus:bg-blue-100 dark:focus:bg-white focus:outline-none cursor-pointer"
                >
                  Productos
                </ScrollLink>

                <Link
                  href="/contacto"
                  className="w-full px-4 py-2 mt-2 -ml-4 text-white rounded-md dark:text-white hover:text-gray-200 focus:text-blue-500 focus:bg-blue-100 dark:focus:bg-white focus:outline-none"
                >
                  Contactános
                </Link>
              </Disclosure.Panel>
            </div>

            {/* Menu */}
            <div className="hidden text-center xl:flex xl:items-center">
              <ul className="items-center justify-end flex-1 pt-6 list-none xl:pt-0 xl:flex">
                <ScrollLink
                  onClick={() => handleNavClick("inicio")}
                  to="inicio"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="inline-block px-4 py-2 text-lg font-normal text-white no-underline rounded-md dark:text-white hover:text-gray-200 focus:text-blue-500 focus:bg-blue-100 focus:outline-none dark:focus:bg-white cursor-pointer"
                >
                  Inicio
                </ScrollLink>
                <CustomDropdown />

                {navigation.map((menu) => (
                  <li className="mr-3 nav__item" key={menu.id}>
                    <ScrollLink
                      to={menu.link}
                      smooth={true}
                      duration={500}
                      offset={-380}
                      onClick={() => handleNavClick(menu.link)}
                      className=" inline-block px-4 py-2 text-lg font-normal text-white no-underline rounded-md dark:text-white hover:text-gray-200 focus:text-blue-500 focus:bg-blue-100 focus:outline-none dark:focus:bg-white cursor-pointer"
                    >
                      <span className="w-full">{menu.name}</span>
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden mr-3 space-x-4 xl:flex nav__item">
              {/*  <ThemeChanger className="" /> */}

              <Link
                href="/contacto"
                className="font-sans px-6 py-2 text-white bg-blue-700 rounded-md md:ml-5"
              >
                Contactános
              </Link>
            </div>
          </nav>
        </div>
      )}
    </Disclosure>
  );
};

export default Navbar;
