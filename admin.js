// Configuração Inicial Real e Sincronizada
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
    "about-p1": 'dos brasileiros são impactados pela mídia indoor',
    "about-p2": 'Mídia indoor é a publicidade exibida em telas digitais em locais públicos como academias, supermercados, padarias, restaurantes, lojas e outros espaços estratégicos, com conteúdo dinâmico e atualizado diariamente em tempo real.',
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
    "gal1": ['totem_digital_academia_1777159940529.png'],
    "gal2": ['totem_digital_supermercado_1777159955611.png'],
    "gal3": ['totem_digital_corporativo_1777159985175.png'],
    "contact-wa": '5596981306171',
    "contact-email": 'Indoorupap@gmail.com',
    "contact-ig": 'https://instagram.com/Indoorup_',
    "footer-slogan": '“Sua imagem no lugar e na hora certa!”',
    "hero-btn1-wa": 'Olá! Gostaria de solicitar uma proposta agora para anunciar na IndoorUP.',
    "hero-btn2-wa": 'Olá! Gostaria de falar com um especialista sobre a rede IndoorUP.',
    "cta-wa": 'Olá! Vi o site e gostaria de solicitar uma proposta agora.',
    "menu-wa": 'Olá! Gostaria de falar com um especialista.',
    plans: [
        { name: 'Sistema exclusivo', price: 'R$ 180,00', wa: 'Olá! Tenho interesse no Sistema Exclusivo.', features: ['1 ESTABELECIMENTO', '01 PONTO COMERCIAL', '30 VÍDEO DE 30s GRÁTIS'] },
        { name: 'Basic', price: 'R$ 250,00', wa: 'Olá! Tenho interesse no Plano Basic.', features: ['4 ESTABELECIMENTOS', '01 TV COM MOTION DE 15s'] }
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

document.addEventListener('DOMContentLoaded', () => {
    loadData();
    initEvents();
});

async function loadData() {
    let data = {};
    
    try {
        // Carregar do Supabase
        const { data: cloudRow, error } = await window.supabase
            .from(window.TABLE_NAME)
            .select('data')
            .eq('id', window.DOCUMENT_ID)
            .single();

        if (error) throw error;

        if (cloudRow && cloudRow.data) {
            const cloudData = cloudRow.data;
            Object.keys(INITIAL_DATA).forEach(key => {
                data[key] = (cloudData[key] !== undefined) ? cloudData[key] : INITIAL_DATA[key];
            });
            console.log("Dados carregados da Nuvem (Supabase)");
        } else {
            throw new Error("Doc não existe no Supabase");
        }
    } catch (e) {
        console.warn("Usando LocalStorage (Falha no Supabase):", e);
        const savedData = JSON.parse(localStorage.getItem('indoorup_data')) || {};
        Object.keys(INITIAL_DATA).forEach(key => {
            if (Array.isArray(INITIAL_DATA[key])) {
                data[key] = (savedData[key] && savedData[key].length > 0) ? savedData[key] : INITIAL_DATA[key];
            } else {
                data[key] = (savedData[key] && savedData[key].trim() !== "") ? savedData[key] : INITIAL_DATA[key];
            }
        });
    }

    Object.keys(data).forEach(key => {
        const el = document.getElementById(key);
        if (el && !Array.isArray(data[key])) {
            el.value = data[key];
        }
    });

    renderImageList('gal1', data.gal1 || []);
    renderImageList('gal2', data.gal2 || []);
    renderImageList('gal3', data.gal3 || []);
    renderLocationList(data.locations || []);
    renderPlanList(data.plans || []);
    renderModelFields(data.models || INITIAL_DATA.models);

    // Hero Preview
    const heroPreview = document.getElementById('preview-hero');
    if (heroPreview) {
        heroPreview.innerHTML = data['hero-bg'] ? `<img src="${data['hero-bg']}">` : '<div class="no-image"><i class="fas fa-image"></i><span>Sem imagem</span></div>';
    }

    // Stats BG Preview
    const statsBgPreview = document.getElementById('preview-stats-bg');
    if (statsBgPreview) {
        statsBgPreview.innerHTML = data['stats-bg'] ? `<img src="${data['stats-bg']}">` : '<div class="no-image"><i class="fas fa-image"></i><span>Sem imagem</span></div>';
    }

    // Logo Preview
    const logoPreview = document.getElementById('preview-logo');
    if (logoPreview) {
        logoPreview.innerHTML = data['logo-img'] ? `<img src="${data['logo-img']}" style="max-height: 100%;">` : '<div class="no-image"><i class="fas fa-image"></i><span>Sem logo</span></div>';
    }
}

function renderModelFields(models) {
    models.forEach((m, i) => {
        const idx = i + 1;
        const titleEl = document.getElementById(`m${idx}-title`);
        const descEl = document.getElementById(`m${idx}-desc`);
        const featEl = document.getElementById(`m${idx}-features`);
        const previewEl = document.getElementById(`preview-m${idx}`);

        if (titleEl) titleEl.value = m.title;
        if (descEl) descEl.value = m.desc;
        if (featEl) featEl.value = m.features.join('\n');
        if (previewEl) {
            previewEl.innerHTML = m.img ? `<img src="${m.img}">` : '<div class="no-image"><i class="fas fa-image"></i><span>Sem imagem</span></div>';
        }
    });
}

function renderPlanList(plans) {
    const container = document.getElementById('list-plans');
    if (!container) return;
    container.innerHTML = '';
    plans.forEach((plan, idx) => {
        const item = document.createElement('div');
        item.className = 'card-form plan-item';
        item.style.marginBottom = '20px';
        item.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <h4>Plano #${idx + 1}</h4>
                <button class="btn-remove" onclick="removePlan(${idx})"><i class="fas fa-trash"></i></button>
            </div>
            <div class="grid-2">
                <div class="form-group"><label>Nome do Plano</label><input type="text" class="plan-name" value="${plan.name}"></div>
                <div class="form-group"><label>Preço</label><input type="text" class="plan-price" value="${plan.price}"></div>
            </div>
            <div class="form-group"><label>Benefícios (Um por linha)</label><textarea class="plan-features" rows="4">${plan.features.join('\n')}</textarea></div>
        `;
        container.appendChild(item);
    });
}

function addPlan() {
    const container = document.getElementById('list-plans');
    const div = document.createElement('div');
    div.className = 'card-form plan-item';
    div.style.marginBottom = '20px';
    div.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
            <h4>Novo Plano</h4>
            <button class="btn-remove" onclick="this.parentElement.parentElement.remove()"><i class="fas fa-trash"></i></button>
        </div>
        <div class="grid-2">
            <div class="form-group"><label>Nome do Plano</label><input type="text" class="plan-name" value="Novo Plano"></div>
            <div class="form-group"><label>Preço</label><input type="text" class="plan-price" value="R$ 0,00"></div>
        </div>
        <div class="form-group"><label>Benefícios (Um por linha)</label><textarea class="plan-features" rows="4">Benefício 1</textarea></div>
    `;
    container.appendChild(div);
}

function removePlan(idx) {
    if (!confirm('Excluir este plano?')) return;
    const cards = document.querySelectorAll('.plan-item');
    if(cards[idx]) cards[idx].remove();
}

function renderImageList(containerId, images) {
    const container = document.getElementById(`list-${containerId}`);
    if (!container) return;
    container.innerHTML = '';
    images.forEach((img, idx) => {
        const item = document.createElement('div');
        item.className = 'list-item-row';
        item.innerHTML = `
            <img src="${img}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px;">
            <input type="text" value="${img.startsWith('data:') ? '[Imagem Local]' : img}" data-list="${containerId}" data-full="${img}" readonly style="flex: 1; opacity: 0.7;">
            <button class="btn-remove" onclick="this.parentElement.remove()"><i class="fas fa-trash"></i></button>
        `;
        container.appendChild(item);
    });
}

// Função para comprimir a imagem antes de salvar
function compressImage(file, maxWidth = 800, quality = 0.6, forceFormat = null) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
            const img = new Image();
            img.src = event.target.result;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;

                if (width > maxWidth) {
                    height = (maxWidth / width) * height;
                    width = maxWidth;
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                
                // Se for PNG ou solicitado explicitamente, mantém transparência
                const format = forceFormat || (file.type === 'image/png' ? 'image/png' : 'image/jpeg');
                resolve(canvas.toDataURL(format, quality));
            };
        };
    });
}

