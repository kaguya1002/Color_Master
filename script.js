// --- データベース ---
// 3級のカラーデータ
const grade3Colors = [
    { name: "藍", hex: "#165e83", grade: "3級" },
    { name: "アイボリー", hex: "#f8f4e6", grade: "3級" },
    { name: "茜", hex: "#b7282e", grade: "3級" },
    { name: "浅葱", hex: "#00a3af", grade: "3級" },
    { name: "ウルトラマリンブルー", hex: "#4753a2", grade: "3級" },
    { name: "エメラルドグリーン", hex: "#00a968", grade: "3級" },
    { name: "黄土", hex: "#c39143", grade: "3級" },
    { name: "オリーブ", hex: "#808000", grade: "3級" },
    { name: "オリーブグリーン", hex: "#6b8e23", grade: "3級" },
    { name: "カーキ", hex: "#7b6f3e", grade: "3級" },
    { name: "カーマイン", hex: "#d70035", grade: "3級" },
    { name: "牡丹", hex: "#e7609e", grade: "3級" },
    { name: "カナリア", hex: "#fff462", grade: "3級" },
    { name: "芥子", hex: "#d3a243", grade: "3級" },
    { name: "桔梗", hex: "#5654a2", grade: "3級" },
    { name: "生成り色", hex: "#fbfaf5", grade: "3級" },
    { name: "クリームイエロー", hex: "#fff3b8", grade: "3級" },
    { name: "栗", hex: "#762f07", grade: "3級" },
    { name: "群青", hex: "#4c6cb3", grade: "3級" },
    { name: "紅梅", hex: "#e597b2", grade: "3級" },
    { name: "コバルトグリーン", hex: "#3cb371", grade: "3級" },
    { name: "コバルトブルー", hex: "#0068b7", grade: "3級" },
    { name: "サーモンピンク", hex: "#f3a68c", grade: "3級" },
    { name: "桜", hex: "#fef4f4", grade: "3級" },
    { name: "珊瑚", hex: "#ea5550", grade: "3級" },
    { name: "シアン", hex: "#00a1e9", grade: "3級" },
    { name: "朱", hex: "#ef454a", grade: "3級" },
    { name: "シルバーグレイ", hex: "#afafb0", grade: "3級" },
    { name: "スカーレット", hex: "#ea5532", grade: "3級" },
    { name: "スカイブルー", hex: "#a0d8ef", grade: "3級" },
    { name: "青磁", hex: "#7ebea5", grade: "3級" },
    { name: "セピア", hex: "#622d18", grade: "3級" },
    { name: "空", hex: "#a0d8ef", grade: "3級" },
    { name: "ターコイズブルー", hex: "#00afcc", grade: "3級" },
    { name: "チャコールグレイ", hex: "#4e454a", grade: "3級" },
    { name: "チョコレート", hex: "#6c3524", grade: "3級" },
    { name: "茄子紺", hex: "#412a3c", grade: "3級" },
    { name: "ネイビーブルー", hex: "#202f55", grade: "3級" },
    { name: "パープル", hex: "#884898", grade: "3級" },
    { name: "バーミリオン", hex: "#ea553a", grade: "3級" },
    { name: "バイオレット", hex: "#714f9d", grade: "3級" },
    { name: "ピーチ", hex: "#fbd8b5", grade: "3級" },
    { name: "ビリジアン", hex: "#00885a", grade: "3級" },
    { name: "ブロンド", hex: "#f2d58a", grade: "3級" },
    { name: "ベージュ", hex: "#eedcb3", grade: "3級" },
    { name: "ベビーピンク", hex: "#fadbda", grade: "3級" },
    { name: "ベビーブルー", hex: "#bbdbf3", grade: "3級" },
    { name: "ボルドー", hex: "#6c272d", grade: "3級" },
    { name: "マゼンタ", hex: "#e4007f", grade: "3級" },
    { name: "松葉", hex: "#839b5c", grade: "3級" },
    { name: "マリーゴールド", hex: "#f39800", grade: "3級" },
    { name: "マリンブルー", hex: "#006888", grade: "3級" },
    { name: "モーブ", hex: "#915da3", grade: "3級" },
    { name: "萌黄", hex: "#aacf53", grade: "3級" },
    { name: "山吹", hex: "#f8b500", grade: "3級" },
    { name: "ラベンダー", hex: "#c7b8ea", grade: "3級" },
    { name: "瑠璃", hex: "#1d50a2", grade: "3級" },
    { name: "レモンイエロー", hex: "#fff352", grade: "3級" },
    { name: "煉瓦", hex: "#b55233", grade: "3級" },
    { name: "ワインレッド", hex: "#722f37", grade: "3級" },
    { name: "若竹", hex: "#68be8d", grade: "3級" },

    // 追加
    { name: "鶯色", hex: "#6f6f44", grade: "3級" },
    { name: "瑠璃色", hex: "#1d50a2", grade: "3級" },
    { name: "菖蒲色", hex: "#6f4b3e", grade: "3級" },
    { name: "杜若色", hex: "#5e3862", grade: "3級" }
];
// 2級のカラーデータ
const grade2Colors = [
    { name: "アップルグリーン", hex: "#a7d28d", grade: "2級" },
    { name: "アンバー", hex: "#c2894b", grade: "2級" },
    { name: "ウィスタリア", hex: "#8d93c8", grade: "2級" },
    { name: "鬱金", hex: "#fabf14", grade: "2級" },
    { name: "エクルベージュ", hex: "#f7d9b1", grade: "2級" },
    { name: "江戸紫", hex: "#745399", grade: "2級" },
    { name: "海老茶", hex: "#773c30", grade: "2級" },
    { name: "オールドローズ", hex: "#c08081", grade: "2級" },
    { name: "黄丹", hex: "#ee7948", grade: "2級" },
    { name: "瓶覗", hex: "#a2d7dd", grade: "2級" },
    { name: "韓紅花", hex: "#ea8988", grade: "2級" },
    { name: "刈安", hex: "#f5e56b", grade: "2級" },
    { name: "黄檗", hex: "#fef263", grade: "2級" },
    { name: "銀鼠", hex: "#91989f", grade: "2級" },
    { name: "朽葉", hex: "#917347", grade: "2級" },
    { name: "グラスグリーン", hex: "#7b8d42", grade: "2級" },
    { name: "ゴールデンイエロー", hex: "#f6ae54", grade: "2級" },
    { name: "柑子", hex: "#f6ad49", grade: "2級" },
    { name: "古代紫", hex: "#895b8a", grade: "2級" },
    { name: "琥珀", hex: "#bf783a", grade: "2級" },
    { name: "サックスブルー", hex: "#5a9bd5", grade: "2級" },
    { name: "シャトルーズグリーン", hex: "#9acd32", grade: "2級" },
    { name: "ジョンブリアン", hex: "#f8e58c", grade: "2級" },
    { name: "新橋", hex: "#59b9c6", grade: "2級" },
    { name: "蘇芳", hex: "#8e354a", grade: "2級" },
    { name: "煤竹", hex: "#5c4438", grade: "2級" },
    { name: "スレートグレイ", hex: "#626063", grade: "2級" },
    { name: "セルリアンブルー", hex: "#008db7", grade: "2級" },
    { name: "代赭", hex: "#9f563a", grade: "2級" },
    { name: "タン", hex: "#c19a6b", grade: "2級" },
    { name: "茶鼠", hex: "#a16d5d", grade: "2級" },
    { name: "鉄", hex: "#005243", grade: "2級" },
    { name: "テラコッタ", hex: "#bd6856", grade: "2級" },
    { name: "鴇", hex: "#f5b1aa", grade: "2級" },
    { name: "常盤", hex: "#007b43", grade: "2級" },
    { name: "鳶", hex: "#7a380f", grade: "2級" },
    { name: "ナイルブルー", hex: "#2c4f54", grade: "2級" },
    { name: "納戸", hex: "#166a88", grade: "2級" },
    { name: "ネープルスイエロー", hex: "#fdd35c", grade: "2級" },
    { name: "バーガンディ", hex: "#6c2735", grade: "2級" },
    { name: "バーントアンバー", hex: "#6f5436", grade: "2級" },
    { name: "バーントシェンナ", hex: "#d0826c", grade: "2級" },
    { name: "縹", hex: "#2792c3", grade: "2級" },
    { name: "ピーコックグリーン", hex: "#008e74", grade: "2級" },
    { name: "鶸", hex: "#d7cf3a", grade: "2級" },
    { name: "桧皮", hex: "#7b4741", grade: "2級" },
    { name: "藤", hex: "#a59aca", grade: "2級" },
    { name: "弁柄", hex: "#8f2e14", grade: "2級" },
    { name: "ボトルグリーン", hex: "#004d25", grade: "2級" },
    { name: "ポピーレッド", hex: "#ea5550", grade: "2級" },
    { name: "マラカイトグリーン", hex: "#009854", grade: "2級" },
    { name: "マルーン", hex: "#6c1f2f", grade: "2級" },
    { name: "ミッドナイトブルー", hex: "#1a1a4b", grade: "2級" },
    { name: "海松", hex: "#726d40", grade: "2級" },
    { name: "ミントグリーン", hex: "#89c997", grade: "2級" },
    { name: "ライラック", hex: "#d1bada", grade: "2級" },
    { name: "ランプブラック", hex: "#24140e", grade: "2級" },
    { name: "リーフグリーン", hex: "#9fc24d", grade: "2級" },
    { name: "利休鼠", hex: "#888e7e", grade: "2級" },
    { name: "ローアンバー", hex: "#7b6449", grade: "2級" },
    { name: "ローシェンナ", hex: "#b86f40", grade: "2級" },
    { name: "ローズピンク", hex: "#f19ca7", grade: "2級" },
    { name: "緑青", hex: "#47885e", grade: "2級" }
];


