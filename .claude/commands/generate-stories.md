# Generate Stories for The Daily Hire

Generate high-quality blog articles for The Daily Hire following our established style, structure, and writer personalities.

## 📚 REQUIRED: Read Existing Stories First

**BEFORE generating any content, you MUST:**
1. Read 2-3 random existing stories from the target category as style examples
2. Note their tone, structure, and voice
3. Match that style in new content

Example:
```
Target: Generate 5 News stories
Action: First read content/news/[2-3 random files].md
Then: Generate new stories matching that style
```

## 👥 Writer Profiles & Personalities

### Judah "News Boy" Jacobs (NEWS)
**Vibe:** Andy from The Office - Early 30s, slightly dorky but tries to be fashionable
- Uses "cool" slang to fit in and gain respect from peers
- Data-driven and analytical, wants credibility
- **Strokes executive egos** when mentioning achievements
- Conversational but professional
- **Tone:** Use "cool" terms sparingly, not forced. Less "the tea is..." (use occasionally, not as staple)
- Cites sources and statistics frequently

### Terry "The Tool" Shepard (TOOLS)
**Vibe:** Mix of Creed + Meredith from The Office - Late 20s, gender-ambiguous name
- Brutally honest, says what everyone's thinking
- Technical knowledge with irreverent delivery
- **NEVER slanders specific brands/companies/people directly**
- Says "Your setup is outdated" not "Company X sucks"
- Opinionated but fair, backs up claims
- **Tone:** Direct, no-BS, technically accurate with attitude

### Stan "The Funny Man" Fisher (FUNNIES)
**Vibe:** Kevin + Michael humor, Jim's articulation - Late 30s, office sweetheart
- Wise but goofy, very sarcastic
- Clever wordplay and quotable one-liners
- Makes serious points through comedy
- **Tone:** VERY sarcastic, but articulate and insightful
- Balances humor with actual recruiting wisdom

### Judy "Just The Tip" Terry (JUST THE TIP)
**Vibe:** Phyllis exterior with wild alter ego - Near retirement but doesn't show it
- Reserved in person, unleashed in writing
- Unexpectedly spicy takes on recruiting advice
- Practical wisdom with surprising edge
- **Tone:** Funny and slightly provocative (tasteful double entendres)
- Quick, punchy, actionable advice with personality

## 📊 Word Count Ranges by Category

- **News**: 300-600 words
- **Tools**: 300-600 words
- **Funnies**: 200-400 words
- **Just the Tip**: 200-400 words

## 🎯 Topic Categories (Choose From These)

### NEWS Topics:
1. Up and coming recruiting firms
2. Top 10 firms (by state/region/size/industry)
3. Industry-specific news (IT, Legal, Healthcare, Finance recruiting)
4. Merger & acquisition news in recruiting industry
5. Recruiting market trends and data
6. Remote work impact on talent acquisition
7. Diversity hiring initiatives and results
8. Salary transparency legislation updates
9. Layoffs and hiring freezes analysis
10. Recruiting tech funding rounds and valuations
11. International recruiting trends
12. Gig economy and contract hiring evolution
13. Executive search and C-suite hiring trends
14. Campus recruiting and Gen Z hiring
15. Skills-based hiring movement

### TOOLS Topics:
1. ATS platform reviews and comparisons
2. Chrome extensions for recruiters
3. LinkedIn automation tools (ethical ones)
4. Resume parsing technology
5. Video interviewing platforms
6. Skills assessment tools
7. Background check services
8. Onboarding software
9. CRM for recruiting
10. Job board effectiveness comparisons
11. AI resume screening tools
12. Candidate sourcing tools
13. Interview scheduling software
14. Recruiting analytics dashboards
15. Mobile recruiting apps

### FUNNIES Topics:
1. AI recruiting fails and mishaps
2. Horrible job description examples
3. Recruiter/candidate ghosting stories
4. LinkedIn cringe content
5. Interview disaster stories
6. Resume red flags and lies
7. Automated rejection email fails
8. ATS system glitches
9. Salary negotiation gone wrong
10. Remote interview technical failures
11. Corporate buzzword bingo
12. Passive-aggressive job postings
13. Overly specific job requirements
14. "Entry level" positions requiring 10 years experience
15. Recruiter InMail spam fails

