


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
const Home = new Category("Home","Click a button to find out more about Dance!",["American","International","Other"],"Anyone can learn to dance. But what dance should you learn? Will you get Paul's Commentary on it? This site has it all. ",`<i class="fab fa-black-tie fa-10x"></i>`)
// home
//American
const American = new Category("American","American style dances refer to dances that are competed in by the ballroom community that started in America. It falls into three main categories: Smooth, Rhythm, and the Alternative dances.",["Smooth","Rhythm","Alternatives","Home"],"American style dances are generally danced more socially than international. That being said they still have international influences.",`<i class="fas fa-flag-usa fa-10x"></i>`)
//Rhythm
const Rhythm = new Category("Rhythm", "All Dances Should be Smooth and all dances have Rhythm. Being a Rhythm dance just means that it is in a family of dances that share characteristics. Rhythm dances tend to not travel around the room,have a forward poise, and utilize motion in the torso and hips.",["ChaCha","Rumba","EastCoastSwing","Bolero","Mambo","American"],"if you enjoy moving your body in different directions simultaniously these could be for you", `<img src="https://img.icons8.com/emoji/100/000000/dancing-girl.png"/>`)

const ChaCha = new DANCE("ChaCha","If Rhythm Dances are all a type seduction, Cha Cha is seduction by flirt. The music is fast fun and has lots of syncopations. You can dance to pop or the traditional latin stuff. You like flirting? Maybe do Cha Cha.",["Rhythm"],`<img src="https://img.icons8.com/pastel-glyph/64/000000/wink.png"/>`,"Paul's Biased belief of this dance is that its difficulty is:  its versatility is: above average and its song tempo plus an example is:  4/4 time 30-32 Mpm" +`<br>`+`<iframe src="https://8tracks.com/mixes/8979936/player_v3_universal" width="300" height="250" style="border: 0px none;"></iframe>
<p class="_8t_embed_p" style="font-size: 11px; line-height: 12px;"><a href="https://8tracks.com/user_4712154067886/cha-cha-rhythm?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">Cha Cha (Rhythm)</a> from <a href="http://8tracks.com/user_4712154067886?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">user_4712154067886</a> on <a href="https://8tracks.com?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">8tracks Radio</a>.</p>` )

const Rumba = new DANCE("Rumba","If all Rhythm dances are a type of seduction Rumba is the romance. It can be intese or soft, happy or sad, fast or slow.If you enjoy all the emotions that come from romance. Rumba is for you",["Rhythm"],`<img src="https://img.icons8.com/doodle/100/000000/rose--v1.png"/>`,"Paul's Biased belief of this dance is that its difficulty is: 5/10 its versatility is: Very Versatile and its song tempo plus an example is:  4/4 time 30-32 Mpm "+`<br>`+`<iframe src="https://8tracks.com/mixes/8979932/player_v3_universal" width="300" height="250" style="border: 0px none;"></iframe>
<p class="_8t_embed_p" style="font-size: 11px; line-height: 12px;"><a href="https://8tracks.com/user_4712154067886/rumba-rhythm?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">Rumba (Rhythm)</a> from <a href="http://8tracks.com/user_4712154067886?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">user_4712154067886</a> on <a href="https://8tracks.com?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">8tracks Radio</a>.</p>` )

const EastCoastSwing = new DANCE("EastCoastSwing", "If all Rhythm dances are a type of seduction Swing is the Party the seduction started at. Fast, Fun. You like to party? So does swing. ",["Rhythm"],`<img src="https://img.icons8.com/ios-glyphs/100/000000/dancing-party.png"/>`,"Paul's Biased belief of this dance is that its difficulty is: 6/10 its versatility is: Very Versatile and its song tempo plus an example is: 4/4 time 32-36 Mpm " +`<br>`+`<iframe src="https://8tracks.com/mixes/8979889/player_v3_universal" width="300" height="250" style="border: 0px none;"></iframe>
<p class="_8t_embed_p" style="font-size: 11px; line-height: 12px;"><a href="https://8tracks.com/user_4712154067886/east-coast-swing?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">East Coast Swing</a> from <a href="http://8tracks.com/user_4712154067886?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">user_4712154067886</a> on <a href="https://8tracks.com?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">8tracks Radio</a>.</p>` )

