const car = {
    speedometer: 0,
    setSpeedometer(value) {
        this.speedometer = value;
    },
    getSpeedometer() {
        return this.speedometer;
    },
    cleanSpeedometer() {
        this.speedometer = 0;
    }
}
car.setSpeedometer(60);
console.log(car.getSpeedometer());
car.cleanSpeedometer();
console.log(car.getSpeedometer());