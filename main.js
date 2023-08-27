const mobNav = document.querySelector('.menu');
const nav = document.querySelector('.header-top');
const toggleNavbar = () => {
  nav.classList.toggle('active');
};

mobNav.addEventListener('click', () => toggleNavbar());


const form = document.forms[0];
const email = document.getElementById('email');
const error = document.getElementById('alert-txt');

form.addEventListener('submit', (event) => {
  const ErrorMsg = [];
  if (email.value.match(/[A-Z]/)) {
    ErrorMsg.push('Please insert your email in lowercase.');
    error.innerHTML = ErrorMsg.join(', ');
    event.preventDefault();
    event.stopPropagation();
  }
});


const Name = document.getElementById('name');
const Msg = document.getElementById('msg-box');

form.addEventListener('input', () => {
  localStorage.setItem('Name', `${Name.value}`);
  localStorage.setItem('Email', `${email.value}`);
  localStorage.setItem('TextArea', `${Msg.value}`);
});

Name.value = localStorage.getItem('Name');
email.value = localStorage.getItem('Email');



const projects = [
  {
    name: 'Tonic',
    title: 'Tonic',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    'featured image': './images/images/tonic-page-1.png',
    'featured image desk': './images/images/snaposhot-1-desktop-p.png',
    technologies: ['html', 'css', 'javascript'],
    'link to live version':
      ' https://eyoab01.github.io/urrpo/',
    'link to source':
      'https://eyoab01.github.io/urrpo/',
    id: 0,
  },
  {
    name: 'Multi-Post Stories',
    title: 'Multi-Post Stories',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    'featured image': './images/images/Multi-post-stories.png',
    'featured image desk': './images/images/multi-post-portfolio-desktop-1.svg',
    technologies: ['html', 'css', 'javascript'],
    'link to live version':
      ' https://eyoab01.github.io/capstone-project-tesfaye/',
    'link to source':
      ' https://eyoab01.github.io/capstone-project-tesfaye/',
    id: 1,
  },
  {
    name: 'Tonic',
    title: 'Facebook 360',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    'featured image': './images/images/Tonic-page3.png',
    'featured image desk': './images/images/facebook-360-desktop.svg',
    technologies: ['html', 'css', 'javascript'],
    'link to live version':
      ' https://eyoab01.github.io/tesfaye-portfolio/',
    'link to source':
      ' https://eyoab01.github.io/tesfaye-portfolio/',
    id: 2,
  },
  {
    name: 'Multi-Post Stories',
    title: 'Uber Navigation',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    'featured image': './images/images/multi-post-stories-2.png',
    'featured image desk': './images/images/uber-nav-desktop.svg',
    technologies: ['html', 'css', 'javascript'],
    'link to live version':
      ' https://eyoab01.github.io/tesfaye-portfolio/',
    'link to source':
      ' https://eyoab01.github.io/tesfaye-portfolio/',
    id: 3,
  },
];

