import { PrismaClient } from "@/lib/generated/prisma";
import { Resend } from "resend";

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY); // Set your API key in environment variables

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

    await resend.emails.send({
      from: "no-reply@yourdomain.com",
      to: "contact@yourdomain.com",
      subject: "New Contact Us Enquiry",
      html: `<p><strong>Name:</strong> ${name}</p>
         <p><strong>Email:</strong> ${email}</p>
         <p><strong>Enquiry:</strong> ${enquiry}</p>`,
    });
    console.log("email send ");

    return new Response(
      JSON.stringify({ success: true, enquiry: newEnquiry }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.log(error.message);
    return new Response(
      JSON.stringify({ error: "Failed to process request." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
