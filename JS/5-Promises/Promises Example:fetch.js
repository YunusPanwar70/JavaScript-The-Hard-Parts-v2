fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(success => console.log(success));