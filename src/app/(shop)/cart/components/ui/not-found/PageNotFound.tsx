import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import Link from "next/link"


export const NotProductInCart = () => {
    return (
        <div className="flex justify-center">
        <div className='border-2 rounded-2xl flex flex-row p-4'>
            <div className='p-4'>
                <ExclamationTriangleIcon color='orange' width={100} height={100} />
            </div>
            <div className='flex flex-col p-4 ' >
                <span className='text-2xl text-start font-bold'>
                    There are no products
                </span>
                <p className='text-2xl text-start font-normal mt-4'>
                    Please, try again or back to the <Link className=" hover:text-sky-400 hover:no-underline underline underline-offset-2" href="/">home</Link>
                </p>
            </div>
        </div>
        </div>
    )
}
