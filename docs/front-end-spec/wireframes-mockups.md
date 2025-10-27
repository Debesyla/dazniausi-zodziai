# Wireframes & Mockups

### Design Files

**Primary Design Files:** Figma project at [placeholder link - to be created], including wireframes, mockups, and interactive prototypes for the dataset selection, table view, and download modal.

### Key Screen Layouts

#### Dataset Selection Screen

**Purpose:** Enable users to browse and select datasets with metadata for loading.

**Key Elements:**
- Header with site title and amber accent
- Dataset dropdown (list of JSON files with author/year)
- Metadata preview panel (author, year, word count)
- Load button with pixelated amber icon

**Interaction Notes:** Dropdown expands on click; selecting a dataset updates metadata preview instantly. Load button triggers table view transition.

**Design File Reference:** Figma frame "Dataset Selection Wireframe"

#### Main Data Table View

**Purpose:** Display sortable, searchable table of words and frequencies.

**Key Elements:**
- Top search bar with placeholder text
- Table with columns: Word, Frequency (sortable headers)
- Footer with download button and result count
- Dark background with amber text/icons

**Interaction Notes:** Click headers to sort; typing in search filters table in real-time. Download button opens modal.

**Design File Reference:** Figma frame "Data Table Mockup"

#### Download Confirmation Modal

**Purpose:** Confirm export options before downloading data.

**Key Elements:**
- Modal overlay with amber border
- Format options (CSV, JSON)
- Preview of data to export (filtered count)
- Confirm/Cancel buttons

**Interaction Notes:** Selecting format updates preview; confirm triggers download, cancel closes modal.

**Design File Reference:** Figma frame "Download Modal Wireframe"
