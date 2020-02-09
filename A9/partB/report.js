/*

   Author:   Mason Rich
   Date:     November 13, 2018

   Filename: report.js



   Functions List:

   initPage()
      Initializes the contents of the Web page

   testLength()
      Tests a field for its length

   testPattern()
      Tests a field for its pattern

   validateForm
      Validates a Web form

   calcRow
      Calculates the costs within one row of the travel report

   calcTotal
      Calculates the total cost of the travel

   upDate
      Updates the total travel cost
*/

window.onload = initPage;

function initPage(){
    
    var dataFields = []  
    var elements = document.getElementsByClassName("expenseEntry");
    
    
    for (i = 0; i < elements.length; i++) 
    {
        dataFields[i] = elements[i];
        dataFields[i].addEventListener("blur", update);
    }
    
    //window.addEventListener("onsubmit", validateForm)
    
    document.forms[0].onsubmit = validateForm;
   
}

function testLength(field) {
    
    if (field.value.length == 0)
    {
        field.style.backgroundColor = "yellow"
        return false;
    }
    else 
    {
       field.style.backgroundColor = "white"
       return true;
    }
    
}

function testPattern(field, regx) {
    if(!regx.test(field.value))
    {
        field.style.backgroundColor = "yellow";
        field.style.color = "red";
        return false;
    }
    else
    {
        field.style.backgroundColor = "white"
        field.style.color = "black"
        return true;
    }

}
    
function validateForm(){
    var isValid = true; 
    if(testLength(document.forms[0].lname) == false)
    {
        isValid = false;
    }
    if(testLength(document.forms[0].fname) == false)
    {
        isValid = false;
    }
    if(testLength(document.forms[0].address) == false)
    {
        isValid = false;
    }
    if(testLength(document.forms[0].summary) == false)
    {
        isValid = false;
    }
    
    if(testPattern(document.forms[0].account, /^ACT\d{6}$/) == false)
    {
         isValid = false;   
    }
    
    if(testPattern(document.forms[0].department, /^DEPT\d{3}$/) == false)
    {
         isValid = false;   
    }
    
    if(testPattern(document.forms[0].project, /^PROJ\d{3}$/) == false)
    {
         isValid = false;   
    }
    
    if(testPattern(document.forms[0].ssn, /^\d{3}-?\d{2}-?\d{4}$/) == false)
    {
        isValid = false;
    }
    
    if (isValid == false)
    {
        alert("Please fill out all required fields in the proper format")
    }
     
    return isValid;
}

function calcRow(row) {
   var travel = parseFloat(document.forms[0].elements['travel' + row].value)
   var lodge = parseFloat(document.forms[0].elements['lodge' + row].value)
   var meal = parseFloat(document.forms[0].elements['meal' + row].value)
   var sum = (travel + lodge + meal)
   return sum;
}

function calcTotal(){
    var totalExp = 0;
    for(var i = 1; i <= 4; i++)
    {
        totalExp += calcRow(i)
    }
    return totalExp;
}

function update(){
    var numRegExp = /^\d*(\.\d{0,2})?$/;
    if (numRegExp.test(this.value) == true)
    {
        
         this.value = parseFloat(this.value).toFixed(2)
        
          for(var i = 1; i <= 4; i++)
          {
                document.forms[0].elements["sub" + i].value = calcRow(i).toFixed(2);
          }
          
          document.forms[0].total.value = calcTotal().toFixed(2);    
    }
    
    else if(numRegExp.test(this.value) == false)
    {
        alert("Invalid currency value")
        this.value = 0.00
        this.focus();
    }
  
}



