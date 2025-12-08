---
title: "AI Video Interview Tool Times Out Mid-Interview, Shows 'Sleeping' Animation to Confused Candidate"
author: "Stan 'The Funny Man' Fisher"
date: "December 8, 2025"
category: "ai-funnies"
tags: ["AI fails", "video interviews", "candidate experience", "recruiting humor"]
---

A candidate interviewing for a customer service role had the unique experience of watching their AI interviewer literally fall asleep mid-conversation. Or at least, that's what the animation suggested when the system timed out 14 minutes into a 20-minute interview.

The AI avatar - a friendly-looking professional in business casual - blinked slowly, yawned, and displayed a "zzz" animation while the candidate was explaining their conflict resolution experience.

## The Candidate's Perspective

Per the candidate's LinkedIn post (which went viral immediately): "I was mid-sentence talking about de-escalation techniques when the AI interviewer closed its eyes, yawned, and started showing Z's like a cartoon character. I sat there for 45 seconds thinking this was some kind of test about handling awkward situations."

They tried clicking around. No response. They said "Hello?" three times. The AI kept sleeping.

Finally, an error message appeared: "Session timeout - please restart your interview from the beginning."

Except when they tried to restart, the system said they'd already completed their interview and would hear back from the hiring team within 5-7 business days.

## What Actually Happened

According to the vendor's incident report (which was leaked on Reddit), the AI interview platform has a 15-minute session timeout to prevent candidates from walking away mid-interview and leaving sessions running.

When the timeout triggers, instead of showing a boring error message, some UX genius decided the AI avatar should display a "sleeping" animation to "maintain the human-like interface experience."

Nobody considered how this would look to a candidate actively in the middle of their interview when the timer glitched and triggered early.

The system also auto-submitted whatever partial responses it had recorded, which for this candidate was 14 minutes of a 20-minute interview.

## The Company's Response

The TA team had no idea any of this happened until they reviewed the candidate's interview recording and saw:
- 14 minutes of good responses
- The AI avatar yawning
- The candidate saying "Hello? Are you... is this part of the interview?"
- Confused silence
- End of recording

They reached out to reschedule. The candidate politely declined, citing "concerns about company culture and respect for candidates' time."

Translation: "If your AI falls asleep during my interview, I don't want to know what the actual employees are like."

## The Vendor Scramble

The AI interview platform pushed an emergency update changing the timeout animation from "sleeping avatar" to a generic "connection lost" message.

They also sent a very lawyered-up email to all customers explaining that "a small number of candidates may have experienced unexpected session behavior" and offering to flag those interviews for manual review.

Small number = 47 candidates in one week had the AI fall asleep on them.

Manual review = recruiters watching video of their AI interviewer taking a nap while candidates talk about their qualifications.

## The Lesson

Somewhere, a product manager thought "Let's make our timeout errors more engaging and human-like!"

Nowhere in that conversation did anyone ask "Should our AI interviewer simulate falling asleep while candidates are actively interviewing?"

The sleeping animation feature has been retired. The timeout threshold has been increased to 30 minutes. And 47 candidates have a story about the time they were so boring they put an AI to sleep.

Candidate experience: still not a priority when you're moving fast and breaking things.
