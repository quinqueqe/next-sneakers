import { create } from 'zustand'

type ModalType = {
	openModalProduct: boolean
	setOpenModalProduct: (value: boolean) => void
}

export const useModal = create<ModalType>()(set => ({
	openModalProduct: false,
	setOpenModalProduct: value => set({ openModalProduct: value }),
}))
