import { Header, ProductsList } from '@/components/shared'

export default async function Home() {
	const products = await prisma?.product.findMany({ take: 12 })
	return (
		<main>
			<Header />
			<ProductsList products={products} />
		</main>
	)
}
