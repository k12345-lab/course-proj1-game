# IDG "Product Thinking" learning pathway: source notes

Source: Institute of Digital Government (IDG), Singapore (www.idg.gov.sg). Retrieved 2026-09-24.

Method: I fetched each page with WebFetch, and also downloaded its raw HTML with curl and pulled the text out. **Most of the substance on each module page is in infographic PNGs** (hosted on isomer-user-content.by.gov.sg). The page text only gives short intros. I downloaded every infographic and transcribed it verbatim below. Items marked [INFOGRAPHIC] are transcribed from images. Other quotes are from the page's HTML text. Nothing here comes from outside knowledge.

Each module also has an embedded YouTube video. **I did not retrieve the video content (no transcripts)**. Only the titles are recorded (from YouTube oEmbed).

Every module page is tagged "Learning Pathway: AI Build 301". Each module links "Return to - AI 301: Build with AI" (/ai-build-301/). Site contact: idg@mddi.gov.sg. There is also a feedback form on form.gov.sg.

Note on numbering: the module order on the hub page does not match the URL slugs. productthinking3 is Module 2 and productthinking2 is Module 3. The "Next Guide" links also run in a different order from the hub:
- The hub order is 1 → 2 (4Cs) → 3 (Whys) → 4 ...
- The page links run 1 → Whys (pt2) → 4Cs (pt3) → Metrics (pt4) ...
- The content itself follows the page-link order. The 4Cs page opens with "We've found the root cause. Now we need to articulate it...", and the 4Cs "Cause" says "Connect back to your Five Whys". So Five Whys comes **before** 4Cs in practice.

---

## Hub page: Product Thinking
URL: https://www.idg.gov.sg/product-thinking/ (page says "Last updated 10 July 2026")

Intro (verbatim): "Before you build, you need to think clearly about the problem. Learn how to define, scope and frame challenges so your AI solutions solve the right thing."

Preview video: "Learning Pathway Preview" (YouTube DqGP6BvyRdk, the same video as Module 1). Not retrieved.

### Learning Objectives (verbatim)
1. "Apply the 4Cs Framework to write a clear, data-backed problem statement before any build begins."
2. "Distinguish between outputs and outcomes — and define success by the change achieved, not the features delivered."
3. "Use root cause analysis techniques like the Five Whys to move from surface symptoms to the real underlying problem."

### Module list (verbatim blurbs)
1. **Understanding the Problem**: "Learn why great digital solutions start with problems, not technologies. This module introduces the product thinking mindset and its three core principles: problems before solutions, outcomes over outputs, and Policy-Ops-Tech integration." → /guides-and-resources/productthinking1/
2. **Craft a Clear Problem Statement**: "A vague problem leads to a vague solution. This module walks you through the 4Cs Framework — Clarity, Consequence, Cause, and Confirmation — to write one sharp, data-backed problem statement before any build begins." → /guides-and-resources/productthinking3/
3. **Start With The Whys**: the hub page repeats the Module 2 blurb here word for word, which looks like a copy/paste error on IDG's side. → /guides-and-resources/productthinking2/
4. **Metrics**: "Knowing what to measure is as important as knowing what to build. This module covers how to choose metrics that reflect real outcomes, not just activity, so you can track whether your solution is actually working." → /guides-and-resources/productthinking4/
5. **Assumptions and Risks**: "Every solution rests on assumptions. This module teaches you how to surface, stress-test, and de-risk those assumptions early — before they become expensive mistakes in production." → /guides-and-resources/productthinking5/
6. **A Good Customer Experience**: "We have a problem statement, metrics, and a handle on risk. Now: what does it actually feel like to use what we build?" → /guides-and-resources/productthinking6/
7. **Key Takeaways**: "Wrap up with the key takeaways for this learning pathway. Product thinking is a discipline of asking better questions before reaching for solutions." → /guides-and-resources/productthinking7/

Call to action (verbatim): "Ready to think like a product team? Join public officers applying smarter problem-solving frameworks to real government challenges." Buttons: Start Learning / View All Courses (/guides-and-resources/).

### Additional Resources
"Interested to learn more about Product Thinking? Explore Craft, a curated collection of product thinking and product management resources developed by GovTech practitioners." Link: https://craft.cio.sandbox.gov.sg/ ("Go to the Craft page (public officers only)").

---

## Module 1: Understanding the Problem
URL: https://www.idg.gov.sg/guides-and-resources/productthinking1/ (dated 19 May 2026)
Video: "Product Thinking - Introduction (1 of 7)" (YouTube DqGP6BvyRdk). Not retrieved.

