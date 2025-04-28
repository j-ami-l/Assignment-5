
div.innerHTML = `
<p><span class="text-2xl">${Day()}</span><br>
<span class = "text-xl font-bold">${Month()} ${Datee()} ${Year()
  }</span>
</p>
`


getElement("calander").appendChild(div)