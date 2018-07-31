// Level 1 & 2
const url = "https://api.github.com/users/gunturkh/followers"

$(function () {

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            let results = data
            
            $("#output").html("")
            results.map((result, index) => {
                $("#output").append(`
                <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${results[index].avatar_url}/100px180/" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title text-center">${results[index].login}</h5>
                <p class="card-text text-center">${results[index].id}</p>
                <a href="${results[index].url}" class="btn btn-primary">Go to profile</a>
                </div>
                </div>
                `)
                console.log(results[index])
            })
        });

})
