const UI_TRANSLATIONS={
  en:{navAbout:'About',navExperience:'Experience',navWork:'Work',navGallery:'Gallery',navContact:'Contact',exploreWork:'Explore my work',aboutLabel:'About',aboutHeading:'Curious by Nature.<br>Practical by Design.',experienceLabel:'Experience & Education Background',projectsLabel:'Projects',achievementsLabel:'Achievements & Events',galleryLabel:'Gallery',galleryEmpty:'Gallery.',skillsLabel:'Technical Skills & Soft Skills',skillInstruction:'Tap a skill to view details',skillDetails:'Skill details',credentials:'Credentials',contactLabel:'Contact Details',contactHeading:'Let’s build something<br><span>useful together.</span>',contactText:'For AI, data, ERP or software opportunities, I’d be glad to connect.',backToTop:'Back to top ↑',openTo:'Open to opportunities',skillFallback:'Details for this skill can be added from the Admin page.',viewProject:'View project',moreDetails:'More details',openLink:'Open link ↗',viewCertificate:'View certificate ↗',portrait:'Portrait of'},
  fr:{navAbout:'À propos',navExperience:'Expérience',navWork:'Projets',navGallery:'Galerie',navContact:'Contact',exploreWork:'Découvrir mes projets',aboutLabel:'À propos',aboutHeading:'Curieux par nature.<br>Pragmatique par conception.',experienceLabel:'Expérience et formation',projectsLabel:'Projets',achievementsLabel:'Réalisations et événements',galleryLabel:'Galerie',galleryEmpty:'Galerie.',skillsLabel:'Compétences techniques et humaines',skillInstruction:'Touchez une compétence pour afficher les détails',skillDetails:'Détails de la compétence',credentials:'Certifications',contactLabel:'Coordonnées',contactHeading:'Construisons quelque chose<br><span>d’utile ensemble.</span>',contactText:'Pour des opportunités en IA, données, ERP ou logiciel, je serais ravi d’échanger.',backToTop:'Retour en haut ↑',openTo:'Ouvert aux opportunités',skillFallback:'Les détails de cette compétence peuvent être ajoutés depuis la page Admin.',viewProject:'Voir le projet',moreDetails:'Plus de détails',openLink:'Ouvrir le lien ↗',viewCertificate:'Voir le certificat ↗',portrait:'Portrait de'}
};
Object.assign(UI_TRANSLATIONS.en,{introKicker:'AI · DATA · SOFTWARE',introDescription:'Building practical systems where artificial intelligence, enterprise software and data meet.',introEnter:'Enter portfolio',introSkip:'Skip intro',introEnableSound:'👂 Enable video sound'});
Object.assign(UI_TRANSLATIONS.fr,{introKicker:'IA · DONNÉES · LOGICIELS',introDescription:'Je conçois des systèmes concrets à la rencontre de l’intelligence artificielle, des logiciels d’entreprise et des données.',introEnter:'Entrer dans le portfolio',introSkip:'Passer l’introduction',introEnableSound:'👂 Activer le son de la vidéo'});
const FRENCH_CONTENT={
  headline:'Je conçois des systèmes concrets à la rencontre de l’intelligence artificielle, des logiciels d’entreprise et des données.',
  aboutPrimary:'Je suis étudiant en MSc Intelligence Artificielle à l’ECE, école d’ingénieurs à Paris, titulaire d’un B.Tech en informatique et fort d’une expérience pratique en développement ERP.',
  aboutSecondary:'Mon travail couvre SAP ABAP, Python, la visualisation de données et les technologies web. J’aime transformer les besoins techniques en solutions fiables et comprendre les systèmes en profondeur afin de les améliorer.',
  personalInfoLabels:{Address:'Adresse','Date of birth':'Date de naissance','Family detail':'Informations familiales'},
  personalDetailLabels:{'MSc AI':'MSc IA','B.Tech GPA':'Moyenne B.Tech',Languages:'Langues'},
  experience:[
    {period:'Mars 2026 – aujourd’hui',title:'MSc en Intelligence Artificielle',description:'Développement de bases avancées en IA et application à des problématiques concrètes de logiciel et de données.'},
    {period:'Mai 2025 – janv. 2026',title:'Développeur ERP',description:'Développement, personnalisation et maintenance ERP ; écriture et modification de code, configuration des systèmes, résolution d’incidents et documentation technique.'},
    {period:'2020 – 2024',title:'B.Tech en Informatique et Ingénierie',description:'Diplômé avec une moyenne de 7,5 et auteur d’un projet de recherche de fin d’études sur la sécurité IoT, présenté lors d’une conférence internationale.'}
  ],
  projects:[
    {category:'SAP ABAP et systèmes d’entreprise',title:'Flux logistiques NVIDIA',description:'Développement de Smart Forms pour les listes de colisage, factures commerciales et connaissements ; programmes ALV pour les mises à jour POD ; intégration des transporteurs ; implémentations BAdI ; interfaces module pool et support de production.'},
    {category:'HTML, CSS, JavaScript et PHP',title:'Tableau de bord d’analyse des performances étudiantes',description:'Pipeline complet de traitement des données étudiantes et système interactif de visualisation des performances, de l’assiduité et de l’engagement, destiné aux enseignants et administrateurs.'},
    {category:'Python et PgAdmin 4',title:'Bitcoin et BlockCypher',description:'Création de transactions sur les réseaux de test Bitcoin et BlockCypher avec Bitcoin Script et python-bitcoinlib, incluant les entrées, sorties et la validation de scriptPubKey et scriptSig.'},
    {category:'IoT, recherche et sécurité',title:'GuardianAir',description:'Concept de gonflage d’airbag piloté par capteurs, associant IoT et surveillance en temps réel afin de réduire le risque de mort subite du nourrisson. L’article du projet a été publié lors d’une conférence internationale.'}
  ],
  achievements:[
    {title:'Publication lors d’une conférence internationale',description:'La recherche GuardianAir a été présentée à l’International Conference on Data Science and Artificial Intelligence (ICDSAI 2024).'},
    {title:'Livraison de solutions logistiques d’entreprise',description:'Livraison de formulaires SAP ABAP, programmes ALV, intégrations et support de production pour des flux logistiques.'}
  ],
  skillDescriptions:{'SAP ABAP':'Maîtrise des objets RICEF, du Data Dictionary, des rapports classiques, interactifs et ALV, de la migration de données, des améliorations et BAdI, des Smart Forms, de la programmation module pool et des techniques de débogage.'}
};
let currentLanguage=localStorage.getItem('portfolio-language')==='fr'?'fr':'en';
const t=key=>UI_TRANSLATIONS[currentLanguage][key]||UI_TRANSLATIONS.en[key]||key;
function applyUiLanguage(){document.documentElement.lang=currentLanguage;document.querySelectorAll('[data-i18n]').forEach(element=>element.textContent=t(element.dataset.i18n));document.querySelectorAll('[data-i18n-html]').forEach(element=>element.innerHTML=t(element.dataset.i18nHtml));document.querySelectorAll('[data-language]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.language===currentLanguage)))}
function localizeData(source){if(currentLanguage==='en')return source;const data=JSON.parse(JSON.stringify(source));data.headline=FRENCH_CONTENT.headline;data.aboutPrimary=FRENCH_CONTENT.aboutPrimary;data.aboutSecondary=FRENCH_CONTENT.aboutSecondary;data.personalInfo=(data.personalInfo||[]).map(item=>({...item,label:FRENCH_CONTENT.personalInfoLabels[item.label]||item.label}));data.personalDetails=(data.personalDetails||[]).map(item=>({...item,label:FRENCH_CONTENT.personalDetailLabels[item.label]||item.label}));data.experience=(data.experience||[]).map((item,index)=>({...item,...(FRENCH_CONTENT.experience[index]||{})}));data.projects=(data.projects||[]).map((item,index)=>({...item,...(FRENCH_CONTENT.projects[index]||{}),link1Label:item.link1Label==='GitHub source'?'Code GitHub':item.link1Label==='Research link'?'Lien de recherche':item.link1Label,link2Label:item.link2Label==='Live demo'?'Démo en ligne':item.link2Label==='Project link'?'Lien du projet':item.link2Label}));data.achievements=(data.achievements||[]).map((item,index)=>({...item,...(FRENCH_CONTENT.achievements[index]||{})}));data.skills=(data.skills||[]).map(value=>{const item=typeof value==='string'?{name:value,description:''}:value;return {...item,description:FRENCH_CONTENT.skillDescriptions[item.name]||item.description}});return data}
document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>{if(button.dataset.language===currentLanguage)return;currentLanguage=button.dataset.language;localStorage.setItem('portfolio-language',currentLanguage);document.getElementById('skill-detail').hidden=true;applyUiLanguage();loadPortfolio()}));
applyUiLanguage();

