export const navItems = [
  { id: "about", label: "About" },
  { id: "focus", label: "Focus" },
  { id: "projects", label: "Projects" },
  { id: "experiences", label: "Experiences" },
  { id: "research", label: "Research" },
  { id: "skills", label: "Skills" },
  { id: "photography", label: "Photography" },
  { id: "travel", label: "Travel" },
  { id: "hobbies", label: "Hobbies" },
  { id: "contact", label: "Contact" }
];

export const profile = {
  name: "Hayashi Shuta",
  title: " HCI / Swift / XR / AI",
  heroImage: "/images/hero-portfolio.png",
  catchCopy:
    "現在Webサイト作成中  アイデア力と技術力で身近な課題を解決する",
  description:
    "知覚を用いたXR・HCI領域の研究、Swiftを用いたアプリ開発、ビジネスプランコンテスト、医療現場と連携したアプリ開発などに取り組んでいます。アイデアと技術で課題を解決することを目指しています。",
  details: [
    ["University", "Yokohama National University"],
    ["Field", "Information Systems / HCI / XR"],
    ["Interests", "Swift, iOS, macOS, XR, AI, UX"],
    ["English", "TOEIC 865（Listening 450 / Reading 415）"],
    ["Location", "Japan"]
  ]
};

export const focusItems = [
  {
    title: "体験から技術を考える",
    text:
      "技術を先に置くのではなく、ユーザーがどのような状況で困っているか、どのような体験に変えたいかを起点に考えることを大切にしています。"
  },
  {
    title: "小さく作って試す",
    text:
      "アイデアを考えるだけで終わらせず、アプリやWebサービスとして実際に動く形にし、触りながら改善していくことを重視しています。"
  },
  {
    title: "現場の声を取り入れる",
    text:
      "病院共同開発やビジネスプランコンテストの経験から、実際に使う人の声を聞きながら改善することの重要性を学びました。"
  },
  {
    title: "技術と企画をつなげる",
    text:
      "実装だけでなく、課題設定、利用シーン、事業性、継続利用まで考えながらプロダクトを作ることを意識しています。"
  }
];

