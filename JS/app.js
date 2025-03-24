


const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories))
        .catch((error) => console.log(error))
}

const removeActiveClass = () => {
    const activeBtnAll = document.getElementsByClassName("category-btn")
    console.log(activeBtnAll);
    // activeBtnAll.

    for (let btn of activeBtnAll) {
        btn.classList.remove("active")
    }

}

const loadPetImage = async (petId) => {
    console.log(petId);

    const url = `https://openapi.programming-hero.com/api/peddy/pet/${petId}`

    const res = await fetch(url);
    const data = await res.json();

    displayPetImage(data.petData);
}

// like button click
// const displayPetImage=(petImg)=>{
//     console.log(petImg);

//     // console.log("clicked like button");

//     const likeImages=document.getElementById("selected-pet-section");

//     likeImages.innerHTML=`
//        <div class="grid grid-cols-2  gap-1 mt-2 ">
//      <img class="w-40" src=${petImg.image}>
//      </div>
//     `




// //     likeImages.forEach((item)=>{

// //         item.innerHTML=`
// //   <div class="grid grid-cols-2  gap-1 mt-2 ">
// // <img class="w-40" src=${petImg.image}>
// // </div>
// // `
// //     })


// }
const testPetImage = (petImg) => {
    console.log(petImg);
    const likeImages = document.getElementById("selected-pet-section");

    const imgElement = document.createElement('img');
    imgElement.src = `${petImg}`
    imgElement.classList.add("w-40")

    likeImages.classList = "grid grid-cols-2  md:h-72 gap-1 mt-2 "

    likeImages.appendChild(imgElement);

    setTimeout(() => {
        likeImages.style.opacity = 1;
    }, 10)

}

const displayPetImage = () => {


}




// adopt button function

const adoptBtnClicked = (test) => {
    console.log("clickeddddddddd");




    // let counter=3;
    // const countInterval= setInterval(count, 1000);
    // function count(){
    //    console.log(counter--);

    //     if(counter<1){
    //         clearInterval(countInterval)
    //     }

    // }
    // console.log("my", test);




    const congrats = document.getElementById("congrats-container")
    congrats.classList.add = ("justify-center")

    congrats.innerHTML = `
    <div>
    <img class=" mx-auto" src="https://img.icons8.com/?size=100&id=q6BlPrJZmxHV&format=png&color=000000">
    </div>
    <h4 class="font-bold text-3xl my-auto">Congratulations</h4>
    <h1>Adoption Process Start For Your Pet</h1>
    <div class="text-6xl font-bold" id="timer">3</div>

    `




    document.getElementById("adopt_modal").showModal();
    // real

    let count = 3;
    const countDownElement = document.getElementById("timer");

    const countDownInterval = setInterval(() => {
        count--;
        if (count > 0) {
            countDownElement.textContent = count;
            
        }
      
        
        else{
            clearInterval(countDownInterval);
           
        }
        if (count==0){
            
                document.getElementById("esc-btn").click()

            }
        
    }, 1000

    )


    // document.getElementById("adopt-btn-main").addEventListener("click", function() {
    //     this.disabled = true;
    // });


    
    // disableBtbFn()
}




const testPetImage2 = (petImg) => {
    console.log(petImg);
    const likeImages = document.getElementById("selected-pet-section");

    likeImages.innerHTML = `
    <div class="grid grid-cols-2  gap-1 mt-2 ">
  <img class="w-40" src=${petImg}>
  
  </div>
 `

}


// const detailsTest = {

//     "status": true,
//     "message": "successfully fetched pet data using id 2",
//     "petData": {
//         "petId": 2,
//         "breed": "Siamese",
//         "category": "Cat",
//         "date_of_birth": "2022-09-05",
//         "price": 800,
//         "image": "https://i.ibb.co.com/3Wzz41D/pet-2.jpg",
//         "gender": "Female",
//         "pet_details": "This affectionate female Siamese cat is known for her vocal nature and love for attention. Born on September 5, 2022, she enjoys interactive play and snuggles. Fully vaccinated and priced at $800, she's the perfect fit for cat lovers who appreciate an intelligent, engaging, and sociable feline companion.",
//         "vaccinated_status": "Fully",
//         "pet_name": "Mia"
//     }

// }


const laodDetails = async (petId) => {
    // const detailsLoad=document.getElementById("dettails-btn")
    // console.log(detailsLoad);



    const url = `https://openapi.programming-hero.com/api/peddy/pet/${petId}`

    const res = await fetch(url);
    const data = await res.json();
    displayDetails(data.petData);
    displayPetImage(data.petData);



}

