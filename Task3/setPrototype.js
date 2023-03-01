export function setPrototype() {
    String.prototype.contains = String.prototype.includes;
    String.prototype.starts = String.prototype.startsWith;
    String.prototype.ends = String.prototype.endsWith;
    Number.prototype['>'] = function(value) {
        return this > value;
    }
    Number.prototype['<'] = function(value) {
        return this < value;
    }
    Number.prototype['='] = function(value) {
        return this == value;
    }
    Number.prototype['<='] = function(value) {
        return this <= value;
    }
    Number.prototype['>='] = function(value) {
        return this >= value;
    }
}
