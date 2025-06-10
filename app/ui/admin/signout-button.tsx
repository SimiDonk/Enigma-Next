import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default function SignOutButton() {
  const handleSignOut = async () => {
    "use server";

    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect("/login");
  };
  return (
    <button
      onClick={handleSignOut}
      className="px-4 py-2 bg-red-500 text-white rounded"
    >
      Sign out
    </button>
  );
}
