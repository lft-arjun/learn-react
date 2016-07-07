/**
 * Created by linux on 7/7/16.
 */
var axios = require('axios');

var id = 'Your_Client_id';
var sec = "your secret id";
var param = "?client_id="+id + "&client_secret="+ sec;
function getUserInfo (username) {
    return axios.get('https://api.github.com/users/'+ username+param);
}

var helpers = {
    getPlayerInfo: function (players) {
        return axios.all(players.map(function (username) {
            return getUserInfo(username);
            
        })).then(function (info) {
            return info.map(function (user) {
                return user.data;
            });
        }).catch(function (err) {
            console.warn('Error in getPlayerInfo', err);
        });
        //fetch data from github
    }
};

module.exports = helpers;