# Uptown Garden Venue & Catering Website

A production-ready static marketing website for Uptown Garden, a premier event venue in Bacolod City offering weddings, debuts, birthdays, and corporate events.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **Database:** Supabase (server-side only)
- **Email:** Nodemailer (SMTP)
- **Validation:** Zod
- **Deployment:** Vercel

## Features

- ✅ Full SSG (Static Site Generation) - all 5 pages
- ✅ Server Actions for form submission
- ✅ Server-side only database access (zero client-side exposure)
- ✅ Email routing by event type
- ✅ Mobile-responsive design
- ✅ SEO optimized with metadata
- ✅ Google Analytics 4 integration
- ✅ HTTPS enforcement in production
- ✅ Accessibility features

## Project Structure

```
uptown-garden/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with fonts & GA4
│   ├── page.tsx            # Home page
│   ├── services/           # Services page
│   ├── gallery/            # Gallery page
│   ├── about/              # About page
│   └── contact/            # Contact page with form
├── components/
│   ├── layout/             # Navbar & Footer
│   ├── sections/           # Reusable page sections
│   └── ui/                 # InquiryForm (only client component)
├── actions/
│   └── submitInquiry.ts    # Server Action for form
├── lib/
│   ├── supabase/           # Supabase admin client
│   ├── email/              # Email service
│   └── validators/         # Zod schemas
├── types/                  # TypeScript type definitions
├── public/images/          # Static assets
└── styles/                 # Global CSS
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account
- SMTP email service (Gmail, SendGrid, etc.)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/FranzFortz/uptown-garden.git
cd uptown-garden
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Required environment variables:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# SMTP Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# Email Recipients (by event type)
EMAIL_WEDDINGS=weddings@uptowngarden.com
EMAIL_EVENTS=events@uptowngarden.com
EMAIL_SALES=sales@uptowngarden.com

# Google Analytics (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Database Setup

1. **Create a Supabase project** at [supabase.com](https://supabase.com)

2. **Run the following SQL** in the Supabase SQL Editor:

```sql
-- Create inquiries table
create table inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  event_type text not null,
  event_date date not null,
  guest_count int,
  message text,
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table inquiries enable row level security;

-- Create policy for service role only
create policy "service_role_insert_only"
  on inquiries
  for insert
  to service_role
  with check (true);
```

3. **Get your credentials** from Supabase project settings:
   - Project URL: Settings → API → Project URL
   - Service Role Key: Settings → API → service_role key (keep this secret!)

### Email Configuration

#### Option 1: Gmail (Recommended for testing)

1. Enable 2-factor authentication on your Google account
2. Generate an App Password: Account → Security → 2-Step Verification → App passwords
3. Use the generated password in `SMTP_PASS`

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your.email@gmail.com
SMTP_PASS=your_16_char_app_password
```

#### Option 2: Other SMTP providers

- **SendGrid**: smtp.sendgrid.net (port 587)
- **Mailgun**: smtp.mailgun.org (port 587)
- **AWS SES**: email-smtp.[region].amazonaws.com (port 587)

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure environment variables (copy from `.env.local`)
   - Deploy!

3. **Environment Variables in Vercel**
   - Project Settings → Environment Variables
   - Add all variables from `.env.local`
   - Apply to Production, Preview, and Development

### Custom Domain

1. In Vercel project settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate is automatic

## Testing the Form

1. **Start development server**: `npm run dev`
2. **Navigate to**: [http://localhost:3000/contact](http://localhost:3000/contact)
3. **Fill out the inquiry form**
4. **Check**:
   - Form validation works
   - Loading state appears
   - Success message shows
   - Email is sent to correct recipient
   - Data is saved in Supabase

### Verify in Supabase

```sql
select * from inquiries order by created_at desc limit 10;
```

## Design System

### Color Palette

- **Background**: `#F5F2EC` (warm parchment)
- **Surface**: `#EDE8DF` (soft stone)
- **Primary (Sage)**: `#8A9E7F`
- **Sage Dark**: `#5C7A52` (hover states)
- **Earth**: `#BFA980` (warm accent)
- **Bark**: `#4A3F35` (text)
- **Mist**: `#CDD5C8` (dividers)
- **White**: `#FDFAF5` (off-white)

### Typography

- **Display/Headings**: Cormorant Garamond (serif)
- **Body**: DM Sans (sans-serif)

### Components

- `btn-primary`: Sage dark background with white text
- `btn-secondary`: Outlined sage button
- `card`: Rounded card with shadow
- `section-padding`: Consistent vertical spacing
- `container-custom`: Max-width container with padding

## Customization

### Replacing Placeholder Images

1. Add your images to `public/images/`
2. Recommended sizes:
   - Hero: 1920x1080px
   - Gallery: 1200x800px
   - About: 1200x800px

### Updating Content

- **Home page**: `app/page.tsx`
- **Services**: `app/services/page.tsx`
- **Gallery**: `app/gallery/page.tsx`
- **About**: `app/about/page.tsx`
- **Contact info**: `app/contact/page.tsx` and `components/layout/Footer.tsx`

### Changing Colors

Edit `tailwind.config.ts` and `styles/globals.css` to update the color palette.

## Security

### Best Practices Implemented

- ✅ Service role key never exposed to client
- ✅ Server-side validation with Zod
- ✅ Row Level Security (RLS) enabled in Supabase
- ✅ HTTPS enforcement in production via middleware
- ✅ No client-side Supabase access
- ✅ Form validation on both client and server
- ✅ Environment variables properly scoped

### What NOT to do

- ❌ Never commit `.env.local`
- ❌ Never use `NEXT_PUBLIC_` prefix on secrets
- ❌ Never disable TypeScript strict mode
- ❌ Never expose the service role key
- ❌ Never skip server-side validation

## Troubleshooting

### Form submission fails

1. Check Supabase credentials in `.env.local`
2. Verify RLS policies are set up correctly
3. Check browser console for errors
4. Verify server action is being called

### Email not sending

1. Test SMTP credentials manually
2. Check spam folder
3. Verify recipient emails are correct
4. Check server logs for email errors

### Build errors

1. Run `npm run build` locally first
2. Check for TypeScript errors: `npx tsc --noEmit`
3. Verify all environment variables are set
4. Clear `.next` folder and rebuild

### Images not loading

1. Ensure images are in `public/images/`
2. Use correct paths starting with `/images/`
3. Check Next.js image optimization config

## Future Enhancements

### When Figma Design is Provided

The current UI is a temporary mockup. When the Figma design arrives:

1. Keep all backend logic unchanged (`lib/`, `actions/`, `types/`)
2. Update only these files:
   - `styles/globals.css` (colors, typography)
   - `tailwind.config.ts` (theme)
   - All component files in `components/`
   - Page layouts in `app/`

### Potential Features

- Admin dashboard for viewing inquiries
- Online payment integration
- Photo gallery with real images
- Testimonials section
- Blog for events and tips
- Multi-language support

## Support

For questions or issues:

- **Email**: info@uptowngarden.com
- **GitHub**: [https://github.com/FranzFortz/uptown-garden](https://github.com/FranzFortz/uptown-garden)

## License

Copyright © 2026 Uptown Garden Venue & Catering. All rights reserved.
