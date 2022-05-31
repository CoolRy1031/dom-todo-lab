const ipt = document.querySelector('input')
const btn = document.querySelector('button')
const list = document.querySelector('#todo-list')


btn.addEventListener('click', function(evt){
  const li = document.createElement('li')
  li.textContent = ipt.value
  document.querySelector('ul').appendChild(li)
  ipt.value = ''

})