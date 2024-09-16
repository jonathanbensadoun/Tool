"use client";

import React, { useState, useRef } from "react";
import { toPng } from "html-to-image";
import Image from "next/image";
// import EmojiPicker from "emoji-picker-react";

const FaviconGenerator: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const faviconRef = useRef<HTMLDivElement>(null);

  // Gestion du téléchargement de l'image
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Gestion du téléchargement de la favicon
  const handleDownload = () => {
    if (faviconRef.current === null) return;
    toPng(faviconRef.current, { cacheBust: true, width: 48, height: 48 })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "favicon.ico";
        link.href = dataUrl;
        link.click();

        // Reset uploaded image
        setUploadedImage(null);
      })
      .catch((err) => {
        console.error("Error generating PNG:", err);
      });
  };

  return (
    <div className="bg-36 flex flex-col justify-center items-center h-screen">
      <div className="xl:w-1/3 bg-white p-4 rounded-lg bg-opacity-20 flex flex-col justify-center items-center">
        <h1 className="pb-10 text-3xl text-shadow">Générateur de Favicon</h1>
        <div className="mb-4 flex flex-col justify-center items-center">
          <label className="block mb-2 font-medium">
            Télécharger une image ou un emoji
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mb-4 border-none bg-purple-700 text-white rounded-md p-2 bg-opacity-60"
          />
          {/* <div>
            <EmojiPicker
              previewConfig={{
                defaultEmoji: "🙂",
                defaultCaption: "Emoji",
                showPreview: false,
              }}
              onEmojiClick={(e, emoji) => {
                setUploadedImage(emoji.target as unknown as string);
              }}
            />
          </div> */}
        </div>

        {uploadedImage && (
          <div
            ref={faviconRef}
            className="flex flex-col justify-center items-center "
          >
            <Image
              src={uploadedImage}
              alt="Uploaded"
              width={48}
              height={48}
              className="w-12 h-12 rounded"
            />
          </div>
        )}
        {uploadedImage && (
          <p className="text-center mt-2">Favicon Preview (48x48)</p>
        )}
        <button onClick={handleDownload} className="py-2 button-37 mt-10">
          Télécharger le fichier favicon.ico
        </button>
      </div>
    </div>
  );
};

export default FaviconGenerator;
