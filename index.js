var randomnumber1 = Math.random();
randomnumber1 = Math.floor(randomnumber1 * 6) + 1;
var randomimg = "dice" + randomnumber1 + ".png";
var randomimgsource = "images/" + randomimg;

document.querySelector(".img1").setAttribute("src", randomimgsource);

var randomnumber2 = Math.random();
randomnumber2 = Math.floor(randomnumber2 * 6) + 1;
var randomimg2 = "dice" + randomnumber2 + ".png";
var randomimgsource2 = "images/" + randomimg2;

document.querySelector(".img2").setAttribute("src", randomimgsource2);

if(randomnumber1 > randomnumber2)
{
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins";
}
else if(randomnumber1 < randomnumber2)
{
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
}
else
{
    document.querySelector("h1").innerHTML = "🚩 It's a Draw 🚩";
}

