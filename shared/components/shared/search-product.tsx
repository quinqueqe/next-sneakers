'use client'

import React from 'react'
import { Search } from 'lucide-react'
import { useSearch } from '@/shared/store/search'
import { useClickAway, useDebounce } from 'react-use'
import { Api } from '../services/api-client'

export const SearchProduct = () => {
	const { value, focus, products, setValue, setFocus, setProducts } =
		useSearch()
	const ref = React.useRef(null)
	useClickAway(ref, () => {
		setFocus(false)
		setValue('')
	})

	useDebounce(
		async () => {
			try {
				const { data } = await Api.products.search(value)
				setProducts(data)
			} catch (error) {
				console.log('[GET_SEARCH_PRODUCTS_ERROR]', error)
			}
		},
		150, // задержка при поиске продукта
		[value]
	)
	return (
		<div>
			{focus && (
				<div className='fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30' />
			)}
			<div
				ref={ref}
				className='flex relative z-31 items-center pl-5 py-4 rounded-2xl bg-[#f9f9f9] w-[650px] max-w-[650px]'
			>
				<div className='border-r-2 pr-3'>
					<Search size={18} className='text-[#c0c0c0] ' />
				</div>
				<input
					onClick={() => setFocus(true)}
					value={value}
					onChange={e => setValue(e.target.value)}
					type='text'
					placeholder='Поиск...'
					className='placeholder:text-[#c0c0c0] pl-3 w-[764px] max-w-[764px]'
				/>
			</div>
		</div>
	)
}
