function loadQuizlet(mode) {
    const baseUrl = document.getElementById('quizletSelect').value;
    const iframe = document.getElementById('quizletIframe');

    // モードに応じて iframe の高さを変更
    let height;
    if (mode === 'flash-cards') {
        height = '500px';
    } else if (mode === 'learn') {
        height = '700px';  // 学習モードは少し高め
    } else if (mode === 'test') {
        height = '700px';  // テストモードは700に変更
    } else if (mode === 'match') {
        height = '500px';  // マッチは低め
    }

    // iframe の高さと src を更新
    iframe.style.height = height;
    iframe.src = `${baseUrl}/${mode}/embed?i=x8lug&x=1jj1`;

    // iframeを表示
    iframe.style.display = 'block';
}

function updateQuizletOptions() {
    const yearSelect = document.getElementById('yearSelect').value;
    const quizletSelect = document.getElementById('quizletSelect');

    // 年次に応じた選択肢を変更
    quizletSelect.innerHTML = ''; // 選択肢をリセット

    if (yearSelect === '1') {
        const option1 = document.createElement('option');
        option1.value = 'https://quizlet.com/938455135';
        option1.text = '１ねんせい　BAB1 ① perkataan baru';
        quizletSelect.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = 'https://quizlet.com/940236382';
        option2.text = '１ねんせい　BAB2 ① perkara di sekeliling anda';
        quizletSelect.appendChild(option2);

        const option3 = document.createElement('option');
        option3.value = 'https://quizlet.com/940317761';
        option3.text = '１ねんせい　BAB2 ② keluarga';
        quizletSelect.appendChild(option3);

        const option4 = document.createElement('option');
        option4.value = 'https://quizlet.com/940323610/';
        option4.text = '１ねんせい　BAB2 ③ kerja';
        quizletSelect.appendChild(option4);

        const option5 = document.createElement('option');
        option5.value = 'https://quizlet.com/940382433/';
        option5.text = '１ねんせい　BAB3 ① pelbagai tempat di sekolah';
        quizletSelect.appendChild(option5);

        const option6 = document.createElement('option');
        option6.value = 'https://quizlet.com/940391506/';
        option6.text = '１ねんせい　BAB3 ② bilik darjah';
        quizletSelect.appendChild(option6);

        const option7 = document.createElement('option');
        option7.value = 'https://quizlet.com/940395843/';
        option7.text = '１ねんせい　BAB4 ① kata nama baru';
        quizletSelect.appendChild(option7);

        const option8 = document.createElement('option');
        option8.value = 'https://quizlet.com/940407961/';
        option8.text = '１ねんせい　BAB4 ② kata kerja baru';
        quizletSelect.appendChild(option8);

        const option9 = document.createElement('option');
        option9.value = 'https://quizlet.com/940415362/';
        option9.text = '１ねんせい　BAB5 ① aktiviti';
        quizletSelect.appendChild(option9);

        const option10 = document.createElement('option');
        option10.value = 'https://quizlet.com/940425132/';
        option10.text = '１ねんせい　BAB5 ② makanan dan tempat';
        quizletSelect.appendChild(option10);

        const option11 = document.createElement('option');
        option11.value = 'https://quizlet.com/940430463/';
        option11.text = '１ねんせい　BAB5 ③ Kandungan pembelajaran, emosi, dsb.';
        quizletSelect.appendChild(option11);

    } else if (yearSelect === '2') {
        const option1 = document.createElement('option');
        option1.value = 'https://quizlet.com/940786624/';
        option1.text = '２年生　BAB6 ① kata nama dan kata adjektif';
        quizletSelect.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = 'https://quizlet.com/940791142/';
        option2.text = '２年生　BAB6 ② kata adjektif';
        quizletSelect.appendChild(option2);

        const option3 = document.createElement('option');
        option3.value = 'https://quizlet.com/940801815/';
        option3.text = '２年生　BAB7 ① kata nama dan kata adjektif';
        quizletSelect.appendChild(option3);

        const option4 = document.createElement('option');
        option4.value = 'https://quizlet.com/940804927/';
        option4.text = '２年生　BAB7 ② haiwan';
        quizletSelect.appendChild(option4);

        const option5 = document.createElement('option');
        option5.value = 'https://quizlet.com/940808603/';
        option5.text = '２年生　BAB7 ③ Kata adjektif, kedudukan dan arah';
        quizletSelect.appendChild(option5);

        const option6 = document.createElement('option');
        option6.value = 'https://quizlet.com/940813245/';
        option6.text = '２年生　BAB8 ① kata nama dan kata kerja';
        quizletSelect.appendChild(option6);

        const option7 = document.createElement('option');
        option7.value = 'https://quizlet.com/940819573/';
        option7.text = '２年生　BAB9 ① kata nama atau kata kerja';
        quizletSelect.appendChild(option7);

        const option8 = document.createElement('option');
        option8.value = 'https://quizlet.com/940865729/';
        option8.text = '２年生　BAB9 ② kata adjektif';
        quizletSelect.appendChild(option8);

        const option9 = document.createElement('option');
        option9.value = 'https://quizlet.com/940868241/';
        option9.text = '２年生　BAB10 ① kata nama';
        quizletSelect.appendChild(option9);

        const option10 = document.createElement('option');
        option10.value = 'https://quizlet.com/940872259/';
        option10.text = '２年生　BAB10 ② kata kerja';
        quizletSelect.appendChild(option10);

    }
    // 他の学年の処理をここに追加
}
