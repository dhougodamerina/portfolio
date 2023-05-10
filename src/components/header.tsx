import Image from "next/image";

const PageHeader = () => {
  return (
    <div className=" w-[100vw] flex flex-col items-center justify-center bg-white">
      <div className="">
        <p className=" text-gray font-thin text-6xl m-10">Amanda Rachel</p>
      </div>
      <div className=" w-[1200px] h-[700px]">
        <Image
          src="/images/person.jpg"
          alt="Picture of the author"
          width={"1200"}
          height={"700"}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default PageHeader;
