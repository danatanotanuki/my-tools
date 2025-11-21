// --- 1. データの準備 ---
// まずはここに直接データを書きます。これが簡易的なデータベースです。
// 必要に応じてこの配列にオブジェクトを追加・編集してください。
const dataStore = [
    
    {
        id: 4,
        title: "ダブル・ダブル",
        description: "",
        text: "### 🔻ダブル・ダブル｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/nbb5ebb768298"
    },
    {
        id: 5,
        title: "雪原を汚して",
        description: "",
        text: "### 🔻雪原を汚して｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n313ab32a362e"
    },
    {
        id: 6,
        title: "器は何も語らない",
        description: "",
        text: "### 🔻器は何も語らない｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n86ed34cd9e5d"
    },
    {
        id: 7,
        title: "量れないもの",
        description: "",
        text: "### 🔻量れないもの｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/nf7cf3c93ee3a"
    },
    {
        id: 8,
        title: "ぜんまい仕掛けの約束",
        description: "",
        text: "### 🔻ぜんまい仕掛けの約束｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n0dd24508a77b"
    },
    {
        id: 9,
        title: "喉に棲むもの",
        description: "",
        text: "### 🔻喉に棲むもの｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n00ee7b02e66b"
    },
    {
        id: 10,
        title: "背骨と灰",
        description: "",
        text: "### 🔻背骨と灰｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n5e764ea73225"
    },
    {
        id: 11,
        title: "偽貌画",
        description: "",
        text: "### 🔻偽貌画｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n5e43c4d1cf9d"
    },
    {
        id: 12,
        title: "微笑みの定位置",
        description: "",
        text: "### 🔻微笑みの定位置｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n703263d1e96c"
    },
    {
        id: 13,
        title: "溺",
        description: "",
        text: "### 🔻溺｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/nb488ae8ffe7a"
    },
    {
        id: 14,
        title: "零度の共感",
        description: "",
        text: "### 🔻零度の共感｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/nb1c8946e0a78"
    },
    {
        id: 15,
        title: "聖なる墓荒らし",
        description: "",
        text: "### 🔻聖なる墓荒らし｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n457c5f17b34e"
    },
    {
        id: 16,
        title: "虚ろの結晶",
        description: "",
        text: "### 🔻虚ろの結晶｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n205cf0b5c463"
    },
    {
        id: 17,
        title: "窓骸",
        description: "",
        text: "### 🔻窓骸｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/nd834505599a4"
    },
    {
        id: 4,
        title: "香りの終点",
        description: "",
        text: "### 🔻香りの終点｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/na57dd4f89081"
    },
    {
        id: 5,
        title: "ヘイコウ駅の煙",
        description: "",
        text: "### 🔻ヘイコウ駅の煙｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n3d108e980cca"
    },
    {
        id: 6,
        title: "渇きの器",
        description: "",
        text: "### 🔻渇きの器｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n683c107db6eb"
    },
    {
        id: 7,
        title: "声の縫い跡",
        description: "",
        text: "### 🔻声の縫い跡｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/nf7a2f602d30c"
    },
    {
        id: 8,
        title: "ウロボロスのあくび",
        description: "",
        text: "### 🔻ウロボロスのあくび｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/ne11d9f068a1c"
    },
    {
        id: 9,
        title: "皮膚の地図",
        description: "",
        text: "### 🔻皮膚の地図｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n51f356e113ba"
    },
    {
        id: 10,
        title: "フレームアウト",
        description: "",
        text: "### 🔻フレームアウト｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/ne44affc6a55f"
    },
    {
        id: 11,
        title: "七歩と三打",
        description: "",
        text: "### 🔻七歩と三打｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/neb2c013f202a"
    },
    {
        id: 12,
        title: "あなたの蓋然性",
        description: "",
        text: "### 🔻あなたの蓋然性｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n2c35332daae3"
    },
    {
        id: 13,
        title: "空の殻",
        description: "",
        text: "### 🔻空の殻｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/na35abd740a7c"
    },
    {
        id: 14,
        title: "こだまする壁",
        description: "",
        text: "### 🔻こだまする壁｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n447d0dedc6a5"
    },
    {
        id: 15,
        title: "白紙を撫でて",
        description: "",
        text: "### 🔻白紙を撫でて｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n13eee946200a"
    },
    {
        id: 16,
        title: "雨止みの頁",
        description: "",
        text: "### 🔻雨止みの頁｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/nd36c34216f98"
    },
    {
        id: 17,
        title: "記憶の雫はまだ冷たい",
        description: "",
        text: "### 🔻記憶の雫はまだ冷たい｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/ne954329bda1b"
    },
    {
        id: 18,
        title: "セッショクしたミチ",
        description: "",
        text: "### 🔻セッショクしたミチ｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/ne16e17eb2ab7"
    },
    {
        id: 19,
        title: "赤い線",
        description: "",
        text: "### 🔻赤い線｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n5ebf121088c8"
    },
    {
        id: 20,
        title: "空虚を満たす",
        description: "",
        text: "### 🔻空虚を満たす｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n2e1357451cf9"
    },
    {
        id: 21,
        title: "後付けの星座",
        description: "",
        text: "### 🔻後付けの星座｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n4732c6487d08"
    },
    {
        id: 4,
        title: "私はそこにいた",
        description: "",
        text: "### 🔻私はそこにいた｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n3586fcc89300"
    },
    {
        id: 5,
        title: "水平線に抗って",
        description: "",
        text: "### 🔻水平線に抗って｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/ne7610ce19605"
    },
    {
        id: 6,
        title: "森の背骨",
        description: "",
        text: "### 🔻森の背骨｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n9092f167ddbe"
    },
    {
        id: 7,
        title: "誰かの窪み",
        description: "",
        text: "### 🔻誰かの窪み｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n1cf0578ddb19"
    },
    {
        id: 8,
        title: "何も無くて、ごめんね",
        description: "",
        text: "### 🔻何も無くて、ごめんね｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n13ef373babef"
    },
    {
        id: 9,
        title: "意味の墓場",
        description: "",
        text: "### 🔻意味の墓場｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n874700dfd6c9"
    },
    {
        id: 10,
        title: "人間だったもの",
        description: "",
        text: "### 🔻人間だったもの｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n58e195304a79"
    },
    {
        id: 11,
        title: "本当の自分にさよなら",
        description: "",
        text: "### 🔻本当の自分にさよなら｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n0b489657f85a"
    },
    {
        id: 12,
        title: "次を待つ箱",
        description: "",
        text: "### 🔻次を待つ箱｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n195439cd5f25"
    },
    {
        id: 13,
        title: "張り付いた空洞",
        description: "",
        text: "### 🔻張り付いた空洞｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n53820ea93c69"
    },
    {
        id: 14,
        title: "スポットライトの影で",
        description: "",
        text: "### 🔻スポットライトの影で｜【狸の話】",
        url: "https://note.com/danatanotanuki/n/n89cccef9a4fc"
    },

    {
        id: 4,
        title: "鏡合わせの共犯者",
        description: "",
        text: "### 🔻鏡合わせの共犯者｜【狸の話】",
        url: "https://note.com/danatanotanuki/n/n81d42b59df20"
    },
    {
        id: 5,
        title: "私はそこにいなかった",
        description: "",
        text: "### 🔻私はそこにいなかった｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/nb4d0420af433"
    },
    {
        id: 6,
        title: "苦しみとの距離感",
        description: "",
        text: "### 🔻苦しみとの距離感｜【狸の話】",
        url: "https://note.com/danatanotanuki/n/n178dfabf7d39"
    },
    {
        id: 7,
        title: "無関心の鎧",
        description: "",
        text: "### 🔻無関心の鎧｜【狸の話】",
        url: "https://note.com/danatanotanuki/n/nab3ed5493299"
    },
    {
        id: 8,
        title: "内なる自分は敵となる",
        description: "",
        text: "### 🔻内なる自分は敵となる｜【狸の話】",
        url: "https://note.com/danatanotanuki/n/nf37cf0820143"
    },
    {
        id: 4,
        title: "死刑囚",
        description: "",
        text: "### 🔻死刑囚｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n71bb62530c1f"
    },
    {
        id: 5,
        title: "無駄を体現する者",
        description: "",
        text: "### 🔻無駄を体現する者｜【狸の話】",
        url: "https://note.com/danatanotanuki/n/n9d328432b3f5"
    },
    {
        id: 6,
        title: "旅をしたい",
        description: "",
        text: "### 🔻旅をしたい｜【狸の話】",
        url: "https://note.com/danatanotanuki/n/nf8e00cae38e2"
    },
    {
        id: 7,
        title: "紫の聴者",
        description: "",
        text: "### 🔻紫の聴者｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n6f156d07db66"
    },
    {
        id: 8,
        title: "依存の養殖",
        description: "",
        text: "### 🔻依存の養殖｜【狸の話】",
        url: "https://note.com/danatanotanuki/n/na4919b2e6866"
    },
    {
        id: 9,
        title: "メガネをつけない老人",
        description: "",
        text: "### 🔻メガネをつけない老人｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n6fcf2d033d0d"
    },
    {
        id: 10,
        title: "猫はなかない",
        description: "",
        text: "### 🔻猫はなかない｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n6e07f3705a03"
    },
    {
        id: 11,
        title: "昨日には戻れない",
        description: "",
        text: "### 🔻昨日には戻れない｜【狸の話】",
        url: "https://note.com/danatanotanuki/n/n6b34e3d3a867"
    },
    {
        id: 12,
        title: "弱さの共喰い",
        description: "",
        text: "### 🔻弱さの共喰い｜【狸の話】",
        url: "https://note.com/danatanotanuki/n/n965881ec7bca"
    },
    {
        id: 13,
        title: "全てのものに感謝を捧げて",
        description: "",
        text: "### 🔻全てのものに感謝を捧げて｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/nc3d535e3a5ac"
    },
    {
        id: 14,
        title: "神々の演劇",
        description: "",
        text: "### 🔻神々の演劇｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n771e799de660"
    },
    {
        id: 15,
        title: "地域公共交通維持運行路線",
        description: "",
        text: "### 🔻地域公共交通維持運行路線｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n735cde177a94"
    },
    {
        id: 16,
        title: "見出し画像に拘り始める",
        description: "",
        text: "### 🔻見出し画像に拘り始める｜【狸の話】",
        url: "https://note.com/danatanotanuki/n/nc4e16e4f9663"
    },
    {
        id: 17,
        title: "境界はすぐそこに",
        description: "",
        text: "### 🔻境界はすぐそこに｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n637ecf075347"
    },
    {
        id: 18,
        title: "猫の幸福",
        description: "",
        text: "### 🔻猫の幸福｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n4a8e78eecd3e"
    },
    {
        id: 19,
        title: "カラメルは夜に燃える",
        description: "",
        text: "### 🔻カラメルは夜に燃える｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n6303ae2596fe"
    },
    {
        id: 20,
        title: "寄生虫",
        description: "",
        text: "### 🔻寄生虫｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n18d106d1e248"
    },
    {
        id: 21,
        title: "拭えない入れ墨",
        description: "",
        text: "### 🔻拭えない入れ墨｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/na0bda75ec1b7"
    },
    {
        id: 4,
        title: "さよなら、私の仮眠",
        description: "",
        text: "### 🔻さよなら、私の仮眠｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/nbcbe5db6c5fb"
    },
    {
        id: 5,
        title: "あいの会話",
        description: "",
        text: "### 🔻あいの会話｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n7f1794f524ce"
    },
    {
        id: 6,
        title: "きっと、あなたの好きが見つかる場所、共同運営マガジン『エン狸』より【メンバーさんの記事のご紹介】",
        description: "",
        text: "### 🔻きっと、あなたの好きが見つかる場所、共同運営マガジン『エン狸』より【メンバーさんの記事のご紹介】｜【狸の話】",
        url: "https://note.com/danatanotanuki/n/nffd85d8ef633"
    },
    {
        id: 7,
        title: "バッテリーの劣化",
        description: "",
        text: "### 🔻バッテリーの劣化｜【狸の話】",
        url: "https://note.com/danatanotanuki/n/ndbddb27b67ed"
    },
    {
        id: 8,
        title: "それにあいを込めて",
        description: "",
        text: "### 🔻それにあいを込めて｜【狸のあいとは何か】",
        url: "https://note.com/danatanotanuki/n/n7105b11e07ac"
    },
    {
        id: 9,
        title: "今日の気持ち",
        description: "",
        text: "### 🔻今日の気持ち｜【狸の話】",
        url: "https://note.com/danatanotanuki/n/n125c86eb13fc"
    },
    {
        id: 10,
        title: "コウモリがやってきた",
        description: "",
        text: "### 🔻コウモリがやってきた｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/ndc38673e4f36"
    },
    {
        id: 11,
        title: "特異点",
        description: "",
        text: "### 🔻特異点｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n95e79ef7992d"
    },
    {
        id: 12,
        title: "幽霊だったかもしれない",
        description: "",
        text: "### 🔻幽霊だったかもしれない｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/nb86d895c2b33"
    },
    {
        id: 13,
        title: "不害無い@母",
        description: "",
        text: "### 🔻不害無い@母｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/ne0e59ed736c8"
    },
    {
        id: 4,
        title: "不害無い@息子",
        description: "",
        text: "### 🔻不害無い@息子｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n0eb96d5a3808"
    },
    {
        id: 5,
        title: "型破り日記を書こう",
        description: "",
        text: "### 🔻型破り日記を書こう｜【狸の話】",
        url: "https://note.com/danatanotanuki/n/n7cafb1ceec46"
    },
    {
        id: 6,
        title: "ふたつの沈黙",
        description: "",
        text: "### 🔻ふたつの沈黙｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/ne0955dedc65d"
    },
    {
        id: 7,
        title: "光の屈折",
        description: "",
        text: "### 🔻光の屈折｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n09e7d67d039b"
    },
    {
        id: 8,
        title: "白い世界の亀裂",
        description: "",
        text: "### 🔻白い世界の亀裂｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/naa923a978982"
    },
    {
        id: 9,
        title: "背負った森",
        description: "",
        text: "### 🔻背負った森｜【狸のSS】",
        url: "https://note.com/danatanotanuki/n/nd2dd74559e9a"
    },
    {
        id: 10,
        title: "棚田さんの夏休み",
        description: "",
        text: "### 🔻棚田さんの夏休み｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n2e2beafd4f71"
    },
    {
        id: 11,
        title: "素敵な記事はすぐそばに【共同運営マガジンメンバーさんの記事をご紹介】",
        description: "",
        text: "### 🔻素敵な記事はすぐそばに【共同運営マガジンメンバーさんの記事をご紹介】｜【狸の話】",
        url: "https://note.com/danatanotanuki/n/n91296ab44576"
    },
    {
        id: 12,
        title: "影をずらす、一歩だけ",
        description: "",
        text: "### 🔻影をずらす、一歩だけ｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n849483dc0bca"
    },
    {
        id: 13,
        title: "初恋のエンディングロール",
        description: "",
        text: "### 🔻初恋のエンディングロール｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n3dd457c72d1d"
    },
    {
        id: 14,
        title: "カミデンティティ",
        description: "",
        text: "### 🔻カミデンティティ｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n01715157a38e"
    },   
    {
        id: 4,
        title: "触れて、消えて",
        description: "",
        text: "### 🔻触れて、消えて｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/ncfc6663dfe44"
    },
    {
        id: 5,
        title: "可能性は無限大！AIアートの幅を広げるアートスタイルについて",
        description: "",
        text: "### 🔻可能性は無限大！AIアートの幅を広げるアートスタイルについて｜【狸の挑戦】",
        url: "https://note.com/danatanotanuki/n/naa6cf71a617d"
    },
    {
        id: 6,
        title: "胃袋のブラック企業",
        description: "",
        text: "### 🔻胃袋のブラック企業｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n78403f7b2adf"
    },
    {
        id: 7,
        title: "僕痛む、故に僕あり",
        description: "",
        text: "### 🔻僕痛む、故に僕あり｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n9d3084c257a1"
    },
    {
        id: 8,
        title: "熱のせい",
        description: "",
        text: "### 🔻熱のせい｜【狸の話】",
        url: "https://note.com/danatanotanuki/n/n73d645c1588c"
    },
    {
        id: 9,
        title: "【祝100本！】note投稿と共同運営マガジンが100本になりました！感謝を込めてメンバーさん記事をご紹介",
        description: "",
        text: "### 🔻【祝100本！】note投稿と共同運営マガジンが100本になりました！感謝を込めてメンバーさん記事をご紹介｜【狸の話】",
        url: "https://note.com/danatanotanuki/n/n73c4415d3a71"
    },
    {
        id: 10,
        title: "損切りできない回転寿司",
        description: "",
        text: "### 🔻損切りできない回転寿司｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/ne2148b4342b5"
    },
    {
        id: 11,
        title: "ジ・ガ",
        description: "",
        text: "### 🔻ジ・ガ｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n6b8eedb78cd9"
    },
    {
        id: 12,
        title: "顔面取引市場",
        description: "",
        text: "### 🔻顔面取引市場｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/nec85605fed5d"
    },
    {
        id: 13,
        title: "製造番号2587",
        description: "",
        text: "### 🔻製造番号2587｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n65f9deb582db"
    },
    {
        id: 14,
        title: "いやになる、あいうえお",
        description: "",
        text: "### 🔻いやになる、あいうえお｜【狸の話】",
        url: "https://note.com/danatanotanuki/n/n6f16284a3cbc"
    },
    {
        id: 15,
        title: "理由のない気持ち",
        description: "",
        text: "### 🔻理由のない気持ち｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n0c2f4127feb4"
    },
    {
        id: 16,
        title: "(770 + 1) ÷ 2",
        description: "",
        text: "### 🔻(770 + 1) ÷ 2 ｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/ncd5bdfe824a4"
    },
    {
        id: 17,
        title: "UN-lockers",
        description: "",
        text: "### 🔻UN-lockers｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n4adb680bcbff"
    },
    {
        id: 18,
        title: "片道きっぷのユニコーン",
        description: "",
        text: "### 🔻片道きっぷのユニコーン｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n09f26228398e"
    },
    {
        id: 19,
        title: "腹減った",
        description: "",
        text: "### 🔻腹減った｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n2fe2a9c5d24d"
    },
    {
        id: 20,
        title: "賢者の時間",
        description: "",
        text: "### 🔻賢者の時間｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/nb5dacf03b3d5"
    },
    {
        id: 21,
        title: "銀色のエクスタシー",
        description: "",
        text: "### 🔻銀色のエクスタシー｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/nb7c8f0af87c2"
    },
    {
        id: 22,
        title: "全員不幸になればいい",
        description: "",
        text: "### 🔻全員不幸になればいい｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n395535869c4f"
    },
    {
        id: 4,
        title: "陽実の円環",
        description: "",
        text: "### 🔻陽実の円環｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n5e8ca05ceb80"
    },
    {
        id: 5,
        title: "調和をもたらす刃",
        description: "",
        text: "### 🔻調和をもたらす刃｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n1a0483c97030"
    },
    {
        id: 6,
        title: "戻らないもの",
        description: "",
        text: "### 🔻戻らないもの｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n6a2af240708d"
    },
    {
        id: 4,
        title: "はかる",
        description: "", // ←後からキーワードを追加できます
        text: "### 🔻はかる｜【狸の話】",
        url: "https://note.com/danatanotanuki/n/n88f55962e858"
    },
    {
        id: 5,
        title: "舞う君へ",
        description: "",
        text: "### 🔻舞う君へ｜【狸のジャ・ジャーマニー】",
        url: "https://note.com/danatanotanuki/n/n115340dbedb6"
    },
    {
        id: 6,
        title: "求めるもの",
        description: "",
        text: "### 🔻求めるもの｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/nfbe4e6789527"
    },
    {
        id: 7,
        title: "盲目の善意",
        description: "",
        text: "### 🔻盲目の善意｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n4ad1587d5101"
    },
    {
        id: 8,
        title: "剥がれ落ちた泥",
        description: "",
        text: "### 🔻剥がれ落ちた泥｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/nee25f63d9683"
    },
    {
        id: 9,
        title: "空き地からの眺め",
        description: "",
        text: "### 🔻空き地からの眺め｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n56662c0ed149"
    },
    {
        id: 10,
        title: "希望の猛毒",
        description: "",
        text: "### 🔻希望の猛毒｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n144ba1d2f970"
    },
    {
        id: 11,
        title: "空白の盗難",
        description: "",
        text: "### 🔻空白の盗難｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n69f2b17d1724"
    },
    {
        id: 12,
        title: "終焉庭園の螺旋",
        description: "",
        text: "### 🔻終焉庭園の螺旋｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n555082dc31e8"
    },
    {
        id: 13,
        title: "泡沫の輪郭線",
        description: "",
        text: "### 🔻泡沫の輪郭線｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n641a608e5697"
    },
    {
        id: 14,
        title: "赦しは無音の中に",
        description: "",
        text: "### 🔻赦しは無音の中に｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n0080ddcdf7eb"
    },
    {
        id: 15,
        title: "偶像人形は空転する",
        description: "",
        text: "### 🔻偶像人形は空転する｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n30aa20568156"
    },
    {
        id: 16,
        title: "静寂のオーバードーズ",
        description: "",
        text: "### 🔻静寂のオーバードーズ｜【狸の掌編】",
        url: "https://note.com/danatanotanuki/n/nd4a0ee267c37"
    },
    {
        id: 17,
        title: "星は脇の下で輝く",
        description: "",
        text: "### 🔻星は脇の下で輝く｜【狸の掌編】",
        url: "https://note.com/danatanotanuki/n/n98e76d8a21d7"
    },
    {
        id: 18,
        title: "夏の・夏の大三角",
        description: "",
        text: "### 🔻夏の・夏の大三角｜【狸の掌編】",
        url: "https://note.com/danatanotanuki/n/n68cdd9b9621d"
    }
];

