var Interface = require('./interface.js');



var Composite = new Interface('Composite', ['add', 'remove', 'getChild']);

console.log(Composite)
var FormItem = new Interface('FormItem', ['save']);


var CompositeForm = function ( id, method, action ) {



}

function addForm (formInstance) {

     Interface.ensureImplements(formInstance, Composite, FormItem);

}