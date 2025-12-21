import { NextRequest, NextResponse } from 'next/server'
import { getAllRequests, createRequest } from '@/lib/db'

export async function GET() {
  try {
    const requests = getAllRequests()
    return NextResponse.json({ requests })
  } catch (error) {
    console.error('Error fetching requests:', error)
    return NextResponse.json(
      { error: 'İstekler alınırken bir hata oluştu' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { message } = body

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Mesaj gereklidir' },
        { status: 400 }
      )
    }

    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Mesaj en az 10 karakter olmalıdır' },
        { status: 400 }
      )
    }

    if (message.trim().length > 500) {
      return NextResponse.json(
        { error: 'Mesaj en fazla 500 karakter olabilir' },
        { status: 400 }
      )
    }

    const newRequest = createRequest(message)
    return NextResponse.json(
      { success: true, id: newRequest.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating request:', error)
    return NextResponse.json(
      { error: 'İstek oluşturulurken bir hata oluştu' },
      { status: 500 }
    )
  }
}

