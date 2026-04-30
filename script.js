// Cache global de localizações para garantir que o modal sempre funcione
let currentLocations = [];

const INITIAL_DATA = {
    "seo-title": 'IndoorUP | Mídia Indoor Digital e TV Corporativa',
    "seo-desc": 'Transforme a visibilidade da sua empresa com mídia indoor digital estratégica. Alcance clientes reais em locais de alto fluxo.',
    "logo-span": 'UP',
    "logo-img": '',
    "whatsapp-number": '5596981306171',
    "whatsapp-msg": 'Olá! Gostaria de saber mais sobre os serviços da IndoorUP.',
    "hero-title": 'Sua imagem no lugar e na hora certa!',
    "hero-subtitle": 'Conecte sua marca ao seu público através da maior rede de telas digitais do Amapá.',
    "hero-bg": 'indoorup_hero_bg_1777137989497.png',
    "hero-btn1-text": 'Solicitar Proposta Agora',
    "hero-btn2-text": 'Falar com Especialista',
    "about-title": 'Sobre a IndoorUP',
    "about-p1": 'visualizações diárias estimadas',
    "about-p2": 'Nossa rede cresce a cada dia, levando inovação, tecnologia e resultados reais para nossos parceiros e anunciantes em todo o estado.',
    "stats-bg": 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    "why-title": 'O que é Mídia Indoor e Por Que Investir',
    "why-stat": '89%',
    "why-sub": 'dos brasileiros são impactados pela mídia indoor',
    "why-desc": 'Mídia indoor é a publicidade exibida em telas digitais em locais públicos como academias, supermercados, padarias, restaurantes, lojas e outros espaços estratégicos, com conteúdo dinâmico e atualizado diariamente em tempo real.',
    "stat-views": '45.000',
    "stat-points": '10+',
    "stat-cities": '03',
    "stat-screens": '16',
    "f1-city": 'Santana - AP', "f1-num": '107.618', "f1-p": '10 Pontos', "f1-t": '13 Telas',
    "f2-city": 'Santana - AP (Setor 2)', "f2-num": '107.618', "f2-p": '2 Pontos', "f2-t": '2 Telas',
    "f3-city": 'Vitória do Jari - AP', "f3-num": '487.200', "f3-p": '3 Pontos', "f3-t": '3 Telas',
    "f4-city": 'Outros Pontos', "f4-num": '11.291', "f4-p": 'Expansão',
    "gal1": ['totem_digital_academia_1777159940529.png', 'indoorup_gallery_santana_1_1777140347206.png', 'indoorup_ad_gym_1777141062952.png'],
    "gal2": ['totem_digital_supermercado_1777159955611.png', 'indoorup_ad_coffee_1777141048781.png', 'indoorup_gallery_santana_2_1777140359054.png'],
    "gal3": ['totem_digital_corporativo_1777159985175.png', 'indoorup_gallery_vitoria_jari_1777140371551.png', 'indoorup_gallery_vitoria_jari_2_1777141035883.png'],
    "contact-wa": '5596981306171',
    "contact-email": 'Indoorupap@gmail.com',
    "contact-ig": 'https://instagram.com/Indoorup_',
    "footer-slogan": '“Sua imagem no lugar e na hora certa!”',
    plans: [
        { name: 'Sistema exclusivo', price: 'R$ 180,00', features: ['1 ESTABELECIMENTO', '01 PONTO COMERCIAL', '30 VÍDEO DE 30s GRÁTIS'] },
        { name: 'Basic', price: 'R$ 250,00', features: ['4 ESTABELECIMENTOS', '01 TV COM MOTION DE 15s'] },
        { name: 'Plus', price: 'Sob Consulta', features: ['PROJETOS ESPECIAIS', 'MÚLTIPLAS TELAS', 'SUPORTE PRIORITÁRIO'] }
    ],
    locations: [
        { name: 'Academia Performance', city: 'Santana', screens: '1 Tela Digital', hours: 'SEG-SEX: 08:00 - 21:00' },
        { name: 'Paraíba Importado', city: 'Santana', screens: '1 Tela Digital', hours: 'SEG-SEX: 08:00 - 18:00' },
        { name: 'Panificadora Novo Pão', city: 'Santana', screens: '1 Tela Digital', hours: '06:30 - 21:00' },
        { name: 'Empório Cosméticos', city: 'Santana', screens: '3 Telas Digitais', hours: '08:00 - 17:30' },
        { name: 'Ideal Atacarejo', city: 'Santana', screens: '4 Telas Digitais', hours: '07:00 - 21:00' },
        { name: 'Hus Food Burguers', city: 'Santana', screens: '1 Tela Digital', hours: '18:00 - 23:00' },
        { name: 'Rio Jens', city: 'Macapá', screens: '2 Telas Digitais', hours: '08:00 - 18:00' },
        { name: 'MOBETEC', city: 'Macapá', screens: '1 Tela Digital', hours: '10:00 - 22:00' },
        { name: 'Tempero da Roça', city: 'Vitória do Jari', screens: '2 Telas Digitais', hours: '08:00 - 23:00' },
        { name: 'Anderson Informática', city: 'Vitória do Jari', screens: '1 Tela Digital', hours: '08:00 - 19:00' }
    ],
    models: [
        { 
            title: 'Tela Exclusiva', 
            desc: 'No modelo exclusivo da IndoorUP, sua empresa tem total controle da programação exibida nas telas. Todo o conteúdo é dedicado à sua marca, sem compartilhamento com outros anunciantes.',
            features: ['100% do tempo dedicado à sua marca', 'Sem compartilhamento com outros anunciantes', 'Você define campanhas, promoções e vídeos', 'Comunicação direta, estratégica e de alto impacto'],
            img: 'indoorup_exclusive_model_1777138717706.png'
        },
        { 
            title: 'TV Compartilhada', 
            desc: 'Nesse modelo, a programação é organizada pela equipe da IndoorUP, combinando conteúdos informativos, entretenimento e anúncios de diferentes empresas.',
            features: ['Exposição frequente e estratégica', 'Sem concorrência direta no mesmo bloco', 'Conteúdo informativo que retém a atenção', 'Comunicação do estabelecimento inclusa'],
            img: 'indoorup_shared_model_1777138732893.png'
        },
        { 
            title: 'TV Corporativa', 
            desc: 'Transforme a visibilidade da sua empresa em algo moderno, dinâmico e estratégico. Uma solução interativa, dinâmica e objetiva para conectar sua marca.',
            features: ['Conteúdos totalmente personalizados', 'Fortalecimento imediato da marca', 'Solução completa: do planejamento à instalação', 'Comunicação eficiente para colaboradores e clientes'],
            img: 'indoorup_corporate_totem_1777140008932.png'
        }
    ]
};

