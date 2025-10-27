# Component Library / Design System

### Design System Approach

Create a custom, lightweight design system inspired by retro terminal UIs, with a focus on the dark background and amber accents. Use CSS variables for colors, typography, and spacing to maintain consistency. Avoid external libraries to keep the bundle small for static hosting; build components in Svelte for reusability.

### Core Components

#### Button

**Purpose:** Trigger primary and secondary actions like loading data or downloading.

**Variants:** Primary (solid amber background), Secondary (amber outline).

**States:** Default, Hover (brighter amber), Disabled (muted).

**Usage Guidelines:** Use primary for main actions (e.g., Load Dataset); limit to 1-2 per screen for clarity.

#### Input Field

**Purpose:** Capture user input for searches and filters.

**Variants:** Search bar (wide, with icon), Standard (for future forms).

**States:** Default, Focused (amber border), Error (red accent).

**Usage Guidelines:** Always include placeholder text; validate input to prevent empty searches.

#### Table

**Purpose:** Display sortable, filterable data in rows and columns.

**Variants:** Basic (with sortable headers), Compact (for mobile).

**States:** Default, Loading (with spinner), Empty (show message).

**Usage Guidelines:** Headers clickable for sorting; ensure rows are readable on dark BG.

#### Dropdown

**Purpose:** Allow selection from a list of options.

**Variants:** Single-select (for datasets), Multi-select (if expanded).

**States:** Closed, Open (expanded list), Selected (highlight choice).

**Usage Guidelines:** Use for dataset selection; keep options concise.

#### Modal

**Purpose:** Display overlays for confirmations or additional info.

**Variants:** Confirmation (with buttons), Info (read-only).

**States:** Hidden, Visible (overlay), Focused (on content).

**Usage Guidelines:** Use sparingly; ensure keyboard navigation for accessibility.
