# CATEGORIAS DATA:
## Nombre del Fichero: " categoriasData.ts "

Es un fichero que debe crearse en el Directorio src/data el cual contiene las categorias y secciones de proyectos que apliquen EMA, 
nos permitirá mantener los datos estáticos de las categorias.

# Nuestro fichero contiene 3 elementos principales:
  1. La Interface de Categorias: estructura de datos de Categorias.
  2. La Interface de las Secciones: estructura de datos de las Secciones dentro de Categorias.
  3. La Constante que llevará la Data estática: Contiene los datos que se mostrarán en los botones al renderizarse.

# Recuerda que para el tema de iconos y logos estáticos debes configurar el directorio "assets" el cual esplicatemos a continuación:

  * Crea un directorio llamado "assets" dentro de "src".
  * Crea dentro de "assets" un directorio llamado "iconos", "imagenes", "fonts", "favicon", "iconos_animados", ( crea los que necesites que sean estáticos ).
  * Agrega el contenido dentro de las carpetas creadas.
  * agrega las rutas asi: " assets/iconos/miIcono.png "
  * Dentro del fichero angular.json busca la seccion assets que tendrás una configuración asi:
  * ![image](https://github.com/user-attachments/assets/c4b31eff-ef6d-4c51-b086-39725204b658)
  * Vas a sustituirlas de las siguiente manera: 

    
        "assets": [
          "src/assets/favicon/favicon.ico",
          "src/assets"
        ],


Fichero de Categorias para datos estáticos aplicando EMA.
