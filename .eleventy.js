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

  // Limit filter
  eleventyConfig.addFilter("limit", (array, n) => array.slice(0, n));

  // Slice filter
  eleventyConfig.addFilter("slice", (array, start, end) => array.slice(start, end));

  // Get posts by category or subcategory
  eleventyConfig.addFilter("filterByCategory", (posts, category) => {
    return posts.filter(p =>
      p.data.category === category ||
      p.data.subcategory === category
    );
  });

  // Collections
  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/posts/*.md")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("travel", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/posts/*.md")
      .filter(p => p.data.parentCategory === "Travel")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("finance", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/posts/*.md")
      .filter(p => p.data.parentCategory === "Personal Finance")
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
