const $container = document.querySelector('#app')
const $logo = 
$container.innerHTML = `
    <div class="sitebar">
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
    </div>
    <div class='main'>
        <div class='header'>
            <h1> Plans</h1>
            <div class='button button-primory'>
                <img src="images/add.svg" alt="">
                <span>Add task</span>
            </div>
        </div>
        <div class='filters-search'>
            <div class='filters'>
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
            </div>
            <div class='search'>
                <img src="images/search.svg" alt="">
                <input id="task-search" type="text" placeholder="Search">
            </div>
        </div>
        
        <div class='container-task'>

        <div class='task'>
            <div id='task-title'>
                <div class='column-head'>
                    <div class='check-box check-box-active'><img src="images/check-box-cancel.svg" alt=""></div>
                    <span>Title</span>
                </div>
            </div>
            <div id='task-status'>
                <div class='column-head'>
                    <div><span>Status</span></div>
                </div>
            </div>
            <div id='task-dascription'>
                <div class='column-head'>
                    <div><span>Description</span></div>
                </div>
            </div>
            <div id='task-untill'>
                <div class='column-head'>
                    <div><span>Untill date</span></div>
                </div>
            </div>
            <div id='task-progress'>    
                <div class='column-head'>
                    <div><span>Progress</span></div>
                </div>
            </div>
            <div id='task-changes'>
                <div class='column-head'>
                    <div class='bar-task'></div>
                </div>
            </div>
        </div>

        <div class='plug-add-task'>Add task</div>

        <div class='navigation'>
            <div class='button'>Previous</div>
            <div>Page 1 of 10</div>
            <div class='button'>Next</div>
        </div>

    </div>
    </div>
`

                
                
                
                
                
          
