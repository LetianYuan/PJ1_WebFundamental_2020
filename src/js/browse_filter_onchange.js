var cities = {
    "中国": ["上海", "北京", "深圳", "昆明"],
    "日本": ["东京", "大阪", "北海道", "神奈川"],
    "意大利": ["罗马", "米兰", "佛罗伦萨", "威尼斯"],
    "美国": ["纽约", "旧金山", "华盛顿", "洛杉矶"],
    "英国": ["伦敦", "剑桥", "伯明翰", "谢菲尔德"],
    "法国": ["巴黎", "马赛", "里昂", "图卢兹"],
    "埃及": ["开罗", "亚历山大城", "吉萨", "舒卜拉海迈"],
    "俄罗斯": ["莫斯科", "圣彼得堡", "新西伯利亚", "叶卡捷琳堡"],
    "巴西": ["圣保罗", "里约热内卢", "巴西利亚", "萨尔瓦多"]
};
var select_country = document.getElementById("country");
var select_city = document.getElementById("city");
// for (var i in cities)
// {
//     var option_country = document.createElement("option");
//     option_country.innerHTML=i;
//     country.appendChild(option_country);
// }
select_country.onchange = function()
{
    var index = select_country.options[select_country.selectedIndex].value;

    for(var k = 1; k < select_city.length; k++)
    {
        select_city.removeChild(select_city.children[k--]);
    }

    for(var i in cities[index])
    {
        var option_city = document.createElement("option");
        option_city.innerHTML = cities[index][i];
        select_city.appendChild(option_city);
    }
};