import { connectToDB } from "@utils/database";
import Form from '@models/form';

export const POST = async (req) => {
  try {
    await connectToDB();
    
    // Destructure data from request body
    const { name, email, message } = await req.json();

    // Create a new instance of Form using Mongoose model
    const newForm = new Form({
      username: name,  // Ensure this matches your schema
      email,
      message,
    });

    // Save the new form entry to MongoDB
    await newForm.save();

    // Respond with a success message and status 201 (Created)
    return new Response(JSON.stringify(newForm), {
      status: 201,
    });
  } catch (error) {
    // Handle any errors that occur during database interaction
    console.error("Error creating form entry:", error);
    return new Response("Failed to create a new contact form", {
      status: 500,
    });
  }
};
