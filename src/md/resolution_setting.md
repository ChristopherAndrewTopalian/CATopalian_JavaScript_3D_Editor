# Resolution Setting

// 'true' as the 4th parameter in the Engine constructor for crisp edges and  textures
// the fourth parameter is adaptToDeviceRatio
// this makes textures and edges look very clean

```javascript
let engine = new BABYLON.Engine(canvas, true, null, true);
```

---

Here is another way:

```javascript
let createDefaultEngine = function()
{
    return new BABYLON.Engine(canvas, true, 
    {
        preserveDrawingBuffer: true,
        stencil: true,
        disableWebGL2Support: false
    }, 
    true); // 'true' here for adaptToDeviceRatio
};
```

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

