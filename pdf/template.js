const datauri = require('./datauri.js');

const renderPositions = cv =>
  cv.professional
    .map(
      position => `
	<li class="position">
		<div class="dont-brake">
			<img class="position--image" src="${datauri('./public/' + position.logo)}" />
			<h3>${position.jobTitle}</h3>
			<span>${position.company}</span><br />
			<small>${position.startDate} - ${position.endDate}
			&bull; ${position.duration} &bull; ${position.location}</small>
			<p>${position.paragraphs[0]}</p>
		</div>
		${position.paragraphs
      .map((p, key) => {
        return key === 0 ? null : `<p>${p}</p>`;
      })
      .join('')}
	</li>
`
    )
    .join('');

const renderConferences = cv =>
  cv.list
    .map(
      conference => `
	<li class="conference dont-brake">
		<img class="conference--logo" src="${datauri('./public/' + conference.logo)}" />
		<h3>${conference.title}</h3>
		<small>${conference.date} &bull; ${conference.location} &bull; ${conference.name}</small>
		<p>${conference.summary}</p>
	</li>
`
    )
    .join('');

const renderSchools = cv =>
  cv.education.list
    .map(
      school => `
	<li class="school dont-brake">
		<img class="school--logo" src="${datauri('./public' + school.logo)}" />
		<h3>${school.school}</h3>
		<span>${school.fieldOfStudy} ${school.degree}</span><br />
		<small>${school.startDate} - ${school.endDate}
		&bull; ${school.location}</small>
		${school.paragraphs
      .map(p => {
        return `<p>${p}</p>`;
      })
      .join('')}
	</li>
`
    )
    .join('');

const renderList = list =>
  list
    .map(
      item => `
	<li class="qa dont-break">
		<span>${item}</span>
	</li>
`
    )
    .join('');

const renderFaq = cv =>
  cv.faq
    .map(
      qa => `
	<li class="qa dont-break">
		<h3>${qa.q}</h3>
		<span>${qa.a}</span>
	</li>
`
    )
    .join('');

const renderImportantThings = cv =>
  cv.index.mostImportantThings
    .map(
      thing => `
	<li class="dont-break">${thing}</li>
`
    )
    .join('');

const renderSocialLinks = cv =>
  cv.socialLinks
    .map(link => {
      const l = link.title.toLowerCase() === 'skype' ? `skype:${link.url}?call` : link.url;
      return `
	<li>
		${link.title}: <a href="${l}" target="_blank">${link.url}</a>
	</li>
`;
    })
    .join('');

const renderSkills = cv =>
  cv.resume.skills
    .map(skill => {
      let str = `<h2>${skill.title}</h2>`;
      if (skill.merge) {
        str += `<p>${skill.list.join(', ')}</p>`;
      } else {
        str += `<ul>${renderList(skill.list)}</ul>`;
      }
      return str;
    })
    .join('');

module.exports = cv => `
	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8" />
			<style>
				@font-face {
					font-family: Open Sans;
					src: url(${datauri('./pdf/assets/OpenSans-Regular.ttf')})
				}
				@font-face {
					font-family: Open Sans;
					font-weight: bold;
					src: url(${datauri('./pdf/assets/OpenSans-SemiBold.ttf')})
				}
			</style>
			<link rel="stylesheet" type="text/css" href="${datauri('./pdf/assets/style.css')}"/>
		</head>
		<body>
			<img class="photo" src="${datauri('./public' + cv.profile_picture)}" />
			<span>${cv.name}		<br />
			<br />Website: <a href="${cv.contact.website}">${cv.contact.website}</a>
			<br />Location: ${cv.resume.location}
			<br />Phone: ${cv.contact.tel}
			<br />E-mail:  <a href="mailto:${cv.contact.email}">${cv.contact.email}</a>
			<br />Nationality: ${cv.resume.nationalities.join(', ')}
	<br /><br />
			<p>${cv.index.short_bio}</p>
			<h2>Most important things about me</h2>
			<ul>
				${renderImportantThings(cv)}
			</ul>
			<h2>Professional experience</h2>
			<ul class="positions">
				${renderPositions(cv.resume)}
			</ul>
			<h2>Conference talks</h2>
			<p>${cv.education.lectures.title}</p>
			<ul class="conferences">
				${renderConferences(cv.education.lectures)}
			</ul>
			<h2>Education</h2>
			<ul class="schools">
				${renderSchools(cv)}
			</ul>
			<h2>Social links</h2>
			<ul class="dont-break">
				${renderSocialLinks(cv.contact)}
			</ul>
			${renderSkills(cv)}
			<p class="center">Created & generated with JavaScript ${new Date().toUTCString()}</p>
		</body>
	</html>
`;
