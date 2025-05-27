# IKG footer

A footer for IKG.

## How to check it

- [Source code (GitHub)](https://github.com/john-data-chen/ikg-footer)
- [Live site (Vercel)](https://ikg-footer.vercel.app/)

## Tech Stack

### Requirements

- Node.js 22.x
- A package manager (e.g., npm, yarn, pnpm)

### Frontend

- React 19.x
- Tailwind CSS 4.x
- Shadcn/UI

### Build

- Vite 6.x
- TypeScript 5.x
- ESLint 9.x
- Prettier 3.x

### Setup

```bash
# Install dependencies
npm install
# or
pnpm install

# Start the development server
npm run dev
# or
pnpm dev
```

## Project Structure

```text
public/ # Public assets (e.g., SVG)
src/
├── component/ # Footer and UI component
│   └── ui/ # Shadcn/UI components
├── lib/ # Utility functions
├── App.tsx # Main application component
├── main.tsx # Entry point for the application
└── index.css # Global styles
```

## Development Records

- Basic code formatting and linting (ESLint, Prettier) are included.
- Testing and CI were not added in this MVP, but can be integrated if required.

### Minor Design Clarification:

- There appears to be a minor inconsistency in the button label, which shows as both "Subscribe" and "Explore" in the design files.
- I implemented "Subscribe" based on its prominence and contextual usage. Please feel free to let me know if "Explore" is the intended label.
