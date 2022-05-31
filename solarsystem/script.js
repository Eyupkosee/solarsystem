const planets = ["images/earth.png","images/jupiter.png","images/mars.png","images/mercury.png","images/moon.png","images/neptune.png","images/pluto.png","images/saturn.png","images/uranus.png","images/venus.png"];




const bn =document.getElementById("btn")
const inputValue = document.getElementById("value")
const select = document.getElementById("selection")
const planetImg =document.getElementById("planet")
const text = document.getElementById("text")
const img = document.getElementById("planets")

let weight=null;

console.log(img)

bn.addEventListener("click",myFunction)


function myFunction(){
    
    // if(inputValue.value == 0 && select.value == 0)
    // {   
    //     text.innerHTML=""
    //     let newDiv = document.createElement("div");
    //     const newContent = document.createTextNode("1111ilk önce bir ağırlık giriniz");
    //     newDiv.appendChild(newContent);
    //     newDiv.className="text"
    //     text.appendChild(newDiv)
    //     console.log(newDiv)
    //     planetImg.hidden=true;
    // }
    if(select.value == 0)
    {   
        text.innerHTML=""
        let newDiv = document.createElement("div");
        const newContent = document.createTextNode("ilk önce bir gezegen seçiniz");
        newDiv.appendChild(newContent);
        newDiv.className="text"
        text.appendChild(newDiv)
        console.log(newDiv)
        planetImg.hidden=true;
    }
    if(inputValue.value == 0)
    {   
        text.innerHTML=""
        let newDiv = document.createElement("div");
        const newContent = document.createTextNode("ilk önce bir ağırlık giriniz");
        newDiv.appendChild(newContent);
        newDiv.className="text"
        text.appendChild(newDiv)
        console.log(newDiv)
        planetImg.hidden=true;
    }
    else{
    
    planetImg.setAttribute("src",planets[select.value-1])
    if(select.value == 1){
        weight = (inputValue.value*10)
        console.log(weight)
        // let newDiv = document.createElement("div");

        // const newContent = document.createTextNode("seçtiğiniz ağırlığın dünyadaki karşılığı : "+weight);
        // newDiv.appendChild(newContent);
        // newDiv.className="text"
        // text.appendChild(newDiv)
        planetImg.hidden=false;
        text.innerHTML="seçtiğiniz ağırlığın dünyadaki karşılığı :  "+weight
    }
    if(select.value == 2){
        weight = (inputValue.value*26)
        planetImg.hidden=false;
        text.innerHTML="seçtiğiniz ağırlığın jupiterdeki karşılığı :  "+weight
    }
    if(select.value == 3){
        weight = (inputValue.value*4)
        planetImg.hidden=false;
        text.innerHTML="seçtiğiniz ağırlığın mars karşılığı :  "+weight
    }
    if(select.value == 4){
        weight = (inputValue.value*4)
        planetImg.hidden=false;
        text.innerHTML="seçtiğiniz ağırlığın merkürdeki karşılığı :  "+weight
    }
    if(select.value == 5){
        weight = (inputValue.value*2)
        planetImg.hidden=false;
        text.innerHTML="seçtiğiniz ağırlığın aydaki karşılığı :  "+weight
    }
    if(select.value == 6){
        weight = (inputValue.value*11)
        planetImg.hidden=false;
        text.innerHTML="seçtiğiniz ağırlığın neptündeki karşılığı :  "+weight
    }
    if(select.value == 7){
        weight = (inputValue.value*2)
        planetImg.hidden=false;
        text.innerHTML="seçtiğiniz ağırlığın plutondaki karşılığı :  "+weight
    }
    if(select.value == 8){
        weight = (inputValue.value*10)
        planetImg.hidden=false;
        text.innerHTML="seçtiğiniz ağırlığın satürndeki karşılığı :  "+weight
    }
    if(select.value == 9){
        weight = (inputValue.value*9)
       planetImg.hidden=false;
        text.innerHTML="seçtiğiniz ağırlığın uranüsteki karşılığı :  "+weight
    }
    if(select.value == 10){
        weight = (inputValue.value*9)
        planetImg.hidden=false;
        text.innerHTML="seçtiğiniz ağırlığın venüsteki karşılığı :  "+weight
    }
    inputValue.value=""
    select.value=0
    }
}
















