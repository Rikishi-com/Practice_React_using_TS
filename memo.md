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