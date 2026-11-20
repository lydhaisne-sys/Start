# Vibrez · Glow House

**Vibrez: share your passion.** Glow House is the beauty building on Vibrez: one place for makeup, skincare and fragrance lovers to shop, learn, review, chat and book treatments.

Open `prototype/index.html` in a browser to walk through the clickable prototype, or `prototype/presentation.html` for the interactive 3D presentation (16 slides: drag to turn the building, click a floor, use ← → to move). Names, products, artists and businesses in it are examples.

## Why Glow House, and not Instagram, TikTok or YouTube

| On social platforms | In Glow House |
|---|---|
| The algorithm decides what you see | **Your beauty passport** (skin tone, undertone, skin type, concerns) shapes every floor |
| Filtered skin, sponsored "reviews" | Unfiltered tutorials, reviews tagged with the reviewer's skin, wear-tested badges, no sponsored reviews |
| Watch, then leave to buy somewhere else | Watch, follow the look step by step, buy the exact shade, book a pro nearby, all in one building |
| Comment sections | Hosted topic rooms with house rules, kept kind and on topic |
| One-way content | Live masterclasses where you ask questions, and experts who answer *your* question |

## Rebuilding with VIBI

`VIBI_PROMPT.md` is a complete build brief for VIBI, the internal Vibrez building agent: concept, design tokens, assets, routing, every floor's exact copy and interactions, the 3D presentation, an acceptance checklist and all data verbatim. Paste it into VIBI to rebuild Glow House exactly; it also points VIBI to this repository as the reference implementation.

## Outside: the facade in the Vibrez universe

The prototype now opens on the **Vibrez universe map**: a night street where each building is a passion. Glow House stands in the middle with its own facade, and the neighbouring lots are unnamed dusk silhouettes, so the street reads as one uniform skyline until other passion buildings are designed.

- **The facade** is a realistic, photo-style daytime image (`prototype/assets/glow-house-facade.jpg`, generated with Canva): a cream-stone department store inspired by London's grand Edwardian stores, with a slate dome, a canopy reading "The Glow House" over bronze doors, shop windows, lanterns and a sunny cobbled street. Its edges fade into the soft day sky of the map. The poster in the right shop window was retouched to read "VIBREZ UNIVERSE". The earlier dusk version is kept as `glow-house-facade-night.jpg` (for example for an evening mode).
- **Live badges** on the photo show what is live right now (masterclass, Lounge chat).
- The earlier hand-drawn version is kept as `prototype/glow-house-facade.svg` (a scalable illustration, useful for icons or a zoomed-out map).
- **Tap the building** (or its "Enter" pin) and the view zooms into the door, then opens the Glow House lobby. A "Universe" link in the header takes you back to the map.
- The facade is also saved on its own as `prototype/glow-house-facade.svg`, so the map team can place it in the full Vibrez universe.

## The building, floor by floor

| Floor | Name | What happens there |
|---|---|---|
| G | **Lobby** | Beauty passport (10 skin tones × 4 undertones, skin type, concerns) → instant foundation match. "Happening today" board. The Glow House promise. |
| 1 | **The Boutique** | E-commerce. Your shade is preselected; each product shows "% of people with your skin type who rate it 4★+". Filters: makeup, skincare, fragrance. Bag. |
| 2 | **Tutorial Studio** | Step-by-step looks with a follow-along mode (tick steps, progress saved). Filters by time and level. Looks for monolids, hooded eyes, deep skin, mature skin, gender-free grooming. |
| 3 | **Masterclass Atelier** | Live classes with professional makeup artists and dermatologists, live Q&A, seat reservation, replays. |
| 4 | **Review Lab** | Reviews that state skin type, tone, age range and hours worn. Longevity / finish / value scores. "Only show people like me" switch. Write-a-review flow. |
| 5 | **The Lounge** | Chat rooms: Trend Watch, Skincare Science, Fragrance Corner, First Steps (beginners). Each has a host and house rules. Reactions. |
| 6 | **Spa & Salon** | Local beauty businesses with community ratings. Pick a treatment, day and time, request a booking. |
| 7 | **Advice Bar** | Tip of the day, routine builder (AM/PM per skin type), myth-or-fact cards, scent finder by mood (note pyramid), "Ask an expert". |
| 8 | **Glow Forward** (give back, get seen) | Next Beauty Sensation monthly talent search (community votes + artist panel, paid brand collaboration to win), weekly challenges, fair giveaways (free, no follow-for-follow), Glow Forward Scholarships (funded makeup and esthetician courses for members who can't afford them, paid by 2% of Boutique sales and partners), a creator path from Member to Glow Star, mentorship circles and free Confidence Day makeovers before job interviews. |

Navigation is an **elevator**: the building facade in the hero, a sticky floor panel on desktop (a swipeable floor bar on phones), and a search bar that finds anything in any floor.

## Real photos inside

The Boutique shows real, unbranded product photos, and real faces across every skin tone in the passport appear on tutorials, masterclass artists, reviews, the Lounge and the lobby ("2,431 people are inside right now"). Photos are from Unsplash (see `prototype/assets/photos/CREDITS.md`); the people pictured are models, and the names next to them are fictional.

## Core values in the product

- **Inclusive:** every product is shown on at least five skin tones; shade ranges, tutorials and creators cover all tones, ages, genders and eye shapes. A "First Steps" room for beginners.
- **Positive:** hosted rooms, house rules ("share what worked for you, not what others should change"), no skin or body shaming.
- **Relatable and genuine:** unfiltered content, reviews tied to the reviewer's skin, wear-test badges, no sponsored reviews.
- **Welcoming:** plain language, a passport that takes 20 seconds, nothing gated behind expertise.

## Design language

- Luxury without pretension, in daylight: a nude palette of ivory, sand, blush nude, taupe and cocoa, with a muted rose-terracotta accent and soft gold.
- Bodoni Moda (italic, used sparingly) for a beauty-house feel; Manrope for clear, friendly reading.
- A deliberately light, daytime look, phone-first layouts, keyboard accessible, respects reduced motion.
- Lively: lit windows on the facade, live dots, a live question feed, reactions, micro-interactions.

## Suggested next steps

1. Validate the floor list with 5–10 target users (which floor would they open first?).
2. Decide the business model per floor: Boutique commission, masterclass tickets or membership, salon booking fees, brand-sponsored (clearly labelled) events.
3. Define moderation: hosts per room, reporting, expert verification (licence checks for estheticians and dermatologists).
4. Shade-matching data: partner with brands for full shade libraries per undertone.
5. Move from prototype to app: shared Vibrez design system, real accounts, payments, live video provider, booking calendar integration.
