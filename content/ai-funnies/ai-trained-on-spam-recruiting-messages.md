---
title: >-
  Our AI Was Trained on 'Successful' Recruiting Messages That Were Actually Just
  Spam
excerpt: >-
  We trained our AI on InMails with high response rates. Turns out those
  responses were mostly "stop contacting me" and "remove me from your list."
  Oops.
author: Stan "The Funny Man" Fisher
date: 'November 3, 2025'
readTime: 4 min read
imageUrl: /images/ai-funnies/ai-trained-on-spam-recruiting-messages.jpg
featured: false
---

My company bought an AI recruiting tool that promised to "learn from your most successful outreach messages" and "replicate what works." The AI analyzed our historical InMails, identified the ones with the highest response rates, and started generating similar messages for new candidates.

Three weeks in, we noticed something weird: candidates were responding... but not in a good way.

Turns out the AI was trained on spam. Extremely effective spam that got high response rates, but spam nonetheless.

## How We Discovered This Disaster

The AI identified our "most successful" recruiting messages based on one metric: response rate. Seems logical, right? If candidates respond, the message must be working.

Except the AI couldn't distinguish between:
- "Yes, I'm interested in learning more about this opportunity!"
- "Please remove me from your list"
- "How did you get my contact information?"
- "Stop spamming me"