const masterData = [...grade3Colors, ...grade2Colors];
// レベルごとの「目標出題間隔（解いた問題数）」
const TARGET_INTERVALS = [0, 5, 15, 40, 100, 300, 1000]; 

// --- 状態管理 ---
let quizList = [];
let currentIdx = 0;
let correctCount = 0;
let isAnswered = false;
let currentMode = 'typing';
let currentProgressType = 'typing';

let rawData = JSON.parse(localStorage.getItem('colorSrsData')) || {};
if (!rawData.typing) {
    rawData = { typing: rawData, choice: {} };
}
let progress = rawData;
let totalAnsweredCount = JSON.parse(localStorage.getItem('totalAnsweredCount')) || 0;

window.onload = () => {
    updateProgressDisplay();
};

// --- RGB距離・明るさ計算 ---
function hexToRgb(hex) {
    let bigint = parseInt(hex.slice(1), 16);
    return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
}
function getColorDistance(hex1, hex2) {
    let c1 = hexToRgb(hex1);
    let c2 = hexToRgb(hex2);
    return Math.sqrt(Math.pow(c1.r - c2.r, 2) + Math.pow(c1.g - c2.g, 2) + Math.pow(c1.b - c2.b, 2));
}
// 背景色から文字色（白か黒）を判断する関数
function getContrastYIQ(hexcolor){
    let rgb = hexToRgb(hexcolor);
    let yiq = ((rgb.r*299)+(rgb.g*587)+(rgb.b*114))/1000;
    return (yiq >= 128) ? '#2c3e50' : '#ffffff';
}