document.addEventListener('DOMContentLoaded', async () => {
    await applyAdminConfig();
    AOS.init({ duration: 1000, once: true, offset: 100 });

    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) header.classList.add('scrolled');
            else header.classList.remove('scrolled');
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerEl = document.getElementById('header');
                const headerH = headerEl ? headerEl.offsetHeight : 0;
                window.scrollTo({ top: target.offsetTop - headerH, behavior: 'smooth' });
                const navLinks = document.querySelector('.nav-links');
                if (navLinks && navLinks.classList.contains('active')) navLinks.classList.remove('active');
            }
        });
    });

    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) backToTop.classList.add('show');
            else backToTop.classList.remove('show');
        });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenu.querySelector('i').classList.toggle('fa-bars');
            mobileMenu.querySelector('i').classList.toggle('fa-times');
        });
    }
});

async function applyAdminConfig() {
    let data = {};
    try {
        const { data: cloudRow, error } = await window.supabase
            .from(window.TABLE_NAME)
            .select('data')
            .eq('id', window.DOCUMENT_ID)
            .single();

        if (error) throw error;
        data = cloudRow && cloudRow.data ? { ...INITIAL_DATA, ...cloudRow.data } : INITIAL_DATA;
    } catch (e) {
        console.warn("Usando dados locais:", e);
        const savedData = JSON.parse(localStorage.getItem('indoorup_data')) || INITIAL_DATA;
        data = { ...INITIAL_DATA, ...savedData };
    }

    document.title = data['seo-title'];
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', data['seo-desc']);

    document.querySelectorAll('.logo').forEach(logoDiv => {
        if (data['logo-img']) {
            logoDiv.innerHTML = `<img src="${data['logo-img']}" alt="Logo" style="max-height: 45px;">`;
        } else {
            logoDiv.innerHTML = `Indoor<span>${data['logo-span'] || 'UP'}</span>`;
        }
        logoDiv.style.opacity = '1';
    });

    const heroH1 = document.querySelector('.hero-content h1');
    if (heroH1) heroH1.innerText = data['hero-title'];
    const heroP = document.querySelector('.hero-content p');
    if (heroP) heroP.innerText = data['hero-subtitle'];
    const heroBtns = document.querySelectorAll('.hero-ctas .btn');
    if (heroBtns.length >= 2) {
        heroBtns[0].innerText = data['hero-btn1-text'];
        heroBtns[1].innerText = data['hero-btn2-text'];
    }
    const heroImg = document.querySelector('.hero-bg img');
    if (heroImg && data['hero-bg']) heroImg.src = data['hero-bg'];

    const aboutSection = document.querySelector('#sobre');
    if (aboutSection) {
        const p2 = aboutSection.querySelector('.about-text-2');
        if (p2) p2.innerText = data['about-p2'];
    }

    if (data['stats-bg']) {
        document.querySelectorAll('.stats-section').forEach(section => {
            section.style.backgroundImage = `linear-gradient(rgba(1, 8, 18, 0.85), rgba(1, 8, 18, 0.85)), url(${data['stats-bg']})`;
        });
    }

    const whySection = document.querySelector('#pq-investir');
    if (whySection) {
        const bigStat = whySection.querySelector('.stat-big');
        if (bigStat) bigStat.innerText = data['why-stat'];
        const subText = whySection.querySelector('.stat-desc');
        if (subText) subText.innerText = data['why-sub'];
        const mainDesc = whySection.querySelector('.description-highlight p');
        if (mainDesc) mainDesc.innerText = data['why-desc'];
    }

    const statsMapping = [
        { id: 'stat-screens', key: 'stat-screens' },
        { id: 'stat-points', key: 'stat-points' },
        { id: 'stat-cities', key: 'stat-cities' },
        { id: 'stat-views', key: 'stat-views' }
    ];
    statsMapping.forEach(map => {
        const el = document.getElementById(map.id);
        if (el) {
            const rawValue = data[map.key] || '';
            el.innerText = rawValue;
            const numericValue = parseInt(rawValue.replace(/[^0-9]/g, ''));
            if (el.classList.contains('counter') && !isNaN(numericValue)) {
                startCounterAnimation(el, numericValue);
            }
        }
    });

    for (let i = 1; i <= 4; i++) {
        const cityEl = document.getElementById(`f${i}-city`);
        const numEl = document.getElementById(`f${i}-num`);
        if (cityEl) cityEl.innerText = data[`f${i}-city`];
        if (numEl) {
            numEl.innerText = data[`f${i}-num`];
            const target = parseInt(numEl.innerText.replace(/[^0-9]/g, ''));
            if (!isNaN(target)) startCounterAnimation(numEl, target);
        }
    }

    renderDynamicLocations(data.locations);
    renderDynamicGallery('gal1', data.gal1, 0);
    renderDynamicGallery('gal2', data.gal2, 1);
    renderDynamicGallery('gal3', data.gal3, 2);
    renderDynamicModels(data.models || INITIAL_DATA.models);
    renderDynamicPlans(data.plans || []);

    const contactLinks = document.querySelectorAll('.footer-contact-list li');
    contactLinks.forEach(li => {
        if (li.querySelector('.fa-envelope')) li.innerHTML = `<i class="fas fa-envelope"></i> ${data['contact-email']}`;
    });

    const footerStrong = document.querySelector('.footer-bottom strong');
    if (footerStrong) footerStrong.innerText = data['footer-slogan'];

    applyWhatsAppLinks(data);
}

