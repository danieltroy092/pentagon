// LANGUAGE TOGGLE
const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');

//top navbar
const callEl = document.querySelector('.tnCall');
const quoteEl = document.querySelector('.tnQuote');

//bottom navbar
const homeEl = document.querySelector('.bnHome');
const servicesEl = document.querySelector('.bnServices');
const aboutEl = document.querySelector('.bnAbout');
const newsEl = document.querySelector('.bnNews');
const contactEl = document.querySelector('.bnContact');

link.forEach((el) => {
  el.addEventListener('click', () => {
    langEl.querySelector('.active').classList.remove('active');
    el.classList.add('active');

    const attr = el.getAttribute('language');

    //top navbar
    callEl.textContent = data[attr].tnCall;
    quoteEl.textContent = data[attr].tnQuote;

    //bottom navbar
    homeEl.textContent = data[attr].bnHome;
    servicesEl.textContent = data[attr].bnServices;
    aboutEl.textContent = data[attr].bnAbout;
    newsEl.textContent = data[attr].bnNews;
    contactEl.textContent = data[attr].bnContact;
  });
});

let data = {
  english: {
    tnCall: 'Call Now: [01633] 415414',
    tnQuote: 'Make a Quote',
    bnHome: 'Home',
    bnServices: 'Services',
    bnAbout: 'About',
    bnNews: 'News',
    bnContact: 'Contact',
  },
  cymraeg: {
    tnCall: 'Galwch nawr: [01633] 415414',
    tnQuote: 'Dyfynnwch Nawr',
    bnHome: 'Adref',
    bnServices: 'Gwasanaethau',
    bnAbout: 'Amdanom ni',
    bnNews: 'Newydd',
    bnContact: 'Cyswllt',
  },
};

// TESTIMONIAL
$('#testimonial-carousel').owlCarousel({
  autoplay: true,
  dots: false,
  nav: true,
  loop: true,
  responsive: {
    0: {
      items: 1,
    },
    700: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});
