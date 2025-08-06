const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// Make NO button run away
function moveButton() {
  const x = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
  const y = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));

  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

noBtn.addEventListener('mouseenter', moveButton);
noBtn.addEventListener('touchstart', moveButton);

// Show cute pop-up when YES is clicked
yesBtn.addEventListener('click', () => {
  alert("waay run bawiay ha");
});