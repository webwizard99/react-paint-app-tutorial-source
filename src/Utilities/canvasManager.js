const canvasManager = (function(){
  let canvasWidth = 0;
  let canvasHeight = 0;

  const cellSize = 4;
  const cellTemplate = 'rgb(255, 255, 255';

  const getCanvasRect = function() {
    const canvasEle = document.querySelector('.Canvas');
    if (!canvasEle) {
      console.log('no canvas element!');
      return false;
    } 
    const canvasRect = canvasEle.getBoundingClientRect();
    canvasWidth = canvasRect.width;
    canvasHeight = canvasRect.height;
  }

  const getCanvasSize = function() {
    return {
      width: canvasWidth,
      height: canvasHeight
    }
  }

  return {
    createBlankCanvas: function() {
    
      // if canvas dimensions aren't defined, we should exit
      // and return false
      if (canvasWidth < 1 || canvasHeight < 1) return false;
      let tempCanvas = [];
    
      // we're going to create the canvas by raster scanning
      // in the template variable from top to bottom, left to
      // right
      for (let row = 0; row < Math.floor(canvasHeight / cellSize); row++) {
        let tempRow = [];
        for (let col = 0; col < Math.floor(canvasWidth / cellSize); col++) {
          tempRow.push(cellTemplate);
        }
        // add the row to the canvas
        tempCanvas.push(tempRow);
      }
      return JSON.parse(JSON.stringify(tempCanvas));
    },

    init: function() {
      getCanvasRect();
    },

    getCellSize: function() {
      return cellSize;
    }
    
  }
}());

export default canvasManager;