import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Validate required fields
    const requiredFields = ['title', 'description', 'claimPerson', 'address', 'contacts'];
    for (const field of requiredFields) {
      if (!formData[field]) {
        return NextResponse.json({ message: `Missing field: ${field}` }, { status: 400 });
      }
    }

    // Generate new claimID based on the highest existing one
    const latestClaim = await prisma.claims.findFirst({
      orderBy: { claimID: 'desc' },
    });

    let newNumber = 1;
    if (latestClaim?.claimID) {
      const match = latestClaim.claimID.match(/\d+$/);
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

    return NextResponse.json({ message: 'Claim added successfully', claim: newClaim }, { status: 201 });
  } catch (error) {
    console.error('Error adding claim:', error);
    return NextResponse.json({ message: 'Error adding claim' }, { status: 500 });
  }
}
