let name1 :string = 'kim';
let name2 :string[] = ['kim', 'park'];
let name3 :{ name : string } = {name: 'kim'};
let name4 :{ name? : string } = {};
let name5 :string[] | number = 123;

// Union type
type A1 = string | number;

function sol (x: number):number {
    return x * 2;
};

// tuple type
type Member = [number, boolean];
let john: Member = [123, true];

type Member2 = {
    name: string,
    [key: string]: string,
};
let john2: Member2 = {name : 'Kim', age: '123'};

// class
class User {
    name: string;
    constructor(name: string) {
        this.name = name;
    };
};