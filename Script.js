let btns = document.querySelectorAll("button");

btns.forEach(function (btn) {
    btn.addEventListener("click", function () {

        let textBox = document.getElementsByClassName(btn.textContent)[0];

        btns.forEach(function(all){
            all.classList.remove("active")
            document.getElementsByClassName(all.textContent)[0].classList.remove("active");
        })
        btn.classList.add("active");

        textBox.classList.add("active");
    
    })
    
})


