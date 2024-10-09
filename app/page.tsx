import Form from "./components/Form";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row h-full max-w-7xl justify-center w-full">
      <div className="min-h-80 md:min-h-full md:min-w-[8.5rem] xl:min-w-[14rem] relative ">
        <div className="p-5 absolute md:relative mt-8 md:mt-0 md:flex items-center w-full h-full">
          <Form />
        </div>
      </div>
      <div className="h-full flex w-full items-center md:p-6">
        <Image
          src="/banner.png"
          width={1000}
          height={760}
          className="h-full md:w-full md:h-4/5 object-cover md:rounded-xl"
          alt="Living Room"
        />
      </div>
    </main>
  );
}
