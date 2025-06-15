import prisma from '@/prisma/prisma'
import { ProductModal } from '@/shared/components'
import { notFound } from 'next/navigation'
import React from 'react'

type Props = {
	params: Promise<{ id: number }>
}

export default async function Product({ params }: Props) {
	const { id } = await params
	const product = await prisma.product.findUnique({
		where: {
			id,
		},
	})
	if (!product) {
		return notFound()
	}
	return (
		<>
			<ProductModal product={product} />
		</>
	)
}
