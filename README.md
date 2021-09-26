# Google Oauth 2.0 Example

This project includes a node.js server (using express) which implements a very simple Oauth Authentication system with Google.

## Authentication Flow

The user starts with no token. When the user has no token, the logged in user card is not rendered.

![User Not Logged In](/docs/img/no-user.png)

The user then clicks on the "Sign in With Google button". This starts the authentication process. The first part of the process is to navigate to `/auth/google`. This triggers `passport` to redirect us to the google login page. This google login page is set up by creating a project in the Google Cloud Platform apis. I then tell google what pieces of information I need from the user so they can generate the correct login screen. I then create a set of credentials which uses that consent screen. The user is redirected to that consent screen and allowed to choose a profile.

![User Profile Choice](/docs/img/google-login-prompt.png)

The user signs in with their account on google. Google then sends a `GET` request to the redirect url that I specify in the configuration.

![Redirect](/docs/img/allowed-origins.png)

The user is then sent back to my application, at the `/auth/google/callback` url. This route then redirects to the home screen, but a user is on the `req` object if the user successfully signed in.

![Logged In](/docs/img/logged-in.png)

## Libraries Used

- Cookie Session - Session Management
- Passport - Authentication Manager
- Passport Google 2.0 - Google Specific Auth Management
- Express - Server
- Express Handlebars - Template engine for UI

## File Structure

- `server.js` - Entry Point to Application
- `views/` - View Engine rendering templates
- `routers/` - Holds routers - for example all routes that start with `/auth`
- `public/` - Static Assets
- `config` - Configuration for Passport
