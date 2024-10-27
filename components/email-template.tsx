import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div style={{ 
    fontFamily: 'Arial, sans-serif', 
    lineHeight: '1.5',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px'
  }}>
    <h1 style={{ color: '#333', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
      Hello, EL OIDII ABDESSAMAD!
    </h1>
    <p style={{ fontSize: '16px', color: '#666' }}>
      You have received a new message through the contact form from {name}:
    </p>
    <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px' }}>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Message:</strong> {message}</p>
    </div>
    <p style={{ marginTop: '20px', color: '#888' }}>Thank you!</p>
  </div>
);