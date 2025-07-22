import { loginAction } from "@/lib/actions/login";
// import { cookies } from "next/headers";
import { useState } from "react";
import { toast } from "sonner";

export default function useLogin() {
  // State
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const login = async ({ email, password }: { email: string; password: string }) => {
    setIsPending(true);
    setError(null);

    try {
      if (email && password) {
        // Login action
        const result = await loginAction({ email, password });

        if (result.success) {
          toast.success("Login successful!");
          window.location.href = "/dashboard";
        } else {
          toast.error(result.message || "Login failed");
        }
      } else {
        toast.error("Invalid email or password");
        throw new Error("Invalid email or password");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err || "something get wrong");
      setError(err);
    } finally {
      setIsPending(false);
    }
  };

  return { isPending, error, login };
}