projects.forEach((element, i) => {
  const work = document.querySelector('.work-exp');
  const card = document.createElement('article');
  card.classList = 'work-sec';
  if (i === 1) {
    card.setAttribute('id', 'flipped');
  } else if (i === 3) {
    card.setAttribute('id', 'flipped');
  }

  const popupcard = `
  <img src="${projects[i]['featured image']}" alt="Snapshot Portfolio" class="portfolio-img-1-mobile">
<img src="${projects[i]['featured image desk']}" alt="Snapshot Portfolio"
    class="portfolio-img-1-desktop">
<article class="work-text">
    <h2 class="project-title-heading text-mobile">${projects[i].name}</h2>
    <h2 class="project-title-heading text-desktop">${projects[i].title}</h2>

    <article class="details-bottom">
        <h2 class="client-heading text-mobile">CANOPY</h2>
        <h2 class="client-heading text-desktop">CANOPY</h2>
        <img src="./images/icons/Counter.png" alt="Counter">
        <h2 class="role text-mobile">Back End Dev</h2>
        <h2 class="role text-desktop">Back End Dev</h2>
        <img src="./images/icons/Counter.png" alt="Counter">
        <h2 class="year text-mobile">2015</h2>
        <h2 class="year text-desktop">2015</h2>
    </article>

    <p class="pro-detail-p text-mobile">
        A daily selection of privately personalized reads; no accounts or sign-ups required.
    </p>
    <p class="pro-detail-p text-desktop">
        A daily selection of privately personalized reads; no accounts or sign-ups required.
    </p>

    <ul class="logo-tags">
        <li><a href="#"><img src="./images/icons/Htmllogo.png" alt="Htmllogo"></a></li>
        <li><a href="#"><img src="./images/icons/ruby-n-rails-tag.png" alt="RubyLogo" class="portfolio-img-1-desktop"></a></li>
        <li><a href="#"><img src="./images/icons/csslogo.png" alt="csslogo"></a></li>
        <li><a href="#"><img src="./images/icons/jslogo.png" alt="jslogo"></a></li>
    </ul>
    <div class="button-container">
        <button class="see-pro" type="button" id="${projects[i].id}">
            See project
        </button>
    </div>
</article>

`;
  card.innerHTML += popupcard;
  work.appendChild(card);
});


function makeDiv(event) {
  const popup = document.createElement('div');
  document.body.append(popup);
  popup.classList.add('popup-cl');

  // add elements
  const header = document.createElement('div');
  header.classList.add('hdr-pop');
  const projecthead = document.createElement('h2');
  projecthead.classList.add('pro-top');
  const projectimg = document.createElement('img');
  projectimg.classList.add('pro-img');
  const positiondiv = document.createElement('div');
  positiondiv.classList.add('pop-div');
  const projectdescrip = document.createElement('p');
  projectdescrip.classList.add('pro-desc');
  const langbtndiv = document.createElement('div');
  langbtndiv.classList.add('lang-div');
  const projecttech = document.createElement('ul');
  projecttech.classList.add('lang-cont');
  const projectbtncontainer = document.createElement('div');
  const btnseelive = document.createElement('a');
  const btnseesource = document.createElement('a');
  const closeButton = document.createElement('button');
  closeButton.classList.add('cl-button');
  closeButton.id = 'close-button';


  popup.append(
    header,
    projecthead,
    closeButton,
    projectimg,
    positiondiv,
    projectdescrip,
    langbtndiv,
    projecttech,
    projectbtncontainer,
  );
  header.append(projecthead, closeButton);
  positiondiv.append(projectdescrip, langbtndiv, projecttech, projectbtncontainer);
  langbtndiv.append(projecttech, projectbtncontainer);
  projectbtncontainer.append(btnseelive, btnseesource);


  const projectId = parseInt(event.target.id, 10);
  projecthead.textContent = projects[projectId].name;
  projectimg.src = projects[projectId]['featured image'];
  projectdescrip.textContent = projects[projectId].description;

  for (let i = 0; i < projects[projectId].technologies.length; i += 1) {
    const projectLi = document.createElement('li');
    projectLi.className = 'lang-pop';
    projectLi.textContent = projects[projectId].technologies[i];
    projecttech.appendChild(projectLi);
  }

  projectbtncontainer.classList.add('btn-pop');
  btnseelive.href =projects[projectId]['link to live version'];
  btnseelive.classList.add('btn-seelive-pp');
  btnseelive.target = '_blank';
  btnseelive.textContent = 'See Live';
  btnseesource.href = projects[projectId]['link to source'];
  btnseesource.classList.add('btn-seesource-pp');
  btnseesource.target = '_blank';
  btnseesource.textContent = 'See Source';



  function closeButtonFunction() {
    popup.remove();
  }
  const clickCloseButton = document.getElementById('close-button');
  clickCloseButton.addEventListener('click', closeButtonFunction);
}


const buttonsee = document.querySelectorAll('.see-pro');
buttonsee.forEach((btn) => {
  btn.addEventListener('click', makeDiv);
});
