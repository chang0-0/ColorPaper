require("dotenv").config();

const { fastify } = require("fastify");
const routes = require("./routes");

// 로그를 출력하기 위해서는 fastify의 logger를 true값으로 설정해주어야 한다.
// logger는 미들웨어에 들어가기 전에 컴포넌트 state의 상태에 나와서
// reducer에 전달될 컴포넌트 state상태를 비교해주는 역할을 한다.
// logger를 통해서 컴포넌트가 어떻게 바귀고 있는지를 알수있고 만약 오류가 발생했다면 어디서 오류가 발생하는지에 대한
// 디버깅을 보다 쉽게 할 수 있도록 도와준다. 사용하고 안하고의 차이가 크다.
const app = fastify({ logger: true });

app.register(routes);

app.listen(process.env.PORT);
