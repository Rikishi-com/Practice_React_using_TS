# コンポーネント > Card
  
  URL: docs/components/card
  ソース: https://raw.githubusercontent.com/chakra-ui/chakra-ui/refs/heads/main/apps/www/content/docs/components/card.mdx
  
  単一のテーマに関連するコンテンツを表示するために使用されます。
          
  ***
  
  title: Card
  description: 単一のテーマに関連するコンテンツを表示するために使用されます。
  links: 
 - source: https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/card
 - storybook: https://storybook.chakra-ui.com/?path=/story/components-card--basic
 - recipe: https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/card.ts
  ------------------------------------------------------------------------------------------------
  
  ```tsx
import { Avatar, Button, Card } from "@chakra-ui/react"

export const CardBasic = () => {
  return (
    <Card.Root width="320px">
      <Card.Body gap="2">
        <Avatar.Root size="lg" shape="rounded">
          <Avatar.Image src="https://picsum.photos/200/300" />
          <Avatar.Fallback name="Nue Camp" />
        </Avatar.Root>
        <Card.Title mt="2">Nue Camp</Card.Title>
        <Card.Description>
          This is the card body. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
          Curabitur nec odio vel dui euismod fermentum.
        </Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="outline">View</Button>
        <Button>Join</Button>
      </Card.Footer>
    </Card.Root>
  )
}

```

## 使い方

```jsx
import { Card } from "@chakra-ui/react"
```

```jsx
<Card.Root>
  <Card.Header />
  <Card.Body />
  <Card.Footer />
</Card.Root>
```

## 例

### バリアント

`variant` プロパティを使用して、Cardの見た目のスタイルを変更します。

```tsx
import { Avatar, Button, Card, For, Stack } from "@chakra-ui/react"

export const CardWithVariants = () => {
  return (
    <Stack gap="4" direction="row" wrap="wrap">
      <For each={["subtle", "outline", "elevated"]}>
        {(variant) => (
          <Card.Root width="320px" variant={variant} key={variant}>
            <Card.Body gap="2">
              <Avatar.Root size="lg" shape="rounded">
                <Avatar.Image src="https://picsum.photos/200/300" />
                <Avatar.Fallback name="Nue Camp" />
              </Avatar.Root>
              <Card.Title mb="2">Nue Camp</Card.Title>
              <Card.Description>
                This is the card body. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
              <Button variant="outline">View</Button>
              <Button>Join</Button>
            </Card.Footer>
          </Card.Root>
        )}
      </For>
    </Stack>
  )
}

```

### フォーム内での使用

フォーム内でCardコンポーネントを使用して、関連するフィールドをグループ化します。

```tsx
import { Button, Card, Field, Input, Stack } from "@chakra-ui/react"

export const CardWithForm = () => (
  <Card.Root maxW="sm">
    <Card.Header>
      <Card.Title>サインアップ</Card.Title>
      <Card.Description>
        アカウントを作成するために以下のフォームに記入してください
      </Card.Description>
    </Card.Header>
    <Card.Body>
      <Stack gap="4" w="full">
        <Field.Root>
          <Field.Label>名</Field.Label>
          <Input />
        </Field.Root>
        <Field.Root>
          <Field.Label>姓</Field.Label>
          <Input />
        </Field.Root>
      </Stack>
    </Card.Body>
    <Card.Footer justifyContent="flex-end">
      <Button variant="outline">キャンセル</Button>
      <Button variant="solid">サインイン</Button>
    </Card.Footer>
  </Card.Root>
)

```

### サイズ

`size` プロパティを使用してCardのサイズを変更します。

```tsx
import { Card, Heading, Stack } from "@chakra-ui/react"

export const CardWithSizes = () => {
  return (
    <Stack>
      <Card.Root size="sm">
        <Card.Header>
          <Heading size="md"> Card - sm</Heading>
        </Card.Header>
        <Card.Body color="fg.muted">
          This is the card body. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </Card.Body>
      </Card.Root>

      <Card.Root size="md">
        <Card.Header>
          <Heading size="md"> Card - md</Heading>
        </Card.Header>
        <Card.Body color="fg.muted">
          This is the card body. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </Card.Body>
      </Card.Root>

      <Card.Root size="lg">
        <Card.Header>
          <Heading size="md"> Card - lg</Heading>
        </Card.Header>
        <Card.Body color="fg.muted">
          This is the card body. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </Card.Body>
      </Card.Root>
    </Stack>
  )
}

```

