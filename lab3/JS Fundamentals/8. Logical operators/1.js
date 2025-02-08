// 1-5
alert( null || 2 || undefined ); // 2
alert( alert(1) || 2 || alert(3) ); // 1 2
alert( 1 && null && 2 ); // null
alert( alert(1) && alert(2) ); // 1 undefined (alert return undefined)
alert( null || 2 && 3 || 4 ); // 3

// 6
if (age >= 14 && age <= 90) {}
// 7
if (age < 14 || age > 90) {}
// 8
if (-1 || 0) alert( 'first' ); // yes
if (-1 && 0) alert( 'second' ); // no
if (null || -1 && 1) alert( 'third' ); // yes
// 9
let userName = prompt("Who's there?");

if (userName === null) {
    alert('Canceled');
} else if (userName === 'Admin') {
    let password = prompt('Password?');

    if (password === null) {
        alert( 'Canceled' );
    } else if (password == 'TheMaster') {
        alert( 'Welcome!' );
    } else {
        alert( 'Wrong password' );
    }
} else {
    alert( "I don't know you" );
}