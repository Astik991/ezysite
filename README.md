# EzyHelpers - Modern House Help Services Website

A modern, conversion-focused website built with Next.js 14 and TailwindCSS for EzyHelpers, India's trusted house help service provider.

## 🚀 Features

- **Modern Design**: Clean, minimalist design inspired by leading service platforms
- **Mobile-First**: Fully responsive design optimized for all devices
- **SEO Optimized**: Built with SEO best practices and structured data
- **Conversion Focused**: Strategic placement of CTAs and lead capture forms
- **Fast Performance**: Built with Next.js 14 for optimal performance
- **Type Safe**: Full TypeScript support for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Icons**: Heroicons
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **TypeScript**: Full type safety
- **Deployment**: Optimized for Vercel/Netlify

## 📱 Pages & Features

### Homepage
- Hero section with strong CTAs
- Services overview
- 3-step process explanation
- Cities served
- Customer testimonials
- Lead capture form

### Services
- Live-in Maids
- Full-time Maids
- Part-time Maids
- On-demand Helpers
- Babysitter/Nanny Services
- Elderly Care
- Cooks
- Drivers

### Additional Pages
- Hire a Helper (Lead generation)
- For Helpers (Helper registration)
- About Us
- Contact Us
- Blog/Resources

## 🎨 Design Features

- **Brand Colors**: Warm orange primary (#f1750a) with blue secondary
- **Typography**: Poppins for headings, Inter for body text
- **Components**: Reusable, accessible UI components
- **Animations**: Subtle micro-interactions for better UX
- **Forms**: Validated contact and booking forms

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ezyhelpers-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
ezyhelpers-website/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Homepage
├── components/            # React components
│   ├── Navbar.tsx        # Navigation component
│   ├── Footer.tsx        # Footer component
│   └── sections/         # Page sections
│       ├── HeroSection.tsx
│       ├── ServicesSection.tsx
│       ├── ProcessSection.tsx
│       ├── CitiesSection.tsx
│       ├── TestimonialsSection.tsx
│       ├── WhyChooseUsSection.tsx
│       └── CTASection.tsx
├── public/               # Static assets
├── tailwind.config.js    # TailwindCSS configuration
├── next.config.js        # Next.js configuration
└── package.json         # Dependencies
```

## 🎯 SEO & Performance

- **Lighthouse Score**: Optimized for 90+ scores
- **Meta Tags**: Comprehensive SEO meta tags
- **Schema Markup**: Structured data for services
- **Core Web Vitals**: Optimized loading performance
- **Accessibility**: WCAG compliant components

## 📞 Contact Information

- **Phone**: +91 9972571005
- **Email**: contact@ezyhelpers.com
- **WhatsApp**: [Chat with us](https://wa.me/919972571005)

## 🏙️ Service Areas

Currently serving:
- Bangalore
- Mumbai  
- Delhi
- Noida
- Nagpur
- Lucknow
- Kanpur
- Meerut
- Bareilly

## 🤝 Business Credentials

- Registered with DWSSC (Domestic Workers Sector Skill Council)
- Skill India certified
- Startup India registered
- 10,000+ satisfied families
- 4.8/5 customer rating

## 📝 License

This project is created for EzyHelpers house help services.

## 🚀 Deployment

The site is optimized for deployment on:
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Any static hosting service**

### Environment Variables

Create a `.env.local` file for environment-specific configurations:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_PHONE=+919972571005
NEXT_PUBLIC_EMAIL=contact@ezyhelpers.com
```

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary color shades
  },
  secondary: {
    // Your secondary color shades
  }
}
```

### Content
- Update service information in component files
- Modify testimonials in `TestimonialsSection.tsx`
- Update city list in `CitiesSection.tsx`
- Change contact information in `Footer.tsx` and `Navbar.tsx`

---

Built with ❤️ for EzyHelpers - Making home management effortless across India. 