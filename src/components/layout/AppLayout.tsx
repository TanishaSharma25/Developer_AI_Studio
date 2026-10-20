import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen">
      <AppHeader />

      <div className="flex">
        <AppSidebar />

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
