// client side component
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'
import AppSidebar from './_components/AppSidebar'

const WorkspaceProvider = ({children}) => {
    return (
        <SidebarProvider>
            <SidebarTrigger />
            <AppSidebar />
            <div>{children}</div>
        </SidebarProvider>
    )
}

export default WorkspaceProvider