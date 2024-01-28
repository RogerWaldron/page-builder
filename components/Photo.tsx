"use client";

import Image from "next/image";
import { useState } from "react";
import PhotoModal from "./PhotoModal";
import { deletePhoto } from "@/actions/deletePhoto";

import {
  FileMinusIcon,
  HeartFilledIcon,
  HeartIcon,
} from "@radix-ui/react-icons";
import { addOrRemoveFavorite } from "@/actions/addOrRemoveFavorite";

interface PhotoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  photoName: string;
  isFavorited: boolean;
}

export default function Photo({
  src,
  alt,
  width,
  height,
  photoName,
  isFavorited = false,
}: PhotoProps) {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  function isFav() {
    return isFavorited ? "true" : "false";
  }

  return (
    <>
      <div
        style={{ width, height }}
        className="relative w-auto h-auto shadow-md border border-white border-opacity-80 rounded-lg overflow-hidden cursor-pointer"
      >
        <form
          action={deletePhoto}
          className="absolute bottom-2.5 right-10 z-10"
        >
          <input type="hidden" name="photoPath" value={src} />
          <button
            type="submit"
            className="bg-transparent border-none text-white cursor-pointer hover:text-red-500 hover:scale-110 transition duration-300"
          >
            <FileMinusIcon />
          </button>
        </form>

        <form
          action={addOrRemoveFavorite}
          className="absolute bottom-2.5 right-2.5 z-10"
        >
          <input type="hidden" name="photoName" value={photoName} />
          <input type="hidden" name="isFavorited" value={isFav()} />
          <button
            type="submit"
            className="bg-transparent border-none text-white cursor-pointer hover:text-green-500 hover:scale-110 transition duration-300"
          >
            {isFavorited ? <HeartFilledIcon /> : <HeartIcon />}
          </button>
        </form>

        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={{ objectFit: "cover", objectPosition: "center" }}
          onClick={() => setShowModal(true)}
        />
      </div>
      {showModal && <PhotoModal src={src} alt={alt} onClose={toggleModal} />}
    </>
  );
}
