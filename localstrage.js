function test(){
var uid =document.getElementById('name').value;
var eid =document.getElementById('mail').value;
var phoneid =document.getElementById('phone').value;
console.log(phoneid);
console.log('hello');
localStorage.setItem('usename',uid);
localStorage.setItem('email',eid);
localStorage.setItem('phone', phoneid);
}