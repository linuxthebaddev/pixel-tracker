![](https://fontmeme.com/permalink/211122/9e9bdccf36fdfc5235c109d93ba8c5d9.png)

A small program that's going to help you on grabbing other's IP address

(Note this doesn't work with email clients that proxy images like gmail webmail)
## Disclaimer

This project is for educational purposes only! DO NOT TRY THIS AT HOME!

## Installation

#### 1. Clone the repository

You can do it by clicking the `Download` button, then download as ZIP<br>Alternatively, you can use this command below:<br>

```sh
git clone https://github.com/linuxwasnotavailable/pixel-tracker.git
```

#### 2. Install Dependencies

You need to install Node.js first<br>If you are on Linux and using package manager to install Node.js, don't forget to install NPM too!<br>After that, you'll be able to use this command:

```sh
npm install
```

#### 3. Configure
```javascript
const PORT = process.env.PORT || 80;
app.listen(PORT);
```

Note that if you are on Linux, you can't bind to 80 without root permission<br>

#### 4. Setup Panel

Now, create a new file and name it `.env`<br>Now, type the following content into the file you just created:

```env
SECRETONE=SECRET_HERE
```

Replace `SECRET_HERE` to anything you want. Note that if anyone got the secret, they'll be able to see every IP you've logged

#### 5. Run

To start the server, simply run `npm start`<br>If that doesn't work for you, try `node server.js`. That will work, too.<br>

#### What to do next

Now you need to send an email with html content:

```html
<img src="IP_TO_THE_SERVER/?to=NAME_OF_RECEIVER">
```

After the `img` tag, you can type the content of the email, then you'll be able to grab their IP!<br>To see IP you've logged, you can go `http://localhost/SECRET_HERE`, Replace `SECRET_HERE` to the secret you entered in `.env` file<br>





## License

  Pixel Tracker
    A small program that's going to help you on grabbing other's IP address

    Copyright (C) 2021 linuxthebaddev

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.