// fetch ('https://randomuser.me/api/?results=20')
// .then ((response) => response.json())
// .then ((data)) => {
//     console.log(data)
// }
let card = document.getElementById("card")
let items = ""

fetch ('https://randomuser.me/api/?results=20')
.then((response) => response.json())
.then ((data) =>{
    console.log(data)

    
for(i=0; i<data.results.length; i++){
    items += `
   
    <div class=" col-12 col-sm-12 col-md-6 col-xl-3">
        <div class="img1"><img src="bg-img.jpg" alt=""></div>
        <div class="img2"><img src="${data.results[i].picture.large}" alt="profile image" class="img-fluid rounded-circle m-top"></div>
        <div class="profile-name"></div>
        <div class="icons  justify-content-center gap-5">
            <p>Name ${data.results[i].name.title} ${data.results[i].name.first} ${data.results[i].name.last}</p>
            <p>Address ${data.results[i].location.street.number} ${data.results[i].location.street.name}</p>
            <p>Email ${data.results[i].email}</p>
            <p>Contact ${data.results[i].phone}</p>
            <p>Gender ${data.results[i].name.title}</p>
            <p>Age</p>

        </div>
    </div>
    `
}
card.innerHTML=items
})

