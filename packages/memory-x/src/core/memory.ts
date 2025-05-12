import type {
	MemoryOptions,
	VectorStoreAddOptions,
	VectorStoreSearchOptions,
} from "../types/options.js";
import type { VectorStore } from "../types/vector-store.js";

export class MemoryX {
	private vectorStore: VectorStore;

	constructor(memoryOptions: MemoryOptions) {
		this.vectorStore = memoryOptions.vectorStore;
	}

	async add({ userId, message }: VectorStoreAddOptions): Promise<void> {
		await this.vectorStore.add({ userId, message });
	}

	async search({ userId, query }: VectorStoreSearchOptions): Promise<string> {
		return await this.vectorStore.search({ userId, query });
	}
}
