import type {
	VectorStoreAddOptions,
	VectorStoreSearchOptions,
} from "../types/options.js";
import type { VectorStore } from "../types/vector-store.js";

/**
 * InMemory is a simple in-memory vector store adapter.
 *
 * @remarks
 * This class is a simple in-memory vector store adapter that stores messages in memory.
 * It is used for testing and demonstration purposes.
 *
 * @public
 * @beta
 */
export class InMemory implements VectorStore {
	private store: Record<string, string> = {};

	constructor() {
		this.store = {};
	}

	async add({ userId, message }: VectorStoreAddOptions) {
		this.store[userId] = message;
	}

	async search({ userId, query }: VectorStoreSearchOptions) {
		const result = this.store[userId];

		if (!result) {
			return "";
		}
		return result;
	}
}
