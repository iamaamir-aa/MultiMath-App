/// <reference path="person.ts"/>

  class Player implements Person {
    name: string;
    age: number; 
    highScore: number;

    formatName(): string {
        return this.name; // Use "this.name" instead of "name"
    }
}
