

import { TopMenu } from "@/components/ui/top-menu/TopMenu";
import { Toaster } from "sonner";



export default async function MainLayout({ children }: { children: React.ReactNode }) {


    return (
        <>
            <header>
                <TopMenu />
            </header>
            <main className="min-h-screen ">
                <div className="px-2 sm:px-10 py-6">
                    <Toaster/>
                    {children}
                </div>
            </main>
        </>
    );
}