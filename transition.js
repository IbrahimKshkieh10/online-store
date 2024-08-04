document.addEventListener('DOMContentLoaded', () => {
    function handleTransition(event, targetPage) {
        event.preventDefault();

        const slideClass = targetPage.includes('signup') ? 'slide-right' : 'slide-left';


        document.body.classList.add('transition', slideClass);


        document.querySelectorAll('.container, .image').forEach(el => {
            el.classList.add('hidden');
        });


        requestAnimationFrame(() => {
            setTimeout(() => {

                document.body.classList.remove('transition', slideClass);
                document.querySelectorAll('.container, .image').forEach(el => {
                    el.classList.remove('hidden');
                });
                window.location.href = targetPage;
            }, 600);
        });
    }


    const signupLink = document.querySelector('.signup-link');
    const loginLink = document.querySelector('.login-link');

    if (signupLink) {
        signupLink.addEventListener('click', (event) => handleTransition(event, 'signup.html'));
    }
    
    if (loginLink) {
        loginLink.addEventListener('click', (event) => handleTransition(event, 'login.html'));
    }
});
