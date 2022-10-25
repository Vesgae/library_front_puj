export class Book{
    id: number;
    name: string;
    preface: string;
    editorial: string;
    year: number;
    volume: number;

    constructor(id: number, name: string, preface: string, editorial: string, year:number, volume:number){
        this.id = id;
        this.name = name;
        this.preface = preface;
        this.editorial = editorial;
        this.year = year;
        this.volume = volume;
    }

}