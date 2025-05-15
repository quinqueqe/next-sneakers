'use client'

import React from 'react'
import { Search } from 'lucide-react'
import { useClickAway, useDebounce } from 'react-use'
import { useSearch } from '@/store/search'
import { cn } from '@/lib'
import Image from 'next/image'
import { Api } from '@/services/api-client'

export const SearchProduct = () => {
	const { inputValue, products, focus, setInputValue, setProducts, setFocus } =
		useSearch(state => state)
	const ref = React.useRef(null)
	useClickAway(ref, () => {
		setFocus(false)
		setInputValue('')
	})

	useDebounce(
		async () => {
			const { data } = await Api.products.search(inputValue)
			setProducts(data)
		},
		150,
		[inputValue]
	)
	return (
		<>
			{focus && (
				<div className='fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30' />
			)}
			<div
				ref={ref}
				className='flex relative z-31 items-center pl-5 py-4 rounded-2xl bg-[#f9f9f9] w-[650px] max-w-[650px] relative'
			>
				<div className='border-r-2 pr-3'>
					<Search size={18} className='text-[#c0c0c0] ' />
				</div>
				<input
					type='text'
					onFocus={() => setFocus(true)}
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
					placeholder='Поиск...'
					className='placeholder:text-[#c0c0c0] pl-3 w-[650px] max-w-[650px]'
				/>
				{products.length > 0 && (
					<div
						className={cn(
							'absolute w-[650px] max-w-[650px] bg-white rounded-xl shadow-md transition-all duration-200 invisible opacity-0 z-31 py-3',
							focus && 'visible opacity-100 mt-2',
							'top-[60px] left-0'
						)}
					>
						{products.map(product => (
							<div key={product.id}>
								<div className='group flex gap-4 items-center pl-5 cursor-pointer py-[5px] hover:bg-primary/10'>
									<Image
										className='hover:bg-bg-primary/10'
										src={product.imageUrl}
										alt='img'
										width={40}
										height={30}
									/>
									<p className='text-[16px] font-bold'>{product.title}</p>
									<p className='text-[14px] text-[#858585]'>
										{product.price} ₽
									</p>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</>
	)
}
