var n=0
function gen_input_fields(){
    n=parseInt($("#n_entries").val());
    console.log(n);
    in_fields="";
    for (i=0;i<n;i++){
    in_fields+="<tr><td>Letter Grade<td></td><td> \
        <select id='grade"+i+"'  class='search w-100'> \
        <option value='4.0'>A</option> \
        <option value='3.0'>B</option> \
        <option value='2.0'>C</option> \
        <option value='1.0'>D</option> \
        <option value='0.0'>F</option> \
        </select></td></tr> \
        <tr><td>Credit Hours<td></td><td><input id='ch"+i+"' type='number' min=1 value=1 class='search w-100'></td></tr>";
    }
    $("#entries").html(in_fields);
    if(n>0)document.getElementById("submit_entries").style.display="block";
    else document.getElementById("submit_entries").style.display="none";
    document.getElementById("average_gpa").style.display="none";
}
function average_gpa(){
    var numerator=0,denominator=0;
    for (i=0;i<n;i++){
        grade=parseFloat($("#grade"+i).val());
        credit_hours=parseInt($("#ch"+i).val());
        numerator+=grade*credit_hours;
        denominator+=credit_hours;
    }
    if(n>0){
        document.getElementById("average_gpa").innerHTML='Average GPA: '+ numerator/denominator;
        document.getElementById("average_gpa").style.display="block";
    }
}