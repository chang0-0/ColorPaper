require('dotenv').config();

const { fastify } = require('fastify');
const app = fastify({ logger: true });

app.listen(process.env.PORT).then((value) => {
  console.log(value);
});
