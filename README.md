# New Year Countdown
![Build Status](https://github.com/okyanusoz/new-year-countdown/workflows/Build%20and%20Deploy/badge.svg)

See it in action: https://new-year-countdown-nine.vercel.app/

This is a simple new year countdown(currently 2021).

<h3>Running it locally</h3>

You need Node.js(at least 12 is recommended.)

First, edit src/Config.js if would you like to change the configuration.

Then run:

<code>
npm install
</code>


<code>
npm start
</code>

The app will now be listening on http://localhost:3000.

To build, run(after running npm install):<br>
<code>npm run build</code>

The built app will be in the build directory.

If you just want to build the app, you can also get the built app from <a href="https://github.com/okyanusoz/new-year-countdown/actions/workflows/deploy.yml">Build and Deploy workflow.</a> The workflow uploads the built app as an artifact.

<h3>Contributing</h3>

To contribute, just send a pull request.
The tests will run, and if they succeed, then I will be happy to merge your PR.
