module.exports = function reverse (n) {
    let rev = String(Math.abs(n))
    rev = (rev.split('').reverse().join(''))/1;
    
    return rev;
}