const displayDetails = (petsData) => {
    console.log(petsData);
    const detailsContainer = document.getElementById("modal-content");

    detailsContainer.innerHTML = `
  <div >
  <img class="w-full rounded-lg" src=${petsData.image} >

  <h1 class="font-bold text-2xl mt-4">${petsData.pet_name}</h1>
  </div>

    

  <div class="grid grid-cols-2 col-auto grid-rows-3 flex-wrap gap-1 mt-2 ">
   <div class="flex gap-2 mt-2">
    <img class="h-5 " src="https://img.icons8.com/?size=100&id=n7o8YSGnhNnQ&format=png&color=000000" >
    <p class="text-center ">Breed: ${petsData.breed}</p>
   </div>

   <div class="flex gap-2 mt-2">
    <img class="h-5" src="https://img.icons8.com/?size=100&id=16152&format=png&color=000000" >
    <p class="text-center ">Birth: ${petsData.date_of_birth}</p>
   </div>

   

   <div class="flex gap-2 mt-2 ">
    <img class="h-5" src="https://img.icons8.com/?size=100&id=15236&format=png&color=000000" >
    <p class="text-center mb-1">Gender: ${petsData.gender}</p>
   </div>

   <div class="flex gap-2 mt-2">
    <img class="h-5" src="https://img.icons8.com/?size=100&id=85801&format=png&color=000000" >
    <p class="text-center mb-1">Price: ${petsData.price}</p>
   </div>
   <div class="flex gap-2 mt-2">
    <img class="h-5" src="https://img.icons8.com/?size=100&id=ooS0jhPMiVLg&format=png&color=000000" >
    <p class="text-center mb-1">Vaccinated status: ${petsData.vaccinated_status}</p>
   </div>

   </div>




   <hr class="mt-3">

   
   <div >
   <h3 class="font-bold my-2">Details Information</h3>
   <p>${petsData.pet_details}</P
   
   
   </div>




  `

    //way-1
    //   document.getElementById("showModalData").click();
    //   way-2
    document.getElementById("customModal").showModal();

}

const loadCategoryPets = (id) => {

    document.getElementById("loading-spiner").style.display = "block"

    fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)



        .then((res) => res.json())
        .then((data) => {
            //all active class remove 
            removeActiveClass();

            //add all active class
            const activeBtn = document.getElementById(`btn-${id}`)
            console.log(activeBtn);

            activeBtn.classList.add("active")


            displayPets(data.data)

        })

        .catch((error) => console.log(error))
}



const displayCategories = (categories) => {

    const categoryContainer = document.getElementById("categories")


    categories.forEach((item) => {
        document.getElementById("loading-spiner").style.display = "none"

        // console.log(item);
        // console.log(item.category);


        // create a button
        const buttonContainer = document.createElement("div");
        // button.classList = " border rounded-lg";

        //    const names= console.log(item.category);


        // add onclick handler

        // button.innerText=item.category;
        buttonContainer.innerHTML =
            `

            <button id="btn-${item.category}" onclick="loadCategoryPets('${item.category}')" class="category-btn border rounded-xl w-52 h-14">

            <div class="flex gap-3 justify-center">
     <img class="h-10" src="${item.category_icon}">
     <p class="font-bold justify-items-center my-auto">${item.category}</P>
    </div>
            </button>
            

           
        `

        // add button to category container
        categoryContainer.append(buttonContainer)
    })

}



const loadPets = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")


        .then((res) => res.json())
        .then((data) => displayPets(data.pets))
        .catch(error => console.error(error))

}

// const petsDemo={

//         "petId": 12,
//         "breed": "Poodle",
//         "category": "Dog",
//         "date_of_birth": "2023-08-10",
//         "price": 1500,
//         "image": "https://i.ibb.co.com/R9ZHvDD/pet-12.jpg",
//         "gender": "Female",
//         "pet_details": "This elegant female Poodle, born on August 10, 2023, is intelligent and eager to learn. Fully vaccinated and priced at $1500, she's perfect for families looking for a trainable and loving companion.",
//         "vaccinated_status": "Fully",
//         "pet_name": "Chloe"

// }]]]




