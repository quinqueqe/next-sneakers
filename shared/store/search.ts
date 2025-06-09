import { create } from 'zustand'

type SearchType = {
	value: string
	setValue: (value: string) => void
}

export const useSearch = create<SearchType>(set => ({
	value: '',
	setValue: value => set({ value }),
}))
