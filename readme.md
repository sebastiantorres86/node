# Node.js

Cuando empezamos con el desarrollo web, es común comenzar con la parte html, css y javascript. Una vez dentro de este mundo comenzamos a descubrir que existen otros términos como pueden ser backend y fullstack, entre muchos otros, los cuales no son nada más que una forma general de llamar a las diferentes áreas necesarias para poder crear una aplicación web.

El backend hace referencia al código que corre del lado del servidor y, a diferencia del frontend, este suele presentarse en una serie de diferentes colores y sabores de lenguajes, algunos ejemplos: Java, Python, Ruby, **Javascript**, Go, Rust, etc. Cada uno de estos lenguajes tienen sus respectivos interpretes/compiladores y sus propias herramientas y frameworks. En esta ocasión nos enfocaremos únicamente en Node.js y cómo nos permite desarrollar backend usando el conocimiento en Javascript que ya poseemos.

## ¿Qué es backend?

El backend generalmente consiste de tres partes: un servidor, una aplicación (un programa) y una base de datos. Ejemplo: Si compramos una entrada para un recital, normalmente abrimos la página web e interactúamos con su interfaz. Una vez que ingresamos toda la información necesaria, la aplicación la guarda en una base de datos que se creó en el servidor.

Para mayor facilidad, imaginemos que esa base de datos es como una hoja de Excel gigante, guardada en una computadora (servidor) que se encuentra en algún lugar lejano del mundo.

Toda esa información permanece en el servidor, de modo que cuando volvamos a iniciar sesión en la página web para imprimir las entradas, todos los datos van a estar ahí en nuestra cuenta.

## ¿Qué es Node.js?

En términos simples, se trata de una plataforma de código abierto y libre de JavaScript para la programación del lado del servidor, que nos va a permitir crear aplicaciones rápidamente.

- Node.js nos permite ejecutar Javascript en distintos ambientes y con esto realizar distintas tareas
- Dentro de las tareas que podemos realizar se destacan las siguientes:
  - Correr un simple script
  - Correr el build de nuestro frontend: Gracias a varios módulos que hay disponibles podemos utilizar Node.js como entorno para generar los archivos finales que vamos a deployar en nuestro hosting
  - Correr un servidor web
  - Conectarnos a motores de bases de datos
- En esta parte me voy a enfocar en utilizar Node.js para crear un servidor web y poder crear páginas dinámicas en lugar de estáticas como hice hasta ahora (con HTML y CSS)
- Al instalar Node.js también se instala otro programa llamado NPM

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

- process
- global
- module.exports and exports

Vamos a ver las principales diferencias entre Node.js y JavaScript.

### global

Tenemos una variable llamada `global`, que es accesible desde cualquier programa o archivo de Node. Esta se refiere al objeto global, y tiene diferentes propiedades como: `global.process` o `global.require` o `global.console`.

Cualquier propiedad del primer nivel dentro del objeto `global`, es accesible sin agregar el prefijo `global`. Por ejemplo, `global.process` es igual a `process`.

### Principales propiedades globales

Estas son las principales propiedades del objeto global y se conocen como globals:

- process
- require()
- module and module.exports
- console and console.log()`
- setTimeout() and setInterval()
- **dirname and **filename

`console.log()` y `setTimeout()` funcionan similar a los métodos del navegador. Ahora nos vamos a centrar en ver `process`, `require()` y `module.exports`.

### **dirname, **filename y process.cwd

`__dirname` es un path absoluto al archivo desde donde estamos utilizando alguna variable global.

`process.cwd` es el path absoluto desde donde ejecutamos nuestra aplicación de Node.

`__filename` es similar a \_\_dirname solo que tiene concatenado el nombre del archivo desde donde utilizamos la variable.

Código de ejemplo [aquí](https://github.com/sebastiantorres86/node/tree/master/ejemplos/02-globals)

### Node.js process

Cada archivo de Node.js que ejecutamos es un **proceso**.

Podemos acceder a información importante sobre este proceso utilizando el objeto global `process`. Por ejemplo, en la consola podemos ejecutar `node -e "console.log(process.pid)"` y veríamos algo como `95716`.

Otra información importante sobre este proceso es:

- env: Variables de entorno
- argv: argumentos de la línea de comando
- exit(): método para terminar el proceso

Veamos cada una por separado.

**env: Variables de entorno**

Las variables de entorno son accesibles mediante el atributo `env`:

```
console.log(process.env)