// --- 2. HTML要素の取得 ---
const searchBox = document.getElementById('search-box');
const resultsList = document.getElementById('results-list');
const feedback = document.getElementById('feedback');

// --- 3. クリップボードにコピーする関数 ---
async function copyToClipboard(text, button) {
    try {
        await navigator.clipboard.writeText(text);
        
        // フィードバックを表示
        feedback.classList.remove('feedback-hidden');
        
        // 1.5秒後にフィードバックを非表示にする
        setTimeout(() => {
            feedback.classList.add('feedback-hidden');
        }, 1500);

    } catch (err) {
        console.error('クリップボードへのコピーに失敗しました', err);
        alert('コピーに失敗しました。');
    }
}


// --- 4. 検索結果を描画（表示）する関数 ---
function renderResults(results) {
    // まずリストを空にする
    resultsList.innerHTML = '';

    if (results.length === 0) {
        resultsList.innerHTML = '<p>該当する項目がありません。</p>';
        return;
    }

    results.forEach(item => {
        // 各アイテムのHTML要素を作成
        const li = document.createElement('li');
        li.className = 'result-item';

        li.innerHTML = `
            <div class="item-content">
                <p><strong>${item.title}</strong></p>
                <p><span class="label">文字列:</span> ${item.text}</p>
                <p><span class="label">URL:</span> ${item.url}</p>
            </div>
            <div class="item-buttons">
                <button class="copy-button" data-type="text">文字列をコピー</button>
                <button class="copy-button" data-type="url">URLをコピー</button>
            </div>
        `;
        
        // 作成した要素をリストに追加
        resultsList.appendChild(li);

        // 各ボタンにイベントリスナーを設定
        const buttons = li.querySelectorAll('.copy-button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const type = button.getAttribute('data-type');
                if (type === 'text') {
                    copyToClipboard(item.text, button);
                } else if (type === 'url') {
                    copyToClipboard(item.url, button);
                }
            });
        });
    });
}

// --- 5. 検索を実行する関数 ---
function performSearch() {
    const query = searchBox.value.toLowerCase(); // 検索語を小文字に統一

    // 検索語が空なら全件表示
    if (!query) {
        renderResults(dataStore);
        return;
    }

    // フィルタリング
    const filteredResults = dataStore.filter(item => {
        // title, description, text, url のいずれかにキーワードが含まれていればOK
        return (
            item.title.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            item.text.toLowerCase().includes(query) ||
            item.url.toLowerCase().includes(query)
        );
    });

    renderResults(filteredResults);
}

// --- 6. イベントリスナーの設定 ---
// 検索ボックスに入力があるたびに検索を実行
searchBox.addEventListener('input', performSearch);

// 最初にページが読み込まれたときに全データを表示
document.addEventListener('DOMContentLoaded', () => {
    performSearch();
});
