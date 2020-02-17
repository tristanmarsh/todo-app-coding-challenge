# Todo List Web Application

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=tristanmarsh_todo-app-coding-challenge&metric=alert_status)](https://sonarcloud.io/dashboard?id=tristanmarsh_todo-app-coding-challenge)

A todo list web app build with react, typescript and bundled with [FuseBox](https://fuse-box.org).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node 12.10.0+

### Installing

Install Node dependencies with your package manager of choice

```
yarn install
```

### Development

Build and serve the app for development with the `develop` command.

```
yarn develop
```

Build the FuseBox optimised production bundle with the `build` command.

```
yarn build
```

This outputs to the dist directory. Spin up a web server such as `http-server` to preview the build.

```
npx http-server dist/
```

## Authors

**Tristan Marsh** - [TristanMarsh](https://github.com/tristanmarsh)
