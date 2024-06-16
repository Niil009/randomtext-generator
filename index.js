let passwordBox = document.getElementById('password')
let length = 12
let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let lowercase = 'abcdefghijklmnopqrstuvwxyz'
let numbers = '0123456789'
let symbol = '~!@#$%^&*()_+}{|":<>?<>,."}'
let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+}{|":<>?<>,."}'
function generatePassword() {
    let password = ''
    password += uppercase[Math.trunc(Math.random() * uppercase.length)]
    password += lowercase[Math.trunc(Math.random() * lowercase.length)]
    password += numbers[Math.trunc(Math.random() * numbers.length)]
    password += symbol[Math.trunc(Math.random() * symbol.length)]
    while (length > password.length) {
        password += chars[Math.trunc(Math.random() * chars.length)]
    }
    passwordBox.value = password
}
function copyPassword() {
    passwordBox.select()
    document.execCommand("copy")
}
