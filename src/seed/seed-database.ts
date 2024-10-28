
import prisma from '../lib/prisma';
import { categories } from './seed-categories';
import { countries } from './seed-countries';
import { initialData } from './seed.products';







async function main() {

    await prisma.product.deleteMany()
    await prisma.category.deleteMany()
    await prisma.country.deleteMany()

    const category = categories.map(category => ({
        id: category.id,
        name: category.name,
        img: category.img
    }))

    await prisma.category.createMany({
        data: category
    })



    const countrie = countries.map(countrie => ({
        id: countrie.id,
        name: countrie.name
    }))

    await prisma.country.createMany({
        data: countrie
    })

    const products = initialData.products.map(product => ({
        title: product.title,
        description: product.description,
        img: product.img,
        slug: product.slug,
        inStock: product.inStock,
        price: product.price,
        gender: product.gender,
        sizes: product.sizes,
        categoryId: product.categoryId
    }))

    await prisma.product.createMany({
        data: products
    })

    






    console.log("seed ejecutado correctamente")
}





(() => {

    if (process.env.NODE_ENV === "production") return

    main()

})()