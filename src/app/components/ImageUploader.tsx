"use client";

import { useState } from "react";
import Image from "next/image";
import { Download } from "lucide-react";

interface ImageUploaderProps {
  imageUrl: string;
  onImageUpload: (imageUrl: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ imageUrl, onImageUpload }) => {
  const [preview, setPreview] = useState(imageUrl);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      onImageUpload(imageUrl);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <div className="relative flex items-center">
        <Download className="z-10" />
        <div className="absolute bg-customBeige p-3 rounded-full ml-2"></div>
      </div>

      <label className="block font-medium text-textColor font-bold">Logo:</label>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        id="logo-upload"
      />

      <label
        htmlFor="logo-upload"
        className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Escolher Imagem
      </label>

      {preview && (
        <Image
          src={preview}
          alt="Logo Preview"
          width={50}
          height={50}
          className="rounded-full border"
        />
      )}
    </div>
  );
};

export default ImageUploader;
