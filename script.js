const programs=[
 {name:'公視手語新聞',image:'sign-news.png',time:'週一至週五 8:00-8:30',desc:'公視手語新聞是【聾人／聽障者】看見世界的窗口，也是所有人認識【聾人／聽障者】的管道。公視13頻道，每週一到週五早上8:00-8:30，與您一起看新聞、開視野。',tags:['手語新聞','無障礙','每日新聞'],latest:['晨間焦點｜國內外重要新聞手語播報','生活資訊｜防災訊息與公共服務整理','國際一週｜世界重要事件快速掌握']},
 {name:'8點新世界',image:'8pm-world.png',time:'週一至週五 20:00-20:30',desc:'擇選當日重點國際新聞，專家學者深度評析，駐各國記者國際現場第一手報導，集結特派員觀察與東南亞視角，和您一起面向世界、擘劃未來。',tags:['國際新聞','深度分析','全球視角'],latest:['國際焦點｜全球政經局勢最新發展','特派員觀察｜第一線看見的真實現場','東南亞視角｜區域變化如何影響台灣']},
 {name:'尖鋒對話',image:'dialogue.png',time:'週一至週五 20:30-21:30',desc:'「尖鋒對話」是公視的公共議題論壇節目，提供客觀有用資訊、多元進步觀點與創造對話的平台。關注議題、思考辨析、對話觀點，就在尖鋒對話！',tags:['公共論壇','即時直播','多元觀點'],latest:['今晚焦點｜政策攻防與社會回響','觀點交鋒｜不同立場如何看同一件事','專家解析｜從數據看議題的另一面']},
 {name:'全球現場・漫遊天下',image:'global-travel.png',time:'每週日 19:30-19:57',desc:'「全球現場漫遊天下」提供多元、深度與分析的國際新聞時事，呈現公共媒體與電視新聞價值。',tags:['國際專題','文化觀察','現場紀實'],latest:['世界現場｜走進新聞之外的日常','文化漫遊｜一座城市的記憶與改變','人物故事｜在變動時代找到自己的路']},
 {name:'全球現場・深度週報',image:'global-weekly.png',time:'每週六 19:30-19:57',desc:'「全球現場深度週報」提供多元、深度與分析的國際新聞時事，整理一週事件脈絡，呈現公共媒體與電視新聞價值。',tags:['國際週報','議題解析','地緣政治'],latest:['本週國際｜三件不能錯過的世界大事','深度解析｜區域衝突的歷史與下一步','全球連線｜各地記者帶回第一手觀察']},
 {name:'行走TIT',image:'tit.png',time:'每週日16:00 公視主頻新播｜每週四07:00 公視三台首播',desc:'《行走TIT》深度導覽原住民部落的歷史縮影與迷人景致，從在地人視角出發，呈現部落風貌、祭典儀式、藝術文創、飲食文化與生態環境。',tags:['原住民族','部落文化','在地旅行'],latest:['部落行走｜跟著族人重返傳統領域','文化現場｜祭儀裡保存的族群記憶','山海餐桌｜一種食物與土地的關係']},
 {name:'獨立特派員',image:'independent.png',time:'每週三 22:00',desc:'獨立特派員團隊致力於製作優質新聞專題，用「心」發揮新聞人的價值與責任，深入現場追問問題背後的人與結構。',tags:['調查報導','社會議題','深度紀實'],latest:['調查現場｜制度縫隙裡被忽略的人','環境追蹤｜開發與保育之間的選擇','社會觀察｜一項政策如何改變日常']},
 {name:'P# 新聞實驗室',image:'p-news.png',time:'每週三 21:00 YouTube',desc:'2019年公視成立公廣新聞網全媒體實驗平台，啟動視網整合新聞數位轉型，以全媒體形式於多平台實驗，提供新一代的新聞資訊服務。',tags:['數位敘事','媒體識讀','青年觀點'],latest:['P#實驗｜短影音如何改變我們理解新聞','真的假的｜拆解社群熱傳訊息','數據說話｜把複雜議題變得看得懂']},
 {name:'我們的島',image:'our-island.png',time:'每週一 22:00',desc:'「我們的島」是台灣唯一以環境為報導主題的新聞專題節目，從1998年11月開播，秉持監督環境政策，提供即時深度報導，尋求改變的可能性。',tags:['環境報導','生態保育','土地議題'],latest:['島嶼現場｜海岸線正在發生什麼變化','環境追蹤｜能源轉型下的地方選擇','自然筆記｜與野生動物共享棲地']}
];
const socials=['facebook','instagram','threads','youtube'];
const officialLatest=[
 {url:'https://news.pts.org.tw/program/%E5%85%AC%E8%A6%96%E6%89%8B%E8%AA%9E%E6%96%B0%E8%81%9E',items:[['莫比斯劇團推共融劇場 「感官複調」為題推兩作品｜20260807 公視手語新聞','2026/08/07','https://news.pts.org.tw/video/21057'],['20260807公視手語新聞 完整版｜莫比斯劇團推聾聽共創 實驗短篇發展為完整演出','2026/08/07','https://news.pts.org.tw/video/21055'],['20260806 公視手語新聞 完整版｜又有苯駢芘超標 苦茶油下架','2026/08/06','https://news.pts.org.tw/video/21012']]},
 {url:'https://news.pts.org.tw/program/8%E9%BB%9E%E6%96%B0%E4%B8%96%E7%95%8C',items:[['義大利監獄變劇場 囚犯登台演出找尋自我｜20260810 8點新世界','2026/08/10','https://news.pts.org.tw/video/21128'],['哥斯大黎加新物種「咖啡蛙」 咖啡園施用農藥恐成生存威脅','2026/08/10','https://news.pts.org.tw/program/8%E9%BB%9E%E6%96%B0%E4%B8%96%E7%95%8C'],['泰國行政機構主席遭槍殺身亡 前議員致電新聞台坦承犯案','2026/08/10','https://news.pts.org.tw/video/21130']]},
 {url:'https://news.pts.org.tw/program/%E5%B0%96%E9%8B%92%E5%B0%8D%E8%A9%B1',items:[['兆基風暴燒進社宅「包租代管」誰把關？','2026/08/10','https://news.pts.org.tw/program/%E5%B0%96%E9%8B%92%E5%B0%8D%E8%A9%B1'],['各國抗熱撇步多 公僕穿短褲、民間放暑假','2026/08/07','https://news.pts.org.tw/program/%E5%B0%96%E9%8B%92%E5%B0%8D%E8%A9%B1'],['暖化高溫「熱出」兩個世界 酷暑下誰吹得起冷氣？','2026/08/06','https://news.pts.org.tw/program/%E5%B0%96%E9%8B%92%E5%B0%8D%E8%A9%B1']]},
 {url:'https://news.pts.org.tw/program/%E5%85%A8%E7%90%83%E7%8F%BE%E5%A0%B4%E6%BC%AB%E9%81%8A%E5%A4%A9%E4%B8%8B',items:[['海底古羅馬奢華秘境 3D科技將重現古城','2026/08/10','https://news.pts.org.tw/program/%E5%85%A8%E7%90%83%E7%8F%BE%E5%A0%B4%E6%BC%AB%E9%81%8A%E5%A4%A9%E4%B8%8B'],['熱浪改寫旅遊版圖 阿爾卑斯山夏季翻身','2026/08/03','https://news.pts.org.tw/program/%E5%85%A8%E7%90%83%E7%8F%BE%E5%A0%B4%E6%BC%AB%E9%81%8A%E5%A4%A9%E4%B8%8B'],['法國富豪買地野化 讓大自然自主修復','2026/07/29','https://news.pts.org.tw/program/%E5%85%A8%E7%90%83%E7%8F%BE%E5%A0%B4%E6%BC%AB%E9%81%8A%E5%A4%A9%E4%B8%8B']]},
 {url:'https://news.pts.org.tw/program/%E5%85%A8%E7%90%83%E7%8F%BE%E5%A0%B4%E6%B7%B1%E5%BA%A6%E9%80%B1%E5%A0%B1',items:[['熊本強震重創十年重建 衍生災害雪上加霜','2026/08/10','https://news.pts.org.tw/program/%E5%85%A8%E7%90%83%E7%8F%BE%E5%A0%B4%E6%B7%B1%E5%BA%A6%E9%80%B1%E5%A0%B1'],['印度極速外送服務 下單10分鐘送達','2026/08/03','https://news.pts.org.tw/program/%E5%85%A8%E7%90%83%E7%8F%BE%E5%A0%B4%E6%B7%B1%E5%BA%A6%E9%80%B1%E5%A0%B1'],['西班牙世足奪冠 締造男女足稱霸足壇','2026/07/29','https://news.pts.org.tw/program/%E5%85%A8%E7%90%83%E7%8F%BE%E5%A0%B4%E6%B7%B1%E5%BA%A6%E9%80%B1%E5%A0%B1']]},
 {url:'https://news.pts.org.tw/program/%E8%A1%8C%E8%B5%B0TIT',items:[['秋蘭的苧麻情｜行走TIT第416集','2026/08/08','https://news.pts.org.tw/program/%E8%A1%8C%E8%B5%B0TIT'],['山上 山下 ljinivak｜行走TIT第415集','2026/08/01','https://news.pts.org.tw/program/%E8%A1%8C%E8%B5%B0TIT'],['堅強的部落 土場｜行走TIT第414集','2026/07/25','https://news.pts.org.tw/program/%E8%A1%8C%E8%B5%B0TIT']]},
 {url:'https://news.pts.org.tw/program/%E7%8D%A8%E7%AB%8B%E7%89%B9%E6%B4%BE%E5%93%A1',items:[['海龜聚集背後 浮現小琉球生態隱憂｜尋找超級珊瑚','2026/08/05','https://news.pts.org.tw/program/%E7%8D%A8%E7%AB%8B%E7%89%B9%E6%B4%BE%E5%93%A1'],['當島嶼迎向繁榮 誰來劃下發展界線？','2026/08/05','https://news.pts.org.tw/video/21052'],['全球熱浪持續來襲 海洋最後希望在哪裡？','2026/08/05','https://news.pts.org.tw/program/%E7%8D%A8%E7%AB%8B%E7%89%B9%E6%B4%BE%E5%93%A1']]},
 {url:'https://news.pts.org.tw/program/newslab',items:[['中聯油事件三大關鍵環節 專家拆解一次看','2026/07/28','https://news.pts.org.tw/program/newslab'],['解密！AI如何報颱風？路徑更準但風雨預報是弱點？','2026/07/22','https://news.pts.org.tw/program/newslab'],['電動機車不好嗎？市售不到7%，2040年拚100%可能嗎？','2026/07/15','https://news.pts.org.tw/program/newslab']]},
 {url:'https://news.pts.org.tw/program/%E6%88%91%E5%80%91%E7%9A%84%E5%B3%B6',items:[['都蘭ATT開發爭議｜我們的部落，你們的觀光','2026/08/04','https://news.pts.org.tw/video/20968'],['東海岸的開發夢｜我們的部落，你們的觀光','2026/08/04','https://news.pts.org.tw/program/%E6%88%91%E5%80%91%E7%9A%84%E5%B3%B6'],['想為你打造清潔車：看見問題後的實際行動','2026/07/28','https://news.pts.org.tw/program/%E6%88%91%E5%80%91%E7%9A%84%E5%B3%B6']]}
];
const officialCovers=['latest-sign-news.jpg','latest-8pm-world.jpg','latest-dialogue.jpg','latest-global-travel.jpg','latest-global-weekly.jpg','latest-tit.jpg','latest-independent.jpg','latest-p-news.jpg','latest-our-island.jpg'];
programs.forEach((program,index)=>{program.url=officialLatest[index].url;program.latest=officialLatest[index].items;program.cover=`assets/programs/${officialCovers[index]}`});
programs.forEach(program=>{const image=new Image();image.src=program.cover});
const list=document.querySelector('.program-list');
const panel=document.querySelector('.latest-panel');
programs.forEach((p,i)=>{const card=document.createElement('article');card.className='profile-card';card.tabIndex=0;card.dataset.index=i;card.setAttribute('role','listitem');card.innerHTML=`<div class="program-avatar"><img src="assets/programs/${p.image}" alt="${p.name}"></div><div class="program-info"><div class="program-head"><h2 class="program-title">${p.name}</h2><div class="program-tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div></div><p class="program-time">${p.time}</p><p class="program-desc">${p.desc}</p><div class="socials">${socials.map(s=>`<a class="${s}" href="#" aria-label="${s}"><span><img src="assets/${s}.svg" alt=""></span></a>`).join('')}</div></div><section class="mobile-latest" aria-label="${p.name}最新三則"><img class="mobile-latest-cover" src="${p.cover}" alt=""><ol>${p.latest.map(([title,date,url])=>`<li><a href="${url}" target="_blank" rel="noopener">${title}</a><time>${date}</time></li>`).join('')}</ol><a class="mobile-more" href="${p.url}" target="_blank" rel="noopener"><span>更多節目內容</span><i><img src="assets/arrow-right.svg" alt=""></i></a></section>`;card.addEventListener('pointerenter',()=>activate(i));card.addEventListener('focus',()=>activate(i));list.appendChild(card)});
let hoverBridgeTimer=0;
const cards=[...document.querySelectorAll('.profile-card')];
cards.forEach(card=>{
  card.addEventListener('pointerenter',()=>{
    clearTimeout(hoverBridgeTimer);
    cards.forEach(other=>other.classList.remove('is-linked-hover'));
    card.classList.add('is-linked-hover');
  });
  card.addEventListener('pointerleave',()=>{
    clearTimeout(hoverBridgeTimer);
    hoverBridgeTimer=setTimeout(()=>{
      if(!panel.matches(':hover'))card.classList.remove('is-linked-hover');
    },140);
  });
});
panel.addEventListener('pointerenter',()=>{
  clearTimeout(hoverBridgeTimer);
  document.querySelector('.profile-card.is-active')?.classList.add('is-linked-hover');
});
panel.addEventListener('pointerleave',()=>{
  cards.forEach(card=>card.classList.remove('is-linked-hover'));
});
let activeIndex=-1;
let displayedIndex=-1;
let transitionRunning=false;
let pendingIndex=null;

