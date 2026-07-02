const menuButton=document.querySelector('.menu-button');
const navLinks=document.querySelector('.nav-links');
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));navLinks.classList.toggle('open')});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));
document.getElementById('year').textContent=new Date().getFullYear();

const safeText=(value='')=>String(value);
async function loadPortfolio(){
  try{
    const response=await fetch(`portfolio-data.json?v=${Date.now()}`,{cache:'no-store'});
    if(!response.ok)throw new Error('Portfolio data unavailable');
    const data=await response.json();
    const names=data.name.trim().split(/\s+/); const last=names.pop()||'';
    document.getElementById('hero-first-name').textContent=names.join(' ')||last;
    document.getElementById('hero-last-name').textContent=names.length?`${last}.`:'';
    document.getElementById('hero-title').textContent=safeText(data.headline);
    document.querySelector('.eyebrow').textContent=`${safeText(data.location)} · Open to opportunities`;
    document.getElementById('about-primary').textContent=safeText(data.aboutPrimary);
    document.getElementById('about-secondary').textContent=safeText(data.aboutSecondary);
    const image=document.getElementById('profile-image'); image.src=data.profileImage||'assets/profile.jpg'; image.alt=`Portrait of ${data.name}`;
    const email=document.getElementById('email-link'); email.href=`mailto:${data.contact.email}`; email.textContent=`${data.contact.email} ↗`;
    const phone=document.getElementById('phone-link'); phone.href=`tel:${data.contact.phone.replace(/\s/g,'')}`; phone.textContent=`${data.contact.phone} ↗`;
    const linkedin=document.getElementById('linkedin-link'); linkedin.href=data.contact.linkedin;
    document.getElementById('skill-cloud').replaceChildren(...(data.skills||[]).map(value=>{const skill=document.createElement('span');skill.textContent=value;return skill}));
    document.getElementById('achievement-grid').replaceChildren(...data.achievements.map(item=>{const card=document.createElement('article');card.className='achievement-card reveal';const year=document.createElement('span');year.className='year';year.textContent=item.year;const title=document.createElement('h3');title.textContent=item.title;const description=document.createElement('p');description.textContent=item.description;card.append(year,title,description);return card}));
    document.getElementById('certificate-list').replaceChildren(...data.certificates.map(item=>{const row=document.createElement('div');row.className='certificate-item';const name=document.createElement('strong');name.textContent=item.name;const issuer=document.createElement('span');issuer.textContent=item.issuer;row.append(name,issuer);return row}));
    observeReveals();
  }catch(error){console.error(error)}
}
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
function observeReveals(){document.querySelectorAll('.reveal:not(.visible)').forEach(el=>observer.observe(el))}
observeReveals();loadPortfolio();
