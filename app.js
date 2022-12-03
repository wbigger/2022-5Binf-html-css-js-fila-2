
let onFirst = function() {
    console.log("onFirst");
    $(".grid-item.first-col").addClass("selected");
}

let onSecond = function() {
    console.log("onSecond");
    $(".grid-item.second-col").addClass("selected");
}

let onThird = function() {
    console.log("onThird");
    $(".grid-item.third-col").addClass("selected");
}
let onDispari = function() {
    $(".grid-item.dispari").addClass("selected");
}

let onItem = function() {
    let animal = $(this).data("animal");
    console.log(animal);
    $(`.grid-item[data-animal=${animal}]`).addClass("gold");
}

let init = function() {
    $(".grid-item").click(onItem);    
    $(".grid-item[data-animal='dog']>img").attr("src","img/dog.png").addClass("dog");
    $(".grid-item[data-animal='cat']>img").attr("src","img/cat.png").addClass("cat");
    $(".grid-item[data-animal='fox']>img").attr("src","img/fox.png").addClass("fox");
}

$(document).ready(init);