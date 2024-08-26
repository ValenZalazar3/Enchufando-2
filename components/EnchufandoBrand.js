import { useTheme } from "next-themes";
export default function EnchufandoBrand({ width, height }) {
  const { theme } = useTheme();
  return (
    <img
      src={
        theme === "dark"
          ? "https://res.cloudinary.com/djbeg0zrq/image/upload/v1723169724/logos/fyuranu83qla1d6hlv5z.png"
          : "https://res.cloudinary.com/djbeg0zrq/image/upload/v1723169390/logos/t4htuseubqg4qrqcjpcr.png"
      }
      width={width ? width : "216"}
      height={height ? height : "217"}
      className="object-cover"
      alt="Hero Illustration"
      loading="eager"
      style={{ filter: "invert(1)" }}
    />
  );
}