function switchProgressTab(type) {
    currentProgressType = type;
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    updateStats();
}

function updateProgressDisplay() {
    const modeSelect = document.getElementById('mode-select').value;
    currentProgressType = modeSelect === 'typing' ? 'typing' : 'choice';
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.innerText.includes(currentProgressType === 'typing' ? 'タイピング' : '4択'));
    });
    updateStats();
}

function resetProgress() {
    if(confirm("学習の進捗をすべてリセットしますか？この操作は取り消せません。")) {
        progress = { typing: {}, choice: {} };
        totalAnsweredCount = 0;
        localStorage.removeItem('colorSrsData');
        localStorage.removeItem('totalAnsweredCount');
        updateStats();
        alert("進捗をリセットしました。");
    }
}

function initiateQuiz() {
    const grade = document.getElementById('grade-select').value;
    const limitInput = document.getElementById('count-select').value;
    currentMode = document.getElementById('mode-select').value;
    currentProgressType = currentMode === 'typing' ? 'typing' : 'choice';
    
    let pool = masterData.filter(c => {
        if (grade === 'both') return true;
        if (grade === 'grade2') return c.grade === '2級';
        if (grade === 'grade3') return c.grade === '3級';
        return false;
    });
    
    const limit = limitInput === 'all' ? pool.length : parseInt(limitInput);
    let selectedSet = [];
    let tempPool = [...pool];
    const currentProgData = progress[currentProgressType];

    for (let i = 0; i < limit; i++) {
        if (tempPool.length === 0) break;
        const weightedItems = tempPool.map(color => {
            const p = currentProgData[color.name];
            let weight = 15;
            if (p) {
                const elapsed = totalAnsweredCount - p.lastSeenCount;
                const target = TARGET_INTERVALS[p.level] || 1;
                weight = Math.min((elapsed / target) * 10, 150); 
            }
            return { color, weight };
        });

        const totalWeight = weightedItems.reduce((sum, item) => sum + item.weight, 0);
        let random = Math.random() * totalWeight;
        
        for (const item of weightedItems) {
            random -= item.weight;
            if (random <= 0) {
                selectedSet.push(item.color);
                tempPool = tempPool.filter(c => c.name !== item.color.name);
                break;
            }
        }
    }

    if (selectedSet.length === 0) {
        alert("学習対象の色がありません。");
        return;
    }

    quizList = selectedSet;
    startQuiz();
}

