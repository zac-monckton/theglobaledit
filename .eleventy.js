module.exports = function(eleventyConfig) {

  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");

  // Date filters
  eleventyConfig.addFilter("dateDisplay", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric", month: "long", day: "numeric"
    });
  });

  eleventyConfig.addFilter("dateISO", (dateObj) => {
    return new Date(dateObj).toISOString().split("T")[0];
  });

  // Limit filter (for showing N posts)
  eleventyConfig.addFilter("limit", (array, n) => array.slice(0, n));

  // Get posts by category
  eleventyConfig.addFilter("filterByCategory", (posts, category) => {
    return posts.filter(p => p.data.category === category);
  });

  // Collections
  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/posts/*.md")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("travel", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/posts/*.md")
      .filter(p => p.data.category === "Travel" || p.data.parentCategory === "Travel")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("finance", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/posts/*.md")
      .filter(p => p.data.category === "Personal Finance" || p.data.parentCategory === "Personal Finance")
      .sort((a, b) => b.date - a.date);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
