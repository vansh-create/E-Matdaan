function showForm(formId){

    let forms = document.querySelectorAll(".form");

    forms.forEach(form=>{
        form.classList.remove("active");
    });

    document.getElementById(formId).classList.add("active");
}


