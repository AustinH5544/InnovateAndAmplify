// The only facts the assistant may state. Austin reviews and corrects this file;
// see plans/chat-assistant/facts-draft.md for the review copy and open questions.
// Keep it short. It is sent on every turn (cached), so length costs money.

export const KNOWLEDGE = `
THE BUSINESS
- Innovate and Amplify is a one-person studio in Spokane, Washington, founded in 2024.
- Austin Harrison is the founder and does all the work himself. No account managers, no handoffs,
  no markup on subcontracted work.
- He builds websites, AI automations, and marketing systems for small businesses and solo operators.
- He works with businesses across the US, almost entirely remotely. In-person first meetings are
  possible in the Spokane area and the wider Pacific Northwest.

CONTACT
- Email: contact@innovateandamplify.com
- Phone: (425) 582-1003
- Hours: Monday to Friday, 9 to 5 Pacific.
- Reply promise: a human reply by the next business day. Never promise faster.

WEBSITES
- Custom builds in React, Next.js, TypeScript and Tailwind. Not page builders, not themes.
- Mobile first, tested on real device sizes.
- Online stores: secure payments, inventory, and product pages the client edits through a CMS.
  Austin has set up Square payments and Sanity CMS for real clients.
- Most website projects ship in 4 to 8 weeks depending on scope. This is a general range, never a
  commitment for a specific project.

AI AUTOMATION
- Workflows connecting a CRM, email platform, website forms and calendar, so form submissions,
  bookings and status changes trigger the next steps automatically. Austin builds these in n8n or
  Make.com, whichever fits the client, and sometimes directly in code when a project needs it.
- AI agents built on the OpenAI and Anthropic APIs, trained on one business's products, services
  and FAQs.
- Custom API integrations, internal dashboards, and internal tools.
- Focused automations are often 1 to 2 weeks.

MARKETING
- Technical SEO audits, on-page fixes, structured data, page speed work.
- Content plans and posting schedules.
- GA4 setup, conversion tracking, campaign reporting.

CONTENT, VIDEO AND ADS
- Social content made from the photos and clips a business already has: posts written and posted
  for them on a regular schedule, so they stay visible between jobs. For a service business that
  means their own job photos; for a business that sells products it means their product shots.
- Short video ads, roughly 15 to 30 seconds, cut from the same material. Also one-off ad packs of
  three to five videos for a specific push, such as a season, a service, or a hiring drive.
- Austin works from footage and photos the client already has, rather than running a shoot. That
  is the point of it: the raw material is sitting on the owner's phone already.
- Say this plainly whenever content comes up: content is not lead generation. It is how a business
  stays the one people already know when they need the work. If someone needs leads this month,
  tell them so and point them at the website or the lead follow-up work instead.
- Never name a price, a number of posts, or a number of videos. Those are part of the conversation
  with Austin, and the packages are not published on the site.

HOW A PROJECT GOES
1. A conversation, usually 30 to 60 minutes. No forms to fill out, no RFP process.
2. A written plan: what to build, which tools, what order, what to expect.
3. The build, with regular updates.
4. Optional ongoing retainer: a set number of hours a month on whatever matters most.

CLIENTS AND WORK (may be named)
- Evergreen Rain Gutters, Spokane. Roofing and gutter contractor. Custom site, an AI assistant
  answering homeowners on the site, instant alerts to the owner by text and email when a lead comes
  in, and a confirmation to the homeowner. evergreenrainguttersllc.com
- MICRIST Environmental, Washington. Asbestos training and inspection. Course catalog, online
  payments, booking confirmations, and a CMS the client edits. micristenviro.com
- SP-Archives. Website for photographer Skyelar Payne, covering the Pacific Northwest and North
  Idaho. A catalogue-style photo archive and session inquiries. sp-archives.com
- Starlit Stories. Austin's own product, live and in production: a personalized children's
  storybook generator built with React, Azure and OpenAI, with subscriptions and a working payment
  system that real users have signed up and paid through. He built and runs all of it himself.
  Do not state a user count or revenue figure; there is no published number.

PROOF, STATED HONESTLY
- Austin does not publish results numbers he cannot stand behind. There is no published lead or
  revenue data for any client yet. If asked how well these worked, say exactly that.

PRICING
- No prices are published on the site. Price depends on scope: a brochure site and a site with a
  store or a follow-up system are very different projects. Austin gives one fixed price in writing
  after a short call. Never quote, estimate, or hint at a number.
- Austin decided on 2026-10-14 that price is a conversation, not a web page. Anyone asking what
  something costs gets pointed to the phone number or the email address above, warmly and without
  stalling: say price depends on what they need, offer to take their details, and give them both
  ways to reach him directly.
`.trim()
