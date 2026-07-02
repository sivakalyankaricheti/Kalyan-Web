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
    const contactLinks=document.getElementById('contact-links');
    const socialNodes=(data.socialLinks||[]).map(item=>{const link=document.createElement('a');link.href=item.url;link.target='_blank';link.rel='noopener noreferrer';link.textContent=`${item.label} ↗`;return link});
    contactLinks.replaceChildren(email,phone,...socialNodes);
    document.getElementById('personal-details').replaceChildren(...(data.personalDetails||[]).map(item=>{const box=document.createElement('div');const value=document.createElement('strong');value.textContent=item.value;const label=document.createElement('span');label.textContent=item.label;box.append(value,label);return box}));
    document.getElementById('skill-cloud').replaceChildren(...(data.skills||[]).map(value=>{const skill=document.createElement('span');skill.textContent=value;return skill}));
    document.getElementById('experience-list').replaceChildren(...(data.experience||[]).map(item=>{const article=document.createElement('article');article.className='timeline-item reveal';const meta=document.createElement('div');const period=document.createElement('span');period.textContent=item.period;const location=document.createElement('span');location.textContent=item.location;meta.append(period,location);const content=document.createElement('div');const title=document.createElement('h3');title.textContent=item.title;const organization=document.createElement('p');organization.className='muted';organization.textContent=item.organization;const description=document.createElement('p');description.textContent=item.description;content.append(title,organization,description);article.append(meta,content);return article}));
    document.getElementById('project-list').replaceChildren(...(data.projects||[]).map((item,index)=>{const article=document.createElement('article');article.className=`project reveal${index===0?' project-featured':''}`;const number=document.createElement('div');number.className='project-number';number.textContent=item.number;const content=document.createElement('div');const category=document.createElement('p');category.className='tag';category.textContent=item.category;const title=document.createElement('h3');title.textContent=item.title;const description=document.createElement('p');description.textContent=item.description;content.append(category,title,description);if(item.link){const link=document.createElement('a');link.className='project-link';link.href=item.link;link.target='_blank';link.rel='noopener noreferrer';link.textContent='View project ↗';content.append(link)}article.append(number,content);return article}));
    document.getElementById('achievement-grid').replaceChildren(...data.achievements.map(item=>{const card=document.createElement('article');card.className='achievement-card reveal';const year=document.createElement('span');year.className='year';year.textContent=item.year;const title=document.createElement('h3');title.textContent=item.title;const description=document.createElement('p');description.textContent=item.description;card.append(year,title,description);return card}));
    document.getElementById('certificate-list').replaceChildren(...data.certificates.map(item=>{const row=document.createElement('div');row.className='certificate-item';const name=document.createElement('strong');name.textContent=item.name;const issuer=document.createElement('span');issuer.textContent=item.issuer;row.append(name,issuer);return row}));
    observeReveals();
  }catch(error){console.error(error)}
}
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
function observeReveals(){document.querySelectorAll('.reveal:not(.visible)').forEach(el=>observer.observe(el))}
observeReveals();loadPortfolio();
