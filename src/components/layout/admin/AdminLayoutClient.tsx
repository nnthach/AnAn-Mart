import { AdminHeader } from '@/components/layout/admin/AdminHeader';
import { AdminSidebar } from '@/components/layout/admin/AdminSidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { TooltipProvider } from '@/components/ui/tooltip';

export default function AdminLayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <AdminSidebar />
        <SidebarInset>
          <AdminHeader />
          <main className="bg-muted/30 flex-1 p-6">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}
