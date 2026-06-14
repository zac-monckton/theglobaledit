module.exports = function(eleventyConfig) {

  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");

  // Copy favicon files from src root to site root
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/favicon.svg");
  eleventyConfig.addPassthroughCopy("src/favicon-16x16.png");
  eleventyConfig.addPassthroughCopy("src/favicon-32x32.png");
  eleventyConfig.addPassthroughCopy("src/apple-touch-icon.png");

  // Copy standalone HTML tools (ignored from template rendering — contains JS template literals)
  eleventyConfig.addPassthroughCopy("src/travel-budget-calculator.html");
  eleventyConfig.ignores.add("src/travel-budget-calculator.html");

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

  // Get posts by parent category (for top-level Travel / Finance pages)
  eleventyConfig.addFilter("filterByParent", (posts, parent) => {
    return posts.filter(p =>
      p.data.parentCategory === parent ||
      p.data.category === parent
    );
  });

  // Collections — ** glob picks up all subfolders recursively
  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/posts/**/*.md")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("travel", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/posts/**/*.md")
      .filter(p => p.data.parentCategory === "Travel")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("finance", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/posts/**/*.md")
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
