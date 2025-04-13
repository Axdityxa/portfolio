import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import EmailTemplate from '@/app/components/email-template';

// Initialize Resend with your API key
// You'll need to add your API key to .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    
    // Validate form inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Update this to your verified domain once set up
      to: process.env.EMAIL_TO || 'your-email@example.com', // The email where you want to receive messages
      subject: `New contact from ${name}`,
      react: EmailTemplate({ name, email, message }),
      replyTo: email,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (_error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
} 