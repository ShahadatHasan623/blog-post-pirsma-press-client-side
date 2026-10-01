import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense } from "react";
import DashboardLayoutContent from "./DashboardLayoutContent";

const DashboardLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <Suspense fallback={<p>Loading...</p>}>
          <DashboardLayoutContent>
            {children}
          </DashboardLayoutContent>
        </Suspense>
      </SidebarProvider>
    </TooltipProvider>
  );
};

export default DashboardLayout;