import { createMemory } from "memory-x";
import { InMemory } from "memory-x/adapters";

async function main() {
	// initialize memory
	const memory = createMemory({
		vectorStore: new InMemory(),
	});

	// add memory
	await memory.add({ userId: "123", message: "hello" });

	// search memory
	const result = await memory.search({ userId: "123", query: "hello" });

	console.log("result: ", result);
}

main();
