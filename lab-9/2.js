function starTimer() {
    const starTime = new Date();
    let currentTime;
    do {
        currentTime = new Date();
        const elapsedTime = Math.floor((currentTime - starTime) / 1000);
        console.log(`Пройшло секунд: ${elapsedTime}`);
        let delayUntill = new Date(). getTime() + 100;
        while (new Date().getTime() < delayUntill) {}

    }
    while (Math.floor((currentTime - starTime) / 1000) < 10);
    console.log("Таймер закінчився");
}
starTimer();