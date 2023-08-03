

const nav = () => {

   const nav = document.getElementById('nav')

   if(nav) {
      nav.innerHTML = `
      <div class="logo_block">
         <a href="home.html">
            <img class="logo" src="./imgs/logo-outlinecss-education.jpg" alt="logo"/>
         </a>
      </div>

      <div class="nav_toggle_wrap">
         <div class="nav_toggle">
            <div class="toggle_bar"></div>
            <div class="toggle_bar"></div>
            <div class="toggle_bar"></div>
         </div>
      </div>
   
      <ul class="menu">
         <li>
            <a class="menu-item menu_label" href="Study.html" data-list="services">Study</a>
            <ul class="menu_dropdown">
               <li>
                  <a class="menu-item" href="Undergraduate.html"><h5>Undergraduate</h5></a>
                  <a class="menu-item" href="Undergraduate-Degrees.html">Degrees</a>
                  <a class="menu-item" href="#" class="lightgray">Go Abroad</a>
                  <a class="menu-item" href="#" class="lightgray">Finance and Funding</a>
                  <a class="menu-item" href="Undergraduate-How-To-Apply.html">How to Apply</a>
               </li>  
               <li>  
                  <a class="menu-item" href="#" class="lightgray"><h5 class="lightgray">Postgraduate Taught</h5></a>
                  <a class="menu-item" href="#" class="lightgray">Postgraduate Degrees</a>
                  <a class="menu-item" href="#" class="lightgray">Part-time Study</a>
                  <a class="menu-item" href="#" class="lightgray">Finance and Funding</a>
                  <a class="menu-item" href="#" class="lightgray">How to Apply</a>
               </li>  
               <li>  
                  <a class="menu-item" href="#" class="lightgray"><h5 class="lightgray">Postgraduate Research</h5></a>
                  <a class="menu-item" href="#" class="lightgray">Research Areas</a>
                  <a class="menu-item" href="#" class="lightgray">PhD Opportunities</a>
                  <a class="menu-item" href="#" class="lightgray">Finance and Funding</a>
                  <a class="menu-item" href="#" class="lightgray">How to Apply</a>
               </li>  
               <li>  
                  <a class="menu-item" href="#" class="lightgray"><h5 class="lightgray">outlinecss components</h5></a>
                  <a class="menu-item" href="feature_block.html">Feature Block</a>
                  <a class="menu-item" href="feature_tiles.html">Feature Tiles</a>
                  <a class="menu-item" href="cover_block.html">Cover Block</a>
                  <a class="menu-item" href="animated_feature_tiles.html">Animated Feature Tiles</a>
               </li> 
            </ul>
         </li>
         <li>
            <a class="menu-item menu_label" href="About.html" "services">About</a>
            <ul class="menu_dropdown">
               <li>  
                  <a class="menu-item" href="About.html">About</a>
                  <a class="menu-item" href="#" class="lightgray">Campus & Access</a>
                  <a class="menu-item" href="#" class="lightgray">Maps and Directions</a>
                  <a class="menu-item" href="#" class="lightgray">Contact Information</a>
               </li>  
               <li>  
                  <a class="menu-item" href="#" class="lightgray">News</a>
                  <a class="menu-item" href="#" class="lightgray">Events</a>
                  <a class="menu-item" href="#" class="lightgray">History</a>
                  <a class="menu-item" href="#" class="lightgray">Facts & Figures</a>
               </li>  
               <li>  
                  <a class="menu-item" href="#" class="lightgray">Schools and Institutes</a>
                  <a class="menu-item" href="#" class="lightgray">Governance and Strategy</a>
               </li>  
            </ul>
         </li>
         <li>
            <a class="menu-item menu_label" href="Research.html" data-list="services">Research</a>
            <ul class="menu_dropdown">
               <li> 
                  <a class="menu-item" href="#" class="lightgray">Explore our Research</a>
                  <a class="menu-item" href="#" class="lightgray">Impact</a>
                  <a class="menu-item" href="#" class="lightgray">Find a Centre or Institute Facilities</a> 
                  <a class="menu-item" href="#" class="lightgray">Collaborations</a> 
                  <a class="menu-item" href="#" class="lightgray">Center For Excellence</a> 
               </li>  
               <li>  
                  <a class="menu-item" href="#" class="lightgray">Postgraduate Research</a>
                  <a class="menu-item" href="#" class="lightgray">Study</a>
                  <a class="menu-item" href="#" class="lightgray">Research Jobs</a>
                  <a class="menu-item" href="#" class="lightgray">Research Support</a>
               </li>  
            </ul>  
         </li>
         <li>
            <a class="menu-item menu_label" href="QuickLinks.html" data-list="services">Quick Links</a>
            <ul class="menu_dropdown">
               <li>  
                  <a class="menu-item" href="#" class="lightgray"><h5 class="lightgray">Student Resources</h5></a>
                  <a class="menu-item" href="#" class="lightgray">MyTimetable</a>
                  <a class="menu-item" href="#" class="lightgray">MyCurriculum</a>
                  <a class="menu-item" href="#" class="lightgray">Student Hub</a>
               </li>  
               <li>  
                  <a class="menu-item" href="#" class="lightgray"><h5 class="lightgray">StaffNet</h5></a>
                  <a class="menu-item" href="#" class="lightgray">Working Here</a>
                  <a class="menu-item" href="#" class="lightgray">Management Information Systems</a>
                  <a class="menu-item" href="#" class="lightgray">Teaching & Learning</a>
                  <a class="menu-item" href="#" class="lightgray">Policy & Governance</a>
                  <a class="menu-item" href="#" class="lightgray">Staff Email</a>
               </li>  
               <li>  
                  <a class="menu-item" href="#" class="lightgray"><h5 class="lightgray">Website</h5></a>
                  <a class="menu-item" href="#" class="lightgray">Study</a>
                  <a class="menu-item" href="about.html">About</a>
                  <a class="menu-item" href="#" class="lightgray">Research</a>
                  <a class="menu-item" href="#" class="lightgray">Alumni</a>
                  <a class="menu-item" href="#" class="lightgray">Business</a>
               </li>  
               <li>  
                  <a class="menu-item" href="#" class="lightgray"><h5 class="lightgray">Popular</h5></a>
                  <a class="menu-item" href="#" class="lightgray">For Students</a>
                  <a class="menu-item" href="#" class="lightgray">For Staff</a>
                  <a class="menu-item" href="#" class="lightgray">Online Store</a>
                  <a class="menu-item" href="#" class="lightgray">Jobs</a>
                  <a class="menu-item" href="#" class="lightgray">Library</a>
                  <a class="menu-item" href="#" class="lightgray">A to Z</a>
               </li>  
            </ul>  
         </li>
         <li><a class="menu-item" href="Contact.html">Contact</a></li>
      </ul>`
   }
}

nav()