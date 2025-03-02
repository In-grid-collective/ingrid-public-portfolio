// const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");


// module.exports = function(eleventyConfig) {

//   eleventyConfig.addPlugin(eleventyNavigationPlugin);
//   eleventyConfig.addPassthroughCopy('src/img')


//   const {
//     DateTime
//   } = require("luxon");

//   // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
//     eleventyConfig.addFilter('htmlDateString', (dateObj) => {
//       return DateTime.fromJSDate(dateObj, {
//         zone: 'utc'
//       }).toFormat('yy-MM-dd');
//     });

//     eleventyConfig.addFilter("readableDate", dateObj => {
//     return DateTime.fromJSDate(dateObj, {
//       zone: 'utc'
//     }).toFormat("dd-MM-yy");
//   });

//   return {
//     dir: { input: 'src', output: '_site' }
//   };
// };


// --------

const { DateTime } = require("luxon");

const pluginBundle = require("@11ty/eleventy-plugin-bundle");
const pluginNavigation = require("@11ty/eleventy-navigation");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

const pluginDrafts = require("./eleventy.config.drafts.js");
const pluginImages = require("./eleventy.config.images.js");

module.exports = function(eleventyConfig) {
	// Copy the contents of the `public` folder to the output folder
	// For example, `./public/css/` ends up in `docs/css/`
	//only copying assets, js and css folders though
	// eleventyConfig.addPassthroughCopy({ "public/assets": "assets" });
	eleventyConfig.addPassthroughCopy({ "public/js": "js" });
	eleventyConfig.addPassthroughCopy({ "public/css": "css" });//??
	eleventyConfig.addPassthroughCopy({ "public/assets/fonts": "public/assets/fonts" });
	eleventyConfig.addPassthroughCopy({ "public/assets/img": "assets/img" });
	// eleventyConfig.addPassthroughCopy("../../public/assets/img");

	// Run Eleventy when these files change:
	// https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets

	// Watch content images for the image pipeline.
	eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpeg}");

	// App plugins
	eleventyConfig.addPlugin(pluginDrafts);
	eleventyConfig.addPlugin(pluginImages);

	// Official plugins
	eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
	eleventyConfig.addPlugin(pluginBundle);

	// Filters
	eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
		// Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
		return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(format || "dd LLLL yyyy");
	});

	eleventyConfig.addFilter('htmlDateString', (dateObj) => {
		// dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
		return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
	});

	// Get the first `n` elements of a collection.
	eleventyConfig.addFilter("head", (array, n) => {
		if(!Array.isArray(array) || array.length === 0) {
			return [];
		}
		if( n < 0 ) {
			return array.slice(n);
		}

		return array.slice(0, n);
	});

	// Return the smallest number argument
	eleventyConfig.addFilter("min", (...numbers) => {
		return Math.min.apply(null, numbers);
	});

	// Return all the tags used in a collection
	eleventyConfig.addFilter("getAllTags", collection => {
		let tagSet = new Set();
		for(let item of collection) {
			(item.data.tags || []).forEach(tag => tagSet.add(tag));
		}
		return Array.from(tagSet);
	});


	eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
		return (tags || []).filter(tag => ["all", "nav", "project", "projects"].indexOf(tag) === -1);
	});


	eleventyConfig.addFilter("getPerson", (people,label) => {
		let person = people.filter(p => p.key === label)[0];
		return person;
	});

	eleventyConfig.addFilter("getActive", (people) => {;
		return people.filter(p => p.active == true);
	});

	eleventyConfig.addFilter("getInactive", (people) => {;
		return people.filter(p => p.active == false);
	});

	eleventyConfig.addFilter("filterCreditsByRole", (credits,role) => {
		return credits.filter(credit => {
			if(credit.role === role){
				return true;
			}else{
				return false;
			}
		});
	});

	eleventyConfig.addFilter("getProjectsByPerson", (projects,person) => {
		return projects.filter(project => {
			if(project.data.credits){
				for(p of project.data.credits){
					if(p.id === person){
						return true;
					}
				} 
				return false;
			}else{
				return false;
			}
			// return p.data.person === person;	
		});
	});


	eleventyConfig.addFilter("getProjectByRolePerson", (projects,person,role) => {
		return projects.filter(project => {
			if(project.data.credits){
				for(p of project.data.credits){
					if(p.id === person && p.role === role){
						return true;
					}
				} 
				return false;
			}else{
				return false;
			}
			// return p.data.person === person;	
		});
	});

	// Features to make your build faster (when you need them)

	// If your passthrough copy gets heavy and cumbersome, add this line
	// to emulate the file copy on the dev server. Learn more:
	// https://www.11ty.dev/docs/copy/#emulate-passthrough-copy-during-serve

	// eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

	return {
		// Control which files Eleventy will process
		// e.g.: *.md, *.njk, *.html, *.liquid
		templateFormats: [
			"md",
			"njk",
			"html",
			"liquid",
		],

		// Pre-process *.md files with: (default: `liquid`)
		markdownTemplateEngine: "njk",

		// Pre-process *.html files with: (default: `liquid`)
		htmlTemplateEngine: "njk",

		// These are all optional:
		dir: {
			input: "src/content",          // default: "."
			includes: "../_includes/components",  // default: "_includes"
      layouts: "../_includes/layouts",
			data: "../_data",          // default: "_data"
			output: "_site"
		},

		// -----------------------------------------------------------------
		// Optional items:
		// -----------------------------------------------------------------

		// If your site deploys to a subdirectory, change `pathPrefix`.
		// Read more: https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix

		// When paired with the HTML <base> plugin https://www.11ty.dev/docs/plugins/html-base/
		// it will transform any absolute URLs in your HTML to include this
		// folder name and does **not** affect where things go in the output folder.
		pathPrefix: "/",
	};
};
