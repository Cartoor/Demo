let a

for(let i = 0; i < 10; i++) {
  a = document.createElement("p")
  a.innerHTML = i
  a.addEventListener("click", (e) => {
    e.preventDefault()
    alert(i)
  })
  document.body.appendChild(a)
}