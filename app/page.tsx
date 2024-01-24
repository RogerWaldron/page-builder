import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/SignUpUserSteps";
import Header from "@/components/Header";
import { cookies } from "next/headers";
import { ModeToggle } from "@/components/ThemeSwitcher";

export default async function Index() {
  const cookieStore = cookies();

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex flex-col items-center flex-1 w-full gap-20">
      <nav className="flex justify-center w-full h-16 border-b border-b-foreground/10">
        <div className="flex items-center justify-between w-full max-w-4xl p-3 text-sm">
          <DeployButton />
          <div className="flex items-center justify-between gap-10">
            <ModeToggle />
            {isSupabaseConnected && <AuthButton />}
          </div>
        </div>
      </nav>
      <div className="flex flex-col flex-1 max-w-4xl gap-20 px-3 opacity-0 animate-in">
        <Header />
        <main className="flex flex-col flex-1 gap-6">
          <h2 className="mb-4 text-4xl font-bold">Next steps</h2>
          {isSupabaseConnected ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
        </main>
      </div>

      <footer className="flex justify-center w-full p-8 text-xs text-center border-t border-t-foreground/10">
        <p className="text-sm">
          <a
            className="flex px-3 py-2 no-underline border rounded-md hover:bg-btn-background-hover"
            href="https://github.com/RogerWaldron"
            target="_blank"
            rel="noreferrer"
          >
            <span>&copy;</span> 2024 Built by Roger Waldron
          </a>
        </p>
      </footer>
    </div>
  );
}
