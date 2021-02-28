clocksound = new Audio('clock.mp3'); 
if (typeof clocksound.loop == 'boolean')
{
    clocksound.loop = true;
}
else
{
    clocksound.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}
clocksound.play();