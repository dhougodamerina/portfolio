import Link from "next/link";
import React from "react";

const DownloadPDF = () => {
  return (
    <div>
      <Link href={"/resume/amandaresume.pdf"} download>
        <button className=" border border-b-gray py-1 px-4 bg-gray text-white mt-5">
          Download Resume
        </button>
      </Link>
    </div>
  );
};

export default DownloadPDF;
