// The Third part

let name = 'Balu';

console.log(name + "'s apples");
console.log('Hello world!');

$('h1').text('We are heaving a 10 minute break');
$('p').html('StayAtHome Coding Camp, Likes: <strong>13</span>');

$('strong').css('background', 'lime');
$('strong').css('padding', '10px');

let color = 'blue';

$('h2').toggleClass(color);
$('h2').toggleClass(color);


$('ul').append('<li>My name is ' + name +'</li>');
$('ul').append('<li id="special-list-item">Removable ' + name +'</li>');

$('#special-list-item').remove();

let addButtonHandler = () => {
    if ($('li').length < 5){
    $('ul').append('<li>My name is ' + name +'</li>');
    }
};

$('#add-button').click(addButtonHandler);

$('#remove-button').click(() => {
    $('li:last-child').remove()
});

// This is the fourth part

let age = 12;

console.log ('Starting the if');
console.log ('This Is a Sentence'.toLowerCase());

if (age < 18) {
  console.log ('Not old enough to drink');
} else { 
  console.log ('Old enough to drink');
}

console.log('This is after the if');


// Fourth part
let colors = ['orange', 'lime', 'magenta', 'yellow', 'blue']


$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[0]);
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[1]);
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[2]);
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[3]);
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[4]);

colors.push('purple');

colors.forEach((color) => {
    $('#box-container').append('<div class="box"></div>');
    $('.box:last-child').css('background', color);
});

for (let i = 0; i < 100; i = i ++) {
    console.log(i);
}

// This a JavaScript comment

/*
    This is a multiline
    JavaScript comment.
*/
// This is a first part

  //  12+3
  // 12/4*5-2*3
  // 9
 
   