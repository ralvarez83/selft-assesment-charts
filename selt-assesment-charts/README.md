# Datos de Auto-Evaluaciones

Este producto nace de dos necesidades, la primera es extraer información de una auto-evaluación del nivel de agilidad que ha realizado una organización. Esta auto-evaluación se realiza en base a un cuestionario donde las personas han de elegir, por cada pregunta, el nivel de madurez entre 1 y 5. La segunda necesidad es la de seguir aprendiendo y practicando el desarrollo de productos.

Para recoger la información se ha utilizado Microsoft Forms y los resultados se descargan en un Excel con el siguiente formato.

|       Id      |    Equipo     |  Pregunta 1   |   Pregunta 2  |       ...     |   Pregunta N  |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
|        1      |  Bob Esponja  |    Opción 1   |    Opción 5   |       ...     |    Opción 2   |
|        2      |  Bob Esponja  |    Opción 1   |    Opción 5   |       ...     |    Opción 2   |

En esta versión se ha implementado la recuperación desde el fichero Excel que genera Microsoft Forms para un formato determinado de self-assesment el cuál se ha denominado DefaultAssesment.

Para su elaboración se ha usado ReactJs siguiendo parte de una infraestructura Hexagonal y un patron de diseño DDD. Quiero recalcar que sólo en parte debido ya que la aplicación no es muy grande y además sólo se prevee que se amplie por la incorporación de otros Excel con preguntas diferentes.

Así se ha procurado que la incorporación de un nuevo formulario imple el menor número de cambios en la aplicación. Se deberá modificar:

- Un numero tipo de Evaluación en Infraestructura (")
