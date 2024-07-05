(function(){
    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");
    let equal = document.querySelector(".btn-equal");
    let clear = document.querySelector(".btn-clear");

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let buttonText = e.target.dataset.num;
            screen.value += buttonText;
        });
    });

    equal.addEventListener('click', function(e) {
        if(screen.value ===''){
            screen.value = ""
        }else{
            let answer = eval(screen.value)
            screen.value = answer
        }
    });

    clear.addEventListener('click', function() {
        screen.value = '';
    });
})();
