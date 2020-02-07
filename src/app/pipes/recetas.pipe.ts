import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recetaFiltro'
})
export class RecetasPipe implements PipeTransform {

  transform(recetas: any, checkGluten: boolean , busqueda: string): any {

    let resultado = recetas;

    console.debug('checkGluten ', checkGluten);
    console.debug('busqueda ', busqueda);

    // Filtrar Recetas Sin Gluten
    if (checkGluten) {
      resultado = resultado.filter((el) => el.isGlutenFree);
    }

    // Filtrar por Nombre Receta o por Cocinero o Ingredientes
    if (busqueda && '' !== busqueda) {

      busqueda = busqueda.toLowerCase();

      resultado = resultado.filter((el) => {
          const ingredientes = el.ingredientes.reduce((c, p) => c + p , '');
          const encontrar = (el.nombre + el.cocinero + ingredientes).toLowerCase();
          return encontrar.includes(busqueda);
      });

    }

    return resultado;
  }

}
