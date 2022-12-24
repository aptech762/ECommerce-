var proudctBox = document.getElementById("proudctBox")
fetch("./index.json")
.then ((data) => {
    return data.json ()
})
.then ((res) => {
    res.forEach((product,index) => {
        proudctBox.innerHTML += `
        <div class="col-sm-6 col-md-4">
        <div class="p-3 id= "product ${product.Id}">
            <div class="card" style="width: 18rem;">
                <img src="${product.Image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${product.Name}</h5>
                  <p class="card-text">${product.price}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
        </div>
    </div>
        `
    });
})