import NavLinks from "@/app/ui/admin/nav-links";
import SignOutButton from "./signout-button";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="mb-2 flex h-20 items-end justify-start rounded-md bg-gray-200 p-4 md:h-40">
        <div className="text-center w-32 text-gray-400 md:w-40">Admin neve</div>
      </div>
      <div className="flex flex-col justify-between space-y-2 md:grow md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <div className="hidden md:block">Sign Out</div>
          </button>
          <SignOutButton />
        </form>
      </div>
    </div>
  );
}
