# Brief del MVP

## Qué estamos construyendo

Una comunidad de noticias y debate para la comunidad tecnológica española, con acceso por invitación.

La referencia está entre Lobsters y Reddit, pero llevada al contexto español, con más cuidado por la calidad y menos nicho que Lobsters. No se trata de montar otra red social genérica ni una copia de LinkedIn. Tiene que sentirse como un sitio al que entra gente con experiencia en tech para leer y comentar cosas que merecen conversación de verdad.

## Para quién es

El público principal son perfiles con experiencia en tecnología:

- Ingenier@s de Software
- Ingenieros de Producto
- Product Managers
- CTOs
- Fundadores Técnicos
- Product Designers con trasfondo técnico.

También pueden participar otros perfiles del ecosistema, pero no deberían marcar el tono del producto:

- Recruiters
- Perfiles de Sales
- Otros perfiles del sector Tech

La referencia no es "gente interesada en tecnología". La referencia es "gente que ya está dentro del sector y tiene criterio". Ese matiz importa, porque de ahí sale el tono de la comunidad.

## Posicionamiento

Es un producto pensado, sobre todo, para España.

La interfaz y la conversación deben estar en español. El contenido enlazado puede estar en español o en inglés, siempre que resulte relevante para profesionales del sector en España y esté planteado para esa audiencia. Si obligamos a que todo esté en español, dejamos fuera parte del mejor material disponible. Si dejamos que el producto derive hacia el inglés, perdemos la identidad. La clave está en mantener ese equilibrio.

No queremos construir:

- un clon de LinkedIn
- una comunidad global en inglés
- un foro generalista para toda Latinoamérica
- un sistema de subreddits

Queremos construir una plaza pública curada para la comunidad tecnológica en España. Un sitio con criterio, con contexto y con nivel.

## Idea base del producto

Al principio solo hay una portada.

Sin subcomunidades. Sin etiquetas. Sin secciones extrañas. Una única superficie principal donde se concentra la atención y la conversación. Si fragmentamos demasiado pronto, matamos la densidad de la comunidad y renunciamos a construir una cultura común.

La portada debería sentirse afilada. No perfecta ni elitista en el mal sentido, pero sí claramente mejor que un feed random. La ambición es que entrar aquí se note distinto desde el primer vistazo.

## Ciclo principal

El ciclo del MVP es muy simple:

1. Un usuario comparte un enlace.
2. Puede añadir un texto opcional para explicar por qué importa o abrir la discusión.
3. El resto de usuarios vota y comenta.
4. Lo mejor gana visibilidad.
5. La moderación mantiene el nivel.
6. El karma acumula reputación.
7. Las invitaciones controlan el crecimiento.

Ese es el corazón del producto. Todo lo demás, por ahora, es secundario. Si este ciclo no funciona, lo demás da igual.

## Qué se puede publicar

En el lanzamiento, el formato es:

- `enlace + texto opcional`

Ese texto no está para duplicar el artículo ni para hacer SEO. Está para aportar contexto, explicar por qué merece atención o empujar una discusión mejor desde el primer minuto. Queremos que quien publica aporte algo más que un enlace.

Los posts de solo texto pueden llegar más adelante. Las imágenes no son prioridad ahora mismo.

## Modelo básico de datos

Para el MVP basta con esto:

- usuarios
- invitaciones
- publicaciones
- comentarios
- votos
- karma
- reportes

No hace falta más estructura al principio. Cualquier capa extra ahora mismo sería ruido.

## Votación y karma

El MVP sale con:

- solo votos positivos

No hay votos negativos al principio.

La razón es bastante práctica: con votos positivos ya puedes hacer emerger el contenido bueno, y te ahorras parte de la toxicidad y del comportamiento reactivo que suele aparecer muy pronto cuando introduces voto negativo. Si algo no interesa, que se quede abajo. No hace falta convertir cada desacuerdo en un castigo.

El karma, de momento, solo sirve como reputación. No desbloquea nada. No hay ventajas especiales, ni privilegios, ni capas de gamificación por encima. Es solo una señal simple de que esa persona lleva tiempo participando y de que la comunidad ha respondido bien a lo que aporta.

## Identidad y perfiles

La identidad pública es el nombre de usuario.

No queremos presión hacia el nombre real. Si alguien quiere usarlo, perfecto, pero no debe ser la expectativa por defecto. Esto no va de construir una tarjeta de visita profesional.

En el perfil debería verse:

- nombre de usuario
- karma
- biografía opcional
- enlaces opcionales
- quién te invitó