Subtitle: "Learn why great digital solutions start with problems, not technologies."

Key text (verbatim): "Great digital products start with problems, not solutions. Projects can struggle even when execution is strong, especially when they are solving the wrong problem. The key is to diagnose the real problem first, then decide what to build."

### [INFOGRAPHIC] THE COMMON TRAP (pitfall + government examples)
"These all sound like problems. They're actually solutions in disguise."

| What we hear | Real issue |
|---|---|
| "We need more AI." | officers struggle to make decisions from large, unwieldy datasets. |
| "We need a superapp." | citizens can't access services efficiently across platforms. |
| "We don't have a CRM." | cumbersome processes causing long wait times for citizens. |
| "Our product is end of life." | citizens and officers will lose access to critical services. |

Callout: "When we skip proper problem definition, we risk building the wrong thing entirely: on time, on budget, and completely unhelpful."

### [INFOGRAPHIC] THREE PRINCIPLES ("Three principles help us do better")
1. **Focus on the problem, not the solution**: "Who are our users, what are they trying to do, and what's getting in their way?"
2. **Chase outcomes, not outputs**: "A website with five buttons is an output. More citizens completing transactions is an outcome."
3. **Integrate policy, ops, and tech**: "No initiative succeeds when these three work in silos. Bring them into one room with shared goals."

### [INFOGRAPHIC] THE PATTERN: NAIL ONE PROBLEM FIRST, THEN SCALE
Page text: "Many successful products started by solving a specific problem for a defined group of users, then expanded over time."
- **Grab**: started with "Make taxis safer, more reliable, easier to book" → now "A full superapp across Southeast Asia"
- **Amazon**: started with "Books: one category, more accessible and affordable" → now "The everything store"
- **Netflix**: started with "Make DVD rentals cheaper and more reliable" → now "Streaming + recommendation algorithms"

Callout: "The foundation wasn't technology, it was a precise understanding of one problem, solved exceptionally well."

No exercise or quiz on this page.

---

## Module 2: Craft a Clear Problem Statement (4Cs)
URL: https://www.idg.gov.sg/guides-and-resources/productthinking3/ (dated 22 May 2026)
Video: "Product Thinking - Crafting a Clear Problem Statement (3 of 7)" (YouTube aBSAouM7iaE). Not retrieved.

Subtitle: "Learn to use the 4Cs framework to structure a clear problem statement."
Intro (verbatim): "We've found the root cause. Now we need to articulate it clearly, in a way that aligns the team and keeps everyone focused on the right problem."

### [INFOGRAPHIC] THE 4Cs FRAMEWORK
"Four dimensions. One statement. No solutions yet."
- **Clarity**: "Who is affected? What are they trying to do? What's broken and how severely?"
- **Consequence**: "What happens if we don't solve this? If "not much," it may not be worth solving."
- **Cause**: "Why does this problem exist? Connect back to your Five Whys. Point toward the root."
- **Confirmation**: "What evidence shows this problem is real, significant, and worth prioritising?"

### [INFOGRAPHIC] WORKED EXAMPLE: REPEATED FORM-FILLING ACROSS GOVERNMENT SERVICES
Page text: "Let's use an example of citizens needing to repeatedly fill forms across government services."
- **Clarity (WHO + HOW BAD)**: "Citizens fill in the same information 15+ times. Each form takes 20–30 minutes; many give up and miss out on benefits they're entitled to."
- **Consequence (STAKES IF UNSOLVED)**: "Citizens lose support they qualify for. Trust erodes. The burden falls heaviest on those least equipped to navigate complex processes."
- **Cause (ROOT REASON)**: "Services were built independently, by different agencies, at different times, with no shared data layer."
- **Confirmation (EVIDENCE)**: "68% of transactions abandoned due to form-filling frustration." "204,000 incomplete out of 300,000 annually"

### [INFOGRAPHIC] EXERCISE ("Try it! For the problem you identified, draft a problem statement for it using the 4Cs.")
1. "Take the problem space you identified using the Five Whys."
2. "Draft a problem statement using the 4Cs: all four fields, one statement."
3. "Check: does your statement describe the problem, or sneak in a solution?" (a self-check for the pitfall of stating a solution)

---

## Module 3: Start With The Whys (Root Cause Analysis / Five Whys)
URL: https://www.idg.gov.sg/guides-and-resources/productthinking2/ (dated 19 May 2026)
Video: "Product Thinking - Starting With the Why (2 of 7)" (YouTube wdzcM6ax5YY). Not retrieved.