async function handleFileUpload(containerId) {
    const fileInput = document.getElementById(`file-${containerId}`);
    const file = fileInput.files[0];
    if (!file) return;

    const btn = fileInput.nextElementSibling;
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Otimizando...';
    btn.disabled = true;

    try {
        const compressedBase64 = await compressImage(file, 800, 0.6);
        
        // Verifica se a imagem ainda ficou muito grande
        if (compressedBase64.length > 150000) {
            alert("A imagem ainda está muito pesada. Tente outra foto.");
            return;
        }

        const container = document.getElementById(`list-${containerId}`);
        const item = document.createElement('div');
        item.className = 'list-item-row';
        item.innerHTML = `
            <img src="${compressedBase64}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px;">
            <input type="text" value="[Imagem Otimizada]" data-list="${containerId}" data-full="${compressedBase64}" readonly style="flex: 1; opacity: 0.7;">
            <button class="btn-remove" onclick="this.parentElement.remove()"><i class="fas fa-trash"></i></button>
        `;
        container.appendChild(item);
        showMsg("Imagem pronta para salvar!");
    } catch (error) {
        console.error("Erro no processamento:", error);
        alert("Erro ao processar imagem.");
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
        fileInput.value = "";
    }
}

function renderLocationList(locations) {
    const container = document.getElementById('list-locations');
    if (!container) return;
    container.innerHTML = '';
    locations.forEach(loc => {
        container.appendChild(createLocationCard(loc));
    });
}

