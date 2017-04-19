var container;
var camera, scene, renderer;
var mouse = new THREE.Vector2();
var radius = 100, theta = 0;
init();
animate();

function init() {
  container = document.createElement( 'div' );
  container.id = 'intro-background';
  document.body.insertBefore( container, document.body.firstChild);

  camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
  scene = new THREE.Scene();
  var light = new THREE.DirectionalLight( 0xffffff, 1 );
  light.position.set( 1, 1, 1 ).normalize();
  scene.add( light );
  var geometry = new THREE.BoxBufferGeometry( 17, 17, 17 );
  var boxColors = [0x0000ff, 0xf0f0f0]
  for ( var i = 0; i < 80; i ++ ) {
    var object = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { 
      color: boxColors[Math.floor(Math.random() * 2)]
    } ) );
    object.position.x = Math.random() * 800 - 400;
    object.position.y = Math.random() * 800 - 400;
    object.position.z = Math.random() * 800 - 400;
    object.rotation.x = Math.random() * 2 * Math.PI;
    object.rotation.y = Math.random() * 2 * Math.PI;
    object.rotation.z = Math.random() * 2 * Math.PI;
    scene.add( object );
  }
  renderer = new THREE.WebGLRenderer();
  renderer.setClearColor( 0xffffff );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.sortObjects = false;
  container.appendChild(renderer.domElement);
  document.addEventListener( 'mousemove', onDocumentMouseMove, false );
  window.addEventListener( 'resize', onWindowResize, false );
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove( event ) {
  event.preventDefault();
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

function animate() {
  requestAnimationFrame( animate );
  render();
}

function render() {
  theta += 0.1;
  camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
  camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
  camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
  camera.lookAt( scene.position );
  camera.updateMatrixWorld();

  renderer.render( scene, camera );
}