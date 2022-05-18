import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
//  import { FontLoader } from './jsm/loaders/FontLoader.js';
import{FontLoader}from 'three/examples/jsm/loaders/FontLoader'
// import{TextGeometry}from 'three/examples/jsm/loaders/F'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';




//raycaster


// const raycaster = new THREE.Raycaster();
// const pointer = new THREE.Vector2();



// function onPointerMove( event ) {

// 	// calculate pointer position in normalized device coordinates
// 	// (-1 to +1) for both components

// 	pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
// 	pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;


// }

// function render() {

// 	// update the picking ray with the camera and pointer position
// 	raycaster.setFromCamera( pointer, camera );

// 	// calculate objects intersecting the picking ray
// 	const intersects = raycaster.intersectObjects( scene.children );

// 	for ( let i = 0; i < intersects.length; i ++ ) {

// 		intersects[ i ].object.material.color.set( 0xff0000 );

// 	}

// 	renderer.render( scene, camera );

// }

// window.addEventListener( 'pointermove', onPointerMove );

// window.requestAnimationFrame(render)







const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 60, window.innerWidth/window.innerHeight, 0.01, 100 );
camera.position.set(0,0,-2)
//const totalGroup = new THREE.Group(); 
var drone = null;
var posx = 0;
var posz = 1;

let renderer = new THREE.WebGLRenderer({  });
scene.background = new THREE.Color(0xdddddd);
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0xECF0F1);
let doc = document.querySelector('.main');
doc.appendChild( renderer.domElement );


window.addEventListener('resize', function() {

     let width = window.innerWidth;
     let height = window.innerHeight;
     renderer.setSize(width,height);
     camera.aspect = width / height;
     camera.updateProjectionMatrix();

});


//orbit controls

var orbitControl = new OrbitControls( camera, renderer.domElement );
orbitControl.target.set(0, 0, 0);
orbitControl.enableDamping = true;
orbitControl.maxDistance = 4; //  this.controls.minDistance = 1;
orbitControl.enablePan = false;
// orbitControl.maxPolarAngle = Math.PI / 2 + 0.4;




// const shape =new THREE.shape();
const controls = new  OrbitControls(camera,renderer.domElement);
let x = 1; let y = 1; let width = 90; let height = 50; let radius = 10;


const video = document.getElementById( 'video' );
const texture = new THREE.VideoTexture( video );
// const geometry = new THREE.PlaneGeometry(0.87, 0.55, 0.01);
 const geometry = new THREE.PlaneGeometry(5, 2);
const material = new THREE.MeshBasicMaterial({ map: texture });



let picturespotmesh1 = new THREE.Mesh( geometry);
picturespotmesh1.position.set(3.140, -0.623,0.082);
picturespotmesh1.rotation.y = 0.5 * Math.PI;











// 3d text

var elements = document.getElementsByClassName("picture");
var fonts = null
var First = function(event) {
   
    var changedval =event.target.value
    // alert(event.target.name)
    console.log(event.target.value)
    textgroup.traverse( (child) => {


        const textGeometry = new TextGeometry(
            changedval,
            {
                font: fonts,
                 size: 1,
                height: 0.3,
                curveSegments: 12,
                bevelEnabled: true,
                 bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 5,
                
                
            }

           
        )
        if (event.target.name=="input0")
        {
            child.children[0].geometry = textGeometry
            console.log(child)
        }

        if (event.target.name=="input1")
        {
            child.children[1].geometry = textGeometry
            console.log(child)
        }
        if (event.target.name=="input2")
        {
            child.children[2].geometry = textGeometry
            console.log(child)
        }


        // child.children[0].geometry = textGeometry
        // console.log(child)
        
    })


};
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('keyup', First);
}

function call(){

alert(12);}

// document.getElementById('txt').value = "Text Here";
// document.getElementsByTagName('input')[1].value = "Input Value";
const textgroup = new THREE.Group()
scene.add(textgroup)


