import { Metadata } from "next";
import Link from "next/link";
import { UserAuthForm } from "@/components/user-auth-form";

export const metadata: Metadata = {
  title: "Login | FundBridge",
  description: "Login to your FundBridge account",
};

export default function LoginPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Login to your account
          </p>
        </div>
        <UserAuthForm mode="signin" />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/signup"
            className="hover:text-brand underline underline-offset-4"
          >
            Don&apos;t have an account? Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
