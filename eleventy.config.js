
module.exports = function (eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy({'src/_includes/output.css': '/output.css'});

  return {
    dir: {
      input: 'src',
    },
  };
};
