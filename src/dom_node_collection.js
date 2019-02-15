class DOMNodeCollection {
  constructor(args) {
    this.args = args;
  }

  html(str=null) {
    if (str === null) {
      this.args[0].innerHTML;
    } else {
      this.args.each(arg => arg.innerHTML = str);
    }
  }

  empty() {
    this.args.each(arg => arg.html = "");
  }

  append() {

  }

  attr() {

  }

  addClass() {

  }

  removeClass() {

  }

  children() {
    let arr = [];
    this.args.each(arg => arr.push(arg.children));
    return new DOMNodeCollection(arr);
  }

  parent() {

  }

  find() {

  }

  remove() {

  }
}

module.exports = DOMNodeCollection;