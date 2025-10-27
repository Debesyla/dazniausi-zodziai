# Responsiveness Strategy

### Breakpoints

| Breakpoint | Min Width | Max Width | Target Devices          |
|------------|-----------|-----------|-------------------------|
| Mobile     | 0px       | 767px    | Mobile phones           |
| Tablet     | 768px     | 1023px   | Tablets                 |
| Desktop    | 1024px    | 1439px   | Desktops, laptops       |
| Wide       | 1440px    | -        | Large screens, monitors |

### Adaptation Patterns

**Layout Changes:** Stack elements vertically on mobile (header > search > table > footer); use full-width table with horizontal scroll for data columns.

**Navigation Changes:** Keep primary nav as top bar; move download button to table footer on mobile for thumb accessibility.

**Content Priority:** Show essential data (words/frequencies) first; hide or collapse metadata on small screens; truncate long words with ellipsis.

**Interaction Changes:** Increase touch targets to 48px minimum; enable swipe gestures for table scrolling; ensure search input is large and easy to tap.