function renderLatest(i){
  const p=programs[i];
  const content=panel.querySelector('.latest-content');
  const cover=content.querySelector('.latest-image');
  cover.src=p.cover;
  cover.alt=`${p.name}最新內容`;
  content.querySelector('.latest-name').textContent=p.name;
  content.querySelector('ol').innerHTML=p.latest.map(([title,date,url])=>`<li><a href="${url}" target="_blank" rel="noopener">${title}</a><time>${date}</time></li>`).join('');
  content.querySelector('.more-button').href=p.url;
  return content;
}

function transitionTo(i){
  transitionRunning=true;
  pendingIndex=null;

  if(displayedIndex===-1){
    renderLatest(i);
    displayedIndex=i;
    transitionRunning=false;
    return;
  }

  const content=panel.querySelector('.latest-content');
  const oldContent=content.cloneNode(true);
  oldContent.classList.add('latest-ghost');
  panel.appendChild(oldContent);
  renderLatest(i);

  const timing={duration:560,easing:'cubic-bezier(.4,0,.2,1)',fill:'forwards'};
  const oldAnimation=oldContent.animate([{opacity:1},{opacity:0}],timing);
  const newAnimation=content.animate([{opacity:0},{opacity:1}],timing);

  Promise.allSettled([oldAnimation.finished,newAnimation.finished]).then(()=>{
    oldContent.remove();
    displayedIndex=i;
    transitionRunning=false;
    const next=pendingIndex;
    pendingIndex=null;
    if(next!==null&&next!==displayedIndex)transitionTo(next);
  });
}

