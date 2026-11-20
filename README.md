# TAU HOGO Digital Menu

Production-style Next.js starter for a responsive restaurant digital menu.

## Stack
- Next.js 15 + React 19
- TypeScript
- Component-based client UI
- QR code generated from the current deployed URL (`qrcode.react`)
- WhatsApp order handoff using a pre-filled order message

## Run locally
1. Install Node.js 20.9+.
2. Extract this folder.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open http://localhost:3000.

## Build
- `npm run build`
- `npm start`

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Keep the default Next.js build settings.
4. Deploy. The QR dialog will encode the deployed URL.

## Before real commercial use
- The public listing URL and venue identity are included as references.
- The 50 product rows below are transcribed from the publicly surfaced menu details available during this prototype build. They are not a verified complete menu; the earlier 2GIS listing showed 85 menu positions, but the remaining 35 were not all available in accessible text.
- Confirm all product names, prices, portions, availability, contacts and opening hours directly with Tau HOGO.
- Confirm which WhatsApp number should receive orders. Two public contact numbers are offered as a selectable choice, not as a confirmed ordering endpoint.
- Replace category stock photography with venue-approved food photography. Stock photos are illustrative and must not be presented as photos of actual dishes.
- Obtain the venue's permission before using its name, logo, photos or taking orders on its behalf.
- No payment processing, POS integration or reservation backend is included. WhatsApp is a customer-side handoff, not an integrated order management system.

## Project structure
- `app/page.tsx` — route entry
- `app/layout.tsx` — document metadata/layout
- `app/globals.css` — responsive visual system
- `components/MenuApp.tsx` — menu, filtering, cart, checkout and QR interactions
- `data/menu.ts` — typed product and category data
- `data/i18n.ts` — RU/KZ/EN interface translations
