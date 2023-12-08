const Paths = {
    Home: '/',
    About: '/about',
    Reviews: '/reviews',
    Add: '/reviews/add',
    Details: (id) => `/reviews/details/${id}`,
    Edit: (id) => `/reviews/edit/${id}`,
    Login: '/login',
    Register: '/register',
    Logout: '/logout',
    NotFound: '*',
    Mine: '/reviews/mine'
};

export default Paths;