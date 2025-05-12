import type { VectorStore } from "./vector-store.js";

export interface MemoryOptions {
	vectorStore: VectorStore;
}

interface VectorStoreOptions {
	userId: string;
}

export interface VectorStoreAddOptions extends VectorStoreOptions {
	message: string;
}

export interface VectorStoreSearchOptions extends VectorStoreOptions {
	query: string;
}
