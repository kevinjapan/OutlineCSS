
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
      footer.innerHTML = `
         <ul>
            <li>
               <img class="logo" style="max-height:80px;border:solid 5px black;" src="./imgs/logo-outlinecss-education.jpg" alt="logo" />
            </li>
            <li>
               <ul>
                  <li>
                     <a href="home.html">Home</a></li>
                  <li>
                     <a href="quicklinks.html">QuickLinks</a></li>
               </ul>      
            </li>
         </ul>
         <ul class="footnote">
            <li>
               Copyright &#169; ` + copyright_from(2022) + `
            </li>
         </ul>`
   }
}

footer()