const Bolero = new DANCE("Bolero", "If every Rhythm dance is a type of seduction, Bolero is a deep and powerful love. If you like to express your love through power ballad, Bolero is for you.",["Rhythm"],`<img src="https://img.icons8.com/material-rounded/100/000000/date.png"/>`,"Paul's Biased belief of this dance is that its difficulty is: 8/10 its versatility is:  Low and its song tempo plus an example is:  4/4 time 24-26 Mpm " +`<br>`+`<iframe src="https://8tracks.com/mixes/8979942/player_v3_universal" width="300" height="250" style="border: 0px none;"></iframe>
<p class="_8t_embed_p" style="font-size: 11px; line-height: 12px;"><a href="https://8tracks.com/user_4712154067886/bolero?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">Bolero</a> from <a href="http://8tracks.com/user_4712154067886?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">user_4712154067886</a> on <a href="https://8tracks.com?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">8tracks Radio</a>.</p>
` )

const Mambo = new DANCE("Mambo","If all Rhythm Dances are a type of seduction, Mambo is the one night stand. Its dirty. Get your mind out of the gutter.",["Rhythm"],`<img src="https://img.icons8.com/doodle/100/000000/fire-element--v1.png"/>`,"Paul's Biased belief of this dance is that its difficulty is: 7/10 its versatility is: average and its song tempo plus an example is:  4/4time 47-51 mpm "+`<br>`+`<iframe src="https://8tracks.com/mixes/8979939/player_v3_universal" width="300" height="250" style="border: 0px none;"></iframe>
<p class="_8t_embed_p" style="font-size: 11px; line-height: 12px;"><a href="https://8tracks.com/user_4712154067886/mambo?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">Mambo</a> from <a href="http://8tracks.com/user_4712154067886?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">user_4712154067886</a> on <a href="https://8tracks.com?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">8tracks Radio</a>.</p>`)
//Rhythm

// other
const Other = new Category("Other", "There are many dances other than the ones danced by the ballroom community.",["StreetLatin","Club","Country","SwingOffshoot","Misc", "Home"], "Some of these dances are more fun than the ballroom ones in Paul's opinion", `<img src="https://img.icons8.com/ios/100/000000/swap.png"/>`)

//StreetLatin
const StreetLatin = new Category("StreetLatin","Latin America is one of the biggest sources of social dances.",["Bachata", "Salsa", "Zouk", "Forro", "Kizomba", "Cumbia", "Other"],"These dances go to latin beats, and make the bodies groove out in the streets. ",`<img src="https://img.icons8.com/color/100/000000/road.png"/>`)

const Bachata = new DANCE("Bachata","Started out as a dominican street dance. now everyones making remixes of it. It ranges from super fun to romantic and sexy. you like latin music and remixes? give it a try ",["StreetLatin"],`<img src="https://img.icons8.com/ios-filled/100/000000/music-record.png"/>`,"Paul's Biased belief of this dance is that its difficulty is: 4/10 its versatility is: average and its song tempo plus an example is:  4/4 time time varied mpm  " +`<br>`+`<iframe src="https://8tracks.com/mixes/8979935/player_v3_universal" width="300" height="250" style="border: 0px none;"></iframe>
<p class="_8t_embed_p" style="font-size: 11px; line-height: 12px;"><a href="https://8tracks.com/user_4712154067886/bachata?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">Bachata</a> from <a href="http://8tracks.com/user_4712154067886?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">user_4712154067886</a> on <a href="https://8tracks.com?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">8tracks Radio</a>.</p>`)

const Salsa = new DANCE("Salsa","A sauce thats delicious on chips... that or a fun carefree dance with lots of spins.",["StreetLatin"],`<img src="https://img.icons8.com/ios/100/000000/chili-pepper.png"/>`,"Paul's Biased belief of this dance is that its difficulty is: "+"7/10"+" its versatility is: "+"Low" +" and its song tempo plus an example is: "+" 4/4 time 40-55 mpm time Marc Anthony: Vivr Mi Vida")

const Zouk = new DANCE("Zouk","Like bringing dizzy to a whole new level? Like Songs that go BOOM CHIC CHIC? Like Body Rolls? give it a try",["StreetLatin"],`<img src="https://img.icons8.com/color/100/000000/brazil-circular.png"/>`,"Paul's Biased belief of this dance is that its difficulty is: "+"7/10"+" its versatility is: "+"very versatile" +" and its song tempo plus an example is: "+" 4/4 time varied mpm time"+`<br>`+`<iframe src="https://8tracks.com/mixes/8980092/player_v3_universal" width="300" height="250" style="border: 0px none;"></iframe><p class="_8t_embed_p" style="font-size: 11px; line-height: 12px;"><a href="https://8tracks.com/user_4712154067886/zouk?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">Zouk</a> from <a href="http://8tracks.com/user_4712154067886?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">user_4712154067886</a> on <a href="https://8tracks.com?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">8tracks Radio</a>.</p>`)