function startQuiz() {
    currentIdx = 0;
    correctCount = 0;
    switchScreen('quiz-screen');
    showQuestion();
}

function showQuestion() {
    isAnswered = false;
    const q = quizList[currentIdx];
    // "choice_reverse" で始まるかどうかで逆引きを判定
    const isReverse = currentMode.startsWith('choice_reverse');
    
    document.getElementById('badge').innerText = q.grade;
    document.getElementById('counter').innerText = `${currentIdx + 1} / ${quizList.length}`;
    document.getElementById('progress-bar').style.width = `${((currentIdx + 1) / quizList.length) * 100}%`;
    
    document.getElementById('result-msg').innerText = "";
    document.getElementById('correct-name').innerText = "";
    document.getElementById('action-btn').classList.add('hidden');
    
    const colorCard = document.getElementById('color-card');
    const reverseText = document.getElementById('reverse-question');
    const typingArea = document.getElementById('typing-area');
    const choiceArea = document.getElementById('choice-area');

    if (isReverse) {
        colorCard.classList.add('hidden');
        reverseText.classList.remove('hidden');
        reverseText.innerText = q.name;
    } else {
        colorCard.classList.remove('hidden');
        reverseText.classList.add('hidden');
        colorCard.style.backgroundColor = q.hex;
    }

    if (currentMode === 'typing') {
        typingArea.classList.remove('hidden');
        choiceArea.classList.add('hidden');
        const input = document.getElementById('answer-input');
        input.value = "";
        input.readOnly = false;
        document.getElementById('action-btn').innerText = "判定する";
        document.getElementById('action-btn').classList.remove('hidden');
        setTimeout(() => input.focus(), 10);
    } else {
        typingArea.classList.add('hidden');
        choiceArea.classList.remove('hidden');
        generateChoices(q, isReverse);
        
        const idkBtn = document.getElementById('idk-btn');
        if (idkBtn) idkBtn.classList.remove('disabled');
    }
}

function generateChoices(correctColor, isReverse) {
    let pool = masterData.filter(c => c.name !== correctColor.name);
    let choices = [];
    // "similar" で終わるかどうかで似ている色モードを判定
    const isSimilar = currentMode.endsWith('similar');

    if (isSimilar) {
        pool.sort((a, b) => getColorDistance(correctColor.hex, a.hex) - getColorDistance(correctColor.hex, b.hex));
        let topSimilar = pool.slice(0, 10).sort(() => 0.5 - Math.random());
        choices = topSimilar.slice(0, 3);
    } else {
        pool.sort(() => 0.5 - Math.random());
        choices = pool.slice(0, 3);
    }

    choices.push(correctColor);
    choices.sort(() => 0.5 - Math.random()); 

    const grid = document.getElementById('choice-grid');
    grid.innerHTML = "";

    choices.forEach(c => {
        const btn = document.createElement('button');
        // 回答後の開示のためにデータを埋め込む
        btn.dataset.name = c.name;
        btn.dataset.hex = c.hex;

        if (isReverse) {
            btn.className = 'color-choice-btn';
            btn.style.backgroundColor = c.hex;
        } else {
            btn.className = 'choice-btn';
            btn.innerText = c.name;
        }
        btn.onclick = () => submitChoice(c.name, btn);
        grid.appendChild(btn);
    });
}

