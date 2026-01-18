# Ask My Envoy

A modern, responsive website for Ask My Envoy - an intelligent AI scheduling assistant that manages your calendar.

## Tech Stack

- **Framework**: Next.js 15.2.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.1
- **Development Tools**:
  - ESLint
  - TypeScript
  - PostCSS
  - Autoprefixer

## Prerequisites

- Docker
- Docker Compose

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Application
NEXT_PUBLIC_SITE_URL="http://localhost:3000"

# TsunAImi Platform Integration (for scheduling functionality)
NEXT_PUBLIC_PLATFORM_URL="https://platform.tsunaimi.ai"
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ame-website.git
   cd ame-website
   ```

2. Start the development server:
   ```bash
   docker-compose up
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

```bash
# Start development server
docker-compose up

# Start in detached mode (background)
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the server
docker-compose down

# Rebuild containers
docker-compose up --build
```

## Production Deployment

```bash
docker-compose -f docker-compose.yml -f docker-compose.remote.yml up -d
```

## Project Structure

```
ame-website/
├── apps/
│   └── frontend/
│       └── website/
│           ├── src/
│           │   ├── app/          # Next.js app directory
│           │   │   ├── components/  # React components
│           │   │   ├── layout.tsx   # Root layout
│           │   │   └── page.tsx     # Homepage
│           │   ├── lib/          # Utility functions
│           │   └── messages/     # Content
│           ├── public/           # Static assets
│           └── Dockerfile        # Container configuration
├── docs/                         # Documentation
├── system-manifests/            # Deployment configurations
└── docker-compose.yml           # Docker configuration
```

## Brand Colors

The website uses a vibrant color palette that can be easily updated in `tailwind.config.ts`:

- **Royal Blue**: `#0A32B4` - Primary brand color
- **Teal**: `#1496B4` - Secondary accent
- **Mint Green**: `#28B496` - Accent highlights
- **Green**: `#1EAA32` - Success states
- **Gold**: `#C8A00A` - Premium features
- **Purple**: `#8C1EB4` - Alternative accent

## Platform Integration

Ask My Envoy is built on top of the TsunAImi agentic AI platform. The website integrates with the platform for:
- Scheduling functionality
- Calendar management
- AI agent interactions

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

This project is private and confidential. 