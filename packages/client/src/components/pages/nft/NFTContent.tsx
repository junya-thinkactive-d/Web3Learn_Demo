import React from "react";

import Image from "next/image";

import { Content } from "@/types/content";

type Props = {
  content: Content;
};

const NFTContent = ({ content }: Props) => {
  return (
    <div className="w-96 h-auto p-4">
      <div className="relative w-full mb-8 h-60">
        {content.imgUrl && (
          <>
            <div className="absolute left-12 top-12 text-2xl p-2  bg-gradient-to-r from-blue-400 to-red-400 border-2 border-white z-50">
              {content.title} NFT
            </div>
            <Image
              src={content.imgUrl}
              layout="fill"
              alt="image"
              objectFit="cover"
              priority={true}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default NFTContent;
