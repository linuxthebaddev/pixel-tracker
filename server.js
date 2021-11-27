//                     PIXEL TRACKER
//   https://github.com/linuxthebaddev/pixel-tracker
//
// Copyright (C) 2021 linuxthebaddev
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
require('dotenv').config()
const express = require('express');
const app = express();
const fs = require('fs');


app.set('view engine', 'ejs')

function fileExist() {
    if (!fs.existsSync('./userData.json')) {
        fs.writeFileSync('./userData.json', "[]");

    }

}

app.get('/', async (req, res) => {
    const data = readjson();
    const pixel = fs.readFileSync('pixel.png');
    const useragent = req.headers['user-agent'];
    var receiver = req.query.to
    if (!receiver || receiver == undefined) {
        receiver = 'unknown'
    }
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    if (ip == "::1") ip = "localhost";
    const userinfoObject = {
        _id: require('crypto').randomBytes(16).toString('hex'),
        ip: ip.replace('::ffff:', ''),
        useragent: useragent,
        time: Date(),
        receiver: receiver

    }
    data.push(userinfoObject);
    fs.writeFile('./userData.json', JSON.stringify(data, null, 2), err => {
        if (err) {
            console.log(err);
        }
    });
    res.end(pixel);
});

app.get('/' + process.env.SECRETONE, async (req, res) => {


    const data = readjson();
    res.render('dashboard', { info: data.reverse() });

})

function readjson() {
    fileExist();
    var data = JSON.parse(fs.readFileSync('./userData.json', 'utf-8'));

    return data;

}

fileExist();

const PORT = process.env.PORT || 80;
app.listen(PORT);
