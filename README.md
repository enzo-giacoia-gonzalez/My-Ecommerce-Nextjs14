
# next-store

Next-store es un ecommerce donde los usuarios pueden comprar ropa. El objetivo principal al desarrollar esta página fue mejorar mis habilidades tanto en el front-end como en el back-end. En el front-end, utilicé tecnologías como Next.js, Zustand, React Hook Form, Clsx, Radix UI y TailwindCSS. Para el back-end, utilicé Server Actions de Next.js, junto con PostgreSQL, Prisma y Zod para la gestión de datos y validación. Además, implementé herramientas como Stripe para pagos, Cloudinary para el manejo de imágenes, Clerk para autenticación de usuarios, React Slick para los sliders y Sonner para las notificaciones.


## Deployment
1. Clonar el repositorio
2. Crear una copia del archivo ".env.template" y renombrarlo a ".env" y cambiar las variables de entorno
3. Instalar dependencias "npm install"
4. Levanta la base de datos "docker compose up -d"
5. Correr las migraciones de prisma "npx prisma migrate dev"
6. Ejecutar seed "npm run seed"
7. Correr el proyecto "npm run dev


## Environment Variables

DB_USER=postgres
DB_NAME=my-teslo-shop
DB_PASSWORD=123456
DATABASE_URL=""
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/auth/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/auth/sign-up"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
CLERK_SECRET_KEY=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""

# https://dashboard.stripe.com/apikeys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51Q7Grn020t3DdONWL8wPeJpXiZ20YuXoxf7P8LpKCeCJhdCtljxlSJ0S0jXoH47BKiaKnOMpN5sFZYkE8w2IcJYc00IE5Cv6gI
STRIPE_SECRET_KEY=sk_test_51Q7Grn020t3DdONWZ1YmShLsGN3el08uhOUoLIY1v7C5xRbLq2F6mCfWEwENBppFqwM4JTWKnC9gg6nZh637qwk500oX9EAZmy
# Set this environment variable to support webhooks — https://stripe.com/docs/webhooks#verify-events
# STRIPE_WEBHOOK_SECRET=whsec_12345



## Features

- Carrousel de imágenes
- Paginación de productos
- Busqueda de productos segun su categoría
- Agregar y eliminar elementos del carrito
- Pasarela de pagos a través de Stripe
- Login o register con Clerk cuando accedes a la ruta cart
 
 y mucho mas!


## Tech Stack 

**Client:** Next js, Zustand, React Hook Form, Clsx, Radix UI, TailwindCSS

**Server:** Server actions(Next js), PostgresSQL, Prisma, Zod

**Additional tools:**  Stripe, Cloudinary, Clerk, React Slick, Sonner


## Screenshots

![App Screenshot](./public/readme/foto%201.png)
![App Screenshot](./public/readme/foto%202.png)

