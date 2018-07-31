// Level 1 & 2

$(function () {

    fetch("https://swapi.co/api/people/")
        .then(response => {
            return response.json();
        })
        .then(data => {
            let results = data.results
            $("#output").html("")
            results.map((result, index) => {
                $("#output").append(`<li> 
                <div class="name">Name : ${results[index].name}</div>
                <div class="gender">Gender : ${results[index].gender}</div>
                <div class="birth_year">Birth Year : ${results[index].birth_year}</div>
                </li>`)
                console.log(results[index])
            })
        });

})
