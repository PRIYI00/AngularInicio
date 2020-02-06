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
    console.debug('AnimalesPipe datos %o', datos);
    console.debug('AnimalesPipe busqueda %s', busqueda);
    console.debug('AnimalesPipe tipo %s', tipo);

    let resultado = datos;

    // Filtrar por Tipo
    if (tipo && tipo !== 'TODOS') {
      resultado = resultado.filter((el) => el.Tipo === tipo);
    }

    // Filtrar por Nombre
    if (busqueda && '' !== busqueda.trim()) {
      busqueda = busqueda.toUpperCase();
      resultado = resultado.filter((el) => {
        console.debug(el);
        const nombre = el.Nombre.toUpperCase();
        return nombre.includes(busqueda);
      });
    }

    return resultado;
  } // Transform

} // AnimalesPipe
