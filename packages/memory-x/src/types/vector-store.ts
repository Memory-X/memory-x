export interface VectorStore {
	add(key: string, value: string): void;
	search(key: string, value: string): string;
}
