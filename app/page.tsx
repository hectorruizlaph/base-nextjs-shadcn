import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Image
        alt="Freestyle Logo"
        src="/darwin-statue.png"
        width={340}
        height={340}
        className="opacity-10 w-48"
      />
    </div>
  );
}
