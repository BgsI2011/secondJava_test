// Third part:
console.log('Script file is loaded.');

$('h1').html('This is done by <em>JavaScript</em>!');
$ ('h2').toggleClass('blue');
$ ('h2').toggleClass('blue');

let name ='Adam';
let age = 34;

function myLittleFunction(){
    //contdition: number of ps is smaller than 5
    if ($ ('p').length <5) {
        $ ('main').append('<p>A p is appended is the main.</p>');
    } else {
        console.log ('We reached the maximum paragraph number');
    }
    $('p').css('border', '1px solid red');
    $ ('p').css('padding', '10px');
}
myLittleFunction();
myLittleFunction();

$ ('#add').click(myLittleFunction);

$ ('#remove').click(function(){
    $('p:last-child').remove ();
});


// Fourth part:

// if (condition that true or false) {
    //condition is true
//} else {
      //condition is false
//}



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
