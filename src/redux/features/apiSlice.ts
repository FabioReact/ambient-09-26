import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Hero } from '@/types/hero'
import { createHero, getHeroesByCriteria } from '@/api/heroes'

// Define our single API slice object
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  endpoints: builder => ({
    getHeroes: builder.query<Hero[], void>({
        query: () => '/heroes'
    }),
    getHeroesByCriteria: builder.query<Hero[], { name: string, alignment: string, gender: string }>({
        query: ({ name, alignment, gender }) => {
          const params = new URLSearchParams();
          if (name) params.set('name_like', name);
          if (alignment) params.set('biography.alignment_like', alignment);
          if (gender) params.set('appearance.gender_like', `^${gender}`);
          return `/heroes?${params.toString()}`
        }
    }),
    getHeroesByFirstLetter: builder.query<Hero[], string>({
      query: (letter) => `/heroes?name_like=^${letter}`
    }),
    createHero: builder.mutation<Hero, Omit<Hero, 'id'>>({
      query: (hero) => ({
        url: '/heroes',
        method: 'POST',
        body: hero
      })
    })
  })
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetHeroesQuery, useGetHeroesByFirstLetterQuery, useCreateHeroMutation, useLazyGetHeroesByCriteriaQuery } = apiSlice