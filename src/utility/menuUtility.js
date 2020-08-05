const menuUtility = () => {
    const menuContent = [
        {
            content: 'My profile',
            link: `/profile/userId`
        },
        {
            content: 'My posts',
            link: `/userId/posts`
        },
        {
            content: 'My comments',
            link: `/userId/comments`
        },
        {
            content: 'My favourites',
            link: `/userId/favourites`
        },
        {
            content: 'Post a book',
            link: '/post/book'
        },
        {
            content: 'Post a quote',
            link: '/post/quote'
        }
    ];

    return menuContent;
};

export default menuUtility;