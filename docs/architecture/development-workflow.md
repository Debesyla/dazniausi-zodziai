# Development Workflow

Define the development setup and workflow for the frontend application.

## Local Development Setup

### Prerequisites

```bash
# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install dependencies
npm install
```

### Initial Setup

```bash
# Clone repo
git clone <repo-url>
cd dazniausi-zodziai

# Install deps
npm install

# Start dev server
npm run dev
```

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test

# Run E2E tests
npm run test:e2e
```

## Environment Configuration

### Required Environment Variables

```bash
# No env vars needed for static app
```
