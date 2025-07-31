import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function setCorsHeaders(response: NextResponse) {
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Validate required fields
    const requiredFields = ['title', 'description', 'claimPerson', 'address', 'contacts'];
    for (const field of requiredFields) {
      if (!formData[field]) {
        return setCorsHeaders(NextResponse.json({ message: `Missing field: ${field}` }, { status: 400 }));
      }
    }

    // Generate new claimID based on the highest existing one
    const latestClaim = await prisma.claims.findFirst({
      orderBy: { claimID: 'desc' },
    });

    let newNumber = 1;
    if (latestClaim?.claimID) {
      const match = latestClaim.claimID.match(/d+$/);
      if (match) {
        newNumber = parseInt(match[0]) + 1;
      }
    }

    const newClaimID = `clm-${newNumber.toString().padStart(3, '0')}`;

    // Create the claim with claimID //
    const newClaim = await prisma.claims.create({
      data: {
        claimID: newClaimID,
        title: formData.title,
        description: formData.description,
        claimPerson: formData.claimPerson,
        address: formData.address,
        contacts: formData.contacts,
      },
    });

    return setCorsHeaders(NextResponse.json({ message: 'Claim added successfully', claim: newClaim }, { status: 201 }));
  } catch (error) {
    console.error('Error adding claim:', error);
    return setCorsHeaders(NextResponse.json({ message: 'Error adding claim' }, { status: 500 }));
  }
}

export async function GET(request: Request) {
  try {
    const claims = await prisma.claims.findMany();
    return setCorsHeaders(NextResponse.json({ claims }, { status: 200 }));
  } catch (error) {
    console.error('Error fetching claims:', error);
    return setCorsHeaders(NextResponse.json({ message: 'Error fetching claims' }, { status: 500 }));
  }
}

export async function OPTIONS() {
  return setCorsHeaders(NextResponse.json({}, { status: 200 }));
}