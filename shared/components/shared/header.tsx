import React from 'react'
import Image from 'next/image'
import { Container, SearchProduct } from './'
import { ArrowRight, ShoppingCart, User } from 'lucide-react'
import { Button } from '../ui'

export const Header = () => {
	return (
		<div className='border-b-2 border-solid border-[#eaeaea]'>
			<Container>
				<div className='flex justify-between items-center py-10 '>
					<div className='flex items-center gap-4'>
						<Image
							src='/assets/images/logo.png'
							width={40}
							height={40}
							alt='logo'
						/>
						<div className='flex flex-col'>
							<p className='font-black text-[25px]'>Next Sneakers</p>
						</div>
					</div>
					<SearchProduct />
					<div className='flex items-center gap-4'>
						<Button variant={'outline'} className='flex items-center gap-1'>
							<User size={16} />
							Войти
						</Button>

						<Button
							variant={'default'}
							className='group relative flex items-center'
						>
							<b>520 ₽</b>
							<span className='h-full w-[1px] bg-white/30 mx-3' />
							<div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
								<ShoppingCart size={16} className='relative' strokeWidth={2} />
								<b>3</b>
							</div>
							<ArrowRight
								size={20}
								className='absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
							/>
						</Button>
					</div>
				</div>
			</Container>
		</div>
	)
}
