


// object constructor function

function Category(name,description,array, extra, picture){
this.name = name;
this.description = description;
this.array = array;
this.extra = extra;
this.picture = picture;
}
function DANCE(name,description,array,picture,extra){

    this.name = name;
    this.description = description;
    this.array= array;
    this.picture=picture;
    this.extra=extra;
}



//home
const Home = new Category("Home","Click a button to find out more about Dance!",["American","International","Other"],"anyone can learn to dance",`<i class="fab fa-black-tie fa-10x"></i>`)
// home
//American
const American = new Category("American","American style dances refer to dances that are competed in by the ballroom community that started in America. It falls into three main categories: Smooth, Rhythm, and the Alternative dances.",["Smooth","Rhythm","Alternatives","Home"],"American style dances are generally danced more socially than international",`<i class="fas fa-flag-usa fa-10x"></i>`)
//Rhythm
const Rhythm = new Category("Rhythm", "Rhythm Dances",["ChaCha","Rumba","EastCoastSwing","Bolero","Mambo","American"],"Rhythm Dances", `<img src="https://img.icons8.com/emoji/100/000000/dancing-girl.png"/>`)

const ChaCha = new DANCE("ChaCha","description",["Rhythm"],`<img src="https://img.icons8.com/emoji/100/000000/dancing-girl.png"/>`,"Pauls Biased belief of this dance is that its difficulty is: "+"7/10"+" its versatility is: "+ "above average"+" and its song tempo plus an example is: "+" 4/4 time 30-32 Mpm Major: Love Me Ole" )

const Rumba = new DANCE("Rumba","description",["Rhythm"],`<img src="https://img.icons8.com/emoji/100/000000/dancing-girl.png"/>`,"Pauls Biased belief of this dance is that its difficulty is: "+"5/10"+" its versatility is: "+"Very Versatile" +" and its song tempo plus an example is: "+" 4/4 time 30-32 Mpm  Ally Brooke: Low Key" )

const EastCoastSwing = new DANCE("EastCoastSwing", "description",["Rhythm"],`<img src="https://img.icons8.com/emoji/100/000000/dancing-girl.png"/>`,"Pauls Biased belief of this dance is that its difficulty is: "+"6/10"+" its versatility is: "+ "Very Versatile"+" and its song tempo plus an example is: "+"4/4 time 32-36 Mpm Flo Rida: Dirty Mind" )

const Bolero = new DANCE("Bolero", "description",["Rhythm"],`<img src="https://img.icons8.com/emoji/100/000000/dancing-girl.png"/>`,"Low","Pauls Biased belief of this dance is that its difficulty is: "+"8/10"+" its versatility is: "+" Low"+" and its song tempo plus an example is: "+" 4/4 time 24-26 Mpm SYML: Mr Sandman" )

const Mambo = new DANCE("Mambo","description",["Rhythm"],`<img src="https://img.icons8.com/emoji/100/000000/dancing-girl.png"/>`,"Pauls Biased belief of this dance is that its difficulty is: "+"7/10"+" its versatility is: "+"average" +" and its song tempo plus an example is: "+" 4/4 47-51 mpm time Cali Flow: Ras Tas Tas")
//Rhythm

// other
const Other = new Category("Other", "other",["StreetLatin","Club","Country","Misc", "Home"], "other", `<i class="fas fa-road fa-10x"></i>`)

//StreetLatin
const StreetLatin = new Category("StreetLatin","description",["Bachata", "Salsa", "Zouk", "Forro", "Kizomba", "Cumbia", "Other"],"",`<i class="fas fa-road fa-10x"></i>`)

const Bachata = new DANCE("Bachata","description",["StreetLatin"],`<img src="https://img.icons8.com/emoji/100/000000/dancing-girl.png"/>`,"Pauls Biased belief of this dance is that its difficulty is: "+"4/10"+" its versatility is: "+"average" +" and its song tempo plus an example is: "+" 4/4 time varied mpm time Prince Royce: Incondicional")

const Salsa = new DANCE("Salsa","description",["StreetLatin"],`<img src="https://img.icons8.com/emoji/100/000000/dancing-girl.png"/>`,"Pauls Biased belief of this dance is that its difficulty is: "+"7/10"+" its versatility is: "+"Low" +" and its song tempo plus an example is: "+" 4/4 time 40-55 mpm time Marc Anthony: Vivr Mi Vida")

