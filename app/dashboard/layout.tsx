import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { cookies } from "next/headers";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
export default async function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    // const cookieStore = await cookies()
    // const defaultOpen = cookieStore.get("sidebar:state")?.value === "true"
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    if (!user && user?.email !== 'visurasurajitha@gmail.com') {
        return redirect('/') // need to edit this
    }
    return (

          <SidebarProvider >
            <AppSidebar />
            <main className="w-screen h-screen bg-blue-50 dark:bg-blue-950">
                <SidebarTrigger />
                {children}
            </main>
          </SidebarProvider>

    );
  }

  