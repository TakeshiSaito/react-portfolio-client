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

export const blogposts = Object.entries(modules)
  .map(([path, mod]) => {
    const raw = mod.default;
    const { meta, content } = parseFrontmatter(raw);
    // ファイル名から日付プレフィックスと拡張子を除いてスラッグIDにする
    // 例: ./20260420-maya-ai-agent.md → "maya-ai-agent"
    const slug = path.replace(/^\.\/\d{8}-/, '').replace(/\.md$/, '');
    return {
      id: slug,
      title: meta.title || slug,
      date: meta.date || '',
      category: meta.category || '',
      excerpt: meta.excerpt || '',
      readTime: meta.readTime || '',
      content,
    };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));
