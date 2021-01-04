import fs from 'fs'
import { join } from 'path'
import { extname } from 'path'
import matter from 'gray-matter'
import { pathToFileURL } from 'url'

const postsDirectory = join(process.cwd(), 'posts')

export function isPost(fsentry) {
  return extname(fsentry) == '.md' ? true : false;
}

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter(isPost)
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'));
  return posts;
}

export function getLinkedPosts(_slug) {
  const posts = getAllPosts(['slug']);
  const index = posts.findIndex(post => post.slug === _slug);

  switch (index) {
    case -1: return null;
    case 0: return {
      before: null,
      after: posts[index +1].slug,
    };
    case (posts.length - 1): return {
      before: posts[index - 1].slug,
      after: null,
    }
    default: return {
      before: posts[index - 1].slug,
      after: posts[index + 1].slug,
    }
  }
} 