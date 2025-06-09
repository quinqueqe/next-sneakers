import React from 'react'
import Image from 'next/image'
import { Button } from '../ui'

export const ProductItem = () => {
	return (
		<li className='border-2 border-solid border-[#f3f3f3] rounded-[40px]'>
			<div className='p-[30px] flex flex-col gap-[14px]'>
				<Image
					src='/assets/images/text-sneaker.png'
					alt='img'
					width={250}
					height={180}
				/>
				<p className='text-[20px]'>Мужские Кроссовки Nike Blazer Mid Suede</p>
				<div className='flex justify-between items-end'>
					<div>
						<p className='text-[16px] font-medium text-[#bdbdbd]'>Цена:</p>
						<p className='font-bold text-[18px]'>12 999 руб</p>
					</div>
					<Button variant={'default'}>Выбрать</Button>
				</div>
			</div>
		</li>
	)
}