const Forro = new DANCE("Forro","Like fast dances? Like Brazilian specific folk music? This may be for you.",["StreetLatin"],`<img src="https://img.icons8.com/office/100/000000/brazil.png"/>`,"Paul's Biased belief of this dance is that its difficulty is: "+"7/10"+" its versatility is: "+"low" +" and its song tempo plus an example is: "+" 4/4 time varied tempo, usually fast Luiz Gongaza : Asa Branca")

const Cumbia = new DANCE("Cumbia","A Columbian folk dance dance thats spread throughout latin america. like rocksteps? maybe try it out ",["StreetLatin"],`<img src="https://img.icons8.com/ios-filled/100/000000/guitar.png"/>`,"Paul's Biased belief of this dance is that its difficulty is: "+"6/10"+" its versatility is: "+"low" +" and its song tempo plus an example is: "+"2/4 time usually 45-55 mpm Ay Cosita Linda " )

const Kizomba = new DANCE("Kizomba","Interested in Angolan dances? Like Being real close? Like isolating your hips with crazy precision? like  having fancy feet? give it a go",["StreetLatin"],`<img src="https://img.icons8.com/color/100/000000/angola-circular.png"/>`,"Paul's Biased belief of this dance is that its difficulty is: "+"8/10"+" its versatility is: "+"average" +" and its song tempo plus an example is: "+" 4/4 time varied tempo usually between 30-34 measures per minute. Nao me toca")
//Street Latin
//Club
const Club = new Category("Club","These are traditional night club dances",["Blues","NightClub2Step","Hustle","Other"],"Many Latin Street dances are danced in clubs as well",`<img src="https://img.icons8.com/ios-filled/100/000000/dj.png"/>`)

const Blues = new DANCE("Blues","Your Soul singing the Blues? Need a slow rhythm to soothe your soul? Dont want to think too hard about what you are doing? Dance the Blues ",["Club"],`<img src="https://img.icons8.com/ios-filled/100/000000/blues.png"/>`,"Paul's Biased belief of this dance is that its difficulty is: "+"2/10"+" its versatility is: "+"high" +" and its song tempo plus an example is: "+" varied 3/4 and 4/4 time and varied tempo LP: Muddy Waters") 

const NightClub2Step = new DANCE("NightClub2Step","In a night Club often? It playing power ballads or other slow songs? This may be what you need",["Club"],`<img src="https://img.icons8.com/metro/100/000000/partly-cloudy-night.png"/>`,"Paul's Biased belief of this dance is that its difficulty is: "+"2/10"+" its versatility is: "+"high" +" and its song tempo plus an example is: "+" 4/4 time 16-22Mpm  Eric Benet: Spend My Life With You")

const Hustle = new DANCE("Hustle", "Wanna disco? Have the need for speed? This was made for you.",["Club"],`<img src="https://img.icons8.com/ios-filled/100/000000/disco-ball.png"/>`,"Paul's Biased belief of this dance is that its difficulty is: "+"2/10"+" its versatility is: "+"high" +" and its song tempo plus an example is: "+" 4/4 time 28-30Mpm ABBA:Gimme Gimme Gimme/SOS")

//Club
//Country
const Country = new Category("Country","Country, as a genre, has quite a few dances you can do to it.",["TwoStep","ThreeStep","CountryWaltz","CountrySwing","Other"],"While Paul isn't not a fan of country music, he is happy you can at least dance to it",`<img src="https://img.icons8.com/windows/100/000000/cowboy-hat.png"/>`)

const TwoStep = new DANCE("TwoStep","Wanna travel round the floor to your favorite country song? this could be the one for you",["Country"],`<img src="https://img.icons8.com/ios-glyphs/100/000000/country-music.png"/>`,"Paul's Biased belief of this dance is that its difficulty is: "+"4/10"+" its versatility is: "+"average" +" and its song tempo plus an example is: "+" 4/4 time and 45 mpm save a horse ride a cowboy. (paul doesnt like country enough to look up the artist) ")

const ThreeStep = new DANCE("ThreeStep","Wanna make 2 step more complicated for an extra challenge? Maybe try 3 step.",["Country"],`<img src="https://img.icons8.com/ios-filled/100/000000/horseback-riding.png"/>`,"Paul's Biased belief of this dance is that its difficulty is: "+"6/10"+" its versatility is: "+"average" +" and its song tempo plus an example is: "+" 4/4 time and 27-30 mpm (paul doesnt like country enough to look up the artist or song)")

const CountrySwing = new DANCE("CountrySwing", "Wanna spin a girl randomly and do tricks while not moving much.... maybe while drunk? Not really worried about safety? Country swing",["Country"],`<img src="https://img.icons8.com/android/96/000000/beer-bottle.png"/>`,"Paul's Biased belief of this dance is that its difficulty is: "+"3/10"+" its versatility is: "+"average" +" and its song tempo plus an example is: "+" 4/4 time and a varied tempo . (paul doesnt like country enough to look up an artist or song) ")

