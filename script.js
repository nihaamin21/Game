let games =[
{
    "gameName":"Team Sonic Racing ",
    "detail":` Sonic races in a car as a handicap because there'd be no 
                contest if he was running on foot.`,
    "imageURL":"1.jpg",
    "Platforms":"PS4, Xbox One, Switch, PC",
    "release date":"Winter 2018",
    "Read more on":"https://www.gamesradar.com/new-games-2018/"
    
}
,
{
    "gameName":"Battle Princess Madelyn ",
    "detail":`If Ghouls 'n' Ghosts swapped out Arthur and his heart-emblazoned boxers 
    for a heroic,a loving tribute to Capcom's legendarily difficult 2D platformers.`,
    "imageURL":"2.jpg",
    "Platforms":"Switch, PS4, Xbox One, PC, Wii U, PS Vita",
    "release date":"TBC 2018",
    "Read more on":"https://www.gamesradar.com/new-games-2018/"
    
}
,
{
    "gameName":"Battlefield 5 ",
    "detail":`Battlefield 5 is taking the series back to its World War 2 roots.`,
    "imageURL":"3.jpg",
    "Platforms":"PS4, Xbox One, PC",
    "release date":"October 19, 2018",
    "Read more on":"https://www.gamesradar.com/new-games-2018/"
}
,
{
    
    "gameName":"Super Mario Party",
    "detail":`If you've had a hankering for multiplayer minigames and last-minute 
                star-count upsets,you're in luck.`,
    "imageURL":"4.jpg",
    "Platforms":"Switch",
    "release date":"October 5, 2018",
    "Read more on":"https://www.gamesradar.com/new-games-2018/"
}
,
{
    
    "gameName":"Forza Horizon 4 ",
    "detail":`Forza Horizon 4 looks to deliver the same fun, open-world,
             now with a heavy emphasis on the changing of the seasons.`,
    "imageURL":"5.jpg",
    "Platforms":"Xbox One, PC",
    "release date":"October 2, 2018",
    "Read more on":"https://www.gamesradar.com/new-games-2018/"
}
,
{

    "gameName":"Yakuza Kiwami 2",
    "imageURL":"6.jpg",
    "detail":`Just as Yakuza Kiwami remade the first game in this long-running,
                 open-world crime series,`,
    "Platforms":"PS4",
    "release date":" August 28, 2018",
    "Read more on":"https://www.gamesradar.com/new-games-2018/"
    
}
,
{
    
    "gameName":"World of Warcraft: Battle for Azeroth ",
    "detail":`Blizzard's touchstone MMO is still going strong after almost 14 years worth of content, 
            and its seventh expansion.`,
    "imageURL":"7.jpg",
    "Platforms":"PC",
    "release date":"August 14, 2018",
    "Read more on":"https://www.gamesradar.com/new-games-2018/"
}
,
{
    "gameName":"Ooblets ",
    "detail":`Nothing can prepare you for the unbridled cuteness of Ooblets. `,
    "imageURL":"8.jpg",
    "Platforms":"Xbox One, PC",
    "release date":"TBC 2018",
    "Read more on":"https://www.gamesradar.com/new-games-2018/"
}
,
{
    "gameName":"Spyro Reignited Trilogy ",
    "detail":`Not to be outdone by the revival of Sony's other would-be mascot in Crash Bandicoot N.`,
    "imageURL":"9.jpg",
    "Platforms":"PS4, Xbox One",
    "release date":"September 21, 2018",
    "Read more on":"https://www.gamesradar.com/new-games-2018/"
}
,
{
    
    "gameName":"Shadow of the Tomb Raider ",
    "detail":`Lara Croft will be struggling to survive once more in Shadow of the Tomb Raider.`,
    "imageURL":"10.jpg",
    "Platforms":" PS4, Xbox One, PC",
    "release date":" September 14, 2018",
    "Read more on":"https://www.gamesradar.com/new-games-2018/"
}
,
{
    "gameName":"Wargroove  ",
    "detail":`It seems Nintendo isn't about to revive Advance Wars any time soon `,
    "imageURL":"11.jpg",
    "Platforms":"Switch, Xbox One, PC",
    "release date":" Second half 2018",
    "Read more on":"https://www.gamesradar.com/new-games-2018/"
}
,
{
    "gameName":"Spider-Man ",
    "detail":`This open-world superhero game should be an interesting departure for Insomniac Games.`,
    "imageURL":"12.jpg",
    "Platforms":"PS4",
    "release date":"September 7, 2018",
    "Read more on":"https://www.gamesradar.com/new-games-2018/"
}
,
{
    "gameName":"Strange Brigade ",
    "detail":`One look at Strange Brigade, and you'll wonder why nobody thought to make a 
            co-op monster shooter set in the 1930s sooner.`,
    "imageURL":"13.jpg",
    "Platforms":"PS4, Xbox One, Switch, PC",
    "release date":"August 28, 2018",
    "Read more on":"https://www.gamesradar.com/new-games-2018/"
}
,
{
    "gameName":"Overcooked 2",
    "detail":`The original Overcooked became an instant co-op classic.`,
    "imageURL":"14.jpg",
    "Platforms":" Switch, PS4, Xbox One, PC",
    "release date":"August 7, 2018",
    "Read more on":"https://www.gamesradar.com/new-games-2018/"
}
,
{
    "gameName":"Pokemon: Let's Go Pikachu and Eevee ",
    "detail":`Pokemon: Let's Go Pikachu . `,
    "imageURL":"15.jpg",
    "Platforms":"Switch",
    "Release date":"November 16, 2018",
    "Read more on":"https://www.gamesradar.com/new-games-2018/"
}
]

function initialize(){
    let bodyEl=document.querySelector(".group-div");
    for(let i=0; i< games.length; i++){
 
        bodyEl.innerHTML+= `<div class="cards-list" 
                            style='background-image: 
                            url(images/${games[i].imageURL}' onclick="changeGameDetails(${i})">
                            <p class="card-para" onlick="mouse:hover">${games[i].gameName}</p>
                            </div>`
    }
}
function changeGameDetails(indexNum){
    document.querySelector("#game-name").innerHTML=`${games[indexNum].gameName}`;
    document.querySelector("#game-title").innerHTML=`${games[indexNum].Platforms}`;
    document.querySelector("#game-date").innerHTML=`${games[indexNum]["release date"]}`; 
    document.querySelector("#game-img").style["background-image"]=`url(images/${games[indexNum].imageURL})`;
    document.querySelector("#game-info").innerHTML=`${games[indexNum].detail}`;
    document.querySelector("#game-link").href=`${games[indexNum]["Read More"]}`;

}