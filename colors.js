let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);        
let b = Math.floor(Math.random() * 256);

let height = $(document).height();
let width = $(document).width();
console.log(height);
$('body').height(height);
$('body').width(width);

$('#header').click(function (event){
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

        if (clicked == 3) {
            $('body').css({ position: 'absolute' });
        }
    }
})

$(document).on('click', 'div', function (event) {
    event.stopPropagation();
    console.log(event);
    console.log('in div click');
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