function activate(i){
  if(!programs[i])return;
  activeIndex=i;
  document.querySelectorAll('.profile-card').forEach((c,n)=>c.classList.toggle('is-active',n===i));
  if(i===displayedIndex&&!transitionRunning)return;
  if(transitionRunning){
    pendingIndex=i;
    return;
  }
  transitionTo(i);
}

let scrollFrame=0;
function activateFromScroll(){
  scrollFrame=0;
  if(window.innerWidth<=760)return;
  const cards=[...document.querySelectorAll('.profile-card')];
  const viewportTop=60;
  const viewportBottom=window.innerHeight;
  const amounts=cards.map(card=>{
    const rect=card.getBoundingClientRect();
    return Math.max(0,Math.min(rect.bottom,viewportBottom)-Math.max(rect.top,viewportTop));
  });
  let next=amounts.indexOf(Math.max(...amounts));
  const currentAmount=amounts[activeIndex]??0;
  const nextAmount=amounts[next]??0;

  // Avoid switching near card boundaries; the next card must be clearly more visible.
  if(activeIndex>=0&&currentAmount>0&&nextAmount-currentAmount<48)next=activeIndex;
  if(next>=0)activate(next);
}
window.addEventListener('scroll',()=>{
  if(!scrollFrame)scrollFrame=requestAnimationFrame(activateFromScroll);
},{passive:true});
window.addEventListener('resize',activateFromScroll);

activate(0);