const CountryWaltz = new DANCE("CountryWaltz","Waltz too hard? Wish it were just 3 steps forward? Want it so you can dance with a beer in your hand? countrify it",["Country"],`<img src="https://img.icons8.com/material-sharp/100/000000/western.png"/>`,"Paul's Biased belief of this dance is that its difficulty is: "+"3/10"+" its versatility is: "+"low" +" and its song tempo plus an example is: "+" 3/4 time and a varied tempo . (paul doesnt like country enough to look up an artist or song)" )
//Country
const SwingOffshoot = new Category("SwingOffshoot","Swing is an umbrella term. these are offshoots of eastcoast swing",["Balboa","CollegiateShag","Lindyhop","Other"],"Jitterbug is another one, but thats included in East Coast Swing",`<img src="https://img.icons8.com/ios-filled/100/000000/bow-tie-half.png"/>`)
//misc
const Misc = new Category("Misc","Some misc. dances",["Polka", "Peabody","Argentine","CarolinaShag", 
"Other"],"Some dances dont really fall into  any category paul can think of.",`<img src="https://img.icons8.com/pastel-glyph/100/000000/box--v2.png"/>`)
//misc
const Polka = new DANCE("Polka", "Is your head spinning? No thats just you. Yay Polka", ["Misc"], `<img src="https://img.icons8.com/ios/100/000000/folk-music.png"/>`, "Paul's Biased belief of this dance is that its difficulty is: "+"3/10"+" its versatility is: "+"low" +" and its song tempo plus an example is: "+" 2/4 time 60-62Mpm. Doghouse Polka: Babe Wagner ")

const Peabody = new DANCE("Peabody","Want to briskly trot with your Partner? Maybe Peabody is for you",["Misc"],`<img src="https://img.icons8.com/material-rounded/100/000000/running.png"/>`,"Paul's Biased belief of this dance is that its difficulty is: "+"4/10"+" its versatility is: "+"low" +" and its song tempo plus an example is: "+" 2/4 time 60-62Mpm. Pink Martini: The Man With The Big Sombrero " )

const Argentine = new DANCE("Argentine","You like leg flicks, You like Ochos? welcome to Argentine",["Misc"],`<img src="https://img.icons8.com/emoji/100/000000/rose-emoji.png"/>`,"Paul's Biased belief of this dance is that its difficulty is: "+"7.5/10"+" its versatility is: "+"average" +" and its song tempo plus an example is: "+" 4/4 time 22-32Mpm. Querer: Circ Du Soleil ")

const Balboa = new DANCE("Balboa","Like shuffling around to fast fast big band music? Maybe try Balboa",["SwingOffshoot"],`<img src="https://img.icons8.com/metro/100/000000/dancing.png"/>`,"Paul's Biased belief of this dance is that its difficulty is: "+"6.5/10"+" its versatility is: "+"lower" +" and its song tempo plus an example is: "+" 4/4 time 40-65 Mpm. Poppity Pop: Slim Gaillard")

const CollegiateShag = new DANCE("CollegiateShag","Need a workout?Like Constantly Bouncing? Like Shag? Try this dance",["SwingOffshoot"],`<img src="https://img.icons8.com/ios/100/000000/motarboard.png"/>`,"Paul's Biased belief of this dance is that its difficulty is: "+"7.5/10"+" its versatility is: "+"lower" +" and its song tempo plus an example is: "+" 4/4 time 45-50 Mpm. Fats Waller: Twenty-Four Robbers ")

const CarolinaShag = new DANCE("CarolinaShag","Do you like west coast swing? wanna make it more complicated and increase the speed. There ya go",["Misc"],`<img src="https://img.icons8.com/ios/100/000000/sailing-ship-medium.png"/>`,"Paul's Biased belief of this dance is that its difficulty is: "+"9/10"+" its versatility is: "+"lower" +" and its song tempo plus an example is: "+" 4/4 time 27-34 Mpm. Gnarls Barkley: Crazy")

const Lindyhop = new DANCE("Lindyhop"," The first variation of swing. Super fast. Old timey big band. Thats the stuff",["SwingOffshoot"],`<img src="https://img.icons8.com/ios-filled/100/000000/tie.png"/>`,"Paul's Biased belief of this dance is that its difficulty is: "+"7.5/10"+" its versatility is: "+"average" +" and its song tempo plus an example is: "+" 4/4 time 30-45 Mpm. Ella Fitzgerald: Smooth Sailing")
//other

