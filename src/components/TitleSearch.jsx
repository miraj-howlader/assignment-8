"use client"

import { useState } from "react"
import { Input } from "@heroui/react"
import TilesCard from "@/components/TilesCard"

export default function TilesSearch({ data }) {
  const [search, setSearch] = useState("")

  const filteredTiles = data.filter(tile =>
    tile.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      
      <div className="flex items-center justify-center mb-6">
        <Input
          placeholder="Search Title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md border border-gray-300"
        />
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {filteredTiles.map((tile) => (
          <div
            key={tile.id}
            className="transform hover:-translate-y-1 transition duration-300"
          >
            <TilesCard tile={tile} />
          </div>
        ))}
      </div>
    </>
  )
}