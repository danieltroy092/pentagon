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
const carAboutEl = document.querySelector('.carAbout');
const carLearnOneEl = document.querySelector('.carLearnOne');
const carLearnTwoEl = document.querySelector('.carLearnTwo');
const carLearnThreeEl = document.querySelector('.carLearnThree');
const carTextOneEl = document.querySelector('.carTextOne');
const carTextTwoEl = document.querySelector('.carTextTwo');
const carTextThreeEl = document.querySelector('.carTextThree');

// welcome section
const intTitleEl = document.querySelector('.intTitle');
const intSubOneEl = document.querySelector('.intSubOne');
const intSubTwoEl = document.querySelector('.intSubTwo');

// services section
const serTitleEl = document.querySelector('.serTitle');
const serOneEl = document.querySelector('.serOne');
const serTwoEl = document.querySelector('.serTwo');
const serThreeEl = document.querySelector('.serThree');
const serFourEl = document.querySelector('.serFour');
const serLinkOneEl = document.querySelector('.serLinkOne');
const serLinkTwoEl = document.querySelector('.serLinkTwo');
const serLinkThreeEl = document.querySelector('.serLinkThree');
const serLinkFourEl = document.querySelector('.serLinkFour');

// values section
const valTitleEl = document.querySelector('.valTitle');
const valOneEl = document.querySelector('.valOne');
const valTwoEl = document.querySelector('.valTwo');
const valThreeEl = document.querySelector('.valThree');
const valFourEl = document.querySelector('.valFour');
const valTextOneEl = document.querySelector('.valTextOne');
const valTextTwoEl = document.querySelector('.valTextTwo');
const valTextThreeEl = document.querySelector('.valTextThree');
const valTextFourEl = document.querySelector('.valTextFour');

// process section

// language toggle [switch active class onClick]
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
    carAboutEl.textContent = data[attr].carAbout;
    carLearnOneEl.textContent = data[attr].carLearnOne;
    carLearnTwoEl.textContent = data[attr].carLearnTwo;
    carLearnThreeEl.textContent = data[attr].carLearnThree;
    carTextOneEl.textContent = data[attr].carTextOne;
    carTextTwoEl.textContent = data[attr].carTextTwo;
    carTextThreeEl.textContent = data[attr].carTextThree;

    // welcome section
    intTitleEl.textContent = data[attr].intTitle;
    intSubOneEl.textContent = data[attr].intSubOne;
    intSubTwoEl.textContent = data[attr].intSubTwo;

    // services section
    serTitleEl.textContent = data[attr].serTitle;
    serOneEl.textContent = data[attr].serOne;
    serTwoEl.textContent = data[attr].serTwo;
    serThreeEl.textContent = data[attr].serThree;
    serFourEl.textContent = data[attr].serFour;
    serLinkOneEl.textContent = data[attr].serLinkOne;
    serLinkTwoEl.textContent = data[attr].serLinkTwo;
    serLinkThreeEl.textContent = data[attr].serLinkThree;
    serLinkFourEl.textContent = data[attr].serLinkFour;

    //values section
    valTitleEl.textContent = data[attr].valTitle;
    valOneEl.textContent = data[attr].valOne;
    valTwoEl.textContent = data[attr].valTwo;
    valThreeEl.textContent = data[attr].valThree;
    valFourEl.textContent = data[attr].valFour;
    valTextOneEl.textContent = data[attr].valTextOne;
    valTextTwoEl.textContent = data[attr].valTextTwo;
    valTextThreeEl.textContent = data[attr].valTextThree;
    valTextFourEl.textContent = data[attr].valTextFour;

    // process section
  });
});

