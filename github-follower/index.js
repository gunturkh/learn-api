// Level 1 & 2
const url = "https://api.github.com/users/gunturkh/followers"

$(function () {

    fetch(url)
        .then(response => {return response.json();})
        .then(data => {
            $("#output").html("")
            data.forEach(item => {
                $("#output").append(template(item))
                console.log(item)
            })
        });
        const template = (item => {
            return `
            <div class="col-md-auto">
                <div class="card">
                    <img class="card-img-top" src="${item.avatar_url}" alt="Card image cap">
                    <div class="card-body">
                        <h3 class="card-title text-center">${item.login}</h3>
                        <h3 class="card-text text-center">${item.id}</h3>
                        <a href="${item.url}" class="btn btn-primary btn-block">Go to profile</a>
                    </div>
                </div>
            </div>
            `
        })

})
