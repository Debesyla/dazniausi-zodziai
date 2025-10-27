# Unified Project Structure

```
dazniausi-zodziai/
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
├── src/
│   ├── components/
│   │   ├── DatasetSelector.svelte
│   │   ├── DataTable.svelte
│   │   ├── SearchBar.svelte
│   │   └── DownloadButton.svelte
│   ├── lib/
│   │   ├── data.js
│   │   ├── stores.js
│   │   └── utils.js
│   └── app.svelte
├── data/
│   └── datasets.json  # Embedded JSON files
├── public/
│   ├── index.html
│   └── favicon.ico
├── tests/
│   ├── unit/
│   └── e2e/
├── package.json
├── svelte.config.js
├── vite.config.js
└── README.md
```