function applyWhatsAppLinks(data) {
    const waBase = data['whatsapp-number'] || '5596981306171';
    
    // Header
    const headerBtn = document.querySelector('header .btn-whatsapp');
    if (headerBtn) {
        const msg = encodeURIComponent("Olá! Vi o site da IndoorUP e gostaria de tirar algumas dúvidas sobre os serviços.");
        headerBtn.setAttribute('href', `https://wa.me/${waBase}?text=${msg}`);
    }

    // Hero 1 (Primary - Solicitar Proposta)
    const heroBtn1 = document.querySelector('.hero-content .btn-primary');
    if (heroBtn1) {
        const msg = encodeURIComponent("Olá! Gostaria de solicitar uma proposta personalizada para anunciar minha marca na IndoorUP.");
        heroBtn1.setAttribute('href', `https://wa.me/${waBase}?text=${msg}`);
    }

    // Hero 2 (Specialist - Falar com Especialista)
    const heroBtn2 = document.querySelector('.hero-content .btn-whatsapp');
    if (heroBtn2) {
        const msg = encodeURIComponent("Olá! Gostaria de falar com um especialista sobre as melhores estratégias de mídia indoor para minha empresa.");
        heroBtn2.setAttribute('href', `https://wa.me/${waBase}?text=${msg}`);
    }

    // CTA Final 1
    const ctaBtn1 = document.querySelector('.cta-final .btn-primary');
    if (ctaBtn1) {
        const msg = encodeURIComponent("Olá! Acabei de ver o site da IndoorUP e quero começar a anunciar agora! Qual o próximo passo?");
        ctaBtn1.setAttribute('href', `https://wa.me/${waBase}?text=${msg}`);
    }

    // CTA Final 2
    const ctaBtn2 = document.querySelector('.cta-final .btn-whatsapp');
    if (ctaBtn2) {
        const msg = encodeURIComponent("Olá! Tenho interesse em anunciar com a IndoorUP mas ainda tenho dúvidas. Pode me ajudar a escolher o melhor plano para minha empresa?");
        ctaBtn2.setAttribute('href', `https://wa.me/${waBase}?text=${msg}`);
    }

    // Footer Social
    const footerWa = document.querySelector('.social-link[href*="wa.me"]');
    if (footerWa) {
        const msg = encodeURIComponent("Olá! Encontrei seu contato no rodapé do site e gostaria de saber mais sobre a IndoorUP.");
        footerWa.setAttribute('href', `https://wa.me/${waBase}?text=${msg}`);
    }
}

