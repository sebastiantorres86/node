# Node.js

Cuando empezamos con el desarrollo web, es común comenzar con la parte html, css y javascript. Una vez dentro de este mundo comenzamos a descubrir que existen otros términos como pueden ser backend y fullstack, entre muchos otros, los cuales no son nada más que una forma general de llamar a las diferentes áreas necesarias para poder crear una aplicación web.

El backend hace referencia al código que corre del lado del servidor y, a diferencia del frontend, este suele presentarse en una serie de diferentes colores y sabores de lenguajes, algunos ejemplos: Java, Python, Ruby, **Javascript**, Go, Rust, etc. Cada uno de estos lenguajes tienen sus respectivos interpretes/compiladores y sus propias herramientas y frameworks. En esta ocasión nos enfocaremos únicamente en Node.js y cómo nos permite desarrollar backend usando el conocimiento en Javascript que ya poseemos.

## ¿Qué es backend?

El backend generalmente consiste de tres partes: un servidor, una aplicación (un programa) y una base de datos. Ejemplo: Si compramos una entrada para un recital, normalmente abrimos la página web e interactúamos con su interfaz. Una vez que ingresamos toda la información necesaria, la aplicación la guarda en una base de datos que se creó en el servidor.

Para mayor facilidad, imaginemos que esa base de datos es como una hoja de Excel gigante, guardada en una computadora (servidor) que se encuentra en algún lugar lejano del mundo.

Toda esa información permanece en el servidor, de modo que cuando volvamos a iniciar sesión en la página web para imprimir las entradas, todos los datos van a estar ahí en nuestra cuenta.

## ¿Qué es Node.js?

En términos simples, se trata de una plataforma de código abierto y libre de JavaScript para la programación del lado del servidor, que nos va a permitir crear aplicaciones rápidamente.

+ Node.js nos permite ejecutar Javascript en distintos ambientes y con esto realizar distintas tareas
+ Dentro de las tareas que podemos realizar se destacan las siguientes:
  + Correr un simple script
  + Correr el build de nuestro frontend: Gracias a varios módulos que hay disponibles podemos utilizar Node.js como entorno para generar los archivos finales que vamos a deployar en nuestro hosting
  + Correr un servidor web
  + Conectarnos a motores de bases de datos
+ En esta parte me voy a enfocar en utilizar Node.js para crear un servidor web y poder crear páginas dinámicas en lugar de estáticas como hice hasta ahora (con HTML y CSS)
+ Al instalar Node.js también se instala otro programa llamado NPM

### Ejemplo 1

Creamos un archivo `index.js` y copiamos el siguiente contenido:

```
console.log('¡Hola Mundo desde Node.js!)
```

Abrimos una terminal de línea de comandos como cmd o Windows PowerShell si usamos Windows, nos movemos de directorio hasta la carpeta donde guardamos el archivos y ejecutamos: node index.js. Vas a ver en la consola impreso el mensaje del console.log().

El código de ejemplo se enecuentra [aquí](https://github.com/sebastiantorres86/node/tree/master/ejemplos/01-helloWorld)

## Ejecutar Scripts de Node.js

**Node** es un lenguaje y entorno interpretado, no compilado. Hay tres formas principales de ejecutar código de node:

1. REPL
2. Opción eval
3. Lanzar código de node desde un archivo

### Ejecutar código Node desde un archivo

Este es el caso de uso más común porque nos permite guardar programas largos de Node, y ejecutarlos. Para ejecutar un script de Node.js desde un archivo, simplemente escriba `node [NOMBRE_ARCHIVO]`.

Por ejemplo, para correr el código de un archivo `app.js`, que se encuentra en la carpeta actual, simplemente tenemos que ejecutar:

```
node app.js
```

El archivo tiene que estar en la misma carpeta. Si necesitamos ejecutar código desde un archivo que está en una carpeta diferente, necesitamos agregar la ruta relativa o absoluta:

```
node ./app/server.js
node /var/www/app/server.js
```

El `.js` es opcional siempre que tenga un archivo con esa extensión. En otras palabras, si tenemos el archivo `server.js` puede ejecutar `node server`.

## Node.js Globals

A pesar de estar creado siguiendo un estándar, Node.js y JavaScript del navegador se diferencian en lo que se refiere a variables globales. Por ejemplo, en el navegador tenemos un variable/objeto document. Sin embargo, en Node.js, no existe (ya que no tratamos con el DOM del navegador), pero si vamos a tener a disposición otras globales / palabras claves:

+ process
+ global
+ module.exports and exports

Vamos a ver las principales diferencias entre Node.js y JavaScript.

### global

Tenemos una variable llamada `global`, que es accesible desde cualquier programa o archivo de Node. Esta se refiere al objeto global, y tiene diferentes propiedades como: `global.process` o `global.require` o `global.console`.

Cualquier propiedad del primer nivel dentro del objeto `global`, es accesible sin agregar el prefijo `global`. Por ejemplo, `global.process` es igual a `process`.

### Principales propiedades globales

Estas son las principales propiedades del objeto global y se conocen como globals:

+ process
+ require()
+ module and module.exports
+ console and console.log()`
+ setTimeout() and setInterval()
+ __dirname and __filename

`console.log()` y `setTimeout()` funcionan similar a los métodos del navegador. Ahora nos vamos a centrar en ver `process`, `require()` y `module.exports`.

### __dirname, __filename y process.cwd

`__dirname` es un path absoluto al archivo desde donde estamos utilizando alguna variable global.

`process.cwd` es el path absoluto desde donde ejecutamos nuestra aplicación de Node.

`__filename` es similar a __dirname solo que tiene concatenado el nombre del archivo desde donde utilizamos la variable.


