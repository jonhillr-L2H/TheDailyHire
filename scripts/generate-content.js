#!/usr/bin/env node

/**
 * Content Generation Script for The Daily Hire
 *
 * Usage:
 *   node scripts/generate-content.js --launch        # Generate 36 stories for launch
 *   node scripts/generate-content.js --daily         # Generate 16 stories for today
 *   node scripts/generate-content.js --category news --count 5  # Generate 5 news stories
 */

const fs = require('fs');
const path = require('path');

// Configuration
const AUTHORS = {
  news: 'Judah "News Boy" Jacobs',
  tools: 'Terry "The Tool" Shepard',
  'ai-funnies': 'Stan "The Funny Man" Fisher',
  'just-the-tip': 'Judy "Just The Tip" Terry'
};

const CONTENT_DIR = path.join(process.cwd(), 'content');

// Utility functions
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 60);
}

function calculateReadTime(wordCount) {
  const minutes = Math.ceil(wordCount / 200);
  return `${minutes} min read`;
}

function getDateRange(daysBack) {
  const dates = [];
  const today = new Date();

  for (let i = 0; i < daysBack; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    dates.push(date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }));
  }

  return dates;
}

// Main generation functions
async function generateLaunchContent() {
  console.log('🚀 Generating 36 launch stories...\n');

  const categories = ['news', 'tools', 'ai-funnies', 'just-the-tip'];
  const dates = getDateRange(14); // Last 2 weeks

  console.log('This is a placeholder script.');
  console.log('Use Claude Code to generate stories with:');
  console.log('\n/generate-stories Generate 9 News stories for launch, dates between Oct 1-16, 2025\n');
  console.log('Repeat for each category.');
  console.log('\nStories will be saved to:');
  categories.forEach(cat => {
    console.log(`  - content/${cat}/[slug].md`);
  });
}

async function generateDailyContent() {
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  console.log(`📅 Generating 16 stories for ${today}...\n`);
  console.log('Use Claude Code with:');
  console.log(`\n/generate-stories Generate 4 stories (one per category) for ${today}\n`);
  console.log('Stories will auto-publish at:');
  console.log('  - 9:00 AM EST (4 stories)');
  console.log('  - 12:00 PM EST (4 stories)');
  console.log('  - 3:00 PM EST (4 stories)');
  console.log('  - 6:00 PM EST (4 stories)');
}

function showUsage() {
  console.log(`
📰 The Daily Hire - Content Generation Script

Usage:
  node scripts/generate-content.js --launch      Generate 36 launch stories
  node scripts/generate-content.js --daily       Generate 16 daily stories
  node scripts/generate-content.js --help        Show this help

For actual content generation, use Claude Code slash commands:
  /generate-stories [your requirements]

Example:
  /generate-stories Generate 10 News stories for launch
  `);
}

// Parse command line arguments
const args = process.argv.slice(2);

if (args.includes('--launch')) {
  generateLaunchContent();
} else if (args.includes('--daily')) {
  generateDailyContent();
} else if (args.includes('--help') || args.length === 0) {
  showUsage();
} else {
  console.error('❌ Unknown command. Use --help for usage information.');
  process.exit(1);
}
