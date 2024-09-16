import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const images = [
    { src: "/CSS_Gradient.png", href: "/css-gradient" },
    { src: "/QR_Code.png", href: "/qr-code" },
    { src: "/Date_Generator.png", href: "/date-generator" },
    { src: "/MD_Reader.png", href: "/md-reader" },
    { src: "/Password_Generator.png", href: "/password-generator" },
    { src: "/Favicon.png", href: "/favicon-generator" },
  ];

  return (
    <main className="bg-36 flex flex-col justify-center items-center min-h-screen p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl">
        {images.map((image, index) => (
          <div
            key={index}
            className="aspect-square relative overflow-hidden rounded-lg"
          >
            <Link href={image.href}>
              <div className="relative w-full h-full">
                <Image
                  className="border-2 border-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                  src={image.src}
                  fill
                  style={{ objectFit: "cover" }}
                  alt={`Outil ${image.src.split("/").pop()?.split(".")[0]}`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
