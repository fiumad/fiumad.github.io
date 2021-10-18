function copyText(){
    var text = document.getElementById("discord");
    text.select();
    text.setSelectionRange(0,99999);
    document.execCommand("copy");
    alert("Copied the text: " + text.value);
    console.log("copied");

var tooltip = document.getElementById("myTooltip");
tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
var tooltip = document.getElementById("myTooltip");
tooltip.innerHTML = "Copy to clipboard";
}
