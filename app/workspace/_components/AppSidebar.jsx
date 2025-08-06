import Image from "next/image"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "../../../components/ui/sidebar"

import React from 'react'
import { Button } from "../../../components/ui/button"
import { title } from "process"
import { Book, Compass, LayoutDashboard, PencilRulerIcon, UserCircle2Icon, WalletCards } from "lucide-react"
import path from "path"
import Link from "next/link"

const SidebarOptions = [
    {
        title: "Dashboard",
        icon: LayoutDashboard,
        path: '/#'
    },
    {
        title: "My Learning",
        icon: Book,
        path: '/workspace/my-courses'
    },
    {
        title: "Explore Courses",
        icon: Compass,
        path: '/workspace/explore'
    },
    {
        title: 'AI Tools',
        icon: PencilRulerIcon,
        path: '/workspace/ai-tools'
    },
    {
        title: "Billing",
        icon: WalletCards,
        path: '/workspace/billing'
    },
    {
        title: "Profile",
        icon: UserCircle2Icon,
        path: '/workspace/profile'
    }
]

const AppSidebar = () => {
    return (
        <Sidebar>
            <SidebarHeader>
                <div className="flex items-center gap-2">
                    <Image src={'/logo.svg'} alt="logo" width={30} height={30} />
                    <h1 className="text-2xl font-bold">EduSphere</h1>
                </div>
            </SidebarHeader>
            <SidebarContent className={"px-2"}>
                <SidebarGroup />
                    <Button className={"hover:cursor-pointer"}>+ New Course</Button>
                <SidebarGroup />
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {SidebarOptions.map((option, index) => (
                                <SidebarMenuItem key={index}>
                                    <SidebarMenuButton asChild>
                                        <Link href={option.path}>
                                            <option.icon />
                                            <span>{option.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}

export default AppSidebar