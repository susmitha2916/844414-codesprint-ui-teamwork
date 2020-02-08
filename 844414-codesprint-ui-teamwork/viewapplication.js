const PRODUCTS_KEY = "products";

getProductsFromLocalStorage = () =>{
    let products=[];
    
    if(localStorage.getItem(PRODUCTS_KEY)){
        products=JSON.parse(localStorage.getItem(PRODUCTS_KEY));
    }

    return products;
}

addItemFormSubmit = () =>{
    let products = getProductsFromLocalStorage();
    let firstName=document.querySelector("fn");
    let lastName=document.querySelector("ln");
    let personAge=document.querySelector("age");
    let personEmail=document.querySelector("email");
    let personPhone=document.querySelector("#phone");
    let personAddress=document.querySelector("#street");
    let personCity=document.querySelector("#city");
    let personState=document.querySelector("#state");
    let personCountry=document.querySelector("#country");
    let pinCode=document.querySelector("pin");
    let trainerPref=document.querySelector("#Ma");
    let physio=document.querySelector("#hi");
    let appoint=document.querySelector("#one");
    let suitablePackage=document.querySelector("#var");
    let quoteInr=document.querySelector("#mon");
    let quotePaise=document.querySelector("#mon1");
    let others=document.querySelector("#others");
    let trainerName=document.querySelector("#tname");
    

    let product = {
        fName:firstName.value,
        lName:lastName.value,
        age:parseInt(personAge.value),
        email:personEmail.value,
        phone:personPhone.value,
        streetAddress:personAddress.value,
        city:personCity.value,
        state:personState.value,
        country:personCountry.value,
        pinval:pinCode.value,
        trainerPreference:trainerPref.value,
        therapist:physio.value,
        appointmentslot:appoint.value,
        package:suitablePackage.value,
        inr:quoteInr.value,
        paise:quotePaise.value,
        tname:firstName.value,
        others:lastName.value
    };

    products.push(product);
    localStorage.setItem(PRODUCTS_KEY,JSON.stringify(products));
}

loadItems = () =>{
    let products = getProductsFromLocalStorage();

    let tableBody = document.querySelector("#prd");

/*    products.forEach(product => {
        let prdRow = createProductRow(product);
        tableBody.append(prdRow);
    }); */

    for(let product of products){
        let prdRow = createProductRow(product);
        tableBody.append(prdRow);
    }
}

createProductRow = (product) =>{

    let nameCol = document.createElement("td");
    nameCol.textContent=product.fName;
    
    let name1Col = document.createElement("td");
    name1Col.textContent=product.lName;

    let cityCol = document.createElement("td");
    cityCol.textContent=product.city;

    let prdRow = document.createElement("tr");
    prdRow.append(nameCol);
    prdRow.append(name1Col);
    prdRow.append(cityCol);
}