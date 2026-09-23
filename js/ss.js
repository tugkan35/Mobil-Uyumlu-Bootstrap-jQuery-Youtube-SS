$("#cek").click(function () {
    var link = $("#youtubeLink").val();
    var foto = link.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);

    if (foto) {
        $("#foto").html(
            "<div class='container mt-4'>" +
            "<img src='https://i3.ytimg.com/vi/" + foto[1] + "/maxresdefault.jpg' class='img-fluid rounded shadow' />" +
            "</div>"
        );

        $('html, body').animate({
            scrollTop: $("#foto").offset().top
        }, 800);
    }
});