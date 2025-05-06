import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import EmailTemplate from '@/app/components/email-template';

// Initialize Resend with your API key
// You'll need to add your API key to .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

// Validate email to prevent dummy submissions
const validateEmail = (email: string): boolean => {
  // Basic format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return false;
  }
  
  // Check for common dummy emails
  const dummyPatterns = [
    'example@',
    'test@',
    'user@',
    'sample@',
    'demo@',
    'fake@',
    'email@example',
    '@example.com',
    '@test.com',
    'john.doe@',
    'jane.doe@'
  ];
  
  // Check for very short or generic usernames at common domains
  const [username, domain] = email.toLowerCase().split('@');
  const commonDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
  const commonShortUsernames = ['hey', 'hi', 'me', 'you', 'we', 'us', 'abc', 'xyz', 'temp', 'noreply', 'no-reply'];
  
  if (commonDomains.includes(domain) && (username.length <= 3 || commonShortUsernames.includes(username))) {
    return false;
  }
  
  // Check for disposable email domains
  const disposableDomains = ['mailinator.com', 'tempmail.com', 'guerrillamail.com', 'sharklasers.com', 'yopmail.com'];
  if (disposableDomains.includes(domain)) {
    return false;
  }
  
  const isCommonDummy = dummyPatterns.some(pattern => 
    email.toLowerCase().includes(pattern.toLowerCase())
  );
  
  return !isCommonDummy;
};

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

    // Validate email
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
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
  } catch {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
} 