#### Propósito

Roteamento sem alterar url do navegador.

**Positivo**

- Aproveita todo o benefício do _[router](https://angular.io/api/router)_

**Negativo (?)**

- O uso de _[Lazy-loading](https://angular.io/guide/lazy-loading-ngmodules)_ é preciso trabalhar com 2 tipos de `routing.module`. do diretório principal e dos recursos;
- Para cada elemento que tenha a diretiva `routerLink`, precisa add também `skipLocationChange="true"`
  - possível criar um _service_ e _directive_ , driblar isso.

**Plus**

- criar serviço para add identificador de _loading_, _data_, iniciar um recurso _N_.

---

#### Referência

- [Atualizar Typescript ~ Angular 8.x](https://medium.com/@andreizhamoida/typescript-3-7-1106a532e92c)

- [Desativar alterações de URL com roteamento](https://stackoverflow.com/questions/53196790/how-to-disable-url-changes-with-angular-routing)

# AngularSkipLocationChange

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.28.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
