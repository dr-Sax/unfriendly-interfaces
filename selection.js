// selection.js
document.addEventListener('mouseup', handleMouseUp)

// selection.js
function handleMouseUp (evt) {
    if (window.parent === window) {
      // Top frame
      doAwesomeThings(evt.client, evt.clientY)
    } else {
      // Pass the coordinates to upper frame
      window.parent.postMessage({
        msg: 'SALADICT_CLICK',
        mouseX: evt.clientX,
        mouseY: evt.clientY
      }, '*')
    }
  }