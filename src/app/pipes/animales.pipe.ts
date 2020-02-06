import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'animalesFiltro'
})
export class AnimalesPipe implements PipeTransform {

  /**
   * Filtro Personalizado para Animales.
   * @param datos Array<any> con los Animales.
   * @param busqueda Palabra por la cual haces la Busqueda.
   * @param tipo Para Filtrar por el Tipo de Animal.
   * @see app/animales.ts json son los Datos de los Animales.
   */
  transform(datos: any, busqueda: string, tipo: string): any {
    console.debug(datos);
    console.debug(busqueda);
    console.debug(tipo);

    if(busqueda && '' !== busqueda.trim()){
      // Filtrar por Nombre.
      busqueda = busqueda.toUpperCase();

      const resultado = datos.filter((el) => {
        console.debug(el);
        const nombre = el.Nombre.toUpperCase();
        return nombre.includes(busqueda);
      });

      // Filtrar por Tipo.
      if (tipo && tipo !== 'TODOS') {
        return resultado.filter((el) => el.Tipo === tipo);
      } else {
        return resultado;
      }
    } else {
      if (tipo && tipo !== 'TODOS') {
        return datos.filter((el) => el.Tipo === tipo);
      } else {
        return datos;
      }
    }
  } // Transform

} // AnimalesPipe
