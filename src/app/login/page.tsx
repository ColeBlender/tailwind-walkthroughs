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
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-white">
      <img
        src="/login-img.webp"
        className="absolute -z-10 size-full object-cover"
      />

      <div className="w-full max-w-[400px] rounded-3xl border border-white bg-white/20 p-8 backdrop-blur">
        <h1 className="mb-8 text-center text-3xl">Login</h1>

        <form className="flex flex-col" action={handleLoginAction}>
          <input
            type="text"
            className="h-10 w-full border-b border-white bg-transparent outline-none placeholder:text-white"
            placeholder="Username"
          />
          <input
            type="password"
            className="mt-10 h-10 w-full border-b border-white bg-transparent outline-none placeholder:text-white"
            placeholder="Password"
          />

          <div className="mt-16 flex items-center justify-center gap-2">
            <input type="checkbox" />
            <p className="text-sm">I agree to the terms and conditions</p>
          </div>

          <button
            className="mx-auto mb-6 mt-8 h-12 w-56 rounded-2xl bg-orange-500 text-xl font-semibold disabled:bg-orange-500/50"
            disabled={isPending}
          >
            {isPending ? <Loader2 className="mx-auto animate-spin" /> : "Login"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default LoginPage;
