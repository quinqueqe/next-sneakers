import { create } from 'zustand'

type SearchType = {
	value: string
	focus: boolean
	setValue: (value: string) => void
	setFocus: (value: boolean) => void
}

export const useSearch = create<SearchType>(set => ({
	value: '',
	focus: false,
	setValue: value => set({ value }),
	setFocus: value => set({ focus: value }),
}))