//Smooth
const Smooth = new Category("Smooth","All Dances should be Smooth and all dances should have Rhythm. Being called a Smooth dance just means it has characteristics similar to other'Smooth Dances' . Common characteristics include: Traveling around the floor, Rolling through your feet, and The whole body working in unison",["Waltz","Tango","Foxtrot","VienneseWaltz","American"],"If you dont want to look at your partner these could be your thing.", `<img src="https://img.icons8.com/ios-filled/100/000000/ballroom-dance.png"/>`)

const Waltz = new DANCE("Waltz","Waltz is slow smooth and flowing; The stereotypical disney dance. You like Disney? Maybe try waltz.",["Smooth"],`<img src="https://img.icons8.com/ios-glyphs/100/000000/ballroom-dance.png"/>`,"Paul's Biased belief of this dance is that its difficulty is: "+"5/10"+" its versatility is: "+"low" +" and its song tempo plus an example is: "+" 3/4 time 30-32 Mpm " +`<br>`+`<iframe src="https://8tracks.com/mixes/8980083/player_v3_universal" width="300" height="250" style="border: 0px none;"></iframe>
<p class="_8t_embed_p" style="font-size: 11px; line-height: 12px;"><a href="https://8tracks.com/user_4712154067886/waltz?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">Waltz </a> from <a href="http://8tracks.com/user_4712154067886?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">user_4712154067886</a> on <a href="https://8tracks.com?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">8tracks Radio</a>.</p>`)

const Tango = new DANCE("Tango","Tango is sharp, dramatic, intense. Do you like drama? You Like Tango.",["Smooth"],`<img src="https://img.icons8.com/ios-filled/100/000000/tango.png"/>`,"Paul's Biased belief of this dance is that its difficulty is: "+"6/10"+" its versatility is: "+"above average" +" and its song tempo plus an example is: "+"4/4 time 30-32 Mpm Gotan Project: Santa Maria" +`<br>`+`<iframe src="https://8tracks.com/mixes/8980093/player_v3_universal" width="300" height="250" style="border: 0px none;"></iframe>
<p class="_8t_embed_p" style="font-size: 11px; line-height: 12px;"><a href="https://8tracks.com/user_4712154067886/tango?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">Tango</a> from <a href="http://8tracks.com/user_4712154067886?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">user_4712154067886</a> on <a href="https://8tracks.com?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">8tracks Radio</a>.</p>` )

const Foxtrot = new DANCE("Foxtrot","Slow, Sultry, Jazzy, 10/10 good to walk and snap your fingers to.",["Smooth"],`<img src="https://img.icons8.com/windows/100/000000/groom.png"/>`,"Paul's Biased belief of this dance is that its difficulty is: "+"7/10"+"  its versatility is: "+"average"+" and its song tempo plus an example is: "+"30-34 mpm  Three Dog Night: One, or anything Frank Sinatra"+`<br>`+`<iframe src="https://8tracks.com/mixes/8979954/player_v3_universal" width="300" height="250" style="border: 0px none;"></iframe>
<p class="_8t_embed_p" style="font-size: 11px; line-height: 12px;"><a href="https://8tracks.com/user_4712154067886/foxtrot?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">Foxtrot </a> from <a href="http://8tracks.com/user_4712154067886?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">user_4712154067886</a> on <a href="https://8tracks.com?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">8tracks Radio</a>.</p>` )

const VienneseWaltz = new DANCE("VienneseWaltz","Like waltz? Lets double the speed",["Smooth"],`<img src="https://img.icons8.com/ios-filled/100/000000/speed.png"/>`,"Paul's Biased belief of this dance is that its difficulty is: "+" 8.5/10"+" its versatility is: "+"average"+" and its song tempo plus an example is: "+ "3/4 time 54-46 Mpm "+`<br>`+`<iframe src="https://8tracks.com/mixes/8979950/player_v3_universal" width="300" height="250" style="border: 0px none;"></iframe>
<p class="_8t_embed_p" style="font-size: 11px; line-height: 12px;"><a href="https://8tracks.com/user_4712154067886/viennese-waltz-smooth?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">Viennese Waltz (smooth)</a> from <a href="http://8tracks.com/user_4712154067886?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">user_4712154067886</a> on <a href="https://8tracks.com?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">8tracks Radio</a>.</p>`)

//Smooth

//Alternatives
const Alternatives = new Category("Alternatives","Alternative Dances are dances that dont really fall into Rhythm or Smooth categories. The American ballroom community still competes in it though. ",["WestCoastSwing","Merengue","Samba","PasoDoble","American"],"Alternative Dances.... nice of them to give you options...", `<i class="fas fa-question fa-10x"></i>`)

