const car = {
    speedometer: 0,
    setSpeed(value) {
this.speedometer = value;
return this;
    },
    getSpeed() {
        return this.speedometer;
    },
    cleanSpeed() {
        this.speedometer = 0;
        return this;
    }
};
car.setSpeed(200).setSpeed(300);
console.log(car.getSpeed());
car.cleanSpeed();
console.log(car.getSpeed());