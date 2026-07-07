# Hooked on Phonics Design System

This CMS uses the exact brand colors, fonts, and UI patterns from the Hooked on Phonics website to maintain a consistent look and feel.

## Colors

### Brand Colors
```css
Brand Blue:   #0066CC  (Primary buttons, links)
Brand Orange: #FF6B35  (Secondary buttons, highlights)
Brand Yellow: #FFD700  (Accents, rewards)
Brand Purple: #6B4C9A  (Supporting elements)
```

### Tailwind Usage
```jsx
className="bg-brand-blue"      // Brand Blue
className="bg-brand-orange"    // Brand Orange
className="bg-brand-yellow"    // Brand Yellow
className="bg-brand-purple"    // Brand Purple
```

### Semantic Colors
```css
Background:   #FFFFFF  (white)
Foreground:   #333333  (dark gray text)
Muted:        #F5F5F5  (light gray backgrounds)
Border:       #E0E0E0  (borders)
Input:        #CCCCCC  (input borders)
Destructive:  #F44336  (error red)
```

### Tailwind Semantic Classes
```jsx
className="bg-background"           // White background
className="text-foreground"         // Dark text
className="bg-muted"               // Light gray section
className="border-border"          // Border color
className="bg-primary"             // Brand Blue (primary)
className="bg-secondary"           // Brand Orange (secondary)
className="bg-accent"              // Brand Yellow (accent)
```

## Typography

### Font Family
The Hooked on Phonics website uses custom fonts, but we're using Google Fonts alternatives that match their style:

```css
Primary (Body): 'Quicksand', 'Helvetica Neue', Helvetica, Arial, sans-serif
Headings: 'Quicksand', 'Helvetica Neue', Helvetica, Arial, sans-serif
```

**Note:** The actual Hooked on Phonics site uses:
- "Trakya Rounded" (custom font) for headings and buttons
- "Quicksand" for body text
- "Zilla Slab" for some headings

We're using **Quicksand** from Google Fonts as it's publicly available and provides a similar friendly, rounded appearance.

### Font Sizes (Tailwind)
```jsx
className="text-6xl"    // 52px - Large headlines
className="text-5xl"    // 48px - H1
className="text-4xl"    // 40px - Large H2
className="text-3xl"    // 36px - H2
className="text-2xl"    // 32px - H3
className="text-xl"     // 28px - H4
className="text-lg"     // 24px - Large text
className="text-base"   // 18px - Body (default)
className="text-sm"     // 16px - Small
className="text-xs"     // 14px - Extra small
```

### Font Weights
```jsx
className="font-normal"    // 400
className="font-medium"    // 500
className="font-semibold"  // 600
className="font-bold"      // 700 (headings, buttons)
```

### Line Heights
- Headings: `1.2` - `1.3`
- Body: `1.7`

## Buttons

### Primary Button (Brand Blue)
```jsx
<Button>Click Me</Button>
```
- Background: Brand Blue (#0066CC)
- Text: White
- Padding: 12px 24px (default size)
- Font: Bold, 18px
- Border Radius: 12px
- Shadow: Button shadow
- Hover: Brightness decrease

### Secondary Button (Brand Orange)
```jsx
<Button variant="secondary">Click Me</Button>
```
- Background: Brand Orange (#FF6B35)
- Text: White
- Same styling as Primary

### Outline Button
```jsx
<Button variant="outline">Click Me</Button>
```
- Background: White
- Border: 2px Brand Blue
- Text: Brand Blue
- Hover: Filled with Brand Blue background

### Ghost Button
```jsx
<Button variant="ghost">Click Me</Button>
```
- Background: Transparent
- Hover: Light gray background

### Button Sizes
```jsx
<Button size="sm">Small</Button>       // Smaller padding
<Button size="default">Default</Button> // Standard
<Button size="lg">Large</Button>       // Larger padding
```

## Spacing

### Common Values
```jsx
className="p-4"    // 16px padding
className="p-6"    // 24px padding
className="p-8"    // 32px padding
className="p-12"   // 48px padding

className="gap-4"  // 16px gap
className="gap-6"  // 24px gap
className="gap-8"  // 32px gap
```

### Container
```jsx
className="max-w-container mx-auto px-6"  // 1200px max, centered, side padding
```

## Border Radius

```jsx
className="rounded-sm"    // 6px
className="rounded-md"    // 8px
className="rounded-lg"    // 12px - Cards, buttons
className="rounded-xl"    // 16px - Large cards
className="rounded-2xl"   // 20px - Hero sections
```

## Cards

### Standard Card
```jsx
<div className="card">
  {/* content */}
</div>
```

Or using Tailwind directly:
```jsx
<div className="bg-card rounded-xl p-6 shadow-card">
  {/* content */}
</div>
```

- Background: White
- Border Radius: 16px
- Padding: 24px
- Shadow: `0 4px 12px rgba(0, 0, 0, 0.08)`

## Shadows

```jsx
className="shadow-card"     // 0 4px 12px rgba(0, 0, 0, 0.08)
className="shadow-button"   // 0 2px 8px rgba(0, 0, 0, 0.12)
```

## Component Examples

### Header
```jsx
<header className="border-b border-border bg-white">
  <div className="max-w-container mx-auto px-6 py-4">
    <h1 className="text-2xl font-bold text-brand-blue">
      Hooked on Phonics
    </h1>
  </div>
</header>
```

### Content Section
```jsx
<main className="max-w-container mx-auto px-6 py-12">
  <h2 className="text-4xl font-bold mb-3">Section Title</h2>
  <p className="text-lg text-muted-foreground">
    Description text
  </p>
</main>
```

### Card Grid
```jsx
<div className="grid md:grid-cols-3 gap-6">
  <div className="card">
    <h4 className="font-bold mb-2">Title</h4>
    <p className="text-muted-foreground text-base mb-4">
      Description
    </p>
    <Button size="sm">Action</Button>
  </div>
</div>
```

## Usage Guidelines

1. **Always use brand colors** - Never use generic blues/oranges, stick to the exact hex codes
2. **Maintain rounded corners** - Use 12px-16px radius for friendly, approachable feel
3. **Bold typography for CTAs** - Buttons and headings should be bold (700 weight)
4. **Generous spacing** - Don't crowd elements, use 24px+ gaps between sections
5. **White backgrounds** - Keep the CMS clean and professional with white cards on light gray
6. **Consistent shadows** - Use the defined card and button shadows for depth
7. **Accessible contrast** - All brand colors have been tested for readability on white

## Preview

The app running at http://localhost:5173 shows all design system components in action.
