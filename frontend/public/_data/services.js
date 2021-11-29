const Cache = require("@11ty/eleventy-cache-assets");
require("dotenv").config();

async function fetchData(apiPath) {
  const url = `http://localhost:1337${apiPath}`;

  try {
    let json = await Cache(url, {
      duration: "5s",
      type: "json",
    });
    return json;
  } catch (e) {
    console.error(`[API] error fetching ${url}`);
    return null;
  }
}

module.exports = async function () {
  // TODO: make a forEach apiPaths
  const services = await fetchData("/services");
  return services;
};
