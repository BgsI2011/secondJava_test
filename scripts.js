// Third part:
console.log('Script file is loaded.');

$('h1').html('This is done by <em>JavaScript</em>!');
$ ('h2').toggleClass('blue');
$ ('h2').toggleClass('blue');

let name ='Adam';
let age = 34;

function myLittleFunction(){
    $ ('main').append('<p>A p is appended is the main.</p>');
    $('p').css('border', '1px solid red');
    $ ('p').css('padding', '10px');
}
myLittleFunction();
myLittleFunction();

$ ('#add').click(myLittleFunction);

$ ('#remove').click(function(){
    $('p:last-child').remove ();
});

// Single line comment
/* Multiple
lines
of comments
*/
//Firstpart:
// 1+1
// 2
// 3+5
// 8
// 55+66+5
// 126
