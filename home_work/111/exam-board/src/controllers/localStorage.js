

export const saveDataLS = (key, data) => {

    localStorage.setItem('tasks', JSON.stringify(Store.tasks))

}

export const loadDataLS = (key, data) => {

    return JSON.parse(localStorage.getItem('tasks')) || []

   }