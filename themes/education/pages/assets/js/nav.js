

const nav = () => {

   const nav = document.getElementById('nav')

   if(nav) {
      nav.innerHTML = `
      <div class="logo_block">
         <a href="home.html">
            <img class="logo" src="./imgs/logo-outlinecss-education.jpg" alt="logo"/>
         </a>
      </div>

      <div class="nav_toggle">menu</div>

      <!-- to do : make a default set of typical link labels below.. -->
   
      <ul class="nav_list">
         <li>
            <a href="Study.html" data-list="services" class="nav_list_label">Study</a>
            <ul class="nav_list_dropdown">
               <li>
                  <a href="Undergraduate.html"><h5>Undergraduate</h5></a>
                  <a href="river.html">Degrees</a>
                  <a href="#" class="lightgray">Go Abroad</a>
                  <a href="#" class="lightgray">Finance and Funding</a>
                  <a href="Undergraduate-How-To-Apply.html">How to Apply</a>
               </li>  
               <li>  
                  <a href="#" class="lightgray"><h5 class="lightgray">Postgraduate Taught</h5></a>
                  <a href="#" class="lightgray">Postgraduate Degrees</a>
                  <a href="#" class="lightgray">Part-time Study</a>
                  <a href="#" class="lightgray">Finance and Funding</a>
                  <a href="#" class="lightgray">How to Apply</a>
               </li>  
               <li>  
                  <a href="#" class="lightgray"><h5 class="lightgray">Postgraduate Research</h5></a>
                  <a href="#" class="lightgray">Research Areas</a>
                  <a href="#" class="lightgray">PhD Opportunities</a>
                  <a href="#" class="lightgray">Finance and Funding</a>
                  <a href="#" class="lightgray">How to Apply</a>
               </li>  
               <li>  
                  <a href="#" class="lightgray"><h5 class="lightgray">outlinecss components</h5></a>
                  <a href="feature_block.html">Feature Block</a>
                  <a href="feature_tiles.html">Feature Tiles</a>
                  <a href="cover_block.html">Cover Block</a>
                  <a href="animated_feature_tiles.html">Animated Feature Tiles</a>
               </li> 
            </ul>
         </li>
         <li>
            <a href="About.html" "services" class="nav_list_label">About</a>
            <ul class="nav_list_dropdown">
               <li>  
                  <a href="About.html">About</a>
                  <a href="#" class="lightgray">Campus & Access</a>
                  <a href="#" class="lightgray">Maps and Directions</a>
                  <a href="#" class="lightgray">Contact Information</a>
               </li>  
               <li>  
                  <a href="#" class="lightgray">News</a>
                  <a href="#" class="lightgray">Events</a>
                  <a href="#" class="lightgray">History</a>
                  <a href="#" class="lightgray">Facts & Figures</a>
               </li>  
               <li>  
                  <a href="#" class="lightgray">Schools and Institutes</a>
                  <a href="#" class="lightgray">Governance and Strategy</a>
               </li>  
            </ul>
         </li>
         <li>
            <a href="Research.html" data-list="services" class="nav_list_label">Research</a>
            <ul class="nav_list_dropdown">
               <li> 
                  <a href="#" class="lightgray">Explore our Research</a>
                  <a href="#" class="lightgray">Impact</a>
                  <a href="#" class="lightgray">Find a Centre or Institute Facilities</a> 
                  <a href="#" class="lightgray">Collaborations</a> 
                  <a href="#" class="lightgray">Center For Excellence</a> 
               </li>  
               <li>  
                  <a href="#" class="lightgray">Postgraduate Research</a>
                  <a href="#" class="lightgray">Study</a>
                  <a href="#" class="lightgray">Research Jobs</a>
                  <a href="#" class="lightgray">Research Support</a>
               </li>  
            </ul>  
         </li>
         <li>
            <a href="QuickLinks.html" data-list="services" class="nav_list_label">Quick Links</a>
            <ul class="nav_list_dropdown">
               <li>  
                  <a href="#" class="lightgray"><h5 class="lightgray">Student Resources</h5></a>
                  <a href="#" class="lightgray">MyTimetable</a>
                  <a href="#" class="lightgray">MyCurriculum</a>
                  <a href="#" class="lightgray">Student Hub</a>
               </li>  
               <li>  
                  <a href="#" class="lightgray"><h5 class="lightgray">StaffNet</h5></a>
                  <a href="#" class="lightgray">Working Here</a>
                  <a href="#" class="lightgray">Management Information Systems</a>
                  <a href="#" class="lightgray">Teaching & Learning</a>
                  <a href="#" class="lightgray">Policy & Governance</a>
                  <a href="#" class="lightgray">Staff Email</a>
               </li>  
               <li>  
                  <a href="#" class="lightgray"><h5 class="lightgray">Website</h5></a>
                  <a href="#" class="lightgray">Study</a>
                  <a href="about.html">About</a>
                  <a href="#" class="lightgray">Research</a>
                  <a href="#" class="lightgray">Alumni</a>
                  <a href="#" class="lightgray">Business</a>
               </li>  
               <li>  
                  <a href="#" class="lightgray"><h5 class="lightgray">Popular</h5></a>
                  <a href="#" class="lightgray">For Students</a>
                  <a href="#" class="lightgray">For Staff</a>
                  <a href="#" class="lightgray">Online Store</a>
                  <a href="#" class="lightgray">Jobs</a>
                  <a href="#" class="lightgray">Library</a>
                  <a href="#" class="lightgray">A to Z</a>
               </li>  
            </ul>  
         </li>
         <li><a href="Contact.html" class="nav_list_label">Contact</a></li>
      </ul>`
   }
}

nav()