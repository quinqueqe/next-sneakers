import React from 'react'
import Image from 'next/image'
import { CartButton, Container, SearchProduct } from './'
import { User } from 'lucide-react'
import { Button } from '../ui'

export const Header = () => {
	return (
		<div className='border-b-2 border-solid border-[#eaeaea]'>
			<Container>
				<div className='flex justify-between items-center py-8 '>
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
						<Button
							variant={'outline'}
							className='flex items-center gap-1 w-[120px]'
						>
							<User size={16} />
							Войти
						</Button>

						<CartButton />
					</div>
				</div>
			</Container>
		</div>
	)
}
