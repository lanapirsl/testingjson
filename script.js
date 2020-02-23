const link="https://spreadsheets.google.com/feeds/list/1fj4-OQKzaFXX5ptgOnnXImXkKOSpYKNyeVcumszGcB8/od6/public/values?alt=json";
window.addEventListener("DOMContentLoaded", getData);

function getData(){
    fetch(link)
    .then(res=>res.json())
    .then(handleData);
}
function handleData(data){
    const myData=data.feed.entry;
    console.log("myData - console");
    console.log(myData);
    myData.forEach(showData)
}
function showData(singleRowData){
    console.log("singlkeRowData - console");
    console.log(singleRowData.gsx$name.$t)
}
function loadVideoDaniel(videoid){
document.getElementById("danielPlayer").src="https://www.youtube.com/embed/"+videoid
}function loadVideoMatt(videoid){
document.getElementById("mattPlayer").src="https://www.youtube.com/embed/"+videoid
}function loadVideoNikola(videoid){
document.getElementById("nikolaPlayer").src="https://www.youtube.com/embed/"+videoid
}function loadVideoLana(videoid){
document.getElementById("lanaPlayer").src="https://www.youtube.com/embed/"+videoid
}function loadVideoJose(videoid){
document.getElementById("josePlayer").src="https://www.youtube.com/embed/"+videoid
}