La biografía y los enlaces son contexto, no currículum. El linaje de invitación añade cierta responsabilidad sin convertir esto en una burocracia. Queremos identidad suficiente para generar confianza, no postureo.

## Invitaciones y crecimiento

El producto crece por invitaciones.

La propuesta de despliegue es esta:

1. Al principio solo invitan los admins.
2. Cuando haya un grupo inicial sólido, algunos usuarios de confianza reciben 3 invitaciones.
3. Más adelante eso se puede ampliar poco a poco.

No conviene regalar invitaciones a todo el mundo desde el día uno. Antes hace falta que exista una cultura reconocible. Si no, la comunidad se diluye antes de arrancar. Primero hay que fijar el tono; luego ya se escala.

## Permisos y límites iniciales

Los usuarios invitados pueden publicar y comentar desde el primer momento.

Eso sí, los usuarios nuevos tienen tiempos de espera. La idea no es castigarles, sino poner una fricción razonable contra el spam y las aportaciones de bajo esfuerzo. Publicar tiene que seguir siendo fácil, pero no gratis en términos culturales.

Límites iniciales recomendados:

- 1 publicación cada 12 horas
- 5 comentarios por hora

Más adelante estos límites se pueden relajar según karma, antigüedad o confianza manual.

## Feed y ranking

La portada tiene un único feed principal.

Opciones de ordenación:

- `hot`
- `new`
- `top today`

La ordenación por defecto debe ser `hot`.

`new` como vista principal mete demasiado ruido. `top today` llega demasiado tarde. `hot` es el punto razonable entre frescura y señal.

## Comentarios

Los comentarios importan tanto como los enlaces.

Necesitamos:

- comentarios anidados
- comentarios colapsables

Una parte importante del valor del producto va a estar en que el hilo de discusión merezca más la pena que el propio enlace. Si la conversación no eleva el contenido, el producto se queda a medias.

## Moderación

La moderación tiene que estar orientada a la calidad.

No vale con quitar spam y ya está. Si queremos que esto tenga una identidad clara, la moderación tiene que intervenir cuando el nivel baje, cuando una conversación se vuelva repetitiva o cuando el producto empiece a llenarse de contenido que, aunque técnicamente encaje, en el fondo aporta poco.

La pregunta que debería guiar esa moderación es esta:

> ¿Esto merece una conversación entre profesionales con experiencia?

Si la respuesta suele ser no, sobra. Mantener esa línea es una parte central del producto, no un detalle operativo.

La moderación debería optimizar por:

- señal
- relevancia
- civilidad
- poca repetición
- poca basura promocional

## Reportes

Los usuarios pueden reportar:

- publicaciones
- comentarios

Los reportes van a moderación. No hace falta convertirlos en una mecánica pública.

## Autopromoción y perfiles comerciales

Los perfiles comerciales no están prohibidos. Los recruiters tampoco.

Lo que no queremos es comportamiento extractivo. Hay diferencia entre participar como un miembro normal de la comunidad y entrar solo a sacar rendimiento.

Regla inicial para la autopromoción:

- se permite
- debe estar claramente indicada
- no debe ser repetitiva
- no debe ser spam
- moderación puede retirarla si aporta poca señal

No hace falta montar un sistema específico para esto en el MVP. Basta con tener la regla clara y aplicarla. Lo importante no es sofisticar la norma, sino hacerla cumplir.

## Empleo y contratación

Las publicaciones de empleo pueden existir en el MVP si son buenas y relevantes.

No hace falta separar empleo en otro producto todavía. Tampoco hace falta pensar ya en una monetización específica para eso. Si la comunidad funciona, ya habrá tiempo de construir algo alrededor. Ahora la prioridad es que el sitio tenga valor por sí mismo.

## Qué queremos que se sienta al usarlo

Queremos que el producto se sienta como una plaza pública tech curada.

No como un foro corporativo. No como un rincón ultra-nerd cerrado sobre sí mismo. No como un Reddit más.

Tiene que haber espacio para profundidad técnica, producto, startups y noticias del sector, siempre que el nivel se mantenga alto y la conversación merezca la pena. La visión no es solo juntar gente del sector. La visión es crear un sitio al que esa gente quiera volver porque nota que aquí se habla mejor.

## Qué no vamos a hacer ahora

Fuera del MVP:

- subreddits o comunidades temáticas
- etiquetas
- votos negativos
- mensajes privados
- perfiles complejos
- publicaciones centradas en imagen
- flujos especiales para recruiters
- funciones desbloqueadas por karma
- mecánicas de red social más amplias

El producto inicial tiene que ser estrecho y legible. Cuanto más claro sea el foco al principio, más fácil será proteger la cultura después.
