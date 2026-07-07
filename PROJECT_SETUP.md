# Project Setup Summary

## Stack Configuration

### Frontend Framework
- **Vite** - v8.1.3
- **React** - v19 (JavaScript, not TypeScript)

### Styling
- **Tailwind CSS** - v4.3.2 with PostCSS and Autoprefixer
- **shadcn/ui** - Component library configured with CVA and Tailwind Merge
- CSS variables for theming (light/dark mode support)

### Form Management
- **React Hook Form** - For performant form handling
- **Zod** - Schema validation and type safety
- **@hookform/resolvers** - Integration between React Hook Form and Zod

### Routing
- **React Router DOM** - Client-side routing

### UI Components
- **lucide-react** - Icon library
- **class-variance-authority** - For component variants

## Folder Structure

```
game-publishing-platform/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   └── ui/            # shadcn/ui components
│   ├── contexts/          # React context providers (auth, etc.)
│   ├── hooks/             # Custom React hooks
│   ├── lib/
│   │   └── utils.js       # Utility functions (cn helper)
│   ├── pages/             # Page components
│   ├── services/          # API service functions
│   ├── utils/             # General utilities
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles + Tailwind
├── .env.example           # Environment variables template
├── jsconfig.json          # Path aliases (@/* imports)
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind + shadcn/ui theming
└── vite.config.js         # Vite configuration with path aliases

```

## Path Aliases

The project uses `@/*` path aliases for cleaner imports:

```javascript
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
```

This is configured in both `vite.config.js` and `jsconfig.json`.

## Environment Variables

Copy `.env.example` to `.env` and configure:

- `VITE_API_BASE_URL` - Backend API endpoint
- `VITE_ENTRA_CLIENT_ID` - Microsoft Entra ID client ID
- `VITE_ENTRA_TENANT_ID` - Microsoft Entra ID tenant ID
- `VITE_ENTRA_REDIRECT_URI` - OAuth redirect URI

## Available Scripts

- `npm run dev` - Start development server (http://localhost:5173)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Next Steps

1. **Authentication Integration**
   - Implement Microsoft Entra ID authentication
   - Create AuthContext and auth service
   - Add protected routes

2. **Backend API Integration**
   - Create API service layer
   - Set up axios or fetch wrapper
   - Implement error handling

3. **Core CMS Features**
   - Game management pages
   - Asset upload and management
   - Game template system
   - Publishing workflow
   - User management

4. **Additional shadcn/ui Components**
   - Add components as needed (Input, Card, Dialog, Table, Form, etc.)
   - Refer to https://ui.shadcn.com/ for implementations

## Backend Integration

This frontend is designed to work with the existing infrastructure:

- **AWS** backend services
- **PostgreSQL** database
- **Microsoft Entra ID** for authentication

The architecture is decoupled - this is a pure SPA that communicates via REST APIs with the backend.
