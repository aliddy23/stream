const path = require("path");
const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
	outputDir: path.resolve(__dirname, "../dist"),
	transpileDependencies: ["vuetify"],
	devServer: {
		https: false,
		proxy: {
			"^/api": {
				target: "http://localhost:3000",
				// target: "https://frc2641.aidanliddy.com",
				changeOrigin: true,
				ws: true,
				cookieDomainRewrite: {
					"*": "",
				},
			},
		},
	},
});
