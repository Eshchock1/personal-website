    export default document.body.onmousemove = function(e) {
      document.getElementById('cursor').style.setProperty('--x', (e.clientX+window.scrollX) + 'px');
      document.getElementById('cursor').style.setProperty('--y', (e.clientY+window.scrollY) + 'px');
    }
