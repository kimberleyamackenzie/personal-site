// $(function () {
//     var dragging = false,
//         target_wp,
//         o_x, o_y, h_x, h_y, last_angle;
//     $('.handle').mousedown(function (e) {
//         h_x = e.pageX;
//         h_y = e.pageY; // clicked point
//         e.preventDefault();
//         e.stopPropagation();
//         dragging = true;
//         target_wp = $(e.target).closest('#wheel');
//         if (!target_wp.data("origin")) target_wp.data("origin", {
//             left: target_wp.offset().left,
//             top: target_wp.offset().top
//         });
//         o_x = target_wp.data("origin").left;
//         o_y = target_wp.data("origin").top; // origin point
        
//         last_angle = target_wp.data("last_angle") || 0;
//     })

//     $(document).mousemove(function (e) {
//         if (dragging) {
//             var s_x = e.pageX,
//                 s_y = e.pageY; // start rotate point
//             if (s_x !== o_x && s_y !== o_y) { //start rotate
//                 var s_rad = Math.atan2(s_y - o_y, s_x - o_x); // current to origin
//                 s_rad -= Math.atan2(h_y - o_y, h_x - o_x); // handle to origin
//                 s_rad += last_angle; // relative to the last one
//                 var degree = (s_rad * (360 / (2 * Math.PI)));
//                 target_wp.css('-moz-transform', 'rotate(' + degree + 'deg)');
//                 target_wp.css('-moz-transform-origin', '50% 50%');
//                 target_wp.css('-webkit-transform', 'rotate(' + degree + 'deg)');
//                 target_wp.css('-webkit-transform-origin', '50% 50%');
//                 target_wp.css('-o-transform', 'rotate(' + degree + 'deg)');
//                 target_wp.css('-o-transform-origin', '50% 50%');
//                 target_wp.css('-ms-transform', 'rotate(' + degree + 'deg)');
//                 target_wp.css('-ms-transform-origin', '50% 50%');
//             }
//         }
//     }) // end mousemove
    
//     $(document).mouseup(function (e) {
//         dragging = false
//         var s_x = e.pageX,
//             s_y = e.pageY;
        
//         // Saves the last angle for future iterations
//         var s_rad = Math.atan2(s_y - o_y, s_x - o_x); // current to origin
//         s_rad -= Math.atan2(h_y - o_y, h_x - o_x); // handle to origin
//         s_rad += last_angle;
//         target_wp.data("last_angle", s_rad);
//     })
// })
// let initialClick = false;



// $('body').click(function(){
//     if (!initialClick){
//         console.log('in body click');
//         // let newDiv = $('body').append('<div>Testing</div>');
//         // let height = newDiv.parent().height() / 2;
//         // let width =  newDiv.parent().width() / 2;
//         // $(newDiv).height(height).css({
//         //     backgroundColor: "blue",
//         // })
    
//         $('body').add('<div></div>').css({
//             backgroundColor: `rgb(${r},${g},${b})`,
//             height: $('body').height() / 2,
//             width: $('body').width()
//         }).appendTo(event.target);
//         initialClick = true;
//     }


// })




// $('div').click(function(event){
//     let r = Math.floor((Math.random() * 256));
//     let b = Math.floor((Math.random() * 256));
//     let g = Math.floor((Math.random() * 256));

//     console.log(event);
//     console.log('in div click');

//     // let anotherDiv = '<div></div>';
        
//     $(event.currentTarget).append($(event.currentTarget).add('<div></div>').css({
//         backgroundColor: `rgb(${r},${g},${b})`,
//         height: $(event.target).height() / 2,
//         width: $(event.target).width()
//     }));



    // $(event.currentTarget).wrapInner('<div></div>').css({
    //     backgroundColor: `rgb(${r},${g},${b})`,
    //     height: $(event.target).height() / 2,
    //     width: $(event.target).width()
    // });

    // $('div').add('div').css({
    //     backgroundColor: `rgb(${r},${g},${b})`,
    //     height: event.target.parentElement.style.height / 2,
    // }).appendTo(event.target.parentElement);
    // console.log(event.target.style.height);
    // let nextNewDiv = $('div').append('<div>Double Testing</div>');
    // let height = nextNewDiv.parent().height() / 2;
    // let width =  nextNewDiv.parent().width() / 2;
    // $(nextNewDiv).height(height);
    
    // $(newDiv).width(width).css({
    //     backgroundColor: "green",
    // })

// })

let r = Math.floor(Math.random()*256);          // Random between 0-255
let g = Math.floor(Math.random()*256);          // Random between 0-255
let b = Math.floor(Math.random()*256);  

let height = $(document).height();
let width = $(document).width();
console.log(height);
$('body').height(height);
$('body').width(width);

console.log($('body').height());

// let clicked = false;
// $('body').click(function() {
//     if(clicked == false){
//         r = Math.floor(Math.random()*256);        
//         g = Math.floor(Math.random()*256);
//         b = Math.floor(Math.random()*256);  
//         let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
//             $(event.target).append($($('<div id=newDiv></div>').css({
//                 backgroundColor: rgb,
//                 height: `${$(event.target).height() / 2}px`,
//                 width: `${$(event.target).width() / 2}px`
//             })));

//             r = Math.floor(Math.random()*256);        
//             g = Math.floor(Math.random()*256);
//             b = Math.floor(Math.random()*256);  
//             rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
//             $(event.target).append($($('<div id=newDiv></div>').css({
//                 backgroundColor: rgb,
//                 height: `${$(event.target).height() / 2}px`,
//                 width: `${$(event.target).width() / 2}px`
//             })));

//             r = Math.floor(Math.random()*256);        
//             g = Math.floor(Math.random()*256);
//             b = Math.floor(Math.random()*256);  
//             rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
//             $(event.target).append($($('<div id=newDiv></div>').css({
//                 backgroundColor: rgb,
//                 height: `${$(event.target).height() / 2}px`,
//                 width: `${$(event.target).width() / 2}px`
//             })));

//             r = Math.floor(Math.random()*256);        
//             g = Math.floor(Math.random()*256);
//             b = Math.floor(Math.random()*256);  
//             rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
//             $(event.target).append($($('<div id=newDiv></div>').css({
//                 backgroundColor: rgb,
//                 height: `${$(event.target).height() / 2}px`,
//                 width: `${$(event.target).width() / 2}px`
//             })));

//         clicked = true;
//     }
// })

let clicked = 1;
$('body').click(function() {
    if(clicked < 4){

        r = Math.floor(Math.random()*256);        
        g = Math.floor(Math.random()*256);
        b = Math.floor(Math.random()*256);  
        let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
        let rgb2 = 'rgb(' + r + 1 + ',' + g + 1 + ',' + b + 1 + ')';

            $(event.target).append($($('<div id=newDiv></div>').css({
                // background: `linear-gradient(135deg, ${rgb2}, ${rgb})`,
                backgroundColor: `${rgb}`,


                height: `${$(document).height() / 2}px`,
                width: `${$(document).width()}px`
            })));
        clicked += 1;
        
        if(clicked == 3){
            $('body').css({position: 'absolute'});
        }

    }


})

$(document).on('click', 'div', function(event) {
    event.stopPropagation();
    console.log(event);
    console.log('in div click');
    r = Math.floor(Math.random()*256);          // Random between 0-255
    g = Math.floor(Math.random()*256);          // Random between 0-255
    b = Math.floor(Math.random()*256);  
    let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
    if ($(this).height() > $(this).width()){
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