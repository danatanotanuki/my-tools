// HTMLの要素を取得
const rssInput = document.getElementById('rss-input');
const convertButton = document.getElementById('convert-button');
const outputCode = document.getElementById('output-code');
const copyButton = document.getElementById('copy-button');

// 「変換実行」ボタンがクリックされたときの処理
convertButton.addEventListener('click', () => {
    const rssText = rssInput.value;
    if (!rssText.trim()) {
        alert('RSSデータを入力してください。');
        return;
    }

    // 1. 正規表現で、<item> と </item> で囲まれた部分をすべて探し出す
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    const items = rssText.match(itemRegex);

    if (!items) {
        alert('RSSデータ内に <item> が見つかりませんでした。');
        return;
    }

    // 2. 抽出した各itemから、さらに情報を抜き出す
    let generatedCode = [];
    const baseId = 4; // IDの開始番号

    items.forEach((itemText, index) => {
        // titleを探すための正規表現
        const titleRegex = /<title>([\s\S]*?)<\/title>/;
        // linkを探すための正規表現
        const linkRegex = /<link>([\s\S]*?)<\/link>/;

        // 正規表現を使って、実際に文字列を探す
        const titleMatch = itemText.match(titleRegex);
        const linkMatch = itemText.match(linkRegex);

        // titleとlinkの両方が見つかった場合のみ処理する
        if (titleMatch && linkMatch) {
            // マッチした部分の[1]番目（カッコの中身）が欲しい情報
            const fullTitle = titleMatch[1].trim();
            const url = linkMatch[1].trim();

            // 3. 情報を元に、指定の形式のコードを組み立てる
            const simplifiedTitle = fullTitle.split('｜')[0].trim();
            const codeObject = `
    {
        id: ${baseId + index},
        title: "${simplifiedTitle}",
        description: "",
        text: "### 🔻${fullTitle}",
        url: "${url}"
    },`;
            generatedCode.push(codeObject);
        }
    });

    if (generatedCode.length === 0) {
        alert('itemの中からtitleとlinkを抽出できませんでした。');
        return;
    }

    // 4. 整形したコードを出力エリアに表示
    outputCode.value = `// --- ここから下をコピーして dataStore に貼り付け ---
${generatedCode.join('')}`;
});


// 「結果をコピー」ボタンの処理（変更なし）
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
