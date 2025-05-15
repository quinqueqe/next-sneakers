import React from 'react'
import Image from 'next/image'
import { Plus } from 'lucide-react'

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
				<p className='text-[18px]'>Мужские Кроссовки Nike Blazer Mid Suede</p>
				<div className='flex justify-between items-center'>
					<div>
						<p className='text-[14px] font-medium text-[#bdbdbd]'>Цена:</p>
						<p className='font-bold text-[16px]'>12 999 руб</p>
					</div>
					<button className='w-[50px] h-[50px] bg-[#fff] rounded-[20px] border-2 border-solid border-[#f2f2f2] flex items-center justify-center'>
						<Plus className='text-[#d3d3d3]' size={25} />
					</button>
				</div>
			</div>
		</li>
	)
}
