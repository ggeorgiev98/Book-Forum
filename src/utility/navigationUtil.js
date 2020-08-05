const navigationUtility = () => {
    const navContent = [
        {
            content: 'Post a book',
            link: '/post'
        },
        {
            content: 'Sign up',
            link: '/register'
        },
        {
            content: 'Login',
            link: '/login'
        },
        {
            content: 'Books',
            link: '/'
        },
    ];

    return navContent;
};

export default navigationUtility;