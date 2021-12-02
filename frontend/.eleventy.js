module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./src/fonts");
  eleventyConfig.addPassthroughCopy("./src/scripts/index.js");

  return {
    dir: {
      input: "src",
      output: "public",
    },
    htmlTemplateEngine: "njk",
  };
};
