"use client";

import { Loader2 } from "lucide-react";
import { useTransition } from "react";

function LoginPage() {
  const [isPending, startTransition] = useTransition();

  const handleLoginAction = (formData: FormData) => {
    startTransition(async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
    });
  };

  return (
    <main className="flex flex-col min-h-screen justify-center items-center px-4 text-white">
      <img
        src="/login-img.webp"
        className="absolute -z-10 size-full object-cover"
      />

      <div className="w-full max-w-[400px] bg-white/20 backdrop-blur rounded-3xl border border-white p-8">
        <h1 className="text-center text-3xl mb-8">Login</h1>

        <form className="flex flex-col" action={handleLoginAction}>
          <input
            type="text"
            className="w-full h-10 bg-transparent border-b border-white placeholder:text-white outline-none"
            placeholder="Username"
          />
          <input
            type="password"
            className="w-full h-10 bg-transparent border-b border-white placeholder:text-white mt-10 outline-none"
            placeholder="Password"
          />

          <div className="flex items-center justify-center gap-2 mt-16">
            <input type="checkbox" />
            <p className="text-sm">I agree to the terms and conditions</p>
          </div>

          <button
            className="bg-orange-500 w-56 h-12 rounded-2xl mx-auto mt-8 font-semibold text-xl mb-6 disabled:bg-orange-500/50"
            disabled={isPending}
          >
            {isPending ? <Loader2 className="animate-spin mx-auto" /> : "Login"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default LoginPage;
