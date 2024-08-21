'use client'

import Link from "next/link"


export const Footer = () => {
    return (
        <footer className="flex w-full justify-center text-xs py-10">
                <Link
                    href={"/"}
                >
                    <span className={`antialiased font-bold`}>Your Next
                    </span>
                    <span>| Store </span>
                    <span>© {new Date().getFullYear()} </span>
                </Link>

                <Link
                    className="mx-3"
                    href={"/"}
                >
                    Privacidad & legal
                </Link>

                <Link
                    className="mx-3"
                    href={"/"}
                >
                    Ubicaciones
                </Link>
        </footer>
    )
}
