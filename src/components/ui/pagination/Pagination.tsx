

'use client';

import { TrackNextIcon, TrackPreviousIcon } from '@radix-ui/react-icons';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { NotFound } from './not-found/NotFound';



export default function Pagination({ totalPages }: { totalPages: number }) {

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter()
    const currentPage = Number(searchParams.getAll('page')) || 1;


    const createPageURL = (pageNumber: number) => {
        if (pageNumber < 1 || pageNumber > totalPages) return
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        router.replace(`${pathname}?${params.toString()}`)
    };


    return (
        <div>
            {!totalPages ?
                <NotFound /> :
                <ul className='flex justify-center items-center border-2 rounded-full p-6' >
                    <li onClick={() => { createPageURL(currentPage - 1) }} className='cursor-pointer p-2 mr-2'><TrackPreviousIcon width={30} height={30} /></li>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                        currentPage == pageNumber ? <li key={pageNumber} className='cursor-pointer p-2 mr-2 bg-blue-400 rounded-[27px] text-white'>{pageNumber}</li> : <li key={pageNumber} className='cursor-pointer p-2'>{pageNumber}</li>
                    ))}
                    <li onClick={() => { createPageURL(currentPage + 1) }} className='cursor-pointer p-2'><TrackNextIcon width={30} height={30} /></li>
                </ul>}
        </div>
    )

}