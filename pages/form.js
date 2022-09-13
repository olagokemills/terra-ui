// $('#account-form').validate(x);
// $('#profile-form').validate();
// $('#form-1').validate();
// $('#wizard').steps({
//     headerTag: "h3",
//     bodyTag: "section",
//     transitionEffect: "slideLeft",
//     onStepChanging: function (event, currentIndex, newIndex)
//     {
//       if (newIndex<currentIndex){
//         return true;
//       }
//       var form=$('.body.current form');     
//       if (form.length==1){
//         form.validate().settings.ignore = ":disabled,:hidden";
//         return form.valid();
//       }
//       return true;
//     },
//     onFinishing: function (event, currentIndex)
//     {
      
//       var form=$('.body.current form');     
//       if (form.length==1){
//         form.validate().settings.ignore = ":disabled";
//         return form.valid();
//       }
//       return true;
//     },
//     onFinished: function (event, currentIndex)
//     {
//         alert("Submitted!");
//     }
// });

var form = $("#wizard");
form.validate({
    errorPlacement: function errorPlacement(error, element) { element.before(error); },
    rules: {
        confirm: {
            equalTo: "#password"
        }
    }
});
form.children("div").steps({
    headerTag: "h1",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    onStepChanging: function (event, currentIndex, newIndex)
    {
        form.validate().settings.ignore = ":disabled,:hidden";
        return form.valid();
    },
    onFinishing: function (event, currentIndex)
    {
        form.validate().settings.ignore = ":disabled";
        return form.valid();
    },
    onFinished: function (event, currentIndex)
    {
        alert("Submitted!");
    }
});