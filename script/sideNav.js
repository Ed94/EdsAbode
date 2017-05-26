var show = false; var close = true
        
        function sideNav()
        {
            if (show == true)
            {
                openNav();
                
                close = true ;
                show  = false;
            }
            else if (close == true)
            {
                closeNav();
                
                show  = true ;
                close = false;
                
            }
        }
        
        function openNav() 
        {
            document.getElementById("sideNav").style.width       = "15vw";
            document.getElementById("main"   ).style.marginRight = "15vw";
            
            document.getElementById("SideBtn").setAttribute("class", "SideBtnVertFlip")
        }

        function closeNav() 
        {
            document.getElementById("sideNav").style.width       = "0";
            document.getElementById("main"   ).style.marginRight = "0";
            
            document.getElementById("SideBtn").setAttribute("class", "SideBtnVertNorm")
        }