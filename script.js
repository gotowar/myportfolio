// Theme toggle
const btn = document.getElementById('themeToggle');
const root = document.body;
btn.addEventListener('click', () => {
  const c = root.getAttribute('data-theme');
  const n = c === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', n);
  btn.textContent = n === 'dark' ? 'Light' : 'Dark';
});
document.getElementById('year').textContent = new Date().getFullYear();

// 3D Animation with Three.js
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

// Lightbox functionality
document.querySelectorAll('.thumb img').forEach(img => {
  img.addEventListener('click', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
  });
});

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}
