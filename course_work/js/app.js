$(document).ready(function() {
function resize()
{
    $('.bg').width($('.img_bg').width())
}
resize();
$( window ).resize(function() {
    resize()
});

function resizeH()
{
    $('.bg').height($('.img_bg').height())
}
resizeH();
$( window ).resizeH(function() {
    resizeH()
});

function resizehcontainer()
{
    $('.container-absolut').height($('.img_bg').height())
}
resizehcontainer();
$( window ).resizehcontainer(function() {
    resizehcontainer()
});
});