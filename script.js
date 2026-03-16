// script.js - JavaScript functionality for Arab Student Union website

// Student Guide Link Functions
function openStudentAccommodation() {
    window.open('https://docs.google.com/spreadsheets/d/143Ero8YGIyb3ZM7p9rzYBrLa2jWvkAGD/edit?usp=drive_link&ouid=113747498321073357698&rtpof=true&sd=true', '_blank');
}

// News Data Array - Now fetched from API
let newsData = [];

// Fetch News from API
async function loadNews() {
    try {
        const data = await window.api.getNews();
        if (Array.isArray(data) && data.length > 0) {
            newsData = data;
            renderNews();
        } else {
            console.log('No news found or API returned empty');
            renderNews(); // Render empty state
        }
    } catch (error) {
        console.error('Error loading news:', error);
        document.getElementById('news-container').innerHTML = '<div class="error-message">Failed to load news. Please try again later.</div>';
    }
}

// Call loadNews on init
document.addEventListener('DOMContentLoaded', loadNews);

// Toggle state for news visibility
let isNewsHidden = false;

// Member Data Array
const membersData = [
    {
        nameAr: "",
        nameTr: "",
        roleAr: "رئيس",
        roleTr: "Başkan",
        deptAr: "",
        deptTr: "",
        photo: "",
        bioAr: "",
        bioTr: "",
        socialMedia: {
            whatsapp: "",
            telegram: "",
            instagram: ""
        }
    },
    {
        nameAr: "جمانة أشرف",
        nameTr: "Jumana Ashraf",
        roleAr: "نائبة رئيس ورئيسة حالياً بالنيابة",
        roleTr: "Başkan Yardımcısı ve Şu An Vekil Başkan",
        deptAr: "الهندسة المعمارية",
        deptTr: "Mimarlık",
        photo: "member2.jpg",
        bioAr: "نائبة رئيس اتحاد العرب في جامعة إسنيورت ورئيسة حالياً بالنيابة، طالبة هندسة معمارية، تُسهم في تنسيق الأعمال التنظيمية ودعم الأنشطة الطلابية داخل الاتحاد.",
        bioTr: "Esenyurt Üniversitesi Arap Öğrenciler Birliği Başkan Yardımcısı ve şu an Vekil Başkan, Mimarlık öğrencisi, birlik içindeki organizasyonel çalışmaları koordine etme ve öğrenci faaliyetlerini destekleme konusunda katkıda bulunuyor.",
        socialMedia: {
            whatsapp: "https://wa.me/905551234568",
            telegram: "https://t.me/cumaneesref",
            instagram: "https://www.instagram.com/cumaneesref"
        }
    },
    {
        nameAr: "فاطمة رياض",
        nameTr: "Fatma Riyad",
        roleAr: "أمينة سر",
        roleTr: "Sekreter",
        deptAr: "الهندسة المعمارية",
        deptTr: "Mimarlık",
        photo: "member3.jpg",
        bioAr: "أمينة سر اتحاد العرب في جامعة إسنيورت، تدرس الهندسة المعمارية، وتُعنى بتنظيم الشؤون الإدارية وتوثيق أعمال الاتحاد.",
        bioTr: "Esenyurt Üniversitesi Arap Öğrenciler Birliği Sekreteri, Mimarlık bölümünde okuyor, idari işleri düzenleme ve birliğin çalışmalarını belgeleme konusunda ilgileniyor.",
        socialMedia: {
            whatsapp: "https://wa.me/905551234569",
            telegram: "https://t.me/fatmariyad",
            instagram: "https://www.instagram.com/fatmariyad"
        }
    },
    {
        nameAr: "أمين دمراني",
        nameTr: "Amin Damrani",
        roleAr: "مسؤول التقنية و التحويل الرقمي",
        roleTr: "Teknoloji ve Dijital Dönüşüm Sorumlusu",
        deptAr: "هندسة الحاسوب",
        deptTr: "Bilgisayar Mühendisliği",
        photo: "member8.jpg",
        bioAr: "عضو لجنة البنية التحتية الرقمية في اتحاد العرب بجامعة إسنيورت، يدرس هندسة الحاسوب، ويعمل على تطوير الحلول التقنية والبنية الرقمية للاتحاد، بما في ذلك إدارة المواقع الإلكترونية والأنظمة التقنية.",
        bioTr: "Esenyurt Üniversitesi Arap Öğrenciler Birliği Dijital Altyapı Komitesi üyesi, Bilgisayar Mühendisliği bölümünde okuyor, birliğin teknik çözümlerini ve dijital altyapısını geliştirme, web siteleri ve teknik sistemlerin yönetimi konusunda çalışıyor.",
        socialMedia: {
            whatsapp: "https://wa.me/905551234574",
            telegram: "https://t.me/amindamrani",
            instagram: "https://www.instagram.com/amindamrani"
        }
    },
    {
        nameAr: "آية عبد الغفور",
        nameTr: "Aya Abdulghafur",
        roleAr: "مسؤولة الأنشطة",
        roleTr: "Etkinlik Koordinatörü",
        deptAr: "الهندسة المعمارية",
        deptTr: "Mimarlık",
        photo: "member4.jpg",
        bioAr: "مسؤولة الأنشطة في اتحاد العرب بجامعة إسنيورت، تدرس الهندسة المعمارية، وتتولى تنظيم الفعاليات والأنشطة.",
        bioTr: "Esenyurt Üniversitesi Arap Öğrenciler Birliği Etkinlik Sorumlusu, Mimarlık bölümünde okuyor, etkinlikleri ve faaliyetleri organize etme görevini üstleniyor.",
        socialMedia: {
            whatsapp: "https://wa.me/905551234570",
            telegram: "https://t.me/ayaabdulgafur",
            instagram: "https://www.instagram.com/ayaabdulgafur"
        }
    },
    {
        nameAr: "أحمد ماهر الغروبي",
        nameTr: "Ahmed Maher Elghorouby",
        roleAr: "مسؤول الإعلام",
        roleTr: "Medya Koordinatörü",
        deptAr: "هندسة الحاسوب",
        deptTr: "Bilgisayar Mühendisliği",
        photo: "member5.jpg",
        bioAr: "مسؤول الإعلام في اتحاد العرب بجامعة إسنيورت، يدرس هندسة الحاسوب، ويشرف على المحتوى والتواصل الإعلامي للاتحاد.",
        bioTr: "Esenyurt Üniversitesi Arap Öğrenciler Birliği Medya Sorumlusu, Bilgisayar Mühendisliği bölümünde okuyor, birliğin içerik ve medya iletişimini denetliyor.",
        socialMedia: {
            whatsapp: "https://wa.me/905551234571",
            telegram: "https://t.me/ahmedmaherelgarubi",
            instagram: "https://www.instagram.com/ahmedmaherelgarubi"
        }
    },
    {
        nameAr: "محمد أيهم مصطفى",
        nameTr: "Muhammad Ayham Mustafa",
        roleAr: "مسؤول الشؤون الطلابية",
        roleTr: "Öğrenci İşleri Koordinatörü",
        deptAr: "الخدمات الطبية",
        deptTr: "Tıbbi Hizmetler",
        photo: "member6.jpg",
        bioAr: "مسؤول الشؤون الطلابية في اتحاد العرب بجامعة إسنيورت، يدرس في قسم الخدمات الطبية، ويعمل على متابعة شؤون الطلبة ودعمهم.",
        bioTr: "Esenyurt Üniversitesi Arap Öğrenciler Birliği Öğrenci İşleri Sorumlusu, Tıbbi Hizmetler bölümünde okuyor, öğrenci işlerini takip etme ve onları destekleme konusunda çalışıyor.",
        socialMedia: {
            whatsapp: "https://wa.me/905551234572",
            telegram: "https://t.me/muhammedeyyammustafa",
            instagram: "https://www.instagram.com/muhammedeyyammustafa"
        }
    },
    {
        nameAr: "شهد الضبعان",
        nameTr: "Shahd Dabaan",
        roleAr: "مسؤولة العلاقات العامة",
        roleTr: "Halkla İlişkiler Koordinatörü",
        deptAr: "الهندسة المعمارية",
        deptTr: "Mimarlık",
        photo: "member7.jpg",
        bioAr: "مسؤولة العلاقات العامة في اتحاد العرب بجامعة إسنيورت، تدرس الهندسة المعمارية، وتعمل على تعزيز التواصل وبناء العلاقات داخل وخارج الاتحاد.",
        bioTr: "Esenyurt Üniversitesi Arap Öğrenciler Birliği Halkla İlişkiler Sorumlusu, Mimarlık bölümünde okuyor, birlik içinde ve dışında iletişimi güçlendirme ve ilişkiler kurma konusunda çalışıyor.",
        socialMedia: {
            whatsapp: "https://wa.me/905551234573",
            telegram: "https://t.me/sehadeldaban",
            instagram: "https://www.instagram.com/sehadeldaban"
        }
    }
];

