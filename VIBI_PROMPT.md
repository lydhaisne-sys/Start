# VIBI build prompt: Vibrez · Glow House

> Copy everything below this line into VIBI.

---

You are VIBI, the Vibrez building agent. Build **Glow House**, the beauty building of the Vibrez universe, exactly as specified here. Follow this brief literally: same structure, same copy, same data, same colours, same interactions. Do not add floors, features, colours or copy that are not listed. Where this brief gives exact text in quotes, use it word for word.

**Reference implementation.** A working reference already exists in the GitHub repository `lydhaisne-sys/Start`, branch `claude/sweet-dirac-ap1kn1`:
- `prototype/index.html`: the full building (universe map, facade entrance, interior with lobby and eight floors). Single file: HTML, CSS and vanilla JavaScript, no framework.
- `prototype/presentation.html`: the interactive 3D presentation (Three.js r128).
- `prototype/assets/`: the facade image and all photos (`assets/photos/CREDITS.md` lists their sources).

If you can read that repository, treat those files as the source of truth and reproduce them; this brief describes the same thing in words. If anything here conflicts with the reference files, the reference files win.

---

## 1. Concept

- **Vibrez** is a new app. Motto: **"Share your passion."** People share passions and gather communities around them. Each passion is a **building** on a shared map called the **Vibrez universe**.
- **Glow House** is the beauty building: makeup, skincare and fragrance. It gathers e-commerce, tutorials, masterclasses from makeup artists, product reviews, chat rooms, salon booking, advice and a give-back floor.
- Goal: a beauty experience people cannot get on Instagram, TikTok or YouTube. Very interactive.
- Core values, visible everywhere: **inclusive, positive, relatable, genuine, welcoming**. Every skin tone, age and gender is represented; no filters; no skin or body shaming; no sponsored reviews.
- Design: **luxury without being pretentious**, easy to navigate, information easy to find, intuitive and lively. **Daytime look in nude colours.** No dark mode: the building always looks like daytime, even when the device is in dark mode.

## 2. What to deliver

1. **Universe view** (the outside): a daytime street on the Vibrez universe map with the Glow House facade in the centre. Tapping the building enters it.
2. **Glow House interior**: a lobby (G) and eight floors (1 to 8), connected by an elevator panel.
3. **3D presentation** (separate page): a 16-slide interactive tour around a 3D model of the building.

All three must work on desktop and on phones (down to 390 px wide) with no horizontal page scroll.

## 3. Design system

### Colour tokens (use exactly these, light only; set `color-scheme: light`)

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#FAF5EF` | page background (ivory) |
| `--surface` | `#FFFDFA` | cards, header |
| `--surface-2` | `#F3E8DE` | subtle fills, inputs, tracks (sand light) |
| `--ink` | `#33241E` | text (espresso) |
| `--muted` | `#7A665B` | secondary text |
| `--line` | `#E8D9CB` | borders |
| `--rouge` | `#A45446` | primary accent (muted rose-terracotta): primary buttons, active states, live dots |
| `--rouge-soft` | `#F4E1D8` | accent tint |
| `--on-rouge` | `#FFFFFF` | text on accent |
| `--gold` | `#946F42` | eyebrows, numerals, gold buttons (white text on gold) |
| `--gold-soft` | `#F2E6D5` | gold tint panels |
| `--night` | `#EBDACB` | "feature" panels (sand-blush): elevator display, live masterclass, promise box, Next Beauty Sensation |
| `--night-2` | `#E2CCBA` | deeper feature panel |
| `--on-night` | `#33241E` | text on feature panels |
| `--ok` | `#4F7A5A` | positive "fit" text |

Shadow: `0 1px 2px rgba(90,60,40,.06), 0 8px 24px rgba(90,60,40,.08)`. Radius: 14 px (cards), 9 px (small), pills fully rounded.

Universe-only colours: sky gradient `#DDE5EA → #EFE6DD → #EAD6C6` with a warm sun glow top-right (`rgba(255,240,220,.9)`); ground band `#DCC7B5 → #D2BAA6`; legend band `#D2BAA6` with text `#5E4B41`; neighbouring buildings sandstone `#DCC6B3 → #C9AE98`, roof details `#B89B85`, windows reflect the sky `#C9D6DC` / `#8C9AA0`.

Skin-tone swatches (10, fair to deep, used everywhere a tone is shown):

| # | Shade | Name | Hex |
|---|---|---|---|
| 0 | 110 | Porcelain | `#F5DCCB` |
| 1 | 140 | Ivory | `#EDCDB3` |
| 2 | 200 | Sand | `#E2B691` |
| 3 | 260 | Beige | `#D5A27B` |
| 4 | 320 | Honey | `#C58A5C` |
| 5 | 380 | Caramel | `#AD7046` |
| 6 | 430 | Amber | `#925935` |
| 7 | 490 | Chestnut | `#764327` |
| 8 | 540 | Espresso | `#59311C` |
| 9 | 590 | Ebony | `#3E2213` |

### Typography (Google Fonts)

- Display: **Bodoni Moda** (italic for the brand and accents), used for headings, numerals and prices. Fallback: Didot, "Bodoni 72", Georgia, serif.
- Body: **Manrope** 400 to 700. Fallback: "Avenir Next", "Segoe UI", system-ui, sans-serif.
- Eyebrow labels: 11.5 px, uppercase, letter-spacing .14em, weight 700, colour `--gold`.
- Floor titles: Bodoni Moda 500, `clamp(30px, 4vw, 44px)`. Hero title: `clamp(42px, 6.4vw, 84px)`, line-height .98.
- Body text 15 px / 1.6.

### Components

- **Buttons**: pill shape, 9×18 px padding, 600 weight. Primary = `--rouge` background, white text. Ghost = transparent with `--line` border (hover: rouge border and text). Gold = `--gold` background, white text. Small variant 6×13 px. No underlines on link-buttons.
- **Chips** (filters, passport choices): pill, 1 px `--line` border, muted text; selected state = `--ink` background with `--bg` text. Use `aria-pressed`.
- **Tags**: small pills (11.5 px, 700). Variants: neutral (`--surface-2`), rouge (`--rouge-soft` / `--rouge`), gold (`--gold-soft` / `--gold`).
- **Live dot**: 7 px rouge circle with a soft pulsing ring.
- **Cards**: `--surface`, 1 px `--line`, radius 14, content-sized.
- **Toast**: bottom-centre pill, `--ink` background, appears for 2.6 s.
- **Dialog**: native `<dialog>`, radius 14, header + scrolling body; closes on ✕, Esc or backdrop click.
- Respect `prefers-reduced-motion` (no animations, instant camera moves). Visible focus ring (2 px rouge).

### Responsive breakpoints

- ≤ 1080 px: 4- and 3-column grids become 2 columns.
- ≤ 900 px: hero stacks; the elevator becomes a sticky horizontal row of floor chips under the header; lobby, 2-column grids and the masterclass feature stack; the Lounge room list becomes a horizontal row above the thread.
- ≤ 620 px: 4- and 3-column grids become 1 column; skin tones show 5 per row; time slots 3 per row.

