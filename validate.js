function validate()
{
    var firstname=document.forms["rgform"]["firstname"].value;
    var lname=document.forms["rgform"]["lastname"].value;
    var pnum=document.forms["rgform"]["number"].value;
    var email=document.forms["rgform"]["email"].value;
    var descp=document.forms["rgform"]["description"].value;
    if(firstname ==""|| firstname==null)
    {
       alert('please enter firstname');
        return false;
    }
}
