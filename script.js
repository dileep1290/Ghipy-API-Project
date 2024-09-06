const apiKey = "rqt4mjnRG39myrHf1XWhMJNMTXDFRJyA"

async function main(){
    

    let response = await fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`);
    let data = await response.json()
    console.log(data.data);
    appendData(data.data);
}

const appendData = (data)=>{
    let contentContainer = document.getElementById("content-display");
    contentContainer.innerHTML = "";

    let displayContainer= document.getElementById("content-display");
    data.forEach(element => {

        let divContainer = document.createElement("div");
        divContainer.classList.add("div-container")

        let image = document.createElement("img");
        image.src = element.images.downsized.url;
        image.alt = element.title;
        image.addEventListener("click", ()=>{
            gifDetail(element.id);
        })

        let p = document.createElement("p");
        p.innerHTML = element.title;

        divContainer.append(image, p);
        contentContainer.append(divContainer);
        
    });

    if(contentContainer.innerHTML !== ""){
        let useBtn = document.getElementById("use-btn");

        useBtn.style.display = "none";
    }
}

function gifDetail(id){
    localStorage.setItem("Details",JSON.stringify(id));
    window.location.href="./individualgif.html"
}

main();


 const getgif = async ()=>{
    
    let query = document.getElementById("inputEl");
    let queryValue = query.value;
     if(queryValue == ''){
        alert("Please Enter something Click the Button");
     }
     else{
        try{
            const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${queryValue}&limit=50`;
            const response = await fetch(url);
            const data = await response.json();
            let results = data.data;
            
            // console.log(data.data);
            appendData(results);
        }
        catch(error){
            console.log("Error in getgif Functioon declaration", error);
        }
     }
    
}



const getsticker = async ()=>{
    let query = document.getElementById("inputEl");
    let queryValue = query.value;
    if(queryValue == ''){
        alert("Please Enter something Click the Button");
    }
    else{
        try{
            const url = `https://api.giphy.com/v1/stickers/search?api_key=${apiKey}&q=${queryValue}&limit=50`;
            const response = await fetch(url);
            const data = await response.json();
            let results = data.data;
            
            // console.log(data.data);
            appendData(results);
        }
        catch(error){
            console.log("Error in getsticker Functioon declaration", error);
        }
     }
}
