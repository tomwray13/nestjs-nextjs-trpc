# NestJS + Trpc

A super simple implementation of [how one could use trpc in NestJS](https://github.com/trpc/trpc/discussions/1504).

Few quick notes:

- ⚠️ Not production ready! Very much a quick spin up and needs improvements.
- Uses NestJS dependency injection
- Uses a NestJS monorepo to show how one could easily make rpc calls between different NestJS backends
- Setup is done in Express, tweaks required if you use Fastify
- The trpc client is made in a NestJS library so could be accessed by multiple backends
- 🙏 Please open a PR for any further advancements

## Give it a spin:

```
npm install

nest start server -w
nest start client -w
```

Make a request to `localhost:4000` - this controller uses a service which makes an trpc procedure call and returns the response.
