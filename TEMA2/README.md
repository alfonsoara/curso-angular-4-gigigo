# Curso de Angular 4 en Gigigo

`Tema 1` Primeros pasos con Angular:
* Instalacion de Angular CLI
* Instalacion de dependencias en el CLI
* Generacion de componentes
* Angular Animation
* Usando Router Module

## Instalacion de Angular CLI

Para instalar angular CLI en su ultima version es necesario el siguiente comando:
`npm install -g @angular/cli@latest`

Ya instalado el CLI en nuestro sistemas, podemos empezar a generar el proyecto:
`ng new curso-angular-4`

Si necesitamos generar un proyecto con un procesador de css es necesario el siguiente comando:
`ng new curso-angular-4-gigigo --style=stylus`

Ya generado nuestro proyecto, veremos la siguiente estructura:

```
⋅⋅ae2e (Directory)
⋅⋅node_modules (Directory)
⋅⋅src (Directory)
⋅⋅⋅⋅app (Directory)
⋅⋅⋅⋅⋅⋅⋅login (Director)
⋅⋅⋅⋅⋅⋅⋅app.component.html
⋅⋅⋅⋅⋅⋅⋅app.component.spec.ts
⋅⋅⋅⋅⋅⋅⋅app.component.styl
⋅⋅⋅⋅⋅⋅⋅app.component.ts
⋅⋅⋅⋅⋅⋅⋅app.module.ts
⋅⋅⋅⋅assets (Directory)
⋅⋅⋅⋅environments (Directory)
⋅⋅⋅⋅favicon.ico
⋅⋅⋅⋅index.html
⋅⋅⋅⋅main.ts
⋅⋅⋅⋅polyfills.ts
⋅⋅⋅⋅styles.styl
⋅⋅⋅⋅test.ts
⋅⋅⋅⋅tsconfig.app.json
⋅⋅⋅⋅tsconfig.spec.json
⋅⋅⋅⋅typings.d.ts
⋅⋅.angular-cli.json (Angular CLI configuration)
⋅⋅.editorconfig
⋅⋅.gitignore
⋅⋅karma.conf.js
⋅⋅packaje.json
⋅⋅protractor.conf.js
⋅⋅README.md
⋅⋅tsconfig.json
⋅⋅tslint.json
```


# Tips:

Si por alguna razon el CLI nos llegar a instalar una version 2 de Angular la podemos actualizar con el siguiente comando:
`npm install @angular/{common,compiler,compiler-cli,core,forms,http,platform-browser,platform-browser-dynamic,platform-server,router,animations}@latest --save`

Para instalar la ultima version Beta:
`npm install @angular/{common,compiler,compiler-cli,core,forms,http,platform-browser,platform-browser-dynamic,platform-server,router,animations}@next --save`


# Angular Cli Information

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
