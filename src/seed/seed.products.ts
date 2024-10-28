
interface SeedProduct {
    description: string;
    img: string;
    inStock: number[];
    price: number;
    sizes: ValidSizes[];
    slug: string;
    title: string;
    categoryId: ValidTypes;
    gender: 'men' | 'women' | 'kid' | 'unisex'
}


type ValidSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
type ValidTypes = 'SH' | 'PA' | 'HO' | 'HA';

interface SeedData {
    products: SeedProduct[],
}

export const initialData: SeedData = {

   
    products: [
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
            img: '1740176-00-A_0_2000.jpg',
            inStock: [100000,100000,100000,100000,100000,100000],
            price: 75,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
            slug: "mens_chill_crew_neck_sweatshirt",
            categoryId: 'SH',
            title: "Men’s Chill Crew Neck Sweatshirt",
            gender: 'men'
        },
        {
            description: "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
            img: '1740507-00-A_0_2000.jpg',
            inStock: [100000,100000,100000,100000,100000,100000],
            price: 200,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
            slug: "men_quilted_shirt_jacket",
            categoryId: 'SH',
            title: "Men's Quilted Shirt Jacket",
            gender: 'men'
        },

        {
            description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
            img: '1740250-00-A_0_2000.jpg',
            inStock: [100000,100000,100000,100000,0,0],
            price: 130,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
            slug: "men_raven_lightweight_zip_up_bomber_jacket",
            categoryId: 'SH',
            title: "Men's Raven Lightweight Zip Up Bomber Jacket",
            gender: 'men'
        },

        {
            description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Long Sleeve Tee features a subtle, water-based T logo on the left chest and our Tesla wordmark below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
            img:'1740280-00-A_0_2000.jpg',
            inStock:[0,0,100000,100000,100000,100000] ,
            price: 50,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
            slug: "men_turbine_long_sleeve_tee",
            categoryId: 'SH',
            title: "Men's Turbine Long Sleeve Tee",
            gender: 'men'
        },
        {
            description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Hoodie has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve with a french terry interior for versatility in any season. Made from 70% bamboo and 30% cotton.",
            img: '1740245-00-A_0_2000.jpg',
            inStock: [0,0,100000,100000,100000,100000],
            price: 115,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
            slug: "men_raven_lightweight_hoodie",
            categoryId: 'HO',
            title: "Men's Raven Lightweight Hoodie",
            gender: 'men'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Chill Pullover Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The unisex hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
            img: '1740051-00-A_0_2000.jpg',
            inStock: [0,0,100000,100000,100000,100000],
            price: 130,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
            slug: "chill_pullover_hoodie",
            categoryId: 'HO',
            title: "Chill Pullover Hoodie",
            gender: 'unisex'
        },
        {
            description: "The Unisex 3D Large Wordmark Pullover Hoodie features soft fleece and an adjustable, jersey-lined hood for comfort and coverage. Designed in a unisex style, the pullover hoodie includes a tone-on-tone 3D silicone-printed wordmark across the chest.",
            img: '8529107-00-A_0_2000.jpg',
            inStock: [0,0,100000,100000,100000,100000],
            price: 70,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
            slug: "3d_large_wordmark_pullover_hoodie",
            categoryId: 'HO',
            title: "3D Large Wordmark Pullover Hoodie",
            gender: 'unisex'
        },
        {
            description: "As with the iconic Tesla logo, the Cybertruck Graffiti Hoodie is a classic in the making. Unisex style featuring soft fleece and an adjustable, jersey-lined hood for comfortable coverage.",
            img: '7654420-00-A_0_2000.jpg',
            inStock: [100000,100000,100000,100000,0,0],
            price: 60,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
            slug: "cybertruck_graffiti_hoodie",
            categoryId: 'HO',
            title: "Cybertruck Graffiti Hoodie",
            gender: 'unisex'
        },
        {
            description: "The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.",
            img:'1657932-00-A_0_2000.jpg',
            inStock: [100000,0,100000,100000,0,0],
            price: 55,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
            slug: "relaxed_t_logo_hat",
            categoryId: 'HA',
            title: "Relaxed T Logo Hat",
            gender: 'unisex'
        },
        {
            description: "The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.",
            img:'1740417-00-A_0_2000.jpg',
            inStock: [100000,0,100000,100000,0,0],
            price: 65,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
            slug: "thermal_cuffed_beanie",
            categoryId: 'HA',
            title: "Thermal Cuffed Beanie",
            gender: 'unisex'
        },
        
        {
            description: "Cruise the playground in style with the Kids Corp Jacket. Modeled after the original Tesla Corp Jacket, the Kids Corp Jacket features the same understated style and high-quality materials but at a pint-sized scale.",
            img: '1506211-00-A_0_2000.jpg',
            inStock: [100000,100000,100000,100000,100000,0],
            price: 70,
            sizes:['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'] ,
            slug: "kids_corp_jacket",
            categoryId: 'SH',
            title: "Kids Corp Jacket",
            gender: 'kid'
        },
        {
            description: "Wear your Kids Cyberquad Bomber Jacket during your adventures on Cyberquad for Kids. The bomber jacket features a graffiti-style illustration of our Cyberquad silhouette and wordmark. With three zippered pockets and our signature T logo and Tesla wordmark printed along the sleeves, Kids Cyberquad Bomber Jacket is perfect for wherever the trail takes you. Made from 60% cotton and 40% polyester.",
            img: '1742702-00-A_0_2000.jpg',
            inStock:[100000,100000,0,100000,100000,100000],
            price: 65,
            sizes:['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'] ,
            slug: "kids_cyberquad_bomber_jacket",
            categoryId: 'SH',
            title: "Kids Cyberquad Bomber Jacket",
            gender: 'kid'
        },
    ]
}