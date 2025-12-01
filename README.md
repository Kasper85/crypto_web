# Crypto Project Web Template

This is the official repository for the Crypto Project web template. It is built with modern technologies to be fast, secure, and easy to customize.

## Quick Start Guide

If you are new to this, do not worry! Follow these simple steps to get your website running on your computer.

### 1. Prerequisites

Before starting, you need to have **Node.js** installed on your computer.
- Download and install it from here: [https://nodejs.org/](https://nodejs.org/) (The "LTS" version is recommended).

### 2. Installation

Once you have Node.js installed:

1.  Open the folder of this project in your terminal or command prompt.
2.  Type the following command and press Enter to install all necessary dependencies:

```bash
npm install
```

*This may take a few minutes. You will see a progress bar while the libraries are downloading.*

### 3. Running the Project (Development Mode)

To view the website and work on it:

1.  In the same terminal, type:

```bash
npm run dev
```

2.  You will see a message saying something like `Local: http://localhost:5173/`.
3.  Open that link in your web browser (Chrome, Edge, etc.).
4.  Done! You will now see the website working. Any changes you make to the code will be reflected automatically.

### 4. Building for Production (To Publish)

When you have finished your changes and want to upload the site to the internet:

1.  Run this command:

```bash
npm run build
```

2.  This will create a folder named `dist` with the optimized files ready to upload to your hosting provider (like Vercel, Netlify, or Hostinger).

## Project Structure

To help you navigate, here are the most important folders and files:

-   **src/components/**: Here are the parts of your page (Hero, About, Partners, etc.). If you want to change text or images, look here.
-   **src/App.jsx**: This is the main file that joins all the components together.
-   **public/images/**: You should save your images (logos, backgrounds) here.
-   **tailwind.config.js**: Here you can change the theme colors and fonts.

## Technologies Used

-   **React**: The main library for building the interface.
-   **Vite**: The tool that makes everything run very fast.
-   **Tailwind CSS**: For design and styling (colors, spacing, etc.).
-   **Lucide React & React Icons**: For the icons.

---

Have questions? Check the official documentation for [Vite](https://vitejs.dev/) or [React](https://react.dev/)!
