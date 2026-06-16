# Zero to Commission — Project Status

_Last updated: 2026-06-16_

A running record of where this project stands so we can pick up where we left off.

---

## Current status: ⏳ Waiting on Digistore24 re-review

The product was **rejected once** (standard form-letter checklist), all issues were
addressed, approval was **re-requested**, and a **reply was sent** to
`helpdesk@digistore24.com`. Now waiting to hear back from Digistore24.

---

## The site

- **Live URL:** https://zerotocommission.com
- **Hosting:** GitHub Pages (custom domain via `CNAME`), deploys from the `main` branch
- **Repo:** `hearliferestored-cpu/zerotocommission`
- **Working branch:** `claude/laughing-euler-abs2i3` (merged into `main` via PR #1)

### Pages
| Page | File | Purpose |
|---|---|---|
| Sales page | `index.html` | Main offer; module accordions are previews (videos don't play here — by design) |
| Modules 1–5 | `module-01.html` … `module-05.html` | Actual lesson pages (accessed from thank-you page) |
| Thank-you / access | `thankyou.html` | Post-purchase course access + required compliance notices |
| Upsell | `upsell.html` | DFY Funnel Kit ($97) |
| Bonuses | `bonuses.html` | Bonus downloads |
| Legal | `legal.html` | Company info, refund/guarantee, earnings disclaimer, privacy, terms |
| Affiliates | `affiliates.html` | JV/affiliate recruitment page |
| Tracking | `analytics.js` | **Inert** pixel module (Meta + TikTok) — dormant until IDs are added |

---

## Digistore24 products

| Product ID | Name | Price (active plan) | Site shows | Match |
|---|---|---|---|---|
| 692943 | Zero to Commission (main) | $47.00 | $47 | ✅ |
| 693329 | DFY Funnel Kit upsell | $97.00 | $97 | ✅ |

- Buy buttons link to `https://www.checkout-ds24.com/product/692943` (main) and
  `/product/693329` (upsell). ✅ correct.
- **Note:** Each product's "Add payment plan" form shows a default `$27.00` placeholder.
  That is NOT the live price — the live price is in the saved "Payment plans" table.
  Do not click "Save"/"Add payment plan" on that form.

---

## Compliance checklist (vs. Digistore24's rejection email)

| # | Requirement | Status |
|---|---|---|
| 1 | Websites accessible | ✅ 404s fixed + deployed |
| 2 | Sale prices match D24 system | ✅ $47 / $97 confirmed |
| 3 | Guarantee ≤ 60 days | ✅ consistent 60-day |
| 4 | "Legal Information" link w/ company name, address, tax status | ✅ on sales/thankyou/upsell |
| 5 | Money-making niche ethical/legal | ✅ fake testimonials removed, disclaimers added |
| 6 | Give D24 access to examine product | ✅ thank-you page reachable; offered test access in reply |
| 7 | Correct Digistore24 "Buy now" link | ✅ matches product IDs |
| 8 | State delivery method (digital) on sales + thankyou | ✅ both pages |
| 9 | "Withdrawal will be done by Digistore24" on thankyou | ✅ present |
| 10 | Full download/thank-you page | ✅ all modules + bonuses |
| 11 | No other payment systems on sales/thankyou | ✅ Digistore24 only |
| 12 | Upsell price/terms on buy button | ✅ "$97 — One-Time" |

---

## What was done this session

1. Fixed broken module & bonus navigation (funnel was 404-ing after Module 1)
2. Removed fabricated testimonials; replaced with honest copy (FTC + Digistore24)
3. Tightened legal page (working anchor links, consistent 60-day guarantee, complete address)
4. Added SEO / Open Graph / favicon across all pages
5. Hardened bonus downloads; added inert tracking module
6. Merged branch to `main` (PR #1) → deployed live
7. Confirmed Digistore24 prices match the site ($47 / $97)
8. Requested approval on both products
9. Sent re-review reply to `helpdesk@digistore24.com`

---

## Next steps / open items

- [ ] **Wait for Digistore24 re-review response** (sent 2026-06-16)
- [ ] If approved → product goes live; do a real end-to-end test purchase
- [ ] If rejected again → read the *specific* reason (not the boilerplate) and address it
- [ ] (Optional, later) Add Meta/TikTok pixel IDs to `analytics.js` only when running paid ads
- [ ] (Ongoing) Only ever add real testimonials — never fabricated ones

### Key contacts / references
- Digistore24 support: `helpdesk@digistore24.com`
- Support email on site: `support@zerotocommission.com`
- Business owner: Keath DesRochers (Mansfield, LA)
