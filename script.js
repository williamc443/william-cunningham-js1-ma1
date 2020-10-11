// Question 1

const cat = {
    complain: function() {
          console.log("Meow!");
    }
};

// Question 2

const heading =  document.querySelector("h3");

heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.classList.add("subHeading");

//to see my changes got applied in the console
console.log(heading)

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

function catnames(cats){
    for(var i=0; i <cats.length; i++){
        console.log(cats[i].name);
    }
}
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


// Question 8
function createCats(cats) {
    let catText = "";
    for (let i = 0; i < cats.length; i++) {
        let catAge = "Age Unknown";
        if (cats[i].age) {
            catAge = cats[i].age;
        }
        catText += `<div><h5>${cats[i].name}</h5>
            <p>${catAge}</p></div>`;
    }
    return catText;
}
const catHTML = createCats(cats);
const container = document.querySelector('.cat-container');
container.innerHTML = catHTML;

console.log(container);
