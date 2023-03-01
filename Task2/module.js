function sum(a, b) {
    let aa = BigInt(`${a}`);
    let bb = BigInt(`${b}`);
    return aa + bb;
}

function sub(a, b) {
    let aa = BigInt(`${a}`);
    let bb = BigInt(`${b}`);
    return aa - bb;
}

function mul(a, b) {
    let aa = BigInt(`${a}`);
    let bb = BigInt(`${b}`);
    return aa * bb;
}

function div(a, b) {
    let aa = BigInt(`${a}`);
    let bb = BigInt(`${b}`);
    return aa / bb;
}

/*методы будут работать только в том случае, 
если на вход подаются стринговое значение, 
т.е. в браузере они работать будут*/

export {sum, sub, mul, div};