## 4. Assets

All images live next to the page in `assets/`.

- `assets/glow-house-facade.jpg` (1100×1100): the **daytime facade photo**. A cream-stone Edwardian department store inspired by the grand London stores, with a slate mansard roof and dome, dormers and chimneys, a curved corner entrance with a canopy reading "THE GLOW HOUSE", bronze double doors, columns, topiary in stone urns, black Victorian lanterns, large shop windows and a sunny cobbled street. The poster in the right shop window reads "VIBREZ UNIVERSE". (If you must regenerate it, keep these details and check the spelling on the poster and canopy.)
- `assets/glow-house-facade-night.jpg`: the same building at dusk, kept for a future evening mode. Not used now.
- `assets/photos/`: product and people photos, all free Unsplash images with **no visible brand names**. File names and roles:

| File | Used for |
|---|---|
| `p1.jpg` | Second Skin Serum Foundation (amber dropper bottle, hand) |
| `p2.jpg` | Velvet Lipstick, Rose Nude (nude lipstick, cap off) |
| `p3.jpg` | Barrier Repair Cream (glass jar) |
| `p4.jpg` | Cloud Blush Powder (pink powder pot with brush) |
| `p5.jpg` | Santal Dusk Eau de Parfum (amber square bottle) |
| `p6.jpg` | Glass Skin Rice Toner (dropper bottle on wood) |
| `p7.jpg` | Lash Lift Mascara (pink background) |
| `p8.jpg` | Precision Liquid Liner (pink background) |
| `maya.jpg` / `maya-sq.jpg` | Maya Chen (East Asian woman), wide thumbnail / square avatar |
| `jun.jpg` / `jun-sq.jpg` | Jun Park (East Asian woman, blue light) |
| `nia.jpg` / `nia-sq.jpg` | Nia Adebayo (deep skin, head wrap, smiling) |
| `claire.jpg` / `claire-sq.jpg` | Claire Dubois (woman in her 50s, blonde) |
| `sofia.jpg` / `sofia-sq.jpg` | Sofia Reyes (Latina woman, smiling) |
| `theo.jpg` / `theo-sq.jpg` | Theo Martins (Black man, glasses) |
| `amara.jpg` | Amara Okafor (deep skin, short hair), live masterclass |
| `lea.jpg` | Léa Moreau |
| `arjun.jpg` | Arjun Mehta (South Asian man, laughing) |
| `priya.jpg` | Dr. Priya Nair (South Asian woman) |
| `nadia.jpg`, `emma.jpg`, `kwame.jpg`, `lucia.jpg`, `aiko.jpg`, `sam.jpg`, `imani.jpg` | Review Lab reviewers |
| `zoe.jpg`, `rashid.jpg`, `hana.jpg`, `omar.jpg`, `ali.jpg` | Lounge members |
| `ines.jpg` | Ines Barros, licensed esthetician (tip of the day) |

Names, products, artists and businesses are fictional examples. The people pictured are models. The footer must say: "Glow House · a Vibrez building · Prototype: names, products and businesses are examples. Product and people photos from Unsplash (Unsplash License), shown for illustration; the people pictured are models, not the named members."

## 5. Navigation and routing

- Hash routes. No hash or `#universe` → universe view. `#glow-house` → interior, scrolled to top. A floor id (`#lobby`, `#boutique`, `#studio`, `#masterclass`, `#reviews`, `#lounge`, `#salon`, `#advice`, `#glow-forward`) → interior, scrolled to that floor.
- In the universe view, hide the interior header, hero, building and footer. In the interior, hide the universe.
- The interior header has a "‹ Universe" link back to `#universe`.

## 6. Universe view (outside)

Top bar: "Vibrez" (Bodoni Moda italic, 25 px) + "UNIVERSE" (11 px gold caps) on the left; on the right a live dot and "18,402 people exploring" (hide "people exploring" on phones).

Centred intro:
- Eyebrow: "Share your passion"
- H1 (Bodoni Moda 500, `clamp(34px,5vw,58px)`): "Every building is a passion"
- Paragraph: "Walk the Vibrez universe and step inside the communities you love. Glow House, the home of beauty, is open. Tap it to go in."

**Street**: a horizontal row of buildings standing on a 66 px ground band, bottom-aligned, horizontally scrollable on small screens (scrollbar hidden) and centred on Glow House on load.
- Centre: **Glow House**, a button (`aria-label="Enter Glow House, the beauty building"`) containing:
  - A **pin card** above the building (ivory, radius 14, small pointer underneath, gently bobbing): "Glow House" (Bodoni italic 20 px) / "Makeup · skincare · fragrance" / live dot + "2,431 inside · class live" (rouge, bold) / a rouge pill "Enter →".
  - The **facade photo**, square, width `clamp(320px, 46vw, 600px)`, with a radial mask so its edges fade softly into the sky: `radial-gradient(ellipse 51% 53% at 50% 47%, #000 70%, transparent 100%)`.
  - Two badges floating on the photo (ivory pill, rouge border, live dot): "Masterclass live" at left 6%, top 36%; "Lounge chat" at right 5%, top 47%.
  - Label under it on the ground: "Glow House" (Bodoni italic 18 px, `#7A5634`) / "Beauty · open now".
  - Hover/focus: lift 4 px, scale 1.015, soft warm drop shadow.
- **Neighbours**: three unnamed buildings on each side (no names, no labels, not clickable, `aria-hidden`), drawn as simple SVG silhouettes so the street looks uniform: sandstone gradient body, rows of sky-reflecting windows (12×20 px, pitch 24×38 px, about one in five lighter), faint floor lines, a thin white edge highlight, and one roof each. Left to right: gable (150×250), mansard with dormers and chimneys (190×330), flat with chimney stacks (170×290), Glow House, dome (180×310), mansard (200×350), chimney stacks (150×260). On phones scale them to 55%. Their base sits on the facade photo's street level: bottom margin = 16% of the facade width.
- **Legend** band under the street: "Glow House: open now" (rouge swatch) · "White badge: live right now" · "Neighbouring buildings: more passions to come".
- **Enter animation**: on tap, the facade scales to 3× from its door (`transform-origin: 49% 76%`), brightens slightly, the pin and badges fade, an ivory full-screen fade covers the screen (0.55 s), then route to `#glow-house` and fade back out. With reduced motion, go straight in.

## 7. Interior shell

**Sticky header** (64 px, ivory with blur, bottom border): "‹ Universe" link · brand "Vibrez" + "GLOW HOUSE" · search field (placeholder "Search products, looks, classes, tips…") · bag button with count badge · "My passport" pill showing the member's tone swatch.

