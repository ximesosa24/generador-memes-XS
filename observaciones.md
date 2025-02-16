# Comentarios Generales

Xime, que lindo trabajo!! Me gustan los colores del modo claro, y el cambio es notorio. 💕
En cuanto al Responsive, aunque funciona en las distintas pantallas, los menues te quedaron un poco comprimidos en cuanto al espaciado vertical y al tamaño en general.
Otro punto importante a tener en cuenta cuando trabajamos con archivos descargables, son los contenedores. Elegiste el div _container meme_ para la descarga pero ese div quedo con un widht del 100% y te "rompe" la imagen, descargando una imagen mucho mas grande con un borde transparente innecesario.
Lo mas importante: el sitio FUNCIONA! 💪

En cuanto al código, algunas pequeñas observaciones:

* HTML:
  * En lineas generales el HTML esta super bien!!! Le falta un poquito de indentación, para que quede bien claro al leerlo qué está dentro de qué. Por ejemplo, en la linea 25 empieza `main`, dentro tenes un `div` que contiene otros `div`s y todos estan tabulados a la misma altura, como si estuvieran al mismo nivel cuando no es asi. Tener en cuenta esos detalles es importante a la hora de trabajar en equipo, ya que la indentación es para otros humanos.

* En el CSS:  
  * Qué bueno que incluiste variables! Estan bien implementadas... el único detalle es que incluiste en el root `color: white` que no es una variable. Sólo ponemos variables en el root. Podrias haber puesto _--color-font: white_ y despues usar la variable donde corresponda.
  * Hay unos cuantos estilados sobre TAGS HTML. Recordá que hablamos mucho en clase que esta es una práctica muy desaconsejada que puede traer muchos dolores de cabeza. Mi recomendación siempre es que estilen utilizando clases, y según el caso, algún ID. 

* En el JS:
  * En las lineas 1 y 3 utilizas _querySelector_ para seleccionar un ID, no entiendo porqué. Luego si utilizas getElementById.
  * Me sorprende que hayas usado `this.value`, es un concepto bastante avanzado de JS que no hemos visto en clase.
  * En las lineas 168 y 175, declaraste variables (`title` y `title2`) que nunca usas. A veces pasa que declaramos variables que creemos que vamos a usar, pero si luego no las usamos, es importante removerlas del código antes de entregar un trabajo (ya sea academico o a un cliente).

* En el README:
  * Está ok, aunque se podria enriquecer con algunas secciones mas detalladas y la URL del proyecto deployado.

Xime, ¡Buen trabajo! ¡A seguir aprendiendo! 💪

## Nota final: 7 (siete)

### Nota desagregada:

- **Menos de 6 (No aprobado)**
- **6 (Aprobado)**
    ✅ Respeta la consigna
    ✅ Estructura correcta de documento HTML
    ✅ Respeta el diseño dado
    ✅ Respeta el funcionamiento
    ❌* Responsive funciona correctamente
- **7 (Bueno)**
    ✅ Buena estructura de proyecto
    ✅ Código bien indentado
    ✅* Comentarios que permiten mejorar la legibilidad del código
- **8 (Muy bueno)**
    ✅ Uso correcto de etiquetas semánticas
    ❌ Buenos nombres de clases
    ✅ Buenos nombres de funciones y variables
- **9 (Muy bueno)**
    ❌ Reutilización de estilos
    ✅ Funciones pequeñas
- **10 (Excelente)**
    ✅ Cumple con las condiciones de accesibilidad avanzada
    ❌ Reutilización de lógica / funciones
    ✅ Commits con mensajes adecuados

❌ ✅