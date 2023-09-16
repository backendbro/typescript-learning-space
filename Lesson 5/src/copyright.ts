const year = document.getElementById("year") as HTMLSpanElement
const thisYear:any = new Date().getFullYear()

year.setAttribute("datetime", thisYear)
year.textContent = thisYear