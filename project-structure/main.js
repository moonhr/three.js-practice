// * three.js에서 장면 구현에는 "장면, 카메라, 렌더러"가 필요함

//Three.js 라이브러리 가져오기
//이 라이브러리는 3D 그래픽을 쉽게 렌더링하고 조작할 수 있게 도와줌
import * as THREE from 'three';

//장면(Scene) 설정
//이 장면은 모든 3D 객체와 조명 등을 포함
const scene = new THREE.Scene();

//카메라(Camera) 설정
//PerspectiveCamera 객체를 생성합니다. 이 카메라는 인간의 눈처럼 원근감을 줌
//첫 번째 인자는 시야각(FOV, Field of View)을 설정하며, 여기서는 75도로 설정되어 있습니다.
//두 번째 인자는 종횡비(Aspect Ratio)로, 여기서는 윈도우의 너비와 높이를 비율로 사용하고 있습니다.
//세 번째 인자는 카메라가 렌더링할 수 있는 가장 가까운 거리의 평면입니다 (0.1).
//네 번째 인자는 카메라가 렌더링할 수 있는 가장 먼 거리의 평면입니다 (1000).
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//렌더러(Renderer) 설정
//WebGLRenderer 객체를 생성합니다. 이 렌더러는 WebGL을 사용하여 장면을 렌더링합니다.
const renderer = new THREE.WebGLRenderer();
//setSize 메서드는 렌더러의 크기를 윈도우의 너비와 높이로 설정합니다.
renderer.setSize( window.innerWidth, window.innerHeight );
//renderer.domElement는 렌더링된 출력이 표시될 <canvas> 요소입니다. 이 요소를 문서의 <body>에 추가하여 브라우저 창에 표시되게 합니다.
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );

}

renderer.setAnimationLoop( animate );