[All of these count as "responses" in the AI's dataset, so it learned that certain message patterns generate engagement](https://www.techtarget.com/searchhrsoftware/feature/7-talent-acquisition-and-recruitment-trends). It just didn't learn that some engagement is actually people telling you to leave them alone.

The AI's conclusion? **The more aggressive and persistent the outreach, the higher the response rate.** And it was technically correct—which is the worst kind of correct.

## The Messages the AI Started Sending

Once the AI identified "successful patterns," it started generating messages that combined the worst elements of every spammy InMail ever written:

**Subject line:** "Quick question about your career goals"

**Body:**
> "Hi [First Name],
>
> I noticed you've been at [Current Company] for [X years] and thought you might be ready for your next challenge. I have an exciting opportunity that could be perfect for you.
>
> **This role won't be open long** and I'm reaching out to a select group of top candidates. I'd hate for you to miss out.
>
> Are you available for a quick 10-minute call this week? Just reply 'YES' and I'll send over some times.
>
> Looking forward to connecting!
>
> [Recruiter Name]"

Individually, none of these elements are terrible. But the AI combined them all into messages that felt pushy, generic, and vaguely threatening with the "won't be open long" urgency.

And because the AI was trained on high-response messages, it also learned to:
- Send follow-ups every 48 hours if someone didn't respond
- Include phrases like "I haven't heard back from you" and "Just following up on my previous message"
- Add false urgency like "final call for this opportunity"

The AI essentially learned to be that recruiter everyone blocks on LinkedIn.

## The Responses We Started Getting

Once the AI-generated messages started going out, the responses came flooding in. And oh boy, were candidates *engaged*.

**"Is this a bot?"**
> "Are you a real person or is this automated? Because this reads like every spam message I've ever received."

**"I'm not interested. Please stop."**
> "This is the third message you've sent this month about different roles. I'm not looking for a job. Remove me from your list."

**"How did you find me?"**
> "I don't have my contact information public on LinkedIn. How did you get my email?"

**"Your 'exciting opportunity' is a downgrade"**
> "I'm a Senior Director. Your 'exciting opportunity' is a mid-level manager role that pays less than what I made five years ago. Did you even read my profile?"

**The most common response:** Just "Unsubscribe" or "Stop" like they were replying to a marketing email.

Which, in fairness, they kind of were.

## Why the AI Thought This Was Working

[When we dug into the AI's training data, the pattern became clear: the most aggressive, persistent messages had the highest response rates](https://www.aihr.com/blog/hr-technology-trends/).

Why? Because [aggressive outreach annoys people enough that they respond—usually to complain or ask to be removed](https://www.ere.net/linkedin-recruiting-spam-problem/). But to an AI that doesn't understand sentiment or context, any response is a positive signal.

The AI also learned that:
- **Follow-ups work.** (Because eventually people respond just to make you stop.)
- **Urgency language increases engagement.** (Because it annoys people into responding "I'm not interested.")
- **Personalization tokens are effective.** (Because starting a message with "Hi [First Name]" looks personalized even when the rest is generic.)

None of this was *wrong* in a purely technical sense. The AI was identifying patterns that correlated with responses. It just had zero ability to understand that "please stop contacting me" isn't actually a recruiting win.

## The Meeting With Leadership

When we finally figured out what was happening, we had to explain it to leadership. That conversation went about as well as you'd expect.

**VP of Talent Acquisition:** "So the AI we paid $50,000 for is... sending spam?"

**Me:** "Technically, it's sending messages modeled on our historically successful outreach patterns."

**VP:** "Which were spam."

**Me:** "Apparently, yes."

**VP:** "And we've been doing this for three weeks?"

**Me:** "Also yes."

**VP:** "How many candidates did we contact?"

**Me:** "About 2,000."

**VP:** "How many responded positively?"

**Me:** "Define positively."

**VP:** "People who are actually interested in talking to us about jobs."

**Me:** "Twelve."

**VP:** "Twelve?! Out of 2,000?!"

**Me:** "Well, fifteen if you count the people who said they're interested but only if we raise our salary ranges by 40%."

The VP did not find this helpful.

## The Vendor's Response

When we contacted the AI vendor to explain that their tool learned to send spam, they were... less than sympathetic.

**Vendor:** "The AI is working as designed. It learns from your data. If your historical outreach patterns included aggressive follow-ups, the AI will replicate those patterns."

**Us:** "But it's generating responses that are mostly people telling us to stop."

**Vendor:** "The AI optimizes for response rate, not sentiment. You can add sentiment analysis as an upgraded feature for an additional $15,000 per year."

**Us:** "So we have to pay extra for the AI to understand that 'leave me alone' is bad?"

**Vendor:** "The core platform focuses on engagement metrics. Sentiment analysis is a premium add-on."

**Us:** "Can we at least get a refund?"

**Vendor:** "Per your contract, all sales are final. However, we'd be happy to schedule a training session to help you better configure the AI's parameters."

We did not schedule the training session.

## What We Should Have Done Differently

Looking back, the problem wasn't the AI—it was us.

[We gave the AI bad training data and expected it to magically understand recruiting best practices](https://www.deloitte.com/us/en/services/consulting/blogs/human-capital/ai-in-talent-acquisition.html). That's like feeding a toddler nothing but candy and being surprised when they refuse vegetables.

What we *should* have done:

**Manually curate training data:** [Instead of feeding the AI all our historical messages, we should have identified actually successful outreach—messages that led to interviews, offers, and hires](https://www.aihr.com/blog/hr-technology-trends/). Not just messages that generated any response.

**Add sentiment analysis from day one:** [If the AI can't distinguish between "I'm interested!" and "Stop spamming me," it's not ready to send messages unsupervised](https://www.techtarget.com/searchhrsoftware/feature/7-talent-acquisition-and-recruitment-trends).

**Start with human review:** [Let the AI generate messages, but have recruiters review and approve them before they go out](https://www.deloitte.com/us/en/services/consulting/blogs/human-capital/ai-in-talent-acquisition.html). Catch the spam before candidates see it.

**Test on a small sample first:** [Send AI-generated messages to 50 candidates, analyze the results, adjust, then scale](https://www.aihr.com/blog/hr-technology-trends/). Don't blast 2,000 people and hope for the best.

**Actually read the responses:** [We got feedback from candidates within the first week that the messages felt spammy](https://www.ere.net/linkedin-recruiting-spam-problem/). If we'd been paying attention, we could have stopped this before hitting 2,000 people.

## Lessons Learned (The Hard Way)

**1. AI learns what you teach it.** [If your historical recruiting messages were spammy, the AI will be spammy](https://www.techtarget.com/searchhrsoftware/feature/7-talent-acquisition-and-recruitment-trends). Garbage in, garbage out.

**2. Response rate ≠ success.** [A message that gets 40% response rate but 100% negative responses is worse than a message that gets 10% positive responses](https://www.aihr.com/blog/hr-technology-trends/).

**3. AI doesn't understand context.** [It sees patterns, not meaning](https://www.deloitte.com/us/en/services/consulting/blogs/human-capital/ai-in-talent-acquisition.html). "Please stop" and "I'm interested" are both responses, and the AI can't tell the difference without sentiment analysis.

**4. Vendors aren't responsible for your bad data.** [The AI tool did exactly what it was supposed to do: replicate patterns from our data](https://www.ere.net/articles/8-emerging-trends-that-will-shape-recruiting-in-2025). The fact that our data was terrible isn't their problem.

**5. Always pilot new AI tools.** [Test on a small group, review results carefully, adjust before scaling](https://www.aihr.com/blog/hr-technology-trends/). Do not go from zero to 2,000 candidates without checking that the AI isn't creating a PR disaster.

## What Happened Next

We turned off the AI outreach tool. We sent apology emails to the 2,000 people who got spammed. We manually reviewed our recruiting message templates to identify what "good" actually looks like.

And we're now extremely skeptical of any vendor that promises their AI will "learn from your successful patterns" without explaining how it defines success.

[AI recruiting tools can be powerful when used correctly](https://www.techtarget.com/searchhrsoftware/feature/7-talent-acquisition-and-recruitment-trends). But they're also extremely good at amplifying your worst practices at scale.

If your recruiting outreach was already borderline spammy, giving an AI permission to "do more of what works" is how you accidentally send 2,000 spam messages and tank your employer brand in three weeks.

Learn from our mistakes. Train your AI on actually good data. Add sentiment analysis. Pilot before you scale. And for the love of all that is holy, **read the responses before declaring victory based on engagement metrics**.

Your candidates—and your employer brand—will thank you.

**Sources:**
- [TechTarget: 7 Critical Talent Acquisition and Recruitment Trends in 2025](https://www.techtarget.com/searchhrsoftware/feature/7-talent-acquisition-and-recruitment-trends)
- [AIHR: 13 HR Technology Trends To Watch in 2025](https://www.aihr.com/blog/hr-technology-trends/)
- [Deloitte: 2025 Talent Acquisition Technology Trends](https://www.deloitte.com/us/en/services/consulting/blogs/human-capital/ai-in-talent-acquisition.html)
- [ERE: LinkedIn Recruiting Spam Problem](https://www.ere.net/linkedin-recruiting-spam-problem/)
