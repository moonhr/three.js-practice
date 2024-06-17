import * as THREE from 'three'; //three.js 불러오기
import { GLTFLoader } from 'three/examples/jsm/Addons.js'; //gltf 파일은 GLTFLoader 로 가져와야됨
let scene = new THREE.Scene(); //장면 추가
let renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('canvas'),
    antialias: true
});
// renderer.outputEncoding = THREE.sRGBEncoding;
let camera = new THREE.PerspectiveCamera(30, 1); //PerspectiveCamera (원근법 O), OrthographicCamer (원근법 X)
camera.position.set(0, 0, 10);
//* 배경&조명
scene.background = new THREE.Color('white');
let light = new THREE.DirectionalLight(0xffff00, 10);
scene.add(light);
let loader = new GLTFLoader();
loader.load('./ccamback.glb', function (gltf) {
    scene.add(gltf.scene);
    function animate() {
        requestAnimationFrame(animate); //1초에 60번 실행됨.
        gltf.scene.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
}); //로그 할때 시간이 좀 걸림 콜백 필요 , parametr 에 들어가 있음. 
//마우스 컨트롤은 three.js OrbitControl
