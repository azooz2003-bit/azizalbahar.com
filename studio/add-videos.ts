import { createClient } from '@sanity/client'

// This script adds the initial videos to Sanity
// Run with: npx tsx add-videos.ts

const client = createClient({
  projectId: 'eakfom3b',
  dataset: 'production',
  apiVersion: '2025-02-19',
  token: process.env.SANITY_AUTH_TOKEN, // Will use the token from sanity login
  useCdn: false,
})

const videos = [
  {
    _type: 'video',
    title: 'Dear Evan Hansen - For Forever',
    youtubeId: 'K-WE9evhfUQ',
    date: new Date().toISOString().split('T')[0], // Today's date, change if needed
  },
  {
    _type: 'video',
    title: "Tom Petty - Won't Back Down (Debut)",
    youtubeId: '1j3hsue62pQ',
    date: new Date().toISOString().split('T')[0], // Today's date, change if needed
  },
]

async function addVideos() {
  try {
    for (const video of videos) {
      const result = await client.create(video)
      console.log(`✅ Created video: ${result.title}`)
    }
    console.log('\n🎉 All videos added successfully!')
  } catch (error) {
    console.error('❌ Error adding videos:', error)
  }
}

addVideos()
