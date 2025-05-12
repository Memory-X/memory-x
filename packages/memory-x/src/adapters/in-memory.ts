import type {
	VectorStoreAddOptions,
	VectorStoreSearchOptions,
} from "../types/options.js";
import type { VectorStore } from "../types/vector-store.js";

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
