var time;
var petent_time;

function mainloop()
{
    time = Math.floor((Math.random() * 40) + 10);
    petent_time = Math.floor((Math.random() * 20) + 5);

    postMessage({pt:petent_time, time:time});
    setTimeout("mainloop()", (time * 1000));
}

mainloop();