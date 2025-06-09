import { Container, ProductItem } from '.'

export const ProductsList = () => {
	return (
		<Container>
			<h2 className='font-bold text-[36px] py-10'>Все кроссовки</h2>
			<ul className='grid grid-cols-4 gap-8 pb-10'>
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
			</ul>
		</Container>
	)
}
