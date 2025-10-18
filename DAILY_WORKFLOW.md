# The Daily Hire - Daily Content Workflow

## 🌅 Your Morning Routine (5 minutes)

### Step 1: Generate Content
Open Claude Code and run:
```
/generate-stories Generate 16 stories for today (4 per category) with staggered publish times
```

That's it! The command will:
- Search web for trending recruiting news
- Generate 4 stories per category (16 total)
- Create proper frontmatter and formatting
- Save files to `content/[category]/` directory
- Use correct author names per category

### Step 2: Review (Optional)
Quickly scan the generated stories if you want. They're already optimized for SEO and formatted correctly.

### Step 3: Deploy
```bash
git add content/
git commit -m "Add daily content for [date]"
git push
```

Vercel automatically deploys. New stories live in ~2 minutes.

---

## 📝 Generating Launch Content (40 Stories)

Run this command once:
```
/generate-stories Generate 36 new stories for launch (9 per category), dates between Oct 1-16, 2025. Keep the 4 current featured stories.
```

This creates your initial content library with:
- 4 featured stories (already exist)
- 36 additional stories across all categories
- Dates spread over last 2 weeks
- Total: 40 stories ready to go

---

## 🎯 Custom Generation

**Generate specific category:**
```
/generate-stories Generate 5 News stories about AI recruiting trends
```

**Generate for specific date:**
```
/generate-stories Generate 4 Tools stories for October 20, 2025
```

**Generate with specific theme:**
```
/generate-stories Generate 3 Funnies stories about remote work disasters
```

---

## 📁 File Structure

Stories are saved to:
```
content/
├── news/
│   ├── ai-screening-candidates.md (featured)
│   ├── [new-story-slug].md
│   └── ...
├── tools/
│   ├── ats-features-2025.md (featured)
│   └── ...
├── ai-funnies/
│   ├── chatgpt-perfect-fit.md (featured)
│   └── ...
└── just-the-tip/
    ├── job-descriptions-1995.md (featured)
    └── ...
```

---

## 🤖 Behind the Scenes

When you run `/generate-stories`:

1. **Web Search**: Searches for current recruiting trends
2. **Topic Selection**: Identifies unique angles for each story
3. **Content Generation**: Writes 300-600 word articles matching our style
4. **Frontmatter**: Creates proper metadata (title, author, date, etc.)
5. **Image Selection**: Picks relevant Unsplash images
6. **File Creation**: Saves markdown files with proper slugs
7. **Quality Check**: Ensures no plagiarism, proper formatting

---

## 🚀 Performance Tips

### Current Setup (Static Files)
- ✅ Fast: Edge-cached static pages
- ✅ Free: Vercel free tier
- ✅ SEO: Perfect for search engines
- ⚠️ Manual: Need to commit/push for new content

### Future Automation (Post-Launch)
Once you want true automation, we can add:
- **Database**: Store articles with publish dates
- **Cron Job**: Auto-publish at scheduled times
- **API**: Generate content via API endpoint
- **No Git**: New stories appear without commits

For now, the commit/push workflow is simple and reliable.

---

## 📊 Tracking Performance

### Google Analytics Setup (When Ready)
1. Get GA4 Measurement ID
2. Update `app/layout.tsx` with your ID
3. Track article views, read time, engagement

### View Count Tracking (Future)
Once you have analytics, we can:
- Show "Most Popular This Month"
- Auto-promote trending stories
- Generate more content on hot topics

---

## 🎨 Content Guidelines

Our writers have distinct voices:

**Judah "News Boy" Jacobs** (News)
- Data-driven, analytical
- Uses statistics and market trends
- Conversational but professional
- "The tea is..." energy

**Terry "The Tool" Shepard** (Tools)
- Opinionated, direct
- Tells it like it is
- Technical but accessible
- "Your ATS is trash" energy

**Stan "The Funny Man" Fisher** (Funnies)
- Humorous, light
- Real insights wrapped in jokes
- Self-aware and playful
- "We can't stop laughing" energy

**Judy "Just The Tip" Terry** (Just the Tip)
- Actionable, practical
- Short and punchy
- Immediately useful
- "Here's how to actually..." energy

---

## ⚡ Quick Reference

**Generate launch content:**
```
/generate-stories Generate 36 launch stories
```

**Generate daily content:**
```
/generate-stories Generate today's 16 stories
```

**Deploy:**
```bash
git add content/ && git commit -m "Add content" && git push
```

**Check live site:**
```
https://your-domain.vercel.app
```

---

## 🆘 Troubleshooting

**Stories not showing up?**
- Check file is in correct `content/[category]/` folder
- Verify frontmatter format is correct
- Ensure filename ends in `.md`
- Redeploy with `git push`

**Want to edit a story?**
- Just edit the markdown file
- Commit and push changes
- Vercel redeploys automatically

**Need more stories in a category?**
- Run `/generate-stories` with specific requirements
- No limit on how many you can generate

---

Ready to generate your launch content? Just run:
```
/generate-stories Generate 36 launch stories (9 per category)
```
