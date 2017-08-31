function Focus(item)
{
    var name = document.getElementById(item);
    
    if (name.className == "unfocused")
    {
        name.className = "focused";
    }
    else 
    {
        name.className = "unfocused";    
    }
}