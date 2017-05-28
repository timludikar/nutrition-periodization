export class Bmr {
    private _height: number;
    private _weight: number;
    public age: number;
    private _sex: string;

    constructor(height: string, weight: number, age: number, sex: string){
        let [feet, inches] = height.split("'");
        this.weightInLbs(weight);
        this.heightInFeet(parseInt(feet), parseInt(inches));
        this.age = age;
        this.sex = sex;
    }

    private truncate(value: number): number {
        return Math.floor(value * 100) /100;
    }

    heightInFeet(feet: number, inches: number) {
        this._height = this.truncate(((feet * 12) + inches) * 2.54);
    }

    heightInCm(height: number) {
        this._height = this.truncate(height);
    }

    get height(): number {
        return this._height;
    }

    weightInLbs(weight: number) {
        this._weight = this.truncate(weight / 2.2);
    }

    weightInKgs(weight: number) {
        this._weight = this.truncate(weight);
    }

    get weight(): number {
        return this._weight;
    }

    set sex(sex: string){
        let value = sex.toLowerCase();
        if(value == "m"){
            this._sex = "m";
        } else if(value == "f") {
            this._sex = "f";
        } else {
            throw new Error("m or f values only.");
        }
    }

    get sex(): string {
        return this._sex;
    }

    get calculate(): number {
        let result = (10 * this._weight) + (6.25 * this._height) - (5 * this.age) + ((this._sex == "m" ? 5 : -161));
        if(isNaN(result)){
            return 0;
        } else {
            return this.truncate(result);
        }
        
    }
} 