Subtitle: "Use the Five Whys Framework to uncover and target the root cause of the problem."
Key text (verbatim): "Before reaching for a solution, understand why the problem exists. The Five Whys is a simple tool that moves you from symptom to cause."

### [INFOGRAPHIC] THE FIVE WHYS: TWO EXAMPLES
"Ask "why?" five times. Each answer peels back a layer, moving you from symptom to cause."

**Everyday example: ran a red light**
1. Why? You were late for work
2. Why? You woke up late
3. Why? Your alarm didn't go off
4. Why? The battery was flat
5. Why? You forgot to replace it
→ "Fix: replace the battery, not buy a new alarm"

**Government example: applicants can't access grants**
1. Why? Applications take too long to process
2. Why? Officers spend too much time going back and forth
3. Why? Applications keep coming in incomplete
4. Why? The form is full of internal jargon
5. Why? The form was designed around how the agency works, not how applicants think
→ "Fix: redesign the form, not the processing system"

### [INFOGRAPHIC] CHOOSING THE RIGHT LEVEL TO FIX
Page text: "Problems rarely have one root cause. The goal is to find causes that are within your control and closely connected to the outcome you want to change."
Infographic: "The goal isn't to find a perfect root cause, it's to find causes within your control and closely connected to the outcome you want."
- AIM FOR: "Closer to the root cause"
- AIM FOR: "Within your timeline and resource limits"
- AVOID: "Fixing symptoms while the root cause persists"
- AVOID: "Causes outside your sphere of influence"

### [INFOGRAPHIC] EXERCISE ("Try it out! Go through the Five Whys exercise with an existing problem your team is facing.")
1. "Think of a problem your division is currently facing."
2. "Ask "why?" five times. Write down each answer."
3. "Which reasons sit within your sphere of influence?"

---

## Module 4: Metrics
URL: https://www.idg.gov.sg/guides-and-resources/productthinking4/ (dated 19 May 2026)
Video: "Product Thinking - Defining Useful Metrics (4 of 7)" (YouTube Rtb_tlSzTJ0). Not retrieved.

Subtitle: "Learn how to choose metrics that help you track progress towards meaningful outcomes."
Intro (verbatim): "We have a problem statement. Now we need to know how we'll measure progress. Three tools help us define better metrics:
- SMART: what good metrics look like
- Leading and lagging indicators: how to find the right one to track
- Value-cost ratio: a lens for assessing return on investment"

### Tool 1: SMART
Page text: "Use SMART as a check for whether a metric is specific, measurable, achievable, relevant and time-bound."
[INFOGRAPHIC] "Five properties every good metric should have. If you can't make it SMART, your problem statement may be too broad."
- **Specific**: "Target a precise outcome, not a vague direction"
- **Measurable**: "Use a concrete data point, not a feeling"
- **Achievable**: "Ambitious but grounded in real capacity"
- **Relevant**: "Moves when the problem is being solved"
- **Time-bound**: "Anchored to a specific timeframe"

Example: "Improve click-through rate from 20% to 25% by end of Q3," not "make the website better"

### Tool 2: Leading and Lagging Indicators
Page text: "Leading indicators provide early feedback, while lagging indicators measure real outcomes. The key is understanding how they work together."
[INFOGRAPHIC] "Your key metric lives between the extremes. Track leading indicators for faster feedback; lagging indicators to verify real impact."
The chain runs from ← Leading (easy to measure) to Lagging (closer to outcome) →. The example is a teachers' messaging tool:
ONBOARDED "Teachers onboarded daily" > ADOPTED "Used a specific feature" > ENGAGED "Crafted message in 30 min" > APPROVED "Campaign approved in 2 days" > OUTCOME "Time saved per teacher"

Callout: "Low adoption in week two tells you it probably isn't saving anyone time; no need to wait until quarter-end."

### Tool 3: Value-Cost Ratio (VCR)
Page text: "The Value-Cost Ratio (VCR) is a simple lens for comparing the value a solution is expected to create with the resources required to deliver it." ... "Not all public-sector value can or should be expressed in dollars, so use VCR as one input alongside other considerations."
[INFOGRAPHIC] "A whole-of-government metric. Units of value generated per dollar spent."
- Worked example: 100,000 messages created ÷ $10,000 platform cost = 10 messages per dollar
- "VCR DOESN'T TELL YOU: Whether a number is good or bad in isolation"
- "VCR DOES SHARPEN: What would an extra dollar of investment return?"

