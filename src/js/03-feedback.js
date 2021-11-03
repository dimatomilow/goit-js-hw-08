
const form = document.querySelector(".feedback-form");
const FEEDBACK_FORM_STATE = "feedback-form-state";

const data = {email:'',message:'',};

window.addEventListener("DOMContentLoaded", setValueElemForm);

form.addEventListener('input', ({ target:{name,value}}) => {
    data[name] = value;
    localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify({...data,[name] : value}));

});



form.addEventListener("submit", e => {
    e.preventDefault()
    e.currentTarget.reset();
    localStorage.removeItem(FEEDBACK_FORM_STATE);
});

function setValueElemForm() {
    const dataValue = JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE));


    if (dataValue) {
        data.email = dataValue.email;
        data.message = dataValue.message;
        form.elements.email.value = dataValue.email;
        form.elements.message.value = dataValue.message;
    }
}