function normalizeString(str) {
    return str.replace(/色$/, "").trim();
}

function handleNext() {
    if (!isAnswered && currentMode === 'typing') checkTypingAnswer();
    else if (isAnswered) nextQuestion();
}

function checkTypingAnswer() {
    const input = document.getElementById('answer-input').value;
    processAnswer(input);
    document.getElementById('answer-input').readOnly = true;
}

function submitChoice(selectedName, btnElement = null) {
    if (isAnswered) return;
    const isReverse = currentMode.startsWith('choice_reverse');
    const q = quizList[currentIdx];

    document.querySelectorAll('#choice-grid button').forEach(b => {
        b.classList.add('disabled');
        
        // 選択肢の正体をすべて開示
        if (isReverse) {
            b.innerHTML = `<span style="color: ${getContrastYIQ(b.dataset.hex)}; font-size: 1.1rem; font-weight: bold; text-shadow: 0 0 3px rgba(255,255,255,0.4);">${b.dataset.name}</span>`;
        } else {
            b.style.backgroundColor = b.dataset.hex;
            b.style.color = getContrastYIQ(b.dataset.hex);
            b.style.borderColor = "transparent";
        }

        // 正解のボタンには緑の太枠をつける
        if (b.dataset.name === q.name) {
            b.style.boxShadow = "0 0 0 5px var(--success) inset";
        }
    });
    
    // 間違えた選択肢を選んでいた場合（かつボタン要素が存在する場合）は赤の太枠をつける
    if (btnElement && selectedName !== q.name) {
        btnElement.style.boxShadow = "0 0 0 5px var(--error) inset";
    }

    // 「分からない」ボタンを無効化
    const idkBtn = document.getElementById('idk-btn');
    if (idkBtn) idkBtn.classList.add('disabled');

    processAnswer(selectedName);
}

function processAnswer(inputName) {
    const q = quizList[currentIdx];
    const isCorrect = (normalizeString(inputName) === normalizeString(q.name));

    isAnswered = true;
    totalAnsweredCount++;
    localStorage.setItem('totalAnsweredCount', totalAnsweredCount);

    let currentProgData = progress[currentProgressType];
    let p = currentProgData[q.name] || { level: 0 };
    p.lastSeenCount = totalAnsweredCount;

    if (isCorrect) {
        correctCount++;
        p.level = Math.min(p.level + 1, TARGET_INTERVALS.length - 1);
        document.getElementById('result-msg').innerText = "✓ Correct";
        document.getElementById('result-msg').style.color = "var(--success)";
    } else {
        p.level = 0; 
        document.getElementById('result-msg').innerText = inputName === "" ? "⊘ Skipped" : "✗ Incorrect";
        document.getElementById('result-msg').style.color = "var(--error)";
        document.getElementById('correct-name').innerText = `正解: ${q.name}`;
        
        if(currentMode.startsWith('choice_reverse')) {
            document.getElementById('color-card').classList.remove('hidden');
            document.getElementById('color-card').style.backgroundColor = q.hex;
            document.getElementById('color-card').style.height = "100px";
        }
    }

    currentProgData[q.name] = p;
    localStorage.setItem('colorSrsData', JSON.stringify(progress));

    document.getElementById('action-btn').innerText = "次へ進む (Enter)";
    document.getElementById('action-btn').classList.remove('hidden');
}

function nextQuestion() {
    currentIdx++;
    document.getElementById('color-card').style.height = "280px";
    if (currentIdx < quizList.length) {
        showQuestion();
    } else {
        showFinalResult();
    }
}

function showFinalResult() {
    switchScreen('result-screen');
    updateStats();
    document.getElementById('correct-count').innerText = correctCount;
    document.getElementById('total-count').innerText = quizList.length;
    document.getElementById('accuracy-val').innerText = Math.round((correctCount / quizList.length) * 100);
}

