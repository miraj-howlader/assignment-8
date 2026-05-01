export async function getAllTiles() {
    const res =await fetch('https://assignment-8-six-pink.vercel.app/data.json')
    const data = await res.json()
    return data
    
}

export async function getSingleTiles(id) {
  const res = await fetch("https://assignment-8-six-pink.vercel.app/data.json")

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  const data = await res.json()

  return data.find(tile => tile.id == id)
}