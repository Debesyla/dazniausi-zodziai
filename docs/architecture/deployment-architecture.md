# Deployment Architecture

Define deployment strategy based on platform choice.

## Deployment Strategy

**Frontend Deployment:**
- **Platform:** GitHub Pages
- **Build Command:** npm run build
- **Output Directory:** dist
- **CDN/Edge:** GitHub's CDN

**Backend Deployment:**
- N/A

## CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Environments

| Environment | Frontend URL | Purpose |
|-------------|--------------|---------|
| Development | localhost:5173 | Local development |
| Staging | N/A | Use branches for staging |
| Production | https://<username>.github.io/dazniausi-zodziai | Live environment |
