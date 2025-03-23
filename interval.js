// let counter=3;
// const countInterval= setInterval(count, 1000);
// function count(){
//     const create=document.createElement("div")
//     create.innerHTML=`
//     <p>hellooo </p>
//     `
//     console.log(counter--);

//     if(counter<1){
//         clearInterval(countInterval)
//     }
    
// }

// count()

const show=()=>{
    const create1= document.getElementById("interest")

    const buttonContainer = document.createElement("div");

    // const create=document.createElement("div")
    buttonContainer.innerHTML=`
    <p>hellooo </p>
    `
    create1.append(buttonContainer)
}

show()

// document.getElementById("interest").innerHTML=`
// <P> hwelooo </P
// `