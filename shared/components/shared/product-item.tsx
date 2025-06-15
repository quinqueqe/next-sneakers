import React from 'react'
import Image from 'next/image'
import { Button } from '../ui'
import Link from 'next/link'
import { Product } from '@prisma/client'

type Props = {
	product: Product
}

export const ProductItem = ({
	product: { id, name, price, imageUrl },
}: Props) => {
	return (
		<Link href={`/product/${id}`}>
			<li className='border-2 border-solid border-[#f3f3f3] rounded-[40px] text-start'>
				<div className='p-[30px] flex flex-col gap-[14px]'>
					<Image src={imageUrl} alt='img' width={250} height={180} />
					<p className='text-[20px]'>{name}</p>
					<div className='flex justify-between items-end'>
						<div>
							<p className='text-[16px] font-medium text-[#bdbdbd]'>Цена:</p>
							<p className='font-bold text-[18px]'>{price} руб</p>
						</div>
						<Button variant={'default'}>Выбрать</Button>
					</div>
				</div>
			</li>
		</Link>
	)
}
