import { Sidebar, SidebarContent, SidebarHeader, SidebarMenuAction, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { ModeToggle } from "./theme-toggle"
import { UserButton } from "@clerk/nextjs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Gamepad, Gem, Grid2X2, MoreHorizontal, Skull, Swords, UserIcon, Wand } from "lucide-react"

export const sidebarItems = [
  {
    icon: Gamepad,
    label: "Jogar",
    href: "/",
    hasActions: false,
    actions: [],
  },
  {
    icon: UserIcon,
    label: "Personagens",
    href: "/characters",
    hasActions: true,
    actions: [
      {
        label: "Criar",
        href: "/characters/new",
      },
      {
        label: "Meus Personagens",
        href: "/characters",
      },
    ],
  },
  {
    icon: Grid2X2,
    label: "Mesas",
    href: "/tables",
    hasActions: true,
    actions: [
      {
        label: "Criar",
        href: "/tables/new",
      },
      {
        label: "Ver Mesas",
        href: "/tables",
      },
    ],
  },
  {
      icon: Swords,
      label: "Armas",
      href: "/weapons",
      hasActions: true,
      actions: [
        {
          label: "Criar",
          href: "/weapons/new",
        },
        {
          label: "Arsenal",
          href: "/weapons",
        },
      ],
  },
  {
    icon: Wand,
    label: "Magias",
    href: "/spells",
    hasActions: true,
    actions: [
      {
        label: "Criar",
        href: "/spells/new",
      },
      {
        label: "Biblioteca",
        href: "/spells",
      },
    ],
  },
  {
    icon: Skull,
    label: "Monstros",
    href: "/monsters",
    hasActions: true,
    actions: [
      {
        label: "Criar",
        href: "/monsters/new",
      },
      {
        label: "Bestiário",
        href: "/monsters",
      },
    ],
  },
  {
    icon: Gem,
    label: "Itens",
    href: "/items",
    hasActions: true,
    actions: [
      {
        label: "Criar",
        href: "/items/new",
      },
      {
        label: "Inventário",
        href: "/items",
      },
    ],
  }
]

export function AppSidebar() {
  return (
    <Sidebar
      variant="floating"
    >
      <SidebarHeader
      >
        <div
          className="flex items-center justify-between p-4"
        >
          <UserButton/>
          <ModeToggle/>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {sidebarItems.map((item, index) => (
          <SidebarMenuItem
            key={index}
          >
            <SidebarMenuButton   asChild>
              <a>
                {item.icon && <item.icon />}
                <span>{item.label}</span>
              </a>
            </SidebarMenuButton>
            {item.hasActions && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuAction>
                    <MoreHorizontal />
                  </SidebarMenuAction>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="right" align="start">
                  {item.actions.map((action, index) => (
                    <DropdownMenuItem
                      key={index}
                    >
                      {action.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}  
          </SidebarMenuItem>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