function createLocationCard(loc = { name: '', city: '', neighborhood: '', screens: '', hours: '' }) {
    const div = document.createElement('div');
    div.className = 'card-form location-item';
    div.innerHTML = `
        <div class="grid-2">
            <div class="form-group"><label>Nome</label><input type="text" class="loc-name" value="${loc.name}"></div>
            <div class="form-group"><label>Cidade</label><input type="text" class="loc-city" value="${loc.city}"></div>
            <div class="form-group"><label>Bairro</label><input type="text" class="loc-neighborhood" placeholder="Ex: Centro, Beirol..." value="${loc.neighborhood || ''}"></div>
            <div class="form-group"><label>Telas</label><input type="text" class="loc-screens" value="${loc.screens}"></div>
            <div class="form-group"><label>Horário</label><input type="text" class="loc-hours" value="${loc.hours}"></div>
        </div>
        <button class="btn-remove-loc" onclick="this.parentElement.remove()"><i class="fas fa-trash"></i> Remover Local</button>
    `;
    return div;
}

async function handleSingleUpload(id) {
    const fileInput = document.getElementById(`file-${id}`);
    const file = fileInput.files[0];
    if (!file) return;

    const btn = fileInput.nextElementSibling;
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processando...';
    btn.disabled = true;

    try {
        const format = file.type === 'image/png' ? 'image/png' : 'image/jpeg';
        const compressedBase64 = await compressImage(file, 800, 0.7, format);
        const preview = document.getElementById(`preview-${id}`);
        preview.innerHTML = `<img src="${compressedBase64}" style="max-height: 100%;">`;
        
        // Se houver um input hidden para este ID, atualiza o valor dele
        const hiddenInput = document.getElementById(`${id}-img`);
        if (hiddenInput) hiddenInput.value = compressedBase64;
        
        showMsg("Imagem carregada!");
    } catch (e) {
        console.error(e);
        alert("Erro ao processar imagem.");
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
        fileInput.value = "";
    }
}

function addLocation() {
    document.getElementById('list-locations').appendChild(createLocationCard());
}