const loader = new FontLoader();
loader.load(
    '/font.json',
    (font) =>
    {
        fonts = font
        const textGeometry = new TextGeometry(
            'text',
            {
                font: fonts,
                 size: 1,
                height: 0.3,
                curveSegments: 12,
                bevelEnabled: true,
                 bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 5,
                
                
            }
        )
        const textMaterial = new THREE.MeshBasicMaterial({color:  "red"})
        const text = new THREE.Mesh(textGeometry, textMaterial)
        textgroup.add(text)

        text.position.set(-1.280,2.520,-4.450);
         text.scale.set(0.470,0.290,1)
         text.rotation.set(0.000,0.000,-0.030)


        console.log(text)


        const textMaterial1 = new THREE.MeshBasicMaterial({color:  "red"})
        const text1 = new THREE.Mesh(textGeometry, textMaterial1)
        textgroup.add(text1)

        text1.position.set(0.320,2.460,-4.320);
         text1.scale.set(0.380,0.340,1)
         text1.rotation.set(0.000,0.000,-0.010)


        console.log(text1)
        // text.rotation.set(0,0,0)
        const textMaterial2 = new THREE.MeshBasicMaterial({color:  "red"})
        const text2 = new THREE.Mesh(textGeometry, textMaterial2)
        textgroup.add(text2)

        text2.position.set(-2.860,2.580,-3.460);
         text2.scale.set(0.310,0.240,0)
         text2.rotation.set(0.000,0.000,-0.050)

        console.log(text2)
    }

    
)
// const loader = new FontLoader();

// const font = loader.load(
// 	// resource URL
// 	'fonts/helvetiker_bold.typeface.json',

// 	// onLoad callback
// 	function ( font ) {
// 		// do something with the font
// 		console.log( font );
// 	},

// 	// onProgress callback
// 	function ( xhr ) {
// 		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
// 	},

// 	// onError callback
// 	function ( err ) {
// 		console.log( 'An error happened' );
// 	}
// );


//3d text2


// loader for loading texture
let loadera = new THREE.TextureLoader();

// array for holding all texutre
let textureArray = [];

// all texture
let frontTexture = loadera.load('./model/polluted_earth/front.jpg');
let backTexture = loadera.load('./model/polluted_earth/back.jpg');
let topTexture = loadera.load('./model/polluted_earth/top.jpg');
let bottomTexture = loadera.load('./model/polluted_earth/bottom.jpg');
let rightTexture = loadera.load('./model/polluted_earth/left.jpg');
let leftTexture = loadera.load('./model/polluted_earth/right.jpg');

textureArray.push(new THREE.MeshBasicMaterial({map: frontTexture}));
textureArray.push(new THREE.MeshBasicMaterial({map: backTexture}));
textureArray.push(new THREE.MeshBasicMaterial({map: topTexture}));
textureArray.push(new THREE.MeshBasicMaterial({map: bottomTexture}));
textureArray.push(new THREE.MeshBasicMaterial({map: rightTexture}));
textureArray.push(new THREE.MeshBasicMaterial({map: leftTexture}));

for(let i=0; i<textureArray.length; i++){
    textureArray[i].side = THREE.BackSide;
}

// making cube
const cubeGeometry = new THREE.BoxGeometry(100, 100, 100);
const skyBox = new THREE.Mesh(cubeGeometry, textureArray);
skyBox.rotation.set(0.00,0.510,0.00)
skyBox.position.set(0.050,20.00,0.00)
scene.add(skyBox);


//spot
const meshArr =[];
const totalGroup = new THREE.Group(); 
scene.add(totalGroup);


//spot

var spotgeometry = new THREE.CylinderGeometry(0.2, 0.2, 0.05, 24, 1);
        var spotmaterial = new THREE.MeshPhongMaterial( {color:  "#0000ff"} );
        var chair = new THREE.Mesh( spotgeometry, spotmaterial );
        chair.name = "chair_info"
        chair.position.set(-2.433,-1.520,-3.622);
        chair.scale.x =1
        chair.scale.y =1
        chair.scale.z =1
        meshArr.push(chair)
        console.log(chair)


        var spotmaterial = new THREE.MeshPhongMaterial( {color:  "#0000ff"} );
        var advanced_chair = new THREE.Mesh( spotgeometry, spotmaterial );
        advanced_chair.name = "advanced_chair_info"
        advanced_chair.position.set(2.731,-1.520,-4.040);
        advanced_chair.scale.x =1
        advanced_chair.scale.y =1
        advanced_chair.scale.z =1
        meshArr.push(advanced_chair)

        var spotmaterial = new THREE.MeshPhongMaterial( {color:  "#0000ff"} );
        var random_spot1 = new THREE.Mesh( spotgeometry, spotmaterial );
        random_spot1.name = "random_spot_1_info"
        random_spot1.position.set(5.031,-1.520,1.240);
        random_spot1.scale.x =1
        random_spot1.scale.y =1
        random_spot1.scale.z =1
        meshArr.push(random_spot1)


        var spotmaterial = new THREE.MeshPhongMaterial( {color:  "#0000ff"} );
        var random_spot2 = new THREE.Mesh( spotgeometry, spotmaterial );
        random_spot2.name = "random_spot_2_info"
        random_spot2.position.set(-4.893,-1.520,3.448);
        random_spot2.scale.x =1
        random_spot2.scale.y =1
        random_spot2.scale.z =1
        meshArr.push(random_spot2)





        var spotmaterial = new THREE.MeshPhongMaterial( {color:  "#0000ff"} );
        var random_spot3 = new THREE.Mesh( spotgeometry, spotmaterial );
        random_spot3.name = "random_spot_3_info"
        random_spot3.position.set(0,-1.520,0);
        random_spot3.scale.x =1
        random_spot3.scale.y =1
        random_spot3.scale.z =1
        meshArr.push(random_spot3)


        totalGroup.add( chair );
        totalGroup.add( advanced_chair );
        totalGroup.add( random_spot1 );
        totalGroup.add( random_spot2 );
        totalGroup.add( random_spot3 );
        totalGroup.position.set(0,1.710,0)

        // document.addEventListener('click', onDocumentMouseClick, false);
        // window.addEventListener('resize', onWindowResize, false)
        // window.addEventListener( 'pointermove', onPointerMove );

        //   animate()


        // function animate() {

        // requestAnimationFrame(animate)
        // render()

        // }








    


