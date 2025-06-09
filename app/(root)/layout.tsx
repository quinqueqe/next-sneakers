import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Главная | Next Sneakers',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <main className='main'>{children}</main>
}
