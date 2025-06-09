import prisma from '@/prisma/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
	try {
		const params = req.nextUrl.searchParams.get('q') || ''
		const products = await prisma?.product.findMany({
			where: {
				name: {
					contains: params,
					mode: 'insensitive',
				},
			},
			take: 12,
		})
		return NextResponse.json(products)
	} catch (error) {
		console.log('[GET_PRODUCTS_ERROR]', error)
	}
}
