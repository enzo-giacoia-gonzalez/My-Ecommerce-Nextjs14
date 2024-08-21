

import { checkRole } from "@/utils/roles";
import { redirect } from "next/navigation";

export default function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {




  if (!checkRole("admin")) {
    redirect("/");
  }



  return (
    <>
      {children}
    </>
  );
}