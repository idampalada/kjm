import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

// URL backend
const API_URL = process.env.API_URL || "http://localhost:5000/api";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const endpoint = request.nextUrl.searchParams.get("endpoint") || "/";

    // Kirim permintaan ke backend
    const response = await axios.post(`${API_URL}${endpoint}`, body);

    // Kirim respons dari backend
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("API Proxy Error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat menghubungi server" },
      { status: 500 }
    );
  }
}
