/**
 * React Query Hook for Authors
 * Custom hook for fetching and managing authors data
 */
import { useQuery } from '@tanstack/react-query'
import { fetchAuthors, fetchAuthorById } from '../api/authorApi'
import type { Author } from '../types/author.types'

/**
 * Query key factory for authors
 */
export const authorKeys = {
  all: ['authors'] as const,
  lists: () => [...authorKeys.all, 'list'] as const,
  list: (filters: string) => [...authorKeys.lists(), { filters }] as const,
  details: () => [...authorKeys.all, 'detail'] as const,
  detail: (id: number) => [...authorKeys.details(), id] as const
}

/**
 * Hook to fetch all authors
 */
export const useAuthors = () => {
  return useQuery<Author[], Error>({
    queryKey: authorKeys.lists(),
    queryFn: fetchAuthors,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000 // 10 minutes (formerly cacheTime)
  })
}

/**
 * Hook to fetch a single author by ID
 * @param id - Author ID
 */
export const useAuthor = (id: number) => {
  return useQuery<Author, Error>({
    queryKey: authorKeys.detail(id),
    queryFn: () => fetchAuthorById(id),
    enabled: !!id, // Only fetch if id is provided
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000
  })
}

