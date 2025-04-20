// scripts.js
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'playfair': ['"Playfair Display"', 'serif'],
                        'poppins': ['Poppins', 'sans-serif'],
                    },
                    colors: {
                        'primary': '#1a1b4b',
                        'secondary': '#e6f3ff',
                    }
                }
            }
        }

        // JavaScript to toggle mobile menu
        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        // Smooth scroll to sections
        function smoothScroll(target) {
            const element = document.querySelector(target);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
