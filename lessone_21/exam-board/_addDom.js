


 export function addDom () {

    const $container = document.querySelector('#app')
    // ____________________________________________________________Sitebar__________________________________________________________
    const $sitebar = document.createElement('div')
    $container.append($sitebar)
    $sitebar.className = 'sitebar'
    $sitebar.innerHTML = `
        <div class='logo'><img src="images/logo.svg" alt=""></div>
        <div class="container-nav-item">
            <div class='item item-active'><img src="images/check.svg" alt=""></div>
            <div class='item'><img src="images/flag.svg" alt=""></div>
        </div>
        <div class='footer'>
            <div class='item'><img src="images/settings.svg" alt=""></div>
            <hr>
            <div class='avatar'><img src="images/avatar.svg" alt=""></div>
        </div>
    `

    // ____________________________________________________________Main________________________________________________________________
    const $main = document.createElement('div')
    $container.append($main)
    $main.className = 'main'

    // _________________________________________________________Main__Header__________________________________________________________________
    const $header = document.createElement('div')
    $main.append($header)
    $header.className = 'header'
    $header.innerHTML = `
        <h1> Plans</h1>
        <div data-name='add-task' class='button button-primory'>
            <img src="images/add.svg" alt="">
            <span>Add task</span>
        </div>
    `

    // _________________________________________________________Main__FilterSearch_________________________________________________________________
    const $filtersSearch = document.createElement('div')
    $main.append($filtersSearch)
    $filtersSearch.className = 'filters-search'

    // _______________________________________________________Main__FilterSearch_Filter_______________________________________________________________
    const $filters = document.createElement('div')
    $filters.className = 'filters'
    $filtersSearch.append($filters)
    $filters.innerHTML = `
        <div class='button'>
            <span>All projects</span>
            <img src="images/cancel.svg" alt="">
        </div>
        <div class='button'>
            <span>Done, New, In prodress</span>
            <img src="images/cancel.svg" alt="">
        </div>
        <div class='button'>
            <img src="images/filter.svg" alt="">
            <span>More filters</span>
        </div>
    `

    // ____________________________________________________Main__FilterSearch_Search___________________________________________________________________
    const $search = document.createElement('div')
    $search.className = 'search'
    $filtersSearch.append($search)
    $search.innerHTML = `
        <img src="images/search.svg" alt="">
        <input id="task-search" type="text" placeholder="Search">
    `

    // _______________________________________________________Main__ContainerTask______________________________________________________________________
    const $containerTask = document.createElement('div')
    $containerTask.className = 'container-task'
    $main.append($containerTask)

    // ______________________________________________________Main__ContainerTask_Task_________________________________________________________________
    const $task = document.createElement('div')
    $task.className = 'task'
    $containerTask.append($task)

    // ________________________________________________________Main__ContainerTask_Task_Column___________________________________________
    const $taskTitle = document.createElement('div')
    $taskTitle.id = 'task-title'
    $task.append($taskTitle)

    const $taskStatus = document.createElement('div')
    $taskStatus.id = 'task-status'
    $task.append($taskStatus)

    const $taskDescription = document.createElement('div')
    $taskDescription.id = 'task-description'
    $task.append($taskDescription)

    const $taskUntill = document.createElement('div')
    $taskUntill.id = 'task-untill'
    $task.append($taskUntill)

    const $taskProgress = document.createElement('div')
    $taskProgress.id = 'task-progress'
    $task.append($taskProgress)

    const $taskChanges = document.createElement('div')
    $taskChanges.id = 'task-changes'
    $task.append($taskChanges)

    $taskTitle.innerHTML = `
        <div class='column-head'>
            <div class='check-box check-box-active'><img src="images/check-box-cancel.svg" alt=""></div>
            <span>Title</span>
        </div>
    `

    $taskStatus.innerHTML = `
        <div class='column-head'>
            <div><span>Status</span></div>
        </div>
    `

    $taskDescription.innerHTML = `
        <div class='column-head'>
            <div><span>Description</span></div>
        </div>
    `

    $taskUntill.innerHTML = `
        <div class='column-head'>
            <div><span>Untill date</span></div>
        </div>
    `

    $taskProgress.innerHTML = `
        <div class='column-head'>
            <div><span>Progress</span></div>
        </div>
    `

    $taskChanges.innerHTML = `
        <div class='column-head'>
            <div class='bar-task'></div>
        </div>
    `

    // ______________________________________________________________________Main__ContainerTask_PlugTask__________________________________
    const $plugTask = document.createElement('div')
    $plugTask.className = 'plug-add-task'
    $containerTask.append($plugTask)
    $plugTask.innerHTML = `<div data-name='add-task'><img src="images/to-do-list.png" alt=""></div>`

    // ______________________________________________________________________Main__ContainerTask_Navigation________________________________
    const $navigation = document.createElement('div')
    $navigation.className = 'navigation'
    $containerTask.append($navigation)
    $navigation.innerHTML = `
        <div class='button'>Previous</div>
        <div>Page 1 of 10</div>
        <div class='button'>Next</div>
    `
    // _______________________________________________________________________FADE______________________________________________________________
    const $fade = document.createElement('div')
    $fade.className = 'fade hidden'
    $container.append($fade)
}