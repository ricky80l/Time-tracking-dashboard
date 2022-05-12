// $(".time:nth-child(2)").addClass("active");

$(".time").click(function(e) {
    var idSel = e.target.id;
    $(".time").each(function(index) {
        var totId = $(this).attr("id");
        if (totId === idSel) {
            $("#" + totId).addClass("active");
        } else {
            $("#" + totId).removeClass("active");
        };
    });
    period(idSel);
});


// daily
var dHourS = [5, 1, 1, 1, 0, 0];
var dLastS = [7, 1, 2, 3, 1, 1];
// weekly
var wHourS = [32, 4, 10, 5, 4, 2];
var wLastS = [36, 5, 8, 10, 7, 2];
// mounthly
var mHourS = [103, 11, 23, 21, 13, 7];
var mLastS = [128, 18, 29, 23, 19, 11];

function period(choice) {
    $(".cont_cell_small").each(function(index) {
        console.log(choice);
        var elemento = $(this).attr("id");
        if (choice === "daily") {
            for (n = 0; n < 6; n++) {
                $("#" + elemento + " .hour_s").text(dHourS[index]);
                $("#" + elemento + " .last_s").text(dLastS[index]);
            };
        } else if (choice === "weekly") {
            for (n = 0; n < 6; n++) {
                $("#" + elemento + " .hour_s").text(wHourS[index]);
                $("#" + elemento + " .last_s").text(wLastS[index]);
            };
        } else if (choice === "monthly") {
            for (n = 0; n < 6; n++) {
                $("#" + elemento + " .hour_s").text(mHourS[index]);
                $("#" + elemento + " .last_s").text(mLastS[index]);
            };
        };
    });
};

$(".dots").mouseover(function() {
    $(".inner_cont_cell_small").addClass("dots_active");
});
$(".dots").mouseout(function() {
    $(".inner_cont_cell_small").removeClass("dots_active");
});