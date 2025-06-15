'use client'

import React from 'react'
import { Product } from '@prisma/client'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/shared/components/ui/dialog'
import { useRouter } from 'next/navigation'

type Props = {
	children?: React.ReactNode
	product: Product
}

export const ProductModal = ({ product, children }: Props) => {
	const router = useRouter()
	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			<DialogTrigger>{children}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{product.id}, {product.name}</DialogTitle>
					<DialogDescription>
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}
