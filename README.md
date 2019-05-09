# React Project-Starter Boilerplate
> The largest frustration with getting a project up and running from development to production is setting up 5843993488394 packages before you can even start development. This project aims to provide a good place to begin, with pre-configured packages to handle development servers, CSS polyfills, forced https redirects, text compression, heroku deployments, and much more.

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

#### Deploying to Heroku

Once you have heroku installed and are logged in to the CLI application you can run the following...

```
heroku create <app_name>
```

Once created, deploying is as simple as running

```
git push heroku master
```
