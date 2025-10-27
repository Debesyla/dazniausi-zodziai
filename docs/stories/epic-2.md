# Epic 2 Data Exploration Features
Build core user-facing functionality by implementing the sortable table and search capabilities. This epic enables users to interact with data effectively, supporting the primary goal of quick filtering and sorting within 30 seconds. It delivers tangible value by allowing linguists and students to explore datasets, directly contributing to user success metrics like completion rates.

## Story 2.1 Create Sortable Table Component
As a user (linguist or student),  
I want to view words in a table that I can sort by word or frequency,  
so that I can organize data for analysis.  

### Acceptance Criteria
1.1: Table component displays words and frequencies from loaded data.  
1.2: Column headers allow ascending/descending sort on click.  
1.3: Sorting is performant for datasets up to 10,000 words.  
1.4: Table updates dynamically without page reload.  

## Story 2.2 Add Search and Filter Functionality
As a user (linguist or student),  
I want to filter the table by typing in a search bar,  
so that I can quickly find specific words or patterns.  

### Acceptance Criteria
2.1: Search bar is present above the table.  
2.2: Typing filters rows in real-time (case-insensitive).  
2.3: Filter works on word text only.  
2.4: Clear search option resets the view.  
