/**
 * Author API Service
 * Functions for fetching author data from the API
 */
import axios from 'axios'
import { API_BASE_URL, API_ENDPOINTS } from '../../../config/api'
import type { Author } from '../types/author.types'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

/**
 * Fetch all authors/users from the API
 * @returns Promise<Author[]>
 */
export const fetchAuthors = async (): Promise<Author[]> => {
  try {
    const response = await apiClient.get<Author[]>(API_ENDPOINTS.users)
    return response.data
  } catch (error) {
    console.error('Error fetching authors:', error)
    throw error
  }
}

/**
 * Fetch a single author by ID
 * @param id - Author ID
 * @returns Promise<Author>
 */
export const fetchAuthorById = async (id: number): Promise<Author> => {
  try {
    const response = await apiClient.get<Author>(`${API_ENDPOINTS.users}/${id}`)
    return response.data
  } catch (error) {
    console.error(`Error fetching author ${id}:`, error)
    throw error
  }
}