const Zouk = new DANCE("Zouk","description",["StreetLatin"],`<img src="https://img.icons8.com/emoji/100/000000/dancing-girl.png"/>`,"Pauls Biased belief of this dance is that its difficulty is: "+"7/10"+" its versatility is: "+"very versatile" +" and its song tempo plus an example is: "+" 4/4 time varied mpm time Prince Roya: Lie")

const Forro = new DANCE("Forro","description",["StreetLatin"],`<img src="https://img.icons8.com/emoji/100/000000/dancing-girl.png"/>`,"Pauls Biased belief of this dance is that its difficulty is: "+"N/A"+" its versatility is: "+"N/A" +" and its song tempo plus an example is: "+" N/A")

const Cumbia = new DANCE("Cumbia","description",["StreetLatin"],`<img src="https://img.icons8.com/emoji/100/000000/dancing-girl.png"/>`,"Pauls Biased belief of this dance is that its difficulty is: "+"6/10"+" its versatility is: "+"low" +" and its song tempo plus an example is: "+" N/A" )

const Kizomba = new DANCE("Kizomba","description",["StreetLatin"],`<img src="https://img.icons8.com/emoji/100/000000/dancing-girl.png"/>`,"Pauls Biased belief of this dance is that its difficulty is: "+"8/10"+" its versatility is: "+"average" +" and its song tempo plus an example is: "+" 4/4 time varied tempo Nao me toca")
//Street Latin
//Club
const Club = new Category("Club","description",["Blues","NightClub2Step","Hustle","Other"],"",`<i class="fas fa-road fa-10x"></i>`)

const Blues = new DANCE("Blues","description",["Club"],`<i class="fas fa-road fa-10x"></i>`,"Pauls Biased belief of this dance is that its difficulty is: "+"2/10"+" its versatility is: "+"high" +" and its song tempo plus an example is: "+" varied 3/4 and 4/4 time and varied tempo LP: Muddy Waters") 

const NightClub2Step = new DANCE("NightClub2Step","description",["Club"],`<i class="fas fa-road fa-10x"></i>`,"Pauls Biased belief of this dance is that its difficulty is: "+"2/10"+" its versatility is: "+"high" +" and its song tempo plus an example is: "+" 4/4 time 16-22Mpm  Eric Benet: Spend My Life With You")

const Hustle = new DANCE("Hustle", "description",["Club"],``,"Pauls Biased belief of this dance is that its difficulty is: "+"2/10"+" its versatility is: "+"high" +" and its song tempo plus an example is: "+" 4/4 time 28-30Mpm ABBA:Gimme Gimme Gimme/SOS")

//Club
//Country
const Country = new Category("Country","description",["TwoStep","ThreeStep","CountryWaltz","CountrySwing","Other"],"",`<i class="fas fa-road fa-10x"></i>`)

const TwoStep = new DANCE("TwoStep","description",["Country"],`<i class="fas fa-road fa-10x"></i>`,"Pauls Biased belief of this dance is that its difficulty is: "+"4/10"+" its versatility is: "+"average" +" and its song tempo plus an example is: "+" 4/4 time and 45 mpm save a horse ride a cowboy. (paul doesnt like country enough to look up the artist) ")

const ThreeStep = new DANCE("Threestep","description",["Country"],`<i class="fas fa-road fa-10x"></i>`,"Pauls Biased belief of this dance is that its difficulty is: "+"6/10"+" its versatility is: "+"average" +" and its song tempo plus an example is: "+" 4/4 time and 27-30 mpm (paul doesnt like country enough to look up the artist or song)")

const CountrySwing = new DANCE("CountrySwing", "description",["Country"],`<i class="fas fa-road fa-10x"></i>`,"Pauls Biased belief of this dance is that its difficulty is: "+"3/10"+" its versatility is: "+"average" +" and its song tempo plus an example is: "+" 4/4 time and a varied tempo . (paul doesnt like country enough to look up an artist or song) ")
//Country
//misc
const Misc = new Category("Misc","description",["Polka", "Peabody","Argentine","Balboa","CarolinaShag", "CollegiateShag",
"Other"],"",`<i class="fas fa-road fa-10x"></i>`)
//misc
const Polka = new DANCE("Polka", "description", ["Polka"], `<i class="fas fa-road fa-10x"></i>`, "Pauls Biased belief of this dance is that its difficulty is: "+"3/10"+" its versatility is: "+"low" +" and its song tempo plus an example is: "+" 2/4 time 60-62Mpm. Doghouse Polka: Babe Wagner ")

