import { Astronaut } from "./Astronaut";
import { Cargo } from './Cargo';

export class Rocket {
        constructor(name: string, totalCapacityKg: number) {
           this.totalCapacityKg = totalCapacityKg;
           this.name = name;


        };
 }

 interface Payload {
     let name: string;
     let totalCapacityKg: number;
     let cargoItems: Cargo[] = [];
     let astronauts: Astronaut[] = []
 };
 
 function sumMass( items: Payload[] ): number{
     return this.massKg +=
 }

 function currentMassKg(): number{
     return this.sumMass +=
 }

 function canAdd(item: Payload): boolean {
     if (this.currentMassKg() + item.massKg <= this.totalCapacityKg){
         return true;
     }
 }

 function addCargo(cargo: Cargo) {

 }

 function addAstronaut(astronaut: Astronaut){

 }