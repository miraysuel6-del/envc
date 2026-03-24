export interface NewsletterIssue {
  slug: string;
  title: string;
  summary: string;
  date: string;
  author: string;
  category: string;
  content: string;
}

export const newsletters: NewsletterIssue[] = [
  {
    slug: "bu-hafta-kim-yatirim-aldi",
    title: "Bu Hafta Kim Yatırım Aldı?",
    summary:
      "Türkiye startup ekosisteminde bu hafta gerçekleşen yatırım turları, öne çıkan girişimler ve yatırımcı hareketleri.",
    date: "2026-03-14",
    author: "ENVC Editör",
    category: "Yatırım",
    content: `
      <p>Türkiye'nin startup ekosistemi 2026'nın ilk çeyreğinde ciddi bir ivme kazandı. Bu hafta dikkat çeken yatırım gelişmelerini derledik.</p>

      <h2>Öne Çıkan Turlar</h2>
      <p><strong>Finantech (Seed — $2.4M):</strong> Finansal okuryazarlık platformu Finantech, Boğaziçi mezunları tarafından kurulan ekibiyle dikkat çekiyor. Tur, Earlybird Venture Capital liderliğinde gerçekleşti. Platform, Z kuşağına yönelik kişiselleştirilmiş finans eğitimi sunuyor.</p>
      <p><strong>KargoPal (Pre-Seed — $800K):</strong> Son mil lojistikte yapay zeka destekli rota optimizasyonu sunan KargoPal, 500 Global ve birkaç melek yatırımcıdan finansman aldı.</p>
      <p><strong>MediSense (Series A — $8M):</strong> Sağlık teknolojisi girişimi MediSense, AI tabanlı tanı destek sistemiyle hastanelere hizmet veriyor. Tur, uluslararası bir sağlık fonu liderliğinde kapandı.</p>

      <h2>Yatırımcı Trendleri</h2>
      <p>Bu çeyrekte dikkat çeken en önemli trend, erken aşama fonların Türkiye'ye olan ilgisinin artması. Özellikle fintech, sağlık teknolojisi ve iklim teknolojisi alanlarında yoğun bir aktivite gözlemleniyor.</p>
      <p>Ayrıca Boğaziçi Üniversitesi çıkışlı girişimlerin yatırım turlarındaki başarı oranı dikkat çekici. Son 12 ayda üniversite ağından çıkan 14 girişim toplam $32M yatırım aldı.</p>

      <h2>ENVC Değerlendirmesi</h2>
      <p>Ekosistem olgunlaştıkça, yatırımcıların daha seçici davrandığını görüyoruz. Güçlü bir teknik ekip, net bir pazar vizyonu ve ölçeklenebilir bir iş modeli artık "olsa iyi olur" değil, olmazsa olmaz haline geldi. ENVC olarak Demo Day etkinliklerimizde bu standartları karşılayan girişimleri yatırımcılarla buluşturmaya devam ediyoruz.</p>
    `,
  },
  {
    slug: "yapay-zeka-dikeyinde-son-gelismeler",
    title: "Yapay Zeka Dikeyinde Son Gelişmeler",
    summary:
      "Generative AI'dan otonom sistemlere, Türkiye'deki yapay zeka girişimlerinin son durumu ve global trendler.",
    date: "2026-03-07",
    author: "ENVC Editör",
    category: "Teknoloji",
    content: `
      <p>Yapay zeka alanındaki gelişmeler, 2026'da da hız kesmeden devam ediyor. Bu haftaki bültenimizde hem global trendleri hem de Türkiye'deki yansımalarını inceliyoruz.</p>

      <h2>Global Tablo</h2>
      <p>Generative AI alanında büyük dil modelleri artık sadece metin üretmekle kalmıyor; kod yazma, veri analizi ve hatta bilimsel araştırma süreçlerinde de aktif rol oynuyor. OpenAI, Google DeepMind ve Anthropic arasındaki rekabet, modellerin kapasitesini her çeyrekte katlamaya devam ediyor.</p>
      <p>Otonom sistemler tarafında ise robotik ve self-driving teknolojilerinde önemli adımlar atıldı. Waymo'nun yeni şehirlere açılması ve Tesla'nın FSD v13 güncellemesi sektörde tartışma konusu olmaya devam ediyor.</p>

      <h2>Türkiye'de Yapay Zeka</h2>
      <p>Türkiye'de AI girişimleri özellikle dikey uygulamalarda güçleniyor. Sağlık, finans ve perakende sektörlerinde AI-native çözümler sunan startuplar, hem yerel hem de uluslararası yatırımcıların radarında.</p>
      <p>Boğaziçi Üniversitesi Bilgisayar Mühendisliği bölümü, bu dönem AI araştırma çıktılarıyla uluslararası konferanslarda dikkat çekti. NeurIPS ve ICML'de kabul edilen 5 makale, üniversitenin bu alandaki gücünü bir kez daha kanıtladı.</p>

      <h2>ENVC AI Talks</h2>
      <p>Nisan ayında başlayacak "AI Deep Dive" serisi kapsamında, her hafta farklı bir yapay zeka alt alanını derinlemesine inceleyeceğiz. İlk oturumun konusu: "Büyük Dil Modellerini Ürüne Dönüştürmek — Pratik Bir Rehber." Kayıtlar yakında açılacak.</p>
    `,
  },
  {
    slug: "topluluk-etkinlikleri-ve-firsatlar",
    title: "Topluluk Etkinlikleri ve Fırsatlar",
    summary:
      "Mart ayı etkinlik takvimi, staj fırsatları, açık pozisyonlar ve ENVC ağı içindeki son gelişmeler.",
    date: "2026-02-28",
    author: "ENVC Editör",
    category: "Topluluk",
    content: `
      <p>ENVC topluluğu olarak bu ay yoğun bir takvimle karşınızdayız. İşte önümüzdeki haftalarda kaçırmamanız gereken etkinlikler ve fırsatlar.</p>

      <h2>Yaklaşan Etkinlikler</h2>
      <p><strong>Demo Day 2026 Spring (28 Mart):</strong> Bu dönemin en büyük etkinliği. 8 girişim, sahneye çıkarak yatırımcılara ve mentörlere fikirlerini sunacak. Etkinlik Boğaziçi Üniversitesi Demir Demirgil Salonu'nda gerçekleşecek. Kayıtlar açık.</p>
      <p><strong>VC Panel: "Erken Aşama Fonlama 101" (15 Mart):</strong> Earlybird, 500 Global ve Revo Capital'den partnerlerin katılımıyla gerçekleşecek panel, erken aşama fonlama sürecinin A'dan Z'ye anlatılacağı interaktif bir oturum olacak.</p>
      <p><strong>Office Hours (Her Çarşamba):</strong> Haftalık mentor oturumlarımız devam ediyor. Bu ay özellikle fintech ve SaaS alanlarında deneyimli mentörler eşlik edecek.</p>

      <h2>Staj ve Kariyer Fırsatları</h2>
      <p>ENVC ağı üzerinden paylaşılan güncel fırsatlar:</p>
      <p>• <strong>Getir — Product Intern:</strong> İstanbul, hybrid. Başvuru: 20 Mart'a kadar.</p>
      <p>• <strong>Insider — Data Science Intern:</strong> İstanbul, uzaktan. Başvuru: 25 Mart'a kadar.</p>
      <p>• <strong>Earlybird VC — VC Analyst Intern:</strong> İstanbul, ofis. Başvuru: 18 Mart'a kadar.</p>

      <h2>Topluluk Haberleri</h2>
      <p>ENVC üyelerinden Ece Yılmaz (BM '24), kurduğu edtech girişimi EduBridge ile Techstars İstanbul programına kabul edildi. Kendisini tebrik ediyor ve yolculuğunu yakından takip ediyoruz.</p>
      <p>Topluluk üye sayımız bu ay 500'ü aştı. Katılımınız ve desteğiniz için teşekkür ederiz!</p>
    `,
  },
];
