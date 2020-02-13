import { Owners } from "./owners";
import { Visits } from "./visits";
import { Pettype } from "./pettype";

export class Pet {
    id: number;
    name: string;
    birthDate: Date;
    type: Pettype;
    owner: Owners;
    visits: Visits[];
}