### Exercise ("Try it out!", verbatim)
1. "Identify the most appropriate metric for your problem statement."
2. "Map your leading and lagging indicators to locate that metric on the chain."
3. "Derive your current VCR. What would need to change to improve it?"

---

## Module 5: Assumptions and Risks
URL: https://www.idg.gov.sg/guides-and-resources/productthinking5/ (dated 19 May 2026)
Video: "Product Thinking - Testing assumptions and mitigating risks (5 of 7)" (YouTube _iZNhzdLd7A). Not retrieved.

Subtitle: "Learn to surface, stress-test, and de-risk assumptions early."
Intro (verbatim): "We have a problem statement and metrics. Before we build anything, we need to ask: what could go wrong, and what's the cheapest way to find out? Let's look at three common types of risk digital products can face."

### [INFOGRAPHIC] THREE TYPES OF RISK
"Every digital product faces risk. If a project seems entirely risk-free, someone isn't looking hard enough."
- **Market risk**: "Will anyone use this? And will it actually solve the problem?"
- **Technical risk**: "Is this too complex or costly to build, relative to impact?"
- **Team risk**: "Do we have the right capabilities to pull this off?"

### [INFOGRAPHIC] FOUR STAGES OF DE-RISKING
Page text: "One practical way to de-risk is to build and test in stages: proof of concept, proof of value, scale and maturity."
Infographic: "Build in stages. At every stage, users have something functional. At every stage, you're learning."
Each stage has an icon: skateboard → scooter → car → tools.
1. **Proof of concept**: "One segment, one use case"
2. **Proof of value**: "Can it scale?"
3. **Scale**: "Reach as many users as possible"
4. **Maturity**: "Get better over time"

"STARTED SMALL. SCALED WHAT WORKED.":
- Amazon: Started with books
- Facebook: One university
- Airbnb: Founders' spare room
- Netflix: DVD rentals
- Grab: Taxis only
- SG Health Booking: FormSG + Excel sheet

### De-risking strategies (page text, verbatim)
- "To address **market risk**: get your product in front of real users as early as possible."
  "The Singapore health appointment booking system started as a FormSG form feeding into an Excel sheet. This is not scalable, but it was the lowest-cost way to validate the approach. An A/B test showed zero bookings from the control group versus 24 from the treatment group, with users sharing the link unprompted. One variable. Clear result."
- "To address **technical risk**: start small. A proof of concept doesn't need to be scalable, it just needs to be testable. The goal is to find out whether the solution works before committing to building it properly."
- "To address **team risk**: structure for speed, focus, and flexibility, with policy, ops, and tech expertise in one room, and clear accountability for every role."

### [INFOGRAPHIC] CASE STUDY: HEALTH APPOINTMENT BOOKING
"Hypothesis: make it easier to book vaccines and more people will get vaccinated. Key risk: market risk."
A/B TEST, 2 WEEKS, 1 VARIABLE:
- Control group: "Standard letter. Find a clinic yourself." → **0** appointments booked
- Treatment group: "QR code linking to the booking flow." → **24** appointments; "users shared the link unprompted"

Callout: "The first version wasn't scalable. That wasn't the point, it was the lowest-cost way to validate the approach."

### [INFOGRAPHIC] REFLECTION QUESTION
"What is the key risk that could prevent your initiative from succeeding, and what's the simplest experiment you could run to find out?"

---

## Module 6: A Good Customer Experience
URL: https://www.idg.gov.sg/guides-and-resources/productthinking6/ (dated 21 May 2026)
Video: "Product Thinking - Design a good customer experience (6 of 7)" (YouTube wMe7WgWzIe8). Not retrieved.

Subtitle: "We have a problem statement, metrics, and a handle on risk. Now, what does it actually feel like to use what we build?"
Key text (verbatim): "Good customer experience isn't a nice-to-have, it's necessary. This matters especially for essential public services, where people may not have alternatives."

### [INFOGRAPHIC] DESIGN PRINCIPLES
- **The product thinks for the user**: "If it needs a lengthy tutorial, that's a signal about the design, not about your users."
- **Solve specific frustrations**: "Each feature should address a real, named pain point, not just add capability."
- **Make smart trade-offs**: "Get essentials right first. Build a roadmap for everything else."
- **Especially when it's mandatory**: "When citizens can't go elsewhere, the standard for good design is higher, not lower."

### [INFOGRAPHIC] GOVERNMENT CASE STUDIES
Page text: "Strong government digital products often start by addressing a specific, real problem for users."
Infographic: "Two examples of solving real, specific frustrations, not just building features."
- **ParkingSG**
  - "Auto-calculates fees: no mental maths or guessing"
  - "Extend sessions remotely: no rushing back"
  - "Refunds partial sessions: never penalised for leaving early"
