#!/usr/bin/env zsh

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

print_usage() {
  cat <<'EOF'
Usage:
  ./scripts/portfolio.zsh install   # Install dependencies
  ./scripts/portfolio.zsh build     # Create production build (dist/)
  ./scripts/portfolio.zsh start     # Start dev server (http://localhost:3000)
  ./scripts/portfolio.zsh preview   # Preview production build locally
  ./scripts/portfolio.zsh check     # Show tool versions
  ./scripts/portfolio.zsh help      # Show this help
EOF
}

ensure_tools() {
  if ! command -v node >/dev/null 2>&1; then
    echo "Error: node is not installed or not in PATH."
    exit 1
  fi
  if ! command -v npm >/dev/null 2>&1; then
    echo "Error: npm is not installed or not in PATH."
    exit 1
  fi
}

command="${1:-help}"

case "$command" in
  install)
    ensure_tools
    npm install
    ;;
  build)
    ensure_tools
    npm run build
    ;;
  start)
    ensure_tools
    npm run dev
    ;;
  preview)
    ensure_tools
    npm run preview
    ;;
  check)
    ensure_tools
    echo "node: $(node -v)"
    echo "npm:  $(npm -v)"
    ;;
  help|-h|--help)
    print_usage
    ;;
  *)
    echo "Unknown command: $command"
    print_usage
    exit 1
    ;;
esac

