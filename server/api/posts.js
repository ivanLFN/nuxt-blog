// server/api/posts.js

import fs from 'fs/promises';
import path from 'path';

const postsDir = path.resolve(process.cwd(), 'posts');

const parseMarkdown = (content) => {
  const meta = {};
  let markdownContent = content;

  const metaRegex = /^---([\s\S]*?)---/;
  const match = content.match(metaRegex);
  if (match) {
    const metaString = match[1].trim();
    markdownContent = content.slice(match[0].length).trim();

    const metaPairs = metaString.split('\n');
    metaPairs.forEach(pair => {
      const [key, value] = pair.split(':').map(item => item.trim());
      meta[key] = value;
    });
  }

  return { meta, content: markdownContent };
};

const getPostFiles = async () => {
  try {
    const files = await fs.readdir(postsDir);
    return files;
  } catch (error) {
    console.error('Error reading post files:', error);
    return [];
  }
};

export default async (req, res) => {
  try {
    const files = await getPostFiles();
    const posts = await Promise.all(files.map(async file => {
      const filePath = path.join(postsDir, file);
      const content = await fs.readFile(filePath, 'utf-8');
      const { meta, content: markdownContent } = parseMarkdown(content);
      return {
        slug: file.replace('.md', ''),
        title: meta.title || 'Untitled',
        content: markdownContent
      };
    }));
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ posts }));
  } catch (error) {
    console.error('Error loading posts:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Error loading posts' }));
  }
};
