const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/particles.json","fonts/LouisGeorgeCafe/Louis George Cafe Bold Italic.ttf","fonts/LouisGeorgeCafe/Louis George Cafe Italic.ttf","fonts/LouisGeorgeCafe/Louis George Cafe Light Italic.ttf","fonts/LouisGeorgeCafe/LouisGeorgeCafe.ttf","fonts/LouisGeorgeCafe/LouisGeorgeCafeBold.ttf","fonts/LouisGeorgeCafe/LouisGeorgeCafeLight.ttf","fonts/RandyGG/randy-gg-bold.ttf","fonts/RandyGG/randy-gg.ttf","images/favicon.png","images/favicon.svg"]),
	mimeTypes: {".json":"application/json",".ttf":"font/ttf",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.bc7654c3.js","app":"_app/immutable/entry/app.67db4ab0.js","imports":["_app/immutable/entry/start.bc7654c3.js","_app/immutable/chunks/scheduler.3a2ff664.js","_app/immutable/chunks/singletons.acb731db.js","_app/immutable/entry/app.67db4ab0.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.3a2ff664.js","_app/immutable/chunks/index.d1b0ad94.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-7c2b3153.js')),
			__memo(() => import('./chunks/1-892a62e7.js')),
			__memo(() => import('./chunks/2-94e28bb7.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
