import Link from "next/link";
import Footer from "../../components/footer.js";
import HeaderProducts from "../../components/HeaderProducts";
import { setImage } from "../../utils/functions";
const ProductsPage = () => {
  return (
    <div>
      <HeaderProducts title="Productos" type="products" />
      <section className="flex justify-center mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 md:px-2 md:gap-4">
          <CardSectionProduct link="/riego" title="Riego" type="riego" />
          <CardSectionProduct
            link="/roscados"
            title="Roscados"
            type="roscados"
          />
          <CardSectionProduct
            link="/termofusion"
            title="Termofusión"
            type="termofusion"
          />
          <CardSectionProduct link="/pvc" title="PVC Soldable" type="pvc" />
          <CardSectionProduct
            link="/valvulas-y-canillas"
            title="Válvulas "
            type="valvulas"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductsPage;

const CardSectionProduct = ({ title, type, link }) => {
  return (
    <Link href={link}>
      <article
        style={{
          backgroundImage: setImage(type),
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="hover:cursor-pointer d-flex py-20 w-80 bg-green-500 ps-8"
      >
        <article className="bg-black flex justify-start items-center">
          <span className=" flex items-center space-x-2 text-2xl font-medium text-blue-500 dark:text-gray-100">
            <img
              src="https://res.cloudinary.com/djbeg0zrq/image/upload/v1723169725/logos/ksoswjkido8k6utacxtp.png"
              width="70"
              height="70"
              className="w-10"
            />
          </span>
          <h1 className=" text-2xl text-white text-center font-bold uppercase">
            {title}
          </h1>
        </article>
      </article>
    </Link>
  );
};
