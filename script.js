


// object constructor function

function Category(name,description,array, extra, picture){
this.name = name;
this.description = description;
this.array = array;
this.extra = extra;
this.picture = picture;
}



const Home = new Category("Home","Click a button to find out more about Dance!",["American","International","Other"],"anyone can learn to dance",`<i class="fab fa-black-tie fa-10x"></i>`)
const American = new Category("American","American style dances refer to dances that are competed in by the ballroom community that started in America",["Smooth","Rhythm","Alternatives","Home"],"American style dances are generally danced more socially than international",`<i class="fas fa-flag-usa fa-10x"></i>`)
const International = new Category("International", "International dances are dances competed in by the ballroom community around the world", ["Standard","Latin","Home"],"International Style are mostly danced competitively rather than socially",`<i class="fas fa-globe-americas fa-10x"></i>

`)

initial();
//initial view

function initial(){
clearContent();
createContent(Home);
}

//button function
function createContent(object){

    object.array.forEach(item => {
    const newBTN = `<li> <button data-name ="${item}" class="button">${item}</button> </li>`
    $("#button-container").append(newBTN)
});
const newContent = `<p class = "content">${object.description}</p>`
const newExtra = `<p class = "extra">${object.extra}</p>`
$("#history").append(newContent)
$("#pic").append(object.picture)
$("#extra-container").append(newExtra)
$("#dance-name").text(object.name)
}

function clearContent(){
    $("#button-container").empty();
    $("#history").empty();
    $("#extra-container").empty();
    $("#pic").empty();
}

$(document).on("click", ".button", function(){
    const objectArray = [Home,American,International]
    const target = $(this).attr("data-name");
    console.log(target);

    objectArray.forEach(function(item){

        if(target==item.name){
            clearContent();
            createContent(item);
        }

    })

})