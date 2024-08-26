import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const productsMenu = [
    { id: uuidv4(), name: "Riego", link: "/riego" },
    { id: uuidv4(), name: "Roscados", link: "/roscados" },
    { id: uuidv4(), name: "Termofusión", link: "/termofusion" },
    { id: uuidv4(), name: "PVC Soldable", link: "/pvc" },
    { id: uuidv4(), name: "Válvulas y Canillas", link: "/valvulas-y-canillas" },
  ];

  const handleDropdownClick = (link) => {
    router.push(link);
  };

  const handleButtonClick = () => {
    router.push("/productos");
  };

  return (
    <Dropdown isOpen={isOpen}>
      <DropdownTrigger
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <Button
          variant="light"
          className="inline-block text-lg font-normal text-white no-underline rounded-md dark:text-gray-200 hover:text-bg-white/70 focus:text-bg-white/70 focus:bg-blue-100 focus:outline-none dark:focus:bg-white/70"
          onClick={handleButtonClick}
        >
          Productos
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Static Actions"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {productsMenu.map((item) => (
          <DropdownItem onClick={() => handleDropdownClick(item.link)}>
            {item.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default CustomDropdown;
