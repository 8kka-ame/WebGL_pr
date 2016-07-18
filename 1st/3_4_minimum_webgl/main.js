window.onload = function() {
  var c = document.getElementById('canvas');
  var gl = c.getContext('webgl');

  if (!gl) {
    alert('webgl not supported!');
    return;
  }

  console.log('aaaaa');
  // canvasエレメントをクリアする色を指定
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // canvasエレメントをクリアする
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}
