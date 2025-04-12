import Koa from "koa";
const Router = require("koa-router");
const cors = require("@koa/cors");
const { koaBody } = require("koa-body");
const json = require("koa-json");
const app = new Koa();
const router = new Router();
import compose from "koa-compose";

router.prefix("/api");

router.get("/", (ctx) => {
  ctx.body = "Hello";
});

router.get("/api", (ctx) => {
  const params = ctx.request.query; // 获取请求参数
  ctx.body = { name: params.name };
  console.log(params);
});

router.get("/async", async (ctx) => {
  let result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("async");
    }, 1000);
  });
  ctx.body = result;
});

router.post("/post", async (ctx) => {
  let { body } = ctx.request;
  console.log(body);
  console.log(ctx.request);
  ctx.body = {
    ...body,
  };
});



const middleware=compose([
  koaBody(),
  cors(), // 允许跨域(默认所有请求都允许跨域,可以传入参数来指定允许跨域的请求)
  json({ pretty: false, param: "pretty" })
])


app.use(router.routes()).use(router.allowedMethods()); // 允许所有方法;
app.use(middleware);
app.listen(3000);
