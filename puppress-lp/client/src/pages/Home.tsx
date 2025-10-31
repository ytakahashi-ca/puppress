import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { Check } from "lucide-react";

export default function Home() {
  const scrollToCTA = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ファーストビュー */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 lg:py-32">
        <div className="container max-w-6xl"> {/* 追加: 最大幅を控えめに */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 max-w-xl"> {/* 追加: 左カラムの行幅を制限 */}
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                プロテインを飲むと<br className="sm:hidden" />
                <span className="text-blue-600">お腹が張る</span>・<br className="sm:hidden" />
                <span className="text-blue-600">臭いが気になる</span><br className="sm:hidden" />
                そんな方へ。
              </h1>

              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
                “プロテイン習慣特化型“<br />
                <span className="font-bold text-blue-600">消化サポート × 乳酸菌サプリメント</span>
              </p>

              <p className="text-lg text-gray-700">
                たんぱく質の分解をサポートし、<br />
                理想の姿を目指すあなたの味方になります！
              </p>

              {/* ✅ レスポンシブ対応したCTA */}
              <div className="pt-8 sm:pt-4">
                <a
                  href="https://lin.ee/fnXZ2bk?utm_source=lp&utm_medium=cta&utm_campaign=firstview"
                  target="_blank" rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    size="lg"
                    className="
                      w-full text-base sm:text-lg py-5 sm:py-6 rounded-2xl leading-relaxed
                      bg-gradient-to-r from-orange-500 to-red-500
                      hover:from-orange-600 hover:to-red-600
                      shadow-lg whitespace-normal break-words leading-snug
                    "
                  >
                    🎁 数量限定！<br className="sm:hidden" />
                    先行発売クーポンをLINEで受け取る
                  </Button>
                </a>
                <p className="text-sm text-gray-600 mt-2 text-center sm:text-left">
                  登録後すぐに先行発売情報をお届けします
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/product-package.png"
                alt="PUPPRESS プロテイン習慣サポートサプリメント"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm border rounded-full px-4 py-2 text-sm shadow">
                国産・GMP認証工場 / 管理栄養士監修
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* セクション1: 悩み提示 */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
            プロテインを飲んだあと、<br className="lg:hidden" />
            こんなことありませんか？
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { icon: "😣", text: "お腹が張る・下しやすい" },
              { icon: "💨", text: "ガスや臭いが気になる" },
              { icon: "❓", text: "吸収されている実感がない" },
              { icon: "😰", text: "不快感があって続けにくい" },
            ].map((item, index) => (
              <Card key={index} className="border-2 hover:border-blue-300 transition-colors">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="text-6xl">{item.icon}</div>
                  <p className="text-lg font-semibold text-gray-800">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="max-w-3xl mx-auto bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <p className="text-lg text-gray-800 leading-relaxed">
              これらは、過剰なたんぱく質摂取によって<span className="font-bold text-blue-600">体に負担がかかっているサイン</span>かもしれません
            </p>
          </div>
        </div>
      </section>

      {/* セクション2: 原因 */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl lg:text-5xl font-bold text-center text-gray-900 mb-8">
            プロテイン＝高タンパク＝<span className="text-red-600">高負荷</span>
          </h2>
          <div className="max-w-4xl mx-auto mb-12">
            <img 
              src="/images/digestive-diagram-ja.png" 
              alt="消化器官の経路" 
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700">
            <p className="leading-relaxed">
              消化しきれないたんぱく質が腸に届くと、<span className="font-bold text-red-600">腸内の一部の菌の働きでガスが生じることも</span>。
            </p>
            <p className="leading-relaxed">
              人工甘味料の摂取や過剰なたんぱく質も<span className="font-bold">腸バランスを乱す要因</span>になる可能性もあります。
            </p>
          </div>
        </div>
      </section>


      <section className="py-20 bg-white">
        <div className="container">
          {/* タイトル＆サブタイトル */}
          <h2 className="text-4xl lg:text-6xl font-extrabold text-center text-gray-900 mb-4">
            だから<span className="text-blue-600">プップレス！</span>
          </h2>
          <p className="text-xl lg:text-2xl text-center text-gray-700 mb-16">
            “プロテイン習慣”に特化した<span className="font-semibold">3つのアプローチ</span>
          </p>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* アプローチ1：ダイジェザイム */}
            <Card className="border-2 hover:shadow-2xl transition-shadow">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl font-bold text-blue-600">
                  01
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  消化を助ける酵素アプローチ
                </h3>

                <div className="max-w-4xl mx-auto mb-12">
                  <img 
                    src="/images/digezyme_cut.jpg" 
                    alt="消化器官の経路" 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>

                <p className="text-gray-700 leading-relaxed">
                  プロテインによって体に運ばれてくる、たくさんのたんぱく質。<br />
                  消化しきれず腸に届くと、<b>ガス</b>や<b>お腹の張り</b>に繋がることも。<br />
                  消化酵素<b>「ダイジェザイム®」</b>が、タンパク質を小さくする働きをサポートをします。
                </p>
              </CardContent>
            </Card>

            {/* アプローチ2：乳酸菌 */}
            <Card className="border-2 hover:shadow-2xl transition-shadow">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl font-bold text-green-600">
                  02
                </div>
                <img 
                  src="/images/probiotics-realistic.jpg" 
                  alt="乳酸菌KS-1" 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="text-2xl font-bold text-gray-900">
                  腸をととのえる乳酸菌アプローチ
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  耐酸性ナノ型乳酸菌「KS-1」とオリゴ糖を配合。<br />
                  善玉菌をサポートし、腸内バランスを整えることで、快適な毎日を後押しします。
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-2xl transition-shadow">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-3xl font-bold text-orange-600">
                  03
                </div>
                <img 
                  src="/images/factory.jpg" 
                  alt="設計" 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="text-2xl font-bold text-gray-900">
                  プロテイン習慣に特化した設計
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  一般的な整腸剤が腸全体サポートするのに対し、<br />
                  プップレスは<strong>タンパク質の消化</strong>や<strong>吸収</strong>に着目。<br />
                </p>

                <a href="#compare-puppress" className="inline-flex items-center gap-2 text-blue-600 font-semibold">
                  くわしい比較を見る
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M8 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="compare-puppress" className="py-16 bg-white">
        <div className="container">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            一般的な整腸ケアとの比較
          </h3>

          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="min-w-full text-gray-800">
              <caption className="sr-only">一般的な整腸ケアとプップレスの比較表</caption>
              <thead className="bg-blue-50/60">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">比較項目</th>
                  <th className="py-3 px-4 text-left font-semibold">一般的な整腸剤</th>
                  <th className="py-3 px-4 text-left font-semibold text-blue-700">プップレス</th>
                </tr>
              </thead>
              <tbody className="[&>tr>td]:align-top">
                  <tr className="border-t">
                    <td className="py-3 px-4 font-semibold bg-gray-50">特徴</td>
                    <td className="py-3 px-4">一般的な整腸サポート</td>
                    <td className="py-3 px-4 text-blue-700">“プロテイン習慣”に特化した設計</td>
                  </tr>
                <tr className="border-t">
                  <td className="py-3 px-4 font-semibold bg-gray-50">主な成分</td>
                  <td className="py-3 px-4">乳酸菌</td>
                  <td className="py-3 px-4 text-blue-700">特許取得乳酸菌（KS-1）＋消化酵素（ダイジェザイム®）</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4 font-semibold bg-gray-50">ターゲット</td>
                  <td className="py-3 px-4">高齢者・便秘傾向・胃腸の弱い人
                </td>
                  <td className="py-3 px-4 text-blue-700">理想の体型を目指しプロテイン習慣を続ける人</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4 font-semibold bg-gray-50">アプローチ</td>
                  <td className="py-3 px-4">広く腸内環境をサポート</td>
                  <td className="py-3 px-4 text-blue-700">プロテインの消化・吸収をサポートし、腸内バランスを整える</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-xs text-gray-500">
            ※本表は成分・設計方針の比較であり、効果効能を保証するものではありません。
            DigeZyme®はSabinsa社の登録商標です。
          </p>
        </div>
      </section>
      {/* ▼▼ 比較表の直下に追加：おすすめ＋ミニCTA ▼▼ */}
      <div className="mt-14">
        {/* こんな方におすすめ */}
        <div className="bg-blue-50/60 rounded-2xl p-8 lg:p-12 text-center space-y-6 border border-blue-100">
          <h4 className="text-2xl font-bold text-gray-900">こんな方におすすめです！</h4>
          <ul className="grid sm:grid-cols-2 gap-4 text-lg text-gray-800">
            <li>💪 プロテインを飲むとお腹が張りやすい方</li>
            <li>🏋️ トレーニング中の栄養吸収をムダにしたくない方</li>
            <li>🌿 人工甘味料でお腹の調子が崩れやすい方</li>
            <li>✨ 腸から体を整えてプロテインを続けたい方</li>
          </ul>

          {/* ミニCTA */}
          <div className="pt-8 sm:pt-4">
            <a
              href="https://lin.ee/fnXZ2bk?utm_source=lp&utm_medium=cta&utm_campaign=middle"
              target="_blank" rel="noopener noreferrer"
              className="block"
            >
              <Button
                size="lg"
                className="
                  w-full text-base sm:text-lg py-5 sm:py-6 rounded-2xl leading-relaxed
                  bg-gradient-to-r from-orange-500 to-red-500
                  hover:from-orange-600 hover:to-red-600
                  shadow-lg whitespace-normal break-words leading-snug
                "
              >
                🎁 数量限定！<br className="sm:hidden" />
                先行発売クーポンをLINEで受け取る
              </Button>
            </a>
            <p className="text-sm text-gray-600 mt-2 text-center sm:text-left">
              登録後すぐに先行発売情報をお届けします
            </p>
          </div>
        </div>
      </div>

      {/* セクション5: 成果 (After) */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container">
          <h2 className="text-3xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
            不安なく<span className="text-green-600">プロテインを続けられる</span>毎日へ
          </h2>
          <div className="max-w-5xl mx-auto mb-12">
            <img 
              src="/images/before-after.png" 
              alt="Before After比較" 
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 border border-green-200 mb-2">
              <span className="text-sm font-semibold">プロテインと一緒に1日3粒飲むだけ</span>
            </div>
            <p className="text-xl text-gray-800 leading-relaxed">
              張りや臭いを気にせず、<span className="font-bold text-blue-600">トレーニングに集中</span>できる。
            </p>
            <p className="text-xl text-gray-800 leading-relaxed">
              続けるほど、<span className="font-bold text-green-600">腸から体が整う実感</span>を。
            </p>
            <p className="text-xl text-gray-800 leading-relaxed">
              努力をムダにしない、<span className="font-bold">理想の体づくり</span>をサポート。
            </p>
          </div>
        </div>
      </section>

      {/* セクション6: 信頼・品質 */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl lg:text-5xl font-bold text-center text-gray-900 mb-8">
            国産・GMP認証。<br />
            体に入れるものだからこそ、<span className="text-blue-600">徹底管理</span>。
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
            {[
              { icon: Check, title: "GMP認証工場で製造", color: "blue" },
              { icon: Check, title: "管理栄養士監修", color: "green" },
              { icon: Check, title: "特許取得のナノ型乳酸菌", color: "orange" }
            ].map((item, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center space-y-4">
                  <div className={`w-16 h-16 bg-${item.color}-100 rounded-full flex items-center justify-center mx-auto`}>
                    <item.icon className={`w-8 h-8 text-${item.color}-600`} />
                  </div>
                  <p className="text-lg font-semibold text-gray-800">{item.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-xl text-gray-700 mt-12 max-w-3xl mx-auto">
            毎日続けるものだから、<span className="font-bold text-blue-600">品質と安全性を最優先</span>に。
          </p>
        </div>
      </section>

      {/* 管理栄養士監修セクション */}
      <section className="py-20 bg-blue-50">
        <div className="container">
          <h2 className="text-3xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
            <span className="text-blue-600">管理栄養士監修</span>コメント
          </h2>
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <img 
                  src="/images/nutritionist.jpg" 
                  alt="管理栄養士 ai mamaさん" 
                  className="w-48 h-48 object-cover rounded-lg shadow-lg"
                />
                <div className="mt-4 space-y-1">
                  <p className="font-bold text-sm text-gray-900">管理栄養士・フードスタイリスト</p>
                  <p className="text-lg font-bold text-blue-600">ai mama さん</p>
                  <p className="text-xs text-gray-600">（テレビ東京「カンブリア宮殿」出演。大手食品メーカーの商品開発監修など多数）</p>
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    プロテイン摂取後の「お腹の張り」や「ゴロゴロ感」は、たんぱく質の過剰摂取によって<span className="font-bold text-red-600">悪玉菌が優勢になる</span>ことが一因と考えられます。
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    「プップレス」には<span className="font-bold text-blue-600">ナノ型乳酸菌やオリゴ糖、食物繊維</span>をバランスよく配合し、腸内環境を整えるサポートが期待できます。
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    さらに、消化酵素「<span className="font-bold text-green-600">ダイジェザイム</span>」がたんぱく質の分解を助け、プロテイン習慣を快適に続けやすい環境づくりを後押しします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* セクション7: ユーザーの声 */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl lg:text-5xl font-bold text-center text-gray-900 mb-4">
            実際の<span className="text-green-600">ご利用者様</span>からの声
          </h2>
          <p className="text-center text-gray-600 mb-16">※個人の感想です</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <img src="/images/user-avatar-1.jpg" alt="ユーザー" className="w-16 h-16 rounded-full object-cover" />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-2xl">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-800 text-lg mb-4">
                  「プロテインを飲むときの不安がなくなりました」
                </p>
                <p className="text-gray-600">30代男性・トレーニング歴2年</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <img src="/images/user-avatar-2.jpg" alt="ユーザー" className="w-16 h-16 rounded-full object-cover" />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-2xl">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-800 text-lg mb-4">
                  「腹の張りが軽く、筋トレに集中できるように」
                </p>
                <p className="text-gray-600">20代女性・フィットネス愛好家</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* セクション8: CTA */}
      <section id="cta-section" className="py-20 bg-gradient-to-b from-orange-50 to-red-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
              今なら<span className="text-red-600">数量限定</span>の<br />
              先行キャンペーン中！
            </h2>

              <div className="bg-white rounded-2xl shadow-2xl p-12 sm:p-16 space-y-10">

              <a
                href="https://lin.ee/fnXZ2bk?utm_source=lp&utm_medium=cta&utm_campaign=footer"
                target="_blank" rel="noopener noreferrer" className="block"
              >
                <Button
                  size="lg"
                  className="
                    !h-auto min-h-16 w-full
                    px-5 sm:px-8 py-4 sm:py-5
                    text-base sm:text-lg font-semibold text-white text-center
                    !whitespace-normal break-words leading-snug
                    rounded-2xl
                    bg-gradient-to-r from-orange-500 to-red-500
                    hover:from-orange-600 hover:to-red-600
                    shadow-lg
                  "
                >
                  <span className="block sm:ml-2 sm:inline">🎁 数量限定！先行発売クーポンをLINEで受け取る</span>
                </Button>
              </a>

              {/* 安心材料の箇条書き（小さめ）— 任意 */}
              <ul className="text-sm text-gray-600 grid sm:grid-cols-3 gap-2 pt-2">
                <li>・友だち登録は無料</li>
                <li>・通知はいつでも解除OK</li>
                <li>・数量達し次第終了</li>
              </ul>

              <div className="flex justify-center gap-8 text-sm text-gray-600 pt-6">
                <a href="#" className="hover:text-blue-600 underline">配送について</a>
                <a href="#" className="hover:text-blue-600 underline">返品について</a>
                <a href="#" className="hover:text-blue-600 underline">よくある質問</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container text-center">
          <p className="text-gray-400">© 2025 PupPress. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

