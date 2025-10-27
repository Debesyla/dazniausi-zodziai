# Epic 1 Foundation & Core Infrastructure
Establish the technical foundation for the project by setting up the Svelte environment, configuring the repository, and implementing basic data loading. This epic ensures the app can run locally and load datasets, providing a stable base for subsequent features. It delivers initial value by enabling a working prototype that demonstrates data access and meets the launch timeline goal.

## Story 1.1 Setup Svelte Project Foundation
As a developer,  
I want to initialize a Svelte project with basic build configuration and a simple landing page,  
so that I have a runnable app foundation for further development.  

### Acceptance Criteria
1.1: Svelte project is created using the official template.  
1.2: Build and dev scripts are configured and functional.  
1.3: A basic page renders with project title and placeholder content.  
1.4: Repository is initialized with Git and basic structure (src/, data/).  

## Story 1.2 Implement JSON Data Loading
As a developer,  
I want to create a component that loads and parses embedded JSON datasets with metadata,  
so that the app can access and display word frequency data.  

### Acceptance Criteria
2.1: JSON files are placed in the data/ directory.  
2.2: A data loading function parses JSON and extracts words, frequencies, and metadata.  
2.3: Component renders loaded data in a simple list format.  
2.4: Error handling for invalid JSON or missing files.  