**Search**: live results dropdown (max 8) across products, tutorials, masterclasses, Lounge rooms, salons, myths, and fixed entries (routine builder, scent finder, ask an expert, find my foundation shade, Next Beauty Sensation, weekly challenge, giveaway, scholarships, creator path, mentorship). Each result shows its floor (e.g. "1 · Boutique") and jumps there. Empty state: "Nothing for "…" yet. Try "lip", "SPF" or "brows"." Enter opens the first result.

**Hero** (gradient of sand with soft rouge/gold glows; text `--ink`):
- Eyebrow "Vibrez · Share your passion"
- H1: "Welcome to *Glow House*, the home of beauty lovers." ("Glow House" italic gold)
- Lede: "Eight floors for makeup, skincare and fragrance, including one that gives back. Shop shades matched to your skin, learn from artists live, read reviews from people who look like you, and book your next treatment nearby. Every face is welcome here."
- Buttons: gold "Create my beauty passport" (→ `#lobby`), ghost with live dot "Masterclass live now" (→ `#masterclass`).
- Faces strip: 9 overlapping round photos (imani, hana, arjun, claire-sq, kwame, maya-sq, nadia, zoe, omar) + "**2,431 people** are inside right now, every skin tone, age and style."
- Values row (✦ in gold before each): "All skin tones", "All ages", "All genders", "Real, unfiltered skin".
- Right side: a **building directory** shaped like a facade: arched top sign "Glow House" / "EST. ON VIBREZ", then one button per floor from 8 down to G (number in Bodoni gold, name, subtitle, three small window lights; pink = live), then a door arch. Each button jumps to its floor.

**Elevator panel** (desktop: sticky left column, 200 px; shows "Now on / [number] / [name]" in a feature box and links G to 8; the current floor highlights in rouge as you scroll). Floors and subtitles:

| # | id | Name | Subtitle |
|---|---|---|---|
| 8 | `glow-forward` | Glow Forward | Give back, get seen |
| 7 | `advice` | Advice Bar | Tips, routines, experts |
| 6 | `salon` | Spa & Salon | Book a treatment |
| 5 | `lounge` | The Lounge | Chat rooms |
| 4 | `reviews` | Review Lab | Real-skin reviews |
| 3 | `masterclass` | Masterclass Atelier | Live with artists |
| 2 | `studio` | Tutorial Studio | Step-by-step looks |
| 1 | `boutique` | The Boutique | Shop by your shade |
| G | `lobby` | Lobby | Your beauty passport |

Each floor section starts with a small round badge (floor number), the eyebrow (floor name), the title and an intro paragraph (exact copy in section 8). Floors appear top to bottom in order G, 1, 2 … 8.

## 8. Floors

### G · Lobby: "Your beauty passport"
Intro: "Tell us about your skin once. Every floor adapts: shade matches in the Boutique, reviews from people like you, and a routine built for your skin type."
- **Passport panel** "Tell us about you":
  - Skin tone: 10 round swatches (single choice), with "Fair … Shade 320 · Honey … Deep" under them.
  - Undertone chips: Cool, Neutral, Warm, Olive.
  - Skin type chips: Dry, Normal, Combination, Oily, Sensitive.
  - "What I'm working on" (multi-select): Breakouts, Dark spots, Fine lines, Redness, Dullness, Texture, Dark circles.
  - Match card (gold-soft): swatch + "YOUR FOUNDATION MATCH" + shade code + "in Second Skin Serum Foundation · [undertone] undertone".
  - **Shade code** = tone number + first letter of undertone, e.g. 320 + Warm → **320W**.
  - Default passport: tone index 4 (Honey), Warm, Combination, concerns ["Dullness"]. Save to localStorage key `glowhouse.passport` (wrap storage in try/catch).
  - Any change re-renders the Boutique, Review Lab and routine builder.
- **"Happening in the building today"**: five tappable rows (big value + small label, title, subtitle, →), exact data in Appendix A.
- **Promise box** (feature panel): "The Glow House promise" (Bodoni italic, gold) + "No filters on tutorials or reviews. No body or skin shaming. Every product is shown on at least five skin tones before it reaches the Boutique."

### 1 · The Boutique: "Shop with your shade already found"
Intro: "Makeup, skincare and fragrance chosen by the community. Each product shows how well it works for people with your skin."
- Filter chips: All, Makeup, Skincare, Fragrance.
- 4-column product cards: photo (aspect 4:3.4, slight zoom on hover) with tag pills top-left ("New" in rouge, others gold), brand (11 px caps), name, swatch line, fit line, price (Bodoni) and "Add to bag" / "In your bag".
  - Foundation: swatch = member's tone, text "Your shade [code] · 52 shades".
  - Products with swatches: dots + "[n] shades".
  - Fit line (green): "[fit%] of [skin type] skin rate it 4★+" using the member's skin type. Fragrances show their notes instead.
- **Bag drawer** (right, 400 px): photo, name, brand, shade, price, "Remove"; total; "Checkout" shows the toast "Checkout opens in the full Vibrez app". Persist to `glowhouse.bag`. Adding a product toasts "Added [name] in [shade]".
- Product data: Appendix B (`PRODUCTS`).

### 2 · Tutorial Studio: "Learn a look, step by step"
Intro: "Follow along at your own pace. Tick off each step as you go, and filter by how much time you have tonight."
- Filters: All, Under 10 min, Beginner, Advanced.
- 3-column cards: the creator's photo as a 16:10 thumbnail with a dark gradient at the bottom, white tag pills (level + tag), duration in big Bodoni italic ("12 min") and a white round play button; below: title, creator avatar + name + step count, progress bar if started, "Follow along" / "Continue".
- **Follow-along dialog**: "Follow-along · [mins] min · [level]", title, creator; a progress bar; one checkbox per step (checked steps strike through). Save to `glowhouse.tut.[id]`. When all steps are done, show "Look complete. Share it in the Lounge!" and toast "Look complete, beautifully done ✦".
- Data: Appendix B (`TUTORIALS`).

### 3 · Masterclass Atelier: "Learn from the artists behind the looks"
Intro: "Live classes with professional makeup artists. Ask questions in real time and keep the replay forever."
- **Live feature panel** (3 columns: portrait, text, questions):
  - Portrait `amara.jpg` with an "On air" tag.
  - Tag "Live now · 1,284 watching" (the number drifts every 4.5 s).
  - Title "Skin first: the editorial base that looks like nothing at all".
  - Text "Amara Okafor has prepped skin for runway shows for fifteen years. Tonight she works on three models with different skin types and tones, from dry and fair to deep and oily."
  - Buttons: gold "Join the class" (toast "Joining the live class… (video plays in the full app)") and ghost "Save the replay" (→ "✓ Replay saved").
  - A "Live questions" box shows the latest 3 questions, a new one every 4.5 s, cycling through: Kwame "What do you use on oily skin so it doesn't slide?", Emma "Does this work on mature skin with fine lines?", Aiko "Which primer is safe for sensitive skin?", Nadia "How do you pick concealer for dark circles on deep skin?", Sam "Sponge or brush for this base?".
