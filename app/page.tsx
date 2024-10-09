import Form from "./components/Form";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row h-full max-w-7xl justify-center w-full lg:py-3 lg:px-20 xl:px-0">
      <div className="min-h-80 md:min-w-[8.5rem] xl:min-w-[14rem] relative">
        <div className="p-5 relative md:mt-0 md:flex items-center w-full h-full top-16 md:top-0">
          <Form />
        </div>
      </div>
      <div className="h-full flex w-full items-center md:px-6 min-h-[30rem]">
        <Image
          src="/banner.png"
          width={1000}
          height={760}
          className="h-full max-h-[45rem] md:w-full object-cover md:rounded-[2rem]"
          alt="Living Room"
        />
      </div>
    </main>
  );
}
