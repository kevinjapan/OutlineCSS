const copyright_from = (from_year) => {
   const today = new Date()
   const current_year = today.getFullYear()
   if(!from_year) return current_year
   if(current_year !== from_year) {
      return from_year + '-' + current_year
   }
   return from_year
}

const footer = () => {

   const footer = document.getElementById('footer')

   if(footer) {

      // to do : replace this!
      footer.innerHTML = `
         <ul>
            <li>
               <a href="home.html"><img class="logo" src="./imgs/logo-outlinecss-education.jpg" alt="logo" /></a>
            </li>
            <li>
               <ul>
                  <li><a href="/index.html">Home</a></li>
                  <li><a href="/pages/components.html">Components</a></li>
                  <li><a href="/pages/about.html">About</a></li>
               </ul> 
            </li>
            <li>
               <ul>
                  <li><a href="https://github.com/kevinjapan/OutlineCSS" target="_blank">Github</a></li>
               </ul>      
            </li>
         </ul>
         <ul class="footnote">
            <li>Copyright &#169; ` + copyright_from(2022) + `</li>
         </ul>`
   }
}

footer()