const Peabody = new DANCE
//other

//Smooth
const Smooth = new Category("Smooth","Smooth Dancing",["Waltz","Tango","Foxtrot","VienneseWaltz","American"],"Smooth Dances", `<img src="https://img.icons8.com/ios-filled/100/000000/ballroom-dance.png"/>`)

const Waltz = new DANCE("Waltz","description",["Smooth"],`<img src="https://img.icons8.com/ios-filled/100/000000/ballroom-dance.png"/>`,"Pauls Biased belief of this dance is that its difficulty is: "+"5/10"+" its versatility is: "+"low" +" and its song tempo plus an example is: "+" 3/4 time 30-32 Mpm Chris Spheeris: Enchantment ")

const Tango = new DANCE("Tango","description",["Smooth"],`<img src="https://img.icons8.com/ios-filled/100/000000/ballroom-dance.png"/>`,"Pauls Biased belief of this dance is that its difficulty is: "+"6/10"+" its versatility is: "+"above average" +" and its song tempo plus an example is: "+"4/4 time 30-32 Mpm Gotan Project: Santa Maria" )

const Foxtrot = new DANCE("Foxtrot","description",["Smooth"],`<img src="https://img.icons8.com/ios-filled/100/000000/ballroom-dance.png"/>`,"Pauls Biased belief of this dance is that its difficulty is: "+"7/10"+"  its versatility is: "+"average"+" and its song tempo plus an example is: "+"30-34 mpm  Three Dog Night: One" )

const VienneseWaltz = new DANCE("VienneseWaltz","description",["Smooth"],`<img src="https://img.icons8.com/ios-filled/100/000000/ballroom-dance.png"/>`,"Pauls Biased belief of this dance is that its difficulty is: "+" 8.5/10"+" its versatility is: "+"average"+" and its song tempo plus an example is: "+ "3/4 time 54-46 Mpm 5 seconds of Summer:Ghost of you")

//Smooth

//Alternatives
const Alternatives = new Category("Alternatives","Alternative Dances",["WestCoastSwing","Merengue","Samba","PasoDoble","American"],"Alternative Dances", `<i class="fas fa-question fa-10x"></i>`)

//Alternatives
const WestCoastSwing = new DANCE("WestCoastSwing","description",["Alternatives"],`<i class="fas fa-question fa-10x"></i>`,"Pauls Biased belief of this dance is that its difficulty is: "+" 8/10"+" its versatility is: "+"very versatile"+" and its song tempo plus an example is: "+ "4/4 time 28-32 Mpm Nico and Vinz : Intruiged")

const Merengue = new DANCE("Merengue","description",["Alternatives"], `<i class="fas fa-question fa-10x"></i>`,"Pauls Biased belief of this dance is that its difficulty is: "+" 2/10"+" its versatility is: "+" above average"+" and its song tempo plus an example is: "+ "4/4 time 29-32 Mpm Don Omar : Danza Koduro" )

const Samba = new DANCE("Samba","description",["Alternatives"],`<i class="fas fa-question fa-10x"></i>`,"Pauls Biased belief of this dance is that its difficulty is: "+" 9/10"+" its versatility is: "+"above average"+" and its song tempo plus an example is: "+ "2/4 time 54-56 Mpm  :  ")

const PasoDoble = new DANCE("PasoDoble","description",["Alternatives"],`<i class="fas fa-question fa-10x"></i>`,"Pauls Biased belief of this dance is that its difficulty is: "+" 7/10"+" its versatility is: "+"Low"+" and its song tempo plus an example is: "+ "2/4 time 58-60 Mpm Nico and Espana Cani")
//American

//International
const International = new Category("International", "International dances are dances competed in by the ballroom community around the world", ["Standard","Latin","Home"],"International Style are mostly danced competitively rather than socially",`<i class="fas fa-globe-americas fa-10x"></>`)
//Standard
const Standard = new Category("Standard", "Standard Dance", ["SlowWaltz","StandardTango", "SlowFoxtrot","Viennese", "Quickstep","International" ],"standard Dance", `<img src="https://img.icons8.com/ios-filled/100/000000/ballroom-dance.png"/>`)

