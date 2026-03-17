const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
const icon = document.getElementById('menu-icon');
const overlay = document.getElementById('menu-overlay');

function toggleMenu() {
    const isOpen = menu.classList.contains('opacity-100');

    if (isOpen) {
        // TAMPILAN TUTUP
        menu.classList.replace('opacity-100', 'opacity-0');
        menu.classList.replace('translate-y-0', '-translate-y-4');
        menu.classList.replace('pointer-events-auto', 'pointer-events-none');
        
        // Sembunyikan Overlay
        overlay.classList.replace('opacity-100', 'opacity-0');
        setTimeout(() => overlay.classList.add('hidden'), 300);
        
        // Ganti Ikon ke Hamburger
        icon.classList.replace('fa-xmark', 'fa-bars');
        
        // Izinkan scroll kembali
        document.body.style.overflow = 'auto';
    } else {
        // TAMPILAN BUKA
        menu.classList.replace('opacity-0', 'opacity-100');
        menu.classList.replace('-translate-y-4', 'translate-y-0');
        menu.classList.replace('pointer-events-none', 'pointer-events-auto');
        
        // Tampilkan Overlay
        overlay.classList.remove('hidden');
        setTimeout(() => overlay.classList.replace('opacity-0', 'opacity-100'), 10);
        
        // Ganti Ikon ke X
        icon.classList.replace('fa-bars', 'fa-xmark');
        
        // Kunci scroll agar tidak bisa scroll layar belakang
        document.body.style.overflow = 'hidden';
    }
}

// Event Listener untuk tombol
btn.addEventListener('click', toggleMenu);

// Event Listener untuk klik pada bagian blur (overlay)
overlay.addEventListener('click', toggleMenu);

// Menutup menu jika salah satu link diklik
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if(menu.classList.contains('opacity-100')) toggleMenu();
    });
});


// MASUKIN GALER I DISINI. NANTI AUTOFILL JUGA
const images = [
    "asset/Galeri1.jpg",
    "asset/Galeri2.jpg",
    "asset/Galeri3.jpg",
    "asset/Galeri4.jpg",
    "asset/Galeri5.jpg",
    "asset/Galeri7.jpg",
    "asset/Galeri6.jpg",
    "asset/Galeri8.jpg",
    "asset/Galeri9.jpg",
    "asset/Galeri10.jpg",
    "asset/Galeri11.jpg",
    "asset/Galeri12.jpg",
    "asset/Galeri13.jpg",
    "asset/Galeri14.jpg",
    "asset/Galeri15.jpg",
    "asset/Galeri16.jpg",
    "asset/Galeri17.jpg",
    "asset/Galeri18.jpg",
    "asset/Galeri19.jpg",
    "asset/Galeri20.jpg",
    "asset/Galeri21.jpg",
];
// end

