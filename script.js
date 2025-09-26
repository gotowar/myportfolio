// Theme toggle
document.getElementById('themeToggle').addEventListener('click', () => {
  const body = document.body;
  const theme = body.getAttribute('data-theme');
  body.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
  document.getElementById('themeToggle').textContent = theme === 'light' ? 'Light' : 'Dark';
});
document.getElementById('year').textContent = new Date().getFullYear();

// Three.js animation
const canvas = document.getElementById('three-canvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(canvas.clientWidth, canvas.clientHeight);
canvas.appendChild(renderer.domElement);

const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
const material = new THREE.MeshStandardMaterial({ color: 0x2563eb, metalness: 0.7, roughness: 0.2 });
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);
camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  torusKnot.rotation.x += 0.01;
  torusKnot.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

// Lightbox
document.querySelectorAll('.thumb').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = link.querySelector('img').src;
    lightbox.style.display = 'flex';
  });
});

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}
