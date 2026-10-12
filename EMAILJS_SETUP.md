# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Connect your email: **rabiulazim430@gmail.com**
5. Note down your **Service ID**

## Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Note down your **Template ID**

## Step 4: Get Your Public Key
1. Go to **Account** → **General**
2. Find your **Public Key**
3. Copy it

## Step 5: Update ContactForm.js
Replace these values in `src/components/ContactForm.js`:

```javascript
await emailjs.send(
  'YOUR_SERVICE_ID',      // Replace with your Service ID
  'YOUR_TEMPLATE_ID',     // Replace with your Template ID
  templateParams,
  'YOUR_PUBLIC_KEY'       // Replace with your Public Key
);
```

## Example:
```javascript
await emailjs.send(
  'service_abc123',
  'template_xyz789',
  templateParams,
  'user_1234567890'
);
```

## Step 6: Test Your Form
1. Run `npm install` to install EmailJS
2. Update the credentials in ContactForm.js
3. Run `npm start`
4. Fill out the contact form
5. Check your email: **rabiulazim430@gmail.com**

## Free Tier Limits:
- 200 emails per month
- Perfect for portfolio contact forms!

## Alternative: FormSubmit (No Setup Required)
If you want a simpler solution without EmailJS setup:

Update the form in `ContactForm.js` to use FormSubmit:
```javascript
<form action="https://formsubmit.co/rabiulazim430@gmail.com" method="POST">
  <input type="hidden" name="_subject" value="New Portfolio Contact!" />
  <input type="hidden" name="_captcha" value="false" />
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

This will send emails directly without any setup!