function updateStats() {
    let n = 0, l = 0, m = 0;
    const currentProgData = progress[currentProgressType];
    
    masterData.forEach(c => {
        const p = currentProgData[c.name];
        if (!p) n++;
        else if (p.level >= 5) m++;
        else l++;
    });
    document.getElementById('stat-new').innerText = n;
    document.getElementById('stat-learning').innerText = l;
    document.getElementById('stat-mastered').innerText = m;
}

function switchScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

function returnToHome() {
    updateStats();
    switchScreen('setup-screen');
}

document.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.isComposing) {
        const quizScreen = document.getElementById('quiz-screen');
        if (!quizScreen.classList.contains('hidden')) {
            handleNext();
        }
    }
});

// --- 色一覧機能 ---
function showColorList() {
    switchScreen('list-screen');
    renderColorList('3級'); // デフォルトは3級を表示
}

function renderColorList(grade) {
    // タブの切り替え
    document.getElementById('tab-grade3').classList.toggle('active', grade === '3級');
    document.getElementById('tab-grade2').classList.toggle('active', grade === '2級');

    const container = document.getElementById('color-list-container');
    container.innerHTML = '';
    
    // リストが切り替わったらスクロール位置をトップに戻す
    container.scrollTop = 0;

    const targetColors = grade === '3級' ? grade3Colors : grade2Colors;

    targetColors.forEach(c => {
        const item = document.createElement('div');
        item.className = 'color-list-item';
        
        const swatch = document.createElement('div');
        swatch.className = 'color-list-swatch';
        swatch.style.backgroundColor = c.hex;

        const name = document.createElement('div');
        name.className = 'color-list-name';
        name.innerText = c.name;

        item.appendChild(swatch);
        item.appendChild(name);
        container.appendChild(item);
    });
}

// --- 進捗別一覧機能 ---
function showStatusList(statusType) {
    // 画面を切り替え
    switchScreen('status-list-screen');
    
    const container = document.getElementById('status-list-container');
    const title = document.getElementById('status-list-title');
    
    // 中身とスクロールをリセット
    container.innerHTML = '';
    container.scrollTop = 0;

    // 現在のタブ（タイピング or 4択）の進捗データを取得
    const currentProgData = progress[currentProgressType];
    let targetColors = [];
    let titleText = "";

    // ステータスに合わせて色をフィルタリング
    if (statusType === 'new') {
        titleText = "未学習の色";
        targetColors = masterData.filter(c => !currentProgData[c.name]);
    } else if (statusType === 'learning') {
        titleText = "学習中の色";
        targetColors = masterData.filter(c => currentProgData[c.name] && currentProgData[c.name].level < 5);
    } else if (statusType === 'mastered') {
        titleText = "定着済みの色";
        targetColors = masterData.filter(c => currentProgData[c.name] && currentProgData[c.name].level >= 5);
    }

    // タイトルに件数も表示する
    title.innerText = `${titleText} (${targetColors.length}色)`;

    // 該当する色がない場合のメッセージ
    if (targetColors.length === 0) {
        container.innerHTML = '<p style="text-align:center; width:100%; color:var(--sub-text); margin-top: 20px;">該当する色がありません。</p>';
        return;
    }

    // 色カードを生成してコンテナに追加 (辞書機能の使い回し)
    // === ここから差し替え ===
    targetColors.forEach(c => {
        const item = document.createElement('div');
        item.className = 'color-list-item';
        
        const swatch = document.createElement('div');
        swatch.className = 'color-list-swatch';
        swatch.style.backgroundColor = c.hex;

        const name = document.createElement('div');
        name.className = 'color-list-name';
        name.innerText = c.name;

        // ★修正ポイント：データが存在するか安全に確認してレベルを取得
        const currentProgData = progress[currentProgressType]; // 確実にデータを取得
        const level = (currentProgData && currentProgData[c.name]) ? currentProgData[c.name].level : 0;

        // レベルバッジを作成
        const levelBadge = document.createElement('div');
        levelBadge.className = 'level-badge';
        levelBadge.innerText = `Lv.${level}`;

        // 要素を合体させる
        item.appendChild(swatch);
        item.appendChild(name);
        item.appendChild(levelBadge); // ★バッジを追加
        container.appendChild(item);
    });
    // === ここまで ===
}
