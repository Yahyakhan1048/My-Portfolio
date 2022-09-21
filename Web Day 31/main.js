//  For Permanent Color we use this method 

let theme = localStorage.getItem('theme')
if(theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}

let look = document.getElementsByClassName('theme_dot');
for(var i=0; look.length > i; i++) {
    look[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('good', mode);
        setTheme(mode)
    })
}

function setTheme(mode) {
    if(mode == 'light') {
        document.getElementById('theme-style').href = 'Portfolio.css'
    }
    if(mode == 'blue') {
        document.getElementById('theme-style').href = 'blue.css'
    }
    if(mode == 'green') {
        document.getElementById('theme-style').href = 'green.css'
    }
    if(mode == 'pink') {
        document.getElementById('theme-style').href = 'purple.css'
    }

    localStorage.setItem('theme', mode)
}

