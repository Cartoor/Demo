const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

// show Error
function showError (input, message) {
  const formControl = input.parentElement
  formControl.className = "form-control error"
  const small = formControl.querySelector('small')
  small.innerText = message
} 

// show Success
function showSuccess(input) {
  const formControl = input.parentElement
  formControl.className = "form-control success"
}

// Email Validator
function checkEmail(email) {
  const re = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
  if(!re.test(email.value.trim())) {
    showError(email, "邮箱格式错误")
  } else {
    showSuccess(email)
  }
}

// Get Key Word
function getKeyWord(input) {
  return input.placeholder.slice(3)
}

// Check Required
function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if(input.value.trim() === "") {
      showError(input, `${getKeyWord(input)}为必选项`)
    } else {
      showSuccess(input)
    }
  })
}

// Check Length
function checkLength(input, min, max) {
  if(input.value.length < min) {
    showError(input, `${getKeyWord(input)}至少需要${min}个字符`)
  } else if(input.innerText.length > max) {
    showError(input, `${getKeyWord(input)}不得超过${max}个字符`)
  } else {
    showSuccess(input)
  }
}

// Password compared
function checkPasswordMatch(pass1, pass2) {
  if(pass1.value !== pass2.value) {
    showError(pass2, "两次密码不一致")
  } else {
    showSuccess(pass2)
  }
}

//check
function check() {
  checkRequired([username, email, password, password2])
  checkLength(username, 3, 12)
  checkLength(password, 6, 15)
  checkEmail(email)
  checkPasswordMatch(password, password2)
}

// Event Listen
form.addEventListener('submit', (e) => {
  e.preventDefault()

  check()
})