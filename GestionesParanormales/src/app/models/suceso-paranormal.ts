import {Riesgo} from "./riesgo";
import {Investigador} from "./investigador";

export class SucesoParanormal {
    id:number;
    descripcion: string;
    fecha : Date;
    lugar: string;
    tipo: string;
    riesgo: Riesgo;
    investigador: Investigador;

}



