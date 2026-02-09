import React, { useState, useEffect, useRef } from 'react';
import { 
  Check, 
  MousePointerClick, 
  MessageCircle, 
  Menu, 
  X, 
  Palette, 
  Zap, 
  AlertCircle,
} from 'lucide-react';

// =========================================================
// 素材URL設定エリア
// =========================================================
const ASSETS = {
  about: "https://lh3.googleusercontent.com/d/1M9YfSAK7otzxR4Qrcq8p5vuUMmcMlFJV", 
  
  heroVideo: "https://raw.githubusercontent.com/aokun0824/My-portfolio/main/%E5%8B%95%E7%94%BB%E7%B7%A8%E9%9B%86%E6%8C%87%E7%A4%BA%E3%81%A8%E5%AE%8C%E4%BA%86.mp4",
  heroFallback: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
  
  // もやもやセクション
  manga: [
    { id: 1, url: "https://raw.githubusercontent.com/aokun0824/My-portfolio/main/Gemini_Generated_Image_q5r0krq5r0krq5r0.png" },
    { id: 2, url: "https://raw.githubusercontent.com/aokun0824/My-portfolio/main/Gemini_Generated_Image_dffl6dffl6dffl6d.png" },
    { id: 3, url: "https://raw.githubusercontent.com/aokun0824/My-portfolio/main/Gemini_Generated_Image_lywzi6lywzi6lywz.png" },
    { id: 4, url: "https://raw.githubusercontent.com/aokun0824/My-portfolio/main/Gemini_Generated_Image_gh8z6xgh8z6xgh8z.png" },
  ],

  // 作品実績：上段スクロール（名前なし・AURA DESIGN削除済）
  works: [
    { url: "https://github.com/aokun0824/My-portfolio/raw/refs/heads/main/PixVerse_V5.6_Image_Text_360P_EGAO_Works%E3%82%92%E5%B0%91%E3%81%97%E6%8F%BA%E3%82%89%E3%81%9B.mp4" },
    { url: "https://raw.githubusercontent.com/aokun0824/My-portfolio/main/Gemini_Generated_Image_1pz4v81pz4v81pz4.png" },
    { url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80" },
    { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" },
    { url: "https://images.unsplash.com/photo-1565191999001-551c187427bb?auto=format&fit=crop&w=800&q=80" },
  ],
  
  // 実績：下段スクロール（名前なし・汽車の煙削除済・新規追加済）
  designs: [
    { url: "https://raw.githubusercontent.com/aokun0824/My-portfolio/main/AIVideo_260203_739246ac-49cf-4578-9a87-ee88174da590_0_MiriCanvas.mp4" },
    { url: "https://raw.githubusercontent.com/aokun0824/My-portfolio/main/AIVideo_260203_91a35875-1a0c-4f7b-8b10-d7fdea33fd43_0_MiriCanvas.mp4" },
    { url: "https://raw.githubusercontent.com/aokun0824/My-portfolio/main/ee5-4e5febbaf94a.jpg" },
    { url: "https://github.com/aokun0824/My-portfolio/raw/refs/heads/main/%E5%8B%95%E7%94%BB%E7%94%9F%E6%88%90%EF%BC%9A%E5%A5%B3%E6%80%A7%E3%81%8B%E3%82%99%E7%89%A9%E3%82%92%E6%B8%A1%E3%81%99.mp4" },
    { url: "https://images.unsplash.com/photo-1550747528-cdb45925b3f7?auto=format&fit=crop&w=400&q=80" },
    { url: "https://images.unsplash.com/photo-1560155016-bd4879ae8f21?auto=format&fit=crop&w=400&q=80" },
    { url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80" },
  ]
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const heroVideoRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    if (heroVideoRef.current) {
      heroVideoRef.current.play().catch(() => {});
    }
  }, []);

  // 料金データ
  const pricingData = [
    {
      title: <span className="inline-block">動く魔法のアイコン</span>,
      price: "8,000",
      description: <span>SNSやLINEで<span className="inline-block">パッと目を引く</span><span className="inline-block">アニメアイコンです</span></span>,
      features: [
        <span className="inline-block">キャラデザイン(1案)</span>,
        <span className="inline-block">ループアニメ制作</span>,
        "GIF/MP4形式での納品",
        "SNS設定サポート"
      ],
      recommend: false,
      color: "bg-orange-500"
    },
    {
      title: <span className="inline-block">ちょうどいいLP作成</span>,
      price: "50,000",
      description: <span>お店の強みを<span className="inline-block">1ページに凝縮した</span><span className="inline-block">スマホ特化の看板です</span></span>,
      features: [
        "スマホ最適化デザイン",
        <span className="inline-block">AI文章作成サポート</span>,
        <span className="inline-block">問い合わせフォーム</span>,
        "ユーワード決済連携"
      ],
      recommend: true,
      color: "bg-blue-600"
    },
    {
      title: <span className="inline-block">本格Webサイト制作</span>,
      price: "200,000",
      description: <span>信頼度を最大化する<span className="inline-block">オーダーメイドの</span><span className="inline-block">本格ホームページ制作</span></span>,
      features: [
        "最大5ページ構成",
        "独自ドメイン対応",
        "SEO内部対策済み",
        "サイト一新・リニューアル"
      ],
      recommend: false,
      color: "bg-purple-600"
    },
    {
      title: <span className="inline-block">安心まるごとサポート</span>,
      price: "10,000",
      unit: "/ 月額",
      description: <span>「作って終わり」にしない<span className="inline-block">安心のホームページ</span><span className="inline-block">保守管理プランです</span></span>,
      features: [
        "月1回の内容更新代行",
        "セキュリティチェック",
        <span className="inline-block">LINEでの無制限相談</span>,
        "トラブル時の緊急対応"
      ],
      recommend: false,
      color: "bg-slate-800"
    }
  ];

  const freeConsultation = {
    title: "デジタルの御用聞き",
    price: "0",
    unit: "/ 60分",
    description: "AIの活用からスマホの操作まで。あなたの「これどうやるの？」を笑顔で解決します",
    features: ["オンライン/対面相談", <span className="inline-block">AIチャット活用講座</span>, "SNS運用アドバイス", "些細な質問でもOK"],
    color: "bg-green-600"
  };

  const uWordUrl = "https://u-word.com/horby/store/storeDetail/134041";
  const lineUrl = "https://line.me/ti/p/HPd1Dij2HA";

  const CalligraphyLogo = ({ className = "" }) => (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 bg-slate-900 rounded-full scale-110 blur-[1px] opacity-10"></div>
      <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center border-[2px] border-slate-900 shadow-sm text-center">
        <span 
          className="text-[26px] font-serif text-slate-900 italic font-black"
          style={{ transform: 'rotate(-5deg) translateY(-2px)', fontFamily: '"Noto Serif JP", serif' }}
        >
          笑
        </span>
      </div>
    </div>
  );

  const MangaMedia = ({ index, fallbackIcon: Icon }) => {
    const mediaUrl = ASSETS.manga[index]?.url;
    if (!mediaUrl) return <Icon size={100} className="text-slate-200" />;
    const isVideo = mediaUrl.toLowerCase().endsWith('.mp4');
    return (
      <div className="w-full h-full overflow-hidden">
        {isVideo ? (
          <video src={mediaUrl} autoPlay loop muted playsInline className="w-full h-full object-cover" />
        ) : (
          <img src={mediaUrl} alt="お悩み" className="w-full h-full object-cover" />
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-orange-200 overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@900&display=swap');
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marquee-reverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-marquee { display: flex; width: max-content; animation: marquee 60s linear infinite; }
        .animate-marquee-reverse { display: flex; width: max-content; animation: marquee-reverse 50s linear infinite; }
        .font-shuji { font-family: 'Noto Serif JP', serif; }
      `}</style>

      {/* ナビゲーション */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-[100] border-b border-slate-100 shadow-sm text-left">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 md:h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <CalligraphyLogo />
            <div className="flex flex-col leading-none">
              <span className="text-xl md:text-[22px] font-black text-[#E67E22] tracking-tighter uppercase text-left">EGAO WORKS</span>
              <span className="text-[10px] text-slate-400 font-bold mt-1 uppercase tracking-widest text-left">ITで、街をもっと笑顔に</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[15px] font-bold text-slate-600">
            <a href="#works" className="hover:text-[#E67E22] transition-colors">作品集</a>
            <a href="#moya" className="hover:text-[#E67E22] transition-colors">お悩み解決</a>
            <a href="#about" className="hover:text-[#E67E22] transition-colors">想い</a>
            <a href="#pricing" className="hover:text-[#E67E22] transition-colors">料金</a>
            <a href={uWordUrl} target="_blank" rel="noopener noreferrer" className="bg-[#E67E22] text-white px-7 py-2.5 rounded-full hover:bg-orange-600 shadow-md transition-all text-center">お品書き</a>
          </div>
          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* ヒーローセクション */}
      <header className="relative pt-20 min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 text-center">
        <div className="absolute inset-0 z-0">
          <video ref={heroVideoRef} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60" poster={ASSETS.heroFallback}>
            <source src={ASSETS.heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white/95"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="mb-6 inline-block bg-white/10 backdrop-blur-sm p-1 rounded-full border border-white/20">
            <div className="bg-white text-[#E67E22] px-4 py-1.5 rounded-full font-black text-xs md:text-sm uppercase tracking-tighter">
              いらっしゃいませ！ 😊
            </div>
          </div>
          <h1 className="font-shuji text-[32px] md:text-6xl lg:text-[76px] font-black mb-10 leading-[1.1] tracking-tighter text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.6)]">
            看板だけじゃ伝えきれない<br />
            お店の魅力、動き出します
          </h1>
          <p className="text-base md:text-xl mb-12 text-white font-bold max-w-3xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
            あなたの街のデジタル御用聞き、EGAO WORKS<br />
            想いをカタチにする魔法をかけにきました
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a href={lineUrl} target="_blank" rel="noopener noreferrer" className="bg-[#4ADE80] text-white px-10 py-4 rounded-full font-black text-[17px] hover:bg-green-600 shadow-xl transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
              <MessageCircle size={22} /> LINEで無料相談
            </a>
            <a href="#works" className="bg-white text-slate-900 px-10 py-4 rounded-full font-black text-[17px] hover:bg-slate-50 shadow-xl transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
              <Palette size={22} /> 作品集を見る
            </a>
          </div>
        </div>
      </header>

      {/* 作品集セクション */}
      <section id="works" className="py-24 md:py-32 bg-white overflow-hidden text-center text-center">
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tighter mb-4 text-center text-center">想いをカタチにした作品たち</h2>
          <p className="text-slate-500 font-bold italic text-center text-center">HP、LP、キャラクター…… 規則正しく、丁寧に仕上げます</p>
        </div>

        {/* 上段：16:10 ギャラリー（名前・リンクなし） */}
        <div className="relative mb-16">
          <div className="animate-marquee">
            {[...ASSETS.works, ...ASSETS.works].map((work, i) => (
              <div key={i} className="w-[340px] md:w-[500px] mx-6 group relative rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-slate-100 bg-slate-50 transition-all hover:scale-[1.03]">
                <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                  {work.url.toLowerCase().endsWith('.mp4') ? (
                    <video src={work.url} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                  ) : (
                    <img src={work.url} alt="実績" className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-700" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 下段：1:1 ギャラリー（名前・リンクなし） */}
        <div className="relative">
          <div className="animate-marquee-reverse">
            {[...ASSETS.designs, ...ASSETS.designs].map((design, i) => (
              <div key={i} className="w-[160px] md:w-[240px] mx-5 group relative aspect-square rounded-[3.5rem] overflow-hidden shadow-xl border-2 border-orange-50 bg-white transition-all hover:-rotate-3 hover:border-orange-200">
                <div className="w-full h-full p-4 rounded-[4.5rem] overflow-hidden">
                  {design.url.toLowerCase().endsWith('.mp4') ? (
                    <video src={design.url} autoPlay loop muted playsInline className="w-full h-full object-cover rounded-[3.5rem]" />
                  ) : (
                    <img src={design.url} alt="作品" className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* もやもやセクション */}
      <section id="moya" className="py-24 md:py-32 bg-slate-50 px-4 md:px-6 relative overflow-hidden text-center text-center">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-shuji font-black mb-20 inline-block bg-white px-8 py-4 border-4 border-slate-900 shadow-[8px_8px_0_0_rgba(0,0,0,1)] -rotate-1 text-center">
            こんな“もやもや”はありませんか？
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center text-center">
            {ASSETS.manga.map((_, index) => (
              <div key={index} className="bg-white border-4 border-slate-900 relative aspect-[3/5] overflow-hidden shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-2 transition-all group rounded-xl text-center text-center">
                 <MangaMedia index={index} fallbackIcon={AlertCircle} />
              </div>
            ))}
          </div>
          
          <div className="mt-20">
             <div className="inline-block relative group text-center text-center">
               <div className="absolute -inset-1 bg-[#E67E22] rounded-full blur-xl opacity-20 group-hover:opacity-40 animate-pulse transition-opacity text-center text-center"></div>
               <div className="relative bg-[#E67E22] text-white font-shuji font-black text-base sm:text-lg md:text-3xl px-6 sm:px-12 py-4 sm:py-6 rounded-full shadow-2xl transform transition-transform group-hover:scale-105 active:scale-95 leading-tight overflow-hidden text-center text-center">
                 <span className="whitespace-nowrap">そのもやもや、EGAO WORKSが</span>
                 <br className="md:hidden" />
                 <span className="whitespace-nowrap">すべて笑顔に変えます！</span>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* プロフィールセクション */}
      <section id="about" className="py-24 md:py-32 bg-slate-900 text-white overflow-hidden relative text-left">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[80px] -mr-48 -mt-48 text-center text-center"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center md:text-left text-center text-center">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center text-center text-center text-center">
            <div className="w-40 h-40 md:w-52 md:h-52 bg-slate-800 rounded-[2.5rem] overflow-hidden border-4 border-slate-700 flex-shrink-0 shadow-2xl relative group text-center text-center">
              <img src={ASSETS.about} alt="ITエンジニア" className="w-full h-full object-cover text-center text-center text-center" onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = '<div class="text-6xl flex items-center justify-center h-full text-center text-center">👨‍💻</div>'; }} />
            </div>
            <div className="flex-1 text-left text-left text-left">
              <h2 className="text-2xl md:text-4xl font-black mb-8 text-orange-400 leading-tight tracking-tighter">
                現役エンジニアが、あなたの街の<br className="hidden md:block" />
                「デジタル御用聞き」になった<span className="whitespace-nowrap">理由</span>
              </h2>
              <div className="space-y-6 text-slate-300 leading-relaxed text-base md:text-lg font-bold">
                <p>「素晴らしいお店なのに、もったいない……」</p>
                <p>エンジニアとして活動する中で、そんな場面に何度も出会ってきました。良いサービスはあるのに、デジタルの壁が立ちはだかって魅力が届いていない。<span className="text-white underline decoration-orange-500 decoration-4 underline-offset-4 font-black text-left text-left text-left">お店もお客様も笑顔にしたい</span>想いでEGAO WORKSを立ち上げました</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 料金プランセクション */}
      <section id="pricing" className="py-24 bg-orange-50 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-orange-600 tracking-tighter text-center">安心の明朗会計プラン</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-bold leading-relaxed text-center">
              「ITのことはよくわからないから、高額な請求が怖い…」<br />
              そんな不安をなくすため、EGAO Worksはすべて定額・コミコミ価格です
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16 text-center text-center">
            {pricingData.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-[2.5rem] shadow-xl overflow-hidden border-2 flex flex-col ${plan.recommend ? 'border-orange-500 md:scale-105 z-10' : 'border-transparent'} p-6 md:p-8 text-center text-center`}>
                {plan.recommend && (
                  <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 rounded-bl-xl text-xs font-black uppercase text-center text-center">一番人気！</div>
                )}
                <h3 className="text-lg font-black mb-4 text-slate-800 text-center text-center">{plan.title}</h3>
                <div className="flex items-baseline mb-6 justify-center">
                  <span className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter text-center text-center text-center text-center">¥{plan.price}</span>
                  {plan.unit ? <span className="text-slate-500 ml-1 text-xs font-bold text-center text-center text-center text-center">{plan.unit}</span> : <span className="text-slate-500 ml-1 text-xs font-bold text-center text-center text-center text-center text-center"> (税込)〜</span>}
                </div>
                <p className="text-slate-600 text-[11px] mb-8 leading-relaxed font-bold text-center text-center">{plan.description}</p>
                <ul className="space-y-4 mb-10 flex-1 text-left text-left">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start font-black text-slate-700 text-[11px] md:text-xs">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => window.open(uWordUrl, '_blank')} className={`w-full py-4 rounded-2xl font-black text-white shadow-lg transform transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-sm ${plan.color} text-center text-center`}>
                  <MousePointerClick size={16} /> 詳細を見る
                </button>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-[2.5rem] shadow-lg p-8 md:p-12 border border-slate-100 mb-16 max-w-5xl mx-auto text-center">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 text-green-600 font-black mb-2 uppercase tracking-tighter text-center">
                  <Zap size={20} /> <span>まずは気軽に相談から！</span>
                </div>
                <h3 className="text-2xl font-black mb-4 text-left text-left text-left">{freeConsultation.title}</h3>
                <p className="text-slate-600 mb-6 font-bold leading-relaxed text-left text-left text-left">
                  {freeConsultation.description}。どんなに小さな「困った」でも構いません。あなたのお店をデジタルで元気にするヒントを一緒に探しましょう
                </p>
                <div className="flex flex-wrap gap-3">
                  {freeConsultation.features.map((f, i) => (
                    <span key={i} className="bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-xs font-black tracking-tighter">#{f}</span>
                  ))}
                </div>
              </div>
              <div className="text-center bg-slate-50 p-8 rounded-3xl min-w-[240px] border-2 border-slate-100 text-center text-center text-center">
                <div className="text-sm text-slate-500 mb-1 underline decoration-green-200 font-black text-center text-center text-center">初回相談はここから</div>
                <div className="text-4xl font-black text-slate-800 mb-4 tracking-tighter text-center text-center text-center text-center">¥{freeConsultation.price}<span className="text-lg text-slate-500 font-bold text-center text-center text-center text-center">{freeConsultation.unit}</span></div>
                <button onClick={() => window.open(lineUrl, '_blank')} className="w-full bg-[#4ADE80] text-white py-4 rounded-2xl font-black hover:bg-green-500 transition-colors shadow-lg flex items-center justify-center gap-2 text-center text-center">
                  <MessageCircle size={20} /> LINEで相談する
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="py-20 bg-slate-900 text-slate-500 text-center px-4 border-t border-slate-800">
        <div className="mb-12 flex justify-center items-center gap-4 text-center">
           <CalligraphyLogo className="scale-90" />
           <span className="text-2xl font-black text-slate-100 tracking-tighter italic">EGAO WORKS</span>
        </div>
        <p className="text-sm mb-8 font-bold tracking-wide text-center text-center">© 2026 EGAO WORKS. All Smiles Reserved</p>
        <div className="flex flex-wrap justify-center gap-10 text-[11px] md:text-sm font-black underline decoration-slate-700 underline-offset-8 text-center text-center">
          <a href="#" className="hover:text-slate-300 transition-colors">個人情報保護方針</a>
          <a href={uWordUrl} target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">特定商取引法に基づく表記</a>
        </div>
      </footer>
    </div>
  );
};

export default App;