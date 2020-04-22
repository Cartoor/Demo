const container = document.querySelector(".container")
const seats = document.querySelectorAll(".row .seat:not(occupied)")
const count = document.getElementById("count")
const total = document.getElementById("total")
const movieSelect = document.getElementById("movie")
let tickerPrice = movieSelect.value

populateUI()


// 更新已选座位价格文本
function updateSelectedCount () {
  const selectedSeats = document.querySelectorAll(".container .row .selected")
  
  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat))
  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex))

  const selectedSeatsCount = selectedSeats.length
  count.innerText = selectedSeatsCount
  total.innerText = selectedSeatsCount * tickerPrice
}

// 保存电影票及价格信息
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex)
  localStorage.setItem("selectedMoviePrice", moviePrice)
}

// 监听座位点击事件
container.addEventListener('click', e => {
  if(e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied') 
    ) {
      e.target.classList.toggle('selected')

      updateSelectedCount()
    }
})

// 监听电影票更变事件
movieSelect.addEventListener('change', e => {
  tickerPrice = +e.target.value
  setMovieData(e.target.selectedIndex, e.target.value)
  updateSelectedCount()
})

function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) !== -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}
updateSelectedCount()