function test(){
alert("test");
}
function answer(svar){
alert(svar);
}
var people = [
["American history X",1998,"film made by Tony Kaye, crime and drama"],
["Fight club",1999,"Film made by David Fincher, Drama"],
["Forrest gump",1994,"Film made by Robert Zemeckis, Comedy and drama"],
["The godfather",1972,"Film made by Francis Ford Coppola, Crime and drama"],
["Inception",2010,"Film made by Cristopher Nolan, Action, Adventure and Sci-fi"],
["Pulp fiction",1994,"Film made by Quentin Tarrantino, Crime and drama"],
["Schindlers list",1993,"Film made by Steven Spielberg, Biography, drama and history"],
["Shawshank redemption",1994,"Film made by Frank Darabont, Crime and drama"],
["Silence of the lambs",1991,"Film made by Jonathan Demme, Crime, drama and thriller"],
["The dark knight",2008,"Film made by Christopher Nolan, Action, crime and drama"]
];

function search2dv2(what, find, ind, cell){
    for(var i= 0, L= what.length; i<L; i++){
        if(what[i][ind]=== find) return "Name:" + " " + what[i][0] + ", " + "Year:" + " " +  what[i][1] + ", " + "Info: "+ " " + what[i][2];
		
    }
	
    return 'didnt find anything with that title';
}

function findx2(stringx) {
//stringx = "john1"
document.getElementById("resultat").innerHTML = search2dv2(people, stringx ,0, 2);
}