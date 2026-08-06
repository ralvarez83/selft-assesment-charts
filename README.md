# Datos de Auto-Evaluaciones

Este producto nace de dos necesidades, la primera es extraer información de una auto-evaluación del nivel de agilidad que ha realizado una organización. Esta auto-evaluación se realiza en base a un cuestionario donde las personas han de elegir, por cada pregunta, el nivel de madurez entre 1 y 5. La segunda necesidad es la de seguir aprendiendo y practicando el desarrollo de productos.

Para recoger la información se ha utilizado Microsoft Forms y los resultados se descargan en un Excel con el siguiente formato.

|       Id      |    Equipo     |  Pregunta 1   |   Pregunta 2  |       ...     |   Pregunta N  |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
|        1      |  Bob Esponja  |    Opción 1   |    Opción 5   |       ...     |    Opción 2   |
|        2      |  Bob Esponja  |    Opción 1   |    Opción 5   |       ...     |    Opción 2   |

En esta versión se ha implementado la recuperación desde el fichero Excel que genera Microsoft Forms para un formato determinado de self-assesment el cuál se ha denominado DefaultAssesment.

Para su elaboración se ha usado **ReactJs** siguiendo parte de una **arquitectura Hexagonal** usando sólo las capas de **Dominio** e **Infraestructura**. Quiero recalcar que sólo en parte debido ya que la aplicación no es muy grande y además sólo se prevee que se amplie por la incorporación de otros Excel con preguntas diferentes.

Así se ha procurado que la incorporación de un nuevo formulario imple el menor número de cambios en la aplicación. Se deberá modificar:

- Crear tu clase Evaluations que implemente la interfaz [Evaluations](https://github.com/ralvarez83/selft-assesment-charts/blob/main/selt-assesment-charts/src/Domain/type.d.ts)
- Un numero tipo de Evaluación en [Infraestructura](https://github.com/ralvarez83/selft-assesment-charts/tree/main/selt-assesment-charts/src/infraestructure/LoadExcelFile) para cargar los datos desde el fichero Excel donde al menos deberás tener una clase que implemente la interfaz [AssesmentExcelRepository](https://github.com/ralvarez83/selft-assesment-charts/blob/main/selt-assesment-charts/src/infraestructure/LoadExcelFile/AssesmentExcelRepository.tsx)
- Una clase que implemente la interfaz [AssesmentView](https://github.com/ralvarez83/selft-assesment-charts/blob/main/selt-assesment-charts/src/infraestructure/AssesmentView/AssesmentView.tsx) para poder amoldar los datos a las necesidades de los componentes visuales.
- Una clase que implemente la interfaz [ChartDataGenerator](https://github.com/ralvarez83/selft-assesment-charts/blob/main/selt-assesment-charts/src/infraestructure/Charts/type.d.ts) para montar los datos como los requiere el componente del gráfico de araña.

Además este producto se ha **Dokerizado** y se ha subido al Hub de Docker de manera pública en mi perfil [rubenag83](https://hub.docker.com/u/rubenag83).

## Puesta en marcha en local

El gestor de paquetes es **pnpm** y el lockfile está versionado, así que la instalación es reproducible:

```bash
cd selt-assesment-charts
pnpm install --frozen-lockfile
pnpm run dev      # servidor de desarrollo
pnpm run lint     # ESLint (flat config, sin warnings permitidos)
pnpm run build    # comprobación de tipos + bundle de producción en dist/
```

El stack es React 19, TypeScript 5.9, Vite 8, react-router 8 y Chart.js 4. La lectura del Excel usa `read-excel-file`, cuyo esquema se declara en [`DefaultAssesmentSchema.ts`](selt-assesment-charts/src/infraestructure/LoadExcelFile/DefaultAssesment/DefaultAssesmentSchema.ts) indexado por propiedad, con el título de la columna del Excel en `column`.

## Despliegue

La aplicación es 100% cliente: el Excel se lee y se procesa en el navegador, no hay backend ni base de datos. Por eso se publica como sitio estático en **GitHub Pages**, servido bajo el dominio propio [https://datos-auto-evaluacion.rubenalvarezgonzalez.eu](https://datos-auto-evaluacion.rubenalvarezgonzalez.eu).

El despliegue es automático mediante el workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml): cada `push` a `main` compila el proyecto con `pnpm run build` y publica el contenido de `selt-assesment-charts/dist` en Pages. También se puede lanzar a mano desde la pestaña *Actions* (`workflow_dispatch`).

Detalles a tener en cuenta si se toca la configuración:

- `selt-assesment-charts/public/CNAME` fija el dominio propio. GitHub Pages lo lee del artefacto publicado, así que este fichero es la fuente de verdad del dominio.
- Al usar dominio propio, `base` en [`vite.config.ts`](selt-assesment-charts/vite.config.ts) debe seguir siendo `"/"`. Si se quisiera servir desde `https://ralvarez83.github.io/selft-assesment-charts/` habría que cambiarlo a `"/selft-assesment-charts/"`.
- Como Pages sirve ficheros estáticos, una recarga directa sobre una ruta de `react-router` (por ejemplo `/assesment/team/1`) no encontraría fichero. El plugin `spa-404-fallback` de `vite.config.ts` copia `index.html` a `404.html` en cada build para que Pages devuelva la SPA y el enrutado se resuelva en el navegador.
- `public/.nojekyll` evita que Pages procese la salida con Jekyll.

El `Dockerfile` y el `docker-compose.yaml` se mantienen para quien prefiera levantarlo en su propia máquina o servidor.

Por último indicar que si se quiere probar la aplicación está publicada en [https://datos-auto-evaluacion.rubenalvarezgonzalez.eu](https://datos-auto-evaluacion.rubenalvarezgonzalez.eu) y pueden utilizar el siguiente fichero: [datos-prueba.xlsx](https://github.com/ralvarez83/selft-assesment-charts/blob/main/prueba/datos-prueba.xlsx)