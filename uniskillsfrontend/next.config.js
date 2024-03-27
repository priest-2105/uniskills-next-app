module.exports = {
	reactStrictMode: true,

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.istockphoto.com",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				pathname: "**",
			},
			{
				protocol: "http",
				hostname: "localhost",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "private4testing.uniskills.net",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "logo.clearbit.com",
				pathname: "**",
			},
		],
	},
	productionBrowserSourceMaps: true,

	// generateEtags: false, // set to false to disable caching of the HTML pages
	// onDemandEntries: false, // set to false to disable  incremental compilation and caching of the javascript pages
};
