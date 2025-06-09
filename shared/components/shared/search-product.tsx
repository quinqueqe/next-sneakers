import React from 'react'
import { Search } from 'lucide-react'

export const SearchProduct = () => {
	return (
		<div>
			<div className='flex relative z-31 items-center pl-5 py-4 rounded-2xl bg-[#f9f9f9] w-[650px] max-w-[650px] '>
				<div className='border-r-2 pr-3'>
					<Search size={18} className='text-[#c0c0c0] ' />
				</div>
				<input
					type='text'
					placeholder='Поиск...'
					className='placeholder:text-[#c0c0c0] pl-3 w-[764px] max-w-[764px]'
				/>
			</div>
		</div>
	)
}
