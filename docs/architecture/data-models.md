# Data Models

Define the core data models/entities shared between frontend and backend:

## Dataset

**Purpose:** Represents a collection of word frequency data from a researcher, including metadata for selection and context.

**Key Attributes:**
- author: string - Researcher or source name
- year: number - Publication or collection year
- words: Word[] - Array of word-frequency pairs

**Relationships:**
- Contains multiple Word entities

### TypeScript Interface

```typescript
interface Dataset {
  author: string;
  year: number;
  words: Word[];
}
```

## Word

**Purpose:** Individual word entry with its frequency count and optional type category for sorting and filtering.

**Key Attributes:**
- word: string - The Lithuanian word
- type?: string - Optional category (e.g., noun, verb, person name)
- frequency: number - Occurrence count

**Relationships:**
- Belongs to a Dataset

### TypeScript Interface

```typescript
interface Word {
  word: string;
  type?: string;
  frequency: number;
}
```
