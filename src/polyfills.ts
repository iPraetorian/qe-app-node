interface String {
  endsWith(value: string, ignoreCase?: boolean);
  contains(value: string, caseSensitive?: boolean): boolean;
  startsWith(value: string): boolean;
  toCamelCase(): string;
  toNumber(): number;
  trimEnd(value: string): string;
  trimStart(value: string): string;
}

interface Object {
  extend(base: object, target: object): object;
}

String.prototype.endsWith = function(value, ignoreCase) {
  const len = value.length;
  const sub = this.substring(this.length - len, this.length);
  if (ignoreCase) {
    return (sub.toLowerCase() === value.toLowerCase());
  }
  else {
    return (sub === value);
  }
};

String.prototype.contains = function(value: string, caseSensitive?: boolean) {
  if (caseSensitive) {
    return this.indexOf(value) !== -1;
  }
  else {
    return this.toLowerCase().indexOf(value.toLowerCase()) !== -1;
  }
};

String.prototype.startsWith = (value) => this.indexOf(value) === 0;

String.prototype.toCamelCase = function() {
  return this.replace(/^(.)/, ($1) => $1.toLowerCase());
};

String.prototype.toNumber = function() {
  return parseInt(this.replace(/\D+/g, ''), 10);
};

String.prototype.trimEnd = function(value) {
  let result = this;
  if (value.endsWith(value)) {
    const len = value.length;
    result = this.substring(0, this.length - len);
  }

  return result;
};

String.prototype.trimStart = function(value) {
  let result = this.toString();
  if (result && result.startsWith(value)) {
    const len = value.length;
    result = this.substring(len, this.length);
  }

  return result;
};

Object.extend = (base, target) => {
  const clone = JSON.parse(JSON.stringify(base));
  return Object.assign(clone, target);
};
