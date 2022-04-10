// Your code here

const BASE_URL = "http://localhost:3000/films";

$(document).ready(()=>{
    fetchMovies()
    $('#buy-ticket').on('click', ()=>{buyTicket()})
})

function fetchMovies(){

    fetch(BASE_URL)
        .then((response) => response.json())
        .then( (output) => {
            let i = 0;
            output.forEach(
                (film) => {
                    if (i === 0){
                        showMovie(film)
                    }
                    let item = $(`<li class="film item">${film.title}</li>`)
                    item.on("click", ()=>{showMovie(film)})
                    $('#films').append(item)
                    i++;
                }
            )
        })
}

function showMovie(movie){
    $('#title').html(movie.title);
    $('#runtime').html(`${movie.title} minutes`);
    $('#film-info').html(`${movie.description}`);
    $('#showtime').html(`${movie.showtime}`);
    $('#ticket-num').html(`${movie.capacity - movie.tickets_sold}`);
    $('#poster').attr("src",movie.poster);
}

function buyTicket(){
    const ticketHolder = $('#ticket-num');
    let tickets = ticketHolder.text();
    tickets = parseInt(tickets);

    if(tickets > 0){
        tickets--;
        ticketHolder.html(tickets);
    }else{
        alert("This movie has no tickets left");
    }


}

