const {} = require("fastify");
const authRouter = require("./auth");

/**
 * @param {fastify.FastifyInstance} fastify
 */

async function meRouter(fastify) {
  fastify.get("/", (require, reply) => {
    reply.send("hello world");
  });
}

module.exports = meRouter;