export const projects = [
  {
    name: "病院共同の姿勢判別アプリ",
    type: "Medical App / Machine Learning",
    image: "/images/posture-app.jpg",
    visual: "medical",
    summary:
      "整形外科の医師が行っている小中学生向けの運動機能チェックを支援するため、複数の姿勢判別をアプリで自動化するAndroidアプリを開発しました。",
    role: [
      "UI設計",
      "Flutterによる画面作成",
      "姿勢判別精度の向上",
      "機能改善案の検討",
      "医師からのフィードバックをもとにした改善"
    ],
    points: [
      "実際に医師が利用する場面を想定し、操作のしやすさを重視しました。",
      "画像から骨格情報を取得し、姿勢ごとの判定条件を調整しました。",
      "服装や背景、撮影条件の違いによる影響を考慮しました。",
      "データ収集と改善を繰り返し、精度を最大約90%まで向上させました。"
    ],
    tech: ["Flutter", "Android", "Python", "機械学習", "SVM", "CSV"]
  },
  {
    name: "MusicDeck",
    type: "iOS / macOS Personal App",
    image: "/images/musicdeck.jpg",
    visual: "music",
    summary:
      "Mac上の音楽操作をiPhoneから手軽に行えるようにするため、iPhoneをMacの音楽リモコンのように使えるアプリを個人開発しました。",
    role: [
      "企画",
      "UI設計",
      "Swift / SwiftUIによるiPhoneアプリ開発",
      "macOSアプリ開発",
      "端末間通信の設計",
      "音楽操作機能の実装"
    ],
    points: [
      "TCP通信やMultipeer Connectivityを利用し様々な環境に対応しました。",
      "見た目のわかりやすさと通信量のバランスを考えました。",
      "カスタマイズ性と便利さを共存させました。"
    ],
    tech: ["Swift", "SwiftUI", "iOS", "macOS", "TCP", "Multipeer Connectivity"],
    testFlights: [
      {
        label: "iPhone版 TestFlight",
        url: "https://testflight.apple.com/join/WTsdsdNE"
      },
      {
        label: "Mac版 TestFlight",
        url: "https://testflight.apple.com/join/Nywx67be"
      }
    ]
  },
  {
    name: "CarGo Now",
    type: "Business Plan",
    image: "/images/cargo-now.jpg",
    visual: "logistics",
    summary:
      "自家用車の空きスペースを活用した配送サービスを企画しました。既存の移動や車の空き容量を活用し、地域の物流課題の改善を目指しました。",
    role: [
      "発案",
      "チームリーダー",
      "課題設定",
      "ビジネスモデル設計",
      "資料作成",
      "プレゼン"
    ],
    points: [
      "すでに存在する移動や空きスペースを活用する発想を取り入れました。",
      "地域課題と利用者のメリットを両立させる設計を考えました。",
      "大分大学ビジネスプランコンテストで優勝しました。(2024)"
    ],
    tech: ["Business Plan", "Logistics", "Presentation", "Team Management"],
    presentation: {
      title: "CarGo Now! プレゼン資料(読み込みには時間がかかります。)",
      src:
        "https://1drv.ms/p/c/810bf9147a4c14a8/IQSG8adt8JRBQpmfzpz4xj9XAbCImfdL05j_R73kt8rQNGI?em=2&wdAr=1.7777777777777777"
    }
  },
  {
    name: "Cook With",
    type: "Business Plan / App Concept",
    image: "/images/cookwith.jpg",
    visual: "food",
    summary:
      "学生の自炊継続や食材管理の課題に着目し、学生向けの食材配送・自炊支援アプリを企画しました。",
    role: [
      "発案",
      "チームリーダー",
      "ユーザー課題の整理",
      "ビジネスモデル検討",
      "資料作成",
      "プレゼン"
    ],
    points: [
      "学生の生活課題を起点にサービスを設計しました。",
      "食材を届けるだけでなく、継続的に自炊する仕組みを考えました。",
      "在庫管理や栄養管理まで含めた体験を設計しました。",
      "大分大学ビジネスプランコンテストで準優勝、企業賞を受賞しました(2025)。"
    ],
    tech: ["Business Plan", "UI Concept", "Presentation", "User Research"],
    presentation: {
      title: "Cook With プレゼン資料(読み込みには時間がかかります。)",
      src:
        "https://1drv.ms/p/c/810bf9147a4c14a8/IQTjF3uk-CTxT7wHS-XV2uOVAYmiQAUTi5bxoF3AADruZ6c?em=2&wdAr=1.7777777777777777"
    }
  },
  {
    name: "メガネ型会話記憶補助AIシステム",
    type: "Research / HMD / AI",
    image: "/images/memoryhint.jpg",
    visual: "memory",
    summary:
      "会話内容を記録し、必要な情報を後から検索・提示するメガネ型会話記憶補助AIシステムについての研究をしました。",
    role: [
      "研究テーマ設計",
      "検索方式の検討",
      "HMD上の情報提示UI検討",
      "RAGや事前生成QA方式の調査"
    ],
    points: [
      "毎回LLMで生成するのではなく、事前に質問・回答ペアを作成した内容を検索する方式で高速化・高精度化を実現しました。",
      "HMD上で邪魔にならない情報提示を考えています。"
    ],
    tech: ["HMD", "XR", "RAG", "RePAQ", "Embedding Search", "LLM", "UI"]
  }
];

