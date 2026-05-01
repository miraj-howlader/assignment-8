
import TilesSearch from '@/components/TitleSearch'
import { getAllTiles } from '@/lib/data'
import React from 'react'

const AllTiles = async () => {
  const allTilesData = await getAllTiles()

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">

      {/* TITLE */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight">
          Explore All Tiles 🧱
        </h1>
        <p className="text-gray-500 mt-2">
          Discover modern, creative and premium tile collections
        </p>
      </div>

      {/* SEARCH + GRID (ONLY ONCE) */}
      <TilesSearch data={allTilesData} />

    </section>
  )
}

export default AllTiles