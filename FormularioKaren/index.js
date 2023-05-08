const form = document.querySelector('.form');

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    fetch('https://sheet.best/api/sheets/727b03e9-9232-42b1-9f52-d322d08d9edb',{
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "Nombre": document.querySelector(".nombre").value,
            "Edad": document.querySelector(".edad").value,
            "Profesión": document.querySelector(".profesion").value,
            "Correo": document.querySelector(".email").value,
            "Numero": document.querySelector(".numero").value,
        })
    })
    alert();

});