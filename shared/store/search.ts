import { devtools } from 'zustand/middleware'
import { Product } from '@prisma/client'
import { create } from 'zustand'

type SearchType = {
	value: string
	focus: boolean
	products: Product[]
	setValue: (value: string) => void
	setFocus: (value: boolean) => void
	setProducts: (value: Product[]) => void
}

export const useSearch = create<SearchType>()(
	devtools(set => ({
		value: '',
		focus: false,
		products: [],
		setValue: value => set({ value }),
		setFocus: value => set({ focus: value }),
		setProducts: value => set({ products: value }),
	}))
)