// MASUKIN DATA PRICING DISINI. SESUAIKAN DENGAN YANG DIINGINKAN
        const pricingData = {
            family: {
                packages: [
                    { name: "Family 1", price: "Rp 250.000", bg: "1 Background", pose: "3 Pose", members: "Maks. 5 Orang", costume: "1 Kostum Pribadi", print: "3 Foto 8RS", softfile: "G-Drive Link" },
                    { name: "Family 2", price: "Rp 450.000", bg: "2 Background", pose: "5 Pose", members: "Maks. 10 Orang", costume: "2 Kostum Pribadi", print: "5 Foto 8RS + 1 Bingkai", softfile: "G-Drive Link" },
                    { name: "Family 3", price: "Rp 750.000", bg: "3 Background", pose: "10 Pose", members: "Maks. 15 Orang", costume: "3 Kostum Pribadi", print: "10 Foto 8RS & 1 Foto 12RS + Bingkai", softfile: "G-Drive Link" }
                ],
                features: ["Tema Background", "Jumlah Pose", "Maks. Anggota", "Jumlah Kostum", "Cetak Foto", "Akses Softfile"]
            },
            prewed: {
                packages: [
                    { name: "Prewed 1", price: "Rp 350.000", bg: "1 Background", pose: "5 Pose", members: "2 Orang", costume: "2 Kostum Pribadi", print: "5 Foto 6RS", softfile: "G-Drive Link" },
                    { name: "Prewed 2", price: "Rp 500.000", bg: "2 Background", pose: "10 Pose", members: "2 Orang", costume: "3 Kostum Pribadi", print: "10 Foto 6RS", softfile: "G-Drive Link" },
                    { name: "Prewed 3", price: "Rp 850.000", bg: "3 Background", pose: "15 Pose", members: "2 Orang", costume: "4 Kostum Pribadi", print: "15 Foto 6RS & 1 Foto 12RS + Bingkai", softfile: "G-Drive Link" }
                ],
                features: ["Tema Background", "Sesi Gaya", "Kapasitas", "Kostum & MUA", "Hasil Cetak", "Akses Softfile"]
            },
            outdoor: {
                packages: [
                    { name: "Outdoor Lite", price: "Rp 1.250.000", bg: "1 Fotografer", pose: "Unlimited shoot", members: "Unlimited member", costume: "Tidak Ada", print: "10 File Edit", softfile: "USB Flashdisk" },
                    { name: "Outdoor Pro", price: "Rp 1.750.000", bg: "2 Fotografer", pose: "Unlimited shoot", members: "Unlimited member", costume: "1 Album 10 Sheet & 1 Foto 16RS + Bingkai", print: "20 File Edit", softfile: "USB Flashdisk" }
                ],
                features: ["Jumlah Fotografer", "Sesi Gaya", "Kapasitas", "Tambahan Fitur", "File Editing", "Akses Softfile"]
            },
            event: {
                packages: [
                    { name: "Event Bronze", price: "Rp 1.750.000", bg: "1 Hari", pose: "Journalistic, unlimited shoot", members: "8 Jam rumahan / 4 Jam gedung/hotel", costume: "80 File Edit & Cetak 4R", print: "Album & 1 Foto 8RS + Bingkai", softfile: "G-Drive Link" },
                    { name: "Event Silver", price: "Rp 2.750.000", bg: "2 Hari (max)", pose: "Journalistic, unlimited shoot", members: "8 Jam rumahan / 4 Jam gedung/hotel", costume: "120 File Edit & Cetak 4R", print: "Album & 1 Foto 12RS + Bingkai", softfile: "G-Drive Link" },
                    { name: "Event Gold", price: "Rp 4.250.000", bg: "2 Hari (max)", pose: "Journalistic, unlimited shoot", members: "8 Jam rumahan / 4 Jam gedung/hotel", costume: "160 File Edit & Cetak 4R", print: "Album, 1 Foto 16RS + Bingkai & Wedding Book", softfile: "G-Drive Link" }
                ],
                features: ["Jumlah Hari Acara", "Gaya & Jumlah Foto", "Durasi per 1 Hari", "Output Foto", "Tambahan", "Akses Softfile"]
            }
        };
// end

const pricingContainer = document.getElementById('pricing-container');
const comparisonBody = document.getElementById('comparison-body');

