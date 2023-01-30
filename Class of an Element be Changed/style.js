function changeClass(){
    document.getElementById('Mybutton')
    .className = "changeClass";

    var button_class = document.getElementById('Mybutton')
    .className;

    document.getElementById('mypara')
    .innerHTML = "New Class Name: "
    + button_class;
}