import { getMe } from "@/service/getMe";
import DashboardSidebar from "./_components/DashboardSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";


const DashboardLayoutContent = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const user = await getMe();

  return (
    <div className="flex min-h-screen w-full">
      <DashboardSidebar user={user} />
       <header className="flex h-14 shrink-0 items-center gap-2  px-4">
          <SidebarTrigger />

         
        </header>
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayoutContent;