// 効果音の設定
//
// キーごとに鳴らす音を決める。ヒット時は次の順で最初に見つかったキーの音を鳴らす:
//   1. 場所のラベル   例: 'T20', 'S20', 'D-BULL'  （特定の場所だけ音を変えたいとき）
//   2. リング種別     'S_IN' | 'S_OUT' | 'D' | 'T' | 'BULL_OUT' | 'BULL_IN'
//   3. 'default'
// CHANGE ボタンは 'CHANGE'。
//
// 値は次のどれか:
//   - 音声ファイルのパス（mp3 / wav など）   例: 'sounds/triple.mp3'
//   - シンセ音の配列（tone() の引数を並べたもの）
//   - null（鳴らさない）
//
// tone(freq, { at, dur, type, gain, slideTo })
//   freq    周波数 Hz
//   at      鳴り始めるまでの遅延（秒）
//   dur     長さ（秒）
//   type    'sine' | 'triangle' | 'square' | 'sawtooth'
//   gain    音量 0〜1
//   slideTo 指定すると dur の間にこの周波数まで滑らせる

const tone = (freq, opts = {}) => ({ freq, ...opts });

const SOUNDS = {
  S_IN: [
    tone(180, { dur: 0.08, type: 'square', gain: 0.2, slideTo: 60 }),
    tone(880, { dur: 0.18, gain: 0.2 }),
  ],
  S_OUT: [
    tone(180, { dur: 0.08, type: 'square', gain: 0.2, slideTo: 60 }),
    tone(880, { dur: 0.18, gain: 0.2 }),
  ],
  D: [
    tone(784, { dur: 0.22, type: 'triangle' }),
    tone(1175, { at: 0.09, dur: 0.22, type: 'triangle' }),
  ],
  T: [
    tone(784, { dur: 0.25, type: 'triangle' }),
    tone(988, { at: 0.07, dur: 0.25, type: 'triangle' }),
    tone(1319, { at: 0.14, dur: 0.25, type: 'triangle' }),
  ],
  BULL_OUT: [
    tone(659, { dur: 0.5, gain: 0.14 }),
    tone(988, { dur: 0.5, gain: 0.14 }),
    tone(1319, { dur: 0.5, gain: 0.14 }),
  ],
  BULL_IN: [
    tone(1047, { dur: 0.45, type: 'triangle', gain: 0.18 }),
    tone(1319, { at: 0.06, dur: 0.45, type: 'triangle', gain: 0.18 }),
    tone(1568, { at: 0.12, dur: 0.45, type: 'triangle', gain: 0.18 }),
    tone(2093, { at: 0.18, dur: 0.45, type: 'triangle', gain: 0.18 }),
    tone(2093, { at: 0.3, dur: 0.6, gain: 0.1 }),
  ],
  CHANGE: [
    tone(500, { dur: 0.25, type: 'triangle', gain: 0.2, slideTo: 180 }),
  ],
  default: null,

  // 例: T20 だけ音声ファイルにする
  // T20: 'sounds/t20.mp3',
};