- 2-column class cards: portrait photo left (120 px), artist · role, title (Bodoni), "[when] · live, with replay", a gold seats bar, "[left] of [seats] live seats left", and "Reserve a seat" / "✓ Seat reserved" (toasts "Seat reserved. We will remind you 15 minutes before." / "Reservation cancelled"; saved in `glowhouse.reserved`).
- Data: Appendix B (`CLASSES`).

### 4 · Review Lab: "Honest reviews, from skin like yours"
Intro: "Every review says who wrote it: skin type, tone and how long they wore it. No sponsored reviews. Wear-tested reviews carry a badge."
- Toggle "Only show people like me": keep reviews with the same skin type **or** a tone within ±1 of the member's. Empty state: "No reviews from people with your skin yet. Be the first to write one."
- "Write a review" button.
- 3-column review cards:
  - Reviewer photo (42 px), name, tone dot + "[type] skin · [tone name] · [age]", stars (gold).
  - Product, text, and three meters (Longevity, Finish, Value; rouge bars).
  - Footer: "✓ Wear-tested · [hours]h" (gold tag) or "First impression", and a "Helpful · [n]" toggle.
- **Write-a-review dialog**: "Posted with your passport: [type] skin, [tone] tone."; product select; sliders 1 to 5 for Overall, Longevity, Finish, Value; hours worn; text (min 10 characters; otherwise toast "Add a few more words so others can learn from it"). New review appears first as "You · Glow House member"; it is wear-tested if hours ≥ 4. Toast "Review posted. Thank you for keeping it real ✦".
- Data: Appendix B (`REVIEWS`).

