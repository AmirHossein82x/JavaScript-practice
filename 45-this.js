const video = {
    title: 'emrooz', 
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach((tag) => {
            console.log(tag, this.title)
        })
    }
}

const video2 = {
    title: 'emrooz', 
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag)
        })
        
    }
}

video2.showTags()


video.showTags()


function start(a, b) {
    console.log(this, a, b);
}

start.call({title:'ali'}, 1, 2) // in this way we can change this in that function
start.apply({title:'ali'}, [1, 2])
start.bind({title:'ali'}, [1, 2])() // we have to call it
start()  // in here this reffers to window object 