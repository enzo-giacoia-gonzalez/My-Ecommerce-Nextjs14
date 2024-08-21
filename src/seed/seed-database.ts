import prisma from '../lib/prisma';
import { categories } from './seed-categories';
import { countries } from './seed-countries';






async function main() {


    await prisma.category.deleteMany()
    await prisma.country.deleteMany()

    const category = categories.map(category => ({
        id: category.id,
        name: category.name
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





    console.log("seed ejecutado correctamente")
}





(() => {

    if (process.env.NODE_ENV === "production") return

    main()

})()