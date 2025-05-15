'use client'
import React from 'react'
import { useSearch } from '@/store/search'
import { Container, ProductItem } from './'

export const ProductsList = () => {
	const inputValue = useSearch(state => state.inputValue)
	const fetchGetProducts = useSearch(state => state.fetchGetProducts)
	const products = useSearch(state => state.products)
	React.useEffect(() => {
		fetchGetProducts(inputValue)
	}, [inputValue])
	return (
		<Container>
			<h2 className='font-bold text-[36px] py-10'>Все кроссовки</h2>
			<ul className='grid grid-cols-4 gap-8 pb-10'>
				{products.map(product => (
					<ProductItem key={product.id} {...product} />
				))}
			</ul>
		</Container>
	)
}