//Alternatives
const WestCoastSwing = new DANCE("WestCoastSwing","While West coast swing was designed not to rock boats. It rocks. it also works on both coasts.It also works for almost everything",["Alternatives"],`<img src="https://img.icons8.com/ios/100/000000/sail-boat.png"/>`,"Paul's Biased belief of this dance is that its difficulty is:  8/10 its versatility is: very versatile and its song tempo plus an example is: 4/4 time 28-32 Mpm "+`<br>`+`<iframe src="https://8tracks.com/mixes/8980100/player_v3_universal" width="300" height="250" style="border: 0px none;"></iframe><p class="_8t_embed_p" style="font-size: 11px; line-height: 12px;"><a href="https://8tracks.com/user_4712154067886/west-coast?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">West Coast</a> from <a href="http://8tracks.com/user_4712154067886?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">user_4712154067886</a> on <a href="https://8tracks.com?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">8tracks Radio</a>.</p>`)

const Merengue = new DANCE("Merengue","Want to dance a dance originally made for a man with a peg leg? This is the one for you",["Alternatives"], `<img src="https://img.icons8.com/ios/100/000000/amputee.png"/>`,"Paul's Biased belief of this dance is that its difficulty is: "+" 2/10"+" its versatility is:  above average and its song tempo plus an example is: 4/4 time 29-32 Mpm " +`<br>`+`<iframe src="https://8tracks.com/mixes/8980103/player_v3_universal" width="300" height="250" style="border: 0px none;"></iframe>
<p class="_8t_embed_p" style="font-size: 11px; line-height: 12px;"><a href="https://8tracks.com/user_4712154067886/merengue?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">Merengue</a> from <a href="http://8tracks.com/user_4712154067886?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">user_4712154067886</a> on <a href="https://8tracks.com?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">8tracks Radio</a>.</p>` )

const Samba = new DANCE("Samba","Imagine waltz, then mix it with a raging party. Kinda a contradiction but super fun.",["Alternatives"],`<img src="https://img.icons8.com/color/100/000000/brazilian-carnival.png"/>`,"Paul's Biased belief of this dance is that its difficulty is:  9/10 its versatility is: above average and its song tempo plus an example is: 2/4 time 54-56 Mpm   "+`<br>`+`<iframe src="https://8tracks.com/mixes/8980101/player_v3_universal" width="300" height="250" style="border: 0px none;"></iframe>
<p class="_8t_embed_p" style="font-size: 11px; line-height: 12px;"><a href="https://8tracks.com/user_4712154067886/samba?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">Samba</a> from <a href="http://8tracks.com/user_4712154067886?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">user_4712154067886</a> on <a href="https://8tracks.com?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">8tracks Radio</a>.</p>`)

const PasoDoble = new DANCE("PasoDoble","Dont get enough adrenaline in your life. Want to fight a bull? Want to cultivate a relationship with your cape? This is for you",["Alternatives"],`<img src="https://img.icons8.com/ios-filled/100/000000/bull.png"/>`,"Pauls Biased belief of this dance is that its difficulty is:  7/10 its versatility is: Low and its song tempo plus an example is: 2/4 time 58-60 Mpm " +`<br>`+`<iframe src="https://8tracks.com/mixes/8980095/player_v3_universal" width="300" height="250" style="border: 0px none;"></iframe>
<p class="_8t_embed_p" style="font-size: 11px; line-height: 12px;"><a href="https://8tracks.com/user_4712154067886/paso-doble?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">Paso Doble</a> from <a href="http://8tracks.com/user_4712154067886?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">user_4712154067886</a> on <a href="https://8tracks.com?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">8tracks Radio</a>.</p>
`)
//American

//International
const International = new Category("International", "International dances are dances competed in by the ballroom community around the world", ["Standard","Latin","Home"],"International Style are mostly danced competitively rather than socially",`<i class="fas fa-globe-americas fa-10x"></>`)
//Standard
const Standard = new Category("Standard", "Standard Dances are dances danced by the competed in by the international ballroom community. They travel around the room, and do not leave the closed hold", ["SlowWaltz","StandardTango", "SlowFoxtrot","Viennese", "Quickstep","International" ],"Standard dances are very similar to american 'Smooth' dances", `<img src="https://img.icons8.com/ios-filled/100/000000/ballroom-dance.png"/>`)

const SlowWaltz = new DANCE("SlowWaltz","Think waltz isnt slow enough? lets slow it down.",["Standard"],`<img src="https://img.icons8.com/ios/100/000000/ballroom-dance.png"/>`,"Pauls Biased belief of this dance is that its difficulty is:  7/10 its versatility is: Low and its song tempo plus an example is: 3/4 time 28-31 Mpm "+`<br>`+`<iframe src="https://8tracks.com/mixes/8980083/player_v3_universal" width="300" height="250" style="border: 0px none;"></iframe><p class="_8t_embed_p" style="font-size: 11px; line-height: 12px;"><a href="https://8tracks.com/user_4712154067886/waltz?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">Waltz </a> from <a href="http://8tracks.com/user_4712154067886?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">user_4712154067886</a> on <a href="https://8tracks.com?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">8tracks Radio</a>.</p>`)

