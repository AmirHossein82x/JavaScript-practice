const video = {
    name: 'a',
    play() {
        console.log(this);   // this is reffrence to current object
    }
}


video.stop = function() {
    console.log(this)
}
video.play()

video.stop()




function ali() {
    console.log(this);  // we get the window object
}

ali()
