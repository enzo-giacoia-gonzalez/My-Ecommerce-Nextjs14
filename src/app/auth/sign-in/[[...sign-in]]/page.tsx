import { SignIn } from "@clerk/nextjs";



export default function Page() {



  return (
    <section className="flex justify-center my-16">
        <SignIn signUpUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL}/>
    </section>
  
)
}