### 画像付き

Cardコンポーネントを使用して画像を表示します。

```tsx
import { Button, Card, Image, Text } from "@chakra-ui/react"

export const CardWithImage = () => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Green double couch with wooden legs"
      />
      <Card.Body gap="2">
        <Card.Title>リビングルームのソファ</Card.Title>
        <Card.Description>
          このソファはモダンなトロピカル空間やバロック風の空間に最適です。
        </Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          $450
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid">今すぐ購入</Button>
        <Button variant="ghost">カートに追加</Button>
      </Card.Footer>
    </Card.Root>
  )
}

```

### 横並び

Cardコンポーネントを使用してコンテンツを横並びで表示します。

```tsx
import { Badge, Box, Button, Card, HStack, Image } from "@chakra-ui/react"

export const CardHorizontal = () => (
  <Card.Root flexDirection="row" overflow="hidden" maxW="xl">
    <Image
      objectFit="cover"
      maxW="200px"
      src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
      alt="Caffe Latte"
    />
    <Box>
      <Card.Body>
        <Card.Title mb="2">完璧なラテ</Card.Title>
        <Card.Description>
          カフェラテはエスプレッソとスチームミルクで作られたイタリア発祥のコーヒー飲料です。
        </Card.Description>
        <HStack mt="4">
          <Badge>ホット</Badge>
          <Badge>カフェイン</Badge>
        </HStack>
      </Card.Body>
      <Card.Footer>
        <Button>ラテを購入</Button>
      </Card.Footer>
    </Box>
  </Card.Root>
)

```

### アバター付き

Cardコンポーネントを使用してアバターを表示します。

```tsx
import {
  Avatar,
  Button,
  Card,
  HStack,
  Stack,
  Strong,
  Text,
} from "@chakra-ui/react"
import { LuCheck, LuX } from "react-icons/lu"

export const CardWithAvatar = () => {
  return (
    <Card.Root width="320px">
      <Card.Body>
        <HStack mb="6" gap="3">
          <Avatar.Root>
            <Avatar.Image src="https://images.unsplash.com/photo-1511806754518-53bada35f930" />
            <Avatar.Fallback name="Nate Foss" />
          </Avatar.Root>
          <Stack gap="0">
            <Text fontWeight="semibold" textStyle="sm">
              Nate Foss
            </Text>
            <Text color="fg.muted" textStyle="sm">
              @natefoss
            </Text>
          </Stack>
        </HStack>
        <Card.Description>
          <Strong color="fg">Nate Foss </Strong>
          があなたのチームへの参加をリクエストしました。承認または拒否できます。
        </Card.Description>
      </Card.Body>
      <Card.Footer>
        <Button variant="subtle" colorPalette="red" flex="1">
          <LuX />
          拒否
        </Button>
        <Button variant="subtle" colorPalette="blue" flex="1">
          <LuCheck />
          承認
        </Button>
      </Card.Footer>
    </Card.Root>
  )
}

```

## プロパティ

### Root

| プロパティ | デフォルト | 型 | 説明 |
| --- | --- | --- | --- |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | コンポーネントのカラーパレット |
| size | md | `'sm' \| 'md' \| 'lg'` | コンポーネントのサイズ |
| variant | outline | `'elevated' \| 'outline' \| 'subtle'` | コンポーネントのバリアント |
| as | undefined | `React.ElementType` | レンダリングする基底要素 |
| asChild | undefined | `boolean` | 指定された子要素をデフォルトのレンダリング要素として使用し、プロパティと動作を組み合わせます。 |
| unstyled | undefined | `boolean` | コンポーネントのスタイルを削除するかどうか |