- **Redeem.sg**
  - "Served three users: organisers, consumers, merchants"
  - "Got the essentials right first"
  - "Clarity on core problems enabled fast, smart trade-offs"

### [INFOGRAPHIC] THE 11-STAR FRAMEWORK
Page text: "The 11-star framework is a way to stretch our thinking by imagining an exceptionally good customer experience, then working backwards to what is realistically worth building."
Infographic: "Push beyond what you'd normally consider acceptable; somewhere between 5 and 11 lies an experience genuinely worth building."
- 1 star: "You knock. No one answers."
- 5 stars: "Door opened. Let in. The baseline, not enough."
- 7 stars: "Host knows you surf. Leaves a board and local restaurant tips."
- 11 stars: "Elon Musk meets you at the gate. You're going to space."

Callout: "10 and 11-star aren't the goal, they're the prompt. The exercise forces you past "good enough" to find what's both ambitious and achievable."

### [INFOGRAPHIC] EXERCISE (reflection exercise)
1. "For your problem statement, map what an 11-star experience looks like: work through each tier."
2. "Ask what you can realistically deliver, and what would get you closest to that ambition."

---

## Module 7: Key Takeaways
URL: https://www.idg.gov.sg/guides-and-resources/productthinking7/ (dated 21 May 2026)
Video: "Product Thinking - Summary on Key Takeaways (7 of 7)" (YouTube sI5veUTIzkk). Not retrieved.

Subtitle: "Product thinking is a discipline of asking better questions before reaching for solutions."
The Full Journey (verbatim): "We've covered a lot of ground. Here's what to carry forward. Product thinking isn't a methodology you apply once and set aside. It's a way of working: a set of habits for diagnosing problems, making decisions, and learning from what you build."

### [INFOGRAPHIC] YOUR TOOLKIT
- **Five Whys**: "Find the root cause"
- **4Cs**: "Craft the problem statement"
- **SMART + VCR**: "Set and measure metrics"
- **Staged delivery**: "De-risk before scaling"
- **11-star framework**: "Design worth building"

"Now apply it. Take one initiative. Work through the frameworks. That's product thinking in practice."
- STEP 1: "Use Five Whys and 4Cs to define your problem clearly."
- STEP 2: "Set a SMART metric and derive your VCR."
- STEP 3: "Name your biggest risk. Design the simplest test. Start small."

### [INFOGRAPHIC] THE THREE SHIFTS
"If there are three things to remember, let them be these."
| FROM | TO |
|---|---|
| Solutions: reaching for technology first | Problems: start with what's actually broken |
| Outputs: a website with five buttons | Outcomes: more citizens completing transactions |
| Big bang delivery: build everything first | Staged delivery: build a skateboard before a car |

Next Steps (verbatim): "The frameworks in these guides are tools for putting those habits into practice. Use them on one initiative you're already working on. That's where product thinking becomes real."
Next guide: "Introduction to vibe coding" (/guides-and-resources/introduction-to-vibecoding/)

---

## Craft
URL: https://craft.cio.sandbox.gov.sg/
**NOT RETRIEVED.** Both WebFetch and curl got HTTP 403 (a Cloudflare "Attention Required" block). The IDG hub page labels it "public officers only". Everything known about it comes from the IDG hub page: "a curated collection of product thinking and product management resources developed by GovTech practitioners." Its thumbnail is a sushi illustration with no text.

---

## Communities of practice
None of the pages names a community of practice. The mentions that come closest:
- The hub page CTA: "Join public officers applying smarter problem-solving frameworks to real government challenges."
- Craft, described as resources "developed by GovTech practitioners" (public officers only).
- The IDG site navigation has a general "Community" link (/community/). It is not specific to Product Thinking, and I did not fetch it.

## Gaps / caveats
- I retrieved none of the 7 YouTube videos, so spoken content beyond the pages and infographics is missing.
- Craft is blocked (403) and I have no content from it.
- None of the pages has quizzes or scored self-checks. They only have exercises and reflection questions, and all of those are captured above.
- The hub page's Module 3 blurb duplicates the Module 2 blurb (a source error). There is also a mismatch between the hub order and the page-link order (see the note at top).
- The first WebFetch summaries lacked detail and in places were vague. For example, the Module 5 summary said the risk types "aren't detailed". These notes use the raw HTML and the infographic images instead.
