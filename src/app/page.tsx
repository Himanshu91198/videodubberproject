import Image from "next/image";
import { Index } from "./components/home/Index";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Index />
    </main>
  );
}
