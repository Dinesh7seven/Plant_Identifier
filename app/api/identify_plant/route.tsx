//GoogleGenerativeAI("AIzaSyCly2LBxtX5JOo8LL8MB940kygUgXA-RrE")

// app/api/identify-plant/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI("AIzaSyCly2LBxtX5JOo8LL8MB940kygUgXA-RrE")

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData()
    const file = data.get('image') as File

    if (!file) {
      return NextResponse.json({ error: 'No image uploaded' }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash-latest" 
    })

    const result = await model.generateContent({
      contents: [{ 
        parts: [
          { text: "Identify this plant. Provide its name, scientific name, family, description, and care tips in a clear, structured format." },
          { 
            inlineData: { 
              mimeType: file.type, 
              data: buffer.toString('base64') 
            } 
          }
        ]
      }]
    })

    const responseText = result.response.text()

    // Basic parsing of response
    return NextResponse.json({
      name: extractValue(responseText, 'Name'),
      scientificName: extractValue(responseText, 'Scientific Name'),
      family: extractValue(responseText, 'Family'),
      description: extractDescription(responseText),
      careInstructions: extractValue(responseText, 'Care Instructions')
    })
  } catch (error) {
    console.error('Plant identification error:', error)
    return NextResponse.json({ 
      error: 'Identification failed',
      message: 'Unable to identify plant with Gemini Flash model'
    }, { status: 500 })
  }
}

// Utility extraction functions
function extractValue(text: string, key: string): string {
  const regex = new RegExp(`${key}:?\\s*(.+?)(?:\n|$)`, 'i')
  const match = text.match(regex)
  return match ? match[1].trim() : 'Not identified'
}

function extractDescription(text: string): string {
  const descriptionMatch = text.match(/Description:?\s*(.+?)(?:\n|$)/is)
  return descriptionMatch ? descriptionMatch[1].trim() : 'No description available'
}