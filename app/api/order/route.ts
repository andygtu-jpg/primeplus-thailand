import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxwoT6GdryPYyNOQdJVEcf1lAMsJ5_P177Ukg8cdGhVT26W5w2jAn85QxMnHKgBYRI1Ig/exec";
export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!GOOGLE_SCRIPT_URL) {
      return NextResponse.json(
        {
          success: false,
          message: "GOOGLE_SCRIPT_URL not found",
        },
        { status: 500 }
      );
    }

    const response = await fetch(GOOGLE_SCRIPT_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(body),
  cache: "no-store",
  redirect: "follow",
});

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      {
        status: 500,
      }
    );
  }
}