### 5 · The Lounge: "Talk trends with people who get it"
Intro: "Topic rooms for every kind of beauty lover. Each room has a host who keeps the conversation kind and on topic."
- Left: room list (# Trend Watch, # Skincare Science, # Fragrance Corner, # First Steps, each with a subtitle) and a house-rules box: "Lounge house rules: Be kind about every face. Share what worked for you, not what others should change. No selling in the rooms."
- Right: room title (Bodoni), subtitle, host tag; messages with avatar photo, name, "Host" tag, bubble, reaction pills (toggle +1) and a "+" heart; own messages right-aligned in rouge.
- Composer: "Say hi, ask anything, share a find…" + Send. After sending, show "[member] is typing…" for 1.6 s, then add a random reply from that room's reply list with a 💖 1 reaction.
- Data: Appendix B (`ROOMS`).

### 6 · Spa & Salon: "Book a treatment near you"
Intro: "Independent beauty businesses in your area, reviewed by the community. Pick a place, a treatment and a time."
- Left: salon list (monogram tile, name, area · first two services, ★ rating + review count).
- Right booking panel:
  - Choose a treatment.
  - Choose a day: the next 7 days as weekday + date tiles.
  - Choose a time from 09:30, 10:30, 11:30, 13:00, 14:30, 15:30, 17:00, 18:30. Some slots are disabled: those where (index + seed) % 4 = 0, with seed = (char code of the salon id's second character + day index) % 5. All slots are disabled until a day is picked ("Pick a day to see open times.").
  - Summary row with "Request booking", enabled only when all three are chosen.
- Confirmation panel: "Booking request sent" / treatment / "[salon] · [weekday, day month] at [time]" / "In the full app, [salon] confirms here and sends you a reminder the day before. Free cancellation up to 24 hours before." + "Book something else".
- Data: Appendix B (`SALONS`).

### 7 · Advice Bar: "Tips, routines and straight answers"
Intro: "Advice from licensed estheticians, dermatology nurses and makeup artists. Ask your own question and get a real answer."
- **Tip of the day** (gold-soft panel): "Apply sunscreen as the last step of skincare, then wait two minutes before foundation. Your base will slide less and last longer." by Ines Barros, licensed esthetician (photo).
- **Routine builder**: "For [type] skin, morning/evening" with a Morning / Evening switch; numbered steps with optional notes (Appendix B `ROUTINES`).
- **Myth or fact?**: 6 cards that flip in 3D on tap (front: "Myth or fact?" + statement + "Tap to reveal"; back, in a feature panel: verdict + explanation + "Tap to flip back"). Clip horizontal overflow so the flip never widens the page.
- **Scent finder**: "How do you want to feel?" chips Cozy, Fresh, Bold, Romantic → family name, a Top / Heart / Base note pyramid, and "Try Santal Dusk Eau de Parfum, 50 ml" with "Add to bag · €89". Empty state: "Pick a mood and we will suggest a scent family and notes to look for."
- **Ask an expert**: textarea ("e.g. Can I use retinol and vitamin C in the same routine?") + "Send to the experts". New questions appear first with the tag "Waiting for an expert · usually within 24 hours". Two answered examples (Appendix B `QA`).

### 8 · Glow Forward: "Give back, get seen"
Intro: "Competitions, fair giveaways and scholarships. This is where members stand out, grow their audience and open doors for others."
- **Next Beauty Sensation** (feature panel, 2 columns):
  - Tag "Voting open · November".
  - Title "Who will be the next beauty sensation?".
  - Text "Submit one look before 30 November. The community votes, a panel of artists picks three finalists, and the winner gets a masterclass slot, the lobby spotlight and a paid brand collaboration."
  - Gold tags "1,862 entries", "9 days left", "€5,000 prize".
  - Buttons "Submit my look" and ghost "How judging works", which reveals: 1. "Community votes count for 50%." 2. "A panel of three artists scores technique, creativity and storytelling for the other 50%." 3. "Every skin tone, age and gender competes in the same category. No filters allowed."
  - Right column "Top three right now": rank, photo, name, look · votes, "Vote" / "✓ Voted". Voting adds 1 and re-sorts, with the toast "Vote counted. You can vote for each finalist once."
- **Weekly challenge**: "The five-product face". "Create a full look with five products or fewer. Most-loved entry is featured in the Tutorial Studio." + "Join the challenge". 4 entries (photo 4:5, name, look, ♥ count toggle).
- **Giveaway** card: photos p5 and p2. "Win the Atelier Nuit signature set". "Free to enter. No follows, no tagging friends. The winner is drawn live in the Lounge." A live countdown that starts at 2d 14h 05m and ticks every second, "3,904 members entered", and "Enter the giveaway", which changes to "✓ You're in. Good luck!", sets the count to 3,905 and shows the toast "Entered. The draw is live in the Lounge."
- **Glow Forward Scholarships** card:
  - "Talent shouldn't depend on money". "Fully funded makeup-artistry and esthetician courses for members who can't afford the fees. Six places this spring, each with a mentor."
  - Fund bar (gold → rouge gradient) at €18,400 of €25,000. "Funded by 2% of every Boutique order and our brand partners."
  - Toggle "Add €1 to my next order for the fund" (adds €1 to the meter, toast "Thank you. €1 will go to the scholarship fund.").
  - "Apply for a scholarship".
- **Creator path**: "How to stand out on Vibrez", with "You: Member · 120 of 500 glow points" and a progress bar at 24%. 4 steps (current step outlined in rouge), data in Appendix B (`LADDER`).
- **Mentorship circles**: "Eight weeks with a professional". "Six members, one artist or esthetician, a weekly live session and portfolio feedback." Faces amara, lea, arjun, ines. "Request a mentor" → "✓ Request sent".
- **Confidence Days**: "Free makeovers before a job interview". "Partner salons donate an hour of hair and makeup for members heading to an interview. Bring your nerves, leave ready." "Find a partner salon" → `#salon`.
- **Forms** (dialog):
  - Submit look: name of look (required), photo or video file, products used, and the note "No filters or face-editing apps. Entries are checked before voting opens." Toast: "Look submitted. It joins the gallery once it is checked."
  - Scholarship: course select (Makeup artistry (12 weeks) / Esthetician diploma (9 months) / Bridal and editorial makeup (6 weeks)), story (required), checkbox "I can't afford the course fees myself", and the note "Applications are reviewed by the Glow Forward panel. Shortlisted applicants are invited to a short video call." Toast: "Application sent. We reply within two weeks."

## 9. 3D presentation (separate page, `presentation.html`)

- Title "Glow House 3D Tour". Full-screen **Three.js r128** canvas (`https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js`). If WebGL fails, show the facade photo as the background instead.
- Background: the same daytime sky gradient. Top bar: brand + "GLOW HOUSE · 3D TOUR"; hint pill "Drag to turn the building · Click a floor to visit it · ← → to move" (hidden on phones).
- **Model**:
  - Each floor is a box 6 wide × 4 deep (ground floor 1.35 high, other floors 0.95), stacked G to 8, with a cream trim cornice on each.
  - Facade textures are drawn on a canvas: cream stone `#EEDFCC → #E2CDB6` with faint courses, 7 windows on the front and 4 on the sides, arched on odd floors, glass `#D3DEE3 → #93A6AF` with white frames, some with half-drawn blinds.
  - The ground floor has two lit shop windows with products and a bronze arched door, a half-round canopy with a gold rim, two columns, two topiary cones in urns, and two black lantern posts.
  - On top: a slate mansard roof (`#6E7480`), two dormers, four chimneys, a cream drum, a slate dome and a gold octahedron "perfume stopper" finial.
  - Four translucent sandstone neighbour blocks, and a round cobbled plaza.
  - Lights: hemisphere (0.62) + warm sun (0.62, soft shadows) + cool fill (0.22). Use linear output encoding so the colours stay as authored.
- **Slide card**: right side on desktop (`min(440px, 40vw)`), bottom sheet on phones (max 50% height); ivory glass with blur, radius 22. Use a camera view offset so the building is never hidden behind the card.
- **Nav pill** at the bottom: previous / dots / "n / 16" / next. Keyboard ← → PageUp/PageDown, space, Home and End. Deep links `#slide-N`.
- **Camera views**:
  - cover and wide: orbit slowly (auto-rotate).
  - universe: front view from far away.
  - overview: three-quarter view with all floor labels shown.
  - floor: three-quarter close-up of that floor; the floor slides out 1.25 units like a drawer and glows softly; only its label shows.
  - Distance scales with the screen aspect ratio (up to 2.3× on tall phones).
  - Drag rotates the camera; a click on a floor (raycast) or on its label opens that floor's slide.
- **Floor labels**: HTML pills positioned at each floor's front-right corner (number badge + name; rouge when active), clamped inside the screen.
- **16 slides**:
  1. Cover: "Glow House, *the home* of beauty lovers", lede, faces, "Start the tour →".
  2. "A beauty experience social feeds can't give": comparison table (On social feeds / In Glow House):
     - "An algorithm picks what you see" / "Your skin picks what you see"
     - "Filtered skin, sponsored reviews" / "Unfiltered looks, reviews tagged by skin"
     - "Watch, then leave to buy" / "Learn, buy the shade, book a pro"
     - "Comment sections" / "Hosted rooms with house rules"
  3. "Every passion is a building on the map", with the facade photo.
  4. "A lobby and eight floors, one journey", listing all floors.
  5–13. One slide per floor, G to 8, each with 3 to 4 bullets and a row of photos, faces or the skin-tone row.
  14. "Inclusive, positive, genuine" (values + faces).
  15. "Luxury in daylight, never pretentious": swatches Ivory `#FAF5EF`, Sand `#EBDACB`, Blush `#E8C4B0`, Taupe `#A88B79`, Cocoa `#6E5244`, plus the type sample.
  16. "From prototype to opening day", with 5 numbered steps, a link to the clickable prototype and "Restart tour".

  Use the exact slide text in `prototype/presentation.html`.

## 10. Acceptance checklist

- [ ] Opens on the universe street in daylight; Glow House is centred, the facade fades into the sky, the neighbours are unnamed silhouettes.
- [ ] Tapping the building plays the zoom-into-the-door transition and lands on the interior; "‹ Universe" returns.
- [ ] Daytime nude palette everywhere; no dark mode; gold buttons have white text; no underlined buttons.
- [ ] Changing the passport updates the shade code, the Boutique fit lines, "people like me" and the routine builder.
- [ ] Every interaction in section 8 works, with the exact toasts.
- [ ] The search finds items on every floor, including Glow Forward.
- [ ] No horizontal scroll at 390 px; the flip cards don't widen the page; all images load.
- [ ] Every product photo is free of third-party brand names; faces cover every skin tone, men and women, and older members.
- [ ] The 3D presentation has 16 slides; dragging, clicking floors, the keyboard and `#slide-N` links all work on desktop and phone.

---

## Appendix A. "Happening in the building today"

```js
const HAPPENING = [
  { t: '9', s: 'days', h: 'Next Beauty Sensation: voting is open', p: 'Glow Forward · 1,862 entries', go: 'glow-forward' },
  { t: 'Live', s: 'now', h: 'Skin first, with Amara Okafor', p: 'Masterclass Atelier · 1,284 watching', go: 'masterclass' },
  { t: '18:00', s: 'today', h: 'Trend Watch: cherry-cola lips', p: 'The Lounge · hosted chat', go: 'lounge' },
  { t: '−20%', s: 'today', h: 'Atelier Nuit fragrance week', p: 'The Boutique · ends Sunday', go: 'boutique' },
  { t: '3', s: 'slots', h: 'Studio Bloom has openings tomorrow', p: 'Spa & Salon · 0.8 km away', go: 'salon' }
];
```

## Appendix B. Data (use verbatim)

```js
const TONES = [
  { n: 110, name: 'Porcelain', c: '#F5DCCB' }, { n: 140, name: 'Ivory', c: '#EDCDB3' },
  { n: 200, name: 'Sand', c: '#E2B691' }, { n: 260, name: 'Beige', c: '#D5A27B' },
  { n: 320, name: 'Honey', c: '#C58A5C' }, { n: 380, name: 'Caramel', c: '#AD7046' },
  { n: 430, name: 'Amber', c: '#925935' }, { n: 490, name: 'Chestnut', c: '#764327' },
  { n: 540, name: 'Espresso', c: '#59311C' }, { n: 590, name: 'Ebony', c: '#3E2213' }
];
const UNDERTONES = ['Cool', 'Neutral', 'Warm', 'Olive'];
const TYPES = ['Dry', 'Normal', 'Combination', 'Oily', 'Sensitive'];
const CONCERNS = ['Breakouts', 'Dark spots', 'Fine lines', 'Redness', 'Dullness', 'Texture', 'Dark circles'];

const FLOORS = [
  { id: 'glow-forward', n: '8', name: 'Glow Forward', sub: 'Give back, get seen', win: [1, 'live', 1] },
  { id: 'advice', n: '7', name: 'Advice Bar', sub: 'Tips, routines, experts', win: [1, 1, 0] },
  { id: 'salon', n: '6', name: 'Spa & Salon', sub: 'Book a treatment', win: [1, 0, 1] },
  { id: 'lounge', n: '5', name: 'The Lounge', sub: 'Chat rooms', win: [1, 'live', 1] },
  { id: 'reviews', n: '4', name: 'Review Lab', sub: 'Real-skin reviews', win: [0, 1, 1] },
  { id: 'masterclass', n: '3', name: 'Masterclass Atelier', sub: 'Live with artists', win: ['live', 1, 0] },
  { id: 'studio', n: '2', name: 'Tutorial Studio', sub: 'Step-by-step looks', win: [1, 1, 1] },
  { id: 'boutique', n: '1', name: 'The Boutique', sub: 'Shop by your shade', win: [1, 0, 1] },
  { id: 'lobby', n: 'G', name: 'Lobby', sub: 'Your beauty passport', win: [1, 1, 0] }
];

const PRODUCTS = [
  { id: 'p1', cat: 'Makeup', shape: 'bottle', shade: true, brand: 'Maison Lumen', name: 'Second Skin Serum Foundation', price: 38, shades: 52, fit: { Dry: 94, Normal: 91, Combination: 88, Oily: 79, Sensitive: 90 }, tags: ['52 shades'] },
  { id: 'p2', cat: 'Makeup', shape: 'lip', c: '#C98A86', brand: 'Atelier Nuit', name: 'Velvet Lipstick, Rose Nude', price: 26, fit: { Dry: 81, Normal: 92, Combination: 90, Oily: 93, Sensitive: 88 }, tags: ['Community pick'], swatches: ['#C98A86', '#B5605F', '#8E3B46', '#5E2430'] },
  { id: 'p3', cat: 'Skincare', shape: 'jar', c: '#E9D7E6', brand: 'Dermalune', name: 'Barrier Repair Cream', price: 32, fit: { Dry: 97, Normal: 90, Combination: 84, Oily: 71, Sensitive: 96 }, tags: ['Fragrance-free'] },
  { id: 'p4', cat: 'Makeup', shape: 'stick', c: '#D9667A', brand: 'Petal & Co', name: 'Cloud Blush Powder', price: 24, fit: { Dry: 93, Normal: 92, Combination: 89, Oily: 82, Sensitive: 87 }, tags: [], swatches: ['#F2A5A0', '#D9667A', '#B5483F', '#8E3346'] },
  { id: 'p5', cat: 'Fragrance', shape: 'perfume', c: '#C9A37A', brand: 'Atelier Nuit', name: 'Santal Dusk Eau de Parfum, 50 ml', price: 89, fit: null, notes: 'Pink pepper · Iris · Sandalwood', tags: ['New'] },
  { id: 'p6', cat: 'Skincare', shape: 'bottle', c: '#EFC9B6', brand: 'Dermalune', name: 'Glass Skin Rice Toner', price: 21, fit: { Dry: 89, Normal: 93, Combination: 92, Oily: 88, Sensitive: 81 }, tags: [] },
  { id: 'p7', cat: 'Makeup', shape: 'tube', c: '#2B1029', brand: 'Maison Lumen', name: 'Lash Lift Mascara', price: 22, fit: { Dry: 90, Normal: 93, Combination: 91, Oily: 86, Sensitive: 89 }, tags: ['Smudge-proof'] },
  { id: 'p8', cat: 'Makeup', shape: 'tube', c: '#2B1029', brand: 'Atelier Nuit', name: 'Precision Liquid Liner', price: 19, fit: { Dry: 88, Normal: 92, Combination: 90, Oily: 84, Sensitive: 91 }, tags: ['New'] },
];

const TUTORIALS = [
  { id: 't1', img: 'maya', title: 'Soft glam in 12 minutes', mins: 12, level: 'Beginner', by: 'Maya Chen', tone: 2, color: '#C2414F', tags: ['Everyday'], steps: ['Prep with a light moisturiser and SPF', 'Spot-conceal instead of full coverage', 'Cream blush high on the cheeks, blend toward temples', 'Brown shadow in the crease with a fluffy brush', 'Tightline the upper lash line', 'Two coats of mascara, wiggle at the root', 'Tinted balm, blot, reapply'] },
  { id: 't2', img: 'jun', title: 'Smoky eye for monolids', mins: 18, level: 'Intermediate', by: 'Jun Park', tone: 1, color: '#4A3A55', tags: ['Monolids'], steps: ['Prime the whole lid up to the brow bone', 'Pack dark shade at the lash line, eyes open to check', 'Blend upward in small circles', 'Smudge pencil along the lower lash line', 'Add shimmer to the centre of the lid', 'Curl lashes and apply mascara'] },
  { id: 't3', img: 'nia', title: 'Bold red lip on deep skin', mins: 9, level: 'Beginner', by: 'Nia Adebayo', tone: 8, color: '#9E1F3F', tags: ['Lips'], steps: ['Exfoliate lips with a damp cloth', 'Line just outside the natural line with a berry liner', 'Fill with lipstick from the centre out', 'Blot and apply a second layer', 'Clean the edge with concealer on a flat brush'] },
  { id: 't4', img: 'claire', title: 'Glow for mature skin', mins: 15, level: 'Beginner', by: 'Claire Dubois', tone: 0, color: '#D9A07A', tags: ['Every age'], steps: ['Hydrating serum, then a rich cream', 'Foundation in thin layers with fingers', 'Cream highlighter on the top of cheekbones only', 'Lift brows with a tinted gel', 'Skip powder under the eyes'] },
  { id: 't5', img: 'sofia', title: 'Graphic liner for hooded eyes', mins: 20, level: 'Advanced', by: 'Sofia Reyes', tone: 4, color: '#6E5244', tags: ['Hooded eyes'], steps: ['Map the wing with eyes open, looking straight ahead', 'Draw the flick toward the end of your brow', 'Connect to the lash line with a thin line', 'Fill the gap in the hood fold, eyes open', 'Sharpen with micellar water on a cotton bud'] },
  { id: 't6', img: 'theo', title: 'Skin and brows, for everyone', mins: 7, level: 'Beginner', by: 'Theo Martins', tone: 6, color: '#7A8C6A', tags: ['Gender-free'], steps: ['Gentle cleanse and moisturise', 'Tinted SPF for an even look', 'Colour-correct redness with a green-tinted balm', 'Brush brows up and set with clear gel', 'Lip balm to finish'] }
];

const CLASSES = [
  { id: 'c1', artist: 'Léa Moreau', ini: 'LM', role: 'Paris backstage artist', title: 'The French lip, blurred and undone', when: 'Thursday · 19:00', seats: 120, taken: 97 },
  { id: 'c2', artist: 'Arjun Mehta', ini: 'AM', role: 'Film and editorial', title: 'Precision liner for every eye shape', when: 'Saturday · 15:00', seats: 150, taken: 64 },
  { id: 'c3', artist: 'Sofia Reyes', ini: 'SR', role: 'Bridal specialist', title: 'Bridal makeup that lasts 14 hours', when: 'Next Tuesday · 18:30', seats: 100, taken: 88 },
  { id: 'c4', artist: 'Dr. Priya Nair', ini: 'PN', role: 'Dermatologist', title: 'Acids, retinoids and what actually works', when: 'Next Friday · 20:00', seats: 300, taken: 141 }
];

const REVIEWS = [
  { who: 'Nadia', tone: 6, type: 'Oily', age: '30s', product: 'Second Skin Serum Foundation, 430W', stars: 5, m: [5, 4, 4], hours: 10, text: 'First foundation that matches my neck without going grey by lunch. Still there after a ten hour shift with one blot.', helpful: 128, verified: true },
  { who: 'Emma', tone: 1, type: 'Dry', age: '50s', product: 'Barrier Repair Cream', stars: 5, m: [5, 5, 4], hours: 24, text: 'My cheeks used to flake under makeup. After two weeks they are calm and my base sits smoothly.', helpful: 96, verified: true },
  { who: 'Kwame', tone: 8, type: 'Combination', age: '20s', product: 'Invisible Fluid SPF 50', stars: 5, m: [4, 5, 5], hours: 8, text: 'Actually invisible on my skin. No purple cast in photos, which is a first for any SPF 50 I tried.', helpful: 211, verified: true },
  { who: 'Lucía', tone: 4, type: 'Combination', age: '30s', product: 'Cloud Blush Powder, Rosewood', stars: 4, m: [3, 5, 5], hours: 6, text: 'Gorgeous flush and easy to buff in. Fades on my T-zone by the afternoon, so I set it with a little powder.', helpful: 54, verified: false },
  { who: 'Aiko', tone: 2, type: 'Sensitive', age: '40s', product: 'Glass Skin Rice Toner', stars: 3, m: [3, 4, 4], hours: 0, text: 'Lovely texture but it stung a little around my nose on day three. Fine on the rest of my face. Patch test first.', helpful: 77, verified: true },
  { who: 'Sam', tone: 3, type: 'Normal', age: '20s', product: 'Velvet Lipstick, Rose Nude', stars: 5, m: [5, 5, 4], hours: 7, text: 'Survived coffee and lunch. Comfortable for a matte and the nude looks the same in daylight as in the shop.', helpful: 63, verified: true },
  { who: 'Imani', tone: 9, type: 'Dry', age: '30s', product: 'Second Skin Serum Foundation, 590N', stars: 4, m: [4, 5, 3], hours: 9, text: 'They actually made the deepest shades with the right red undertone. Wish the bottle were bigger for the price.', helpful: 142, verified: true }
];

const ROOMS = {
  trends: { title: 'Trend Watch', sub: 'What everyone is trying this week', host: 'Host: Maya', seed: [
    { who: 'Zoe', tone: 2, text: 'Is anyone else doing the cherry-cola lip? Brown liner, red gloss in the centre.', r: { '💄': 12, '🔥': 5 } },
    { who: 'Rashid', tone: 7, text: 'Yes! I use a berry liner instead of brown. Reads more red on my skin.', r: { '💡': 9 } },
    { who: 'Maya', tone: 3, host: true, text: 'Love seeing both versions. Post your photos in the Studio and we will feature a few on Friday.', r: { '💖': 21 } }
  ], replies: ['Saving this combo for the weekend.', 'Tried it today, the gloss in the centre makes such a difference!', 'Does it work with a matte lipstick too?', 'Adding a bit of shimmer on top is so pretty.'] },
  skin: { title: 'Skincare Science', sub: 'Ingredients, routines, real results', host: 'Host: Dr. Priya', seed: [
    { who: 'Hana', tone: 1, text: 'Can I use niacinamide and vitamin C together? Every video says something different.', r: { '🤔': 7 } },
    { who: 'Dr. Priya', tone: 5, host: true, text: 'Yes, modern formulas are fine together. If your skin feels warm or tingly, use vitamin C in the morning and niacinamide at night.', r: { '💖': 34, '💡': 18 } }
  ], replies: ['That is so reassuring, thank you!', 'I alternate them and my skin is much calmer.', 'Which vitamin C works for sensitive skin?', 'Good to hear from an actual expert.'] },
  scent: { title: 'Fragrance Corner', sub: 'Notes, layering, signature scents', host: 'Host: Omar', seed: [
    { who: 'Omar', tone: 6, host: true, text: 'Theme of the week: scents that remind you of a place. Go!', r: { '🌿': 15 } },
    { who: 'Claire', tone: 0, text: 'Fig leaf, always. It smells like my grandmother\'s garden in Provence.', r: { '💖': 22 } }
  ], replies: ['Neroli takes me straight to a summer in Sicily.', 'Anything with vetiver smells like rain to me.', 'Layering vanilla over sandalwood is my cosy combo.', 'I need to smell that fig scent now.'] },
  first: { title: 'First Steps', sub: 'New to makeup? No question is too small', host: 'Host: Theo', seed: [
    { who: 'Ali', tone: 5, text: 'I have never worn makeup. What is the one thing to start with?', r: { '🤗': 11 } },
    { who: 'Theo', tone: 6, host: true, text: 'Welcome! A tinted moisturiser or tinted SPF. It evens your skin and you cannot really get it wrong.', r: { '💖': 19 } }
  ], replies: ['Welcome! Everyone started somewhere.', 'Brow gel was my first, it is so easy.', 'The 12-minute soft glam tutorial in the Studio helped me a lot.', 'Ask anything here, everyone is lovely.'] }
};

const SALONS = [
  { id: 's1', ini: 'B', name: 'Studio Bloom', area: 'Le Marais · 0.8 km', rating: 4.9, n: 412, services: [['Signature hydrating facial', '60 min', 85], ['Brow lamination and tint', '45 min', 55], ['Lash lift', '50 min', 60]] },
  { id: 's2', ini: 'E', name: 'Ébène Beauty Lab', area: 'Château Rouge · 2.1 km', rating: 4.8, n: 287, services: [['Bridal trial makeup', '90 min', 120], ['Event makeup', '60 min', 75], ['Hyperpigmentation peel', '45 min', 95]] },
  { id: 's3', ini: 'K', name: 'Kōji Skin Atelier', area: 'Saint-Germain · 3.4 km', rating: 4.9, n: 198, services: [['Japanese head spa', '75 min', 90], ['Glass-skin facial', '60 min', 110], ['Express glow', '30 min', 45]] }
];

const ROUTINES = {
  Dry: { am: [['Cream cleanser or water rinse', 'Keep natural oils in place'], ['Hyaluronic serum on damp skin', 'Pulls water into the skin'], ['Rich moisturiser', 'Look for ceramides'], ['SPF 50', 'Every day, even when cloudy']], pm: [['Cleansing balm', 'Melts makeup and SPF'], ['Gentle retinoid, 2 nights a week', 'Build up slowly'], ['Barrier cream', 'Seal it all in'], ['Face oil on dry patches', 'Optional']] },
  Normal: { am: [['Gentle gel cleanser', ''], ['Vitamin C serum', 'Brightens and protects'], ['Light moisturiser', ''], ['SPF 50', 'Two finger lengths for face and neck']], pm: [['Double cleanse', 'Oil first, then gel'], ['Retinoid or exfoliating acid, alternate nights', ''], ['Moisturiser', '']] },
  Combination: { am: [['Gel cleanser', ''], ['Niacinamide serum', 'Balances oil and shine'], ['Light gel moisturiser', 'Richer cream only on dry areas'], ['Matte-finish SPF 50', '']], pm: [['Double cleanse', ''], ['BHA on the T-zone, 3 nights a week', 'Clears pores'], ['Moisturiser', ''], ['Spot treatment if needed', '']] },
  Oily: { am: [['Foaming cleanser', ''], ['Niacinamide serum', ''], ['Oil-free gel moisturiser', 'Yes, oily skin needs it too'], ['Fluid SPF 50', 'Lightweight, no shine']], pm: [['Double cleanse', ''], ['BHA or retinoid, alternate nights', ''], ['Light gel moisturiser', '']] },
  Sensitive: { am: [['Rinse with lukewarm water', 'Skip cleanser if skin feels tight'], ['Centella or panthenol serum', 'Calms redness'], ['Fragrance-free moisturiser', ''], ['Mineral SPF 50', 'Zinc oxide is gentle']], pm: [['Milky cleanser', ''], ['Azelaic acid, 3 nights a week', 'Helps redness and marks'], ['Barrier cream', 'Patch test new products for 3 days']] }
};

const MYTHS = [
  { q: 'Oily skin does not need moisturiser.', a: 'Myth. Skipping it can make skin produce more oil. Use a light gel moisturiser instead.' },
  { q: 'Darker skin tones still need sunscreen.', a: 'Fact. Melanin gives some protection, but not enough to prevent sun damage or dark spots.' },
  { q: 'Expensive products always work better.', a: 'Myth. Results come from the formula and how you use it. Many great products cost under €20.' },
  { q: 'You should change mascara every three months.', a: 'Fact. Bacteria builds up in the tube. Replace it sooner if it smells odd or clumps.' },
  { q: 'Makeup is only for women.', a: 'Myth. Makeup is for anyone who enjoys it. The Lounge has a room for everyone.' },
  { q: 'Fragrance lasts longer on moisturised skin.', a: 'Fact. Scent molecules cling to hydrated skin. Try an unscented balm before spraying.' }
];

const MOODS = {
  Cozy: { family: 'Gourmand & woody', top: 'Cardamom, pear', heart: 'Tonka bean, iris', base: 'Vanilla, sandalwood', pick: 'p5' },
  Fresh: { family: 'Green & citrus', top: 'Bergamot, grapefruit', heart: 'Fig leaf, neroli', base: 'Cedar, white musk', pick: 'p5' },
  Bold: { family: 'Amber & spice', top: 'Pink pepper, saffron', heart: 'Rose, oud', base: 'Amber, patchouli', pick: 'p5' },
  Romantic: { family: 'Soft floral', top: 'Lychee, mandarin', heart: 'Peony, jasmine', base: 'Musk, cashmere wood', pick: 'p5' }
};

const QA = [
  { q: 'How do I stop foundation from separating on my nose?', a: 'Use a mattifying primer only on the nose, apply foundation in thin layers and press, do not rub. Set lightly with powder.', by: 'Sofia Reyes, makeup artist' },
  { q: 'Is it safe to use retinol while pregnant?', a: 'Most doctors advise avoiding retinoids during pregnancy. Azelaic acid and vitamin C are generally considered safe. Check with your doctor.', by: 'Dr. Priya Nair, dermatologist' }
];
```

```js
const FINALISTS = [
  { who: 'Imani', img: 'imani', look: 'Copper glass skin', votes: 4210 },
  { who: 'Lucía', img: 'lucia', look: 'Sunset graphic liner', votes: 3874 },
  { who: 'Hana', img: 'hana', look: 'Porcelain rose', votes: 3502 }
];
const ENTRIES = [
  { who: 'Nia', img: 'nia', look: 'Bold berry, five products', loves: 812 },
  { who: 'Theo', img: 'theo', look: 'Clean skin and brows', loves: 640 },
  { who: 'Maya', img: 'maya', look: 'Soft glam in four', loves: 733 },
  { who: 'Zoe', img: 'zoe', look: 'Freckle-friendly glow', loves: 591 }
];
const LADDER = [
  { name: 'Member', how: 'Create your passport and join a room.', perk: 'Vote, enter giveaways and challenges' },
  { name: 'Rising', how: 'Post three looks or a tutorial.', perk: 'Rising badge, entry to mentorship circles' },
  { name: 'Featured', how: 'Win a weekly challenge or reach 1,000 followers.', perk: 'Featured in the Tutorial Studio and Lobby' },
  { name: 'Glow Star', how: 'Become a Next Beauty Sensation finalist or reach 10,000 followers.', perk: 'Paid brand collaborations, host a masterclass' }
];
```

Photo mapping for people (name → file in `assets/photos/`):

```js
const FACES = { 'Maya Chen': 'maya-sq', 'Jun Park': 'jun-sq', 'Nia Adebayo': 'nia-sq', 'Claire Dubois': 'claire-sq', 'Sofia Reyes': 'sofia-sq', 'Theo Martins': 'theo-sq',
  'Amara Okafor': 'amara', 'Léa Moreau': 'lea', 'Arjun Mehta': 'arjun', 'Dr. Priya Nair': 'priya', 'Dr. Priya': 'priya', 'Nadia': 'nadia', 'Emma': 'emma', 'Kwame': 'kwame',
  'Lucía': 'lucia', 'Aiko': 'aiko', 'Sam': 'sam', 'Imani': 'imani', 'Zoe': 'zoe', 'Rashid': 'rashid', 'Maya': 'maya-sq', 'Hana': 'hana', 'Omar': 'omar', 'Claire': 'claire-sq',
  'Ali': 'ali', 'Theo': 'theo-sq', 'Ines Barros': 'ines' };
```
