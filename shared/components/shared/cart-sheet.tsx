import React from 'react'

import { Sheet, SheetContent, SheetTrigger } from '@/shared/components/ui/sheet'
import { cn } from '@/shared/lib'

type Props = {
	children: React.ReactNode
}

export const CartSheet = ({ children }: Props) => {
	return (
		<Sheet>
			<SheetTrigger>{children}</SheetTrigger>
			<SheetContent
				className={cn(
					'p-0 m-0 gap-0 justify-between pb-0',
					'[&>button:last-child]:hidden' // скрыл дефолтный крестик для закрытия окна
				)}
			>
				<div>
					<div className='p-5'>
						<p className='font-bold text-[24px]'>Корзина</p>
					</div>
					<ul className='flex flex-col gap-5 overflow-auto'>
						
						<li className='p-5 bg-white'>tovar</li>
					</ul>
				</div>
				<div className='ml-0 pl-0 mr-0 pr-0 pb-0 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] bg-white '>
					<div className='p-[20px]'>footer</div>
				</div>
			</SheetContent>
		</Sheet>
	)
}
