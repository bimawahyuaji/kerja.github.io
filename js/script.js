/* nav toggler */
const navTogglerBtn = document.querySelector('.nav-toggler'),
        aside = document.querySelector('.aside');

        navTogglerBtn.addEventListener('click', () => {
            asideSectionTogglerBtn();
        })
        function asideSectionTogglerBtn() {
            aside.classList.toggle('open');
            navTogglerBtn.classList.toggle('open');
        };

/* a */
const nav = document.querySelector('.nav'),
        navList = nav.querySelectorAll('li'),
        totalNavList = navList.length;

        for(let i=0; i<totalNavList; i++) {
            const a = navList[i].querySelector('a');

            a.addEventListener('click', function() {
            aside.classList.remove('open');
            navTogglerBtn.classList.remove('open');
                for(let j=0; j<totalNavList; j++) {
                    if(navList) {
                        a.classList.add('active');
                    }
                    navList[j].querySelector('a').classList.remove('active');
                }
            })
        }