const StandardTango = new DANCE("StandardTango","All the same Tango flair, take away the emphasis on musical phrasing",["Standard"],`<img src="https://img.icons8.com/ios/100/000000/tango.png"/>`,"Pauls Biased belief of this dance is that its difficulty is:  7/10 its versatility is:  above average and its song tempo plus an example is: 4/4 time 32-34 Mpm "+`<br>`+`<iframe src="https://8tracks.com/mixes/8980093/player_v3_universal" width="300" height="250" style="border: 0px none;"></iframe>
<p class="_8t_embed_p" style="font-size: 11px; line-height: 12px;"><a href="https://8tracks.com/user_4712154067886/tango?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">Tango</a> from <a href="http://8tracks.com/user_4712154067886?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">user_4712154067886</a> on <a href="https://8tracks.com?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">8tracks Radio</a>.</p>
` )

const SlowFoxtrot = new DANCE("SlowFoxtrot","Like Foxtrot but instead of traveling in a circle you get to travel in an 'X' ",["Standard"],`<img src="https://img.icons8.com/ios-filled/100/000000/groom.png"/>`,"Pauls Biased belief of this dance is that its difficulty is:  7.5/10 its versatility is: Low and its song tempo plus an example is: 4/4 time 28-30 Mpm"+`<br>`+`<iframe src="https://8tracks.com/mixes/8979954/player_v3_universal" width="300" height="250" style="border: 0px none;"></iframe>
<p class="_8t_embed_p" style="font-size: 11px; line-height: 12px;"><a href="https://8tracks.com/user_4712154067886/foxtrot?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">Foxtrot </a> from <a href="http://8tracks.com/user_4712154067886?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">user_4712154067886</a> on <a href="https://8tracks.com?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">8tracks Radio</a>.</p>`)

const Viennese = new DANCE("Viennese","So lets take Viennese but speed it up even more",["Standard"],`<img src="https://img.icons8.com/ios/100/000000/fast-download.png"/>`,"Pauls Biased belief of this dance is that its difficulty is:  8/10 its versatility is: average and its song tempo plus an example is: 3/4 time 56-60 Mpm " +`<br>`+`<iframe src="https://8tracks.com/mixes/8980096/player_v3_universal" width="300" height="250" style="border: 0px none;"></iframe>
<p class="_8t_embed_p" style="font-size: 11px; line-height: 12px;"><a href="https://8tracks.com/user_4712154067886/viennese?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">Viennese</a> from <a href="http://8tracks.com/user_4712154067886?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">user_4712154067886</a> on <a href="https://8tracks.com?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">8tracks Radio</a>.</p>`)

const Quickstep = new DANCE("Quickstep","Lets say Swing and Foxtrot had a baby, then filled it with sugar. thats what you are getting in to ",["Standard"],`<img src="https://img.icons8.com/ios-filled/100/000000/hyperactive.png"/>`,"Pauls Biased belief of this dance is that its difficulty is:  9/10 its versatility is: Low and its song tempo plus an example is: 4/4 time 50-52 Mpm " +`<br>`+`<iframe src="https://8tracks.com/mixes/8980098/player_v3_universal" width="300" height="250" style="border: 0px none;"></iframe>
<p class="_8t_embed_p" style="font-size: 11px; line-height: 12px;"><a href="https://8tracks.com/user_4712154067886/quickstep?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">Quickstep</a> from <a href="http://8tracks.com/user_4712154067886?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">user_4712154067886</a> on <a href="https://8tracks.com?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">8tracks Radio</a>.</p>`)
//Standard
//Latin
const Latin = new Category("Latin", "Latin dances are one of the categorys the international ballroom community competes in. In latin dances people often go out of closed holds for moves and use a latin body motion to highlight the dance.", ["ChaChaCha","LatinRumba","InternationalSamba","Paso","Jive","International"],"Latin dances are like American's Rhythm dances.", `<img src="https://img.icons8.com/emoji/100/000000/dancing-girl.png"/>`)

