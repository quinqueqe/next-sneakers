import prisma from '@/prisma/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
	const q = req.nextUrl.searchParams.get('q')
	const products = await prisma?.product.findMany({
		where: {
			title: {
				contains: q!,
				mode: 'insensitive',
			},
		},
		take: 12,
	})
	return NextResponse.json(products)
}
