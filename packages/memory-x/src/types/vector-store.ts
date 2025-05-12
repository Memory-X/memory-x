import type {
	VectorStoreAddOptions,
	VectorStoreSearchOptions,
} from "./options";

export interface VectorStore {
	add({ userId, message }: VectorStoreAddOptions): Promise<void>;
	search({ userId, query }: VectorStoreSearchOptions): Promise<string>;
}
