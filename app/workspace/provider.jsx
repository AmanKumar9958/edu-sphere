// client side component
import { SidebarProvider, SidebarTrigger } from '../../components/ui/sidebar'
import React from 'react'
import AppSidebar from './_components/AppSidebar'

const WorkspaceProvider = ({children}) => {
    return (
        <SidebarProvider>
            {/* Place the trigger outside the sidebar for visibility */}
            <div style={{
                position: 'fixed',
                top: '1rem',
                left: '1rem',
                zIndex: 2000
            }}>
                <SidebarTrigger />
            </div>
            <AppSidebar />
            <div>{children}</div>
        </SidebarProvider>
    )
}

export default WorkspaceProvider