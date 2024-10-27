import { connectToDB } from "@utils/database";
import Form from "@models/form";
import { Resend } from "resend";
import { EmailTemplate } from "@components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req) => {
  try {
    await connectToDB();
    
    const { name, email, message } = await req.json();

    const newForm = new Form({
      username: name,
      email,
      message,
    });
    await newForm.save();

    try {
      const emailResponse = await resend.emails.send({
        to: ['aeloidii@gmail.com'],
        from: 'onboarding@resend.dev',
        subject: `New Contact Message from ${name}`,
        react: EmailTemplate({ name, email, message }),
      });

      return new Response(
        JSON.stringify({ 
          message: "Email sent successfully",
          emailId: emailResponse.id 
        }), 
        { status: 200 }
      );
    } catch (error) {
      console.error("Detailed email error:", {
        error: error.message,
        code: error.statusCode,
        details: error.details
      });

      return new Response(
        JSON.stringify({ 
          message: "Failed to send email",
          error: error.message,
          code: error.statusCode
        }), 
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Server error:", error);
    return new Response(
      JSON.stringify({
        message: "Failed to process request",
        error: error.message
      }), 
      { status: 500 }
    );
  }
};