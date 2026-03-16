// ============================================================
// Academic Search System — v3 (2026-02-23) — Turkish Version
// ZERO auto-redirect. Only the "View Files" button navigates.
// ============================================================

(function () {
    'use strict';

    console.log('[AcadSearch v3] Loaded — no auto-redirect version');

    // ── DOM references ──
    const degreeSelect = document.getElementById('degreeSelect');
    const departmentSelect = document.getElementById('departmentSelect');
    const majorSelect = document.getElementById('majorSelect');
    const yearSelect = document.getElementById('yearSelect');
    const semesterSelect = document.getElementById('semesterSelect');
    const searchBtn = document.getElementById('searchBtn');
    const toastContainer = document.getElementById('toastContainer');
    const breadcrumb = document.getElementById('breadcrumb');

    // Bail out if elements not found
    if (!degreeSelect || typeof academicData === 'undefined') return;

    // ── The ONLY variable that holds the current file link ──
    let resolvedUrl = null;

    const allSelects = [degreeSelect, departmentSelect, majorSelect, yearSelect, semesterSelect];
    const wrapIds = ['wrap-degree', 'wrap-dept', 'wrap-major', 'wrap-year', 'wrap-semester'];
    const labels = ['Eğitim Seviyesi', 'Bölüm', 'Alan', 'Yıl', 'Dönem'];

    // ══════════════════════════════════════════════════════════
    // SAFETY: Remove any <a> tags that might wrap select elements
    // and block ALL touch/click navigation on select wrappers
    // ══════════════════════════════════════════════════════════
    allSelects.forEach((sel) => {
        const wrap = sel.closest('.acad-dropdown-wrap');
        if (wrap) {
            wrap.querySelectorAll('a').forEach(a => {
                while (a.firstChild) a.parentNode.insertBefore(a.firstChild, a);
                a.remove();
            });
        }
        sel.addEventListener('touchstart', (e) => { e.stopPropagation(); }, { passive: true });
        sel.addEventListener('touchend', (e) => { e.stopPropagation(); }, { passive: true });
    });

    // ══════════════════════════════════════════════════════════
    // HELPERS
    // ══════════════════════════════════════════════════════════

    function populateSelect(selectEl, options, placeholder) {
        selectEl.innerHTML = '';
        const defaultOpt = document.createElement('option');
        defaultOpt.value = '';
        defaultOpt.textContent = placeholder;
        defaultOpt.disabled = true;
        defaultOpt.selected = true;
        selectEl.appendChild(defaultOpt);

        options.forEach(opt => {
            const o = document.createElement('option');
            o.value = opt;
            o.textContent = opt;
            selectEl.appendChild(o);
        });

        selectEl.disabled = false;
        const wrap = selectEl.closest('.acad-dropdown-wrap');
        if (wrap) {
            wrap.classList.add('active');
            wrap.classList.add('pulse');
            setTimeout(() => wrap.classList.remove('pulse'), 600);
        }
    }

    function resetFrom(index) {
        for (let i = index; i < allSelects.length; i++) {
            allSelects[i].innerHTML = `<option value="" disabled selected>${labels[i]}...</option>`;
            allSelects[i].disabled = true;
            const wrap = document.getElementById(wrapIds[i]);
            if (wrap) wrap.classList.remove('active');
        }
        resolvedUrl = null;
        updateBreadcrumb();
        updateViewBtn();
    }

    function showToast(message, type = 'warning') {
        if (!toastContainer) return;
        const toast = document.createElement('div');
        toast.className = `acad-toast acad-toast-${type}`;
        toast.innerHTML = `
      <span class="acad-toast-icon">${type === 'warning' ? '⚠️' : type === 'success' ? '✅' : 'ℹ️'}</span>
      <span>${message}</span>
    `;
        toastContainer.appendChild(toast);
        requestAnimationFrame(() => toast.classList.add('show'));
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 400);
        }, 3000);
    }

    function updateBreadcrumb() {
        if (!breadcrumb) return;
        const parts = [];
        allSelects.forEach(sel => {
            if (sel.value) parts.push(`<span class="acad-crumb">${sel.value}</span>`);
        });
        breadcrumb.innerHTML = parts.length
            ? `<span class="acad-crumb-icon">📍</span>` + parts.join('<span class="acad-crumb-sep"><i class="fas fa-chevron-right"></i></span>')
            : '';
    }

    function getNestedData(...keys) {
        let data = academicData;
        for (const key of keys) {
            if (!data || !data[key]) return null;
            data = data[key];
        }
        return data;
    }

    // ══════════════════════════════════════════════════════════
    // VIEW BUTTON STATE — only this button opens the link
    // ══════════════════════════════════════════════════════════

    function updateViewBtn() {
        if (!searchBtn) return;
        if (resolvedUrl) {
            searchBtn.disabled = false;
            searchBtn.classList.add('btn-ready');
            searchBtn.title = 'Dosyaları açmak için tıklayın';
            console.log('[AcadSearch] URL ready:', resolvedUrl);
        } else {
            searchBtn.disabled = true;
            searchBtn.classList.remove('btn-ready');
            searchBtn.title = 'Önce tüm seçenekleri tamamlayın';
        }
    }

    // ══════════════════════════════════════════════════════════
    // LEVEL URL MAP (Year-level direct links)
    // ══════════════════════════════════════════════════════════

    const levelUrls = {
        'A1': 'https://drive.google.com/drive/folders/1TIDjnJETIg7R_W3hLW_KspMFkvh9fQ8U?usp=drive_link',
        'A2': 'https://drive.google.com/drive/folders/1E4JztJtqe1pcdT1iiELpxLyVCDMVCVaE?usp=drive_link',
        'B1': 'https://drive.google.com/drive/folders/1F0sHImeeHWmfrxCIezTjjADXX_H7f2XF?usp=drive_link',
        'B2': 'https://drive.google.com/drive/folders/1H_XVMoF4Zj2M_dpRjnNTS2kNqMIynSwm?usp=drive_link',
        'C1': 'https://drive.google.com/drive/folders/1s5nuerDFT9Sd1RTeUwDoYJ-tsI4Bd4VQ?usp=drive_link'
    };

    // ══════════════════════════════════════════════════════════
    // SEMESTER URL MAP (key: "major|Yıl X|1. Dönem / 2. Dönem")
    // ══════════════════════════════════════════════════════════

    const semesterUrls = {
        'İşletme (İngilizce)|Yıl 1|1. Dönem': 'https://drive.google.com/drive/folders/1VIekc-3jC7aKndNMZZtKH4tDjLUAxwXc?usp=drive_link',
        'İşletme (İngilizce)|Yıl 1|2. Dönem': 'https://drive.google.com/drive/folders/1fKUbxEVNxi-Hp4I1qKx0rVpZdB-q8ht_?usp=drive_link',
        'Fizyoterapi ve Rehabilitasyon|Yıl 1|1. Dönem': 'https://drive.google.com/drive/folders/1S-FFWfDZH8Z_2j_d4WvdkUjluif2zaOv?usp=drive_link',
        'Çocuk Gelişimi|Yıl 1|1. Dönem': 'https://drive.google.com/drive/folders/12y91hfMYYNdLMHnXn9nXN3bLlbkA4qQW?usp=drive_link',
        'Çocuk Gelişimi|Yıl 1|2. Dönem': 'https://drive.google.com/drive/folders/1eUIRv0bSgx50UMVuUJn_X91TthZmbGT6?usp=drive_link',
        'Çocuk Gelişimi|Yıl 2|1. Dönem': 'https://drive.google.com/drive/folders/1vm32RTc2JBhQ5V0ot2dCl0-LZIxCMUub?usp=drive_link',
        'Çocuk Gelişimi|Yıl 3|1. Dönem': 'https://drive.google.com/drive/folders/1B7lAIechhcjxt-E0hGNpIp4WbFiVoekl?usp=drive_link',
        'Çocuk Gelişimi|Yıl 3|2. Dönem': 'https://drive.google.com/drive/folders/1oIAcgPZnigEWazo1IqaMr1jApThvlJ6b?usp=drive_link',
        'Bilgisayar Mühendisliği|Yıl 2|1. Dönem': 'https://drive.google.com/drive/folders/1Wb3kr1egLmB7dG11_JEMm6KmWq5-bZRn?usp=drive_link'
    };

    // ══════════════════════════════════════════════════════════
    // DROPDOWN CHANGE EVENTS — FILTERING ONLY, NO NAVIGATION
    // ══════════════════════════════════════════════════════════

    degreeSelect.addEventListener('change', () => {
        console.log('[AcadSearch] Degree changed — NO redirect');
        resetFrom(1);
        const data = getNestedData(degreeSelect.value);
        if (data) populateSelect(departmentSelect, Object.keys(data), '-- Bölüm Seçin --');
        updateBreadcrumb();
    });

    departmentSelect.addEventListener('change', () => {
        console.log('[AcadSearch] Department changed — NO redirect');
        resetFrom(2);
        const data = getNestedData(degreeSelect.value, departmentSelect.value);
        if (data) populateSelect(majorSelect, Object.keys(data), '-- Alan Seçin --');
        updateBreadcrumb();
    });

    majorSelect.addEventListener('change', () => {
        console.log('[AcadSearch] Major changed — NO redirect');
        resetFrom(3);
        const data = getNestedData(degreeSelect.value, departmentSelect.value, majorSelect.value);
        if (data) populateSelect(yearSelect, Object.keys(data), '-- Yıl Seçin --');
        updateBreadcrumb();
    });

    yearSelect.addEventListener('change', () => {
        console.log('[AcadSearch] Year changed — NO redirect, storing URL only');
        resetFrom(4);
        resolvedUrl = null;
        const val = yearSelect.value;
        if (levelUrls[val]) {
            resolvedUrl = levelUrls[val];  // STORE ONLY — do NOT open
        } else {
            const data = getNestedData(degreeSelect.value, departmentSelect.value, majorSelect.value, val);
            if (data) populateSelect(semesterSelect, Object.keys(data), '-- Dönem Seçin --');
        }
        updateBreadcrumb();
        updateViewBtn();
    });

    semesterSelect.addEventListener('change', () => {
        console.log('[AcadSearch] Semester changed — NO redirect, storing URL only');
        updateBreadcrumb();
        const url = semesterUrls[`${majorSelect.value}|${yearSelect.value}|${semesterSelect.value}`];
        resolvedUrl = url || null;
        updateViewBtn();
    });

    // ══════════════════════════════════════════════════════════
    // "VIEW FILES" BUTTON — THE ONLY WAY TO OPEN THE LINK
    // ══════════════════════════════════════════════════════════

    if (searchBtn) {
        searchBtn.disabled = true;
        searchBtn.title = 'Önce tüm seçenekleri tamamlayın';

        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            console.log('[AcadSearch] View Files button clicked, resolvedUrl =', resolvedUrl);

            if (resolvedUrl) {
                var originalText = searchBtn.innerHTML;
                searchBtn.innerHTML = '📂 Açılıyor...';
                searchBtn.disabled = true;
                window.open(resolvedUrl, '_blank');
                setTimeout(function () {
                    searchBtn.innerHTML = originalText;
                    searchBtn.disabled = false;
                }, 2000);
            } else {
                for (let i = 0; i < allSelects.length; i++) {
                    if (!allSelects[i].value) {
                        showToast(`⚠️ Lütfen önce ${labels[i]} seçin`, 'warning');
                        const wrap = document.getElementById(wrapIds[i]);
                        if (wrap) {
                            wrap.classList.add('shake');
                            setTimeout(() => wrap.classList.remove('shake'), 600);
                        }
                        return;
                    }
                }
                showToast('⚠️ Bu seçim için bağlantı bulunamadı', 'warning');
            }
        });
    }

    // ══════════════════════════════════════════════════════════
    // DISABLED SELECT HANDLER — show toast when tapping disabled
    // ══════════════════════════════════════════════════════════

    allSelects.forEach((sel, i) => {
        sel.addEventListener('mousedown', (e) => {
            if (sel.disabled) {
                e.preventDefault();
                showToast(`⚠️ Lütfen önce ${labels[i > 0 ? i - 1 : 0]} seçin`, 'warning');
                if (i > 0) {
                    const prevWrap = document.getElementById(wrapIds[i - 1]);
                    if (prevWrap) {
                        prevWrap.classList.add('shake');
                        setTimeout(() => prevWrap.classList.remove('shake'), 600);
                    }
                }
            }
        });
    });

    // ══════════════════════════════════════════════════════════
    // INITIALIZE
    // ══════════════════════════════════════════════════════════

    populateSelect(degreeSelect, Object.keys(academicData), '-- Eğitim Seviyesi Seçin --');

    // Reset button
    const resetBtn = document.getElementById('resetBtn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            resetFrom(0);
            resolvedUrl = null;
            updateViewBtn();
            populateSelect(degreeSelect, Object.keys(academicData), '-- Eğitim Seviyesi Seçin --');
            showToast('🔄 Tüm seçenekler sıfırlandı', 'info');
        });
    }

    console.log('[AcadSearch v3] Init complete — button-only navigation active');
})();
