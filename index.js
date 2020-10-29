function list() {
    //enter items they need to purchase by 
    //entering text and hitting "Return" or 
    //clicking the "Add item" button
    $('form').submit(function(event) {
        event.preventDefault();
        let item = $('input').val();
        $('.shopping-list').append('\
            <li>\
                <span class="shopping-item">' + item + '</span>\
                <div class="shopping-item-controls">\
                    <button class="shopping-item-toggle">\
                        <span class="button-label">check</span>\
                    </button>\
                    <button class="shopping-item-delete">\
                        <span class="button-label">delete</span>\
                    </button>\
                </div>\
            </li>\
        ');
        $('input').val('');
    })

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