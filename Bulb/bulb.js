function light(show)
{
    var pic;
    if(show===1)
      {
          pic="on_bulb.jpg";
      }
    else
    {
        pic="bulb.jpg";
    }  
    let bulb_el=document.getElementById('BULB')
    bulb_el.src=pic
}