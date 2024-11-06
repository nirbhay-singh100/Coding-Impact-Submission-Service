const testController = require("../controllers/testController");

async function testRoutes(fastify, options) {
  fastify.get("/ping", testController);
}

module.exports = testRoutes;