const portfolioIntro=document.getElementById('portfolio-intro');
const introEnter=document.getElementById('portfolio-intro-enter');
const introSkip=document.getElementById('portfolio-intro-skip');
const introSound=document.getElementById('portfolio-intro-sound');
const introVideo=portfolioIntro?.querySelector('.portfolio-intro-media');
const prefersReducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(portfolioIntro&&!prefersReducedMotion){
  portfolioIntro.hidden=false;
  document.body.classList.add('intro-active');
  let introTimer;
  const startIntroVideo=async()=>{
    if(!introVideo)return;
    introVideo.muted=true;
    introVideo.volume=1;
    try{await introVideo.play()}catch(error){}
  };
  const enableVideoSound=async()=>{
    if(!introVideo)return;
    introVideo.muted=false;
    try{await introVideo.play();introSound.hidden=true;return true}catch(error){introVideo.muted=true;introSound.hidden=false;return false}
  };
  const closeIntro=()=>{
    if(portfolioIntro.classList.contains('is-closing'))return;
    clearTimeout(introTimer);
    if(introVideo){introVideo.pause();introVideo.currentTime=0}
    portfolioIntro.classList.add('is-closing');
    window.setTimeout(()=>{portfolioIntro.hidden=true;document.body.classList.remove('intro-active')},450);
  };
  introEnter.addEventListener('click',closeIntro);
  introSkip.addEventListener('click',closeIntro);
  introSound.addEventListener('click',enableVideoSound);
  const enableSoundOnTouch=async(event)=>{if(event.target.closest('#portfolio-intro-enter,#portfolio-intro-skip,#portfolio-intro-sound'))return;event.preventDefault();if(await enableVideoSound())portfolioIntro.removeEventListener('click',enableSoundOnTouch)};
  portfolioIntro.addEventListener('click',enableSoundOnTouch);
  startIntroVideo();
  introTimer=window.setTimeout(closeIntro,10000);
}

