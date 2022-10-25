export class Book{
    id: number;
    name: string;
    lastname: string;
    birthday: string;
    role: string;

    constructor(id: number, name: string, lastname: string, birthday: string, role:string){
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.birthday = birthday;
        this.role = role;
    }

}