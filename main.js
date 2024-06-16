import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { send } from 'vite';

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({
  canvas : document.querySelector('#canvas')
})

const camera = new THREE.PerspectiveCamera(30, 1);
camera.position.set(0,0,5);

const loader = new GLTFLoader();
loader.load('./깜박이.glb', function(glb){
  scene.add(glb.scene);
  renderer.render(scene);
});

renderer.render(scene);

