export const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experiences", label: "Experiences" },
  { id: "research", label: "Research" },
  { id: "skills", label: "Skills" },
  { id: "hobbies", label: "Hobbies" },
  { id: "publications", label: "Links" },
  { id: "contact", label: "Contact" }
];

export const profile = {
  name: "Hayashi Shuta",
  title: " HCI / Swift / XR / AI",
  description:
    "Swift / SwiftUIによるアプリ開発、XR・HCI領域の研究、医療現場と連携したアプリ開発、ビジネスプランコンテストに取り組んでいます。アイデアを形にする企画力と、実装まで進める主体性・技術力が強みです。",
  details: [
    ["University", "Yokohama National University"],
    ["Previous", "Oita University / Intelligent Information Systems"],
    ["Field", "Information Systems / HCI / XR"],
    ["Interests", "Swift, iOS, macOS, XR, AI, UX"],
    ["English", "TOEIC 865（Listening 450 / Reading 415）"],
    ["Location", "Japan"]
  ]
};

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
    externalLinksTitle: "MusicDeck詳細",
    externalLinks: [
      {
        label: "MusicDeckの詳細ページを見る",
        url: "https://884shuta.com/musicdeck/"
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
      "第23回大分大学ベンチャー・ビジネスプランコンテストで最優秀賞を受賞しました（2024）。"
    ],
    tech: ["Business Plan", "Logistics", "Presentation", "Team Management"],
    externalLinks: [
      {
        label: "大分大学 令和6年度 最終審査会レポート",
        url: "https://www.ico.oita-u.ac.jp/information/1987/"
      }
    ],
    presentation: {
      title: "CarGo Now! プレゼン資料（読み込みには時間がかかります）",
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
      "第24回大分大学ベンチャー・ビジネスプランコンテストで優秀賞と企業賞を受賞しました（2025）。"
    ],
    tech: ["Business Plan", "UI Concept", "Presentation", "User Research"],
    externalLinks: [
      {
        label: "大分大学 第24回 最終審査会レポート",
        url: "https://www.oita-u.ac.jp/01oshirase/topics/2025-033.html"
      },
      {
        label: "OBS NEWS 最終審査会記事",
        url: "https://newsdig.tbs.co.jp/articles/obs/2187900"
      }
    ],
    presentation: {
      title: "Cook With プレゼン資料（読み込みには時間がかかります）",
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
      "学部1年、3年、4年で学内ビジネスプランコンテストに参加し、すべて本戦に出場しました。学部3年では第23回最優秀賞、学部4年では第24回優秀賞・企業賞を経験しました。毎回異なるメンバーでチームを組み、ユーザー課題の発見、ビジネスモデル設計、資料作成、発表まで主導しました。"
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
    items: ["iOS", "macOS", "Flutter", "Android", "Apple Developer Program", "端末間通信", "UI設計"]
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

export const hobbies = [
  {
    title: "写真",
    text:
      "日常や旅行先で、風景や街の雰囲気を撮ることが好きです。記録としてだけでなく、その時の感情や空気感を残す手段として写真を撮っています。"
  },
  {
    title: "アプリ開発",
    text:
      "日常の中で感じた不便や、あったら便利だと思うものを、自分でアプリとして形にすることが好きです。Swift / SwiftUIを中心に、iPhoneやMacで動くアプリを作っています。"
  },
  {
    title: "サイクリング",
    text:
      "自転車で街や自然の中を走り、普段とは違う景色や道を見つけることが好きです。移動そのものを楽しみながら、気分転換や新しいアイデアのきっかけにもしています。"
  }
];

export const publicLinks = [
  {
    title: "令和6年度 大分大学ベンチャー・ビジネスプランコンテスト",
    description: "CarGo Now! が最優秀賞として掲載されています。",
    url: "https://www.ico.oita-u.ac.jp/information/1987/"
  },
  {
    title: "第24回 大分大学ベンチャー・ビジネスプランコンテスト",
    description: "2025年度の最終審査会レポートです。Cook With は優秀賞・企業賞として追記予定の公開情報として整理しています。",
    url: "https://www.oita-u.ac.jp/01oshirase/topics/2025-033.html"
  },
  {
    title: "Jomon Quiz Rally / Kakokore",
    description: "FLLメンター活動で子どもたちのWebアプリ制作を支援したリポジトリです。",
    url: "https://github.com/kabosubrothersno6/kakokore"
  }
];

export const links = [
  {
    label: "GitHub",
    url: "https://github.com/884shuta"
  }
];
