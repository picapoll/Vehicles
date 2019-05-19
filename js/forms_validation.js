$(document).ready(function () {

  /* torzo de código SOLO para Bootrstrap 4 */
  $.validator.setDefaults({
    errorClass: 'invalid-feedback',
    highlight: function (element) {
      $(element).addClass('is-invalid');
    },
    unhighlight: function (element) {
      $(element).removeClass('is-invalid');
    },
    errorPlacement: function (error, element) {
      if (element.prop('type') === 'checkbox') {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    }
  });



  //Car Form
  $("#addcarfrm").validate({
    rules: {
      "plate": {
        required: true,
        minlength: 5
      },

    },

    messages: {
      "plate": {
        required: " Este campo es obligatorio"
      },
    }

  });


  


  $('#addCarbtn').on('click', function () {
   
    if ($('#addcarfrm').valid()) {
      $("#addcarfrm").hide();
      $("#addwheelsfrm").show();
      addCarInfo();
      
    } else {
      alert("formulario no válido. Revisa los campos. ;)");    
    }

  });

    //Wheels Form
 $("#addwheelsfrm").validate({
      rules: {
        "wheel": {
          required: true,
          range: [0.4, 2]
        },
  
      },
  
      messages: {
        "wheel": {
          required: "Introduce un Rango entre 0.4 y 2"
        },
      }
  
    });



    $('#createCarBtn').on('click', function () {
      //$('#addwheelsfrm').validate().checkForm() 
      if ($('#addwheelsfrm').valid() ) {
           console.log("true");
        createCar();
      
      } else {
        console.log("False");
        alert("formulario no válido. Revisa los campos. ;)");    
      }
    });
 
});


