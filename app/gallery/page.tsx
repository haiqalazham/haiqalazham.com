import Image from 'next/image'
import path from 'path'
import fs from 'fs'

export default function PhotoGallery() {
  // Function to dynamically load images from /app/gallery/posts/
  const getGalleryImages = () => {
    const galleryPath = path.join(process.cwd(), 'public/gallery/posts')
    return fs
      .readdirSync(galleryPath)
      .filter((file) => file.endsWith('.png'))
      .map((file) => `/gallery/posts/${file}`)
  }

  const images = getGalleryImages()

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Gallery</h1>
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
        {images.map((imagePath, index) => (
          <div key={index} className="rounded-lg shadow-md">
            <Image
              src={imagePath}
              alt={`Gallery image ${index + 1}`}
              width={400}
              height={600}
              className="rounded-md object-cover w-full h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
