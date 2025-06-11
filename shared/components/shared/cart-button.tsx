import React from 'react'
import { cn } from '@/shared/lib'
import { Button } from '../ui'
import { ArrowRight } from 'lucide-react'

export const CartButton = () => {
	const quantityProducts = 1
	return (
		<Button
			variant={'default'}
			className='group relative  flex items-center w-[140px]'
		>
			<b className='text-[16px] font-bold border-r-[2px] border-solid border-[rgba(255,255,255,0.77)] pr-2'>
				Корзина
			</b>
			<div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
				{/* <ShoppingCart size={16} className='relative' strokeWidth={2} /> */}
				<b
					className={cn(
						'text-[16px] font-bold pt-[2px]',
						quantityProducts < 10 && 'pl-3',
						quantityProducts >= 10 && 'pl-2'
					)}
				>
					{quantityProducts}
				</b>
			</div>
			<ArrowRight
				size={20}
				className={cn(
					'absolute right-4 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
				)}
			/>
		</Button>
	)
}
