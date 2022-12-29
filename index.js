var proudctBox = document.getElementById("proudctBox")
var fetchData =[]
var ibtn = document.getElementById("ibtn")
window.onload = () => {
    inbox.innerHTML = JSON.parse(localStorage.getItem("items")).length
    
}

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
                  <a href="#" class="btn btn-primary" onclick="addCart(${index})">Add To Cart</a>
                </div>
              </div>
        </div>
    </div>
        `
        fetchData.push(product)
        
    });
})

function addCart(a){
    // var btn = document.querySelectorAll(".btn")
    // btn[a].classList.add("disabled")
    if(localStorage.getItem("items")){
        var local = JSON.parse(localStorage.getItem("items"))
        var find = local.find((data) =>{
            if (data.id == fetchData[a].id){
                return true
            }
        })
        if (find == undefined){
            var spread = [...local, fetchData[a]]
            localStorage.setItem("items",JSON.stringify(spread))
        } else{
            alert('already in cart')
        }

    } else{
        localStorage.setItem("items",JSON.stringify([fetchData[a]]))
        
    }
    inbox.innerHTML = JSON.parse(localStorage.getItem("items")).length
}

ibtn.addEventListener("click",() => {
    // console.log("asasasa")
    window.location.href = "add.html"
})


