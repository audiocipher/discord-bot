// scrape moe image's urls from r/awwnime front page and save them to a file
const request = require('request');
const cheerio = require('cheerio');
var fs = require('fs');

exports.run = (client, message) => {

    console.log("Running pull.js");

    let moe_urls = [];

    // get moe from r/awwnime
    async function pullMoe() {

        // first 25 links
        await request('https://www.reddit.com/r/awwnime/', function (err, resp, body) {
            if (!err && resp.statusCode === 200) {
                let $ = cheerio.load(body);
                $('a.title', '#siteTable').each(function () {
                    let url = $(this).attr('href');
                    moe_urls.push(url);
                });

                //console.log(moe_urls);

                let str = moe_urls.join('\n') + '\n'; // return a string of all the links

                saveMoe(str); // give the data away so we can save it
            }
        });

    }

    // save moe to file
    function saveMoe(data){

        console.log(data); // this works

        fs.appendFile('moe_urls.txt', data, function (err) {
            if (err) throw err;
            console.log('Moe has been saved to moe_urls.txt');
            message.channel.sendMessage("I have brought more moe for you~!");
        });

    }

    pullMoe(); // runs everything

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4
};

exports.help = {
    name: 'pull',
    description: 'Download some moe!',
    usage: 'pull'
};