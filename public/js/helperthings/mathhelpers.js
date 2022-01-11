
const monthlybillsEL = document.querySelector('#monthly-bills')
const monthlyincomeEL = document.querySelector('#monthly-income')
const leaves = document.querySelector('#leaves')
const checkingEL = document.querySelector('#checking-account')

const dueDateEL = document.querySelector('#formal-due')
const beforeEL = document.querySelector('#due-before')
const newCheckingEL = document.querySelector('#new-checking')

const billCostEL = document.querySelectorAll('.bill-cost')
const billNameEL = document.querySelectorAll('.bill-name')
const informalDueDatesEL = document.querySelectorAll('.informal-due-date')



billCostEL.forEach(element => {

  let x = parseInt(element.innerHTML).toLocaleString()
  element.textContent = `$${x}`
});

informalDueDatesEL.forEach(element => {
  let x = element.innerHTML.split("-")
  let y = [`${x[1]}/`, `${x[2]}/`, `${x[0]}`].join('')
  element.textContent = y
});
// not finished!
billNameEL.forEach(element => {
  let arr = element.innerHTML.split("")
  // console.log(arr)
  let index = undefined
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === "&") { index = i }
  }
  arr = arr.filter(data => data != "&").map(data => data.toUpperCase())
  // console.log(arr)
  if (index != undefined) {
    arrss = arr.splice(index, 4, "&")
    // console.log(arrss)
  }

  element.textContent = `${arr.join("")}`
})



const leftOverCalculation = () => {
  let arr = monthlybillsEL.innerHTML.split(",").filter(data => data != '').map(data => parseInt(data))
  let x = 0
  arr.forEach(element => {
    x += element
  });
  // console.log(x);

  let income = monthlyincomeEL.innerHTML
  let billtotal = x
  let newone = parseInt(income.split("").filter(data => data != "$").filter(data => data != ",").join(""))
  let leftover = newone - billtotal


  console.log(newone, billtotal, leftover)


  monthlyincomeEL.textContent = `${income}`
  monthlybillsEL.textContent = ` - $${billtotal.toLocaleString()}`

  if (leftover < 0) { leftover *= -1; leaves.textContent = `- $${leftover.toLocaleString()}` }
  else { leaves.textContent = `+ $${leftover.toLocaleString()}` }

}


const newCheckingBalance = () => {

  dueDateEL.text
}

leftOverCalculation()

