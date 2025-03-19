


const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories))
        .catch((error) => console.log(error))
}

const loadCategoryPets = (id) =>{
    
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
            .then((res) => res.json())
            .then((data) => displayPets(data.data))
            .catch((error) => console.log(error))    
}



const displayCategories = (categories) => {

    const categoryContainer = document.getElementById("categories")


    categories.forEach((item) => {
        // console.log(item);
        // console.log(item.category);
        

        // create a button
        const buttonContainer = document.createElement("div");
        // button.classList = " border rounded-lg";

    //    const names= console.log(item.category);
    //    console.log(names);
       
       
    //    console.log(typeof(item.category));
        

        // add onclick handler

        // button.innerText=item.category;
        buttonContainer.innerHTML =
            `

            <button onclick="loadCategoryPets('${item.category}')" class="btn">
            <div class="flex h-14 w-40 gap-3 justify-center">
     <img class="mt-2 h-10" src="${item.category_icon}">
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
    // console.log(allPets);
    const petsContainer = document.getElementById("pets-section");

    if(allPets.length === 0){
        petsContainer.classList.remove("grid", "md:w-4/5")
        petsContainer.innerHTML=`
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
    else{
        petsContainer.classList.add("grid", "md:w-4/5")
    }

    petsContainer.innerHTML="";

    allPets.forEach((pets) => {
        // console.log(pets);
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
        <button class="btn"><img class="h-5" src="https://img.icons8.com/?size=100&id=114011&format=png&color=000000" > </button>

        <button class="border-[2px] 
        border-[#d6e9ea] font-bold text-[#0E7A81] rounded-lg w-24 h-10">Adopt</button>

        <button class="border-[2px] 
        border-[#d6e9ea] font-bold text-[#0E7A81] rounded-lg w-24 h-10">Details</button>

   </div


  </div>

     `

        //  append card
        petsContainer.append(card)


    })

}






loadCategories()
loadPets()