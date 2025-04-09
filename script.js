document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("text").textContent = "Text has been updated!";
});

document.getElementById("toggleElementBtn").addEventListener("click", function() {
    let div = document.getElementById("dynamicDiv");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
});
