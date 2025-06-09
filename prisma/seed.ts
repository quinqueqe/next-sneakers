import prisma from './prisma'
import { products } from './constants'

async function up() {
	await prisma.product.createMany({
		data: products,
	})
}
async function down() {
	await prisma.product.deleteMany() // вместо raw-запроса
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
