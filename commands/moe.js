// take moe urls from file and post them to the chat
var fs = require('fs');

exports.run = (client, message) => {

    console.log("Running moe.js");

    function giveMoe() {

        fs.readFile('moe_urls.txt', 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            // console.log(data);

            let moe_urls = data.split('\n'); // list of all the moe urls

            //console.log(moe_urls.length - 1); // one more than it should be due to the extra newline character in pull.js line 26

            let random_index = Math.floor(Math.random() * (moe_urls.length - 1)); // moe_urls.length - 1 because we don't want extra newline character to interfere

            message.channel.sendMessage(moe_urls[random_index]); // output moe

        });

    }

    giveMoe(); // runs everything

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'moe',
    description: 'Free moe! Have as much as you\'d like!',
    usage: 'moe'
};