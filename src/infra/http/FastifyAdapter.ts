import fastify from "fastify";
import Http from "./Http";

export default class FastifyAdapter implements Http {
	app: any;
	
	constructor () {
		this.app = fastify({});
	}

	on(url: string, method: string, fn: any): void {
		this.app[method](url, async function (req: any, rep: any) {
			const output = await fn(req.params, req.body);
			rep.send(output);
		});
	}

	listen(port: number): void {
		this.app.listen(port);
	}

}