# clase01-angular-4r

## Instalación
1. Clonar el proyecto mediante "git clone" (o descargar el proyecto en formato zip)
2. Instalar [Node JS](https://nodejs.org/en/)
3. Verificar la correcta instalación de NodeJS ejecutando
```javascript
  $ npm -version
```
```javascript 
  $ node -version
```
4. Dentro del directorio donde está el archivo "package.json" ejecutar el comando 
```javascript
"npm install"
```
5. Instalar el modulo de node [http-server](https://www.npmjs.com/package/http-server)
```javascript
npm install http-server -g
```
6. Ejecutar el servidor HTTP por ejemplo escuchando en el puerto 4000
```javascript
$http-server -p 4000
```
7. En el navegador las diversas URL http://localhost:4000/index0X.html donde "0X" se corresponde a "01" hasta "06"

## Ejemplo 01
<http://localhost:4000/index01.html> : 
* Muestra simplemente un archivo que realiza el bootstraping de angular.

## Ejemplo 02
<http://localhost:4000/index02.html> : 
* Primer ejemplo que integra la vista con el modelo (variable $scope dentro del controller) con binding unidireccional

## Ejemplo 03
<http://localhost:4000/index03.html> : 
* Utilizar el binding bidireccional (ng-model) con elementos de un formulario. 
* Utilizar los comandos "ng-click". 
* Define funciones en el controlador usadas por ng-click.

## Ejemplo 04
<http://localhost:4000/index04.html> : 
* Utilizar directiva ng-show y ng-hide para decidir si se muestra u oculta un bloque
* Utilizar directiva ng-repeat para mostrar una lista de elementos.
  * Agregar un boton en la lista pasando la variable $index de "ng-repeat"
  * Crear en el controlador una función que borra una tarea del arreglo de tareas.

## Ejemplo 05
<http://localhost:4000/index05.html> : 
* Utilizar directiva ng-disable para deshabilitar el botón guardar cuando no hay datos.
* Uso de la directiva ng-class para destacar un texto

## Ejemplo 06
<http://localhost:4000/index06.html> : 
* Usar la directiva ng-include para dividir la vista en partes (plantillas).
* Usar la directiva ng-options para cargar opciones en un combo (select). 
  * En este caso desde un arreglo de objetos que representan una "prioridad"
* Notar que en el controlador se pone también como valor predefinido en la fecha la fecha actual.
