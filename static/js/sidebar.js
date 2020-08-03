function openSidebar() {
  document.getElementsByName('main')[0].style.marginLeft = '250px'
  document.getElementsByName('footer')[0].style.marginLeft = '250px'
  document.getElementsByName('header')[0].style.marginLeft = '250px'
  document.getElementsByName('header')[0].style.width = 'calc(100% - 282px)'
  document.getElementsByName('footer')[0].style.width = 'calc(100% - 282px)'
  document.getElementsByName('sidebar')[0].style.width = '250px'
  document.getElementsByClassName('sidebar-toggle')[0].onclick = closeSidebar
  document.getElementsByClassName('sidebar-toggle')[0].childNodes[0].nodeValue = 'X'
}

function closeSidebar() {
  document.getElementsByName('main')[0].style.marginLeft = '0'
  document.getElementsByName('footer')[0].style.marginLeft = '0'
  document.getElementsByName('header')[0].style.marginLeft = '0'
  document.getElementsByName('header')[0].style.width = 'calc(100% - 32px)'
  document.getElementsByName('footer')[0].style.width = 'calc(100% - 32px)'
  document.getElementsByName('sidebar')[0].style.width = '0'
  document.getElementsByClassName('sidebar-toggle')[0].onclick = openSidebar
  document.getElementsByClassName('sidebar-toggle')[0].childNodes[0].nodeValue = 'O'
}