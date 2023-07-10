# typescript-examples

Typescript projects used for education and testing.

## Yarn

This project uses Yarn because of speed and overall positive experience with Yarn. Yarn uses [zero-installs philosophy](https://yarnpkg.com/features/zero-installs) which uses local yarn files to determine package information instead of the traditional `node_modules`. Therefore we need to have a `.yarn` folder (see `.gitignore` for more details, it also comes from Yarn). This still presents some possible drawbacks, e.g. [growing repository size](https://yarnpkg.com/features/zero-installs#what-does-this-do-to-my-repository-size).
