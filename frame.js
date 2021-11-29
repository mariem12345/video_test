function capture() {
    var canvas = document.getElementById('canvas');     
    var video = document.getElementById('video');
    canvas.getContext('2d').drawImage(video, 0, 0, 600, 300);  
    canvas.toBlob() = (blob) => {
      const img = new Image();
      img.src = window.URL.createObjectUrl(blob);
    };
}