let localPlane = new THREE.Plane( new THREE.Vector3(  0.4, 0, 0 ), 1 );
renderer.localClippingEnabled = true;
material.clippingPlanes = [ localPlane ];
material.clipShadows = true;

document.addEventListener('DOMContentLoaded', function () {
    video.play();
});













//drone fbx loader
const fbxLoader = new FBXLoader()

//Create a WebGLRenderer and turn on shadows in the renderer
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const light = new THREE.DirectionalLight( 0xffffff, 1 );
 const Alight= new THREE.AmbientLight( 0xffffff, 1 )

light.position.set(10, 18, 0 ); //default; light shining from top
light.castShadow = true; // default false
scene.add( light );
scene.add(Alight);

light.shadow.mapSize.width = 512; // default
light.shadow.mapSize.height = 512; // default
light.shadow.camera.near = 0.5; // default
light.shadow.camera.far = 500;

 light.position.set(10,7,0)





fbxLoader.load(
    '../src/drone_test.fbx',
    (objectdrone) => {

        objectdrone.rotation.set(0,0,0)
       objectdrone.scale.set(.1, .1, .1)
       objectdrone.position.set(0, 1, 1)
       objectdrone.traverse( (child)=>
       {
        child.castShadow = true; //default is false
        child.receiveShadow = false; //default
       } )

      


    //    scene.add(objectdrone)
       console.log(objectdrone) 
       drone = objectdrone

      
       scene.add( drone );

    //    fbxLoader .rotation.set(0,-1.57,0);
    //    fbxLoader.position.set(10,0.7,0);
    //    fbxLoader.scale.set(11,10,0.3);
       
    console.log(objectdrone) 
    // objectdrone.scale.set(.2, .2, .2)
      
    },
    

)

//  animation drone

fbxLoader.load(
    '../src/Holland_FBX_V010.fbx',
    (object) => {

       object.scale.set(.01, .01, .01)
    //    object.position.set(0, 18, 0)
       console.log(object)
       scene.add(object)

       object.traverse( (child)=>
       {

        
        if(child.name == "Floor_White"  ) {



            child.material.shininess = 0.2

            child.material.needsUpdate = true



        }
        child.castShadow = true; //default is false
        child.receiveShadow = true; //default
       } )
    },
   

    
)

// Lighting
// const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
// hemiLight.position.set( 0, 200, 0 );
// scene.add( hemiLight );




//texture

var elements = document.getElementsByClassName("images");

var First = function(event) {
   
    console.log(event.target.src)
    var planetexture = new THREE.TextureLoader().load(event.target.src);
    plane.material.map=planetexture
    plane.material.needsUpdate=true;
};
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', First, false);
}


var planetexture = new THREE.TextureLoader().load("t_plane_1.jpg");

const geometry1 = new THREE.PlaneGeometry( 1, 1 );
// const material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const material1 = new THREE.MeshBasicMaterial( {map:planetexture, side: THREE.DoubleSide} );

const plane = new THREE.Mesh( geometry1, material1 );
plane.name = "plane1"
console.log(plane) 

plane.position.set(-0.700,1.560,-4.130);
 plane.scale.set(1.520,2.5,0);

