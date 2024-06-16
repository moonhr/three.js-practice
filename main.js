import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({
  canvas : document.querySelector('#canvas')
})