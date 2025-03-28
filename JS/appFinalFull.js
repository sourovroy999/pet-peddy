


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


const testPetImage = (petImg) => {
    console.log(petImg);
    const likeImages = document.getElementById("selected-pet-section");

    const imgElement = document.createElement('img');
    imgElement.src = `${petImg}`
    imgElement.classList.add("w-40")
    imgElement.classList.add(  "rounded")

    likeImages.classList = "grid grid-cols-2 h-fit gap-2"

    likeImages.appendChild(imgElement);

    setTimeout(() => {
        likeImages.style.opacity = 1;
    }, 10)

}

const displayPetImage = () => {


}




// adopt button function

const adoptBtnClicked = (petsId) => {
    console.log(petsId);
    
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


        else {
            clearInterval(countDownInterval);

        }
        if (count == 0) {

            document.getElementById("esc-btn").click()

        }

    }, 1000

    )


    document.getElementById(petsId).addEventListener("click", function() {
        this.disabled = true;
    });




}






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
    console.log(id);
    

    // document.getElementById("loading-spiner").style.display = "block"

    fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)



        .then((res) => res.json())
        .then((data) => {
            //all active class remove 
            removeActiveClass();

            //add all active class
            const activeBtn = document.getElementById(`btn-${id}`)
            console.log(activeBtn);

            activeBtn.classList.add("active")


            displayCatagoryWisePet(data.data)

        })

        .catch((error) => console.log(error))
}



const displayCategories = (categories) => {

    const categoryContainer = document.getElementById("categories")


    categories.forEach((item) => {
        // document.getElementById("loading-spiner").style.display = "none"

        // console.log(item);
        // console.log(item.category);


        // create a button
        const buttonContainer = document.createElement("div");
        
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


let allPets;

const loadPets = () => {

    fetch("https://openapi.programming-hero.com/api/peddy/pets")


        .then((res) => res.json())
        .then((data) => {
            allPets=data.pets;
            console.log(allPets);
            
            // displayPets(data.pets)
            displayPets()
        })
        .catch(error => console.error(error))

}


let sortedPrices=[];

const sortClicked=()=>{
    console.log('clicked');
    
    // const petsCollection=allPets
    // const sortedPrices=petsCollection.sort(function(a,b){
    //     return b.price-a.price; 
    // })
    
    sortedPrices = [...allPets].sort((a, b) => b.price - a.price);
    console.log(sortedPrices);
    displaySortWise()
    

}

const displaySortWise=()=>{
    console.log(sortedPrices);
    const petsContainer = document.getElementById("pets-section");

   

    petsContainer.innerHTML = "";

    sortedPrices.forEach((pets) => {

      insideAllPets(pets)

        // document.getElementById("loading-spiner").style.display = "none";


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
     

        <button id="${pets.petId}" onclick="adoptBtnClicked(${pets.petId}); disableBtbFn()" class="border-[2px] 
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

// show category wise pets in the hero section

const displayCatagoryWisePet=(iPets)=>{
    console.log(iPets);
    // sortClicked()

    

    const petsContainer = document.getElementById("pets-section");

    if (iPets.length === 0) {
        petsContainer.classList.add("justify-center" )
        petsContainer.classList.remove("grid", )
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

    iPets.forEach((pets) => {

    


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
     

        <button id="${pets.petId}" onclick="adoptBtnClicked(${pets.petId}); disableBtbFn()" class="border-[2px] 
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




// display all pets
const displayPets = () => {
        // document.getElementById("loading-spiner").style.display = "none";

    console.log(allPets);
    // sortClicked()
    



    const petsContainer = document.getElementById("pets-section");

  

    petsContainer.innerHTML = "";

    allPets.forEach((pets) => {

      insideAllPets(pets)

        // document.getElementById("loading-spiner").style.display = "none";


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
    <p class="">Breed: ${pets.breed}</p>
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
     

        <button id="${pets.petId}" onclick="adoptBtnClicked(${pets.petId}); " class="border-[2px] 
        border-[#d6e9ea] font-bold text-[#0E7A81] rounded-lg w-24 h-10  disabled:bg-gray-400 disabled:cursor-not-allowed" >Adopt</button>

        <button onclick="laodDetails(${pets.petId})" id="dettails-btn" class="border-[2px] 
        border-[#d6e9ea] font-bold text-[#0E7A81] rounded-lg w-24 h-10">Details</button>

   </div


  </div>

     `

        //  append card
        petsContainer.append(card)

      



    })

    

}



function disableBtbFn() {
    document.getElementById("adopt-btn-main").disabled = true;

}



const insideAllPets = (data) => {
    

}







loadCategories()
loadPets()