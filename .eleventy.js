module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./tailwind.config.js');
  eleventyConfig.addWatchTarget('./src/tailwind.css');

  return {
    dir: {
      input: 'src',
    },
  };
};
