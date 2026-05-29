"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TextField, Label, InputGroup, Input, Button, Card } from "@heroui/react";
import { Eye, EyeSlash, ShieldKeyhole } from "@gravity-ui/icons";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import toast, { Toaster } from "react-hot-toast";
export default function SignUpPage() {
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSignUp = async (e) => {
    e.preventDefault();

    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const isLongEnough = password.length >= 8;

    if (!isLongEnough || !hasUppercase || !hasNumber) {
      toast.error("Password must be at least 8 characters with 1 uppercase and 1 number");
      return;
    }

    try {
      setLoading(true);
      const { error } = await authClient.signUp.email({
        email, password, name, image: photoUrl,
      });

      if (error) {
        toast.error(error.message || "Registration failed!");
      } else {
        toast.success("Account Created Successfully!");
        router.push("/login");
      }
    } catch (err) {
      toast.error("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B0B0F] px-4">
      <Toaster position="top-right" />

      <Card className="w-full max-w-sm bg-[#141416] border border-white/10 p-8 shadow-2xl rounded-3xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Create <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">Account</span>
          </h1>
          <p className="text-sm text-zinc-400">Join Hire Loop to unlock premium features</p>
        </div>

        <form onSubmit={handleSignUp} className="flex flex-col gap-4">
          <Input required label="FULL NAME" placeholder="Enter Your Full Name" variant="bordered" value={name} onChange={(e) => setName(e.target.value)} />
          <Input required label="PHOTO URL" placeholder="Enter Your Photo URL" variant="bordered" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} />
          <Input required label="EMAIL ADDRESS" type="email" placeholder="name@example.com" variant="bordered" value={email} onChange={(e) => setEmail(e.target.value)} />

          {/* Password Field */}
          <TextField isRequired name="password" className="flex flex-col gap-1.5">
            <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Password</Label>
            <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900 focus-within:border-primary transition-colors">
              <ShieldKeyhole className="text-zinc-400 pointer-events-none" size={16} />
              <Input
                type={isVisible ? "text" : "password"}
                placeholder="Choose a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100"
              />
              <button
                className="focus:outline-none text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition"
                type="button"
                onClick={toggleVisibility}
                aria-label="toggle password visibility"
              >
                {isVisible ? <EyeSlash size={18} /> : <Eye size={18} />}
              </button>
            </InputGroup>
            <p className="text-sm text-zinc-400">Must be at least 8 characters with 1 uppercase and 1 number</p>
          </TextField>

          <Button type="submit" isLoading={loading} className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold h-12 mt-2">
            Sign Up →
          </Button>
        </form>

        <div className="text-center text-sm text-zinc-400 mt-6">
          Already have an account? <Link href="/auth/signin" className="text-violet-400 font-bold hover:underline">Log In</Link>
        </div>

        <div className="flex items-center my-6 gap-2">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-zinc-500 text-xs uppercase font-semibold">OR CREDENTIALS</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <Button
          onClick={() => authClient.signIn.social({ provider: "google", callbackURL: "/login" })}
          className="w-full h-12 text-white font-semibold bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 border border-white/10 hover:bg-white/10 transition-all"
          startContent={<FcGoogle className="text-xl" />}
        >
          Sign up with Google
        </Button>
      </Card>
    </div>
  );
}