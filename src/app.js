const fastifyPlugin = require("fastify-plugin");
const servicePlugin = require("./services/servicePlugin");

/***
 *  @param {Fastify object} fastify
 *  @param {*} options
 *
 */
async function app(fastify, options) {
  fastify.register(require("@fastify/cors"));

  // registering testRoute route

  fastify.register(servicePlugin);

  fastify.register(require("./routes/testRoutes"), { prefix: "/test" });

  // directly making plugin of testRoute will not work
  // because u will not be able to give prefix
  // register function will only give prefix if the first param is a function not a plugin
  // that is why we are first calling register for simple function
  // then for a plugin
}

module.exports = fastifyPlugin(app);
