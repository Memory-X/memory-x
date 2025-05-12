import type { VectorStore } from "./vector-store.js";

export interface MemoryOptions {
	userId: string;
	vectorStore: VectorStore;
}