{
  ALLUSERSPROFILE: 'C:\\ProgramData',
  APPDATA: 'C:\\Users\\sebas\\AppData\\Roaming',
  ChocolateyInstall: 'C:\\ProgramData\\chocolatey',
  ChocolateyLastPathUpdate: '132270615779150895',
  CommonProgramFiles: 'C:\\Program Files\\Common Files',
  'CommonProgramFiles(x86)': 'C:\\Program Files (x86)\\Common Files',
  CommonProgramW6432: 'C:\\Program Files\\Common Files',
  COMPUTERNAME: 'LAPTOP-QCS94STS',
  ComSpec: 'C:\\WINDOWS\\system32\\cmd.exe',
  configsetroot: 'C:\\WINDOWS\\ConfigSetRoot',
  DriverData: 'C:\\Windows\\System32\\Drivers\\DriverData',
  HOMEDRIVE: 'C:',
  HOMEPATH: '\\Users\\sebas',
  LOCALAPPDATA: 'C:\\Users\\sebas\\AppData\\Local',
  LOGONSERVER: '\\\\LAPTOP-QCS94STS',
  NUMBER_OF_PROCESSORS: '4',
  ...
}
```

Código de ejemplo [aquí](https://github.com/sebastiantorres86/node/tree/master/ejemplos/03-env)

Las variables de entorno se utilizan para definir parámetros básicos en la configuración de los programas, y que estos se ejecuten en diferentes ambientes sin tener que editar el código fuente del script. Su uso es habitual porque los programas se pueden ejecutar en diferentes ordenadores.

Entre los valores más habituales que pueden cambiar entre diferentes entornos, puede ser por ejemplo:

- usuario y contraseña para enviar emails
- claves para acceders a APIs
- etc.

Estos valores tenemos que definirlos al ejecutar el programa.

Una forma breve de configurar variables de entorno en la terminal/consola, y después ejecutar un script de Node es, por ejemplo, la siguiente:

```
NODE_ENV=development node e- "console.log-(process.env.NODE_ENV)
```

`NODE_ENV` es una convención. Algunos valores comunes son:

- development
- production

**Argumentos de la línea de comandos**

Para acceder a los argumentos que escribimos en la consola al momento de ejecutar nuestro programa de Node, podemos utilizar la propiedad `process.argv`, que es un array.

Por ejemplo, si el comando es

```
node app.js arg1 arg2 arg3=val3
```

Los primeros dos argumentos van a ser `node` y el nombre de la aplicación, mientras que el resto de los elementos del array son los argumentos que escribimos. Por ejemplo:

```
console.log(process.argv);

[
  'node',
  'app.js',
  'arg1',
  'arg2',
  'arg3=val3'
]
```

Código de ejemplo [aquí]()https://github.com/sebastiantorres86/node/tree/master/ejemplos/04-process.argv

Ir a [módulos](https://github.com/sebastiantorres86/node/tree/master/modulos)

Ir a [NPM](https://github.com/sebastiantorres86/node/tree/master/npm)

---

## Servidor Web

- Uno de los usos más comunes de Node.js es para correr servidores web.
- Al crear un servidor web con Node.js vamos a interactuar con los módulos [HTTP/HTTPS](https://nodejs.org/api/http.html)

### Utilizando el módulo HTTP de Node.js podemos crear un servidor web

Si bien Node.js puede ser usado para una gran variedad de tareas, su uso primario es para crear aplicaciones web. Node _prospera_ en redes como resultado de su naturalez asíncrona y los módulos del núcleo (como **http**). Node es excelente para crear servidores web rápidos y eficientes.

Vamos a ver un ejemplo sencillo de un servidor web. En el ejemplo vamos a crear un objeto **server**, definir un manejador de requests (una función con un parámetro `req` y `res`), y enviarle alguna información a quien nos hizo un pedido.

```
const http = require('http');
const port = 3000;