function startCounterAnimation(el, target) {
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateValue(el, 0, target, 2000);
            observer.disconnect();
        }
    }, { threshold: 0.5 });
    observer.observe(el);
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        obj.innerText = current.toLocaleString('pt-BR');
        if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
}

function renderDynamicPlans(plans) {
    const container = document.querySelector('.plans-grid');
    if (!container) return;
    container.innerHTML = '';
    const waBase = localStorage.getItem('indoorup_data') ? (JSON.parse(localStorage.getItem('indoorup_data'))['whatsapp-number'] || '5596981306171') : '5596981306171';
    plans.forEach((plan, idx) => {
        const isFeatured = idx === 1;
        const card = document.createElement('div');
        card.className = `plan-card ${isFeatured ? 'featured' : ''}`;
        const msg = encodeURIComponent(`Olá! Tenho interesse em contratar o Plano ${plan.name} (${plan.price}/mês). Pode me enviar mais informações?`);
        const waLink = `https://wa.me/${waBase}?text=${msg}`;
        card.innerHTML = `
            <div class="plan-icon"><i class="fas ${isFeatured ? 'fa-store' : 'fa-store-alt'}"></i></div>
            <h3>${plan.name}</h3>
            <div class="plan-price">${plan.price}<span>/mês</span></div>
            <ul class="plan-features">${plan.features.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('')}</ul>
            <a href="${waLink}" class="btn btn-primary" target="_blank">Contratar Agora</a>
        `;
        container.appendChild(card);
    });
}

