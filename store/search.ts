import { Api } from '@/services/api-client'
import { Product } from '@prisma/client'
import { create } from 'zustand'

enum Status {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}

interface SearchState {
	inputValue: string
	status: string
	products: Product[]
	setInputValue: (value: string) => void
	fetchGetProducts: (q: string) => void
}

export const useSearch = create<SearchState>()(set => ({
	inputValue: '',
	status: Status.LOADING,
	products: [],
	setInputValue: value => set({ inputValue: value }),
	fetchGetProducts: async q => {
		try {
			set({ status: Status.LOADING })
			const { data } = await Api.products.search(q)
			set({ products: data, status: Status.SUCCESS })
		} catch (error) {
			console.log(error)
			set({ status: Status.ERROR })
		}
	},
}))
