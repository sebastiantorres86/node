// El siguiente código carga el módulo http, con el que vamos a poder crear el servidor:
const http = require('http')
const port = 3000

// creamos la función que maneja los pedidos
// Abajo, estamos definiendo la función que va a manejar los pedidos que nos lleguen, 
// que tiene dos parametros: res y req
const handle = (req, res) => {
  // Para configurar el tipo de respuesta que le queremos devolver a quien nos hizo
  // un pedido, utilizamos el siguiente código:
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  })
  // Para enviar el mensaje Hola Mundo!, usamos:
  res.end('Hola Mundo!')
}

// creamos el objeto servidor con la función de callback que contiene el código para
// manejar los pedidos (creada anteriormente)
const server = http.createServer(handle)

// ponemos el servidor a escuchar los pedidos
server.listen(port, err => {
  if (err) {
    return console.log('algo falló al poner al server a la escucha', err)
  }

  console.log(`el servidor esta a la escucha en el puerto ${port}`)
})