// creamos la funcion que maneja los pedidos
const handle = (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Hola Mundo!');
};

// creamos el objeto servidor
const server = http.createServer(handle);

// ponemos el servidor a escuchar pedidos
server.listen(port, err => {
  if (err) {
    return console.log('algo falló al poner al server a la escucha', err)
  }

  console.log(`el servidor esta a la escucha en el puerto ${port}`)
});
```

Vamos a separar el código en pedazo más chicos.

El siguiente código carga el módulo http, con el que vamos a poder crear el servidor:

```
const http = require('http')
```

Abajo, estamos definiendo la función que va a manejar los pedidos que nos lleguen, que tiene dos parametros: `res` y `res`.

```
const handle = (req. res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hola Mundo!')
}
```

Los parámetros `req` y `res` tienen toda la firmación sobre el pedido y la respuesta HTTP.

Para configurar el tipo de respuesta que le queremos devolver a quien nos hizo un pedido, utilizamos el siguiente código:

```
res.writeHand(200, {'Content-Type': 'text/plain'})
```

Para enviar el mensaje **Hola Mundo!**, usamos:

```
res.end('Hola Mundo!')
```

El fragmento de código a continuación, crea un servidor con la función de callback que contiene el código para manejar los pedidos (creada anteriormente):

```
const server = http.createServer(handle)
```

Para poner el servidor a la escuchar (poder aceptar pedidos), tenemos que hacer:

```
server.listen(port)
```

Ahora, en una terminal/consola paradas donde tenemos el archivo `server.js` podemos ejecutar el siguiente comando para iniciar nuestro servidor:

```
node server.js
```

Ahora que tenemos nuestro servidor funcionando podemos abrir una pestaña de nuestro navegador, escribir en la barra de direcciones **localhost:3000** y vamos a ver el mensaje Hola mundo!.

Para cortar/matar al proceso servidor, tenemos que apretar `CTRL + C` en la terminal.

La función de callback que pasamos como parámetro al ejecutar `createServer`, se va a ejecutar cada vez que nos llegue un pedido a este servidor.

El código de ejemplo se encuentra [aquí](https://github.com/sebastiantorres86/node/tree/master/server). Para ejecutar, hay que abrir una terminal en esa carpeta y ejecutar `npm start`

Para más información del módulo http:

- https://nodejs.org/api/http.html
- https://nodejs.org/api/http.html#http_class_http_server

## Express

- Express es un framework web que nos permite hacer las siguientes tareas:
  - Nos permite manejar cualquier tipo de pedido HTTP (hasta ahora solo usamos GET)
  - Podemos crear rutas específicas
  - Integrar motores de render para crear vistas dinámicas (html creado con datos)
  - Crear `middleware` para procesar los pedidos a nuestro gusto **(feature más importante)**
  - Mucho más
- Express es un framework minimalista por lo cual nos da la base para poder tener un server y vamos a utilizar otros módulos para casos específicos como manejar una session, cookies y hasta manejar los datos que nos lleguen por POST
- Algunos [módulos son mantenidos por el equipo de Express](http://expressjs.com/en/resources/middleware.html)
- Express nos da la oportunidad de configurar todo a nuestro modo y eso nos da mucha flexibilidad a la hora de crear un proyecto
- Si bien esto es un beneficio también tenemos que aprender que módulos queremos usar y cómo vamos a crear la arquitectura del servidor
- No existe una receta única para resolver un problema con Express

## Crear un servidor

- En general un servidor web es una aplicación que escucha en un puerto por pedidos HTTP
- Al recibir un pedido tiene configurado que tiene que hacer para generar una respuesta
- Estos request pueden tener datos como pueden ser el id de un producto, un criterio de busqueda o el username y password de un usuario
- Con estos datos el servidor puede interactuar con una base de datos o no según el caso
- Si el servidor tiene que mandar un response con un documento HTML lo puede hacer de manera estática (como venimos haciendo hasta ahora)
- También puede leer datos de una base de datos, crear un documento HTML de forma dinámica (utilizando los datos) y mandar ese documento como respuesta al cliente
- Para crear los documentos HTML dinámico se pueden utilizar motores de template
- Express nos permite manejar las rutas para cada request y configurar como tiene que ser la respuesta
  - Configurar donde estan los archivos
  - Qué template se tiene que usar en cada oportunidad
  - Qué motor de template vamos a utilizar
  - Dónde van a estar guardados los archivos estáticos que queremos utilizar
- Para el resto de las tareas vamos a agregar módulos específicos

**Ejemplo:**

```
const express = require('express')
const app = express()

