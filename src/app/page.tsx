import { AppSidebar } from "@/components/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <>
      <AppSidebar/>
      <SidebarTrigger/>
      <main className="h-screen w-screen flex justify-center items-center">
        HOME
      </main>
    </>
  );
}
