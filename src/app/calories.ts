const training = {
    base: 1.2,
    light: 1.375,
    medium: 1.55,
    heavy: 1.725
};

export class Calories {
    calories: object = {
        base: 0,
        light: 0,
        medium: 0,
        heavy: 0
    };

    constructor(bmr: number = 0, weightfactor: number = 0){
        this.calories = this.calculate(bmr, weightfactor, this);
    }

    private calculate(bmr: number, weightfactor: number, obj){
        obj.base = (training.base * bmr) + weightfactor;
        obj.light = (training.light * bmr) + weightfactor;
        obj.medium = (training.medium * bmr) + weightfactor;
        obj.heavy = (training.heavy * bmr) + weightfactor;
        return obj;
    }
}