function renderDynamicLocations(locations) {
    currentLocations = locations; // Salva globalmente para o modal usar
    const grid = document.querySelector('.locations-grid');
    if (!grid) return;
    grid.innerHTML = '';
    locations.forEach((loc, index) => {
        const card = document.createElement('div');
        card.className = 'location-card';
        card.innerHTML = `
            <div class="location-header">
                <span class="city-tag">${loc.city}</span>
            </div>
            <div class="est-header">
                <i class="fas fa-store"></i>
                <div>
                    <h3>${loc.name}</h3>
                    ${loc.neighborhood ? `<span class="est-neighborhood"><i class="fas fa-map-marker-alt"></i> ${loc.neighborhood}</span>` : ''}
                </div>
            </div>
            <div class="est-footer">
                <div class="est-screens"><i class="fas fa-tv"></i> ${loc.screens}</div>
                <button class="btn-detail" onclick="showLocationDetails(${index})">Ver Detalhes</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function showLocationDetails(index) {
    // Usa o cache global primeiro (sempre atualizado), fallback para localStorage
    const loc = currentLocations[index] || 
                 (JSON.parse(localStorage.getItem('indoorup_data')) || INITIAL_DATA).locations[index];
    if (!loc) { console.warn('Local não encontrado no índice:', index); return; }
    const savedData = JSON.parse(localStorage.getItem('indoorup_data')) || INITIAL_DATA;
    document.getElementById('loc-name').innerText = loc.name;
    document.getElementById('loc-city').innerText = loc.neighborhood ? `${loc.city} — ${loc.neighborhood}` : loc.city;
    document.getElementById('loc-neighborhood').innerText = loc.neighborhood || loc.city;
    document.getElementById('loc-screens').innerText = loc.screens;
    document.getElementById('loc-hours').innerHTML = loc.hours;
    const waNumber = savedData['whatsapp-number'] || '5596981306171';
    const msg = encodeURIComponent(`Olá! Vi o site da IndoorUP e tenho interesse em anunciar no ponto "${loc.name}" (${loc.city}). Com ${loc.screens} disponíveis, pode me enviar uma proposta?`);
    document.getElementById('loc-whatsapp-btn').href = `https://wa.me/${waNumber}?text=${msg}`;
    const modal = document.getElementById('location-modal');
    if (modal) { modal.style.display = "block"; document.body.style.overflow = "hidden"; }
}

function closeLocationModal() {
    const modal = document.getElementById('location-modal');
    if (modal) { modal.style.display = "none"; document.body.style.overflow = "auto"; }
}

window.onclick = function(event) {
    const modal = document.getElementById('location-modal');
    if (event.target == modal) closeLocationModal();
}

function renderDynamicGallery(id, images, delayIdx) {
    const columns = document.querySelectorAll('.gallery-grid .screen-column');
    if (columns[delayIdx]) {
        const inner = columns[delayIdx].querySelector('.carousel-inner');
        if (inner && images && images.length > 0) {
            inner.innerHTML = '';
            images.forEach((img, idx) => {
                const imgEl = document.createElement('img');
                imgEl.src = img;
                const totalTime = images.length * 4;
                imgEl.style.animation = `screenFadeDynamic ${totalTime}s infinite`;
                imgEl.style.animationDelay = `${idx * 4}s`;
                inner.appendChild(imgEl);
            });
            if (!document.getElementById('gallery-anim-style')) {
                const style = document.createElement('style');
                style.id = 'gallery-anim-style';
                style.innerHTML = `@keyframes screenFadeDynamic { 0%, ${100/images.length}% { opacity: 1; } ${(100/images.length) + 0.1}%, 100% { opacity: 0; } }`;
                document.head.appendChild(style);
            }
        }
    }
}

function renderDynamicModels(models) {
    const container = document.querySelector('.model-blocks');
    if (!container) return;
    container.innerHTML = '';
    models.forEach((model, idx) => {
        const isReverse = idx % 2 !== 0;
        const row = document.createElement('div');
        row.className = `model-row ${isReverse ? 'reverse' : ''}`;
        const icons = ['fa-star', 'fa-users-viewfinder', 'fa-building'];
        row.innerHTML = `
            <div class="model-text">
                <h3><i class="fas ${icons[idx] || 'fa-check-circle'}"></i> ${model.title}</h3>
                <p>${model.desc}</p>
                <ul>${model.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}</ul>
            </div>
            <div class="model-image"><img src="${model.img}" alt="${model.title}"></div>
        `;
        container.appendChild(row);
    });
}
