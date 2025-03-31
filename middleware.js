const Koa = require("koa");
const app = new Koa();
const middleware = function (ctx, next) {
  console.log("middleware");
  console.log(ctx.request.path);
  //   next(); // 没有next()下面的中间件不会执行
};
const middleware1 = function (ctx, next) {
  console.log("middleware1");
  console.log(ctx.request.path);
  next();
  console.log("middleware1", "end");
};
const middleware2 = function (ctx, next) {
  console.log("middleware2");
  console.log(ctx.request.path);
  next();
  console.log("middleware2", "end");
};

app.use(middleware1);
app.use(middleware2);
app.use(middleware);

app.listen(3000);
