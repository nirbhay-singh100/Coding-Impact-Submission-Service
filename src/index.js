const fastify = require("fastify")({ logger: false });
const app = require("./app");

const PORT = 3000;

fastify.register(app);

fastify.listen({ port: PORT }, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server is running at port : ${PORT}`);
});
