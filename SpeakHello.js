(function(window) {
    var helloSpeaker = new Object();
    var speakWord = "hello";
    helloSpeaker.speak = function(name) {
        console.log(speakWord + " " + name);
    };
    window.helloSpeaker = helloSpeaker;
})(window);