const SlowWaltz = new DANCE("SlowWaltz","description",["Standard"],`<img src="https://img.icons8.com/ios-filled/100/000000/ballroom-dance.png"/>`,"Pauls Biased belief of this dance is that its difficulty is: "+" 7/10"+" its versatility is: "+"Low"+" and its song tempo plus an example is: "+ "3/4 time 28-31 Mpm Chris Spheeris : Enchantment")

const StandardTango = new DANCE("StandardTango","description",["Standard"],`<img src="https://img.icons8.com/ios-filled/100/000000/ballroom-dance.png"/>`,"Pauls Biased belief of this dance is that its difficulty is: "+" 7/10"+" its versatility is: "+" above average"+" and its song tempo plus an example is: "+ "4/4 time 32-34 Mpm Gotan Project: Santa Maria" )

const SlowFoxtrot = new DANCE("SlowFoxtrot","description",["Standard"],`<img src="https://img.icons8.com/ios-filled/100/000000/ballroom-dance.png"/>`,"Pauls Biased belief of this dance is that its difficulty is: "+" 7.5/10"+" its versatility is: "+"Low"+" and its song tempo plus an example is: "+ "4/4 time 28-30 Mpm Big Voodo Daddy : It Only Took a Kiss ")

const Viennese = new DANCE("Viennese","description",["Standard"],`<img src="https://img.icons8.com/ios-filled/100/000000/ballroom-dance.png"/>`,"Pauls Biased belief of this dance is that its difficulty is: "+" 8/10"+" its versatility is: "+"average"+" and its song tempo plus an example is: "+ "3/4 time 56-60 Mpm Max : Where Am I At")

const Quickstep = new DANCE("Quickstep","description",["Standard"],`<img src="https://img.icons8.com/ios-filled/100/000000/ballroom-dance.png"/>`,"Pauls Biased belief of this dance is that its difficulty is: "+" 9/10"+" its versatility is: "+"Low"+" and its song tempo plus an example is: "+ "4/4 time 50-52 Mpm Marianas Trench : Stutter")
//Standard
//Latin
const Latin = new Category("Latin", "Latin Dance", ["ChaChaCha","LatinRumba","InternationalSamba","Paso","Jive","International"],"Latin Dance", `<img src="https://img.icons8.com/emoji/100/000000/dancing-girl.png"/>`)

const ChaChaCha = new DANCE("ChaChaCha","description",["Latin"],``,"Pauls Biased belief of this dance is that its difficulty is: "+" 7.5/10"+" its versatility is: "+"average"+" and its song tempo plus an example is: "+ "4/4 time 32-34 Mpm Major : Love Me Ole")

const LatinRumba = new DANCE("LatinRumba","description",["Latin"],``,"Pauls Biased belief of this dance is that its difficulty is: "+" 8/10"+" its versatility is: "+"average"+" and its song tempo plus an example is: "+ "3/4 time 56-60 Mpm Max : Where Am I At")

const InternationalSamba = new DANCE("InternationalSamba","description",["Latin"],``,"Pauls Biased belief of this dance is that its difficulty is: "+" 8/10"+" its versatility is: "+"average"+" and its song tempo plus an example is: "+ "3/4 time 56-60 Mpm Max : Where Am I At")

const Paso = new DANCE("Paso","description",["Latin"],``,"Pauls Biased belief of this dance is that its difficulty is: "+" 8/10"+" its versatility is: "+"Low"+" and its song tempo plus an example is: "+ "2/4 time 60-62 Mpm Billie Eilish : Bury a Friend")

const Jive = new DANCE("Jive","description",["Latin"],``,"Pauls Biased belief of this dance is that its difficulty is: "+" 7/10"+" its versatility is: "+"average"+" and its song tempo plus an example is: "+ "4/4 time 44-52 Mpm The Weekend : Blinding Lights")
//Latin
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
    const objectArray = [Home,American,International,Other,Rhythm,ChaCha,Rumba,EastCoastSwing,Bolero,Mambo,Smooth,Waltz,Tango,Foxtrot,VienneseWaltz,Alternatives,WestCoastSwing,Samba,Merengue,PasoDoble,Standard,SlowWaltz,StandardTango,SlowFoxtrot,Viennese,Quickstep,Latin,LatinRumba,Paso,Jive,ChaChaCha,InternationalSamba,StreetLatin,Club,Country,Misc, Bachata, Zouk, Kizomba,Forro,Cumbia, Salsa, Blues, NightClub2Step, Hustle,TwoStep,ThreeStep,CountrySwing]
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