const modules = import.meta.glob('./*.md', { query: '?raw', eager: true });

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {}, content: raw.trim() };
  const meta = {};
  match[1].split('\n').forEach((line) => {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) return;
    const key = line.slice(0, colonIndex).trim();
    const value = line.slice(colonIndex + 1).trim();
    if (key) meta[key] = value;
  });
  return { meta, content: match[2].trim() };
}

// ファイル名形式: YYYYMMDD-slug.ja.md / YYYYMMDD-slug.en.md
export const blogposts = (() => {
  const bySlug = {};

  Object.entries(modules).forEach(([path, mod]) => {
    const filename = path.replace(/^\.\//, '');
    const match = filename.match(/^(\d{8})-(.+)\.(ja|en)\.md$/);
    if (!match) return;

    const [, dateStr, slug, lang] = match;
    const { meta, content } = parseFrontmatter(mod.default);
    const date = meta.date || `${dateStr.slice(0, 4)}-${dateStr.slice(4, 6)}-${dateStr.slice(6, 8)}`;

    if (!bySlug[slug]) {
      bySlug[slug] = { id: slug, date, ja: null, en: null };
    }
    bySlug[slug][lang] = {
      title: meta.title || slug,
      excerpt: meta.excerpt || '',
      category: meta.category || '',
      readTime: meta.readTime || '',
      content,
    };
  });

  return Object.values(bySlug).sort((a, b) => new Date(b.date) - new Date(a.date));
})();
