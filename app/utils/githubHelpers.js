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
function getRepos(username) {
    return axios.get('https://api.github.com/users/'+ username +'/repos' +param + '&per_page=100');
}
function getTotalStars(repos) {
    return repos.data.reduce(function (prev, current) {
        return prev + current.stargaxers_count;
    }, 0);
}

function getPlayersData(player) {
    return getRepos(player.login)
        .then(getTotalStars)
        .then(function (totalStars) {
            return {
                followers: player.followers,
                totalStars: totalStars

            }
        })
}

function calculateScores(players) {
    var totalStarsPlayerOne = players[0].totalStars;
    var totalStarsPlayerTwo = players[1].totalStars;
   if (isNaN(players[0].totalStars)) {
       totalStarsPlayerOne = 0;
   }
    if (isNaN(players[1].totalStars)) {
        totalStarsPlayerTwo = 0;
   }

    return [
        players[0].followers*3 + totalStarsPlayerOne,
        players[1].followers*3 + totalStarsPlayerTwo
    ]
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
    },
    
    battle: function (players) {
        var playerOneData = getPlayersData(players[0]);
        var playerTwoData = getPlayersData(players[1]);
        
        return axios.all([playerOneData, playerTwoData])
            .then(calculateScores)
            .catch(function (err) {
                console.warn('Error in getPlayersinfo', err);
            })
    },
};

module.exports = helpers;