export const experiences = [
  {
    year: "2024 - 2026",
    title: "ビジネスプランコンテストへの継続挑戦",
    text:
      "学部1年、3年、4年で学内ビジネスプランコンテストに参加し、すべて本戦に出場しました。学部3年では優勝、学部4年では準優勝を経験しました。毎回異なるメンバーでチームを組み、ユーザー課題の発見、ビジネスモデル設計、資料作成、発表まで主導しました。"
  },
  {
    year: "2025 - 2026",
    title: "病院共同開発",
    text:
      "整形外科の医師と連携し、小中学生向けの運動機能チェックを支援する姿勢判別アプリを開発しました。技術的に動くものを作るだけではなく、実際に医師が使いやすいUIや判定精度の改善を意識しました。"
  },
  {
    year: "University Life",
    title: "150人規模のバドミントンサークル幹部",
    text:
      "新歓後に参加者が減る課題に対して、人間関係の薄れが原因の一つだと考えました。通常活動を安定して続けるだけでなく、イベント回数を増やし、新入生と既存メンバーが自然に会話できる場を作りました。"
  },
  {
    year: "Overseas",
    title: "海外アントレプレナー研修",
    text:
      "大学代表としてシンガポールや香港のアントレプレナー研修に参加しました。企業見学やアイデアソンを通して、海外のビジネス環境や課題解決の考え方に触れました。"
  },
  {
    year: "Education / Web",
    title: "FLLメンター / Jomon Quiz Rally",
    text:
      "FLLのメンター活動に関わり、子どもたちがWebアプリを作成するお手伝いをしました。https://github.com/kabosubrothersno6/kakokore"
  }
];

export const researchThemes = [
  {
    title: "メガネ型会話記憶補助AIシステム",
    background:
      "会話の中で出てきた重要な情報は、時間が経つと忘れてしまったり、必要なタイミングで思い出せなかったりします。",
    purpose:
      "会話内容を記録し、必要な情報を素早く検索・提示することで、人の記憶を補助するシステムを目指しています。",
    approach:
      "音声認識、要約、会話ID、話者、時刻などの情報を用いて会話を整理し、RAGや事前生成QA方式を用いた高速な検索を検討しています。",
    future:
      "HMD上で会話を邪魔しない情報提示を実現し、日常的に使える記憶補助体験へ発展させたいと考えています。",
    keywords: ["HMD", "XR", "会話記録", "音声認識", "RAG", "RePAQ", "情報提示UI"]
  },
  {
    title: "仮想空間と現実空間のシームレスな移行",
    background:
      "VRゴーグルの着脱時には、現実空間と仮想空間の間に分断感が生じることがあります。",
    purpose:
      "現実から仮想、仮想から現実へ移る際の違和感を減らし、自然に空間を移行できる体験を目指しています。",
    approach:
      "聴覚、視覚、触覚などの知覚を段階的に変化させることで、現在いる空間への没入感を一度下げ、次の空間へ自然に意識を移せるようにします。",
    future:
      "XR、HCI、Presence、Immersionの観点から、人が自然に空間を切り替えられるインタラクションを設計していきたいです。",
    keywords: ["XR", "VR", "AR", "HCI", "Presence", "Immersion", "Cross-Reality"]
  }
];

export const skills = [
  {
    category: "Programming",
    items: ["Swift", "SwiftUI", "Python", "Dart", "Java", "C", "HTML", "CSS", "JavaScript"]
  },
  {
    category: "App Development",
    items: ["iOS", "macOS", "Flutter", "Android", "TestFlight", "Apple Developer Program", "端末間通信", "UI設計"]
  },
  {
    category: "AI / ML",
    items: ["骨格認識", "ML Kit Pose Detection", "SVM", "機械学習", "画像処理", "RAG", "埋め込み検索", "LLM活用"]
  },
  {
    category: "Web / Tools",
    items: ["Git", "GitHub", "React", "Vite", "Next.js", "Express", "LaTeX", "pandas", "numpy", "Pillow"]
  },
  {
    category: "Language",
    items: ["TOEIC 865", "Listening 450", "Reading 415", "2026年5月31日受験"]
  }
];

