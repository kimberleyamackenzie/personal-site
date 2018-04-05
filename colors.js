let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);

let height = $(document).height();
let width = $(document).width();
$('body').height(height);
$('body').width(width);

document.getElementsByClassName("close")[0].onclick = function () {
    document.getElementById('header').style.display = "none";
};

$('#header').click(function (event) {
    event.stopPropagation();
})

let clicked = 1;
$('body').click(function () {
    if (clicked < 4) {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
        let rgb2 = 'rgb(' + r + 1 + ',' + g + 1 + ',' + b + 1 + ')';

        $(event.target).append($($('<div id=newDiv></div>').css({
            // background: `linear-gradient(135deg, ${rgb2}, ${rgb})`,
            backgroundColor: `${rgb}`,
            height: `${$(document).height() / 2}px`,
            width: `${$(document).width()}px`
        })));
        clicked += 1;

        if (clicked == 2) {
            document.getElementsByClassName('psst')[0].innerText = "Click again, somewhere else.";
        } else {
            document.getElementsByClassName('psst')[0].innerText = "Keep clicking.";
        }

        if (clicked == 3) {
            $('body').css({ position: 'absolute' });
        }
    }
})

$(document).on('click', 'div', function (event) {
    event.stopPropagation();
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
    if ($(this).height() > $(this).width()) {
        $(event.target).append($($('<div></div>').css({
            // background: `linear-gradient(to right, transparent, ${rgb})`,
            backgroundColor: `${rgb}`,
            height: `${$(this).height() / 2}px`,
            width: `${$(this).width()}px`
        })))
    } else {
        $(event.target).append($($('<div></div>').css({
            // background: `linear-gradient(to right, transparent, ${rgb})`,
            backgroundColor: `${rgb}`,
            height: `${$(this).height()}px`,
            width: `${$(this).width() / 2}px`
        })))
    }
})
