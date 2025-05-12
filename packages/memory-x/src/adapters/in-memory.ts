import type { VectorStore } from "../types/vector-store.js";

export class InMemory implements VectorStore {
	private store: Record<string, string> = {};

	constructor() {
		this.store = {};
	}

	add(key: string, value: string) {
		this.store[key] = value;
	}

	search(key: string, _value: string) {
		const result = this.store[key];

		if (!result) {
			return "";
		}
		return result;
	}
}
