'use client'

import Link from 'next/link';
import Image from 'next/image'
import Slider from "react-slick";
import bag from "../../../../public/BAG.avif"




export const ShowSlideShowMobile = () => {

    const settings = {
        className: "",
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
    };

    return (
        <section className='overflow-hidden grid grid-cols-1 lg:hidden py-5 my-7'>
            <div className='rounded-md border bg-[#F5F5F5]'>

                <Slider {...settings}>
                    <Link href={'/'}>
                        <Image src={bag} alt="image" width={430} className='m-[0.5rem]' />
                    </Link>
                    <Link href={'/'}>
                        <Image src={bag} alt="image" width={430} className='m-[0.5rem]' />
                    </Link>
                    <Link href={'/'}>
                        <Image src={bag} alt="image" width={430} className='m-[0.5rem]' />
                    </Link>
                    <Link href={'/'}>
                        <Image src={bag} alt="image" width={430} className='m-[0.5rem]' />
                    </Link>
                </Slider>

            </div>
        </section>
    );
}