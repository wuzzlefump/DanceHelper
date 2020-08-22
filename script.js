


// object constructor function

function Category(name,description,array, extra, picture){
this.name = name;
this.description = description;
this.array = array;
this.extra = extra;
this.picture = picture;
}


//home
const Home = new Category("Home","Click a button to find out more about Dance!",["American","International","Other"],"anyone can learn to dance",`<i class="fab fa-black-tie fa-10x"></i>`)
// home

//American
const American = new Category("American","American style dances refer to dances that are competed in by the ballroom community that started in America. It falls into three main categories: Smooth, Rhythm, and the Alternative dances.",["Smooth","Rhythm","Alternatives","Home"],"American style dances are generally danced more socially than international",`<i class="fas fa-flag-usa fa-10x"></i>`)
//Rhythm
const Rhythm = new Category("Rhythm", "Rhythm Dances",["ChaCha","Rumba","EastCoastSwing","Bolero","Mambo","American"],"Rhythm Dances", `<img src="https://img.icons8.com/emoji/100/000000/dancing-girl.png"/>`)

//Rhythm
const Other = new Category("Other", "other",["StreetLatin","Club","Country","Misc", "Home"], "other", `<i class="fas fa-road fa-10x"></i>`)

//Smooth
const Smooth = new Category("Smooth","Smooth Dancing",["Waltz","Tango","Foxtrot","VienneseWaltz","American"],"Smooth Dances", `<img src="https://img.icons8.com/ios-filled/100/000000/ballroom-dance.png"/>`)

//Smooth

//Alternatives
const Alternatives = new Category("Alternatives","Alternative Dances",["WestCoastSwing","Merengue","Samba","PasoDoble","American"],"Alternative Dances", `<i class="fas fa-question fa-10x"></i>`)

//Alternatives

//American

//International
const International = new Category("International", "International dances are dances competed in by the ballroom community around the world", ["Standard","Latin","Home"],"International Style are mostly danced competitively rather than socially",`<i class="fas fa-globe-americas fa-10x"></>`)

const Standard = new Category("Standard", "Standard Dance", ["SlowWaltz","StandardTango", "SlowFoxtrot","Viennese", "Quickstep","International" ],"standard Dance", `<img src="https://img.icons8.com/ios-filled/100/000000/ballroom-dance.png"/>`)

const Latin = new Category("Latin", "Latin Dance", ["ChaChaCha","LatinRumba","InternationalSamba","Paso","Jive","International"],"Latin Dance", `<img src="https://img.icons8.com/emoji/100/000000/dancing-girl.png"/>`)
//International


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
    const objectArray = [Home,American,International,Other,Rhythm,Smooth,Alternatives,Standard,Latin]
    const target = $(this).attr("data-name");
    console.log(target);
    objectArray.forEach(function(item){
        if(target==item.name){
            clearContent();
            createContent(item);
        }
    })
})
// modal
$(".info-Btn").click(function(){
$("#extraModal").attr("class", "is-active")
});
$(".close").click(function(){
$("#extraModal").attr("class", "modal")
})
$("#logo").click(function(){
    initial();
})