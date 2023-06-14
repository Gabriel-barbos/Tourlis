
function openMoedaPopup() {
    closeAll();
  
    var popup = document.getElementById('popup-moeda');
    popup.style.display = 'block';
  }
  
  function closeMoedaPopup() {
    var popup = document.getElementById('popup-moeda');
    popup.style.display = 'none';
  }
  
  
  function openPostPopup() {
    closeAll();
  
    var popup = document.getElementById('popup-post');
    popup.style.display = 'block';
  }
  
  function closePostPopup() {
    var popup = document.getElementById('popup-post');
    popup.style.display = 'none';
  }
  
  
  function openInfoPopup() {
    closeAll();
  
    var popup = document.getElementById('popup-info');
    popup.style.display = 'block';
  }
  
  function closeInfoPopup() {
    var popup = document.getElementById('popup-info');
    popup.style.display = 'none';
  }
  
  function closeAll(){
    closeMoedaPopup();
    closePostPopup();
    closeInfoPopup();
  }
  