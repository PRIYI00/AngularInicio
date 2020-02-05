import { Observable } from "rxjs";

interface IPokemonService {
    /**
     * Recuperamos los datos en Json de un Pokemon por su Nombre.
     * @param nombre:string Nombre del Pokemon a buscar.
     */
    getPokemon(nombre:string): Observable<any>;

    /**
     * Recupera un Json con las Caracteristicas de un Pokemon.
     * @param id:number es el Identificador de un Pokemon. 
     * @see GET /api/v2/characteristic/{id}/
     */
    getCaracteristicas(id:number): Observable<any>;
}