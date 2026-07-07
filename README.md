# Game Publishing Platform

Educational content management system and game publishing platform.

## Tech Stack

- **Vite** - Fast build tool and dev server
- **React** (JavaScript) - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **React Router** - Client-side routing

## Getting Started

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   └── ui/           # shadcn/ui components
├── lib/
│   └── utils.js      # Utility functions
├── App.jsx           # Main app component
├── main.jsx          # Entry point
└── index.css         # Global styles with Tailwind
```

## Backend Integration

This frontend will integrate with the existing AWS/PostgreSQL/Entra ID backend infrastructure:

- **Authentication**: Microsoft Entra ID
- **API**: AWS-hosted backend services
- **Database**: PostgreSQL

## Adding shadcn/ui Components

To add more shadcn/ui components, create them in `src/components/ui/`. 

Example components to add:
- Input
- Card
- Dialog
- Table
- Form
- etc.

Refer to [shadcn/ui documentation](https://ui.shadcn.com/) for component implementations.
