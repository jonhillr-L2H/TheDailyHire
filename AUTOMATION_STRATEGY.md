# The Daily Hire - Content Automation Strategy

## 🎯 Goal
Automate daily content generation and publishing with minimal manual input: One morning prompt → 16 high-quality stories posted throughout the day.

## 👥 Writers (Pen Names)
- **Judah "News Boy" Jacobs** - News category
- **Terry "The Tool" Shepard** - Tools category
- **Stan "The Funny Man" Fisher** - Funnies category
- **Judy "Just The Tip" Terry** - Just the Tip category

## 📊 Content Requirements
- **Word count**: 300-600 words per story
- **Style**: Edgy, conversational, humorous
- **Quality**: Original content, no plagiarism, proper sourcing
- **Quantity**: 4 stories per category per day = 16 total stories/day
- **Launch**: 10 pre-written stories per category = 40 stories minimum

---

## 🏗️ Recommended Architecture

### Option 1: Simple File-Based System (Best for Launch)
**What it is:** Stories are markdown files in `/content/[category]/`. You manually create them or have me create them, commit to git, deploy.

**Pros:**
- ✅ Simple, no database needed
- ✅ Version controlled
- ✅ Fast to implement
- ✅ Works with your current setup
- ✅ Free hosting on Vercel

**Cons:**
- ❌ Manual git commits for new stories
- ❌ Can't schedule posts without deployment
- ❌ Have to redeploy for new content

**Best for:** Launch phase, getting 40 stories up quickly

---

### Option 2: Database + Scheduled Publishing (Best for Scale)
**What it is:** Stories stored in database (like Supabase/Vercel Postgres). Cron jobs check for scheduled posts and publish them.

**Architecture:**
```
Database (Supabase)
├── articles table
│   ├── id, title, content, excerpt
│   ├── category, author, date
│   ├── published (boolean)
│   ├── publish_at (timestamp)
│   └── created_at, updated_at
```

**Flow:**
1. Morning: You give command "Generate today's stories"
2. I generate 16 stories with staggered `publish_at` times (e.g., 9am, 11am, 1pm, 3pm)
3. Stories saved to database with `published: false`
4. Cron job runs hourly, checks for stories where `publish_at <= now()` and `published: false`
5. Publishes stories automatically by setting `published: true`

**Pros:**
- ✅ True scheduled posting
- ✅ No redeployment needed
- ✅ Can edit/preview unpublished stories
- ✅ Analytics built-in (views, reads, etc.)
- ✅ Scales to millions of articles

**Cons:**
- ❌ Requires database setup
- ❌ Need API routes for CRUD operations
- ❌ More complex than file-based
- ❌ Monthly database costs (~$25/month Supabase)

**Best for:** Post-launch scaling, daily automation

---

### Option 3: Hybrid Approach (Recommended)
**What it is:** Start with file-based (Option 1), migrate to database (Option 2) after launch.

**Phase 1 - Launch (File-Based):**
1. I create 40 stories for you
2. They go into `/content/[category]/` as markdown files
3. You commit and deploy to Vercel
4. Site launches with 40 stories

**Phase 2 - Automation (Database):**
1. Set up Supabase (free tier works)
2. Create articles table
3. Build content generation script
4. Add cron job for publishing
5. Daily workflow activated

---

## 🤖 Content Generation Workflow

### Daily Prompt Command (Reusable)
Create `.claude/commands/generate-daily-content.md`:

```markdown
# Generate Daily Content for The Daily Hire

## Instructions
Generate 16 articles (4 per category) for {TODAY'S_DATE} following these requirements:

**Categories & Authors:**
- News: Judah "News Boy" Jacobs
- Tools: Terry "The Tool" Shepard
- Funnies: Stan "The Funny Man" Fisher
- Just the Tip: Judy "Just The Tip" Terry

**Requirements:**
- 300-600 words each
- Edgy, conversational, humorous tone
- Eye-catching, often humorous headlines
- Search web for current recruiting/HR trends
- Original content (no plagiarism)
- Include date: {TODAY'S_DATE}
- Proper read time (calculate based on word count)

**Publishing Schedule:**
Stagger throughout the day:
- 9:00 AM EST - 4 stories (one per category)
- 12:00 PM EST - 4 stories
- 3:00 PM EST - 4 stories
- 6:00 PM EST - 4 stories

**Process:**
1. Search web for trending recruiting/HR topics
2. Generate unique angles/takes for each story
3. Write articles following style guide
4. Create frontmatter with proper metadata
5. Save to database with scheduled publish times
```

### Your Morning Workflow
```bash
# 1. Run the command
/generate-daily-content

# 2. Review generated stories (optional)
# Stories are saved with publish_at times

# 3. Done! Stories will auto-publish throughout the day
```

---

## 📁 File Structure

### Current (File-Based)
```
content/
├── news/
│   ├── article-slug.md
│   └── ...
├── tools/
├── ai-funnies/
└── just-the-tip/
```

### Future (Database)
```
Database articles table:
- Each article has publish_at timestamp
- Cron checks every hour for publishable articles
- API routes handle CRUD operations
```

---

## 🚀 Performance & Scalability

### Current Setup (Static Site)
- ✅ **Fast**: Static pages cached at edge
- ✅ **Free**: Vercel free tier handles millions of views
- ✅ **SEO**: Perfect for search engines
- ⚠️ **Limitation**: Need rebuild for new content

### With Database
- ✅ **Dynamic**: New content appears instantly
- ✅ **Scalable**: Handles unlimited articles
- ✅ **ISR**: Incremental Static Regeneration (best of both worlds)
- ✅ **Fast**: Pages cached for 1 hour (configurable)

### Optimization Strategies
1. **Images**: Use Unsplash API for consistent high-quality images
2. **Caching**: ISR with 1-hour revalidation
3. **CDN**: Vercel Edge Network (automatic)
4. **Database**: Index on category, date, published fields
5. **Pagination**: Already implemented with infinite scroll

---

## 💰 Cost Estimate

### File-Based (Current)
- **Hosting**: $0 (Vercel free tier)
- **Total**: $0/month

### Database Approach
- **Hosting**: $0 (Vercel free tier)
- **Database**: $0-25/month (Supabase free → pro)
- **Cron**: $0 (Vercel Cron is free)
- **Total**: $0-25/month

---

## 📝 Next Steps

### For Launch (This Week):
1. ✅ Add AI disclaimer (DONE)
2. ⬜ I generate 40 launch stories (10 per category)
3. ⬜ You review and approve
4. ⬜ Commit to git and deploy
5. ⬜ Launch! 🎉

### Post-Launch (Next Week):
1. ⬜ Set up Supabase database
2. ⬜ Build articles table schema
3. ⬜ Create API routes (CRUD)
4. ⬜ Build content generation script
5. ⬜ Set up cron job for auto-publishing
6. ⬜ Test daily workflow
7. ⬜ Go live with automation

---

## 🎬 What Do You Want To Do First?

**Option A**: Generate 40 launch stories now (file-based, simple)
**Option B**: Build full automation system first (database, complex)
**Option C**: Generate 40 stories AND build automation in parallel

Let me know which approach you prefer!
