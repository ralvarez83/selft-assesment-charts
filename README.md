# Datos de Auto-Evaluaciones

Este producto nace de dos necesidades, la primera es extraer información de una auto-evaluación del nivel de agilidad que ha realizado una organización. Esta auto-evaluación se realiza en base a un cuestionario donde las personas han de elegir, por cada pregunta, el nivel de madurez entre 1 y 5. La segunda necesidad es la de seguir aprendiendo y practicando el desarrollo de productos.

Para recoger la información se ha utilizado Microsoft Forms y los resultados se descargan en un Excel con el siguiente formato.

|       Id      |    Equipo     |  Pregunta 1   |   Pregunta 2  |       ...     |   Pregunta N  |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
|        1      |  Bob Esponja  |    Opción 1   |    Opción 5   |       ...     |    Opción 2   |
|        2      |  Bob Esponja  |    Opción 1   |    Opción 5   |       ...     |    Opción 2   |

En esta versión se ha implementado la recuperación desde el fichero Excel que genera Microsoft Forms para un formato determinado de self-assesment el cuál se ha denominado DefaultAssesment.

Para su elaboración se ha usado **ReactJs** siguiendo parte de un **patron de diseño DDD**. Quiero recalcar que sólo en parte debido ya que la aplicación no es muy grande y además sólo se prevee que se amplie por la incorporación de otros Excel con preguntas diferentes.

Así se ha procurado que la incorporación de un nuevo formulario imple el menor número de cambios en la aplicación. Se deberá modificar:

- Crear tu clase Evaluations que implemente la interfaz [Evaluations](https://github.com/ralvarez83/selft-assesment-charts/blob/main/selt-assesment-charts/src/Domain/type.d.ts)
- Un numero tipo de Evaluación en [Infraestructura](https://github.com/ralvarez83/selft-assesment-charts/tree/main/selt-assesment-charts/src/infraestructure/LoadExcelFile) para cargar los datos desde el fichero Excel donde al menos deberás tener una clase que implemente la interfaz [AssesmentExcelRepository](https://github.com/ralvarez83/selft-assesment-charts/blob/main/selt-assesment-charts/src/infraestructure/LoadExcelFile/AssesmentExcelRepository.tsx)
- Una clase que implemente la interfaz [AssesmentView](https://github.com/ralvarez83/selft-assesment-charts/blob/main/selt-assesment-charts/src/infraestructure/AssesmentView/AssesmentView.tsx) para poder amoldar los datos a las necesidades de los componentes visuales.
- Una clase que implemente la interfaz [ChartDataGenerator](https://github.com/ralvarez83/selft-assesment-charts/blob/main/selt-assesment-charts/src/infraestructure/Charts/type.d.ts) para montar los datos como los requiere el componente del gráfico de araña.

Además este producto se ha **Dokerizado** y se ha subido al Hub de Docker de manera pública en mi perfil [rubenag83](https://hub.docker.com/u/rubenag83).

Por último indicar que si se quiere probar se ha publicado en un servidor con la siguiente URL de acceso: [http://194.164.174.221:8080](http://194.164.174.221:8080) y pueden utilizar el siguiente fichero: [datos-prueba.xlsx](https://github.com/ralvarez83/selft-assesment-charts/blob/main/prueba/datos-prueba.xlsx)