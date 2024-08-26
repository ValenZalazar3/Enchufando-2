import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  DevicePhoneMobileIcon,
  TruckIcon,
  SunIcon,
  FlagIcon,
} from "@heroicons/react/24/solid";

const benefitOne = {
  title: "Contamos con stock permanente",
  desc: "Podemos proveer a nuestros clientes con stock permanente de productos de alta calidad.",
  image:
    "https://res.cloudinary.com/djbeg0zrq/image/upload/v1723169931/galpon/aege7z38vdijhw42brlz.jpg",
  bullets: [
    {
      title: "Contamos con gran variedad de productos en stock",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Hacemos envíos a todo el país",
      icon: <TruckIcon />,
    },

    {
      title: "Podes contactarnos fácilmente",
      icon: <DevicePhoneMobileIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Beneficios de trabajar con nosotros",
  desc: "",
  image:
    "https://res.cloudinary.com/djbeg0zrq/image/upload/v1723169933/galpon/bygkuaqltj3xnjzkbdrg.jpg",
  bullets: [
    {
      title: "Atención al cliente personalizada",
      icon: <FaceSmileIcon />,
    },

    {
      title: "Productos de alta calidad",
      icon: <SunIcon />,
    },
    {
      title: "Productos nacionales e importados",
      icon: <FlagIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
