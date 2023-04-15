# EventMobi Gists API

This is a React.js app called eventmobi-gists-api that allows users to access and interact with GitHub Gists.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173/](http://localhost:5173/) with your browser to see the result.

## Available Scripts

In the project directory, you can run:

`npm run dev`

Runs the app in development mode using Vite.

`npm run build`
Builds the app for production using TypeScript and Vite.

`npm run preview`
Starts a preview server for the production build.

`npm run test`
Runs the tests using Vitest.

## Environment Variables

You should authenticate your Github API requests using a personal access token. Here's how you can do that:

1. Go to GitHub and sign in to your account.
2. Click on your profile picture in the top-right corner and select "Settings."
3. In the left sidebar, click on "Developer settings."
4. Click on "Personal access tokens" and then the "Generate new token" button.
5. Give your token a description, select the appropriate scopes (for this application, you don't need to select any additional scopes), and click "Generate token."
6. Copy the generated token to your clipboard.

Now, create a .env file in the root directory and add the access token evn variable:

```javascript
// .env
VITE_API_KEY = YOUR_ACCESS_TOKEN
```

Remember to replace YOUR_ACCESS_TOKEN with your actual access token. After making these changes, restart the development server.
