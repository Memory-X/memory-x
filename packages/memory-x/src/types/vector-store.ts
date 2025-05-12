export interface VectorStore {
	add(key: string, value: string): Promise<void>;
	search(key: string, value: string): Promise<string>;
}
