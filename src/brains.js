const doc = window.document
const customText = doc.querySelector('#custom-text')
const sample = doc.querySelectorAll('.sample-text')

customText.addEventListener('input', updateValue)

function updateValue(e) {
  sample.forEach((element) => {
    element.textContent = e.target.value
  })
}

//null out the value of sample text in the HTML
/* think about adding
  if !(customText) {
    sample = "Some cool string of text, possibly philosophical"
  }
*/
//but also consider maybe leaving the sample text empty after user
//deletes input, and only set up default sample text if Reset is clicked