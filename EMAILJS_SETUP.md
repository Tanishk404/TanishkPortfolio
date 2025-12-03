# EmailJS Setup Instructions

## Quick Setup Guide

To enable email functionality in your contact form, follow these steps:

### 1. Create an EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account (200 emails/month free)

### 2. Add an Email Service
- In your EmailJS dashboard, go to **Email Services**
- Click **Add New Service**
- Choose your email provider (Gmail recommended)
- Follow the setup instructions to connect your email account
- **Note:** Use `dtanish2580@gmail.com` as the recipient email

### 3. Create an Email Template
- Go to **Email Templates** in the dashboard
- Click **Create New Template**
- Use the following template variables:
  ```
  From: {{from_name}} <{{from_email}}>
  Subject: {{subject}}
  
  Message:
  {{message}}
  
  ---
  This email was sent from your portfolio contact form.
  Reply to: {{from_email}}
  ```
- Set the **To Email** field to: `dtanish2580@gmail.com`
- Save the template

### 4. Get Your Credentials
- **Service ID**: Found in Email Services section
- **Template ID**: Found in Email Templates section  
- **Public Key**: Found in Account → General → API Keys

### 5. Configure Environment Variables
Create a `.env` file in the root of your project:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 6. Restart Your Development Server
After adding the `.env` file, restart your React app:
```bash
npm start
```

## Testing
1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox at `dtanish2580@gmail.com`
4. You should receive the email within a few seconds

## Troubleshooting
- Make sure all environment variables are set correctly
- Verify your EmailJS service is connected and active
- Check the browser console for any error messages
- Ensure your EmailJS account hasn't exceeded the free tier limits

## Security Note
- Never commit your `.env` file to version control
- The `.env` file is already added to `.gitignore`
- Your Public Key is safe to use in frontend code (it's designed for client-side use)

