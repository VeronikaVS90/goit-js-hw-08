import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const { email, message } = feedbackForm;
fillForm();

feedbackForm.addEventListener('input', throttle(saveFormData, 500));
feedbackForm.addEventListener('submit', handleSubmit);

function saveFormData() {
    
        const formData = { email: email.value, message: message.value };
        localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    }

function handleSubmit(e) {
    e.preventDefault();
    const formData = { email: email.value, message: message.value };
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    e.currentTarget.reset();
}
    
function fillForm() {
    const formData = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (formData) {
        email.value = formData.email;
        message.value = formData.message;
    }
}

