// Matrix + reveal + modal + avatar tilt (final3)
(function(){
  // MATRIX
  const canvas = document.getElementById('matrix');
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext('2d');
    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;
    const fontSize = 12;
    let columns = Math.floor(W / fontSize);
    let drops = Array(columns).fill(1);
    const letters = '01';
    function resize(){ W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; columns = Math.floor(W / fontSize); drops = Array(columns).fill(1); }
    window.addEventListener('resize', resize);
    function draw(){ ctx.fillStyle='rgba(0,0,0,0.06)'; ctx.fillRect(0,0,W,H); ctx.fillStyle='#00ffcf'; ctx.font = fontSize + 'px monospace'; for(let i=0;i<drops.length;i++){ const text = letters.charAt(Math.floor(Math.random()*letters.length)); ctx.fillText(text, i*fontSize, drops[i]*fontSize); if(drops[i]*fontSize>H && Math.random()>0.975) drops[i]=0; drops[i]++; } }
    setInterval(draw,40);
  }

  // REVEAL
  function revealOnScroll(){ const elements = document.querySelectorAll('.pre-reveal'); const wh = window.innerHeight; elements.forEach(el=>{ const rect = el.getBoundingClientRect(); if(rect.top < wh - 100){ el.classList.add('reveal'); el.classList.remove('pre-reveal'); } }); }
  window.addEventListener('load', revealOnScroll);
  window.addEventListener('scroll', revealOnScroll);

  // AVATAR TILT
  const avatar = document.getElementById('avatar');
  if(avatar){ document.addEventListener('mousemove', (ev)=>{ const x = (window.innerWidth/2 - ev.clientX)/80; const y = (window.innerHeight/2 - ev.clientY)/80; avatar.style.transform = `translateY(-6px) rotateX(${y}deg) rotateY(${x}deg)`; }); }

  // MODAL DATA (2-3 sentence descriptions)
  const DATA = {
    proj1: {
      title: 'Computational Biology — Coral Health AI',
      img: 'images/proj_ai_koral.jpg',
      desc: 'Developed a machine learning model to assess coral health from underwater images. The project involved dataset curation, image augmentation, and model evaluation to support environmental monitoring efforts. Implemented practical preprocessing pipeline and accuracy analysis.',
      meta: 'Tech: Python, TensorFlow, OpenCV',
      link: 'https://drive.google.com/drive/folders/1L3x5Fn12PzntLIRBrBCGH-EpFzH6k7-M?usp=sharing'
    },
    proj2: {
      title: 'Artificial Intelligence — Trash Classifier',
      img: 'images/proj_ai_trash.png',
      desc: 'Built an image classification model to identify types of waste using CNN architectures. Focused on optimizing inference speed for mobile deployment and reducing false positives. Documented experimental results and model limitations.',
      meta: 'Tech: PyTorch, MobileNet, Data Augmentation',
      link: 'https://drive.google.com/drive/folders/1FGi6DezoUB8NPadHlTUGlhOBAcxn0Dfa?usp=sharing'
    },
    proj3: {
      title: 'HCI & SecPro — CTF Registration Web',
      img: 'images/proj_ctfweb.png',
      desc: 'Designed and implemented a registration platform for CTF events with usability and security considerations. Integrated form validation, user flow design, and backend stubs for participant management. Resulted in smoother registration for event organizers.',
      meta: 'Tech: HTML, CSS, JavaScript, Node (prototype)',
      link: 'https://drive.google.com/drive/folders/11RRn2ucT5HhGh_mow38hlp4y_1VjO5ua?usp=sharing'
    },
    proj4: {
      title: 'Mobile Pentest — App Assessments',
      img: 'images/proj_mobpentest.jpg',
      desc: 'Conducted penetration tests on two mobile applications to identify security weaknesses. Produced vulnerability reports and remediation recommendations for secure coding and configuration. Collaborated with teams to validate fixes.',
      meta: 'Tech: Burp Suite, OWASP, Android/iOS tools',
      link: 'https://drive.google.com/drive/folders/1eEmwTW5ugn-sLf8znwlIwnVCs0QyOywC?usp=sharing'
    },
    proj5: {
      title: 'Software Engineering — Secure Joint Account',
      img: 'images/proj_se.png',
      desc: 'Developed a secure joint-account system prototype aimed at reducing fraudulent activities. Focused on transaction validation, multi-party approvals, and UX safeguards against social engineering. Built unit tests and threat models.',
      meta: 'Tech: JavaScript, Node, Unit Tests',
      link: 'https://drive.google.com/drive/folders/19JAkS0ro0U5mmKlIyzFEPE25JybGmNr3?usp=sharing'
    },
    proj6: {
      title: 'CTF Writeups & Tools',
      img: 'images/proj_ctf.png',
      desc: 'Documented challenge writeups and created helper scripts for common CTF tasks. Shared knowledge with team members to improve performance in competitions. Maintained a personal archive of methods and solutions.',
      meta: 'Tech: Shell, Python, Reverse Engineering tools',
      link: 'https://drive.google.com/drive/folders/1TR7IaRDFnJZ9lGVVHTrs1BKRdyKLaLSH?usp=sharing'
    },
    exp1: {
      title: 'Freshmen Leader & Partner (B2028 & B2029)',
      img: 'images/orientation.jpg',
      desc: 'Guided new students through orientation activities, mentoring, and peer support to ensure a smooth adaptation process. Coordinated schedules and collaborated with teams to deliver engaging sessions. Focused on building inclusive and supportive environments.',
      meta: 'Role: Leadership, Mentoring'
    },
    exp2: {
      title: 'Event Committee — Rector Cup',
      img: 'images/rectorcup.jpg',
      desc: 'Managed logistics and ensured availability of equipment for the Rector Cup competitions. Communicated with vendors and volunteers to maintain smooth operations during the event. Helped resolve last-minute coordination challenges under pressure.',
      meta: 'Role: Logistics, Event Ops'
    },
    exp3: {
      title: 'Committee — Binus Festival (Bifest)',
      img: 'images/bifest.jpg',
      desc: 'Supported SSO and event execution during Binus Festival, contributing to attendee experience and operational flow. Collaborated across teams to manage schedules and technical integrations. Ensured tasks were completed on time and to quality standards.',
      meta: 'Role: Event Support, Coordination'
    },
    exp4: {
      title: 'BCA Youth Ambassador',
      img: 'images/bca.jpg',
      desc: 'Served as a student ambassador for BCA, promoting programs and activities to peers and the wider community. Created content and participated in outreach events to increase awareness and engagement. Acted as a liaison between students and the program team.',
      meta: 'Role: Ambassador, Outreach'
    },
    exp5: {
      title: 'Public Relations — Volleyball',
      img: 'images/volley.PNG',
      desc: 'Managed internal communications and social media content for the volleyball team to boost team visibility and engagement. Produced visual assets and coordinated updates across channels.',
      meta: 'Role: Communications'
    },
    exp6: {
      title: 'Top 15 Binus Influencer & Ambassador',
      img: 'images/binus_influencer.PNG',
      desc: 'Recognized as a top student influencer, participating in ambassador programs and digital campaigns to support university initiatives. Contributed to content strategy and promotional efforts.',
      meta: 'Role: Ambassador, Content'
    }
  };

  // modal helpers
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalMeta = document.getElementById('modal-meta');
  const modalLink = document.getElementById('modal-link');

  function openModal(key){
    const d = DATA[key];
    if(!d) return;
    modalImg.src = d.img;
    modalTitle.textContent = d.title;
    modalDesc.textContent = d.desc;
    modalMeta.textContent = d.meta || '';
    modalLink.innerHTML = d.link ? ('<a href="'+d.link+'" target="_blank" class="btn ghost">Open Proof</a>') : '';
    modal.classList.add('show');
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(){ modal.classList.remove('show'); modal.setAttribute('aria-hidden','true'); document.body.style.overflow = ''; }

  // click delegate for tiles and exp-cards
  document.addEventListener('click', (e)=>{
    const el = e.target.closest('[data-type]');
    if(el && el.dataset.id){
      openModal(el.dataset.id);
    }
    if(e.target.matches('[data-close]') || e.target.closest('[data-close]')) closeModal();
  });

  // keyboard close (ESC)
  document.addEventListener('keydown',(e)=>{ if(e.key==='Escape' && modal.classList.contains('show')) closeModal(); });

})();