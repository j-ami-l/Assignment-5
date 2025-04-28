
getElement("btn-theme").addEventListener("click", function(){
    const randomColor = parseInt(Math.random()*(999-100+1)+100);
    let color = '#'
    color += randomColor;
    const themes = document.getElementsByClassName("common-bg")
    for(const theme of themes)
        theme.style.backgroundColor = color;
})

