

import { TopMenu } from "@/components/ui/top-menu/TopMenu";



export default async function MainLayout({ children }: { children: React.ReactNode }) {

    
    return (
        <>
            <header>
                <TopMenu />
            </header>
            <main className="min-h-screen">
                <div className="px-10 py-6">
                    {children}
                </div>
            </main>
        </>
    );
}