# React Project-Starter Boilerplate

> The largest frustration with getting a project up and running from development to production is setting up 5843993488394 packages before you can even start development. This project aims to provide a good place to begin, with pre-configured packages to handle development servers, CSS polyfills, forced https redirects, text compression, firebase deployments, and much more.

### Getting Started

Install Dependencies

```
yarn install
```

#### Developing locally

In your CLI run the following

```
yarn run dev-server
```

In the output you should see a Project is running at localhost:\<someport\>. Navigate to that page and start developing!

#### Deploying to Firebase

Install the Firebase CLI

```
yarn add -g firebase-tools
```

Once you have Firebase CLI installed and are logged in to the CLI application you can run the following from the root directory to initialize a new Firebase project...

```
firebase init
```

Once created, deploying is as simple as running

```
firebase deploy
```
