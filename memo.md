# React + TypeScriptで作る動的Portfolioサイト

---

### 技術構成
|分類|技術・ツール|役割・目的|
|---|---|---|
|言語|TypeScript|型安全なJS|
|ライブラリ|React|UI構築|
|ビルドツール|Vite|開発・ビルドの高速化|
|パッケージ管理|npm/yarn|ライブラリ管理|
|状態管理|ReactのuseState/useReducer|とりあえずReactの組み込みのみ|
|CSS|CSS|デザイン|
|ルーティング|React Router(発展)|複数ページ対応|
|API通信|fetch,axios|外部APIやバックエンドとの連携|
|バージョン管理|Git,GitHub|コード管理・共有|

---

###　新規プロジェクト作成方法

```bash
npm create vite@latest my-portfolio -- --template react-ts
cd my-portfolio
npm install
npm run dev
```
- `npm`:Node.jsのパッケージ管理ツール(node package manager)．コマンドを実行する入口
- `create vite@latest`:Viteの最新バージョンでプロジェクトを作成するコマンド
- `my-portfolio`:任意のプロジェクト名
- `--`:ここから先のオプションはViteのオプションであることを示す記号
- `--template react-ts`:Viteで使うテンプレートの指定．`react-ts`は**React+TypeScript**の構成のテンプレート
- `npm run dev`:開発用サーバの起動コマンド

###　すでに存在するプロジェクトの開発サーバ起動方法

```bash
cd my-portfolio
npm run dev
```
*依存パッケージが未インストールならディレクトリに飛んでから`npm install`する

### 本番用サーバの起動方法

```bash
cd my-portfolio
npm run build
```

---

### ChakraUIの初期設定

1. パッケージとスニペットをいれる

```bash
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
npx @chakra-ui/cli snippet add
```
- プロジェクト直下でいれる

1. ルートにChakraProviderを巻く
アプリ全体を`ChakraProvider`コンポーネントで囲んで，ChakraUIの機能やテーマを全コンポーネントで使えるようにする処理
v3以降のバージョンでは`ChakraProvider`でラップするだけでは動かず，以下のコードのように記述する

```bash
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.tsx'
import { ChakraProvider , defaultSystem} from '@chakra-ui/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <App />
    </ChakraProvider>
  </StrictMode>,
)
```

- src/main.tsxを編集
- なければ新規作成ではなく，既存を置き換え
- `value`:Reactのprops名
- `defaultSystem`:Chakra UIv3が用意するデフォルトのUIシステム設定の変数
- `<ChakraProvider value={defaultSystem}>`:ChakraProviderにdefaultSystemという設定を渡すという意味

---

### Componentsについて

#### 定義方法
```tsx
const Example = () => {
  return (
    <h1>Hello world</h1>
  )
};
```

- 返り値はJSX形式
- この形式は，定義後しか使えない

### 型宣言について

```tsx
type ProjectProps = {
    projectName: string;
    projectSubName: string;
    detail: string;
    slideName: string;
    slide: string;
    siteName: string;
    site: string;
    result: string;
}
```
- `type`:TypeScriptの型エイリアスを定義するためのキーワード
- `型エイリアス`:型に名前をつける機能
- `interface`とにているが，こちらのほうが柔軟な表現が可能
- 今回は`ProjectProps`という名前の型を作っている

### 使い方

```tsx
const ProjectCard = ({projectName, projectSubName, detail, slideName, slide, siteName, site, result}: ProjectProps)=>{
    return (
    <div>
    <h2>{projectName}</h2>
    <h3>{projectSubName}</h3>
    <p>{detail}</p>
    <p><a href={slide}>{slideName}</a></p>
    <p><a href={site}>{siteName}</a></p>
    <p>結果：{result}</p>
    </div>
    )
}
```

- `(): ProjectProps`:このコンポーネントの引数は必ずProjectProps型に沿っていなければならないという宣言
- `(ここ):ProjectProps`:これは分割代入．こうすることで，ProjectProps.projectNameと書かずにそのままの名前が使える

