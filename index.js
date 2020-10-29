function list() {
    //enter items they need to purchase by 
    //entering text and hitting "Return" or 
    //clicking the "Add item" button

    //check and uncheck items on the list by 
    //clicking the "Check" button

    $('ul').on('click','.shopping-item-toggle', function(event) {
        $(this).closest('div').prev().toggleClass('shopping-item__checked');
 
     })
     
    //permanently remove items from the list

    $('ul').on('click','.shopping-item-delete', function(event) {
       $(this).closest('li').remove();

    })

}

$(list);