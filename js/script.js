const CurrentYear = document.getElementById("date")
const mobileNav = document.getElementById('mobile-nav');
const date = new Date()

const year = date.getFullYear()
CurrentYear.innerHTML = year
console.log(year)

const toggleHam = () => {
  mobileNav.classList.toggle('show');
}
