import { AppSidebar } from "@/components/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Characters(){
  return (
    <>
      <AppSidebar/>
      <SidebarTrigger
        className="mt-2"
      />
      <main className="h-screen w-screen py-2 px-12">
        <div className="">
          <h1 className="font-black text-2xl">Personagens</h1>
        </div>
      </main>
    </>
  );
}