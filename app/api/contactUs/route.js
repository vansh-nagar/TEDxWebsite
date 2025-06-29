import { PrismaClient } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, enquiry } = data;

    // Create Enquiry in the database
    const newEnquiry = await prisma.enquiry.create({
      data: {
        name,
        email,
        message: enquiry,
      },
    });

    return new Response(
      JSON.stringify({ success: true, enquiry: newEnquiry }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to process request." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
