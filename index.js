
function remove(newsId) {
    const article = document.getElementById(newsId);
    article.remove()
    console.log("to be removed")

}

const favorites = document.querySelectorAll(".heart");

favorites.forEach((favorite) => {
    favorite.addEventListener("click", () => {
     favorite.classList.toggle("on");
     console.log("like")
    });
   
});


function markAsRead(read){ 
    document.querySelector(`#${read} .check-icon`).style.visibility = 'visible';
    console.log('read');
}



