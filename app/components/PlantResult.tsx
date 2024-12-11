// app/components/PlantResult.tsx
export default function PlantResult({ plant }: { plant: any }) {
  const cleanText = (text: string) => {
    return text 
      ? text
          .replace(/[\*_]/g, '')
          .replace(/\s+/g, ' ')
          .trim()
      : 'Not available'
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-xl w-full space-y-4">
      <h2 className="text-3xl font-bold text-green-800 border-b-2 border-green-200 pb-2">
        {cleanText(plant.name)}
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold text-green-700">Scientific Name</h3>
          <p>{cleanText(plant.scientificName)}</p>
        </div>

        <div>
          <h3 className="font-semibold text-green-700">Plant Family</h3>
          <p>{cleanText(plant.family)}</p>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-green-700 mb-2">Description</h3>
        <p className="text-gray-700">{cleanText(plant.description)}</p>
      </div>
    </div>
  )
}