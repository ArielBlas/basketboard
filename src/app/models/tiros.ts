export class Tiros{
    constructor(
        public id:number,
        public coach_id: number,
        public user_id: number,
        public distancia: number,
        public encesto: boolean,
        public posiciones: number[]
    ){}
}