import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export default function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      maxWidth: '600px',
    }}>
      <h1 style={{ 
        color: '#38b2ed', 
        fontSize: '24px',
        marginBottom: '20px'
      }}>
        New Contact Form Submission
      </h1>
      
      <div style={{
        backgroundColor: '#f9f9f9',
        padding: '15px',
        borderRadius: '5px',
        marginBottom: '20px'
      }}>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
      
      <div style={{
        backgroundColor: '#f9f9f9',
        padding: '15px',
        borderRadius: '5px'
      }}>
        <p style={{ marginBottom: '10px' }}><strong>Message:</strong></p>
        <p style={{ 
          whiteSpace: 'pre-wrap',
          lineHeight: '1.5'
        }}>
          {message}
        </p>
      </div>
      
      <div style={{
        marginTop: '30px',
        fontSize: '14px',
        color: '#666',
        borderTop: '1px solid #eee',
        paddingTop: '15px'
      }}>
        <p>This email was sent from your portfolio website contact form.</p>
      </div>
    </div>
  );
} 