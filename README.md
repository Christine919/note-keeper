# Note Keeper

A simple note-keeping app built using React and Material-UI. This app allows users to create, view, and delete notes.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Dependencies](#dependencies)
- [Scripts](#scripts)

## Features

- Add new notes.
- Delete notes.
- Clean and responsive design using Material-UI.

## Demo

You can view a demo of the project [here](#).

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/note-keeper.git
    ```

2. Navigate to the project directory:

    ```bash
    cd note-keeper
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Run the app:

    ```bash
    npm start
    ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

1. To create a new note, simply type into the input area and click the "Add" button.
2. To delete a note, click the trash icon next to the note you wish to remove.

## File Structure
.
├── node_modules/         # Dependencies
├── package-lock.json     # Automatically generated for dependency versions
├── package.json          # Project metadata and dependencies
├── public/
│   ├── index.html        # Main HTML file for the app
│   ├── styles.css        # Global CSS styles
├── src/
│   ├── components/       # Contains reusable React components
│   ├── App.jsx           # Main application component
│   ├── CreateArea.jsx    # Component to create a new note
│   ├── Footer.jsx        # Footer component
│   ├── Header.jsx        # Header component
│   ├── Note.jsx          # Component to display individual notes
│   └── index.js          # Entry point for React application


## Dependencies

- React: ^16.8.6
- Material-UI Core: ^4.6.1
- Material-UI Icons: ^4.5.1
- UUID: ^3.3.3

## Scripts

- `npm start`: Runs the app in the development mode.
- `npm build`: Builds the app for production.
- `npm test`: Runs tests using the React Testing Library.
- `npm eject`: Ejects the app from `react-scripts`.

