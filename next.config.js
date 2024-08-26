module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  output: "standalone",
  images: {
    domains: ["https://res.cloudinary.com"],
    disableStaticImages: true,
    unoptimized: true,
  },
};

const withImages = require("next-images");
module.exports = withImages();
