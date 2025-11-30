/** @type {import('@remix-run/dev').AppConfig} */
export default {
  serverModuleFormat: "esm",
  server: "./server/netlify.ts",
  serverBuildPath: "build/server/index.js",
  tailwind: true,
  ignoredRouteFiles: ["**/.*"],
};
