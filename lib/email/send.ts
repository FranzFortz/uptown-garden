import nodemailer from 'nodemailer';
import type { InquiryInput } from '@/lib/validators/inquiry';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/**
 * Route email to appropriate recipient based on event type
 */
function getRecipientEmail(eventType: string): string {
  switch (eventType) {
    case 'wedding':
      return process.env.EMAIL_WEDDINGS || '';
    case 'birthday_debut':
      return process.env.EMAIL_EVENTS || '';
    case 'corporate':
      return process.env.EMAIL_SALES || '';
    default:
      return process.env.EMAIL_EVENTS || '';
  }
}

/**
 * Format event type for display
 */
function formatEventType(eventType: string): string {
  switch (eventType) {
    case 'wedding':
      return 'Wedding';
    case 'birthday_debut':
      return 'Birthday & Debut';
    case 'corporate':
      return 'Corporate Event';
    default:
      return eventType;
  }
}

/**
 * Send inquiry notification email
 */
export async function sendInquiryEmail(data: InquiryInput): Promise<void> {
  const recipient = getRecipientEmail(data.event_type);

  if (!recipient) {
    throw new Error(`No recipient email configured for event type: ${data.event_type}`);
  }

  const subject = `New Inquiry — ${formatEventType(data.event_type)} | Uptown Garden`;

  const htmlBody = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #4A3F35; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #8A9E7F 0%, #5C7A52 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #FDFAF5; padding: 30px; border: 1px solid #CDD5C8; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 20px; }
          .label { font-weight: 600; color: #5C7A52; margin-bottom: 5px; }
          .value { color: #4A3F35; }
          .footer { text-align: center; padding: 20px; color: #8A9E7F; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0;">New Event Inquiry</h1>
            <p style="margin: 10px 0 0 0;">Uptown Garden Venue & Catering</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Event Type:</div>
              <div class="value">${formatEventType(data.event_type)}</div>
            </div>
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${data.name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${data.email}" style="color: #5C7A52;">${data.email}</a></div>
            </div>
            ${data.phone ? `
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value"><a href="tel:${data.phone}" style="color: #5C7A52;">${data.phone}</a></div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">Event Date:</div>
              <div class="value">${new Date(data.event_date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</div>
            </div>
            ${data.guest_count ? `
            <div class="field">
              <div class="label">Guest Count:</div>
              <div class="value">${data.guest_count}</div>
            </div>
            ` : ''}
            ${data.message ? `
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
            </div>
            ` : ''}
          </div>
          <div class="footer">
            <p>This inquiry was submitted through the Uptown Garden website contact form.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  const textBody = `
New Event Inquiry - Uptown Garden Venue & Catering

Event Type: ${formatEventType(data.event_type)}
Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}
Event Date: ${new Date(data.event_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
${data.guest_count ? `Guest Count: ${data.guest_count}` : ''}
${data.message ? `\nMessage:\n${data.message}` : ''}

---
This inquiry was submitted through the Uptown Garden website contact form.
  `;

  await transporter.sendMail({
    from: `"Uptown Garden" <${process.env.SMTP_USER}>`,
    to: recipient,
    subject,
    text: textBody.trim(),
    html: htmlBody,
  });
}
