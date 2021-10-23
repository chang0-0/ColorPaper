const {} = require("fastify");
const authRouter = require("./auth");
const meRouter = require("./me");

/**
 * @param {fastify.FastifyInstance} fastify
 */

async function routes(fastify) {
  fastify.register(meRouter, { prefix: "/me" });
  fastify.register(authRouter, { prefix: "/auth" });
}

module.exports = routes;
