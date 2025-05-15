import { products } from './constants/products'
import prisma from './prisma'
import { hashSync } from 'bcrypt'

async function up() {
	await prisma.user.createMany({
		data: [
			{
				fullName: 'User',
				email: 'user@test.ru',
				password: hashSync('111111', 10),
				verified: new Date(),
				role: 'USER',
			},
			{
				fullName: 'Admin',
				email: 'admin@test.ru',
				password: hashSync('111111', 10),
				verified: new Date(),
				role: 'ADMIN',
			},
		],
	})

	await prisma.product.createMany({
		data: products,
	})
}

async function down() {
	await prisma.user.deleteMany() // вместо raw-запроса
}

async function main() {
	try {
		await down() // очищаем базу данных
		await up() // заполняем базу данных
	} catch (e) {
		console.log(e)
	}
}

main() // Promise
	.then(async () => {
		await prisma.$disconnect
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
