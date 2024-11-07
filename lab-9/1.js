function printMultiplicationLine() {
    const row = [
        9,
        17,
        23,
        27,
        29,
        27,
        23,
        17,
        9
    ];
    for (let i = 0; i < row.length; i++) {
        console.log('*' .repeat(row[i]));
    }
}
printMultiplicationLine();