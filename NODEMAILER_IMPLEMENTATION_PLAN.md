# Plan: Implement Nodemailer with Next.js API Route for Contact Form

This plan outlines the steps to integrate Nodemailer into your Next.js application to handle contact form submissions via an API route.

**1. Install Dependencies:**
   - Install the `nodemailer` package using npm or yarn:
     ```bash
     npm install nodemailer
     # or
     yarn add nodemailer
     ```

**2. Create API Route:**
   - Create a new file at `app/api/contact/route.ts`.
   - This file will contain the API route handler for processing contact form submissions.

**3. Implement API Route Logic:**
   - Inside `app/api/contact/route.ts`, define an asynchronous function to handle POST requests.
   - Parse the request body to extract form data (name, email, message).
   - Validate the incoming data (e.g., check for required fields, basic email format).
   - Configure Nodemailer with your Gmail credentials using environment variables for security.
   - Create the email content (sender, recipient, subject, body).
   - Use Nodemailer to send the email.
   - Return a JSON response indicating success or failure.

**Example API Route Structure (Conceptual):**

```typescript
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  // Basic validation
  if (!name || !email || !message) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  try {
    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: email, // Sender's email from the form
      to: process.env.GMAIL_USER, // Your Gmail address to receive emails
      subject: `Contact Form Submission from ${name}`,
      text: message,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}
```

**4. Configure Environment Variables:**
   - Create or update a `.env.local` file in the project root.
   - Add environment variables for your Gmail address and app password (or regular password if less secure access is enabled). Example:
     ```
     GMAIL_USER=your_email@gmail.com
     GMAIL_PASS=your_app_password
     ```
   - **Note:** Using an app password is highly recommended for security. You can generate one in your Google Account settings under Security -> App passwords.

**5. Update Contact Form:**
   - Modify the form in `app/contact/page.tsx` to handle submission via client-side JavaScript.
   - Add an `onSubmit` handler to the `<form>` element.
   - Inside the handler:
     - Prevent the default form submission (`event.preventDefault()`).
     - Get the form data.
     - Send a POST request to the `/api/contact` endpoint using `fetch` or a library like `axios`.
     - Handle the response from the API route (show success or error message to the user).

**Example Contact Form Update (Conceptual):**

```typescript
// Inside the ContactPage component in app/contact/page.tsx
const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      alert(result.message); // Or display a more user-friendly success message
      // Optionally clear the form
      event.currentTarget.reset();
    } else {
      alert(`Error: ${result.message}`); // Or display a more user-friendly error message
    }
  } catch (error) {
    console.error('Form submission error:', error);
    alert('An error occurred while submitting the form.'); // Generic error message
  }
};

// ... inside the JSX return
<form className="space-y-6" onSubmit={handleSubmit}>
  {/* Form fields */}
</form>
```

**Process Flow:**

```mermaid
graph TD
    A[User fills out Contact Form] --> B{Submit Form};
    B --> C[Client-side JavaScript];
    C --> D[Send POST request to /api/contact];
    D --> E[Next.js API Route (app/api/contact/route.ts)];
    E --> F[Validate Data];
    F -- Valid --> G[Configure Nodemailer];
    G --> H[Send Email via Gmail SMTP];
    H --> I{Email Sent?};
    I -- Yes --> J[Return Success Response];
    I -- No --> K[Return Error Response];
    F -- Invalid --> K;
    J --> L[Display Success Message];
    K --> M[Display Error Message];