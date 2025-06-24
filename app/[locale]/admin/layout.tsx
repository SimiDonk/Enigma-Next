import SideNav from "@/app/[locale]/ui/admin/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-white">
      <div className="flex h-screen w-full">
        <SideNav />
        <main className="flex flex-col w-full overflow-hidden">{children}</main>
      </div>
    </div>
  );
}
