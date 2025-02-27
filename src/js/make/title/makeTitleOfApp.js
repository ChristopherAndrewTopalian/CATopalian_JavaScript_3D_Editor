// makeTitleOfApp.js

function makeTitleOfApp()
{
    // titleContainer
    let titleContainer = ce('div');
    titleContainer.style.position = 'absolute';
    titleContainer.style.right = '10px';
    titleContainer.style.bottom = '4px';
    titleContainer.style.zIndex = 1;
    titleContainer.style.fontFamily = 'Arial';
    titleContainer.style.fontSize = '17px';
    titleContainer.style.fontWeight = 'bold';
    ba(titleContainer);

    //-//

    // titleOfApp
    let titleOfApp = ce('a');
    titleOfApp.href =
    'https://github.com/ChristopherAndrewTopalian/CATopalian_JavaScript_3D_Editor'
    titleOfApp.target = '_blank';
    titleOfApp.textContent = 'CATopalian JavaScript 3D Editor';
    titleContainer.append(titleOfApp);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

