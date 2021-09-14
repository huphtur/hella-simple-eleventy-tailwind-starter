
module.exports = function (eleventyConfig) {
  
  eleventyConfig.addWatchTarget("./src/_includes/output.css");
  eleventyConfig.addPassthroughCopy({'./src/_includes/output.css': './output.css'});

  return {
    dir: {
      input: 'src',
    },
  };
};
