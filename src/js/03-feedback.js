import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
const LS_KEY = 'feedback-form-state';

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);


function onFormInput(event) {
    
    try {
        const formFields = {};
        const formData = new FormData(formEl);
        formData.forEach((value, name) => {
            formFields[name] = value;
        })
        localStorage.setItem(LS_KEY, JSON.stringify(formFields));
    } catch (error) {
        console.error("Set state error: ", error.message);
    }
}


function onFormSubmit(event) {
    event.preventDefault();
    const { target } = event;
    const { email, message } = target.elements;
    const userEmail = email.value;
    const userMessage = message.value;
    console.log({userEmail, userMessage});
    target.reset();
    localStorage.removeItem(LS_KEY);
}


function populateFormInputFields() {

    try {
        const savedFormInputs = JSON.parse(localStorage.getItem(LS_KEY)) || '';
        const formElements = formEl.elements;
        for (const element of formElements) {
            if (savedFormInputs[element.name]) {
                element.value = savedFormInputs[element.name]
            }
        }        
    } catch (error) {
        console.log('Get state error: ', error.message);  
    }
}

populateFormInputFields();