// translation data
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
    carAbout: 'About Us',
    carLearnOne: 'Learn More',
    carLearnTwo: 'Learn More',
    carLearnThree: 'Learn More',
    carTextOne:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus ad, animi deserunt saepe, fugit, similique quas voluptate ducimus eos tempore atque itaque ratione. Quibusdam?',
    carTextTwo:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus ad, animi deserunt saepe, fugit, similique quas voluptate ducimus eos tempore atque itaque ratione. Quibusdam?',
    carTextThree:
      'Our reviews, advice and services are 100% free of charge...<br />...and always will be.',
    intTitle: 'Welcome',
    intSubOne: 'The correct advice',
    intSubTwo: 'Making it easy',
    serTitle: 'Our Services',
    serOne: 'Life & Health Insurance',
    serLinkOne: 'Read More >',
    serTwo: 'Business Insurance',
    serLinkTwo: 'Read More >',
    serThree: 'Sports Injury Protection',
    serLinkThree: 'Read More >',
    serFour: 'Personal Insurance',
    serLinkFour: 'Read More >',
    valTitle: 'Our core values',
    valOne: 'Trusted Providers',
    valTwo: 'Affordability',
    valThree: 'Ethical Business',
    valFour: 'Aftercare',
    valTextOne:
      'We only use the very best providers U.K. has to offer; Peace of mind is key for everyone',
    valTextTwo:
      'We always take into account a clients budget. The strongest cover possible at the right price is what we recommend.',
    valTextThree:
      'We wont recommend a product that doesnt match your lifestyle. Policies pay out on facts!',
    valTextFour:
      'We promised to deliver the highest standards possible when it comes to our clients needs. Were here whenever you need us.',
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
    carAbout: 'Amdanom Ni',
    carLearnOne: 'Dysgu mwy',
    carLearnTwo: 'Dysgu mwy',
    carLearnThree: 'Dysgu mwy',
    carTextOne:
      'Mor hyfryd annhebyg i fyny trwy gysylltiad heb ei gadw yn aml. Neu gwnewch hynny mewn ystafell uchel â thâl. Fe ddylech chi gefnder ar y cinio. Roedd chwe maenor yn swil a thair wal yn sefyll ar eu traed.',
    carTextTwo:
      'Mor hyfryd annhebyg i fyny trwy gysylltiad heb ei gadw yn aml. Neu gwnewch hynny mewn ystafell uchel â thâl. Fe ddylech chi gefnder ar y cinio. Roedd chwe maenor yn swil a thair wal yn sefyll ar eu traed.',
    carTextThree:
      'Mae ein hadolygiad, ein cyngor an gwasanaethau 100% yn rhad ac am ddim... a bydd bob amser.',
    intTitle: 'Croeso',
    intSubOne: 'Y cyngor cywir',
    intSubTwo: 'Ei gwneud hin hawdd',
    serTitle: 'Ein gwasanaethau',
    serOne: 'Bywyd ac Iechyd',
    serLinkOne: 'Darllen mMy >',
    serTwo: 'Yswiriant Busnes',
    serLinkTwo: 'Darllen Mwy >',
    serThree: 'Anaf Chwaraeon',
    serLinkThree: 'Darllen Mwy >',
    serFour: 'Yswiriant Personol',
    serLinkFour: 'Darllen Mwy >',
    valTitle: 'Ein gwerthoedd craidd',
    valOne: 'Darparwyr Dibynadwy',
    valTwo: 'Fforddiadwyedd',
    valThree: 'Busnes Moesegol',
    valFour: 'Ôl-ofal',
    valTextOne:
      'Dim ond y darparwyr gorau oll sydd gan U.K. iw cynnig; Mae tawelwch meddwl yn allweddol i bawb',
    valTextTwo:
      'Rydym bob amser yn ystyried cyllideb cleientiaid. Yr yswiriant cryfaf syn bosibl am y pris iawn ywr hyn rydyn nin ei argymell.',
    valTextThree:
      'Ni fyddwn yn argymell cynnyrch nad ywn cyd-fynd âch ffordd o fyw. Mae polisïaun talu allan ar ffeithiau!',
    valTextFour:
      'Gwnaethom addo cyflawnir safonau uchaf posibl o ran anghenion ein cleientiaid. Rydyn ni yma pryd bynnag rydych chi ein hangen ni.',
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
