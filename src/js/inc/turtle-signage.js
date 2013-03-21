function bindSignageEvents(){
    $(".turtle_signage #add-floor").off().on('click', function(e){
        e.preventDefault();
        var turtle_signage = $(this).parents('.turtle_signage');

        var floor_html= $("<div class='control-group'>\
            <label class='control-label'>Floor location</label>\
            <div class='controls'>\
                <input type='text' class='input-small location' value='' placeholder=''/>\
                <button id='add-floor-item' class='btn btn-small'>Add a name on this floor</button>\
                <button id='delete-floor' class='btn btn-small btn-warning pull-right'><i class='icon-trash'></i></button>\
            </div>\
            <div class='listings'>\
            </div>\
            <hr/>\
        </div>");


        $('.floors', turtle_signage).append(floor_html);
        bindSignageEvents();
    });

    $(".turtle_signage #add-floor-item").off().on('click', function(e){
        e.preventDefault();

        var floor_group = $(this).parents('.control-group');

        var floor_listing_html = $("<div class='controls listing'>\
            <i class='icon-caret-right'></i>\
            <input type='text' placeholder='' class='input' value=''/>\
            <button class='btn btn-small delete-floor-item'><i class='icon-trash'></i></button>\
        </div>"
        );

        $('.listings', floor_group).append(floor_listing_html);
        bindSignageEvents();
    });

    $(".turtle_signage #delete-floor").off().on('click', function(e){
        e.preventDefault();

        if(confirm('Are you sure you want tot delete this entire floor?')){
            $(this).parents('.control-group').remove();
        }

    });


    $(".turtle_signage .delete-floor-item").off().on('click', function(e){
        e.preventDefault();

        if(confirm('Are you sure you want tot delete this entry?')){
            $(this).parents('.listing').remove();
        }

    });
}
bindSignageEvents();