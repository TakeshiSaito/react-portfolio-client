---
applyTo: "src/content/*.md"
---

# ブログ記事の作成ルール

ブログ記事は `src/content/` 直下に Markdown ファイルとして配置します。

## ファイル名規則

```
YYYYMMDD-slug.ja.md   ← 日本語版
YYYYMMDD-slug.en.md   ← 英語版
```

- `YYYYMMDD`: 公開日（例: `20260420`）
- `slug`: 記事を識別するケバブケースの英数字（例: `maya-ai-agent`）
- `ja` / `en`: 言語サフィックス（必須）
- ファイル名の slug 部分がそのまま URL になる（例: `/blog/maya-ai-agent`）
- 両言語のファイルは同じ slug を使うこと（例: `20260420-maya-ai-agent.ja.md` と `20260420-maya-ai-agent.en.md`）
- 片言語のみでも問題なし。一覧に `JA only` / `EN only` バッジが表示される

## frontmatter（必須）

ファイル先頭に以下の frontmatter を記述してください。`---` で囲む YAML 形式です。

```yaml
---
title: 記事タイトル（日本語可）
date: YYYY-MM-DD
category: カテゴリ名
excerpt: 記事一覧に表示される説明文。1〜2文程度。
readTime: 10 min
---
```

| フィールド | 必須 | 説明 |
| --- | --- | --- |
| `title` | ✅ | ページ title タグとヘッダーに使われる |
| `date` | ✅ | `YYYY-MM-DD` 形式。記事は date 降順で一覧表示される |
| `category` | ✅ | 記事一覧のカテゴリバッジに表示される |
| `excerpt` | ✅ | 記事一覧の抜粋テキスト。SEO の description にも使われる |
| `readTime` | ✅ | 例: `5 min` / `10 min` |

## 本文

frontmatter の直後から本文を書きます。

- `## 見出し` から始めてください（`# H1` はシステムが title から自動生成するため不要）
- Markdown の標準記法が使えます（リスト、太字、コードブロックなど）
- コードブロックには言語指定を付けるとシンタックスハイライトが適用されます

````md
```python
print("hello")
```
````

## ブランチ運用と公開フロー

このリポジトリは **develop / main の2ブランチ運用**です。
main への直接 push は禁止（GitHub の branch protection で設定済み）。

```
develop ブランチ        main ブランチ
─────────────────       ──────────────────────────
記事を追加・編集   →  PR & マージ  →  本番に公開
Vercel がプレビュー              Vercel が本番デプロイ
URL を自動生成
```

### 記事追加の手順

1. `develop` ブランチで `src/content/YYYYMMDD-slug.ja.md`（と必要なら `.en.md`）を作成
2. frontmatter と本文を書く
3. `develop` に push → Vercel がプレビュー URL を自動生成（動作確認に使う）
4. 公開準備ができたら `develop` → `main` への PR を作成してマージ
5. Vercel が本番を自動デプロイ

### Vercel のデプロイ動作

| ブランチ | デプロイ先 |
| --- | --- |
| `main` | 本番（production） |
| `develop` / その他 | プレビュー URL（`*.vercel.app`） |

GitHub Actions による追加のデプロイ設定は不要。Vercel の GitHub 連携が自動で処理します。

既存の記事ファイルを参考にする場合は `src/content/20260420-maya-ai-agent.ja.md` を参照してください。
