"use client";

import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Loader2 } from "lucide-react";
import * as React from "react";
import { toast } from "sonner";

export function UserAuthForm({ className, mode = "signin", ...props }: any) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false);
  const formRef = React.useRef<HTMLFormElement>(null);

  // Function to handle test users
  const handleTestUser = async (testEmail = "123@test.com") => {
    const isGmailUser = testEmail === "test@gmail.com";
    setEmail(testEmail);
    setPassword("123456");
    
    // Create a Supabase client
    const supabase = createClient();
    
    try {
      // First check if the user exists
      const { data: existingUser, error: checkError } = await supabase.auth.signInWithPassword({
        email: testEmail,
        password: "123456",
      });
      
      if (!checkError) {
        console.log(`${isGmailUser ? "Gmail test" : "Test"} user exists, signing in`);
        toast.success(`${isGmailUser ? "Gmail test" : "Test"} user signed in`);
        
        // Redirect to application page
        window.location.href = "/application";
        return;
      }
      
      // If user doesn't exist, create it
      console.log(`${isGmailUser ? "Gmail test" : "Test"} user doesn't exist, creating`);
      const { data, error } = await supabase.auth.signUp({
        email: testEmail,
        password: "123456",
        options: {
          data: {
            name: isGmailUser ? "Test Gmail User" : "Test User",
            role: "tester",
          },
        },
      });
      
      if (error) {
        console.error(`Error creating ${isGmailUser ? "Gmail test" : "test"} user:`, error);
        toast.error(`Failed to create ${isGmailUser ? "Gmail test" : "test"} user: ${error.message}`);
        return;
      }
      
      // Check if email confirmation is required
      if (data?.user && data.user.identities?.length === 0) {
        toast.info("Email confirmation required. Please check your email.");
        return;
      }
      
      toast.success(`${isGmailUser ? "Gmail test" : "Test"} user created and signed in`);
      
      // Redirect to application page
      window.location.href = "/application";
    } catch (error) {
      console.error(`${isGmailUser ? "Gmail test" : "Test"} user error:`, error);
      toast.error(`${isGmailUser ? "Gmail test" : "Test"} user error`);
    }
  };

  // Function to handle the original test user
  const handleOriginalTestUser = () => handleTestUser("123@test.com");
  
  // Function to handle the Gmail test user
  const handleGmailTestUser = () => handleTestUser("test@gmail.com");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);

    // Check for test users
    if (email === "123@test.com" && password === "123456") {
      await handleTestUser("123@test.com");
      setIsLoading(false);
      return;
    }

    // Check for new test user
    if (email === "test@gmail.com" && password === "123456") {
      await handleTestUser("test@gmail.com");
      setIsLoading(false);
      return;
    }

    try {
      const supabase = createClient();
      
      if (mode === "signin") {
        console.log("Attempting to sign in with:", email);
        
        // Sign in with email and password
        const { error, data } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        
        if (error) {
          console.error("Sign in error:", error);
          setIsLoading(false);
          return toast.error("Authentication failed", {
            description: error.message || "Your sign in request failed. Please try again.",
          });
        }
        
        console.log("Sign in successful:", data);
        toast.success("Signed in successfully");
        
        // Submit the form to navigate to application page
        if (formRef.current) {
          formRef.current.submit();
        } else {
          // Fallback
          window.location.href = "/application";
        }
        
        return;
      } else {
        // Sign up with email and password
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/auth/callback`,
          },
        });
        
        setIsLoading(false);
        
        if (error) {
          return toast.error("Sign up failed", {
            description: error.message || "Your sign up request failed. Please try again.",
          });
        }
        
        return toast.success("Account created", {
          description: "Please check your email to verify your account.",
        });
      }
    } catch (error) {
      console.error("Authentication error:", error);
      setIsLoading(false);
      return toast.error("Something went wrong", {
        description: "An unexpected error occurred. Please try again.",
      });
    }
  }

  async function onSignInGithub() {
    if (isGitHubLoading) return;
    setIsGitHubLoading(true);
    
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: `${window.location.origin}/application`,
        },
      });
      
      if (error) {
        setIsGitHubLoading(false);
        return toast.error("GitHub authentication failed", {
          description: error.message,
        });
      }
    } catch (error) {
      setIsGitHubLoading(false);
      console.error("GitHub authentication error:", error);
      return toast.error("Something went wrong", {
        description: "An unexpected error occurred. Please try again.",
      });
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      {/* Test user buttons for development */}
      <div className="flex flex-col gap-2">
        <button
          type="button"
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
          onClick={handleOriginalTestUser}
        >
          Use Test User (123@test.com)
        </button>
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleGmailTestUser}
        >
          Use Gmail Test User (test@gmail.com)
        </button>
      </div>
      
      {/* This form will directly submit to /application after successful auth */}
      <form 
        ref={formRef}
        action="/application" 
        method="get" 
        onSubmit={handleSubmit}
      >
        <div className="grid gap-4">
          <div>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading || isGitHubLoading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div>
            <Input
              id="password"
              placeholder="Password"
              type="password"
              autoCapitalize="none"
              autoComplete={mode === "signin" ? "current-password" : "new-password"}
              disabled={isLoading || isGitHubLoading}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
          </div>

          <button
            type="submit"
            className={cn(buttonVariants())}
            disabled={isLoading || isGitHubLoading}
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {mode === "signin" ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </form>
      
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      
      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }))}
        onClick={onSignInGithub}
        disabled={isLoading || isGitHubLoading}
      >
        {isGitHubLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <GitHubLogoIcon className="mr-2 h-4 w-4" />
        )}{" "}
        Github
      </button>
      
      {/* Direct link as a last resort */}
      <div className="text-center mt-4">
        <a 
          href="/application" 
          className="text-blue-500 hover:text-blue-700 underline"
        >
          Go to Application Dashboard
        </a>
      </div>
    </div>
  );
}
