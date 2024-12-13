function homelibrary(){
    window.location.assign('../Yr-9 PBL/pages/books.html');
}
function homeGuide(){
    window.location.assign('../Yr-9 PBL/pages/services.html');
}
function guide(){
    window.location.assign('../pages/services.html');
}
function home(){
    window.location.assign('../index.html');
}
function library(){
    window.location.assign('../pages/books.html');
}

function showContent(contentId) {

    document.querySelectorAll('.content').forEach(content => {
        content.classList.remove('active');
    });

    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.classList.remove('active');	
    });

    document.getElementById(contentId).classList.add('active');
    event.target.classList.add('active');
}

function active(){
    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.classList.remove('active');	
    });
    event.target.classList.add('active');

    let name = event.target.innerHTML;
    document.getElementById('bookGenre').innerHTML = name;
}

let filterContainer = document.querySelector('.sidebar-books-menu');
let gItems = document.querySelectorAll('.book');
// let motherhouse = document.querySelector('tab-content-books');
filterContainer.addEventListener('click', function(event){
    //alert('sc');
    if(event.target.classList.contains('book-genre')){
        //deactive the existing one
        filterContainer.querySelector('.active').classList.remove('active');
        //active the new item
        event.target.classList.add('active');

        const filterValue = event.target.getAttribute('data-filter');

        gItems.forEach((item)=>{
            if(item.classList.contains(filterValue) || filterValue === "all"){
                item.classList.add('show');
                item.classList.remove('hide');
            }else{
                item.classList.add('hide');
                item.classList.remove('show');
            }
        });
    }
});