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
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                プロテインを飲むと<br />
                <span className="text-blue-600">お腹が張る</span>・<br />
                <span className="text-blue-600">臭いが気になる</span><br />
                そんな方へ。
              </h1>
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
                PupPress（プップレス）は、<br />
                プロテインを飲む方のための<br />
                <span className="font-bold text-blue-600">消化サポート × 乳酸菌ケアサプリ</span>です。
              </p>
              <p className="text-lg text-gray-700">
                たんぱく質をしっかり摂りながら、<br />
                毎日をすっきり快適に過ごすためのサポートをします。
              </p>
              <div className="space-y-4">
                <div className="inline-block bg-red-50 px-4 py-2 rounded-lg">
                  <p className="text-red-600 font-bold">【数量限定】先行案内受付中</p>
                </div>
                <a
                  href="https://lin.ee/fnXZ2bk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="w-full lg:w-auto text-lg px-12 py-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                  >
                    無料でLINE登録して特典を受け取る
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/product-package.png"
                alt="PUPPRESS プロテイン習慣サポートサプリメント"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
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
              これらは、たんぱく質摂取によって<span className="font-bold text-blue-600">腸に負担がかかっているサイン</span>とも言われています。
            </p>
            <p className="text-gray-700 mt-2">
              PupPressは、プロテイン習慣をより快適に続けたい方をサポートします。
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
              alt="消化器官の経路図觢" 
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700">
            <p className="leading-relaxed">
              消化しきれないたんぱく質が腸に届くと、<span className="font-bold text-red-600">悪玉菌が分解しガスが発生</span>。
            </p>
            <p className="leading-relaxed">
              人工甘味料の摂取や過剰なたんぱく質も<span className="font-bold">腸バランスを乱す要因</span>に。
            </p>
          </div>
        </div>
      </section>

      {/* セクション3: 解決策 */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container">
          <h2 className="text-3xl lg:text-5xl font-bold text-center text-gray-900 mb-8">
            "整える"だけじゃない。<br />
            <span className="text-blue-600">プロテイン習慣に特化</span>したケアを。
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mt-16">
            <Card className="bg-gray-100">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-700">一般的な整腸剤</h3>
                <p className="text-gray-600">腸全体のケア</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-xl">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold">プップレス</h3>
                <p className="font-semibold text-lg">"プロテイン習慣"で乱れた腸を立て直す専用設計</p>
                <p className="text-blue-50 leading-relaxed">
                  タンパク質の消化負担や人工甘味料による腸の乱れに着目し、乳酸菌と酵素で根本からサポートします。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* セクション4: 3つの特徴 */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
            プップレスの<span className="text-blue-600">3つの特徴</span>
          </h2>
          <div className="grid lg:grid-cols-3 gap-12">
            <Card className="border-2 hover:shadow-2xl transition-shadow">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl font-bold text-blue-600">
                  01
                </div>
                <img 
                  src="/images/digezyme.png" 
                  alt="DigeZyme Multi-Enzyme-Complex" 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="text-2xl font-bold text-gray-900">
                  消化酵素ダイジェザイム®️配合
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  たんぱく質を分解するプロテアーゼを含み、プロテインの消化・吸収をサポート。お腹の張りや不快感の軽減を助けます。
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-2xl transition-shadow">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl font-bold text-green-600">
                  02
                </div>
                <img 
                  src="/images/probiotics-realistic.jpg" 
                  alt="乳酸菌プロバイオティクス" 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="text-2xl font-bold text-gray-900">
                  特許取得の乳酸菌＋オリゴ糖配合
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  耐酸性に優れたナノサイズの乳酸菌KS-1が腸に届き、善玉菌をサポート。さらにオリゴ糖が善玉菌のエサとなり、腸内バランスを整えます。
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
                  alt="GMP認証工場" 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="text-2xl font-bold text-gray-900">
                  国産・GMP認証工場で製造
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  品質と安全性を第一に。国内のGMP認証工場で製造し、毎日安心して続けられる品質を実現しました。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
              { icon: Check, title: "ナノ型乳酸菌（エビデンス取得）", color: "orange" }
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
            <div className="bg-white rounded-2xl shadow-2xl p-12 space-y-8">
              <div className="space-y-4">
                <p className="text-gray-600 text-xl line-through">通常価格 ¥3,480</p>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-6xl font-bold text-red-600">¥2,980</span>
                  <span className="text-2xl text-gray-700">（税込）</span>
                </div>
                <p className="text-red-600 font-bold text-xl">¥500 OFF</p>
              </div>
              <a href="https://lin.ee/fnXZ2bk" target="_blank" rel="noopener noreferrer" className="block">
                <Button 
                  size="lg" 
                  className="w-full text-2xl py-8 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-xl"
                >
                  先行開始をLINEで受け取る
                </Button>
              </a>
              <div className="flex justify-center gap-8 text-sm text-gray-600 pt-4">
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

