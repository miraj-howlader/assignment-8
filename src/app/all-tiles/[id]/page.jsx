import { getSingleTiles } from "@/lib/data"
import Image from "next/image"

const TilesDetailsPage = async ({ params }) => {
  const { id } = await params

  const singleTiles = await getSingleTiles(id)

  if (!singleTiles) {
    return <div className="p-10">Tile not found</div>
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 border mt-14 mb-34">
      <div className="grid md:grid-cols-2 gap-10 items-start">

        <div className="relative w-full h-125 md:h-full rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={singleTiles.image}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            alt={singleTiles.title}
            className="object-cover hover:scale-105 transition duration-500"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold leading-tight">
            {singleTiles.title}
          </h1>

          <p className="text-gray-500 text-sm leading-relaxed">
            {singleTiles.description}
          </p>

          <div className="bg-gray-100 rounded-xl p-4 space-y-2 text-sm">
            <p><span className="font-semibold">Category:</span> {singleTiles.category}</p>
            <p><span className="font-semibold">Price:</span> ${singleTiles.price}</p>
            <p><span className="font-semibold">Currency:</span> {singleTiles.currency}</p>
          </div>

          <div className="flex gap-6 text-sm font-medium">
            <div className="bg-pink-100 px-3 py-1 rounded-full">
              ❤️ {singleTiles.material}
            </div>
            <div className="bg-blue-100 px-3 py-1 rounded-full">
              📏 {singleTiles.dimensions}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TilesDetailsPage