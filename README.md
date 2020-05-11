# RockPaperScissors

Created as part of the curriculum for The Odin Project. [Live Page](https://andrewjh271.github.io/RockPaperScissors/)

I also adapted this project to make a version I once discussed with a friend: [Boot Root Glute](https://andrewjh271.github.io/root-boot-glute/)

### Functionality

The user and computer both have a scoreboard with five circles that become filled to represent points. When one side wins by scoring five points, the buttons suspend their responsiveness for three seconds to allow the user to see the result of the final game as well as the five filled in circles for whichever side won. Then, text describing the match result appears, also directing the user to choose again to start a new match.

### Thoughts

A few challenges I encountered:

- `button.onclick = function()` and `button.addEventListener('click', function());`
  Apparently the function cannot have arguments. Adding arguments created errors and strange behaviors that I didn't understand. The solutions I found on the internet were kind of confusing; I ended up figuring out my own: calling an unnamed function, with the function I actually wanted to use (with its arguments) inside of it.
  `rockButton.onclick = function(){playRound(0, computerPlay())};`
  *Update*: I commented out this solution and used window.addEventListener instead. It made it so I didn't have to call the function for each button (though I did need to specify each's data set in the .html file). More importantly, it allowed me to use a named function, so I could temporarily disable it after the match completes.
  
- I wanted to find some way to use `${variable}` type language to make another variable. `eval` may have been one option, but the Mozilla developer page said not to use it as it is a security risk. I came across someone else's answer, that this isn't necessary and arrays are usually always what you should do instead. Sure enough that worked well: `userPoint[userScore-1].classList.add('fas');`

- Being aware of box-sizing. Adding a border to the winning image created slight movement inside that flexbox. The best solution I found was just having a border all the time, but making it transparent when I didn't want it.

- I tried to steer away from using px, in favor of vh and vw. I unthinkingly set a lot of height parameters in terms of vw, which looked good for the current size of my window, but made the page less responsive to height changes, and the layout didn't work for a window with a higher than average width:height ratio. I will be sure to set height parameters to vh, not vw.

- ```css
    html, body {
  margin:0;padding:0;height:100%;
  }
  ```
  along with...

```css
width: calc(100vw - 4px);
  height: calc(100vh - 4px);
  /*(if my border is 2px all around)*/
  ```
  
  seems to be a good way to take up the whole page without adding scroll bars. I had to remember that my `#container` also needed to subtract 4px when I set the size with vw and vh.
  
- I kept forgetting that multiple class declarations go in the same statement:
  `<i class="far fa-circle point point5" id="computer-point5"></i>`

- Unexpected things were happening with background images, z-indexes, etc. because I forgot that some of my other background color values were partially transparent.

- Arrow functions. The syntax here took a while to get right:

  ```javascript
  userPoint.forEach(item =>
        item.classList.add('far');
        item.classList.remove('fas');
        })
  ```

- To get rid of outline:

  ```css
  button:focus {
    outline: none;
  }
  ```

- To activate on click (going away after release):

    ```css
    button:active {
    	/* code */
    }
    ```

- Declaring a font-family in *{ } seemed to make it so I couldn't change a specific class's font-family.


I made a sketch on paper of what I wanted before starting to program. I think it helped a lot to make my html clear and simple, and eliminated some of the ad hoc character of my Google Homepage project.

The original project using console.log and alerts is in index-original.