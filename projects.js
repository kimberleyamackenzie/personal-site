    const modal = document.getElementById('the-modal');
    const openModal = document.getElementById('project');
    const closeModal = document.getElementsByClassName("close")[0];
    
    
    $(openModal).click(function() {
        console.log('modal click');
      modal.style.display = "block";
    });


    closeModal.onclick = function() {
      modal.style.display = "none";
    };


    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