async function saveData() {
    const data = {};
    const btn = document.getElementById('btn-save');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Salvando na Nuvem...';
    btn.disabled = true;

    const allInputs = document.querySelectorAll('input[id], textarea[id], select[id]');
    allInputs.forEach(input => {
        // Ignora campos de arquivo e campos processados separadamente
        if (input.type !== 'file' && !input.id.startsWith('m1-') && !input.id.startsWith('m2-') && !input.id.startsWith('m3-') && !input.id.startsWith('f1-') && !input.id.startsWith('f2-') && !input.id.startsWith('f3-') && !input.id.startsWith('f4-')) {
            data[input.id] = input.value;
        }
    });

    // Coleta Fluxo Regional Manualmente para garantir estrutura
    for(let i=1; i<=4; i++) {
        data[`f${i}-city`] = document.getElementById(`f${i}-city`).value;
        data[`f${i}-num`] = document.getElementById(`f${i}-num`).value;
        data[`f${i}-p`] = document.getElementById(`f${i}-p`).value;
        if(i < 4) data[`f${i}-t`] = document.getElementById(`f${i}-t`).value;
    }

    ['gal1', 'gal2', 'gal3'].forEach(id => {
        const inputs = document.querySelectorAll(`input[data-list="${id}"]`);
        data[id] = Array.from(inputs).map(i => i.getAttribute('data-full') || i.value).filter(v => v !== '');
    });

    const locCards = document.querySelectorAll('.location-item');
    data.locations = Array.from(locCards).map(card => ({
        name: card.querySelector('.loc-name').value,
        city: card.querySelector('.loc-city').value,
        neighborhood: card.querySelector('.loc-neighborhood')?.value || '',
        screens: card.querySelector('.loc-screens').value,
        hours: card.querySelector('.loc-hours').value
    }));

    const planCards = document.querySelectorAll('.plan-item');
    data.plans = Array.from(planCards).map(card => ({
        name: card.querySelector('.plan-name').value,
        price: card.querySelector('.plan-price').value,
        features: card.querySelector('.plan-features').value.split('\n').filter(f => f.trim() !== '')
    }));

    // Coleta Modelos
    data.models = [];
    for (let i = 1; i <= 3; i++) {
        data.models.push({
            title: document.getElementById(`m${i}-title`).value,
            desc: document.getElementById(`m${i}-desc`).value,
            features: document.getElementById(`m${i}-features`).value.split('\n').filter(f => f.trim() !== ''),
            img: document.querySelector(`#preview-m${i} img`)?.src || ''
        });
    }

    // Hero Image
    data['hero-bg'] = document.querySelector('#preview-hero img')?.src || '';
    
    // Stats Background
    data['stats-bg'] = document.querySelector('#preview-stats-bg img')?.src || '';

    // Verifica o peso total dos dados (Aumentando limite para o máximo do Firestore)
    const payloadSize = JSON.stringify(data).length;
    console.log(`Peso total do salvamento: ${(payloadSize / 1024).toFixed(2)} KB`);

    if (payloadSize > 1040000) { // Próximo ao limite real de 1MB
        alert("Erro Crítico: O banco de dados do Firebase atingiu o limite máximo absoluto (1MB). A migração para o Supabase é necessária imediatamente para continuar salvando.");
        btn.innerHTML = '<i class="fas fa-save"></i> Limite Excedido';
        btn.disabled = false;
        return;
    }

    try {
        // Salva no Supabase (Upsert insere ou atualiza)
        const { error } = await window.supabase
            .from(window.TABLE_NAME)
            .upsert({ 
                id: window.DOCUMENT_ID, 
                data: data,
                updated_at: new Date()
            });

        if (error) throw error;
        showMsg("Publicado com sucesso no Supabase!");
    } catch (e) {
        console.error("Erro ao salvar no Supabase:", e);
        alert("Erro ao salvar no Supabase! Verifique se você rodou o código SQL no painel e se as chaves estão corretas.");
    } finally {
        btn.innerHTML = '<i class="fas fa-save"></i> Publicar Alterações no Site';
        btn.disabled = false;
    }
}

function showMsg(text) {
    const msg = document.getElementById('status-msg');
    msg.innerText = text;
    msg.classList.add('show');
    setTimeout(() => msg.classList.remove('show'), 3000);
}

function initEvents() {
    document.getElementById('btn-save').addEventListener('click', saveData);
    
    const logoutBtn = document.getElementById('btn-logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', async () => {
            const { error } = await window.supabase.auth.signOut();
            if (error) console.error('Erro ao sair:', error.message);
            window.location.href = 'login.html';
        });
    }

    const navItems = document.querySelectorAll('.nav-item');
    const menuToggle = document.getElementById('menu-toggle-admin');
    const sidebar = document.querySelector('.sidebar');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
        
        // Fechar ao clicar no X (pseudo-elemento ou botão)
        const header = sidebar.querySelector('.sidebar-header');
        if (header) {
            header.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('active');
                }
            });
        }
    }

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const tabId = item.getAttribute('data-tab');
            
            navItems.forEach(i => i.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            item.classList.add('active');
            document.getElementById(`tab-${tabId}`).classList.add('active');
            
            // Fechar menu no mobile após seleção
            if (window.innerWidth <= 768 && sidebar) {
                sidebar.classList.remove('active');
            }
        });
    });
}
