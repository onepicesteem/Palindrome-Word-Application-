$(function(){
   $('#btnFor').click(function(){
    var inputValue=$('#txt').val();
    var array1=inputValue.split("");
    //console.log(array1);
    var array2=[];
    var i=array1.length-1;
    for (let index = 0; index < array1.length; index++) {
        array2[i]=array1[index];
        i=i-1;
    }
    

    var string1=array1.join();
    var string2=array2.join();
    console.log(string1);
    console.log(string2);

    if(string1==string2){
        $('#p').removeClass("alert alert-danger");
        $('#p').addClass("alert alert-info");
        $('#p').text('The value entered is a palindrome word');
    }else{
        $('#p').removeClass("alert alert-info");
        $('#p').addClass("alert alert-danger");
        $('#p').text('The value entered is not a palindrome word');
    }

   });

   $('#btnReverse').click(function(){
    var inputValue=$('#txt').val();
    var array1=inputValue.split("");
    var array2=inputValue.split("").reverse();

    var string1=array1.join();
    var string2=array2.join();

    if(string1==string2){

        $('#p').removeClass("alert alert-danger");
        $('#p').addClass("alert alert-success");
        $('#p').text('The value entered is a palindrome word');
        
    }else{

        $('#p').removeClass("alert alert-success");
        $('#p').addClass("alert alert-danger");
        $('#p').text('The value entered is not a palindrome word');
    }

   });

   $('#btnReduce').click(function(){
    var inputValue=$('#txt').val();
    var array=inputValue.split("");
    var leftToRight=_.reduce(array,function(memo,i){
        return memo+i;
    })
    var rightToLeft=_.reduceRight(array,function(memo,i){
        return memo+i;
    })

    if(leftToRight==rightToLeft){
       
        $('#p').removeClass("alert alert-danger");
        $('#p').addClass("alert alert-warning");
        $('#p').text('The value entered is a palindrome word');
        
    }else{
        $('#p').removeClass("alert alert-warning");
        $('#p').addClass("alert alert-danger");
        $('#p').text('The value entered is not a palindrome word');
    }
   });

   
});