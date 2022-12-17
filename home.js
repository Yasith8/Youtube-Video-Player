var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        
        height: '360',
        width: '640',
        videoId: 'dVYl5ImNjow', // The YouTube video ID
        
        events: {
            
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    }
                          
  );

}



function onPlayerReady(event) {
    event.target.playVideo();
}




function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) { 
    
    }
}
