let apiKey = "rqt4mjnRG39myrHf1XWhMJNMTXDFRJyA"



const details = async ()=>{
    let idData = JSON.parse(localStorage.getItem("Details"));
    // console.log(idData);
    try{
        let response = await fetch(`https://api.giphy.com/v1/gifs/${idData}?api_key=${apiKey}`);
        let data = await response.json()
        console.log(data.data);
        appendData(data.data);

    }
    catch(error){
        console.log("Error", error);
    }
}
details()
function appendData(data){
    // let h1 = document.getElementById("heading");
    // h1.innerHTML = data.user.description;
    console.log(data.user.description)
    let displayContainer= document.getElementById("content-display");
    let dicContainer = document.createElement("div");

    let image = document.createElement("img");
    image.src = data.images.downsized.url;
    image.alt = data.title;
    let p = document.createElement("p");
    p.innerHTML = data.title;

    dicContainer.append(image, p);
    displayContainer.append(dicContainer)
}

