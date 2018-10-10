
$(document).ready(function(){

    // Startsidan
    var ourUser = "test";
    var ourPassword = "test";

    $(".addItem").hide();
    $(".logout").hide();
    $(".tryAgain").hide();

    // Skapar array och sparar i en session, null = är den tom?
    if (sessionStorage.doList == null) {
       
        var deltagare = [
            "Pelle",
            "Anna",
            "Gunilla",
            "Kalle" 
        ];

        // Sparar i session
        var json_str = JSON.stringify(deltagare);
        sessionStorage.doList = json_str;
    };
       
    // Klicka på logga in
    $(".buttonLogin").click(function(){


      if (ourUser == $(".userName").val() && ourPassword == $(".pwd").val()) {
    
                $(".login").hide();
                $(".logout").show();
                $(".ToDoList").show();
                $(".tryAgain").hide();
                $(".forgotForm").hide();
                $(".addItem").show();
            
                printTodoList();
        
            } else {    

                $(".login").hide();
                $(".forgotForm").show();
                $(".tryAgain").show();
            
            }
        }
    );

    function printTodoList(){
                
        var loopArr = JSON.parse(sessionStorage.doList);

        // Loopa alla att göra
        var printList = "<ol>";

        for(var i = 0; i < loopArr.length; i++) {

            printList += "<li><a class='listLink' onClick='deleteTodoItem("+ i +")'>" + loopArr[i] + " <i class='listItem fa fa-square-o'></i></a></li>";
       
        }
        
        printList = printList + "</ol>";
        
        $(".TodoList").html(printList);    
    }

    // Lägg till ett nytt todo item i listan
    $(".addNewTodoItemButton").click(function(){
        
        var parseTodoArray = JSON.parse(sessionStorage.doList);
                       
        parseTodoArray.push( $(".NewTodoItem").val() );
                       
        // Printar
        var json_str = JSON.stringify(parseTodoArray);
        sessionStorage.doList = json_str;
        
        //Callback
        printTodoList();
    });   

        deleteTodoItem = function(i) {
            
            // HÄMTA LISTAN
            var parseTodoArray = JSON.parse(sessionStorage.doList);
            
            // RADERA UPPGIFT
            parseTodoArray.splice(i,1);
            
            // SPARA OM LISTAN
            var json_str = JSON.stringify(parseTodoArray);
            sessionStorage.doList = json_str;
        
            printTodoList();     
        }
});





