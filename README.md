# test_haulmer

Requerimientos\n
Angular CLI: 17.3.6\n
Node: 22.0.0\n
PHP 8.2.12\n
Composer\n
XAMPP(windows)

Se optó por utilizar mockApi en lugar de sqlite, ya que este último no tiene persistencia de información al ser local, por otro lado mockApi no es bueno si se cuenta con una cantidad alta de información, sin embargo al ser solo un caso de prueba se consideró poco importante esto último.

Las rutas “/events” y “/event” se estan llamando cada una en un componente diferente del fornt, uno muestra cada evento en una carta y el otro una información más detallada, por falta de tiempo no se incorporaron más detalles, pero se contempló el poder añadir precios o límites de entradas, en el caso de la ruta “/purchase” se definió como get en las rutas de laravel, para facilitar el paso de variables entre los entornos, aunque al laravel interactuar con mockApi si lo hace como post, por último la ruta “/orders” se creó y se filtraron los datos requeridos, sin embargo no se añadió al frontend por un tema de tiempo aunque podría haberse aplicado como un input donde se ingresa el id del usuario y que se despliegue una lista parecida a la de los eventos, parecido a la forma en la que se verifican los envíos en los sistemas de correo.

Además no se creó un login ya que no se estableció como necesario, y la información utilizada no es sensible al ser de prueba, también es bastante normal no requerir un logueo para la compra de tickets, ya que muchas veces se envían los comprobantes por correo.

Para temas de estilo se utilizó bootstrap, ya que es la librería a la que estoy más acostumbrado y funciona bastante bien, podría cambiarse por Material por un tema de actualidad y versatilidad o por Angular Bootstrap por un tema de optimización, sin embargo al ser de prueba pensé que eso no sería necesario optimizar tanto la aplicación.
