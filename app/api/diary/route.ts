import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    const diaryDir = path.join(process.cwd(), 'diary')
    
    // Check if diary directory exists
    if (!fs.existsSync(diaryDir)) {
      return NextResponse.json({ entries: [] })
    }

    // Read all markdown files from the diary directory
    const files = fs.readdirSync(diaryDir)
      .filter(file => file.endsWith('.md') && !file.includes('README'))
      .sort((a, b) => {
        // Custom sorting: preface, chapter-1, day-0, day-1, day-2, etc.
        const getSortOrder = (filename: string) => {
          if (filename.match(/preface\.md/)) {
            return -1 // Preface comes first
          }
          const dayMatch = filename.match(/day-(-?\d+)\.md/)
          if (dayMatch) {
            return parseInt(dayMatch[1])
          }
          const chapterMatch = filename.match(/chapter-(\d+)\.md/)
          if (chapterMatch) {
            // Chapters come after preface but before day-0
            return parseInt(chapterMatch[1]) * 0.5 - 0.5
          }
          return 999 // Other files go to the end
        }
        return getSortOrder(a) - getSortOrder(b)
      })

    // Read content of each file
    const entries = files.map(file => {
      const filePath = path.join(diaryDir, file)
      const rawContent = fs.readFileSync(filePath, 'utf-8')
      
      // Extract title from first heading
      const titleMatch = rawContent.match(/^#\s+(.+)$/m)
      const title = titleMatch ? titleMatch[1] : file.replace('.md', '')
      
      // Extract day or chapter number for display
      const dayMatch = file.match(/day-(-?\d+)\.md/)
      const chapterMatch = file.match(/chapter-(\d+)\.md/)
      const prefaceMatch = file.match(/preface\.md/)
      
      let day = 0
      let displayLabel = 'Day'
      
      if (prefaceMatch) {
        displayLabel = 'Preface'
      } else if (dayMatch) {
        day = parseInt(dayMatch[1])
      } else if (chapterMatch) {
        day = parseInt(chapterMatch[1])
        displayLabel = 'Chapter'
      }

      // Remove the title from content (first line with #)
      const content = rawContent.replace(/^#\s+.+$/m, '').trim()

      return {
        filename: file,
        title,
        content,
        day,
        displayLabel
      }
    })

    return NextResponse.json({ entries })
  } catch (error) {
    console.error('Error reading diary entries:', error)
    return NextResponse.json({ error: 'Failed to load diary entries' }, { status: 500 })
  }
}
