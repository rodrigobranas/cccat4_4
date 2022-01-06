import DatabaseRepositoryFactory from "./infra/factory/DatabaseRepositoryFactory";
import FastifyAdapter from "./infra/http/FastifyAdapter";
import RouteConfig from "./infra/http/RouteConfig";

const repositoryFactory = new DatabaseRepositoryFactory();
const fastifyAdapter = new FastifyAdapter();
new RouteConfig(fastifyAdapter, repositoryFactory);
fastifyAdapter.listen(3000);
