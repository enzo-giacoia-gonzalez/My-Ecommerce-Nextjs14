'use client'

import Link from 'next/link';
import Image from 'next/image'
import { Categories } from '@/interface';
import Slider from 'react-slick';





export const ShowSlideShow = ({ categories }: Categories) => {

    const settings = {
        className: "",
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
    };



    return (
        <section className='overflow-hidden hidden lg:grid lg:grid-cols-1 py-5 my-7'>
            <div className='rounded-md border bg-[#F5F5F5] lg:flex lg:flex-col'>

                <Slider {...settings}>
                    {
                        categories.map(category => (
                            <Link className='hover:opacity-85' key={category.id} href={`category/${category.name.toLowerCase()}`}>
                                <Image src={category.img ? category.img.startsWith('http')
                                    ? category.img
                                    : `/categories/${category.img}`
                                    : `/img/placeholder.jpg`} alt={category.name} width={430} height={430} className='m-[0.5rem]' />
                                   
                            </Link>
                        ))
                    }
                </Slider>
            </div>
        </section>
    );
}
