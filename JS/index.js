console.log('working well ...')

let click=0
let navBar= document.getElementById('navBar')
let menu = document.getElementById('menu')


menu.addEventListener('click', ()=>{
    
    
     if(click === 1){
      navBar.innerHTML =    `
      
      <div class="upperIcons">
      <img class="icons resIcon"  src="https://img.icons8.com/ios/50/ffffff/home--v1.png"/>
      <br>
      <img class="icons resIcon"  src="https://img.icons8.com/ios-filled/50/ffffff/chat-message-sent.png"/>
      <br>
      <img class="icons resIcon"  src="https://img.icons8.com/ios-filled/50/ffffff/add-song.png"/>
      <br>
      <img  class="icons resIcon" src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/ffffff/external-game-coding-kiranshastry-solid-kiranshastry.png"/>


      </div>
      
      
      `
     click = 0;
     }
      else{
            navBar.innerHTML=`
            
            <div class="upperIcons">
                        <img class="icons resIcon" src="https://img.icons8.com/ios/50/ffffff/facebook--v1.png" />
                        <img class="icons resIcon" src="https://img.icons8.com/ios/50/ffffff/instagram-new.png" />
                        <img class="icons resIcon" src="https://img.icons8.com/ios/50/ffffff/twitter-circled.png" />
                        <img class="icons resIcon" src="https://img.icons8.com/ios/50/ffffff/github.png" />
                    </div>
                    <div class="middle">

                        <div class="middleLine">
                        </div>
                        <p>Example</p>
                        <div class="share">
                            <img
                                src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/ffffff/external-share-network-sharing-those-icons-lineal-those-icons.png" />
                        </div>
            
            `
            click = 1
      }
})





