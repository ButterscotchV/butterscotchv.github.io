import { IdAttributePlugin, InputPathToUrlTransformPlugin, HtmlBasePlugin } from "@11ty/eleventy";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginNavigation from "@11ty/eleventy-navigation";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import htmlmin from "html-minifier-terser";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function (eleventyConfig) {
    // Copy the contents of the `public` folder to the output folder
    // For example, `./public/css/` ends up in `_site/css/`
    eleventyConfig
        .addPassthroughCopy({
            "./public/": "/"
        })
        .addPassthroughCopy({
            "./node_modules/photoswipe/dist/photoswipe-lightbox.esm.min.js": "/assets/ps/photoswipe-lightbox.esm.min.js",
            "./node_modules/photoswipe/dist/photoswipe.esm.min.js": "/assets/ps/photoswipe.esm.min.js",
            "./node_modules/photoswipe/dist/photoswipe.css": "/assets/ps/photoswipe.css",
        }).addPassthroughCopy({
            "./node_modules/bulma/css/bulma.min.css": "/assets/bulma/bulma.min.css",
        }).addPassthroughCopy({
            "./node_modules/prismjs/themes/prism-tomorrow.min.css": "/assets/prism/prism-tomorrow.min.css",
        });

    // Run Eleventy when these files change:
    // https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets

    // Watch src images for the image pipeline.
    eleventyConfig.addWatchTarget("src/**/*.{svg,webp,png,jpeg,jpg}");

    // Per-page bundles, see https://github.com/11ty/eleventy-plugin-bundle
    // Adds the {% css %} paired shortcode
    eleventyConfig.addBundle("css", {
        toFileDirectory: "assets",
    });
    // Adds the {% js %} paired shortcode
    eleventyConfig.addBundle("js", {
        toFileDirectory: "assets",
    });
    eleventyConfig.addBundle("html", {
        toFileDirectory: "assets",
    });

    // Official plugins
    eleventyConfig.addPlugin(pluginSyntaxHighlight, {
        preAttributes: { tabindex: 0 }
    });
    eleventyConfig.addPlugin(pluginNavigation);
    eleventyConfig.addPlugin(HtmlBasePlugin);
    eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);

    // Image optimization: https://www.11ty.dev/docs/plugins/image/#eleventy-transform
    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
        // File extensions to process in _site folder
        extensions: "html",

        // Output formats for each image.
        formats: ["avif", "webp", "auto"],

        // widths: ["auto"],

        defaultAttributes: {
            // e.g. <img loading decoding> assigned on the HTML tag will override these values.
            loading: "lazy",
            decoding: "async",
        }
    });

    // Filters
    eleventyConfig.addPlugin(IdAttributePlugin, {
        // by default we use Eleventy’s built-in `slugify` filter:
        // slugify: eleventyConfig.getFilter("slugify"),
        // selector: "h1,h2,h3,h4,h5,h6", // default
    });

    eleventyConfig.addShortcode("currentBuildDate", () => {
        return (new Date()).toISOString();
    });

    eleventyConfig.addShortcode("getStyleBundle", function getContent(type, bucket, explicitUrl) {
        const bundle = eleventyConfig.getShortcode("getBundle")?.(type, bucket, explicitUrl || this.page?.url);
        return bundle ? `<style>${bundle}</style>` : "";
    });

    eleventyConfig.addTransform("htmlmin", function (content) {
        if ((this.page.outputPath || "").endsWith(".html")) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
            });

            return minified;
        }

        // If not an HTML output, return content as-is
        return content;
    });

    // Features to make your build faster (when you need them)

    // If your passthrough copy gets heavy and cumbersome, add this line
    // to emulate the file copy on the dev server. Learn more:
    // https://www.11ty.dev/docs/copy/#emulate-passthrough-copy-during-serve

    // eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
};

export const config = {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: [
        "md",
        "njk",
        "html",
        "liquid",
        "11ty.js",
    ],

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: "njk",

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: "njk",

    dir: {
        input: "src",
    },
};
