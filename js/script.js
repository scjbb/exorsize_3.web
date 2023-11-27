$("#laugh").hide();
$('#blush').hide();
$('#end').hide();
$('#wave').hide();



// Show all image tags on button press
$('#showImagesButton').click(function () {
    $('img').show();
});

$("#joke").on("click", function () {
    $("#talk").empty();
    $("#idol").hide();
    $("#laugh").show();
    $('#blush').hide();
    $('#end').hide();
    $('#wave').hide();
    $("#talk").append("you tell Ace a joke. he laughs, and you laugh with him.");
    $(this).unbind("click");
})

$("#flirt").on("click", function () {
    $("#talk").empty();
    $("#idol").hide();
    $("#laugh").hide();
    $("#blush").show();
    $("#end").hide();
    $("#wave").hide();
    $("#talk").append("You compliment Ace's outfit, he blushes and mumbles a thank you");
    $(this).unbind("click");
})

$("#ask_out").on("click", function () {
    $("#talk").empty();
    $("#idol").hide();
    $("#laugh").hide();
    $("#blush").hide();
    $("#end").show();
    $("#wave").hide();
    $("#talk").append("You ask Ace out, he gets so flustered that his system overheats");
    $(this).unbind("click");
})

$("#introduce_yourself").on("click", function () {
    $("#talk").empty();
    $("#idol").hide();
    $("#laugh").hide();
    $("#blush").hide();
    $("#end").hide();
    $("#wave").show();
    $("#talk").append("You introduce yourself. Ace smiles and replies by introducing him as well");
    $(this).unbind("click");
})

$("#enter").on("click", function () {

    $("#idol").show();
    $("#laugh").hide();
    $("#blush").hide();
    $("#end").hide();
    $("#wave").hide();



})