const ChaChaCha = new DANCE("ChaChaCha","Do you like fast? do you like flirty? Add in some latin movement and voila!",["Latin"],`<img src="https://img.icons8.com/ios-filled/100/000000/wink.png"/>`,"Pauls Biased belief of this dance is that its difficulty is: "+" 7.5/10"+" its versatility is: "+"average"+" and its song tempo plus an example is: "+ "4/4 time 32-34 Mpm "+`<br>`+`<iframe src="https://8tracks.com/mixes/8979936/player_v3_universal" width="300" height="250" style="border: 0px none;"></iframe>
<p class="_8t_embed_p" style="font-size: 11px; line-height: 12px;"><a href="https://8tracks.com/user_4712154067886/cha-cha-rhythm?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">Cha Cha (Rhythm)</a> from <a href="http://8tracks.com/user_4712154067886?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">user_4712154067886</a> on <a href="https://8tracks.com?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">8tracks Radio</a>.</p>` )

const LatinRumba = new DANCE("LatinRumba","If Slow, Romantic, and latin flair are things that speak to you...",["Latin"],`<img src="https://img.icons8.com/ios-glyphs/100/000000/rose.png"/>`,"Pauls Biased belief of this dance is that its difficulty is: "+" 8/10"+" its versatility is: "+"average"+" and its song tempo plus an example is: "+ "4/4 time 25 Mpm " +`<br>`+`<iframe src="https://8tracks.com/mixes/8980146/player_v3_universal" width="300" height="250" style="border: 0px none;"></iframe>
<p class="_8t_embed_p" style="font-size: 11px; line-height: 12px;"><a href="https://8tracks.com/user_4712154067886/rumba-latin?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">Rumba (Latin)</a> from <a href="http://8tracks.com/user_4712154067886?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">user_4712154067886</a> on <a href="https://8tracks.com?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">8tracks Radio</a>.</p>`)

const InternationalSamba = new DANCE("InternationalSamba","Also Known as the Brazilian Waltz...its nothing like waltz.Theres a reason this dance is notorious for being a blast... ",["Latin"],`<img src="https://img.icons8.com/ios-filled/100/000000/brazil.png"/>`,"Pauls Biased belief of this dance is that its difficulty is: "+" 9/10"+" its versatility is: "+" above average"+" and its song tempo plus an example is: "+ "2/4 time 50mpm " +`<br>`+`<iframe src="https://8tracks.com/mixes/8980101/player_v3_universal" width="300" height="250" style="border: 0px none;"></iframe>
<p class="_8t_embed_p" style="font-size: 11px; line-height: 12px;"><a href="https://8tracks.com/user_4712154067886/samba?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">Samba</a> from <a href="http://8tracks.com/user_4712154067886?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">user_4712154067886</a> on <a href="https://8tracks.com?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">8tracks Radio</a>.</p>`)

const Paso = new DANCE("Paso","Do you need more adrenaline in your life? Do you need more stamping? Go fight some bulls.",["Latin"],`<img src="https://img.icons8.com/ios-glyphs/100/000000/bull.png"/>`,"Pauls Biased belief of this dance is that its difficulty is:  8/10 its versatility is: Low and its song tempo plus an example is: 2/4 time 60-62 Mpm Billie Eilish : Bury a Friend"+`<br>`+`<iframe src="https://8tracks.com/mixes/8980095/player_v3_universal" width="300" height="250" style="border: 0px none;"></iframe>
<p class="_8t_embed_p" style="font-size: 11px; line-height: 12px;"><a href="https://8tracks.com/user_4712154067886/paso-doble?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">Paso Doble</a> from <a href="http://8tracks.com/user_4712154067886?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">user_4712154067886</a> on <a href="https://8tracks.com?utm_medium=referral&utm_content=mix-page&utm_campaign=embed_button">8tracks Radio</a>.</p>`)

const Jive = new DANCE("Jive","The international community's take on swing.... they decided to speed it up.",["Latin"],`<img src="https://img.icons8.com/wired/100/000000/dancing-party.png"/>`,"Pauls Biased belief of this dance is that its difficulty is: "+" 7/10"+" its versatility is: "+"average"+" and its song tempo plus an example is: "+ "4/4 time 44-52 Mpm The Weekend : Blinding Lights")
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
    const objectArray = [Home,American,International,Other,Rhythm,ChaCha,Rumba,EastCoastSwing,Bolero,Mambo,Smooth,Waltz,Tango,Foxtrot,VienneseWaltz,Alternatives,WestCoastSwing,Samba,Merengue,PasoDoble,Standard,SlowWaltz,StandardTango,SlowFoxtrot,Viennese,Quickstep,Latin,LatinRumba,Paso,Jive,ChaChaCha,InternationalSamba,StreetLatin,Club,Country,Misc, Bachata, Zouk, Kizomba,Forro,Cumbia, Salsa, Blues, NightClub2Step, Hustle,TwoStep,ThreeStep,CountrySwing,CountryWaltz, SwingOffshoot,Balboa,CollegiateShag,Argentine,Peabody, Lindyhop,Polka,CarolinaShag]
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