// Section Navigation
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all nav buttons
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected section
    document.getElementById(sectionId).classList.add('active');

    // Add active class to clicked button
    const clickedButton = Array.from(document.querySelectorAll('.nav-btn')).find(btn =>
        btn.getAttribute('onclick').includes(sectionId)
    );
    if (clickedButton) {
        clickedButton.classList.add('active');
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Modal Functions
function showMemberModal(nameAr, nameTr, roleAr, roleTr, deptAr, deptTr, photo, bioAr, bioTr) {
    const currentLang = localStorage.getItem('language') || 'tr';
    document.getElementById('modal-name').textContent = currentLang === 'ar' ? nameAr : nameTr;
    document.getElementById('modal-role').textContent = currentLang === 'ar' ? roleAr : roleTr;
    document.getElementById('modal-dept').textContent = currentLang === 'ar' ? deptAr : deptTr;
    document.getElementById('modal-photo').src = photo;
    document.getElementById('modal-bio').textContent = currentLang === 'ar' ? bioAr : bioTr;
    document.getElementById('memberModal').style.display = 'block';
}

function closeMemberModal() {
    document.getElementById('memberModal').style.display = 'none';
}

// Theme Toggle Functionality
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('icon');

// Initialize theme from localStorage or prefers-color-scheme
const storedTheme = localStorage.getItem('theme') ||
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

if (storedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeBtn.classList.add('dark-mode-btn');
    themeIcon.textContent = '☀️';
} else {
    document.body.classList.remove('dark-mode');
    themeBtn.classList.add('light-mode-btn');
    themeIcon.textContent = '🌙';
}

// Theme toggle event listener
themeBtn.addEventListener('click', () => {
    // Toggle the dark mode class on button
    themeBtn.classList.toggle('dark-mode-btn');
    themeBtn.classList.toggle('light-mode-btn');

    // Toggle body dark mode
    const isDark = document.body.classList.toggle('dark-mode');

    // Change the icon based on the state
    if (themeBtn.classList.contains('dark-mode-btn')) {
        themeIcon.textContent = '☀️'; // Switch to Sun
    } else {
        themeIcon.textContent = '🌙'; // Switch to Moon
    }

    // Save theme preference
    try {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (e) {
        // Handle localStorage errors silently
    }
});

// Close modal when clicking outside
window.onclick = function (event) {
    const memberModal = document.getElementById('memberModal');
    const newsModal = document.getElementById('newsModal');

    if (event.target === memberModal) {
        memberModal.style.display = 'none';
    }

    if (event.target === newsModal) {
        newsModal.style.display = 'none';
    }
};

// API base URL
const API_BASE = window.location.origin;

// Utility function for API calls
async function apiRequest(endpoint, options = {}) {
    const url = `${API_BASE}${endpoint}`;
    const config = {
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        },
        ...options
    };

    try {
        const response = await fetch(url, config);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || `HTTP error! status: ${response.status}`);
        }

        return data;
    } catch (error) {
        console.error('API request failed:', error);
        throw error;
    }
}