const displayPets = (allPets) => {

    const petsCollection=allPets
    console.log(petsCollection);

//     const all=petsCollection.map(p=>{
//        prices= petsCollection.map(p=>p.price);
//     console.log(prices);

//     const sortedPrice= prices.sort(function(a, b){return b-a});
//    console.log(sortedPrice);
// //     .sort(function(a, b){return b-a});
// //    console.log(sortedPrice);
//     })
//     console.log(all);
    const all=petsCollection.map(sortedCollection)
    console.log(all);

    
    

    // const prices=petsCollection.map(p=>p.price);
    // console.log(prices);

//    const sortedPrice= prices.sort(function(a, b){return b-a});
//    console.log(sortedPrice);
   

    

    // const sortingPrice=allPets[0].price;
    // const sortingPrice1=allPets[1].price;
    // const sortingPrice2=allPets[2].price;
    // console.log(sortingPrice);

    // sortingPrice.sort(function(a, b){return b-a});



    const petsContainer = document.getElementById("pets-section");

    if (allPets.length === 0) {
        petsContainer.classList.remove("grid", "md:w-4/5")
        petsContainer.innerHTML = `
        <div class=" rounded-xl p-7 bg-[#13131330] items-center w-full">

        <img class="mx-auto" src="images/error.webp">

        <div class="flex flex-col text-center content-center justify-center">

        <h1 class="font-bold mt-3 text-3xl">No Information Available</h1>
        <p class="">Sorry, we don't have any information  about this page.<br> We will Update this page as soon as we get information . Thank You. </p>
        </div>

        </div>
        
        `
        return;
    }
    else {
        petsContainer.classList.add("grid", "md:w-4/5")
    }

    petsContainer.innerHTML = "";

    allPets.forEach((pets) => {

        // console.log(pets);
        
    // const sortingPrice=pets.price;
    // console.log(sortingPrice);
    // const arr=[sortingPrice]
    // console.log(arr);




    
    

   
   
    


    insideAllPets(pets)

        document.getElementById("loading-spiner").style.display = "none";



        // console.log(pets);
        // console.log(pets.image);

        // create a card
        const card = document.createElement("div");
        card.classList = "sm:w-full bg-base-100  shadow-sm"
        card.innerHTML =
            `
             <figure class=" p-4">
    <img class="border-0 object-cover rounded-md"
      src="${pets.image}" />
  </figure>
  <div class="px-4">
    <h2 class="font-bold text-3xl">
      ${pets.pet_name}
      
    </h2>
    
   <div class="flex gap-2 mt-2 justify-items-center">
    <img class="h-5 mt-[1.5px]" src="https://img.icons8.com/?size=100&id=n7o8YSGnhNnQ&format=png&color=000000" >
    <p class="text-center ">Breed: ${pets.breed}</p>
   </div>

   <div class="flex gap-2 mt-2">
    <img class="h-5" src="https://img.icons8.com/?size=100&id=16152&format=png&color=000000" >
    <p class="text-center mb-1">Birth: ${pets.date_of_birth}</p>
   </div>


   <div class="flex gap-2 mt-2">
    <img class="h-5" src="https://img.icons8.com/?size=100&id=15236&format=png&color=000000" >
    <p class="text-center mb-1">Gender: ${pets.gender}</p>
   </div>

   <div class="flex gap-2 mt-2">
    <img class="h-5" src="https://img.icons8.com/?size=100&id=85801&format=png&color=000000" >
    <p class="text-center mb-1">Price: ${pets.price}</p>
   </div>

   <hr>

   <div class="flex justify-between mb-4 mt-4">
        <button onclick="testPetImage('${pets.image}')" id="like-btn" class="btn"><img class="h-5" src="https://img.icons8.com/?size=100&id=114011&format=png&color=000000" > </button>
     

        <button id="adopt-btn-main" onclick="adoptBtnClicked(); disableBtbFn()" class="border-[2px] 
        border-[#d6e9ea] font-bold text-[#0E7A81] rounded-lg w-24 h-10  disabled:bg-gray-400 disabled:cursor-not-allowed" >Adopt</button>

        <button onclick="laodDetails(${pets.petId})" id="dettails-btn" class="border-[2px] 
        border-[#d6e9ea] font-bold text-[#0E7A81] rounded-lg w-24 h-10">Details</button>

   </div


  </div>

     `

        //  append card
        petsContainer.append(card)

        // all price list

        // console.log(pets.price);
        


    })

}

// const disableBtbFn=()=>{
//     document.getElementById("adopt-btn-main").disabled = true;

// }

function disableBtbFn(){
    document.getElementById("adopt-btn-main").disabled = true;

}

const sortBtnFn=(prices)=>{
    // console.log("sortedd");
    // console.log(prices.price);
    
   
    
}

const insideAllPets=(data)=>{
    // console.log(data);
    sortBtnFn(data)
    
}







loadCategories()
loadPets()