scene.add( plane );



//texture2

var elements = document.getElementsByClassName("images");

var Fun = function(event) {
   
    console.log(event.target.src)
    var planetexture2 = new THREE.TextureLoader().load(event.target.src);
    plane2.material.map=planetexture2
    plane2.material.needsUpdate=true;
};
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', Fun, false);
}

var planetexture2 = new THREE.TextureLoader().load("t_plane_2.jpg");

const geometry2 = new THREE.PlaneGeometry( 1, 1 );
const material2 = new THREE.MeshBasicMaterial( {map:planetexture2, side: THREE.DoubleSide} );

const plane2 = new THREE.Mesh( geometry2, material2 );
plane.name = "plane2"
console.log(plane2) 


plane2.position.set(1,1.560,-4.130);
 plane2.scale.set(1.520,2.5,0);

scene.add( plane2);



//texture3

var elements = document.getElementsByClassName("images");

var Function = function(event) {
   
    console.log(event.target.src)
    var planetexture3 = new THREE.TextureLoader().load(event.target.src);
    plane3.material.map=planetexture3
    plane3.material.needsUpdate=true;
};
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', Function, false);
}



var planetexture3 = new THREE.TextureLoader().load("t_plane_3.jpg");

const geometry3 = new THREE.PlaneGeometry( 1, 1 );
const material3 = new THREE.MeshBasicMaterial( {map: planetexture3,side: THREE.DoubleSide } );

const plane3 = new THREE.Mesh( geometry3, material3 );
plane3.name = "plane3"
console.log(plane3) 


plane3.position.set(2.290,1.470,-3.370);
plane3.scale.set(1.720,2.720,0);

plane3.rotation.set(-0.032,-1.060,-0.020);

scene.add( plane3);




//texture4
// document.querySelectorAll(".images");

var elements = document.getElementsByClassName("images");

var myFunction = function(event) {
   
    console.log(event.target.src)
    var planetexture4 = new THREE.TextureLoader().load(event.target.src);
    plane4.material.map=planetexture4
    plane4.material.needsUpdate=true;
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}

const myfunction = (img) => {

alert(img)
}
var planetexture4 = new THREE.TextureLoader().load("t_plane_4.jpg");
const geometry4 = new THREE.PlaneGeometry( 1, 1 );
const material4 = new THREE.MeshBasicMaterial( {map: planetexture4,side: THREE.DoubleSide } );
const plane4 = new THREE.Mesh( geometry4, material4 );

plane4.material.needsUpdate = true;

plane4.name = "plane4"
console.log(plane4) 



plane4.position.set(3.2,1.48,-2.040);
plane4.scale.set(1.650,2.57,0.240);

plane4.rotation.set(-0.030,-1.050,-0.020);


scene.add( plane4);


// mesh_0.material.map = new THREE.TextureLoader().load(t_plane_1.jpg);
//mesh_0.material.needsUpdate = true;







// camera.position(0,0,0);

camera.position.z =10;

var currentPosition="";

const animate = function () {

//path position

    if (drone){

        if(currentPosition === "") {

            posx += 0.005
            if(posx > 1) {
                currentPosition = "pos1"
            }
        }

        if(currentPosition === "pos1"){

            posz += 0.005

            if(posz > 3) {
                currentPosition = "pos2"
            }
        }

        if(currentPosition === "pos2"){

            posx -= 0.005
            if(posx < 0) {
                currentPosition = "pos3"
            }
        }
        if(currentPosition === "pos3"){


            posx += 0.005

            if(posx < 2) {
                currentPosition = ""
            }
         
        }



        // if(currentPosition === "pos2"){
        //     posx += 0.005

        //     if(posx < 0 ){

        //         currentPosition = ""

        //     }

        // }
        // console.log("pos",drone.position)
        // console.log("position",currentPosition)

        drone.position.x = posx
        drone.position.z = posz

    }
   
    // drone.position.x+=0.05;
    renderer.render( scene, camera );
     requestAnimationFrame( animate );


//texture





// const ageometry = new THREE.PlaneGeometry( 1, 1 );
// // const material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
// const amaterial = new THREE.MeshBasicMaterial( {color: 0xffff00} );

// const aplane = new THREE.Mesh( geometry, material );

// console.log(aplane) 

// // plane.rotation.set(0,-1.57,0);
// aplane.rotation.set(0,5,0);

// aplane.position.set(4,2
//     ,0);
// aplane.scale.set(2,3.5,0);


// scene.add( aplane );



};

animate();

