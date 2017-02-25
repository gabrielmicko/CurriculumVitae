# Personal website template engine
This project will help you to create your personal website very quickly. If you want to upload the content you just need to edit the config file based on the example file.

### Technology
Babel, Express, Webpack, React, React Router

### Example config:
Copy "/config/profile.example.json" to "/config/profile.json" and start editing.

```json
{
  "name": "Your name",
  "role": "Current job title",
  "welcome_first": "Welcome,",
  "welcome_second":"This is my website",
  "profile_picture":"/img/profile.jpg",
  "document_title":"Document title",
  "nav": [
    {
      "key": "/",
      "title": "Home"
    },
    {
      "key": "/resume",
      "title": "Resume"
    },
    {
      "key": "/about",
      "title": "About me"
    },
    {
      "key": "/contact",
      "title": "Contact"
    },
    {
      "key": "/download",
      "title": "Download"
    }
  ],
  "index": {
      "lollipops": [
        {
          "url": "/resume",
          "text": "My Resume",
          "class": "bg-red bg-red-hover"
        },
        {
          "url": "/resume",
          "text": "My Work",
          "class": "bg-cian bg-cian-hover"
        },
        {
          "url": "/resume",
          "text": "My Skills",
          "class": "bg-yellow bg-yellow-hover"
        }
      ],
      "short_bio": "Short bio."
  },
  "contact": {
    "tel": "Your tel number",
    "link": "//My Website",
    "website": "http://YourDomain.com",
    "email": "My E-mail",
    "linkfb": "https://facebook.com/FacebookHandle",
    "linktwitter": "https://twitter.com/TwitterHandle",
    "linkin": "https://www.linkedin.com/in/LinkedinHandle",
    "linkgithub": "https://github.com/Github",
    "linkskype": "Skype Handle",
    "c": "© WebsiteName",
    "text": "Looking forward to answer your emails and phone calls."
  },
  "resume": {
    "title": "Resume",
    "callToActionLink": "/about",
    "callToAction": "To see more about me click here >>",
    "callToActionLollipop": "About me",
    "professional": [
      {
        "title": "Title",
        "position": "Position",
        "date": "From - To",
        "paragraphs": [
          "Text comes here"
        ]
      }
    ],
    "skills": [

      {
        "title": "I speak",
        "icon": "fa-language",
        "list": [
          "<b>English</b> - Comprehends Reasonably, Speaks Reasonably, Reads Well, Writes Well. "
        ]
      },
      {
        "title": "I am",
        "icon": "fa-male",
        "list": [
          "communicative",
          "dedicated"
        ]
      },
      {
        "title": "I code",
        "icon": "fa-code",
        "list": [
          "JavaScript",
          "HTML"
        ]
      },
      {
        "title": "I love",
        "icon": "fa-heart",
        "list": [
          "challenges",
          "learning",
          "teaching"
        ]
      }
    ]
  },
  "projects": {
      "title": "About me",
      "callToActionLink": "/contact",
      "callToAction": "To see more or discuss possible work let's talk >>",
      "callToActionLollipop": "Let's talk",
      "projects": [
        {
          "title": "Title",
          "subtitle": "Subtitle",
          "text": "Text",
          "images": [
            "/img/all/volunteer.png",
            "/img/all/mozilla.png"
          ]
        }
      ]
  },
  "download": {
    "downloads": [
      {
        "title": "Title",
        "link": "http://DownloadLink.com"
      }
    ]
  }
}

```
### CSS customisation
If you want to change the CSS use "public/css/custom.css".


### Downloads
Put every downloadable file to "public/downloads" directory.

### Running the application
```sh
npm install
npm run build
npm start
```

### Running the application in development mode
```sh
npm install
npm start - for running the web server
npm run dev - for webpack to create the bundle on any change
```
Open http://localhost:3000 too see the website.

### Screenshot
![alt tag](https://s8.postimg.org/vjtin0vo5/cv_example.jpg)



### Version
1.0.0
