$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    //TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
 createPlatform(145, 630, 125, 12, "hotpink")
 createPlatform(250, 500, 60, 9, "purple")
 createPlatform(300, 390, 100, 10, "blue")
 createPlatform(540, 425, 85, 11, "purple")
 createPlatform(730, 300, 115, 10, "hotpink")
 createPlatform(975, 200, 100, 10, "blue")
 createPlatform(1225, 455, 85, 11, "pink")




    // TODO 3 - Create Collectables
    createCollectable("database", 200, 170, 0.5, 0.7)
    createCollectable("database", 400, 200, 0.5, 0.7)
    createCollectable("database", 760, 260, 0,3, 0.5)

    
    // TODO 4 - Create Cannons
   createCannon("top", 500, 3000)
   
   createCannon("right", 300, 3000)

  createCannon("bottom", 700, 3000)
     
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
