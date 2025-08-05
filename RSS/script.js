// HTMLの要素を取得
const rssInput = document.getElementById('rss-input');
const convertButton = document.getElementById('convert-button');
const outputCode = document.getElementById('output-code');
const copyButton = document.getElementById('copy-button');

// 「変換実行」ボタンがクリックされたときの処理
convertButton.addEventListener('click', () => {
    // 1. 入力されたRSSテキストを取得
    const rssText = rssInput.value;
    if (!rssText.trim()) {
        alert('RSSデータを入力してください。');
        return;
    }

    // 2. DOMParserを使ってXML文字列を解析
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(rssText, "application/xml");

    // 解析エラーがないかチェック
    const parseError = xmlDoc.querySelector("parsererror");
    if (parseError) {
        alert("RSSデータの解析に失敗しました。貼り付けた内容を確認してください。");
        console.error(parseError);
        return;
    }

    // 3. 全ての <item> タグを取得
    const items = xmlDoc.querySelectorAll("item");
    if (items.length === 0) {
        alert('RSS内に <item> が見つかりませんでした。');
        return;
    }

    // 4. 各itemから情報を抽出し、指定の形式に整形
    let generatedCode = [];
    const baseId = 4; // あなたの例に合わせてIDの開始番号を4に設定

    items.forEach((item, index) => {
        // 各要素からテキスト内容を取得
        const fullTitle = item.querySelector("title").textContent;
        const url = item.querySelector("link").textContent;
        const pubDate = item.querySelector("pubDate").textContent;

        // タイトルを「｜」で分割して、メインタイトル部分だけを抽出
        // 例: "はかる｜【狸の話】" -> "はかる"
        const simplifiedTitle = fullTitle.split('｜')[0].trim();

        // 指定された形式のオブジェクト文字列を生成
        const codeObject = `
    {
        id: ${baseId + index},
        title: "${simplifiedTitle}",
        description: "", // descriptionは空欄
        text: "### 🔻${fullTitle}",
        url: "${url}"
        // 抽出した投稿時間: ${pubDate}
    },`;
        
        generatedCode.push(codeObject);
    });

    // 5. 整形したコードを出力エリアに表示
    // 最後のカンマを削除し、配列の括弧で囲む
    outputCode.value = `// --- ここから下をコピーして dataStore に貼り付け ---
[
${generatedCode.join('').slice(0, -1)}
]`;
});


// 「結果をコピー」ボタンがクリックされたときの処理
copyButton.addEventListener('click', () => {
    if (!outputCode.value) {
        alert('先に変換を実行してください。');
        return;
    }
    navigator.clipboard.writeText(outputCode.value)
        .then(() => {
            alert('クリップボードにコピーしました！');
        })
        .catch(err => {
            alert('コピーに失敗しました。');
            console.error('Copy failed: ', err);
        });
});
