
function addEvent(el, type, callback) {

     el.addEventListener(type, callback)

}


function extend(subClass, superClass) {

     var F = function () { };

     F.prototype = superClass.prototype;

     subClass.prototype = new F();

     subClass.prototype.constructor = subClass;

     subClass.superClass = superClass.prototype;

     if (superClass.prototype.constructor === Object.prototype.constructor) {
          superClass.prototype.constructor = superClass;
     }

}

function EditInPlaceField(id, parent, value) {
     
     this.id = id;
     this.value = value || 'default value';
     this.parentElement = parent;

     this.createElements(this.id);
     this.attachEvents();

}



EditInPlaceField.prototype = {

     createElements: function (id) {

          
          this.containerElement = document.createElement('div');
          console.log(this.parentElement)
          this.parentElement.appendChild(this.containerElement);

          this.staticElement = document.createElement('span');
          this.containerElement.appendChild(this.staticElement);
          this.staticElement.innerHTML = this.value;

          this.fieldElement = document.createElement('input');
          this.fieldElement.type = 'text';
          this.fieldElement.value = this.value;
          this.containerElement.appendChild(this.fieldElement);

          this.saveButton = document.createElement('input');
          this.saveButton.type = 'button';
          this.saveButton.value = 'Save';
          this.containerElement.appendChild(this.saveButton);

          this.cancelButton = document.createElement('input');
          this.cancelButton.type = 'button';
          this.cancelButton.value = 'Cancel';
          this.containerElement.appendChild(this.cancelButton);

          this.convertToText();

     },

     attachEvents: function () {

          var that = this;

          addEvent(this.staticElement, 'click', function () {
               that.convertToEditable();
          })

          addEvent(this.saveButton, 'click', function () {
               that.save();
          })

          addEvent(this.cancelButton, 'click', function () {
               that.cancel();
          })
     },

     convertToEditable: function () {
          this.staticElement.style.display = 'none';
          this.fieldElement.style.display = 'inline';
          this.saveButton.style.display = 'inline';
          this.cancelButton.style.display = 'inline';

          this.setValue(this.value);

     },

     save: function () {

          this.value = this.getValue();
          var that = this;

          var callback = {
               success: function () {
                    that.convertToText();
               },
               failure: function () {
                    alert('error saving value');
               }
          }

          ajaxRequest('GET', 'save.php?id=' + this.id + '&value=' + this.value, callback);

     },
     
     cancel: function () {
          this.convertToText()
     },

     convertToText: function () {


          this.staticElement.style.display = 'inline';
          this.fieldElement.style.display = 'none';
          this.saveButton.style.display = 'none';
          this.cancelButton.style.display = 'none';
          

          this.setValue(this.value);

     },
     
     setValue: function (value) {

          this.fieldElement.value = value;
          this.staticElement.innerHTML = value;
     },

     getValue: function () {

          return this.fieldElement.value;

     }

}


function EditInPlaceArea(id, parent, value) {
     
     EditInPlaceArea.superClass.constructor.call(this, id, parent, value);

}

extend(EditInPlaceArea, EditInPlaceField);

EditInPlaceArea.prototype.createElements = function (id) {

     this.containerElement = document.createElement('div');
     this.parentElement.appendChild(this.containerElement);

     this.staticElement = document.createElement('p');
     this.containerElement.appendChild(this.staticElement);
     this.staticElement.innerHTML = this.value;

     this.fieldElement = document.createElement('textarea');
     this.fieldElement.value = this.value;
     this.containerElement.appendChild(this.fieldElement);

     this.saveButton = document.createElement('input');
     this.saveButton.type = 'button'; this.saveButton.value = 'Save';
     this.containerElement.appendChild(this.saveButton);

     this.cancelButton = document.createElement('input');
     this.cancelButton.type = 'button';
     this.cancelButton.value = 'Cancel';
     this.containerElement.appendChild(this.cancelButton);

     this.convertToText();
}

EditInPlaceArea.prototype.convertToEditable = function() {
     
     this.staticElement.style.display = 'none';
     this.fieldElement.style.display = 'block';
     this.saveButton.style.display = 'inline';
     this.cancelButton.style.display = 'inline';

     this.setValue(this.value);

}

EditInPlaceArea.prototype.convertToText = function () {

     this.fieldElement.style.display = 'none';
     this.saveButton.style.display = 'none';
     this.cancelButton.style.display = 'none';
     this.staticElement.style.display = 'block';

     this.setValue(this.value);

}


var body = document.getElementById('body')
console.log(body)

var titleClassical = new EditInPlaceField('titleClassical', body, 'title here');
var titleClassical1 = new EditInPlaceField('Second title', body, 'Tags');
var titleClassical2 = new EditInPlaceField('thirdTitle', body, 'Add evemts');

var currentTitleText = titleClassical.getValue();


var areaField = new EditInPlaceArea('textArea', body, ' I am a text area okay')

console.log(titleClassical)