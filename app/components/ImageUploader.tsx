'use client'

import { useState, ChangeEvent } from 'react'
import Image from 'next/image'

interface ImageUploaderProps {
  onIdentify: (file: File) => void
}

export default function ImageUploader({ onIdentify }: ImageUploaderProps) {
  const [preview, setPreview] = useState<string | null>(null)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
        onIdentify(file)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="w-full max-w-md">
      <label 
        htmlFor="plant-upload" 
        className="block w-full border-2 border-dashed border-green-300 p-8 text-center cursor-pointer hover:bg-green-100 transition"
      >
        {preview ? (
          <Image 
            src={preview} 
            alt="Plant preview" 
            width={400} 
            height={400} 
            className="mx-auto object-cover rounded-lg"
          />
        ) : (
          <div className="text-green-600">
            Click or drag to upload a plant image
          </div>
        )}
        <input 
          type="file" 
          id="plant-upload"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
    </div>
  )
}