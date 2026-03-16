const METRO_DATA = {
  "Templo Senso-ji (浅草寺)": {
    text: 'Est. <span class="line-badge asakusa">Asakusa</span> (Linha Asakusa / Ginza) — Saída 1, 5 min a pé',
  },
  "Shibuya Crossing & Shibuya Sky": {
    text: 'Est. <span class="line-badge jr">Shibuya</span> (JR Yamanote / Ginza / Hanzomon / Fukutoshin) — Saída Hachiko, acesso direto',
  },
  "Meiji Jingu (明治神宮)": {
    text: 'Est. <span class="line-badge jr">Harajuku</span> (JR Yamanote) — Saída Omotesando, 1 min. Ou Est. Meiji-jingumae (Chiyoda / Fukutoshin)',
  },
  "Tokyo Skytree (東京スカイツリー)": {
    text: 'Est. <span class="line-badge tobu">Tokyo Skytree</span> (Tobu Skytree Line) ou Est. <span class="line-badge hanzomon">Oshiage</span> (Hanzomon / Asakusa) — acesso direto',
  },
  "Mercado de Tsukiji (築地市場)": {
    text: 'Est. <span class="line-badge hibiya">Tsukiji</span> (Linha Hibiya) — Saída 1, 1 min. Ou Est. Tsukiji-shijo (Oedo)',
  },
  "Akihabara (秋葉原)": {
    text: 'Est. <span class="line-badge jr">Akihabara</span> (JR Yamanote / Hibiya / Tsukuba Express) — Saída Electric Town, acesso direto',
  },
  "Palácio Imperial (皇居)": {
    text: 'Est. <span class="line-badge chiyoda">Nijubashimae</span> (Linha Chiyoda) ou Est. <span class="line-badge marunouchi">Tokyo</span> (Marunouchi) — Saída Marunouchi, 10 min a pé',
  },
  "TeamLab Borderless / Planets": {
    text: 'Borderless: Est. <span class="line-badge hibiya">Roppongi</span> (Hibiya) → shuttle. Planets: Est. <span class="line-badge yurakucho">Shin-Toyosu</span> (Yurikamome), 1 min',
  },
  "Shimokitazawa (下北沢)": {
    text: 'Est. <span class="line-badge keio">Shimokitazawa</span> (Keio Inokashira / Odakyu) — acesso direto. ~8 min de Shibuya',
  },
  "Kichijoji & Inokashira Park": {
    text: 'Est. <span class="line-badge jr">Kichijoji</span> (JR Chuo Line) — Saída Sul, 5 min a pé até o parque. ~15 min de Shinjuku',
  },
  "Yanaka (谷中)": {
    text: 'Est. <span class="line-badge jr">Nippori</span> (JR Yamanote) — Saída Oeste, 2 min. Ou Est. Sendagi (Chiyoda)',
  },
  "Onsen & Sentō (温泉・銭湯)": {
    text: 'Thermae-yu: Est. <span class="line-badge jr">Shinjuku</span> (JR / todas as linhas) — Saída Leste, 3 min a pé, Kabukicho',
  },
  "Izakayas em Yurakucho / Shinbashi": {
    text: 'Est. <span class="line-badge jr">Yurakucho</span> (JR Yamanote / Yurakucho Line) — os becos ficam sob os trilhos, acesso direto',
  },
  "Golden Gai (ゴールデン街)": {
    text: 'Est. <span class="line-badge jr">Shinjuku</span> (JR Yamanote) — Saída Leste, 5 min. Ou Est. Shinjuku-sanchome (Marunouchi / Fukutoshin)',
  },
  "Enoshima & Kamakura": {
    text: 'De Shinjuku: <span class="line-badge odakyu">Odakyu Line</span> até Katase-Enoshima (~70 min). De Tokyo: <span class="line-badge jr">JR Yokosuka</span> até Kamakura (~55 min)',
  },
  "Nakano Broadway": {
    text: 'Est. <span class="line-badge jr">Nakano</span> (JR Chuo Line) — Saída Norte, 5 min a pé pela galeria coberta. ~5 min de Shinjuku',
  },
  "Fushimi Inari Taisha (伏見稲荷大社)": {
    text: 'Est. <span class="line-badge jr">Inari</span> (JR Nara Line) — saída direta ao santuário! Ou Est. Fushimi-Inari (Keihan Line)',
  },
  "Kinkaku-ji - Pavilhão Dourado (金閣寺)": {
    text: 'Sem estação próxima. <span class="line-badge karasuma">Ônibus 101 ou 205</span> de Kyoto Station até parada "Kinkaku-ji-michi", 40 min. Ônibus mais fácil que metrô',
  },
  "Arashiyama Bamboo Grove (嵐山竹林)": {
    text: 'Est. <span class="line-badge jr">Saga-Arashiyama</span> (JR San-in Line) — 15 min de Kyoto Station. Ou Hankyu Arashiyama (de Osaka)',
  },
  "Kiyomizu-dera (清水寺)": {
    text: 'Est. <span class="line-badge keihan">Kiyomizu-Gojo</span> (Keihan Line) — 15 min a pé subida. Ou <span class="line-badge karasuma">Ônibus 100/206</span> de Kyoto Station',
  },
  "Gion - Distrito das Geishas (祇園)": {
    text: 'Est. <span class="line-badge keihan">Gion-Shijo</span> (Keihan Line) — saída direta ao bairro. Ou Est. Kawaramachi (Hankyu), 5 min a pé',
  },
  "Nara (奈良) — Bate-volta": {
    text: '<span class="line-badge kintetsu">Kintetsu Nara</span> de Kyoto Station — 35 min, ¥760. Ou <span class="line-badge jr">JR Nara Line</span> — 45 min (coberto pelo JR Pass)',
  },
  "Filósofo's Path (哲学の道)": {
    text: 'Est. <span class="line-badge tozai-k">Keage</span> (Metrô Tozai) — 10 min a pé. Ou <span class="line-badge karasuma">Ônibus 100</span> até Ginkaku-ji-michi',
  },
  "Cerimônia do Chá Autêntica": {
    text: 'Para Uji: <span class="line-badge jr">JR Nara Line</span> até Est. Uji — 17 min de Kyoto. Ou <span class="line-badge keihan">Keihan</span> até Uji',
  },
  "Kurama & Kibune (鞍馬・貴船)": {
    text: 'De Demachiyanagi: <span class="line-badge tokyu">Eizan Railway</span> até Kurama (~30 min) ou Kibune-guchi. Demachiyanagi acessível via Keihan Line',
  },
  "Nishiki Market (錦市場)": {
    text: 'Est. <span class="line-badge karasuma">Shijo</span> (Metrô Karasuma) — 3 min a pé. Ou Est. Kawaramachi (Hankyu), 1 min — fica entre as duas estações',
  },
  "Rio Kamogawa (鴨川)": {
    text: 'Est. <span class="line-badge keihan">Sanjo</span> ou <span class="line-badge keihan">Gion-Shijo</span> (Keihan Line) — saída direta às margens do rio',
  },
  "Templo Tofuku-ji (東福寺)": {
    text: 'Est. <span class="line-badge jr">Tofuku-ji</span> (JR Nara Line / Keihan) — 10 min a pé. Apenas 1 parada de Kyoto Station!',
  },
  "Castelo de Osaka (大阪城)": {
    text: 'Est. <span class="line-badge chuo-o">Tanimachi 4-chome</span> (Tanimachi / Chuo Line) ou Est. <span class="line-badge nagahori">Osaka-jo Koen</span> (Nagahori Tsurumi-ryokuchi) — 15 min a pé',
  },
  "Dotonbori (道頓堀)": {
    text: 'Est. <span class="line-badge midosuji">Namba</span> (Midosuji / Sennichimae / Nankai / JR) — Saída 14, 3 min a pé até o canal. Impossível se perder!',
  },
  "Universal Studios Japan (USJ)": {
    text: 'Est. <span class="line-badge jr">Universal City</span> (JR Yumesaki Line) — de Osaka/Namba, JR até Nishikujo e troque para Yumesaki. ~15 min total',
  },
  "Osaka Aquarium Kaiyukan (海遊館)": {
    text: 'Est. <span class="line-badge chuo-o">Osakako</span> (Metrô Chuo Line) — Saída 1, 5 min a pé. Linha direta de Honmachi',
  },
  "Shinsekai & Tsutenkaku (新世界・通天閣)": {
    text: 'Est. <span class="line-badge sakaisuji">Ebisucho</span> (Sakaisuji Line) — Saída 3, 3 min. Ou Est. Dobutsuen-mae (Midosuji), 5 min',
  },
  "Nakazakicho (中崎町)": {
    text: 'Est. <span class="line-badge tanimachi">Nakazakicho</span> (Tanimachi Line) — saída direta ao bairro! Apenas 1 estação de Umeda/Osaka',
  },
  "Ura-Namba (裏なんば)": {
    text: 'Est. <span class="line-badge midosuji">Namba</span> (todas as linhas) — Saída Leste/Sul, caminhe 5 min para o lado leste de Namba',
  },
  "Spa World (スパワールド)": {
    text: 'Est. <span class="line-badge midosuji">Dobutsuen-mae</span> (Midosuji / Sakaisuji) — Saída 5, 1 min. Fica ao lado de Shinsekai',
  },
  "Minoo Park & Cachoeira (箕面)": {
    text: 'Est. <span class="line-badge hankyu">Minoo</span> (Hankyu Minoo Line) — de Umeda, Hankyu até Ishibashi-Handai-mae e troque. ~30 min total',
  },
  "Americamura (アメリカ村)": {
    text: 'Est. <span class="line-badge midosuji">Shinsaibashi</span> (Midosuji Line) — Saída 7, 3 min a pé para o lado oeste. Fica entre Shinsaibashi e Namba',
  },
  "Kuromon Market (黒門市場)": {
    text: 'Est. <span class="line-badge sakaisuji">Nipponbashi</span> (Sakaisuji / Sennichimae) — Saída 10, 2 min. Ou de Namba, 5 min a pé',
  },
};

export function initMetroData() {
  document.querySelectorAll('.place-card').forEach(card => {
    const h4 = card.querySelector('h4');
    if (!h4) return;
    const name = h4.textContent.trim();
    const metro = METRO_DATA[name];
    if (!metro) return;

    const metroDiv = document.createElement('div');
    metroDiv.className = 'card-metro';
    metroDiv.innerHTML = `<span class="metro-label">🚇 Como chegar</span>${metro.text}`;

    const tip = card.querySelector('.card-tip');
    if (tip) {
      tip.after(metroDiv);
    } else {
      card.appendChild(metroDiv);
    }
  });
}