### JUST THE TIP Topics:
1. Quick sourcing hacks
2. Email template tips
3. LinkedIn profile optimization
4. Interview question frameworks
5. Salary negotiation tactics
6. Boolean search strings
7. Time management for recruiters
8. Candidate engagement strategies
9. Job description writing tips
10. Phone screen best practices
11. Reference check shortcuts
12. Offer letter essentials
13. Recruiter self-care tips
14. Personal branding for recruiters
15. Client management quick wins

## 📝 Content Requirements

### Style & Tone:
- Edgy, conversational, humorous
- No corporate BS or buzzwords (unless mocking them)
- Eye-catching, often humorous headlines
- Original content - NO plagiarism
- Proper journalistic practices

### Structure:
```markdown
Opening hook (conversational, relatable)
↓
2-3 H2 sections with engaging headers
↓
Substantive content with examples/data
↓
Strong closing paragraph
```

### Research & Sourcing:
- **REQUIRED:** Search web for current recruiting/HR trends
- Identify unique angles (don't rehash existing content)
- **Hyperlink ALL sources inline** - Format: [LinkedIn's 2025 Report](url)
- Example: "According to [Deloitte's HR Trends Report](url), 87% of companies..."
- Include specific data points and statistics
- Verify facts before publishing

### Citations Format:
```markdown
✅ CORRECT: According to [LinkedIn's 2025 Talent Report](https://example.com), 70% of recruiters...

❌ WRONG: Studies show that 70% of recruiters...
❌ WRONG: According to LinkedIn, 70% of recruiters... (no hyperlink)
```

## 📋 Frontmatter Template

```yaml
---
title: "Your Headline Here"
excerpt: "One sentence hook that makes them want to click (under 160 chars)"
author: "[Correct author name based on category]"
date: "[Format: Month DD, YYYY]"
readTime: "[Calculate: ~200 words = 1 min]"
imageUrl: "https://images.unsplash.com/photo-[relevant-id]?w=800&q=80"
featured: false
---
```

### Author Names (Use Exact Format):
- News: `Judah "News Boy" Jacobs`
- Tools: `Terry "The Tool" Shepard`
- Funnies: `Stan "The Funny Man" Fisher`
- Just the Tip: `Judy "Just The Tip" Terry`

### Image Selection (Unsplash):
Use relevant recruiting/business/tech themes:
- Office settings and workspaces
- Technology and computers
- Business meetings and collaboration
- Abstract tech/data visualizations
- Diverse workplace scenes
- Professional headshots and interactions

### Slug Naming:
- Lowercase with hyphens: `topic-keywords-here.md`
- Keep under 60 characters
- Examples: `ai-screening-bias-2025.md`, `ats-integration-nightmare.md`

## 🔄 Topic Selection Logic

**Default (Random):**
- Randomly select from topic list for variety
- Ensure no duplicate topics in same generation batch

**Override (Specific):**
- User can specify topics: "Generate 5 News stories about IT recruiting"
- Pick from specified sub-category only

## 🎯 Generation Process

### Step 1: Read Existing Stories
```
1. List files in target category: content/[category]/
2. Randomly select 2-3 stories
3. Read and analyze their style/structure/tone
4. Note writer's voice patterns
```

### Step 2: Research Topics
```
1. Search web for current recruiting trends
2. Identify 3-5 potential story angles
3. Select topics from category list (random or specified)
4. Find credible sources to hyperlink
```

### Step 3: Generate Content
```
1. Match writer personality and tone
2. Follow word count range for category
3. Include 2-3 H2 section headers
4. Add hyperlinked citations inline
5. Write opening hook and strong close
```

### Step 4: Create Files
```
1. Generate appropriate slug
2. Calculate read time (word count / 200)
3. Select relevant Unsplash image
4. Create frontmatter with all metadata
5. Save to content/[category]/[slug].md
```

## 📖 Usage Examples

### Generate Launch Content:
```
Generate 36 launch stories (9 per category), dates between Oct 1-16, 2025
```

### Generate Daily Content:
```
Generate 16 stories for today (4 per category) with staggered publish times
```

### Generate Specific Category:
```
Generate 5 News stories about AI recruiting trends, dated this week
```

### Generate Specific Topics:
```
Generate 3 Tools stories reviewing ATS platforms, dated Oct 15-17, 2025
```

## ✅ Quality Checklist

Before saving each story, verify:
- [ ] Read 2-3 existing stories from category as examples
- [ ] Searched web for current trends/data
- [ ] Selected topic from approved category list
- [ ] Matched correct writer personality/tone
- [ ] Word count within range for category
- [ ] 2-3 H2 section headers with engaging titles
- [ ] All sources hyperlinked inline (no bare "studies show")
- [ ] Proper frontmatter with correct author name
- [ ] Relevant Unsplash image URL
- [ ] Calculated read time accurate
- [ ] Featured flag set correctly (false unless specified)
- [ ] Slug follows naming convention
- [ ] No plagiarism, original voice throughout
- [ ] No direct brand/company/person slandering
- [ ] Opening hook is engaging
- [ ] Closing paragraph is strong

## 🚫 Content Guardrails

### DO:
✅ Use conversational, edgy tone
✅ Include humor and personality
✅ Cite and hyperlink all sources
✅ Match writer's unique voice
✅ Use specific data and examples
✅ Stroke executive egos (News only)
✅ Be brutally honest about practices, not brands (Tools)
✅ Layer wisdom within humor (Funnies)
✅ Make advice actionable (Just the Tip)

### DON'T:
❌ Plagiarize or copy content
❌ Slander specific brands/companies/people
❌ Use "the tea is..." in every News story
❌ Leave sources un-hyperlinked
❌ Exceed word count ranges
❌ Use wrong author for category
❌ Create duplicate topics in same batch
❌ Write generic corporate fluff
❌ Skip reading existing stories first

## 🎬 Ready to Generate?

Once you understand all requirements, begin with:

**Step 1:** Read 2-3 existing stories from target category
**Step 2:** Search web for current trends
**Step 3:** Select topics and generate content
**Step 4:** Save with proper formatting
**Step 5:** AUTO-FETCH IMAGES using Lorem Picsum (see below)

## 🖼️ AUTOMATIC IMAGE GENERATION

**CRITICAL:** After writing each story markdown file, you MUST automatically fetch and add a relevant image from Lorem Picsum.

### Process:
1. **Write the story** with all frontmatter fields EXCEPT imageUrl
2. **Use the Lorem Picsum helper** to fetch a relevant image:
   ```typescript
   import { fetchAndSaveArticleImage } from '../lib/images';

   const imagePath = await fetchAndSaveArticleImage(
     title,      // Article title from frontmatter
     category,   // 'news', 'tools', 'ai-funnies', or 'just-the-tip'
     slug,       // Filename without .md
     excerpt     // Article excerpt (not used but kept for compatibility)
   );
   ```
3. **Update the markdown** with the returned imagePath in the imageUrl field
4. **Images are automatically:**
   - Generated from Lorem Picsum (powered by Unsplash)
   - Downloaded to `/public/images/[category]/[slug].jpg`
   - 100% copyright-free for commercial blog use (Unsplash License)
   - Deterministic (same slug = same image)
   - High quality professional photos
   - Styled by category (news=grayscale, funnies=blur, etc.)

### Example Workflow:
```
1. Generate story → content/news/new-recruiting-trend.md
2. Extract: title="New Recruiting Trend", category="news", slug="new-recruiting-trend"
3. Call: fetchAndSaveArticleImage(title, category, slug, excerpt)
4. Receives: /images/news/new-recruiting-trend.jpg
5. Update frontmatter: imageUrl: "/images/news/new-recruiting-trend.jpg"
6. Done! Story is complete with image
```

### Important Notes:
- **Always fetch images** - Never skip this step
- **One image per story** - Each article gets its own unique image
- **No API key needed** - Lorem Picsum is completely free, no authentication
- **No copyright issues** - All images are free for commercial blog use
- **Consistent images** - Same article slug always gets same image
- **Category styling** - Images automatically styled based on article category

Let's create some stories that actually slap! 🚀
