// var upload_btn = document.getElementById("pic_upload");
var file_btn = document.getElementById("pic_fileBtn");
var pic_window = document.getElementById("pic_show");
// upload_btn.onclick = function()
// {
//     file_btn.click();
// };

file_btn.onchange = function()
{
    var pic_url = getObjectURL(file_btn.files[0]);
    if(pic_url != "")
    {
        document.getElementById("pic_status").innerText = "";
        var image = new Image();
        image.onload = function()
        {
            var width = image.width;
            var height = image.height;
            pic_window.style.width = "400px";
            pic_window.style.height = height / width * 400 + "px";
        };
        image.src = pic_url;
        pic_window.setAttribute("src", pic_url);
    }
};

function getObjectURL(file)
{
    var url = null;
    if(window.createObjectURL != undefined)
    {
        url = window.createObjectURL(file);
    }
    else if(window.URL != undefined)
    { // mozilla(firefox)
        url = window.URL.createObjectURL(file);
    }
    else if(window.webkitURL != undefined)
    { // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
    }
    return url;
}