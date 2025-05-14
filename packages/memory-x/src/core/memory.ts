import type {
	MemoryOptions,
	VectorStoreAddOptions,
	VectorStoreSearchOptions,
} from "../types/options.js";
import type { VectorStore } from "../types/vector-store.js";

/**
 * Core class for orchestrating memory operations in Memory-X.
 *
 * @remarks
 * This class acts as the central coordinator for all memory-related logic.
 * It integrates with vector stores and other services such as embeddings, transformations,
 * or any future processing pipelines needed for `add` or `search` operations.
 *
 * Consumers of this class interact with a unified API {link createMemory} that abstracts
 * components remain fully modular and pluggable.
 *
 * @internal
 */
export class MemoryX {
	private vectorStore: VectorStore;

	constructor(memoryOptions: MemoryOptions) {
		this.vectorStore = memoryOptions.vectorStore;
	}

	/**
	 * Stores a memory in the vector store for the specified user.
	 *
	 * @param options - Contains the user ID and message to store {link VectorStoreAddOptions}
	 */
	async add({ userId, message }: VectorStoreAddOptions): Promise<void> {
		await this.vectorStore.add({ userId, message });
	}

	/**
	 * Searches for the most relevant memory's for the specified user and query.
	 *
	 * @param options - Contains the user ID and search query {link VectorStoreSearchOptions}
	 * @returns A relevant memory as a string.
	 */
	async search({ userId, query }: VectorStoreSearchOptions): Promise<string> {
		return await this.vectorStore.search({ userId, query });
	}
}
