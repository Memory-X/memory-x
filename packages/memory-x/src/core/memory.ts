import type { MemoryOptions } from "../types/options.js";
import type { VectorStore } from "../types/vector-store.js";

export class MemoryX {
	private userId: string;
	private vectorStore: VectorStore;

	constructor(memoryOptions: MemoryOptions) {
		this.userId = memoryOptions.userId;
		this.vectorStore = memoryOptions.vectorStore;
	}

	async add(value: string): Promise<void> {
		await this.vectorStore.add(this.userId, value);
	}

	async search(value: string): Promise<string> {
		return await this.vectorStore.search(this.userId, value);
	}
}
