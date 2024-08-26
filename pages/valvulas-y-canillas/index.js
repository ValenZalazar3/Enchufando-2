import Card from "../../components/Card";
import { products } from "../../data/products";
import HeaderProducts from "../../components/HeaderProducts";
import Footer from "../../components/footer";
import TitleProduct from "../../components/TitleProduct";

const index = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <HeaderProducts title={"VALVULAS Y CANILLAS"} type={"valvulas"} />
      <section>
        <TitleProduct title="VALVULAS Y CANILLAS" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-16 md:gap-4">
          {products
            ?.filter((product) => product.category === "VALVULA")
            .map((product) => (
              <Card
                key={product.id}
                category={product.category}
                name={product.name}
                image={product.image?.secure_url}
                sizes={product.sizes}
                type={product.type}
              />
            ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default index;
