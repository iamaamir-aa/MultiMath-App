class Utility{
    static getValue(id:string):string{
        const inputElemen:HTMLInputElement = <HTMLInputElement>document.getElementById(id);
        return inputElemen.value;
    }
}