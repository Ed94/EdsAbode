function panelFocus(a)
{
    var name = document.getElementById(a);
              
    if (name.getAttribute("class") == "projectClose")
    {
         name.setAttribute("class", "projectOpen");
    }
    else
    {
        name.setAttribute("class", "projectClose");
    }
}