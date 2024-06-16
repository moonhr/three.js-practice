import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
// import { GLTFLoader } from 'GLTFLoader';

let scene = new THREE.Scene();
let renderer = new THREE.WebGLRenderer({
  canvas : document.getElementById('canvas'),
  antialias : true
});
renderer.outputEncoding = THREE.sRGBEncoding;

let camera = new THREE.PerspectiveCamera(30, 1);
camera.position.set(0,0,10);

//* 배경&조명
scene.background = new THREE.Color('white');
let light = new THREE.DirectionalLight(0xffff00, 10);
scene.add(light);

let loader = new GLTFLoader();
loader.load('./ccamback.glb', function(gltf){
  scene.add(gltf.scene);
  
  function animate(){
    requestAnimationFrame(animate)
    gltf.scene.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate()
});
//마우스 컨트롤은 three.js OrbitControl

// renderer.render(scene);

