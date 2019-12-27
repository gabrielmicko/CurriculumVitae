# Personal website template engine & pdf generator

This project will help you to create your personal website very quickly. If you want to upload the content you just need to edit the config file based on the example file. It also can generate for you a PDF file based on the data.

### Technology

Babel, Express, Webpack, React, React Router

### Example config:

Copy "/config/profile.example.json" to "/config/profile.json" and start editing.

```json
{
  "name": "Your name",
  "role": "Current job title",
  "welcome_first": "Welcome,",
  "welcome_second": "This is my website",
  "profile_picture": "/img/profile.jpg",
  "document_title": "Document title",
  "pdf": {
    "filename": "YourName_CV"
  },
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
      "key": "/education",
      "title": "Education"
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
    "short_bio": "Short bio.",
    "mostImportantThings": ["A", "B", "C"]
  },
  "contact": {
    "tel": "Your tel number",
    "link": "//My Website",
    "website": "http://YourDomain.com",
    "email": "My E-mail",
    "socialLinks": [
      {
        "title": "LinkedIn",
        "url": "https://www.linkedin.com/in/LinkedinHandle"
      },
      {
        "title": "GitHub",
        "url": "https://github.com/Github"
      },
      {
        "title": "Twitter",
        "url": "https://twitter.com/TwitterHandle"
      },
      {
        "title": "Facebook",
        "url": "https://facebook.com/FacebookHandle"
      },
      {
        "title": "Skype",
        "url": "skype:Skype Handle"
      }
    ],
    "c": "© WebsiteName",
    "text": "Looking forward to answer your emails and phone calls."
  },
  "resume": {
    "title": "Resume",
    "callToActionLink": "/education",
    "callToAction": "To see more about me click here >>",
    "callToActionLollipop": "Education",
    "nationalities": ["EU citizenship", "Spanish"],
    "location": "Madrid, Spain",
    "professional": [
      {
        "company": "Company Inc.",
        "logo": "/img/all/company.svg",
        "jobTitle": "Position",
        "startDate": "From",
        "endDate": "To",
        "duration": "6+ months",
        "location": "NYC",
        "paragraphs": ["Text comes here"]
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
        "merge": true,
        "list": ["communicative", "dedicated"]
      },
      {
        "title": "I code",
        "icon": "fa-code",
        "merge": true,
        "list": ["JavaScript", "HTML"]
      },
      {
        "title": "I love",
        "icon": "fa-heart",
        "merge": true,
        "list": ["challenges", "learning", "teaching"]
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
        "images": ["/img/all/volunteer.png", "/img/all/mozilla.png"]
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
  },
  "education": {
    "title": "Education",
    "callToActionLink": "/about",
    "callToAction": "To see more about me click here >>",
    "callToActionLollipop": "About me",
    "list": [
      {
        "school": "Perfect University",
        "degree": "University degree",
        "fieldOfStudy": "Software enginner",
        "startDate": "2013",
        "endDate": "2015",
        "logo": "/img/all/company.svg",
        "paragraphs": ["Text comes here"],
        "location": "Budapest, Hungary"
      }
    ],
    "lectures": {
      "title": "Talks",
      "list": [
        {
          "name": "Name of the event",
          "location": "London, UK",
          "logo": "/img/all/talk.png",
          "date": "2018",
          "title": "Your talk title",
          "summary": "Talk was about composing json files."
        }
      ]
    }
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

### Generating PDF from the data

```sh
npm run pdf
```

### PDF generation

PDF generation uses customized `andor-cv`. (Check out andor-cv here)[https://github.com/andormade/andor-cv]

### Running the application in development mode

```sh
npm install
npm start - for running the web server
npm run dev - for webpack to create the bundle on any change
```

Open http://localhost:3000 too see the website.

### Version

1.0.0
