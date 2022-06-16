const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const firstName = form['firstname'].value;
    const lastName = form['lastname'].value;
    const email = form['email'].value;
    const password = form['password'].value;

    if (firstName === '') {
        addErrorTo('firstname', 'password is required');
    }

    if (lastname === '') {
        addErrorTo('lastname', 'lastname is required');
    }

    if (isvalid(email)) {
        addErrorTo('email', 'email is required');
    }


    if (password === '') {
        addErrorTo('password', 'password is required');
    }


});

function addErrorTo(field, ) {
    const small = form['field'].parentNode.querySelector('small');
    small.innerText = 'message';
    small.style.opacity = '1';

}