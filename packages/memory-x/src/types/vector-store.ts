import type {
	VectorStoreAddOptions,
	VectorStoreSearchOptions,
} from "./options";

/**
 * Interface for implementing custom vector store adapters.
 *
 * @remarks
 * This interface defines the required methods any vector store must implement
 * to integrate with the Memory-X memory layer. It provides a standard contract.
 *
 * @example
 * ```ts
 * class ChromaVectorStore implements VectorStore {
 *   async add({ userId, message }) { ... }
 *   async search({ userId, query }) { ... }
 * }
 * ```
 *
 * @public
 */
export interface VectorStore {
	/**
	 * Add a message to the vector store for a given user.
	 *
	 * @param options - {link VectorStoreAddOptions}
	 */
	add({ userId, message }: VectorStoreAddOptions): Promise<void>;

	/**
	 * Search for the most relevant message(s) for a given user and query.
	 *
	 * @param options - {link VectorStoreSearchOptions}
	 * @returns The most relevant message as a string.
	 */
	search({ userId, query }: VectorStoreSearchOptions): Promise<string>;
}


