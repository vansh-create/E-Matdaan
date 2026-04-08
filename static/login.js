function showForm(formId){

    let forms = document.querySelectorAll(".form");

    forms.forEach(form=>{
        form.classList.remove("active");
    });

    document.getElementById(formId).classList.add("active");
}


// Demo submit handling (Frontend only)

document.querySelectorAll("form").forEach(form=>{
    form.addEventListener("submit", function(e){
        e.preventDefault();

        alert("Backend authentication will be connected here!");
    });
});