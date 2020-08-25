# Basketboard

## Instalando angular

Para poder usar el proyecto se necesita el CLI de angular, los pasos para instalarlo son los siguientes:

- Instalar [node](https://nodejs.org/es/) 

- Con [npm](https://www.npmjs.com/) instalar el [CLI de angular](https://github.com/angular/angular-cli).

```bash
npm install -g @angular/cli
```

- De forma opcional se puede instalar [git](https://git-scm.com/) para clonar el repositorio directamente.

```bash
git clone https://github.com/ArielBlas/basketboard.git
```

- Despues hay que instalar las dependencias del proyecto.

```bash
npm install
```

El último paso es ejecutar el proyecto para verificar que todo está en orden, para lo que hay dos opciones.

```bash
ng serve
```

```bash
ng build
```

Cuando compilas el proyecto, pero no lo quieres mover de la carpeta donde se genera a la raíz o lo vas a colocar en una carpeta diferente puedes usar el siguiente comando:

```bash
ng build --base-href /basketboard/dist/ --prod