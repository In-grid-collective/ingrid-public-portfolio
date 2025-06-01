const path = require("path");
const eleventyImage = require("@11ty/eleventy-img");

module.exports = eleventyConfig => {
	function relativeToInputPath(inputPath, relativeFilePath) {
		let split = inputPath.split("/");
		split.pop();

		return path.resolve(split.join(path.sep), relativeFilePath);
	}

	// Eleventy Image shortcode
	// https://www.11ty.dev/docs/plugins/image/
	eleventyConfig.addAsyncShortcode("image", async function imageShortcode(src, alt, cls, widths, sizes) {
		// Full list of formats here: https://www.11ty.dev/docs/plugins/image/#output-formats
		// Warning: Avif can be resource-intensive so take care!

		const customFilename = (filename) => {
			return filename.replace(/^_/, ''); // Remove leading underscore if present
		};

		let formats = ["webp","png","auto"];
		let file = relativeToInputPath(this.page.inputPath, src);
		let metadata = await eleventyImage(file, {
			widths: widths || ["auto"],
			formats,
			outputDir: path.join(eleventyConfig.dir.output, "img"), // Advanced usage note: `eleventyConfig.dir` works here because we’re using addPlugin.
			filenameFormat: function (id, src, width, format, options) {
				/*
				What this code does:

				This section overrides the built-in image naming functionality. 
				In this case, we're simply introducing the name prior to other ids.

				Why is it necessary:

				The original implementation generates image names starting with underscore which is imcompatible with github. 
				In order to work around this limitation, we need to override default functionality.  
				*/
				const ext = path.extname(src)
				const name = path.basename(src, ext)
				
				if (width) {
				  return `${name}-${id}-${width}.${format}`;
				}
			
				return `${name}-${id}.${format}`;
			  }
		});



		// TODO loading=eager and fetchpriority=high
		let imageAttributes = {
			class: cls || "",
			alt,
			sizes,
			loading: "lazy",
			decoding: "async"
		};
		return eleventyImage.generateHTML(metadata, imageAttributes);
	});
};
