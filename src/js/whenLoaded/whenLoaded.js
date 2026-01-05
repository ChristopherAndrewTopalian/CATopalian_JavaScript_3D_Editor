// whenLoaded.js

document.addEventListener("DOMContentLoaded", function()
{
    // get the canvas element
    let canvas = ge("renderCanvas");

    // 'true' as the 4th parameter in the Engine constructor for crisp edges and  textures
    // the fourth parameter is adaptToDeviceRatio
    // this makes textures and edges look very clean
    let engine = new BABYLON.Engine(canvas, true, null, true);

    // create the scene
    let scene = makeScene(engine, canvas);

    // run the render loop
    engine.runRenderLoop(function()
    {
        scene.render();
    });

    // when window is resized
    window.addEventListener("resize", function ()
    {
        engine.resize();
    });

    makeObjectMenu(scene);

    makeTitleOfApp();
});

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

