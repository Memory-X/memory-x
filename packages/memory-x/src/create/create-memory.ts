import { MemoryX } from "../core/memory.js";
import type { MemoryOptions } from "../types/options.js";

export const createMemory = (options: MemoryOptions) => {
	const memory = new MemoryX(options);

	return {
		add: memory.add.bind(memory),
		search: memory.search.bind(memory),
	};
};