### ChakraUIのコンポーネントの使い方

[ChakraUI公式サイトにアクセス](https://chakra-ui.com/docs/components/concepts/overview)
- ここで使用するコンポーネントの使い方を確認する
- 使いたいコンポーネントを見つけたら開く（今回はCardコンポーネントを例とする）
- `Usage`の部分に使い方が書いてある
  
**Usage抜粋**
```tsx
<Card.Root>
  <Card.Header />
  <Card.Body />
  <Card.Footer />
</Card.Root>
```
- 一番端の要素には`Root`をつける（親という意味）
- 公式には乗っていないが`<Card.title>`などのあるので調べる
- その他にもいろいろ乗っている

### exportの使い方
他のファイルにその関数や型宣言を使いたい場合につける

**例**

ResultCard.tsx一部抜粋
```tsx
export type ResultCardProps = {
    title: string
    subtitle: string
    result: string
    description: string
    skill: string
    siteTitle?: string
    site?: string
    slideTitle: string
    slide?: string
    githubTitle?: string
    github?: string 
    period?: string
}
```
- `?`はあってもなくても良いという意味
- `site?`:string|undefinedという意味になる

<br>

projects.tsx
```tsx
import { ResultCardProps } from "../components/ResultCard"


export const projects: ResultCardProps[] = [
    {
    title : "Ideal",
    subtitle : "アイディア導出アプリ",
    result : "OPEN HACK U 2025 NAGOYA 参加作品",
    description : "アイデア創出を支援するアプリ。私の担当は開発・発表までの短期間で動かせる環境を整備し、チームが素早く実装・検証できるよう土台を構築しました。",
    skill : "AWS",
    siteTitle : "OPEN HACK U 2025 NAGOYA 公式サイト",
    site : "https://hacku.yahoo.co.jp/hacku2025_nagoya/",
    slideTitle : "iDealスライド",
    slide : "https://hacku-nagoya-hackathon.my.canva.site",
    period : "【2025/2/15】（本戦）＋事前開発",
    },
    {
    title: "YouGemy",
    subtitle: "学習サポートアプリ",
    result: "OPEN HACK U 2025 TOKYO　優秀賞受賞作品",
    description:
      "学習支援アプリ。授業動画のリンクをユーザーがペーストするだけで、その授業で扱った問題の類題を作成。ユーザーが解いた問題をAIが添削・分析し、ミス傾向に基づくフィードバックを返す機能を開発。扱った数式はアニメーションを用いて視覚的に分かりやすくする機能を搭載。",
    skill: "Terraform(AWS),Docker,Django(Python)",
    siteTitle: "OPEN HACK U 2025 TOKYO 公式サイト",
    site: "https://hacku.yahoo.co.jp/hacku2025_tokyo/",
    slideTitle: "YouGemyスライド",
    slide: "https://meijouacjp-my.sharepoint.com/…",
    githubTitle: "YouGemy-GitHub",
    github: "https://github.com/Rikishi-com/3rd_generation_hackathon",
    period: "【2025/6/21】（本戦）＋事前開発",
  },
]
```

- 本来projects.tsxにも型宣言が必要だが，すでに同様の型宣言がResultCard.tsxで宣言されていたため，`export`を使用し，`import`した．

### 型注釈

```tsx
const project: ResultProps[]
```
- projectという変数は必ずResultProps型を取るという宣言

### 型宣言と初期化

projects.tsx
```tsx
import { ResultCardProps } from "../components/ResultCard"


export const projects: ResultCardProps[] = [
    {
    title : "Ideal",
    subtitle : "アイディア導出アプリ",
    result : "OPEN HACK U 2025 NAGOYA 参加作品",
    description : "アイデア創出を支援するアプリ。私の担当は開発・発表までの短期間で動かせる環境を整備し、チームが素早く実装・検証できるよう土台を構築しました。",
    skill : "AWS",
    siteTitle : "OPEN HACK U 2025 NAGOYA 公式サイト",
    site : "https://hacku.yahoo.co.jp/hacku2025_nagoya/",
    slideTitle : "iDealスライド",
    slide : "https://hacku-nagoya-hackathon.my.canva.site",
    period : "【2025/2/15】（本戦）＋事前開発",
    },
    {
    title: "YouGemy",
    subtitle: "学習サポートアプリ",
    result: "OPEN HACK U 2025 TOKYO　優秀賞受賞作品",
    description:
      "学習支援アプリ。授業動画のリンクをユーザーがペーストするだけで、その授業で扱った問題の類題を作成。ユーザーが解いた問題をAIが添削・分析し、ミス傾向に基づくフィードバックを返す機能を開発。扱った数式はアニメーションを用いて視覚的に分かりやすくする機能を搭載。",
    skill: "Terraform(AWS),Docker,Django(Python)",
    siteTitle: "OPEN HACK U 2025 TOKYO 公式サイト",
    site: "https://hacku.yahoo.co.jp/hacku2025_tokyo/",
    slideTitle: "YouGemyスライド",
    slide: "https://meijouacjp-my.sharepoint.com/…",
    githubTitle: "YouGemy-GitHub",
    github: "https://github.com/Rikishi-com/3rd_generation_hackathon",
    period: "【2025/6/21】（本戦）＋事前開発",
  },
]
```
- これは型宣言と同時に，データをあらかじめ格納している

### `map`関数

使用例
```tsx
{projects.map((p,i) => (
    <ResultCard key={i} {...p}/>
))}
```
- `projects`は先述した配列
- `.map()`は配列の中身を１つづつ取り出して，別の形にして返す処理
- `p`:取り出した1つ分のデータ
- `i`:その順番
- `<ResultCard>`:カード表示のコンポーネント
- `key={i}`:Reactが要素を表示するための番号
- `{...p}`:pの中身をそのまますべて`<ResultCard>`に渡すという意味


### カーソルをあわせた際の動き

使用例（カードにカーソルを合わせたときに拡大する動き）
```tsx
<Card.Root
  variant="elevated"
  h={500}
  w={500}
  backgroundColor={'darkgray'}
  transition="transform 0.2s ease, box-shadow 0.2s ease"
  transformOrigin="center"
  cursor="pointer"
  _hover={{
    transform: 'scale(1.03)',
    boxShadow: 'lg',
  }}
>
```
- `transition`: CSSであるプロパティの値が変化するとき，その変化をどのくらいの時間で，どのような動きで変えるかを指定するためのプロパティ
- `_hover`: ホバー時（カーソルをある要素に乗せた状態）の動きを指定する
- `cursor`: カーソルの形を定義．今回は`pointer`で手のようなカーソルに変化する
- `ease`: 滑らかという意味


### 画面表示時にポップアップさせる方法

使用例
```tsx
import { motion } from "framer-motion"

const MotionBox = motion(Box)

~省略~
<MotionBox
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
>
~内容~
<MotionBox>
```
- `import { motion } from "framer-motion"`: Framer Motionをインポートする
- `const MotionBox = motion(Box)`: 通常の`Box`を動きのある`MotionBox`(任意名)に変換している
- `initial`: 初期状態を指定するプロパティ
- `opacity`: 透明度（0:完全に透明,1:完全に不透明）
- `y: 24`: y軸方向の移動量（この場合は上に24分移動するという意味）
- `animate`: 最終状態を指定するプロパティ．ユーザが見える最終的な状態を指定する
- `transition`: アニメーションの時間や動きを制御するプロパティ．どのようにして初期状態から最終状態に遷移するか指定する
- `duration`: アニメーションにかける時間
- `ease`: 動きの加速，減速のパターン
- `easeOut`: 最初は早く，だんだんゆっくり
- `easeIn`: 最初はゆっくり，だんだん早くなる
- `linear`: 一定速度