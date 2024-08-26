const TitleProduct = ({ title }) => {
  return (
    <h2 className="md:px-16 text-2xl font-bold text-blue-600 text-start mt-8 mb-4">
      Todos los productos de {title}
    </h2>
  );
};

export default TitleProduct;
