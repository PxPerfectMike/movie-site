export function setAltText(src) {
    return src;
}

export function submitForm(form) {
    const inpt = document.getElementById(form);
    inpt.addEventListener('submit', (e) => {
        e.preventDefault();
        form.reset();
    });
    
}

