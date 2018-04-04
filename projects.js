const closeSourceressModal = document.getElementsByClassName("close")[0];
const closeAudiomorphModal = document.getElementsByClassName("close")[1];
const closeKeyboardModal = document.getElementsByClassName("close")[2];
const closeMuncherModal = document.getElementsByClassName("close")[3];
const closeStaticModal = document.getElementsByClassName("close")[4];
const closeTrekModal = document.getElementsByClassName("close")[5];

$('#sourceress').click(function () {
  document.getElementById('sourceress-modal').style.display = "block";
});

closeSourceressModal.onclick = function () {
  document.getElementById('sourceress-modal').style.display = "none";
};

$('#audiomorph').click(function () {
  document.getElementById('audiomorph-modal').style.display = "block";
});

closeAudiomorphModal.onclick = function () {
  document.getElementById('audiomorph-modal').style.display = "none";
};

$('#keyboard').click(function () {
  document.getElementById('keyboard-modal').style.display = "block";
});

closeKeyboardModal.onclick = function () {
  document.getElementById('keyboard-modal').style.display = "none";
};

$('#muncher').click(function () {
  document.getElementById('muncher-modal').style.display = "block";
});

closeMuncherModal.onclick = function () {
  document.getElementById('muncher-modal').style.display = "none";
};

$('#static').click(function () {
  document.getElementById('static-modal').style.display = "block";
});

closeStaticModal.onclick = function () {
  document.getElementById('static-modal').style.display = "none";
};

$('#trek').click(function () {
  document.getElementById('trek-modal').style.display = "block";
});

closeTrekModal.onclick = function () {
  document.getElementById('trek-modal').style.display = "none";
};

window.onclick = function (event) {
  if (event.target == document.getElementById('trek-modal')) {
    document.getElementById('trek-modal').style.display = "none";
  } else if (event.target == document.getElementById('sourceress-modal')) {
    document.getElementById('sourceress-modal').style.display = "none";
  } else if (event.target == document.getElementById('audiomorph-modal')) {
    document.getElementById('audiomorph-modal').style.display = "none";
  } else if (event.target == document.getElementById('keyboard-modal')) {
    document.getElementById('keyboard-modal').style.display = "none";
  } else if (event.target == document.getElementById('muncher-modal')) {
    document.getElementById('muncher-modal').style.display = "none";
  } else if (event.target == document.getElementById('static-modal')) {
    document.getElementById('static-modal').style.display = "none";
  };
};