// importamos nuestro modulo y lo guardamos en una vaiable
const obtenerPrecio = require('./calcular')
// lo que importamos es la función que exportamos en el archivo anterior
// la ejecutamos y obtenemos el precio final con IVA
const precio = obtenerPrecio(200)
// finalmente mostramos en la consola el precio
console.log(precio)