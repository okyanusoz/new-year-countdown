# New Year Countdown
![Build Status](https://github.com/okyanusoz/new-year-countdown/workflows/Build%20and%20Deploy/badge.svg)

See it in action: https://new-year-countdown-nine.vercel.app/

This is a simple new year countdown(currently 2021).

### Running it locally

You need Node.js(at least 12 is recommended.)

First, edit src/Config.js if would you like to change the configuration.

Then run:

``
npm install
``

``
npm start
``

The app will now be listening on http://localhost:3000.

To build, run(after running npm install):

`npm run build`

The built app will be in the build directory.

If you just want to build the app, you can also get the built app from the [Build and Deploy workflow](https://github.com/okyanusoz/new-year-countdown/actions/workflows/deploy.yml).</a> The workflow uploads the built app as an artifact.

## Contributing

To contribute, just send a pull request.
The tests will run, and if they succeed, then I will be happy to merge your PR.
