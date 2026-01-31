# Contact Form Setup

The contact form uses **Web3Forms** - a free email service that requires no backend.

## Setup Steps

1. **Create a Web3Forms account**
   - Go to [https://web3forms.com](https://web3forms.com)
   - Enter your email: `rob.marriott.development@gmail.com`
   - You'll receive an **Access Key** via email

2. **Add your Access Key**
   - Open `src/components/ContactFormModal.tsx`
   - Find line ~32: `access_key: 'YOUR_ACCESS_KEY'`
   - Replace `YOUR_ACCESS_KEY` with your actual key from Web3Forms

3. **Test the form**
   - Submit a test message
   - Check your inbox for the submission

## Features
- Name, Email, Company, Message fields
- Success/error state feedback
- Animated modal with premium styling
- No backend or server required

## Free Tier Limits
- 250 submissions/month (plenty for a personal portfolio)
- Upgrade available if needed
