# Nate B. Jones Website Project: Development Memory

This document serves as a development log and reference for key project enhancements and configuration details for the Nate B. Jones AI Career Strategist website.

## Latest Updates (2025-06-25)

### Notes Section Carousel Enhancement
- Refactored the Notes section to use a horizontally scrollable carousel with natural swipe/drag navigation
- Implemented using `embla-carousel-react` with the following enhancements:
  - Added `embla-carousel-wheel-gestures` plugin to enable two-finger horizontal scrolling on Mac trackpads
  - Enabled `dragFree` option for natural momentum-based scrolling
  - Positioned carousel navigation buttons as overlays inside the carousel container
  - Removed individual note links in favor of a single "Browse all notes on Substack" button
- Implementation can be found in `/src/components/NotesSection.tsx`

### Navigation Structure Update
- Reordered navigation links in both header and footer to maintain consistency:
  - New order: Insights, Archive, Notes, Leaderboard, Chat, About
- Updated in both `/src/components/Header.tsx` and `/src/components/Footer.tsx`

### Social Proof Data Update
- Updated TikTok follower count in the About section from 297K+ to 299K+ to accurately reflect current count (298.6K rounded)
- Updated in `/src/lib/data.ts` (STATS array)
- Ensures consistency with the follower count shown in the hero section

### Deployment Configuration
- Successfully deployed to Netlify via Windsurf deployment tool
- Deployment URL: https://nate-jones-ai-career-strategist.windsurf.build
- Project ID: `ae072de2-d223-41ef-95b6-d08e72c338f4`

#### Netlify Configuration
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

This configuration ensures proper handling of Next.js 14 with the App Router architecture. The site is built using `npm run build` and the build output is published from the `.next` directory.

## Development Guidelines

### Running the Development Server
- Always start the server on port 3000: `npm run dev -- -p 3000`
- Keep the server running throughout development sessions
- Before starting a new server, check for and kill any existing processes on ports 3000-3002

### File Size Management
- Keep files under 300-400 lines
- Split larger components into smaller, modular pieces
- Use proper TypeScript interfaces for all components

### Code Organization
- Follow the project structure outlined in README.md
- Keep business logic separate from UI components
- Ensure all components are properly typed with TypeScript

## Future Enhancements

### Planned Features
- Live API integration with Substack for automatic content updates
- Analytics implementation for conversion tracking
- Additional interactive elements for better engagement
- User testing and UX refinement based on feedback

## Deployment History

### Latest Deployment (2025-06-25)
- Provider: Netlify via Windsurf
- URL: https://nate-jones-ai-career-strategist.windsurf.build
- Built with Next.js 14.2.30
- Deployment ID: `2fae2ae1-76c0-4091-beb1-00d08b6a3184`

## Troubleshooting Guide

### Common Issues

#### Netlify Deployment "Site not found" Error
If encountering "Site not found" errors with Netlify deployment:
1. Check the `netlify.toml` configuration is correct for Next.js 14
2. Ensure the `publish` directory is set to `.next` (not `out`)
3. Verify the Next.js plugin is properly configured
4. Redeploy with corrected configuration

#### Development Server Port Conflicts
If port 3000 is already in use:
```bash
# Find the process using port 3000
lsof -i :3000
# Kill the process
kill -9 [PID]
# Start the server again
npm run dev -- -p 3000
```

## Reference Links

- Project Repository: `/Users/dimxatz/Desktop/Nate project/AI Career Strategist for Nate/nate-site`
- Live Site: https://nate-jones-ai-career-strategist.windsurf.build
- Netlify Dashboard: Access via claim URL (contact administrator)
- Substack Content: https://natesnewsletter.substack.com
