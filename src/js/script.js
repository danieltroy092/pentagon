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
const proTitleEl = document.querySelector('.proTitle');
const proOneFrontEl = document.querySelector('.proOneFront');
const proTwoFrontEl = document.querySelector('.proTwoFront');
const proThreeFrontEl = document.querySelector('.proThreeFront');
const proOneBackEl = document.querySelector('.proOneBack');
const proTwoBackEl = document.querySelector('.proTwoBack');
const proThreeBackEl = document.querySelector('.proThreeBack');

// jumbotron
const leadEl = document.querySelector('.lead');
const tagEl = document.querySelector('.tag');

// testimonials
const tesTitleEl = document.querySelector('.tesTitle');

// contact section
const conTitleEl = document.querySelector('.conTitle');
const conBtnEl = document.querySelector('.conBtn');

// faq section
const faqTitleEl = document.querySelector('.faqTitle');
const qOneEl = document.querySelector('.qOne');
const qTwoEl = document.querySelector('.qTwo');
const qThreeEl = document.querySelector('.qThree');
const qFourEl = document.querySelector('.qFour');
const qFiveEl = document.querySelector('.qFive');
const qSixEl = document.querySelector('.qSix');

// footer
const ftCallEl = document.querySelector('.ftCall');
const ftAddEl = document.querySelector('.ftAdd');
const ftHrsEl = document.querySelector('.ftHrs');

// footer - quick links
const ftOneEl = document.querySelector('.ftOne');
const ftTwoEl = document.querySelector('.ftTwo');
const ftThreeEl = document.querySelector('.ftThree');
const ftFourEl = document.querySelector('.ftFour');
const ftFiveEl = document.querySelector('.ftFive');
const ftSixEl = document.querySelector('.ftSix');
const ftSvnEl = document.querySelector('.ftSvn');
const ftEghtEl = document.querySelector('.ftEght');

//============================================================//

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
    proTitleEl.textContent = data[attr].proTitle;
    proOneFrontEl.textContent = data[attr].proOneFront;
    proTwoFrontEl.textContent = data[attr].proTwoFront;
    proThreeFrontEl.textContent = data[attr].proThreeFront;
    proOneBackEl.textContent = data[attr].proOneBack;
    proTwoBackEl.textContent = data[attr].proTwoBack;
    proThreeBackEl.textContent = data[attr].proThreeBack;

    // jumbotron
    leadEl.textContent = data[attr].lead;
    tagEl.textContent = data[attr].tag;

    // testimonials
    tesTitleEl.textContent = data[attr].tesTitle;

    // contact section
    conTitleEl.textContent = data[attr].conTitle;
    conBtnEl.textContent = data[attr].conBtn;

    // faq section
    faqTitleEl.textContent = data[attr].faqTitle;
    qOneEl.textContent = data[attr].qOne;
    qTwoEl.textContent = data[attr].qTwo;
    qThreeEl.textContent = data[attr].qThree;
    qFourEl.textContent = data[attr].qFour;
    qFiveEl.textContent = data[attr].qFive;
    qSixEl.textContent = data[attr].qSix;

    // footer
    ftCallEl.textContent = data[attr].ftCall;
    ftAddEl.textContent = data[attr].ftAdd;
    ftHrsEl.textContent = data[attr].ftHrs;

    // footer - quick links
    ftOneEl.textContent = data[attr].ftOne;
    ftTwoEl.textContent = data[attr].ftTwo;
    ftThreeEl.textContent = data[attr].ftThree;
    ftFourEl.textContent = data[attr].ftFour;
    ftFiveEl.textContent = data[attr].ftFive;
    ftSixEl.textContent = data[attr].ftSix;
    ftSvnEl.textContent = data[attr].ftSvn;
    ftEghtEl.textContent = data[attr].ftEght;
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
    proTitle: 'The process',
    proOneFront: 'Free Consultation',
    proTwoFront: 'Recommendation',
    proThreeFront: 'Aftercare',
    proOneBack: 'Free Consultation',
    proTwoBack: 'Recommendation',
    proThreeBack: 'Aftercare',
    tag: 'We also come to you!',
    lead:
      'Whilst our store in Newport city centre [currently closed due to COVID-19/Corona virus] is accessible throughout the week. We also have professional experienced advisors that can visit you at your home or place of business.',
    tesTitle: 'What our clients say...',
    conTitle: 'Ready to talk?',
    conBtn: 'Send Message',
    faqTitle: 'Frequently Asked Questions',
    qOne: 'Can I save a quote and come back at a later date?',
    qTwo: 'How will I know if my claim is covered by my policy?',
    qThree: 'Should I bother with Life insurance & what does it cover?',
    qFour: 'What are the different types of business insurance?',
    qFive: 'Can I cancel or change my policy at any time?',
    qSix:
      'What are the different ways I can pay? and can I do them interchangeably?',
    ftCall: 'Call us on',
    ftAdd: 'Address',
    ftHrs: 'Opening Hours',
    ftOne: 'About',
    ftTwo: 'Contact',
    ftThree: 'Careers',
    ftFour: 'COVID-19 update',
    ftFive: 'Accessibility',
    ftSix: 'Privacy',
    ftSvn: 'Terms & Conditions',
    ftEght: 'Sitemap',
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
    serLinkOne: 'Darllen Mwy >',
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
    proTitle: 'Y broses',
    proOneFront: 'Ymgynghoriad Am Ddim',
    proTwoFront: 'Argymhelliad',
    proThreeFront: 'Ôl-ofal',
    proOneBack: 'Ymgynghoriad Am Ddim',
    proTwoBack: 'Argymhelliad',
    proThreeBack: 'Ôl-ofal',
    leadTwo: 'Rydyn nin dod atoch chi hefyd!',
    tag: 'Rydyn nin dod atoch chi hefyd!',
    lead:
      'Tra bod ein siop yng nghanol dinas Casnewydd [ar gau ar hyn o bryd oherwydd firws COVID-19 / feirws Corona] yn hygyrch trwy gydol yr wythnos. Mae gennym hefyd gynghorwyr profiadol proffesiynol a all ymweld â chi yn eich cartref neuch man busnes.',
    tesTitle: 'Beth mae ein cleientiaid yn ei ddweud...',
    conTitle: 'Yn barod i siarad?',
    conBtn: 'Anfon Neges',
    faqTitle: 'Cwestiynau Cyffredin',
    qOne: 'A allaf arbed dyfynbris a dod yn ôl yn nes ymlaen?',
    qTwo: 'Sut y byddaf yn gwybod a yw fy nghais yn dod o dan fy mholisi?',
    qThree:
      'A ddylwn i drafferthu gydag yswiriant Bywyd a beth maen ei gynnwys?',
    qFour: 'Beth ywr gwahanol fathau o yswiriant busnes?',
    qFive: 'A allaf ganslo neu newid fy mholisi ar unrhyw adeg?',
    qSix: 'Beth ywr gwahanol ffyrdd y gallaf dalu?',
    ftCall: 'Ffoniwch ni ymlaen',
    ftAdd: 'Cyfeiriad',
    ftHrs: 'Oriau Agor',
    ftOne: 'Amdanom ni',
    ftTwo: 'Cysylltwch',
    ftThree: 'Gyrfaoedd',
    ftFour: 'Diweddaru COVID-19',
    ftFive: 'Hygyrchedd',
    ftSix: 'Preifatrwydd',
    ftSvn: 'Telerau ac Amodau',
    ftEght: 'Map o wefan',
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
