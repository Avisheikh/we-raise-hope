# We Raise Hope — Final Website

Production nonprofit site: **Feeding America–style information architecture** + master audit credibility system (proof → donate).

## Structure (Feeding America discipline)

1. Donate-first header + trust strip  
2. Hero: brand + strong slogan + dual CTAs  
3. Start here pathways  
4. Make a difference (donate / monthly / volunteer / events)  
5. The need + live field math  
6. What we do (programs)  
7. Hospital flagship spotlight  
8. How we work (WRH → Jay Nepal → Municipality → Hospital)  
9. Impact counters + stories  
10. Partners  
11. Transparency strip  
12. Give today (Givebutter embed)  
13. Join us close  

## Audit-aligned routes

| Route | Purpose |
|--------|---------|
| `/` | Proof-first homepage |
| `/bodgaun-hospital` | SEO/credibility flagship |
| `/impact` | Evidence room |
| `/news` | 2026 field updates (source of truth) |
| `/trust` | Transparency & financials |
| `/donate` | Primary Givebutter journey |
| `/programs` | Program landing |
| `/about` `/team` `/get-involved` `/ways-to-give` `/where-money-goes` `/contact` | Supporting IA |

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

LAN: `http://YOUR_IP:3000` (`next dev --hostname 0.0.0.0`).

## Env

- Givebutter account `ylAigQK73xNS12hH`, widget `LeZZmE`
- Zelle `info@weraisehope.org`
- Candid URLs in `.env.local`

## Still provide when ready

1. IRS Letter PDF → `public/documents/irs-determination-letter.pdf`  
2. Charity Navigator profile URL  
3. GA4 + Givebutter conversion tracking  
4. Full street mailing address (optional)  
5. Confirm LinkedIn/entity address consistency  

## Deploy

Vercel → point `weraisehope.org` → submit `/sitemap.xml` in Search Console.
