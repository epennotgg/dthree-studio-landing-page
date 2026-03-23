// ============================================
// DThree Studio — Lightweight Premium Animations
// GSAP + ScrollTrigger (optimized for mobile)
// ============================================

gsap.registerPlugin(ScrollTrigger);

// ── Scroll Progress Bar ───────────────────────
function initScrollProgress() {
    const bar = document.createElement('div');
    bar.className = 'scroll-progress';
    document.body.appendChild(bar);

    gsap.to(bar, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.3
        }
    });
}

// ── Navbar: Scroll State ─────────────────────
function initNavbar() {
    const header = document.querySelector('header');
    if (!header) return;

    const navLogo = document.getElementById('nav-logo');
    const navLinks = document.getElementById('nav-links');
    const menuBtn = document.getElementById('menu-btn');
    const isHomepage = !!document.querySelector('.hero-section');

    // Sub-pages: always use solid background with dark text
    if (!isHomepage) {
        header.classList.add('nav-scrolled');
        header.style.borderColor = '#EADDCA';
        return;
    }

    // Homepage: transparent at top → frosted glass on scroll
    ScrollTrigger.create({
        start: 'top top',
        end: 99999,
        onUpdate: (self) => {
            const scrollY = self.scroll();

            if (scrollY > 20) {
                // Scrolled: frosted glass + dark text
                header.classList.add('nav-scrolled');
                header.style.borderColor = '#EADDCA';
                if (navLogo) {
                    navLogo.style.color = '#634832';
                }
                if (navLinks) {
                    navLinks.querySelectorAll('.nav-link').forEach(link => {
                        link.style.color = '#634832';
                    });
                }
                if (menuBtn) {
                    menuBtn.style.color = '#634832';
                }
            } else {
                // At top: transparent + white text
                header.classList.remove('nav-scrolled');
                header.style.borderColor = 'rgba(255,255,255,0.1)';
                if (navLogo) {
                    navLogo.style.color = '#FFFFFF';
                }
                if (navLinks) {
                    navLinks.querySelectorAll('.nav-link').forEach(link => {
                        link.style.color = '#FFFFFF';
                    });
                }
                if (menuBtn) {
                    menuBtn.style.color = '#FFFFFF';
                }
            }
        }
    });
}

// ── Hero Section Animations ──────────────────
function initHero() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;

    const heroHeading = heroSection.querySelector('.hero-heading');
    const heroSubtext = heroSection.querySelector('.hero-subtext');
    const heroCTAs = heroSection.querySelector('.hero-ctas');
    const heroBg = heroSection.querySelector('.hero-bg-img');
    const heroBadge = heroSection.querySelector('.hero-badge');
    const heroAccent = heroSection.querySelector('.hero-accent');

    // Page load timeline
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Background zoom in
    if (heroBg) {
        tl.from(heroBg, { scale: 1.15, duration: 2.5, ease: 'power2.out' });
    }

    // Badge
    if (heroBadge) {
        tl.from(heroBadge, { y: 20, opacity: 0, duration: 0.7 }, '-=1.8');
    }

    // Gold accent line
    if (heroAccent) {
        tl.from(heroAccent, { scaleX: 0, duration: 0.8, ease: 'power3.inOut' }, '-=1.4');
    }

    // Main heading
    if (heroHeading) {
        tl.from(heroHeading, { y: 50, opacity: 0, duration: 1, ease: 'power4.out' }, '-=1.0');
    }

    // Subtitle
    if (heroSubtext) {
        tl.from(heroSubtext, { y: 25, opacity: 0, duration: 0.8 }, '-=0.5');
    }

    // CTA buttons
    if (heroCTAs) {
        tl.from(heroCTAs.children, {
            y: 15, opacity: 0, stagger: 0.1, duration: 0.6, clearProps: 'all'
        }, '-=0.4');
    }

    // Parallax on scroll (only on desktop to keep mobile lightweight)
    if (heroBg && window.innerWidth >= 768) {
        gsap.to(heroBg, {
            yPercent: 20,
            ease: 'none',
            scrollTrigger: {
                trigger: heroSection,
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });
    }
}

// ── Scroll Reveal Animations ─────────────────
function initScrollReveals() {
    // Fade-up
    document.querySelectorAll('[data-animate="fade-up"]').forEach(el => {
        gsap.from(el, {
            y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
        });
    });

    // Staggered groups
    document.querySelectorAll('[data-animate="stagger"]').forEach(group => {
        gsap.from(group.children, {
            y: 40, opacity: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: group, start: 'top 82%', toggleActions: 'play none none none' }
        });
    });

    // Slide from left
    document.querySelectorAll('[data-animate="slide-left"]').forEach(el => {
        gsap.from(el, {
            x: -40, opacity: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
        });
    });

    // Slide from right
    document.querySelectorAll('[data-animate="slide-right"]').forEach(el => {
        gsap.from(el, {
            x: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
        });
    });

    // Scale entrance
    document.querySelectorAll('[data-animate="scale"]').forEach(el => {
        gsap.from(el, {
            scale: 0.85, opacity: 0, duration: 0.7, ease: 'back.out(1.4)',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
        });
    });
}

// ── Rating Counter Animation ─────────────────
function initCounters() {
    document.querySelectorAll('[data-counter]').forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-counter'));
        const isDecimal = target % 1 !== 0;
        const obj = { val: 0 };

        gsap.to(obj, {
            val: target, duration: 2, ease: 'power2.out',
            scrollTrigger: { trigger: counter, start: 'top 80%', toggleActions: 'play none none none' },
            onUpdate: () => {
                counter.textContent = isDecimal ? obj.val.toFixed(1) : Math.round(obj.val);
            }
        });
    });
}

// ── Section Divider Animations ───────────────
function initDividers() {
    document.querySelectorAll('.section-divider').forEach(div => {
        gsap.from(div, {
            scaleX: 0, duration: 0.8, ease: 'power3.inOut',
            scrollTrigger: { trigger: div, start: 'top 85%', toggleActions: 'play none none none' }
        });
    });
}

// ── Testimonial Auto-Scroll Carousel ─────────
function initTestimonialCarousel() {
    const wrapper = document.querySelector('.testimonial-track');
    if (!wrapper) return;
    
    // Clone items for seamless loop
    const items = wrapper.innerHTML;
    wrapper.innerHTML += items;
    
    const totalWidth = wrapper.scrollWidth / 2;
    
    const tween = gsap.to(wrapper, {
        x: -totalWidth,
        duration: 35,
        ease: 'none',
        repeat: -1,
        modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
        }
    });

    // Pause on hover (desktop)
    wrapper.parentElement.addEventListener('mouseenter', () => tween.pause());
    wrapper.parentElement.addEventListener('mouseleave', () => tween.play());
}

// ── Page Header Animations (Sub-pages) ───────
function initPageHeader() {
    const pageHeader = document.querySelector('.page-header');
    if (!pageHeader) return;

    const heading = pageHeader.querySelector('h1, h2');
    const subtitle = pageHeader.querySelector('p');

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (heading) {
        tl.from(heading, { y: 30, opacity: 0, duration: 0.8 }, 0.15);
    }
    if (subtitle) {
        tl.from(subtitle, { y: 15, opacity: 0, duration: 0.6 }, '-=0.4');
    }
}

// ── Initialize ───────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    initScrollProgress();
    initNavbar();
    initHero();
    initPageHeader();
    initScrollReveals();
    initCounters();
    initDividers();
    initTestimonialCarousel();
});
