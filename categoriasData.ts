/*
    En esta constante se cumple EMA ( Estrategia Modular Autónoma); 
    tanto la interface de las Categorias como la interface de lñas Secciones estan 
    incorporadas dentro del fichero, anulando la dependencia de otros servicios o componentes para
    construir la Data Estática para el proyecto.

*/

// Interface de las categorias
export interface CategoriasInterface {
    nombre: string;
    icono: string;
    ruta: string;
    seccion: SeccionInterface[];
}

// Interface para las Secciones dentro de las Categorias
export interface SeccionInterface {
    nombre: string;
    ruta: string;
    icono: string;
}

// Data estática para alimentar los botones de navegación de la app.
export const categoriaData: CategoriasInterface[] = [
    {         
        nombre: 'Alimentos', 
        icono: '',
        ruta: '',
        seccion: [  
            { 
                nombre: 'Comida Rapida', 
                ruta:'comida-rapida', 
                icono:''
            },
            { 
                nombre: 'Pizzerias', 
                ruta:'carniceria', 
                icono:''
            } ,
            { 
                nombre: 'Comida Rápida', 
                ruta:'legumbrerias', 
                icono:''
            }            
          ],
    },
    {         
        nombre: 'Servicios', 
        icono: 'https://firebasestorage.googleapis.com/v0/b/copaguia-53f7f.appspot.com/o/iconos%2Fbanco.gif?alt=media&token=127ae0a3-b283-411f-9c0d-55003c6b3374',
        ruta: '',
        seccion: [  
            { 
                nombre: 'Transporte', 
                ruta:'transporte', 
                icono:''
            },
            { 
                nombre: 'Plomeros', 
                ruta:'plomeros', 
                icono:''
            },
            { 
                nombre: 'Mecánicos', 
                ruta:'mecanicos', 
                icono:''
            } ,
            { 
                nombre: 'Carpinteros', 
                ruta:'carpinteros', 
                icono:''
            } ,

             
          ],
    },

];