app.get('/', function(req, res) {
  response.send('Hola mundo desde un servidor con Express!')
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})
```

- En este ejemplo vemos como crear un server con Express
- Importamos el módulo Express que nos exporta una función y la asignamos a una variable
- Por medio de la función express() creamos una nueva instancia de nuestro servidor
- Con el método `get` configuramos una ruta en la raíz de nuestro sitio `/`
- Utilizamos el método listen para configurar el puerto donde queremos levantar el server y un callback que se ejecuta al terminar de levantar el servidro
- Al correr este script podemos ver nuestro sitio en `localhost:3000`

## Crear rutas - GET

- Con Express podemos crear rutas de forma muy fácil
- Utilizamos el método `get` para obtener requests por `HTTP GET`
- Este método recibe un string como primer parámetro especificando la ruta que queremos manejar (Ejemplo la raíz de nuestro sitio '/')
- Como segundo parámetro le pasamos un callback con la función que tiene que ejecutar cuando se llame a la ruta configurada
- Este callback recibe los objetos `req` y `res` como parámetro
- El objeto `res` tiene un método `send` para enviar una respuesta

**Ejemplo:**

```
app.get('/', function(req, res) {
  res.send('Hello World!')
})
```

El objeto de Express tiene múltiples métodos para manejar `requests` para todos los verbos de HTTP

**Ejemplo:**

```
app.post('/', function(req, res) {
  res.send('Utilizamos el método post para manejar un request por HTTP POST')
})

app.put('/', function(req, res) {
  res.send('Utilizamos el método put para manejar un request por HTTP PUT')
})

app.delete('/', function(req, res) {
  res.send('Utilizamos el método delete para manejar un request por HTTP DELETE')
})
```

- De esta forma podemos crear las rutas que necesitamos para nuestro proyecto

**Ejemplo:**

```
app.get('/productos', function(req, res) {
  res.send('Mostramos una lista de productos')
})

app.post('/productos', function(req, res) {
  res.send('Creamos un Producto')
})

app.put('/productos/:id', function(req, res) {
  res.send('Actualizamos un producto')
})

app.delete('/productos/:id', function(req, res) {
  res.send('Borramos un producto')
})
```

- Utilizando el browser sólo podemos hace llamados por GET

- Existe una herramienta llamada [Postman](https://www.getpostman.com/) que nos permite hacer cualquier tipo de llamado y ver la respuesta

- Configuramos la url que queremos utilizar

- Usamos el botón de send para hacer un `request`

- Vemos la respuesta en la parte inferior

![](https://raw.githubusercontent.com/nisnardi/comunidad-it-js/master/assets/node/postman1.png)

- Postman también nos da información sobre el status de nuestro `request` (ejemplo: 200)

- Podemos ver los encabezados enviados y recibidos

- También podemos realizar distintos tipos de llamados como pueden ser POST, PUT, DELETE, etc

![](https://github.com/nisnardi/comunidad-it-js/raw/master/assets/node/postman2.png)

- El código de ejemplo se encuantra [aquí]()