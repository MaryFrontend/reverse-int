module.exports = function reverse (n) {
    let str = `${Math.abs(n)}`;
    let reverse =str.split('').reverse().join('');
    return Number(reverse);
}