const menuButton=document.querySelector('.menu-button');
const navLinks=document.querySelector('.nav-links');
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));navLinks.classList.toggle('open')});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('skill-detail-close').addEventListener('click',()=>{document.getElementById('skill-detail').hidden=true;document.querySelectorAll('.skill-chip').forEach(node=>{node.classList.remove('active');node.setAttribute('aria-pressed','false')})});

const safeText=(value='')=>String(value);
async function loadPortfolio(){
  try{
    const response=await fetch(`portfolio-data.json?v=${Date.now()}`,{cache:'no-store'});
    if(!response.ok)throw new Error('Portfolio data unavailable');
    const data=localizeData(await response.json());
    const names=data.name.trim().split(/\s+/); const last=names.pop()||'';
    document.getElementById('hero-first-name').textContent=names.join(' ')||last;
    document.getElementById('hero-last-name').textContent=names.length?`${last}.`:'';
    document.getElementById('hero-title').textContent=safeText(data.headline);
    document.querySelector('.eyebrow').textContent=`${safeText(data.location)} · ${t('openTo')}`;
    document.getElementById('about-primary').textContent=safeText(data.aboutPrimary);
    document.getElementById('about-secondary').textContent=safeText(data.aboutSecondary);
    const image=document.getElementById('profile-image'); image.src=data.profileImage||'assets/profile.jpg'; image.alt=`${t('portrait')} ${data.name}`;
    document.querySelectorAll('.brand-photo').forEach(photo=>{photo.src=data.profileImage||'assets/profile.jpg';photo.alt=`${t('portrait')} ${data.name}`});
    const email=document.getElementById('email-link'); email.href=`mailto:${data.contact.email}`; email.textContent=`${data.contact.email} ↗`;
    const phone=document.getElementById('phone-link'); phone.href=`tel:${data.contact.phone.replace(/\s/g,'')}`; phone.textContent=`${data.contact.phone} ↗`;
    const contactLinks=document.getElementById('contact-links');
    const socialNodes=(data.socialLinks||[]).map(item=>{const link=document.createElement('a');link.href=item.url;link.target='_blank';link.rel='noopener noreferrer';link.textContent=`${item.label} ↗`;return link});
    contactLinks.replaceChildren(email,phone,...socialNodes);
    document.getElementById('personal-info-list').replaceChildren(...(data.personalInfo||[]).filter(item=>item.value).map(item=>{const row=document.createElement('div');row.className='personal-info-item';const label=document.createElement('span');label.textContent=item.label;const value=document.createElement('strong');value.textContent=item.value;row.append(label,value);return row}));
    document.getElementById('personal-details').replaceChildren(...(data.personalDetails||[]).map(item=>{const box=document.createElement('div');const value=document.createElement('strong');value.textContent=item.value;const label=document.createElement('span');label.textContent=item.label;box.append(value,label);return box}));
    const skillCloud=document.getElementById('skill-cloud'),skillDetail=document.getElementById('skill-detail'),skillTitle=document.getElementById('skill-detail-title'),skillDescription=document.getElementById('skill-detail-description');
    const skills=(data.skills||[]).map(value=>typeof value==='string'?{name:value,description:''}:value);
    skillCloud.replaceChildren(...skills.map(item=>{const skill=document.createElement('button');skill.type='button';skill.className='skill-chip';skill.textContent=item.name||item.value||'';skill.addEventListener('click',()=>{skillCloud.querySelectorAll('.skill-chip').forEach(node=>{node.classList.remove('active');node.setAttribute('aria-pressed','false')});skill.classList.add('active');skill.setAttribute('aria-pressed','true');skillTitle.textContent=item.name||item.value||'';skillDescription.textContent=item.description||t('skillFallback');skillDetail.hidden=false;skillDetail.scrollIntoView({behavior:'smooth',block:'nearest'})});skill.setAttribute('aria-pressed','false');return skill}));
    document.getElementById('experience-list').replaceChildren(...(data.experience||[]).map(item=>{const article=document.createElement('article');article.className='timeline-item reveal';const meta=document.createElement('div');const period=document.createElement('span');period.textContent=item.period;const location=document.createElement('span');location.textContent=item.location;meta.append(period,location);const content=document.createElement('div');const title=document.createElement('h3');title.textContent=item.title;const organization=document.createElement('p');organization.className='muted';organization.textContent=item.organization;const description=document.createElement('p');description.textContent=item.description;content.append(title,organization,description);article.append(meta,content);return article}));
    document.getElementById('project-list').replaceChildren(...(data.projects||[]).map((item,index)=>{const article=document.createElement('article');article.className=`project reveal${index===0?' project-featured':''}`;const number=document.createElement('div');number.className='project-number';number.textContent=item.number;const content=document.createElement('div');const category=document.createElement('p');category.className='tag';category.textContent=item.category;const title=document.createElement('h3');title.textContent=item.title;const description=document.createElement('p');description.textContent=item.description;content.append(category,title,description);const links=document.createElement('div');links.className='project-links';const candidates=[{label:item.link1Label||t('viewProject'),url:item.link1||item.link},{label:item.link2Label||t('moreDetails'),url:item.link2}];candidates.filter(entry=>entry.url).forEach(entry=>{const link=document.createElement('a');link.className='project-link';link.href=entry.url;link.target='_blank';link.rel='noopener noreferrer';link.textContent=`${entry.label} ↗`;links.append(link)});if(links.childElementCount)content.append(links);article.append(number,content);return article}));
    const galleryItems=data.gallery||[];document.getElementById('gallery-empty').hidden=galleryItems.length>0;document.getElementById('gallery-grid').replaceChildren(...galleryItems.map(item=>{const card=document.createElement('article');card.className='gallery-card reveal';const image=document.createElement('img');image.src=item.image;image.alt=item.title;image.loading='lazy';const body=document.createElement('div');const title=document.createElement('h3');title.textContent=item.title;const description=document.createElement('p');description.textContent=item.description||'';body.append(title,description);if(item.url){const link=document.createElement('a');link.href=item.url;link.target='_blank';link.rel='noopener noreferrer';link.textContent=t('openLink');body.append(link)}card.append(image,body);return card}));
    document.getElementById('achievement-grid').replaceChildren(...data.achievements.map(item=>{const card=document.createElement('article');card.className='achievement-card reveal';const year=document.createElement('span');year.className='year';year.textContent=item.year;const title=document.createElement('h3');title.textContent=item.title;const description=document.createElement('p');description.textContent=item.description;card.append(year,title,description);return card}));
    document.getElementById('certificate-list').replaceChildren(...data.certificates.map(item=>{const row=document.createElement(item.url?'a':'div');row.className='certificate-item';if(item.url){row.href=item.url;row.target='_blank';row.rel='noopener noreferrer'}const content=document.createElement('div');const name=document.createElement('strong');name.textContent=item.name;const issuer=document.createElement('span');issuer.textContent=item.issuer;content.append(name,issuer);row.append(content);if(item.url){const preview=document.createElement('span');preview.className='certificate-action';preview.textContent=t('viewCertificate');row.append(preview)}return row}));
    observeReveals();
  }catch(error){console.error(error)}
}
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
function observeReveals(){document.querySelectorAll('.reveal:not(.visible)').forEach(el=>observer.observe(el))}
observeReveals();loadPortfolio();
