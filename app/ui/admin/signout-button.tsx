import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default function SignOutButton() {
  const handleSignOut = async () => {
    "use server";
    console.log("!!!SIGN OUT!!!");

    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect("/login");
  };
  return (
    <button
      onClick={handleSignOut}
      className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
    >
      Sign out
    </button>
  );
}
