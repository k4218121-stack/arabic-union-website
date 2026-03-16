// Academic Data - Esenyurt University - Real Programs (Turkish)
function _c(names) { return names.map(function (n) { return { name: n, url: "#" } }); }
function _sem(courses) { return { "1. Dönem": _c(courses.slice(0, Math.ceil(courses.length / 2))), "2. Dönem": _c(courses.slice(Math.ceil(courses.length / 2))) }; }
function _yrs(n, courses) { var r = {}; for (var i = 1; i <= n; i++) { r["Yıl " + i] = _sem(courses); } return r; }

var academicData = {
    "Lisans": {
        "İdari, Siyasi Bilimler ve Sosyal Bilimler": {
            "Havacılık Yönetimi": _yrs(4, ["Havacılığa Giriş", "Havalimanı Yönetimi", "Havacılık Güvenliği", "Ekonomi", "Hava Hukuku", "Havayolu Yönetimi", "Hava Planlaması", "Bitirme Projesi"]),
            "İşletme": _yrs(4, ["Yönetim İlkeleri", "Muhasebe", "Mikroekonomi", "Pazarlama", "İnsan Kaynakları Yönetimi", "Stratejik Yönetim", "Operasyon Yönetimi", "Bitirme Projesi"]),
            "İşletme (İngilizce)": _yrs(4, ["Principles of Management", "Accounting", "Microeconomics", "Marketing", "Human Resources", "Strategic Management", "Operations Management", "Graduation Project"]),
            "Ekonomi ve Finans (İngilizce)": _yrs(4, ["Microeconomics", "Macroeconomics", "Financial Accounting", "Statistics", "Corporate Finance", "International Finance", "Econometrics", "Graduation Project"]),
            "Lojistik Yönetimi": _yrs(4, ["Lojistik İlkeleri", "Tedarik Zinciri Yönetimi", "Uluslararası Taşımacılık", "Depo Yönetimi", "Uluslararası Ticaret", "Bilgi Sistemleri", "Lojistik Planlama", "Bitirme Projesi"]),
            "Siyaset Bilimi ve Uluslararası İlişkiler": _yrs(4, ["Siyaset Bilimine Giriş", "Uluslararası İlişkiler", "Anayasa Hukuku", "Siyasi Tarih", "Siyasi Sistemler", "Dış Politika", "İnsan Hakları", "Bitirme Projesi"]),
            "Siyaset Bilimi ve Uluslararası İlişkiler (İngilizce)": _yrs(4, ["Political Science", "International Relations", "Constitutional Law", "Political History", "Comparative Politics", "Foreign Policy", "Human Rights", "Graduation Project"]),
            "Uluslararası Ticaret ve Finans": _yrs(4, ["Uluslararası Ticaret", "Finans", "Ekonomi", "Muhasebe", "Finansal Piyasalar", "Uluslararası Pazarlama", "Risk Yönetimi", "Bitirme Projesi"]),
            "E-Ticaret ve Yönetim": _yrs(4, ["E-Ticaret", "Dijital Pazarlama", "Bilgi Sistemleri", "İşletme Yönetimi", "Veri Analizi", "Web Tasarım", "Elektronik Ödeme", "Bitirme Projesi"]),
            "Yönetim Bilişim Sistemleri": _yrs(4, ["Bilgi Sistemleri", "Programlama", "Veritabanları", "Sistem Analizi", "Proje Yönetimi", "Bilgi Güvenliği", "Yapay Zeka", "Bitirme Projesi"]),
            "Halkla İlişkiler ve Reklamcılık": _yrs(4, ["İletişim İlkeleri", "Halkla İlişkiler", "Reklamcılık", "Dijital Pazarlama", "Kriz Yönetimi", "Yeni Medya", "Reklam Kampanyaları", "Bitirme Projesi"]),
            "Psikoloji": _yrs(4, ["Psikolojiye Giriş", "Deneysel Psikoloji", "İstatistik", "Sosyal Psikoloji", "Klinik Psikoloji", "Psikoterapi", "Psikopatoloji", "Bitirme Projesi"]),
            "Radyo, Televizyon ve Sinema": _yrs(4, ["Sinemaya Giriş", "Fotoğrafçılık", "Kurgu", "Senaryo Yazarlığı", "Televizyon Yönetmenliği", "Medya Üretimi", "Film Yapımı", "Bitirme Projesi"]),
            "Sosyoloji": _yrs(4, ["Sosyolojiye Giriş", "Sosyal Teoriler", "Sosyal Araştırma", "Kent Sosyolojisi", "Antropoloji", "Sosyal Değişim", "Sosyal Politika", "Bitirme Projesi"]),
            "Yeni Medya ve İletişim": _yrs(4, ["Dijital Medya", "Sosyal Medya", "Web Tasarımı", "İçerik Üretimi", "E-Pazarlama", "Veri Analizi", "Dijital Gazetecilik", "Bitirme Projesi"]),
            "Dijital Oyun Tasarımı": _yrs(4, ["Oyun Programlama", "Grafik Tasarım", "Oyun Motorları", "Animasyon", "Seviye Tasarımı", "Oyunlar İçin Yapay Zeka", "Mobil Oyun Geliştirme", "Bitirme Projesi"])
        },
        "Mühendislik ve Mimarlık Fakültesi": {
            "Bilgisayar Mühendisliği": _yrs(4, ["Programlama 1", "Matematik", "Fizik", "Mühendisliğe Giriş", "Programlama 2", "Veri Yapıları", "Veritabanları", "Bilgisayar Ağları"]),
            "Elektrik-Elektronik Mühendisliği (İngilizce)": _yrs(4, ["Electrical Circuits", "Electronics", "Engineering Math", "Physics", "Control Systems", "Signal Processing", "Communications", "Power Systems"]),
            "Yazılım Mühendisliği (İngilizce)": _yrs(4, ["Programming Fundamentals", "Mathematics", "Software Engineering", "Databases", "Web Development", "Operating Systems", "Software Testing", "Graduation Project"]),
            "İç Mimarlık": _yrs(4, ["Tasarım İlkeleri", "Mimari Çizim", "Mimarlık Tarihi", "Yapı Malzemeleri", "3D Tasarım", "Aydınlatma", "Tasarım Projesi", "Bitirme Projesi"]),
            "İç Mimarlık ve Çevre Tasarımı": _yrs(4, ["Çevre Tasarımı", "Mimarlık İlkeleri", "Mekan Tasarımı", "Sürdürülebilir Malzemeler", "Kentsel Tasarım", "Sürdürülebilirlik", "Peyzaj Tasarımı", "Bitirme Projesi"]),
            "Endüstriyel Tasarım": _yrs(4, ["Tasarım Temelleri", "Endüstriyel Çizim", "Ürün Tasarımı", "Malzemeler ve Üretim", "Bilgisayar Destekli Tasarım", "Tasarım Yönetimi", "Prototipleme", "Bitirme Projesi"])
        },
        "Sağlık Bilimleri Fakültesi": {
            "Beslenme ve Diyetetik": _yrs(4, ["Biyokimya", "Beslenme Bilimi", "İnsan Fizyolojisi", "Tıbbi Beslenme Tedavisi", "Gıda Güvenliği", "Sporcu Beslenmesi", "Toplum Beslenmesi", "Bitirme Projesi"]),
            "Çocuk Gelişimi": _yrs(4, ["Çocuk Psikolojisi", "Büyüme ve Gelişim", "Erken Çocukluk Eğitimi", "Çocuk Sağlığı", "Aile Danışmanlığı", "Oyun ve Öğrenme", "Özel Eğitim", "Bitirme Projesi"]),
            "Hemşirelik": _yrs(4, ["İnsan Anatomisi", "Hemşirelik Temelleri", "Farmakoloji", "Dahiliye Hemşireliği", "Pediatri Hemşireliği", "Ruh Sağlığı Hemşireliği", "Acil Hemşirelik", "Bitirme Projesi"]),
            "Fizyoterapi ve Rehabilitasyon": _yrs(4, ["Anatomi", "Fizyoloji", "Elektroterapi", "Hidroterapi", "Rehabilitasyon", "Manuel Terapi", "Spor Yaralanmaları Tedavisi", "Bitirme Projesi"]),
            "Ebelik": _yrs(4, ["İnsan Anatomisi", "Temel Ebelik", "Kadın Sağlığı", "Gebelik Bakımı", "Normal Doğum", "Yenidoğan Bakımı", "Klinik Ebelik", "Bitirme Projesi"]),
            "Sosyal Hizmet": _yrs(4, ["Sosyal Hizmete Giriş", "Sosyoloji", "Psikoloji", "Grup Çalışması", "Aile Bakımı", "Sosyal Politika", "Saha Eğitimi", "Bitirme Projesi"])
        },
        "Uygulamalı Bilimler Fakültesi": {
            "Gastronomi ve Mutfak Sanatları": _yrs(4, ["Temel Mutfak Sanatları", "Gıda Güvenliği", "Türk Mutfağı", "Dünya Mutfağı", "Restoran Yönetimi", "Pastacılık ve Fırıncılık", "Beslenme ve Menü", "Bitirme Projesi"]),
            "Yazılım Geliştirme": _yrs(4, ["Programlama", "Veritabanları", "Web Geliştirme", "Mobil Uygulama Geliştirme", "Yazılım Mühendisliği", "Bulut Bilişim", "Bilgi Güvenliği", "Bitirme Projesi"]),
            "Bilişim Sistemleri ve Teknolojileri": _yrs(4, ["BT Temelleri", "Ağlar", "İşletim Sistemleri", "Veritabanları", "Bilgi Güvenliği", "Bulut Bilişim", "Bilişim Sistemleri Yönetimi", "Bitirme Projesi"]),
            "Veri Bilimi ve Analitik": _yrs(4, ["İstatistik", "Python Programlama", "Veri Analizi", "Makine Öğrenimi", "Büyük Veri", "Veri Görselleştirme", "Yapay Zeka", "Bitirme Projesi"])
        },
        "Beden Eğitimi ve Spor Fakültesi": {
            "Antrenörlük Eğitimi": _yrs(4, ["Anatomi", "Spor Fizyolojisi", "Spor Antrenörlüğü", "Spor Psikolojisi", "Sporcu Beslenmesi", "Takım Yönetimi", "Spor Yaralanmaları", "Bitirme Projesi"]),
            "Spor Yönetimi": _yrs(4, ["Yönetim İlkeleri", "Spor Pazarlaması", "Spor Tesisleri Yönetimi", "Spor Hukuku", "Spor Medyası", "Etkinlik Organizasyonu", "Spor Ekonomisi", "Bitirme Projesi"])
        }
    },
    "Sağlık Hizmetleri Meslek Yüksekokulu": {
        "Sağlık Hizmetleri Meslek Yüksekokulu": {
            "Diş Protez Teknolojisi": _yrs(2, ["Ağız Anatomisi", "Diş Hekimliği Malzemeleri", "Sabit Protezler", "Hareketli Protezler"]),
            "Ağız ve Diş Sağlığı": _yrs(2, ["Ağız Anatomisi", "Ağız Sağlığı", "Diş Radyolojisi", "Koruyucu Diş Hekimliği"]),
            "Ameliyathane Hizmetleri": _yrs(2, ["Anatomi", "Sterilizasyon", "Cerrahi Teknikler", "Anestezi ve Reanimasyon"]),
            "Ameliyathane Hizmetleri (İkinci Öğretim)": _yrs(2, ["Anatomi", "Sterilizasyon", "Cerrahi Teknikler", "Anestezi ve Reanimasyon"]),
            "Anestezi": _yrs(2, ["Anatomi", "Farmakoloji", "Anestezi Teknikleri", "Yoğun Bakım"]),
            "Anestezi (İkinci Öğretim)": _yrs(2, ["Anatomi", "Farmakoloji", "Anestezi Teknikleri", "Yoğun Bakım"]),
            "Çocuk Gelişimi": _yrs(2, ["Çocuk Gelişimi", "Erken Çocukluk Eğitimi", "Çocuk Sağlığı", "Oyun ve Öğrenme"]),
            "Fizyoterapi": _yrs(2, ["Anatomi", "Fizyoloji", "Fizik Tedavi Teknikleri", "Rehabilitasyon"]),
            "İlk ve Acil Yardım": _yrs(2, ["İlk Yardım", "Acil Tıp", "Kardiyopulmoner Resüsitasyon", "Hasta Nakli"]),
            "İlk ve Acil Yardım (İkinci Öğretim)": _yrs(2, ["İlk Yardım", "Acil Tıp", "Kardiyopulmoner Resüsitasyon", "Hasta Nakli"]),
            "Tıbbi Dokümantasyon ve Sekreterlik": _yrs(2, ["Tıbbi Terminoloji", "Tıbbi Kayıtlar", "Tıbbi Kodlama", "Hastane Yönetimi"]),
            "Tıbbi Görüntüleme Teknikleri": _yrs(2, ["Radyasyon Fiziği", "Radyoloji Teknikleri", "Bilgisayarlı Tomografi", "Manyetik Rezonans"]),
            "Tıbbi Görüntüleme Teknikleri (İkinci Öğretim)": _yrs(2, ["Radyasyon Fiziği", "Radyoloji Teknikleri", "Bilgisayarlı Tomografi", "Manyetik Rezonans"]),
            "Tıbbi Laboratuvar Teknikleri": _yrs(2, ["Biyokimya", "Mikrobiyoloji", "Hematoloji", "Tıbbi Analizler"]),
            "Tıbbi Laboratuvar Teknikleri (İkinci Öğretim)": _yrs(2, ["Biyokimya", "Mikrobiyoloji", "Hematoloji", "Tıbbi Analizler"]),
            "Evde Hasta Bakımı": _yrs(2, ["Bakım Temelleri", "Yaşlı Sağlığı", "İlk Yardım", "Tıbbi Beslenme Tedavisi"])
        }
    },
    "Meslek Yüksekokulu": {
        "Meslek Yüksekokulu (Teknik ve İdari Bölümler)": {
            "Aşçılık": _yrs(2, ["Mutfak Sanatları", "Gıda Güvenliği", "Türk Mutfağı", "Dünya Mutfağı"]),
            "Ceza İnfaz ve Güvenlik Hizmetleri": _yrs(2, ["Ceza Hukuku", "Kamu Güvenliği", "İnsan Hakları", "Güvenlik Yönetimi"]),
            "İnternet ve Ağ Teknolojileri": _yrs(2, ["Ağ Temelleri", "İnternet Protokolleri", "Ağ Güvenliği", "Sunucu Yönetimi"]),
            "Bilgisayar Teknolojisi": _yrs(2, ["Bilgisayar Temelleri", "Bilgisayar Bakımı", "İşletim Sistemleri", "Ağlar"]),
            "Bilgisayar Destekli Tasarım ve Animasyon": _yrs(2, ["Grafik Tasarım", "Animasyon", "3D Modelleme", "Kurgu"]),
            "Bilgisayar Programcılığı": _yrs(2, ["Programlama", "Veritabanları", "Web Geliştirme", "Uygulama Geliştirme"]),
            "Bilgisayar Programcılığı (İkinci Öğretim)": _yrs(2, ["Programlama", "Veritabanları", "Web Geliştirme", "Uygulama Geliştirme"]),
            "Bilgi Güvenliği Teknolojisi": _yrs(2, ["Bilgi Güvenliği", "Kriptografi", "Penetrasyon Testi", "Ağ Güvenliği"]),
            "Dış Ticaret": _yrs(2, ["Uluslararası Ticaret", "Gümrük", "Uluslararası Finans", "Lojistik"]),
            "E-Ticaret ve Pazarlama": _yrs(2, ["Dijital Pazarlama", "E-Ticaret", "İçerik Yönetimi", "Veri Analizi"]),
            "Grafik Tasarım": _yrs(2, ["Tasarım İlkeleri", "Photoshop", "Illustrator", "Kurumsal Kimlik Tasarımı"]),
            "Grafik Tasarım (İkinci Öğretim)": _yrs(2, ["Tasarım İlkeleri", "Photoshop", "Illustrator", "Kurumsal Kimlik Tasarımı"]),
            "Halkla İlişkiler ve Tanıtım": _yrs(2, ["Halkla İlişkiler", "Reklamcılık", "Pazarlama", "Etkinlik Yönetimi"]),
            "İş Sağlığı ve Güvenliği": _yrs(2, ["İş Güvenliği", "Mesleki Sağlık", "Risk Yönetimi", "Mevzuat"]),
            "İş Sağlığı ve Güvenliği (İkinci Öğretim)": _yrs(2, ["İş Güvenliği", "Mesleki Sağlık", "Risk Yönetimi", "Mevzuat"]),
            "İşletme Yönetimi": _yrs(2, ["Yönetim İlkeleri", "Muhasebe", "Pazarlama", "İnsan Kaynakları Yönetimi"]),
            "Lojistik": _yrs(2, ["Tedarik Zinciri Yönetimi", "Ulaştırma", "Depolama", "Uluslararası Ticaret"]),
            "Radyo ve Televizyon Programcılığı": _yrs(2, ["Televizyon Prodüksiyonu", "Fotoğrafçılık", "Kurgu", "Senaryo Yazarlığı"]),
            "Sivil Havacılık Ulaştırma İşletmeciliği": _yrs(2, ["Havacılığa Giriş", "Havalimanı Yönetimi", "Havacılık Güvenliği", "Yolcu Hizmetleri"]),
            "Sivil Havacılık Kabin Hizmetleri": _yrs(2, ["Havacılık Hizmetleri", "Hava Güvenliği", "İlk Yardım", "Müşteri Hizmetleri"]),
            "İnsansız Hava Aracı Teknolojisi ve Operatörlüğü": _yrs(2, ["Drone Teknolojileri", "Uzaktan Kumanda", "Hava Fotoğrafçılığı", "Navigasyon"]),
            "Hava Trafik Kontrol": _yrs(2, ["Hava Trafik Kontrolü", "Hava Navigasyonu", "Meteoroloji", "İletişim Sistemleri"]),
            "Oyun Geliştirme ve Programlama": _yrs(2, ["Oyun Programlama", "Oyun Motorları", "Grafik Tasarım", "Oyun Geliştirme"]),
            "Turist Rehberliği": _yrs(2, ["Turizm İlkeleri", "Turist Rehberliği", "Tarih ve Uygarlık", "Turizm Coğrafyası"]),
            "Bankacılık ve Sigortacılık": _yrs(2, ["Bankacılık İlkeleri", "Sigortacılık", "Finans", "Banka Muhasebesi"]),
            "Elektrik": _yrs(2, ["Elektrik Devreleri", "Elektrik Tesisatı", "Kontrol Sistemleri", "Yenilenebilir Enerji"]),
            "Gıda Teknolojisi": _yrs(2, ["Gıda Teknolojisi", "Gıda Güvenliği", "Gıda Analizi", "Gıda Muhafaza"]),
            "Yapı Teknolojisi": _yrs(2, ["Yapı Malzemeleri", "İnşaat Çizimi", "Yapı Teknikleri", "Proje Yönetimi"])
        }
    },
    "Yüksek Lisans": {
        "Spor Bilimleri": {
            "Beden Eğitimi ve Spor Bilimleri (Tezli)": _yrs(2, ["Araştırma Yöntemleri", "Spor Fizyolojisi", "Spor Psikolojisi", "Yüksek Lisans Tezi"]),
            "Beden Eğitimi ve Spor Bilimleri (Tezsiz)": _yrs(2, ["Araştırma Yöntemleri", "Spor Fizyolojisi", "Spor Psikolojisi", "Bitirme Projesi"]),
            "Spor Sağlık Bilimleri (Tezli)": _yrs(2, ["Spor Hekimliği", "Sporcu Beslenmesi", "Rehabilitasyon", "Yüksek Lisans Tezi"]),
            "Spor Sağlık Bilimleri (Tezsiz)": _yrs(2, ["Spor Hekimliği", "Sporcu Beslenmesi", "Rehabilitasyon", "Bitirme Projesi"]),
            "Fiziksel Aktivite, Sağlık ve Spor Bilimleri (Tezli)": _yrs(2, ["Fiziksel Aktivite", "Halk Sağlığı", "Spor Antrenörlüğü", "Yüksek Lisans Tezi"]),
            "Fiziksel Aktivite, Sağlık ve Spor Bilimleri (Tezsiz)": _yrs(2, ["Fiziksel Aktivite", "Halk Sağlığı", "Spor Antrenörlüğü", "Bitirme Projesi"]),
            "Hareket ve Antrenman Bilimleri (Tezsiz)": _yrs(2, ["Hareket Bilimi", "İleri Antrenman", "Sportif Performans", "Bitirme Projesi"])
        },
        "Mühendislik Bilimleri": {
            "Elektrik-Elektronik Mühendisliği (Tezli)": _yrs(2, ["İleri Sistemler", "Sinyal İşleme", "Araştırma Yöntemleri", "Yüksek Lisans Tezi"]),
            "Elektrik-Elektronik Mühendisliği (Tezsiz)": _yrs(2, ["İleri Sistemler", "Sinyal İşleme", "Araştırma Yöntemleri", "Bitirme Projesi"]),
            "Bilgisayar Mühendisliği (Tezli)": _yrs(2, ["Yapay Zeka", "Bulut Bilişim", "Araştırma Yöntemleri", "Yüksek Lisans Tezi"]),
            "Bilgisayar Mühendisliği (Tezsiz)": _yrs(2, ["Yapay Zeka", "Bulut Bilişim", "Araştırma Yöntemleri", "Bitirme Projesi"]),
            "Endüstri Mühendisliği (Tezli)": _yrs(2, ["İleri Yöneylem Araştırması", "Kalite Yönetimi", "Araştırma Yöntemleri", "Yüksek Lisans Tezi"]),
            "Endüstri Mühendisliği (Tezsiz)": _yrs(2, ["İleri Yöneylem Araştırması", "Kalite Yönetimi", "Araştırma Yöntemleri", "Bitirme Projesi"]),
            "İnşaat Mühendisliği (Tezli)": _yrs(2, ["İleri Yapısal Tasarım", "Deprem Mühendisliği", "Araştırma Yöntemleri", "Yüksek Lisans Tezi"])
        },
        "Finansal ve İdari Bilimler": {
            "Finans (Tezli)": _yrs(2, ["İleri Finans", "Risk Yönetimi", "Araştırma Yöntemleri", "Yüksek Lisans Tezi"]),
            "Finans (Tezsiz)": _yrs(2, ["İleri Finans", "Risk Yönetimi", "Araştırma Yöntemleri", "Bitirme Projesi"]),
            "Gayrimenkul Değerleme ve Finans (Tezli)": _yrs(2, ["Gayrimenkul Değerleme", "Gayrimenkul Finansmanı", "Araştırma Yöntemleri", "Yüksek Lisans Tezi"]),
            "Gayrimenkul Değerleme ve Finans (Tezsiz)": _yrs(2, ["Gayrimenkul Değerleme", "Gayrimenkul Finansmanı", "Araştırma Yöntemleri", "Bitirme Projesi"]),
            "Hastane ve Sağlık Kuruluşları Yönetimi (Tezli)": _yrs(2, ["Hastane Yönetimi", "Sağlık Kalitesi", "Araştırma Yöntemleri", "Yüksek Lisans Tezi"]),
            "Hastane ve Sağlık Kuruluşları Yönetimi (Tezsiz)": _yrs(2, ["Hastane Yönetimi", "Sağlık Kalitesi", "Araştırma Yöntemleri", "Bitirme Projesi"]),
            "İşletme (Tezli)": _yrs(2, ["Stratejik Yönetim", "İleri Pazarlama", "Araştırma Yöntemleri", "Yüksek Lisans Tezi"]),
            "İşletme (Tezsiz)": _yrs(2, ["Stratejik Yönetim", "İleri Pazarlama", "Araştırma Yöntemleri", "Bitirme Projesi"]),
            "Lojistik Yönetimi (Tezli)": _yrs(2, ["İleri Tedarik Zinciri", "Uluslararası Taşımacılık", "Araştırma Yöntemleri", "Yüksek Lisans Tezi"]),
            "Lojistik Yönetimi (Tezsiz)": _yrs(2, ["İleri Tedarik Zinciri", "Uluslararası Taşımacılık", "Araştırma Yöntemleri", "Bitirme Projesi"]),
            "Yönetim ve Organizasyon (Tezli)": _yrs(2, ["Örgüt Teorileri", "Örgütsel Davranış", "Araştırma Yöntemleri", "Yüksek Lisans Tezi"]),
            "Yönetim ve Organizasyon (Tezsiz)": _yrs(2, ["Örgüt Teorileri", "Örgütsel Davranış", "Araştırma Yöntemleri", "Bitirme Projesi"])
        },
        "Beşeri ve Sağlık Bilimleri": {
            "İş Sağlığı ve Güvenliği (Tezli)": _yrs(2, ["İleri Risk Yönetimi", "Çalışma Ortamı", "Araştırma Yöntemleri", "Yüksek Lisans Tezi"]),
            "İş Sağlığı ve Güvenliği (Tezsiz)": _yrs(2, ["İleri Risk Yönetimi", "Çalışma Ortamı", "Araştırma Yöntemleri", "Bitirme Projesi"]),
            "Klinik Psikoloji (Tezsiz)": _yrs(2, ["Bilişsel Davranışçı Terapi", "Psikiyatrik Tanı", "Araştırma Yöntemleri", "Bitirme Projesi"]),
            "Psikoloji (Tezli)": _yrs(2, ["İleri Psikoloji", "Deneysel Araştırma", "Araştırma Yöntemleri", "Yüksek Lisans Tezi"]),
            "Psikoloji (Tezsiz)": _yrs(2, ["İleri Psikoloji", "Deneysel Araştırma", "Araştırma Yöntemleri", "Bitirme Projesi"])
        },
        "Uzaktan Eğitim": {
            "Sağlık Kuruluşları Yönetimi (Uzaktan Eğitim)": _yrs(2, ["Sağlık Kuruluşları Yönetimi", "Sağlıkta Kalite", "Araştırma Yöntemleri", "Bitirme Projesi"]),
            "İşletme (Uzaktan Eğitim)": _yrs(2, ["Stratejik Yönetim", "Pazarlama", "Araştırma Yöntemleri", "Bitirme Projesi"])
        },
        "İngilizce Programlar": {
            "İşletme (Tezli) (İngilizce)": _yrs(2, ["Strategic Management", "International Business", "Research Methods", "Thesis"]),
            "İşletme (Tezsiz) (İngilizce)": _yrs(2, ["Strategic Management", "International Business", "Research Methods", "Project"]),
            "Siyaset Bilimi ve Uluslararası İlişkiler (Tezli) (İngilizce)": _yrs(2, ["Political Theory", "International Relations", "Research Methods", "Thesis"]),
            "Siyaset Bilimi ve Uluslararası İlişkiler (Tezsiz) (İngilizce)": _yrs(2, ["Political Theory", "International Relations", "Research Methods", "Project"])
        }
    },
    "Doktora": {
        "Doktora Programları": {
            "İşletme (Doktora)": _yrs(3, ["İleri Stratejik Yönetim", "Örgüt Teorileri", "İleri Araştırma Yöntemleri", "Seminer", "Doktora Tezi", "Özel Konular"]),
            "İnşaat Mühendisliği (Doktora)": _yrs(3, ["İleri Yapısal Tasarım", "Yapı Dinamiği", "İleri Araştırma Yöntemleri", "Seminer", "Doktora Tezi", "Özel Konular"])
        }
    },
    "Hazırlık Yılı": {
        "Türkçe": {
            "TÖMER": {
                "A1": _sem(["Okuma A1", "Yazma A1", "Konuşma A1", "Dinleme A1"]),
                "A2": _sem(["Okuma A2", "Yazma A2", "Konuşma A2", "Dinleme A2"]),
                "B1": _sem(["Okuma B1", "Yazma B1", "Konuşma B1", "Dinleme B1"]),
                "B2": _sem(["Okuma B2", "Yazma B2", "Konuşma B2", "Dinleme B2"]),
                "C1": _sem(["Okuma C1", "Yazma C1", "Konuşma C1", "Dinleme C1"]),
                "C2": _sem(["Okuma C2", "Yazma C2", "Konuşma C2", "Dinleme C2"])
            }
        },
        "İngilizce": {
            "İngilizce": {
                "A1": _sem(["Reading A1", "Writing A1", "Speaking A1", "Listening A1"]),
                "A2": _sem(["Reading A2", "Writing A2", "Speaking A2", "Listening A2"]),
                "B1": _sem(["Reading B1", "Writing B1", "Speaking B1", "Listening B1"]),
                "B2": _sem(["Reading B2", "Writing B2", "Speaking B2", "Listening B2"]),
                "C1": _sem(["Reading C1", "Writing C1", "Speaking C1", "Listening C1"]),
                "C2": _sem(["Reading C2", "Writing C2", "Speaking C2", "Listening C2"])
            }
        }
    }
};
