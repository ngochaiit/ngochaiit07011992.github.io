var request = require("request")
var fs = require('fs');
var url = "https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?match_id=3274457422&key=9C6D837E6A25DF0D541509309BDDD6BD";

var accountid = [];

request({
    url: url,
    json: true,
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        var all = JSON.stringify(body, null, 2);
        var all2 = JSON.parse(all);

        for(var i = 0; i< 10;i++){
            accountid.push(all2['result']['players'][i]['account_id']);

            var insideMatches = all2['result']['players'][i]['account_id'];
            console.log(accountid[0]);
        }
        //   var insideMatches = all2['result']['match_id'];
        //console.log(insideMatches);
    }
})