// Arrow functions circa ES2015

let foo = function() {
  console.log('workflow1')
}
let bar = () => {
  console.log('workflow1')
}
foo() // outputs: "workflow1"
bar() // outputs: "workflow1"
bar2() // outputs: "workflow1"

//

let obj = {
  myVar: 'foo',
  
  myFunc: function() {
    console.log(this.myVar)
  }
}
obj.myFunc() // outputs: "foo" because the object 'obj' is calling 'myFunc' i.e. the context


// Callback simulation - using a timeout

let obj = {
  myVar: 'foo',
  
  myFunc: function() { 
    console.log(this.myVar)   
 
    setTimeout(function() {
      console.log(this.myVar)
    }, 1000)
  }
}
obj.myFunc() // outputs "foo" then after timeout "undefined"
