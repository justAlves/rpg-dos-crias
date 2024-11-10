import { AppSidebar } from "@/components/app-sidebar";
import CharacterForm from "@/components/character-form";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function NewCharacter(){
  return (
    <>
      <AppSidebar/>
      <SidebarTrigger
        className="mt-2"
      />
      <main className="h-screen w-screen py-2 px-12">
        <div className="">
          <h1 className="font-black text-2xl">Criador de personagens</h1>
        </div>
        <CharacterForm/>
      </main>
    </>
  );
}