export const photos = [
  {
    src: "/images/photo-01.jpg",
    visual: "city",
    title: "夕方の街",
    category: "Daily",
    caption: "移動中に見つけた光や空気感を残した一枚。"
  },
  {
    src: "/images/photo-02.jpg",
    visual: "landscape",
    title: "旅先の風景",
    category: "Travel",
    caption: "初めて訪れた場所で感じた雰囲気を記録。"
  },
  {
    src: "/images/photo-03.jpg",
    visual: "campus",
    title: "大学生活の記録",
    category: "University",
    caption: "研究や開発だけでなく、日常の時間も大切にしている。"
  },
  {
    src: "/images/photo-04.jpg",
    visual: "event",
    title: "イベントの記録",
    category: "Event",
    caption: "活動の中で出会った人や場の雰囲気を写真として残す。"
  }
];

export const travels = [
  {
    place: "Singapore",
    date: "Overseas Entrepreneurship Program",
    images: [
      {
        src: "/images/travel-singapore-01.jpg",
        visual: "singapore-city",
        alt: "Singapore city record"
      },
      {
        src: "/images/travel-singapore-02.jpg",
        visual: "singapore-workshop",
        alt: "Singapore entrepreneurship program record"
      }
    ],
    summary:
      "大学代表として参加したアントレプレナー研修で訪問。企業見学やアイデアソンを通して、海外のビジネス環境や課題解決の考え方に触れました。",
    detail:
      "単なる観光ではなく、自分の将来やプロダクトづくりへの視点を広げる経験になりました。日本とは異なる街の雰囲気やビジネスの捉え方に触れたことで、サービスを考える際にユーザーや市場をより広く見る意識が強くなりました。"
  },
  {
    place: "Hong Kong",
    date: "Overseas Entrepreneurship Program",
    images: [
      {
        src: "/images/travel-hongkong-01.jpg",
        visual: "hongkong-city",
        alt: "Hong Kong city record"
      },
      {
        src: "/images/travel-hongkong-02.jpg",
        visual: "hongkong-street",
        alt: "Hong Kong street record"
      }
    ],
    summary:
      "海外アントレプレナー研修で訪問。異なる文化や都市の雰囲気に触れながら、事業やサービスが社会の中でどのように受け入れられているかを考えるきっかけになりました。",
    detail:
      "都市の密度や移動のしやすさ、人の流れを見ながら、生活とサービスの距離感について考える機会になりました。"
  },
  {
    place: "Japan Travel",
    date: "Daily Travel Log",
    images: [
      {
        src: "/images/travel-japan-01.jpg",
        visual: "japan-rail",
        alt: "Japan travel record"
      },
      {
        src: "/images/travel-japan-02.jpg",
        visual: "japan-coast",
        alt: "Japan landscape record"
      }
    ],
    summary:
      "国内の旅行や移動の記録。風景、街、食事、イベントなどを写真と短い文章で残しています。",
    detail:
      "特別な観光地だけでなく、移動中に見た景色や何気ない街の空気感も記録していきたいと考えています。"
  }
];

export const hobbies = [
  {
    title: "写真",
    text:
      "日常や旅行先で、風景や街の雰囲気を撮ることが好きです。記録としてだけでなく、その時の感情や空気感を残す手段として写真を撮っています。"
  },
  {
    title: "旅行",
    text:
      "海外研修や国内旅行を通して、新しい場所の文化や生活に触れることが好きです。旅先で得た視点は、ビジネスアイデアやUI/UXを考えるときにも影響しています。"
  },
  {
    title: "アプリ開発",
    text:
      "日常の中で感じた不便や、あったら便利だと思うものを、自分でアプリとして形にすることが好きです。Swift / SwiftUIを中心に、iPhoneやMacで動くアプリを作っています。"
  },
  {
    title: "バドミントン",
    text:
      "大学のバドミントンサークルで幹部を経験しました。競技としてだけでなく、人が集まり、関係性が生まれる場としてのサークル活動にも関心を持ちました。"
  },
  {
    title: "スポーツ観戦",
    text:
      "野球観戦など、スポーツの場の熱量や一体感を楽しんでいます。会場の雰囲気や座席から見える景色も含めて楽しんでいます。"
  }
];

export const links = [
  {
    label: "GitHub",
    url: "https://github.com/884shuta"
  }
];
