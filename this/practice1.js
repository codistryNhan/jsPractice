//  Method Invocation
//  this is bound to the object

var myObj = {
  value:2,
  getValue: function(){
    return this.value;
  }
}

console.log(myObj.value);
console.log(myObj.getValue());
