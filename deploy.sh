#!/usr/bin/env bash
#
# Build the Milano docs and deploy them to the VPS via rsync over SSH.
#
# Usage:
#   ./deploy.sh                 # build + deploy
#   ./deploy.sh --no-build      # deploy the existing ./dist/ without rebuilding
#   ./deploy.sh --dry-run       # show what rsync would change, without uploading
#
# Configure the SSH target below, or override per-run with env vars:
#   SSH_TARGET=user@host SSH_PORT=2222 ./deploy.sh
#
set -euo pipefail

# Load local, gitignored config if present (SSH_TARGET, SSH_PORT, DEPLOY_PATH).
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
if [[ -f "$SCRIPT_DIR/.env" ]]; then set -a; source "$SCRIPT_DIR/.env"; set +a; fi

# --- Configuration ----------------------------------------------------------
# SSH target: either "user@host" or a Host alias from your ~/.ssh/config.
SSH_TARGET="${SSH_TARGET:-CHANGE_ME@docs.uix.store}"
SSH_PORT="${SSH_PORT:-22}"

# Absolute path on the VPS that Nginx serves as /milano/.
# Trailing slash matters — keep it.
DEPLOY_PATH="${DEPLOY_PATH:-/home/docs.uix.store/public_html/milano/}"

# Local build output. The CONTENTS of this dir map to the /milano/ URL,
# because astro.config.mjs sets base: '/milano'. The trailing slash means
# "copy the contents of dist/", not the dist/ folder itself.
DIST_DIR="dist/"
# ----------------------------------------------------------------------------

cd "$(dirname "$0")"

DO_BUILD=1
RSYNC_EXTRA=()
for arg in "$@"; do
  case "$arg" in
    --no-build) DO_BUILD=0 ;;
    --dry-run)  RSYNC_EXTRA+=(--dry-run --itemize-changes) ;;
    *) echo "Unknown option: $arg" >&2; exit 2 ;;
  esac
done

if [[ "$SSH_TARGET" == CHANGE_ME@* ]]; then
  echo "Error: set SSH_TARGET in deploy.sh (or via env) before deploying." >&2
  exit 1
fi

if [[ "$DO_BUILD" -eq 1 ]]; then
  echo "==> Building site..."
  pnpm install --frozen-lockfile
  pnpm build
fi

if [[ ! -d "$DIST_DIR" ]]; then
  echo "Error: $DIST_DIR not found. Run a build first (omit --no-build)." >&2
  exit 1
fi

echo "==> Deploying $DIST_DIR -> $SSH_TARGET:$DEPLOY_PATH (port $SSH_PORT)"
# --delete removes server files that no longer exist locally (renamed/removed
# pages, old hashed assets). This is why a manual SFTP merge leaves stale files.
rsync -avz --delete \
  ${RSYNC_EXTRA[@]+"${RSYNC_EXTRA[@]}"} \
  -e "ssh -p $SSH_PORT" \
  "$DIST_DIR" \
  "$SSH_TARGET:$DEPLOY_PATH"

echo "==> Done. Verify: curl -I https://docs.uix.store/milano/"
