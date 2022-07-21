let todoInput //todo info
let errorInfo //info about no exist todo position
let addBtn //button ADD
let ulList //todo lists

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
}

const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todoList ul')
}

const prepareDOMEvents = () => {}

document.addEventListener('DOMContentLoaded', main)
