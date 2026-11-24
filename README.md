# 🏖️ Туристическое агентство «Золотой тур» (Gold Tour)
### Modern Bilingual Single-Page Travel Agency Web Application

A modern, high-converting Single-Page Application (SPA) designed and built for **Туристическое агентство «Золотой тур»** (*Travel Agency "Gold Tour"*), serving clients in Nizhny Novgorod and Kstovo, Russia.

---

## ✨ Key Features

- **🌐 Instant Bilingual Toggle (`RU | EN`):** Switch between authentic Russian copywriting and complete English translations with one tap.
- **⚡ Interactive Live Tour Search:** Filter by departure city (Nizhny Novgorod, Moscow, Kazan), destination country, duration, travelers, and meal plans with real-time result cards.
- **🎯 4-Step Interactive Tour Finder Quiz:** High-converting questionnaire capturing qualified leads directly for WhatsApp / Telegram follow-up.
- **🏝️ Rich Destination Cards with Original & Offer Pricing:** Struck-through original price vs. highlighted offer price with savings badges and category filter pills (Beach, Family, Luxury, Exotic).
- **👁️ Quick View & Tour Booking Modals:** Pre-filled booking requests with hotel name, price in Rubles (₽), and preferred contact method (WhatsApp, Telegram, Phone).
- **📱 Direct Messenger Integrations:** One-click WhatsApp and Telegram chat triggers.
- **🗺️ Interactive Office Navigation:** Map coordinates, parking details, and one-click directions via Yandex Maps & 2GIS for the Kstovo / Nizhny Novgorod office.
- **⚖️ Russian Data Protection Compliance (152-ФЗ):** Built-in legal modals for Privacy Policy and Personal Data Processing regulations.
- **📊 Complete Marketing Blueprint:** Includes full `MARKETING_STRATEGY.md` with regional advertising tactics for Yandex Direct, Telegram, VK, 2GIS, and Avito.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** Inter & Montserrat (with native Cyrillic support)
- **Deployment:** Production-ready static bundle (`dist/`)

---

## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/futec805/goldtour-website.git
cd goldtour-website
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173/`.

### 3. Build for Production
```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
goldtour-website/
├── public/
│   └── images/
│       └── destinations/      # High-resolution local resort photos
├── src/
│   ├── components/            # Modular React components
│   │   ├── Header.jsx         # Sticky navbar with language toggle & callback trigger
│   │   ├── Hero.jsx           # Tropical beach hero with search CTAs
│   │   ├── TrustBar.jsx       # 80+ operators, 24/7 support metrics
│   │   ├── TourSearch.jsx     # Live interactive search engine + Tourvisor tab
│   │   ├── TourQuiz.jsx       # 4-step lead generation wizard
│   │   ├── Destinations.jsx   # Bento grid resort cards with original & offer prices
│   │   ├── DestinationModal.jsx # Quick view modal for resort highlights
│   │   ├── HotTours.jsx       # Last-minute deals with discount badges
│   │   ├── HotToursCta.jsx    # Messenger subscription call-to-action
│   │   ├── Services.jsx       # Package tours, visas, flights, cruises
│   │   ├── HowWeWork.jsx      # 4-step booking roadmap
│   │   ├── WhyChooseUs.jsx    # Value proposition & trust signals
│   │   ├── Reviews.jsx        # 5-star traveler testimonials
│   │   ├── ContactSection.jsx # Office details, interactive map, & message form
│   │   ├── BookingModal.jsx   # Pre-filled reservation modal
│   │   ├── CallbackModal.jsx  # 5-minute callback request popup
│   │   ├── LegalModal.jsx     # 152-FZ privacy & terms popup
│   │   └── Footer.jsx         # Navigation, contacts, legal links
│   ├── context/
│   │   └── LanguageContext.jsx # RU / EN state management
│   ├── data/
│   │   └── siteContent.js     # Master bilingual content dictionary
│   ├── App.jsx                # Main application container
│   ├── main.jsx               # React entry point
│   └── index.css              # Tailwind theme, Google Fonts, & custom styles
├── MARKETING_STRATEGY.md      # Regional marketing & advertising blueprint
└── package.json
```

---

## 📄 License & Credits
Developed for **«Золотой тур» (Gold Tour)**, Nizhny Novgorod Region, Russia. All rights reserved.
