# oRight

# WIP

Healthcare provider search platform connecting patients with friendly, caring doctors.

## Features

- **Dynamic Banner**: Auto-cycling healthcare images with inspiring messages
- **Doctor Search**: Find healthcare providers by name, specialty, city, or state
- **Wellness Quotes**: Inspirational self-care and health quotes
- **Live Chat**: Floating chat support (UI only)
- **Responsive Design**: Mobile-friendly with warm, welcoming cream theme

## Tech Stack

- React + Vite
- CSS3 (custom styling)
- CMS ACO Participants API data

## Getting Started

```bash
pnpm install
pnpm dev
```

Visit `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── HeroBanner.jsx
│   ├── Body.jsx (wellness quotes)
│   ├── DoctorSearch.jsx
│   ├── Footer.jsx
│   └── subComponents/
│       ├── DynamicBanner.jsx
│       ├── MenuBar.jsx
│       ├── ChatBubble.jsx
│       └── constants.jsx
└── public/
    └── data.json (healthcare data)
```

## Data Source

Uses CMS Medicare Shared Savings Program ACO Participants data for real healthcare provider information.
