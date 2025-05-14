import { MemoryX } from "../core/memory.js";
import type { MemoryOptions } from "../types/options.js";

/**
 * Creates a new instance of MemoryX.
 *
 * @remarks
 * This is a factory function that returns public facing methods to interact with the MemoryX library.
 *
 * @param options - The options for the MemoryX instance. {@link MemoryOptions}
 * @returns An object with the add and search methods.
 *
 * @public
 */
export const createMemory = (options: MemoryOptions) => {
	const memory = new MemoryX(options);

	return {
		add: memory.add.bind(memory),
		search: memory.search.bind(memory),
	};
};
