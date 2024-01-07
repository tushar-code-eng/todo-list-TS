import './css/style.css'
import FullList from './model/FullList'
import ListItem from './model/LIstItem'
import ListTemplate from './Templates/ListTemplate'

const initApp = (): void => {
  const fullList = FullList.instance
  const template = ListTemplate.instance

  const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement

  itemEntryForm.addEventListener("submit", (event: SubmitEvent): void => {
    event.preventDefault()
    const input = document.getElementById("newItem") as HTMLInputElement
    const newEntryText: string = input.value.trim()
    if(!newEntryText.length) return //not necessary to write this

    const itemId: number = fullList.list.length ? parseInt(fullList.list[fullList.list.length-1].id) + 1 : 1

    const newItem = new ListItem(itemId.toString(),newEntryText)

    fullList.addItem(newItem)

    template.render(fullList)
  })

  const clearItems = document.getElementById("clearItemsButton") as HTMLButtonElement

  clearItems.addEventListener('click', (): void => {
    fullList.clearList() // this is clearing the data - backend
    template.clear() //this is clearing the list - frontend
  })

  fullList.load()
  template.render(fullList)

}

document.addEventListener("DOMContentLoaded", initApp)
