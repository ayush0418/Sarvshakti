# Sarvshakti Financial Services - Website PRD

## Original Problem Statement
Build a professional website for Sarvshakti with two companies:
1. Sarvshakti Financial Advisors Private Limited (Investment Manager of Fortune Hands Growth Fund - SEBI registered AIF Cat 2)
2. Sarvshakti Capital Venture Limited (Merchant Banking Cat 1 - SEBI registration in process)

The business includes IPO advisory, fund raising, fund management, and comprehensive financial market services.

**User Requirements:**
- Blue & Gold color scheme
- 3 team member profiles (placeholders)
- Contact form functionality
- All sections: Investment Philosophy, Portfolio/Case Studies, Resources/Insights
- Placeholder logo

---

## User Personas

### Primary User: Business Decision Maker
- Title: CEO/CFO/Founder
- Goal: Find reliable financial advisory services for IPO, fund raising, or investment management
- Pain Point: Need trusted SEBI-registered financial partners

### Secondary User: Institutional Investor
- Title: Investment Manager/Fund Manager
- Goal: Research AIF opportunities and track record
- Pain Point: Verify credentials and performance history

---

## Core Requirements (Static)

### Functional Requirements
1. **Navigation**: Smooth scroll navigation to all sections
2. **Hero Section**: Compelling value proposition with SEBI registration badge
3. **About Section**: Two company profiles with clear differentiation
4. **Services Section**: 6 key service offerings with descriptions
5. **Investment Philosophy**: 4 core principles with detailed explanations
6. **Portfolio Section**: Performance stats and case studies
7. **Team Section**: Leadership profiles with images
8. **Insights Section**: Latest market insights and newsletter subscription
9. **Contact Form**: Multi-field inquiry form with service selection
10. **Footer**: Complete contact information and Fortune Hands Growth Fund link

### Design Requirements
- Professional Blue & Gold color scheme
- Glassmorphism effects for depth
- Smooth animations and hover states
- Responsive design (mobile, tablet, desktop)
- High-quality professional imagery
- SEBI compliance disclaimers

---

## What's Been Implemented ✓

**Date: December 2024**

### Frontend (Completed)
- ✓ Header with smooth scroll navigation and mobile menu
- ✓ Hero section with glassmorphic design and trust indicators
- ✓ About section showcasing both companies with Fortune Hands Growth Fund link
- ✓ Services section with 6 key offerings and hover animations
- ✓ Investment Philosophy section with 4 core principles
- ✓ Portfolio section with stats and 3 case studies
- ✓ Team section with 3 leadership profiles
- ✓ Insights section with 3 articles and newsletter subscription
- ✓ Contact form with validation (MOCKED submission)
- ✓ Footer with complete contact details and social links
- ✓ Professional Blue & Gold color scheme throughout
- ✓ Responsive design for all screen sizes
- ✓ Smooth scroll behavior and micro-animations
- ✓ Mock data structure in `/app/frontend/src/data/mock.js`

### Components Created
1. `/app/frontend/src/components/Header.jsx` - Navigation header
2. `/app/frontend/src/components/Hero.jsx` - Hero section
3. `/app/frontend/src/components/About.jsx` - Company information
4. `/app/frontend/src/components/Services.jsx` - Service offerings
5. `/app/frontend/src/components/Philosophy.jsx` - Investment philosophy
6. `/app/frontend/src/components/Portfolio.jsx` - Performance & case studies
7. `/app/frontend/src/components/Team.jsx` - Team profiles
8. `/app/frontend/src/components/Insights.jsx` - Market insights
9. `/app/frontend/src/components/Contact.jsx` - Contact form
10. `/app/frontend/src/components/Footer.jsx` - Footer section
11. `/app/frontend/src/data/mock.js` - All mock data

### Design System
- Blue (#3B82F6 to #2563EB) and Gold (#F59E0B) color palette
- Shadcn UI components for consistency
- Custom animations and transitions
- Professional financial services imagery from Unsplash

---

## Prioritized Backlog

### P0 Features (Next Phase - Backend)
- Backend API for contact form submission
- Email notification system for inquiries
- Newsletter subscription storage
- Admin dashboard for managing inquiries

### P1 Features (Enhancement)
- Blog/Insights CMS integration
- Dynamic content management
- Team member profiles management
- Case studies detail pages
- Document download functionality (brochures, fact sheets)

### P2 Features (Future)
- Client portal/login
- Performance dashboard
- Real-time fund NAV display
- Webinar registration
- Multi-language support
- SEO optimization
- Analytics integration

---

## Next Tasks

### Immediate Next Steps:
1. **User Testing**: Get feedback on design and content
2. **Content Refinement**: Replace placeholder team profiles with actual data
3. **Logo Upload**: Replace placeholder logo with actual brand assets
4. **Backend Development**: When ready, implement:
   - Contact form API endpoint
   - Email service integration (SendGrid/AWS SES)
   - Newsletter subscription endpoint
   - Database models for inquiries

### API Contracts (For Backend Phase)

#### POST /api/contact
**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string?",
  "company": "string?",
  "service": "string",
  "message": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Inquiry submitted successfully",
  "inquiryId": "string"
}
```

#### POST /api/newsletter/subscribe
**Request Body:**
```json
{
  "email": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Subscribed successfully"
}
```

---

## Technical Stack
- **Frontend**: React 19, Tailwind CSS, Shadcn UI
- **Routing**: React Router v7
- **Icons**: Lucide React
- **Toast Notifications**: Sonner
- **Future Backend**: FastAPI, MongoDB
- **Deployment**: Emergent Platform

---

## Notes
- Contact form currently uses MOCKED submission (shows success message after 1.5s delay)
- Newsletter subscription is MOCKED (no backend yet)
- All data is from `/app/frontend/src/data/mock.js`
- Images are from Unsplash (high-quality professional stock)
- Ready for backend integration when approved by user
