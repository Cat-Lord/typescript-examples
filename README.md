# typescript-examples

Typescript projects used for education and testing.

## Yarn

This project uses Yarn because of speed and overall positive experience with Yarn. Yarn uses [zero-installs philosophy](https://yarnpkg.com/features/zero-installs) which uses local yarn files to determine package information instead of the traditional `node_modules`. Therefore we need to have a `.yarn` folder (see `.gitignore` for more details, it also comes from Yarn). This still presents some possible drawbacks, e.g. [growing repository size](https://yarnpkg.com/features/zero-installs#what-does-this-do-to-my-repository-size).

# Code Details

I added empty exports to each file because I didn't bother trying to get the modules working properly. This ensures that the scope of each file is not shared and thus it is allowed to create a variable like "vehicle" in multiple files without
redefinition clashes.

```ts
// usually at the end of each file, if not present, feel free to add it
export {};
```

## Naming convention

This code base uses underscore to split words in file names. This is only used for clarity as this repository is not an actual code being deployed and used elsewhere. Sometimes variables are defined with underscores as well only to prove a point that the variable name is trying to point out (e.g. `is_a_type` is trying to check whether something is a type).
