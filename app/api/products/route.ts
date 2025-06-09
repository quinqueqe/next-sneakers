import prisma from '@/prisma/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
	try {
		const products = await prisma?.product.findMany()
		return NextResponse.json(products)
	} catch (error) {
		console.log('[GET_PRODUCTS_ERROR]', error)
	}
}
