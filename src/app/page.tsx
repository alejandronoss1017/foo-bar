import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <main>
      {/* To solve th error just remove the --turbo flag in run dev script or 
      add the "use client" directive at the top of the file to use it */}
      <Button>Click me</Button>
    </main>
  );
}
