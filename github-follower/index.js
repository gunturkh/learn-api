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
                
                <div class="col-md-auto">
                    <div class="card">
                        <img class="card-img-top" src="${results[index].avatar_url}" alt="Card image cap">
                        <div class="card-body">
                            <h3 class="card-title text-center">${results[index].login}</h3>
                            <h3 class="card-text text-center">${results[index].id}</h3>
                            <a href="${results[index].url}" class="btn btn-primary btn-block">Go to profile</a>
                        </div>
                    </div>
                </div>
                
                `)
                console.log(results[index])
            })
        });

})
