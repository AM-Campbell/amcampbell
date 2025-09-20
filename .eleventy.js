module.exports = function(eleventyConfig) {
    // Add date filter
    eleventyConfig.addFilter("date", function(dateObj, format) {
        return new Date(dateObj).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long", 
            day: "numeric"
        });
    });
    
    // Create a collection for articles
    eleventyConfig.addCollection("articles", function(collectionApi) {
        return collectionApi.getFilteredByGlob("articles/*.md");
    });
    
    // Copy CSS files to output
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addGlobalData("layout", "base.njk");
    eleventyConfig.addPassthroughCopy("fonts");
    eleventyConfig.addPassthroughCopy("scripts");
    
    return {
        dir: {
            input: ".",
            includes: "_includes",
            output: "_site"
        },
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
    };
};