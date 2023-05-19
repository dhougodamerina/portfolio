import Image from "next/image";

const PageHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <p className=" text-gray font-thin text-6xl m-10 max-sm:text-4xl">
        Amanda Rachel
      </p>
      <div className=" w-[1380px] h-[700px] max-sm:h-[400px] max-sm:w-[300px] max-md:h-[600px] max-md:w-[600px] max-lg:h-[800px] max-lg:w-[800px]">
        <Image
          src="/images/person.jpg"
          alt="Picture of the author"
          width={1200}
          height={700}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default PageHeader;
