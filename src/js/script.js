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

// dropdown
const persEl = document.querySelector('.ddPersonal');
const busiEl = document.querySelector('.ddBusiness');

// personal submenu
const lifeEl = document.querySelector('.sbLife');
const incomeEl = document.querySelector('.sbIncome');
const critEl = document.querySelector('.sbCritical');
const mortgageEl = document.querySelector('.sbMortgage');
const famEl = document.querySelector('.sbFamily');
const healthEl = document.querySelector('.sbHealth');
const sportsEl = document.querySelector('.sbSports');
const bcEl = document.querySelector('.sbBuild');
const retireEl = document.querySelector('.sbRetire');

// business submenu
const pubEl = document.querySelector('.sbPub');
const keyEl = document.querySelector('.sbKey');
const contEl = document.querySelector('.sbContent');

// carousel
const oneEl = document.querySelector('.carOne');
const subOneEl = document.querySelector('.carSubOne');
const twoEl = document.querySelector('.carTwo');
const threeEl = document.querySelector('.carThree');
const fourEl = document.querySelector('.carFour');
const subFourEl = document.querySelector('.carSubFour');

// language toggle [remove switch active class onClick]
link.forEach((el) => {
  el.addEventListener('click', () => {
    langEl.querySelector('.active').classList.remove('active');
    el.classList.add('active');

    // select attribute
    const attr = el.getAttribute('language');

    // get info from data variable
    //top navbar
    callEl.textContent = data[attr].tnCall;
    quoteEl.textContent = data[attr].tnQuote;

    //bottom navbar
    homeEl.textContent = data[attr].bnHome;
    servicesEl.textContent = data[attr].bnServices;
    aboutEl.textContent = data[attr].bnAbout;
    newsEl.textContent = data[attr].bnNews;
    contactEl.textContent = data[attr].bnContact;

    //dropdown
    persEl.textContent = data[attr].ddPersonal;
    busiEl.textContent = data[attr].ddBusiness;

    //personal submenu
    lifeEl.textContent = data[attr].sbLife;
    incomeEl.textContent = data[attr].sbIncome;
    critEl.textContent = data[attr].sbCritical;
    mortgageEl.textContent = data[attr].sbMortgage;
    famEl.textContent = data[attr].sbFamily;
    healthEl.textContent = data[attr].sbHealth;
    sportsEl.textContent = data[attr].sbSports;
    bcEl.textContent = data[attr].sbBuild;
    retireEl.textContent = data[attr].sbRetire;

    // business submenu
    pubEl.textContent = data[attr].sbPub;
    keyEl.textContent = data[attr].sbKey;
    contEl.textContent = data[attr].sbContent;

    // carousel
    oneEl.textContent = data[attr].carOne;
    subOneEl.textContent = data[attr].carSubOne;
    twoEl.textContent = data[attr].carTwo;
    threeEl.textContent = data[attr].carThree;
    fourEl.textContent = data[attr].carFour;
    subFourEl.textContent = data[attr].carSubFour;
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
    ddPersonal: 'Personal',
    ddBusiness: 'Business',
    sbLife: 'Life Insurance',
    sbIncome: 'Income Protection',
    sbCritical: 'Critical Care',
    sbMortgage: 'Mortgage Protection',
    sbFamily: 'Family Income Benefit',
    sbHealth: 'Private Healthcare',
    sbSports: 'Sports Injury Protection',
    sbBuild: 'Building & Contents',
    sbRetire: 'Later Life & Funeral Planning',
    sbPub: 'Public/Employers Liability',
    sbKey: 'Relevant Life/Keyman',
    sbContent: 'Buildings & Contents',
    carOne: 'Welcome',
    carSubOne: 'Pentagon Finance',
    carTwo: 'Home Sweet Home',
    carThree: 'Proudly supporting sport in Wales',
    carFour: 'Health & Wellbeing',
    carSubFour: 'Protecting what matters most.',
  },
  cymraeg: {
    tnCall: 'Galwch nawr: [01633] 415414',
    tnQuote: 'Dyfynnwch Nawr',
    bnHome: 'Adref',
    bnServices: 'Gwasanaethau',
    bnAbout: 'Amdanom ni',
    bnNews: 'Newydd',
    bnContact: 'Cyswllt',
    ddPersonal: 'Personol',
    ddBusiness: 'Busnesau',
    sbLife: 'yswiriant bywyd',
    sbIncome: 'amddiffyn incwm',
    sbCritical: 'gofal critigol',
    sbMortgage: 'amddiffyn morgais',
    sbFamily: 'budd-dal incwm teulu',
    sbHealth: 'gofal iechyd preifat',
    sbSports: 'anaf chwaraeon',
    sbBuild: 'Adeilad a chynnwys',
    sbRetire: 'Ymddeol ac angladd',
    sbPub: 'atebolrwydd cyhoeddus / cyflogwr',
    sbKey: 'Bywyd Perthnasol',
    sbContent: 'Adeilad a chynnwys',
    carOne: 'Croeso',
    carSubOne: 'Cyllid Pentagon',
    carTwo: 'cartref melys cartref',
    carThree: 'Cefnogi chwaraeon mewn cymru yn falch',
    carFour: 'iechyd a lles',
    carSubFour: 'Amddiffyn yr hyn sydd bwysicaf.',
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
