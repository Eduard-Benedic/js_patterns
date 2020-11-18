var SimpleXhrFactory = (function () {

     var standard = {
          createXhrObject: function () {
               return new XMLHttpRequest();
          }
     };

     var activeXNew = {
          createXhrObject: function () {
               return new ActiveXObject('Msxml2.XMLHTTP');
          }
     }

     var activeXOld =  {

          createXhrObject: function () {
               return new ActiveXObject('Microsoft.XMLHTTP');
          }

     }

     var testObject;

     try {
          testObject = standard.createXhrObject();
          return standard
     } catch (e) {
          try {
               testObject = activeXNew.createXhrObject();
               return activeXNew;
          }

          catch (e) {
               try {
                    testObject = activeXOld.createXhrObject();
                    return activeXOld
               }
               catch (e) {
                    throw new Error('No XHR object found in this environment')
               }
          }
     }

})