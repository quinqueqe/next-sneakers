import prisma from '@/prisma/prisma'
import { Container, ProductItem } from '.'

export const ProductsList = async () => {
	const products = await prisma.product.findMany()
	return (
		<Container>
			<h2 className='font-bold text-[36px] py-10'>Все кроссовки</h2>
			<ul className='grid grid-cols-4 gap-8 pb-10'>
				{products.map(product => (
					<ProductItem key={product.id} {...product} />
				))}
			</ul>
		</Container>
	)
}
