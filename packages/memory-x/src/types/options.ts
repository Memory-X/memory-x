import type {createMemory} from "../create/create-memory.js";
import type { VectorStore } from "./vector-store.js";

/**
 * The options for the MemoryX instance.
 *
 * @remarks
 * This interface defines the options that can be passed to the MemoryX constructor. {@link createMemory}
 *
 * @public
 */
export interface MemoryOptions {
	vectorStore: VectorStore;
}

/**
 * The options for the VectorStore instance.
 *
 * @remarks
 * This interface defines the options that can be passed to the VectorStore constructor. {@link VectorStore}
 *
 * @public
 */
interface VectorStoreOptions {
	userId: string;
}

/**
 * The options for the VectorStore add method.
 *
 * @remarks
 * This interface defines the options that can be passed to the VectorStore add method. {@link VectorStore.add}
 *
 * @public
 */
export interface VectorStoreAddOptions extends VectorStoreOptions {
	message: string;
}

/**
 * The options for the VectorStore search method.
 *
 * @remarks
 * This interface defines the options that can be passed to the VectorStore search method. {@link VectorStore.search}
 *
 * @public
 */
export interface VectorStoreSearchOptions extends VectorStoreOptions {
	query: string;
}
