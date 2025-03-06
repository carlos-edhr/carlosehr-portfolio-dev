// import { LoginButton } from "@/components/auth/login-button";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { Poppins } from "next/font/google";
import Hero from "./_components/hero";
// import Navbar from "./_components/navbar";

// const font = Poppins({
//   subsets: ["latin"],
//   weight: ["600"],
// });

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      {/* <Navbar /> */}
      <Hero />
    </main>
  );
}
