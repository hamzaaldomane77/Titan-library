/**
 * Authors Module
 * Centralized exports for the authors module
 */

// Types
export type { Author, Address, Company, Geo } from './types/author.types'

// API
export { fetchAuthors, fetchAuthorById } from './api/authorApi'

// Hooks
export { useAuthors, useAuthor, authorKeys } from './hooks/useAuthors'

