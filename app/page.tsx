// app/page.tsx
'use client'

import { useState } from 'react'
import ImageUploader from './components/ImageUploader'
import PlantResult from './components/PlantResult'
import HowToUseSection from './components/HowToUseSection'

export default function Home() {
  const [plantInfo, setPlantInfo] = useState(null)

  const handleIdentify = async (file: File) => {
    const formData = new FormData()
    formData.append('image', file)

    try {
      const response = await fetch('/api/identify-plant', {
        method: 'POST',
        body: formData
      })
      const result = await response.json()
      setPlantInfo(result)
    } catch (error) {
      console.error('Plant identification error:', error)
    }
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center space-y-8 mb-12">
        <h1 className="text-4xl font-bold text-green-800">Plant Identifier</h1>
        <ImageUploader onIdentify={handleIdentify} />
        {plantInfo && <PlantResult plant={plantInfo} />}
      </div>
      <HowToUseSection />
    </div>
  )
}