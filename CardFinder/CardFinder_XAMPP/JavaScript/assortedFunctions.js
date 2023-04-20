function showUserOptions()
{

    $(document).ready(function () {
        $("div.profile_icon").click(function () {
            $('li > ul').not($(this).children("ul").toggle()).hide();
            
        });
    });

    alert("made it here")
}
