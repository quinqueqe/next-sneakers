import { Product } from '@prisma/client'
import { create } from 'zustand'

interface SearchState {
	inputValue: string
	products: Product[]
	focus: boolean
	setInputValue: (value: string) => void
	setProducts: (value: Product[]) => void
	setFocus: (value: boolean) => void
}

export const useSearch = create<SearchState>()(set => ({
	inputValue: '',
	products: [],
	focus: false,
	setInputValue: value => set({ inputValue: value }),
	setProducts: value => set({ products: value }),
	setFocus: value => set({ focus: value }),
}))
