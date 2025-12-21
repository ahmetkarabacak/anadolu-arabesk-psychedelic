import fs from 'fs'
import path from 'path'

const DB_PATH = path.join(process.cwd(), 'data', 'forum.json')

export interface ForumRequest {
  id: string
  message: string
  createdAt: string
}

function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data')
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
}

function readDB(): ForumRequest[] {
  ensureDataDir()
  if (!fs.existsSync(DB_PATH)) {
    return []
  }
  try {
    const data = fs.readFileSync(DB_PATH, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading database:', error)
    return []
  }
}

function writeDB(data: ForumRequest[]): void {
  ensureDataDir()
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf-8')
  } catch (error) {
    console.error('Error writing database:', error)
    throw error
  }
}

export function getAllRequests(): ForumRequest[] {
  return readDB().sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )
}

export function createRequest(message: string): ForumRequest {
  const requests = readDB()
  const newRequest: ForumRequest = {
    id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
    message: message.trim(),
    createdAt: new Date().toISOString(),
  }
  requests.push(newRequest)
  writeDB(requests)
  return newRequest
}