function switchCategory(cat) {
    if (!pricingContainer) return; // Mencegah error jika bukan di hal pricelist

    document.querySelectorAll('[id^="cat-"]').forEach(el => el.classList.remove('active-card'));
    const activeEl = document.getElementById(`cat-${cat}`);
    if (activeEl) activeEl.classList.add('active-card');

            const data = pricingData[cat];

            // Render Pricing Cards
            pricingContainer.innerHTML = data.packages.map(pkg => `
                <div class="bg-white p-8 rounded-[2.5rem] border border-[#EADDCA] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                    <h5 class="text-sm font-bold text-[#826A56] uppercase tracking-widest mb-2">${pkg.name}</h5>
                    <div class="text-3xl font-extrabold text-[#634832] mb-6">${pkg.price}</div>
                    <ul class="space-y-4 mb-8 text-sm flex-grow">
                        <li class="flex items-center"><i class="fa-solid fa-check text-green-500 mr-2"></i> ${pkg.bg}</li>
                        <li class="flex items-center"><i class="fa-solid fa-check text-green-500 mr-2"></i> ${pkg.pose}</li>
                        ${cat === 'family' || cat === 'prewed' ? `<li class="flex items-center"><i class="fa-solid fa-check text-green-500 mr-2"></i> ${pkg.members}</li>` : ''}
                        <li class="flex items-center"><i class="fa-solid fa-check text-green-500 mr-2"></i> ${pkg.costume}</li>
                        <li class="flex items-center"><i class="fa-solid fa-check text-green-500 mr-2"></i> ${pkg.print}</li>
                        <li class="flex items-center"><i class="fa-solid fa-check text-green-500 mr-2"></i> ${pkg.softfile}</li>
                    </ul>
                    <a href="booking"><button class="w-full bg-[#634832] text-white py-4 rounded-2xl font-bold hover:bg-[#4A3728] transition uppercase text-xs tracking-widest">
                        Pilih Paket ${pkg.name}
                    </button></a>
                </div>
            `).join('');

            // Render Comparison Table (dynamic columns)
            const rows = data.features;
            const packages = data.packages;

            // Update the table header to match number of packages
            const theadRow = document.querySelector('table thead tr');
            if (theadRow) {
                theadRow.innerHTML = `
                    <th class="p-6">Fitur Utama</th>
                    ${packages.map((pkg, idx) => `<th class="p-6 text-center">${pkg.name || 'Paket ' + (idx+1)}</th>`).join('')}
                `;
            }

            const keys = ['bg', 'pose', 'members', 'costume', 'print', 'softfile'];
            comparisonBody.innerHTML = rows.map((feature, i) => {
                return `
                    <tr class="border-b border-[#F5EFE6]">
                        <td class="p-6 font-bold text-[#634832]">${feature}</td>
                        ${packages.map((pkg, j) => {
                            const val = pkg[keys[i]] ?? '-';
                            const classes = `p-6 text-center ${j === 1 ? 'bg-[#FDFBF7] font-semibold' : ''}`;
                            return `<td class="${classes}">${val}</td>`;
                        }).join('')}
                    </tr>
                `;
            }).join('');
        }

        if (pricingContainer) switchCategory('family');

const galleryWrapper = document.getElementById('gallery-wrapper');

function renderGallery() {
    galleryWrapper.innerHTML = images.map((src, index) => `
        <div class="masonry-item gallery-card group cursor-pointer" onclick="openLightbox(${index})">
            <img src="${src}" 
            alt="Foto galeri DThree Studio ${index + 1}" 
            class="w-full rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border-4 border-white group-hover:scale-[1.02]"
            loading="lazy" decoding="async">
            <div class="gallery-overlay"><span>Lihat Foto</span></div>
        </div>
    `).join('');
}
        renderGallery();
        let currentIndex = 0;
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');

        function openLightbox(index) {
            currentIndex = index;
            updateLightboxContent();
            lightbox.classList.remove('pointer-events-none');
            lightbox.classList.add('opacity-100');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            lightbox.classList.add('pointer-events-none');
            lightbox.classList.remove('opacity-100');
            document.body.style.overflow = 'auto';
            lightboxImg.classList.remove('zoom-active');
        }

        function updateLightboxContent() {
            lightboxImg.style.opacity = '0';
            setTimeout(() => {
                lightboxImg.src = images[currentIndex];
                lightboxImg.style.opacity = '1';
                lightboxImg.classList.remove('zoom-active');
            }, 150);
        }

        function nextImg(e) { if(e) e.stopPropagation(); currentIndex = (currentIndex + 1) % images.length; updateLightboxContent(); }
        function prevImg(e) { if(e) e.stopPropagation(); currentIndex = (currentIndex - 1 + images.length) % images.length; updateLightboxContent(); }
        function toggleZoom(e) { e.stopPropagation(); lightboxImg.classList.toggle('zoom-active'); }

        // Swipe & Keyboard Logic (Tetap sama seperti sebelumnya...)
        let touchstartX = 0;
        let touchendX = 0;
        lightbox.addEventListener('touchstart', e => { touchstartX = e.changedTouches[0].screenX; }, false);
        lightbox.addEventListener('touchend', e => { touchendX = e.changedTouches[0].screenX; handleGesture(); }, false);
        function handleGesture() {
            if (lightboxImg.classList.contains('zoom-active')) return;
            if (touchendX < touchstartX - 50) nextImg();
            if (touchendX > touchstartX + 50) prevImg();
        }
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('opacity-100')) return;
            if (e.key === "ArrowRight") nextImg();
            if (e.key === "ArrowLeft") prevImg();
            if (e.key === "Escape") closeLightbox();
        });