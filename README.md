# Progress Bar Application

## Overview
This is an Angular 11 application that dynamically displays a progress bar based on user input. The user can enter a value, and the progress bar will visually represent the percentage of completion.

## Features
- User input-based progress bar
- Real-time progress updates
- Responsive UI using Angular framework

## Technologies Used
- **Angular 11** for frontend development
- **RxJS** for handling reactive state management
- **TypeScript** for structured JavaScript development

## Getting Started

### Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (Recommended: v12 or later)
- [Angular CLI](https://angular.io/cli) (Version 11.2.0)

### Installation
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd sakthi-unimity-task
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running the Application
Start the development server with the following command:
```sh
npm start
```
This will start the Angular development server at `http://localhost:4200/`.

### Building the Application
To generate a production-ready build:
```sh
npm run build
```
The output will be in the `dist/` directory.

### Running Tests
Unit tests:
```sh
npm run test
```
End-to-end tests:
```sh
npm run e2e
```

## Project Structure
```
|-- src/
|   |-- app/
|   |   |-- progress-bar/
|   |   |   |-- progress-bar.component.ts
|   |   |   |-- progress-bar.component.html
|   |   |   |-- progress-bar.component.scss
|   |   |-- progress-directive/
|   |   |   |-- progress-level.directive.ts
|   |   |-- app.component.ts
|   |-- assets/
|   |   |-- dummy-user.png
|   |-- environments/
|   |   |-- environment.ts
|   |-- main.ts
|   |-- index.html
|-- angular.json
|-- package.json
|-- README.md
```