// Form submission handlers with API integration
document.getElementById('experienceForm')?.addEventListener('submit', async function (e) {
    e.preventDefault();

    // Prevent double submission
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = currentLang === 'ar' ? 'جاري الإرسال...' : 'Gönderiliyor...';

    try {
        const formData = {
            name: document.getElementById('studentName').value.trim(),
            major: document.getElementById('studentMajor').value.trim(),
            year: document.getElementById('studentYear').value,
            experience: document.getElementById('studentExperience').value.trim()
        };

        await apiRequest('/api/experiences', {
            method: 'POST',
            body: JSON.stringify(formData)
        });

        alert(window.formAlerts?.experience || 'شكراً لمشاركة تجربتك! سيتم مراجعتها ونشرها قريباً.');
        this.reset();
    } catch (error) {
        alert(currentLang === 'ar' ? 'حدث خطأ في إرسال التجربة. يرجى المحاولة مرة أخرى.' : 'Deneyim gönderilirken hata oluştu. Lütfen tekrar deneyin.');
        console.error('Experience submission error:', error);
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
});

document.getElementById('ideaForm')?.addEventListener('submit', async function (e) {
    e.preventDefault();

    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = currentLang === 'ar' ? 'جاري الإرسال...' : 'Gönderiliyor...';

    try {
        const formData = {
            name: document.getElementById('ideaName').value.trim(),
            category: document.getElementById('ideaCategory').value,
            content: document.getElementById('ideaContent').value.trim()
        };

        await apiRequest('/api/ideas', {
            method: 'POST',
            body: JSON.stringify(formData)
        });

        alert(window.formAlerts?.idea || 'شكراً لمقترحك! سنقوم بدراسته والرد عليك قريباً.');
        this.reset();
    } catch (error) {
        alert(currentLang === 'ar' ? 'حدث خطأ في إرسال المقترح. يرجى المحاولة مرة أخرى.' : 'Öneri gönderilirken hata oluştu. Lütfen tekrar deneyin.');
        console.error('Idea submission error:', error);
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
});

document.getElementById('volunteerForm')?.addEventListener('submit', async function (e) {
    e.preventDefault();

    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = currentLang === 'ar' ? 'جاري الإرسال...' : 'Gönderiliyor...';

    try {
        const formData = {
            name: document.getElementById('volName').value.trim(),
            email: document.getElementById('volEmail').value.trim(),
            phone: document.getElementById('volPhone').value.trim(),
            major: document.getElementById('volMajor').value.trim(),
            interest: document.getElementById('volInterest').value,
            experience: document.getElementById('volExperience').value.trim()
        };

        await apiRequest('/api/volunteers', {
            method: 'POST',
            body: JSON.stringify(formData)
        });

        alert(window.formAlerts?.volunteer || 'تم تسجيل طلبك بنجاح! سنتواصل معك قريباً.');
        this.reset();
    } catch (error) {
        alert(currentLang === 'ar' ? 'حدث خطأ في إرسال طلب التطوع. يرجى المحاولة مرة أخرى.' : 'Gönüllü başvurusu gönderilirken hata oluştu. Lütfen tekrar deneyin.');
        console.error('Volunteer submission error:', error);
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
});

document.getElementById('contactForm')?.addEventListener('submit', async function (e) {
    e.preventDefault();

    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = currentLang === 'ar' ? 'جاري الإرسال...' : 'Gönderiliyor...';

    try {
        const formData = {
            name: document.getElementById('contactName').value.trim(),
            email: document.getElementById('contactEmail').value.trim(),
            subject: document.getElementById('contactSubject').value,
            message: document.getElementById('contactMessage').value.trim()
        };

        await apiRequest('/api/contact', {
            method: 'POST',
            body: JSON.stringify(formData)
        });

        alert(window.formAlerts?.contact || 'تم إرسال رسالتك بنجاح! سنرد عليك في أقرب وقت.');
        this.reset();
    } catch (error) {
        alert(currentLang === 'ar' ? 'حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.' : 'Mesaj gönderilirken hata oluştu. Lütfen tekrar deneyin.');
        console.error('Contact submission error:', error);
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
});

document.getElementById('newsletterForm')?.addEventListener('submit', async function (e) {
    e.preventDefault();

    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = currentLang === 'ar' ? 'جاري الاشتراك...' : 'Abone olunuyor...';

    try {
        const formData = {
            name: document.getElementById('newsletterName').value.trim(),
            email: document.getElementById('newsletterEmail').value.trim()
        };

        await apiRequest('/api/newsletter', {
            method: 'POST',
            body: JSON.stringify(formData)
        });

        alert(currentLang === 'ar' ? 'تم الاشتراك بنجاح! ستتلقى آخر الأخبار والتحديثات.' : 'Başarıyla abone oldunuz! En son haberleri ve güncellemeleri alacaksınız.');
        this.reset();
    } catch (error) {
        alert(currentLang === 'ar' ? 'حدث خطأ في الاشتراك. يرجى المحاولة مرة أخرى.' : 'Abone olurken hata oluştu. Lütfen tekrar deneyin.');
        console.error('Newsletter subscription error:', error);
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
});

// Language Toggle Functionality
let currentLang = localStorage.getItem('language') || 'tr';

// Event listeners for language buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        const selectedLang = this.getAttribute('data-lang');
        currentLang = selectedLang;
        localStorage.setItem('language', currentLang);
        updateLanguage();
    });
});

function updateLanguage() {
    // Update HTML lang and dir attributes
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    // Update all elements with data-ar and data-tr attributes
    document.querySelectorAll('[data-ar][data-tr]').forEach(el => {
        if (currentLang === 'tr') {
            el.textContent = el.getAttribute('data-tr');
        } else if (currentLang === 'en') {
            // For English, we could add data-en attributes or use a default
            el.textContent = el.getAttribute('data-ar'); // fallback to Arabic for now
        } else {
            el.textContent = el.getAttribute('data-ar');
        }
    });

    // Update select options
    document.querySelectorAll('select option[data-ar][data-tr]').forEach(option => {
        if (currentLang === 'tr') {
            option.textContent = option.getAttribute('data-tr');
        } else if (currentLang === 'en') {
            option.textContent = option.getAttribute('data-ar'); // fallback
        } else {
            option.textContent = option.getAttribute('data-ar');
        }
    });

    // Update language button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const lang = btn.getAttribute('data-lang');
        if (lang === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update theme buttons active state
    const isDark = document.body.classList.contains('dark-mode');
    updateThemeButtons(isDark ? 'dark' : 'light');

    // Update form alerts
    updateFormAlerts();

    // Refresh news section with new language
    populateNewsSection();

    // Update modal if it's open
    const modal = document.getElementById('memberModal');
    if (modal && modal.style.display === 'block') {
        const modalName = document.getElementById('modal-name').textContent;
        const modalRole = document.getElementById('modal-role').textContent;
        const modalDept = document.getElementById('modal-dept').textContent;
        const modalBio = document.getElementById('modal-bio').textContent;

        // Find the member card that matches and update modal
        document.querySelectorAll('.member-card').forEach(card => {
            const cardName = card.querySelector('h3').textContent;
            if (cardName === modalName ||
                card.querySelector('h3').getAttribute('data-ar') === modalName ||
                card.querySelector('h3').getAttribute('data-tr') === modalName) {

                const onclickAttr = card.getAttribute('onclick');
                if (onclickAttr) {
                    // Extract the function call and execute it
                    const match = onclickAttr.match(/showMemberModal\(([^)]+)\)/);
                    if (match) {
                        const args = match[1].split(',').map(s => s.trim().replace(/['"]/g, ''));
                        if (args.length >= 9) {
                            showMemberModal(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8]);
                        }
                    }
                }
            }
        });
    }

    // Update news modal if it's open
    const newsModal = document.getElementById('newsModal');
    if (newsModal && newsModal.style.display === 'block') {
        const modalTitle = document.getElementById('news-modal-title').textContent;
        const modalDate = document.getElementById('news-modal-date').textContent;
        const modalContent = document.getElementById('news-modal-content').textContent;

        // Find the news item that matches and update modal
        newsData.forEach(news => {
            const title = currentLang === 'ar' ? news.titleAr : news.titleTr;
            if (title === modalTitle) {
                showNewsModal(news.titleAr, news.titleTr, news.fullDescriptionAr, news.fullDescriptionTr, news.date);
            }
        });
    }
}

function updateFormAlerts() {
    // This will be called when forms are submitted
    window.formAlerts = {
        experience: currentLang === 'ar'
            ? 'شكراً لمشاركة تجربتك! سيتم مراجعتها ونشرها قريباً.'
            : 'Deneyiminizi paylaştığınız için teşekkürler! Yakında incelenecek ve yayınlanacak.',
        idea: currentLang === 'ar'
            ? 'شكراً لمقترحك! سنقوم بدراسته والرد عليك قريباً.'
            : 'Öneriniz için teşekkürler! Yakında inceleyip size geri dönüş yapacağız.',
        volunteer: currentLang === 'ar'
            ? 'تم تسجيل طلبك بنجاح! سنتواصل معك قريباً.'
            : 'Başvurunuz başarıyla kaydedildi! Yakında sizinle iletişime geçeceğiz.',
        contact: currentLang === 'ar'
            ? 'تم إرسال رسالتك بنجاح! سنرد عليك في أقرب وقت.'
            : 'Mesajınız başarıyla gönderildi! En kısa sürede size geri dönüş yapacağız.',
        newsletter: currentLang === 'ar'
            ? 'تم الاشتراك بنجاح! ستتلقى آخر الأخبار والتحديثات.'
            : 'Başarıyla abone oldunuz! En son haberleri ve güncellemeleri alacaksınız.'
    };
}

// Populate leadership grid with member cards
function populateLeadershipGrid() {
    const grid = document.getElementById('leadershipGrid');
    if (!grid) return;

    grid.innerHTML = ''; // Clear existing content

    membersData.forEach(member => {
        const card = document.createElement('div');
        card.className = 'member-card';
        card.addEventListener('click', () => {
            showMemberModal(member.nameAr, member.nameTr, member.roleAr, member.roleTr, member.deptAr, member.deptTr, member.photo, member.bioAr, member.bioTr);
        });

        card.innerHTML = `
            <img src="${member.photo}" alt="${member.nameTr}" class="member-photo">
            <h3 data-ar="${member.nameAr}" data-tr="${member.nameTr}">${member.nameTr}</h3>
            <p class="role" data-ar="${member.roleAr}" data-tr="${member.roleTr}">${member.roleTr}</p>
            <p class="dept" data-ar="${member.deptAr}" data-tr="${member.deptTr}">${member.deptTr}</p>
            <p class="view-more"><span data-ar="عرض التفاصيل" data-tr="Detayları Görüntüle">Detayları Görüntüle</span> <i class="fas fa-chevron-right"></i></p>
        `;

        grid.appendChild(card);
    });
}

// Helper function to format dates
function formatDate(dateString, lang) {
    const date = new Date(dateString);
    if (lang === 'ar') {
        return date.toLocaleDateString('ar-SA', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    } else {
        return date.toLocaleDateString('tr-TR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
}

// News Modal Functions
function showNewsModal(titleAr, titleTr, contentAr, contentTr, date, image) {
    const currentLang = localStorage.getItem('language') || 'tr';
    const title = currentLang === 'ar' ? titleAr : titleTr;
    const content = currentLang === 'ar' ? contentAr : contentTr;
    const formattedDate = formatDate(date, currentLang);

    document.getElementById('news-modal-title').textContent = title;
    document.getElementById('news-modal-date').textContent = formattedDate;
    document.getElementById('news-modal-content').textContent = content;

    const modalImage = document.getElementById('news-modal-image');
    if (modalImage && image) {
        modalImage.src = image;
        modalImage.style.display = 'block';
    } else if (modalImage) {
        modalImage.style.display = 'none';
    }

    document.getElementById('newsModal').style.display = 'block';
}

function closeNewsModal() {
    document.getElementById('newsModal').style.display = 'none';
}

// Toggle news visibility function
function toggleNews() {
    const toggleBtn = document.getElementById('toggle-news-btn');
    const newsContainer = document.getElementById('news-container');

    if (!toggleBtn || !newsContainer) return;

    isNewsHidden = !isNewsHidden;

    if (isNewsHidden) {
        // Hide news and show empty message
        newsContainer.innerHTML = '<div class="empty-news-message"><h3 data-ar="لا توجد أخبار حالياً" data-tr="Şu Anda Haber Yok">لا توجد أخبار حالياً</h3></div>';
        toggleBtn.innerHTML = '<span data-ar="رجع الأخبار" data-tr="Haberleri Geri Getir">رجع الأخبار</span>';
    } else {
        // Show news and restore button text
        renderNews();
        toggleBtn.innerHTML = '<span data-ar="تحديث الأخبار" data-tr="Haberleri Güncelle">تحديث الأخبار</span>';
    }

    // Update language for the new content
    updateLanguage();
}

// Render news function that updates the UI
// Render news function - University Design with Slider and Real API
async function renderNews() {
    const container = document.getElementById('uni-news-track');
    if (!container) return;

    container.innerHTML = '<div class="loading-spinner">' + (currentLang === 'ar' ? 'جاري تحميل الأخبار...' : 'Haberler Yükleniyor...') + '</div>';

    let dataToRender = [];
    try {
        // Fetch from Backend
        if (window.api && window.api.getNews) {
            console.log('Fetching news from API...');
            const apiData = await window.api.getNews();
            // If API returns {success:true, data: [...]}, use data.
            // If API returns array directly, use it.
            const newsList = (apiData.data && Array.isArray(apiData.data)) ? apiData.data : apiData;

            if (newsList && Array.isArray(newsList) && newsList.length > 0) {
                dataToRender = newsList;
            } else {
                console.warn('API returned empty or invalid data, using static fallback.');
                dataToRender = (newsData && newsData.length > 0) ? newsData : staticNewsData; // Fallback
            }
        } else {
            // API not loaded
            console.warn('window.api not found, using static fallback.');
            dataToRender = (newsData && newsData.length > 0) ? newsData : staticNewsData;
        }
    } catch (err) {
        console.error('Failed to fetch news:', err);
        // Fallback on error?
        dataToRender = (newsData && newsData.length > 0) ? newsData : staticNewsData;
    }

    container.innerHTML = ''; // Clear loading

    if (!dataToRender || dataToRender.length === 0) {
        container.innerHTML = '<div class="empty-news-message" style="text-align:center; padding:40px; margin:auto;">' +
            (currentLang === 'ar' ? 'لا توجد أخبار حالياً' : 'Şu Anda Haber Yok') + '</div>';
        return;
    }

    dataToRender.forEach(news => {
        // Helpers for API structure
        // API likely returns: { title: "...", content: "...", titleAr: "...", ... } OR nested
        // We will try to be robust.

        const getTitle = (n) => {
            if (currentLang === 'ar') return n.titleAr || (n.title && n.title.ar) || n.title;
            return n.titleTr || (n.title && n.title.tr) || (n.title && n.title.en) || n.title || "No Title";
        };

        const getContent = (n) => {
            if (currentLang === 'ar') return n.contentAr || (n.content && n.content.ar) || n.content;
            return n.contentTr || (n.content && n.content.tr) || (n.content && n.content.en) || n.content || "";
        };

        const getSafe = (str) => (str || "").replace(/'/g, "\\'").replace(/"/g, '&quot;');

        const title = getTitle(news);
        const content = getContent(news);
        const excerpt = content && content.length > 100 ? content.substring(0, 100) + "..." : (content || "");

        // Format Date: DD.MM.YYYY
        // Handle various date formats (ISO string, etc)
        const d = new Date(news.date || news.createdAt || new Date());
        const dateStr = !isNaN(d.getTime()) ?
            `${d.getDate().toString().padStart(2, '0')}.${(d.getMonth() + 1).toString().padStart(2, '0')}.${d.getFullYear()}`
            : "";

        // Image Handling
        let image = news.image || 'union_logo.png';
        if (image && !image.startsWith('http') && !image.startsWith('data:')) {
            // If API returns relative path, prepend base URL?
            // User requirement: "Backend is running on localhost:5001"
            // Usually uploads are served from /uploads or similar. 
            // We will assume if it has no slash, it's local static, if it has slash, it's backend.
            if (image.includes('/') || image.includes('\\')) {
                image = `http://localhost:5001/${image.replace(/\\/g, '/')}`;
            }
        }

        const card = document.createElement('div');
        card.className = 'uni-news-card';
        // Pass data to modal
        card.onclick = () => showNewsModal(
            getSafe(news.titleAr || title),
            getSafe(news.titleTr || title),
            getSafe(news.contentAr || content),
            getSafe(news.contentTr || content),
            getSafe(dateStr),
            image
        );

        card.innerHTML = `
            <div class="uni-card-image">
                <img src="${image}" alt="${title}" onerror="this.src='union_logo.png'">
            </div>
            <div class="uni-card-body">
                <div class="uni-card-date">${dateStr}</div>
                <h4 class="uni-card-title">${title}</h4>
                <p class="uni-card-excerpt">${excerpt}</p>
                <div class="uni-card-footer">
                    <span class="uni-read-more" data-ar="اقرأ المزيد" data-tr="DEVAMINI OKU">${currentLang === 'ar' ? 'اقرأ المزيد' : 'DEVAMINI OKU'}</span>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    // Attach Slider Event Listeners
    setupUniSlider();
}

// Populate news section with dynamic cards (alias for renderNews)
function populateNewsSection() {
    renderNews();
}

// Initialize language on page load
populateLeadershipGrid();
updateLanguage();

document.addEventListener('DOMContentLoaded', () => {
    // Find the active section and set the corresponding button as active
    const activeSection = document.querySelector('.section.active');
    if (activeSection) {
        const sectionId = activeSection.id;
        const activeBtn = Array.from(document.querySelectorAll('.nav-btn')).find(btn =>
            btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(`'${sectionId}'`)
        );
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
    }
});

// Image Gallery Navigation Function
function changeImage(direction) {
    const gallery = event.target.closest('.image-gallery');
    if (!gallery) return;

    const images = gallery.querySelectorAll('.gallery-image');
    if (images.length === 0) return;

    let currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    if (currentIndex === -1) currentIndex = 0;

    let newIndex = currentIndex + direction;

    // Handle wrap around
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;

    // Remove active from current
    images[currentIndex].classList.remove('active');

    // Add active to new
    images[newIndex].classList.add('active');
}

// News Slider Functionality
let currentNewsGroup = 0;

// News data for modal (matching the 6 static cards in HTML)
const staticNewsData = [
    {
        id: 1,
        titleAr: "لقائنا الثالث - معًا... حيث يكون الأثر",
        titleTr: "Üçüncü Buluşmamız - Birlikte... İz Bıraktığımız Yerde",
        contentAr: "لقائنا الثالث تحت شعار: معًا... حيث يكون الأثر. بيتٌ واحد... لهدفٍ واحد. لسنا مجرد طلاب في جامعة واحدة، بل إخوة يجمعنا هدف واحد وطموح مشترك. بالتعاون نصنع الفرق، وبالوحدة نصل إلى ما هو أبعد. الموعد: الإثنين 16/02/2026 الساعة 12:00 - المكان: الطابق الثالث.",
        contentTr: "Üçüncü buluşmamız 'Birlikte... İz Bıraktığımız Yerde' sloganıyla gerçekleşiyor. Tek bir ev... Tek bir hedef için. Biz sadece aynı üniversitedeki öğrenciler değiliz, ortak hedef ve tutkuyla birleşen kardeşleriz. İşbirliğiyle fark yaratırız, birlikle daha ileri gideriz. Tarih: Pazartesi 16/02/2026 Saat: 12:00 - Yer: 3. Kat.",
        date: "16 فبراير 2026",
        image: "news1.jpg"
    },
    {
        id: 2,
        titleAr: "بيان - اعتماد الاتحاد كنادٍ طلابي رسمي",
        titleTr: "Bildiri - Birliğin Resmi Öğrenci Kulübü Olarak Tescili",
        contentAr: "بحمد الله وتوفيقه، يُعلن اتحاد الطلاب العرب بجامعة إسنيورت اعتماده رسميًا كنادٍ طلابي (Club) معترف به من قِبل إدارة الجامعة. ويُعد هذا الاعتماد خطوةً مهمة في مسيرة الاتحاد، وانتقالًا إلى مرحلةٍ أكثر تنظيمًا ومسؤولية وتأثيرًا داخل الحرم الجامعي.",
        contentTr: "Allah'a hamd olsun, Esenyurt Üniversitesi Arap Öğrenciler Birliği, üniversite yönetimi tarafından resmi olarak tanınan bir Öğrenci Kulübü (Club) olarak tescil edildiğini duyurur. Bu tescil, birliğin yolculuğunda önemli bir adımdır ve kampüs içinde daha organize, sorumlu ve etkili bir aşamaya geçişi temsil etmektedir.",
        date: "12 فبراير 2026",
        image: "news2.jpg"
    },
    {
        id: 3,
        titleAr: "دورة الإسعافات الأولية - مجاناً",
        titleTr: "İlk Yardım Kursu - Ücretsiz",
        contentAr: "ينظم اتحاد الطلاب العرب بجامعة إسنيورت بالتعاون مع مؤسسة رايس للتنمية والتمكين الدولية دورة مجانية في الإسعافات الأولية مع الدكتور بلال سنهوب. الموعد: يوم الثلاثاء الموافق 10/02/2026. المكان: اسنيورت - مهتار ششمه. للتواصل: +90 538 645 43 19.",
        contentTr: "Esenyurt Üniversitesi Arap Öğrenciler Birliği, Rise Uluslararası Kalkınma ve Güçlendirme Vakfı işbirliğiyle Dr. Bilal Senhub ile ücretsiz İlk Yardım Kursu düzenliyor. Tarih: Salı 10/02/2026. Yer: Esenyurt - Mehterçeşme. İletişim: +90 538 645 43 19.",
        date: "10 فبراير 2026",
        image: "news3.jpg"
    },
    {
        id: 4,
        titleAr: "ودّعنا الفاينلز.. واستقبلنا الثلج!",
        titleTr: "Finalleri Uğurladık.. Karı Karşıladık!",
        contentAr: "ودّعنا الفاينلز.. واستقبلنا الثلج! رحلة ترفيهية شملت التزلج والأكل في Kalamis Buzzfest. الموعد: السبت 31/01/2026 الساعة 12:00. تضمنت الرحلة أنشطة التزلج على الجليد والاستمتاع بوجبات متنوعة ومشروبات ساخنة في أجواء شتوية رائعة.",
        contentTr: "Finalleri uğurladık.. Karı karşıladık! Kalamis Buzzfest'te buz pateni ve yemek içeren eğlenceli bir gezi. Tarih: Cumartesi 31/01/2026 Saat: 12:00. Gezi, buz pateni aktiviteleri ve harika kış atmosferinde çeşitli yemekler ve sıcak içeceklerin tadını çıkarmayı içeriyordu.",
        date: "31 يناير 2026",
        image: "news4.jpg"
    },
    {
        id: 5,
        titleAr: "بيان - قبول استقالة رئيس الاتحاد",
        titleTr: "Bildiri - Birlik Başkanının İstifasının Kabulü",
        contentAr: "بسم الله الرحمن الرحيم. يُعلن الاتحاد العربي بجامعة إسنيورت عن قبول استقالة رئيس الاتحاد، المقدمة بتاريخ يوم الجمعة الموافق 16/01/2026، وذلك بعد فترة من العطاء والعمل الذي قدّمه خلال توليه المسؤولية. ويؤكد الاتحاد أن نائب رئيس الاتحاد سيتولى تسيير أعمال الاتحاد خلال المرحلة القادمة.",
        contentTr: "Rahman ve Rahim olan Allah'ın adıyla. Esenyurt Üniversitesi Arap Birliği, Cuma 16/01/2026 tarihinde sunulan Birlik Başkanının istifasının kabulünü duyurur. Başkan, görev süresince büyük bir özveri ve çalışma sergilemiştir. Birlik, Başkan Yardımcısının önümüzdeki dönemde birliğin işlerini yürüteceğini teyit eder.",
        date: "16 يناير 2026",
        image: "news5.jpg"
    }
];

// Calculate cards per view based on screen size
function getCardsPerView() {
    const width = window.innerWidth;
    if (width <= 768) return 1;    // Mobile
    if (width <= 1024) return 2;   // Tablet
    return 3;                       // Desktop
}

// Calculate total number of groups
function getTotalGroups() {
    const cardsPerView = getCardsPerView();
    return Math.ceil(5 / cardsPerView); // 5 total cards
}

// Initialize news slider
function initializeNewsSlider() {
    const prevBtn = document.getElementById('news-prev-btn');
    const nextBtn = document.getElementById('news-next-btn');
    const dots = document.querySelectorAll('.news-dot');

    if (!prevBtn || !nextBtn) return;

    // Add click listeners to arrows
    prevBtn.addEventListener('click', () => navigateNews('prev'));
    nextBtn.addEventListener('click', () => navigateNews('next'));

    // Add click listeners to dots
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const group = parseInt(dot.getAttribute('data-group'));
            currentNewsGroup = group;
            updateNewsSlider();
        });
    });

    // Initial update
    updateNewsSlider();
}

// Navigate news slider
function navigateNews(direction) {
    const totalGroups = getTotalGroups();

    if (direction === 'prev') {
        currentNewsGroup = currentNewsGroup > 0 ? currentNewsGroup - 1 : totalGroups - 1;
    } else if (direction === 'next') {
        currentNewsGroup = currentNewsGroup < totalGroups - 1 ? currentNewsGroup + 1 : 0;
    }

    updateNewsSlider();
}

// Update news slider position and state
function updateNewsSlider() {
    const track = document.getElementById('news-track');
    const prevBtn = document.getElementById('news-prev-btn');
    const nextBtn = document.getElementById('news-next-btn');
    const dots = document.querySelectorAll('.news-dot');

    if (!track) return;

    const cardsPerView = getCardsPerView();
    const totalGroups = getTotalGroups();

    // Ensure currentNewsGroup is within valid range
    if (currentNewsGroup >= totalGroups) {
        currentNewsGroup = 0;
    }

    // Calculate scroll position
    // Each card takes (100 / 6 * cardsPerView)% of track width
    const cardWidthPercent = 100 / 5;
    const scrollAmount = currentNewsGroup * cardsPerView * cardWidthPercent;

    // Apply transform (RTL: positive for left movement in RTL)
    track.style.transform = `translateX(${scrollAmount}%)`;

    // Update dots
    dots.forEach((dot, index) => {
        if (index < totalGroups) {
            dot.style.display = 'block';
            dot.classList.toggle('active', index === currentNewsGroup);
        } else {
            dot.style.display = 'none';
        }
    });

    // Update button states (visual feedback)
    if (prevBtn) {
        prevBtn.style.opacity = currentNewsGroup === 0 ? '0.5' : '1';
    }
    if (nextBtn) {
        nextBtn.style.opacity = currentNewsGroup === totalGroups - 1 ? '0.5' : '1';
    }
}

// =========================================
// NEWS MODAL SYSTEM - DISABLED
// Modal is now handled by inline script in index.html
// to prevent conflicts and ensure proper initialization
// =========================================
/* MODAL CODE MOVED TO INDEX.HTML - DO NOT USE
(function () {
    ...modal code commented out...
})();
*/

// Toggle news visibility - Show More / Hide functionality
function toggleNewsVisibility() {
    const toggleBtn = document.getElementById('toggle-news-btn');
    const newsCards = document.querySelectorAll('.news-card-vertical');
    const newsSection = document.getElementById('newsSection');

    if (!toggleBtn || newsCards.length === 0) return;

    const currentLang = localStorage.getItem('language') || 'tr';
    const isExpanded = toggleBtn.classList.contains('expanded');

    if (isExpanded) {
        // Hide extra cards (show only first 3)
        newsCards.forEach((card, index) => {
            if (index >= 3) {
                card.classList.remove('visible');
                card.classList.add('hidden');
            }
        });

        toggleBtn.classList.remove('expanded');
        toggleBtn.innerHTML = `
            <i class="fas fa-chevron-down"></i>
            <span data-ar="عرض المزيد" data-tr="Daha Fazla Göster">${currentLang === 'ar' ? 'عرض المزيد' : 'Daha Fazla Göster'}</span>
        `;

        // Smooth scroll back to the news section top
        if (newsSection) {
            newsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    } else {
        // Show all cards
        newsCards.forEach((card, index) => {
            if (index >= 3) {
                card.classList.remove('hidden');
                card.classList.add('visible');
            }
        });

        toggleBtn.classList.add('expanded');
        toggleBtn.innerHTML = `
            <i class="fas fa-chevron-up"></i>
            <span data-ar="إخفاء" data-tr="Gizle">${currentLang === 'ar' ? 'إخفاء' : 'Gizle'}</span>
        `;
    }
}

// Note: Old slider code removed - now using vertical list

// Search Files - Maps major + year selections to Google Drive links
function searchFiles() {
    const major = document.getElementById('majorSelect').value;
    const year = document.getElementById('yearSelect').value;

    if (!major || !year) {
        alert(currentLang === 'ar' ? 'يرجى اختيار التخصص والسنة الدراسية' : 'Lütfen bölüm ve sınıf seçin');
        return;
    }

    // Mapping: fileLinks[major][year] = Google Drive URL
    const fileLinks = {
        'physiotherapy': {
            '1': 'https://drive.google.com/drive/folders/1S-FFWfDZH8Z_2j_d4WvdkUjluif2zaOv?usp=drive_link'
        }
    };

    if (fileLinks[major] && fileLinks[major][year]) {
        window.open(fileLinks[major][year], '_blank');
    } else {
        alert(currentLang === 'ar' ? 'عذراً، لا تتوفر ملفات لهذا التخصص والسنة حالياً' : 'Üzgünüz, bu bölüm ve sınıf için şu anda dosya mevcut değil');
    }
}
