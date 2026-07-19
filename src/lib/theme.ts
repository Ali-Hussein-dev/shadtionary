import { createServerFn } from '@tanstack/react-start'
import { getCookie, setCookie } from '@tanstack/react-start/server'
import * as z from 'zod'

const storageKey = 'app-theme'

export const getThemeServerFn = createServerFn().handler(
  () => (getCookie(storageKey) ?? 'auto') as Theme,
)
const themeSchema = z.union([
  z.literal('light'),
  z.literal('dark'),
])
export type Theme = z.infer<typeof themeSchema>

export const setThemeServerFn = createServerFn()
  .validator(themeSchema)
  .handler(({ data }) => setCookie(storageKey, data))