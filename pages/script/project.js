function open(a)
{
    var name     = document.getElementById(a);
    
    if (name.style.margin == "1vw")
    {
         name.style.margin = "0";
    }
    else 
    {
        name.className = "KillMePlease";
    }
}