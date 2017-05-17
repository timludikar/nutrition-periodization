export class Client {
    weight: number = 0;
    baseCalories: number = 0;
    activity: number = 0;
    update() {
        this.baseCalories = this.weight * this.activity;
    }
}
