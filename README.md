# RockPaperScissors

A few challenges I encountered:

button.onclick = function() or button.addEventListener('click', function());
Apparently the function cannot have arguments. Adding arguments created strange
behaviors that I didn't understand. The solutions I found on the internet were 
kind of confusing; I ended up figuring out my own: calling an unnamed function, with
the function I actually wanted to use (with its arguments) inside of it.
rockButton.onclick = function(){playRound(0, computerPlay())};

Being aware of box-sizing. Adding a border to the winning image created slight movement inside that flexbox. The best solution I found was just having a border all the time, but transparent when I didn't want it.

I tried to steer away from using px, in favor of vh and vw.

I kept forgetting that multiple class declarations go in the same statement:
<i class="far fa-circle point point5" id="computer-point5"></i>

Unexpected things were happening with background images, z-indexes, etc. because I forgot that some of my other background color values were partially transparent.

Arrow functions. The syntax here took a while to get right:
userPoint.forEach(item => {
      item.classList.add('far');
      item.classList.remove('fas');
    })

To get rid of outline:
button:focus{
  outline: none;
}
On click (going away after release):
button:active{
}

Declaring a font-family in *{ } seemed to make it so I couldn't change a specific class's font-family.

I made a sketch on paper of what I wanted. I think it helped a lot making my html clear and simple, and eliminated some of the adhoc character of my Google Homepage project.

The original project using console.log and alerts is in index-original.