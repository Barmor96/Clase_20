const registerButton = document.getElementById('register');

window.addEventListener('load', printValues);

function getUsers() {
    const headers = new Headers({ 'Content-Type': 'Application/json' })
    return fetch(' http://localhost:3000/users',

        {
            method: 'GET',
            headers: headers

        }).then(response => {
            response.json();
        }), then(res => console.log(res));
}

function printValues(event) {
    event.preventDefault();
    const data = {
        name: document.getElementById('username').value,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };
    console.log(data);


}
