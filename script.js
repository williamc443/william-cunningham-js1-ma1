
// Question 1

const cat = {
    complain: function() {
          console.log("Meow!");
    }
};

// Question 2

const heading =  document.querySelector("h3");

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.classList.add("subHeading");

// Question 5

const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++ ) {
    paragraphs[i].style.color = "red";
}

// Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.background = "yellow";

// Question 7

function catfunc(catArray){
    for(var i=0; i <catArray.length; i++){
        console.log(catArray[i].name);
    }
}

// Question 8

// Cat Array
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Function 

function catFunc(catArray){
    let catText = "";
    for(var i=0; i < catArray.length; i++){
        let catAge = "Age unknown";
        if(catArray[i].age){
            catAge = catArray[i].age;
        }
        catText += `<h5>${catArray[i].name}</h5>
                    <p>${catAge}</p>`;
    }
    return catText;
}

const catHTML = catFunc(cats);
resultsContainer.innerHTML = catHTML;