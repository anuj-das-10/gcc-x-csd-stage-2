import { NextResponse } from 'next/server'

export function middleware(request) {

    const userToken = request.cookies.get('gccxcsd_JWT');
    const adminToken = request.cookies.get('gccxcsd_Admin')
    console.log(userToken)
    console.log(adminToken);

    if(request.nextUrl.pathname.startsWith('/about')) {
// This logic is only applied to /about
    console.log('about page');
    }

//  This logic is only applied to /admin/dashboard
    if(!adminToken && request.nextUrl.pathname.startsWith('/admin/dashboard')) {
        const url = request.nextUrl.clone()
        url.pathname = '/admin_login'
        return NextResponse.rewrite(url)
    }

    if(adminToken && (request.nextUrl.pathname.startsWith('/admin/dashboard'))) {
        const url = request.nextUrl.clone()
        url.pathname = '/admin/dashboard'
        return NextResponse.rewrite(url)
    }



// This logic is only applied to /alumni
// If the cookies are not found means user is not logged in.
// If user wants to access Alumni Page then we will redirect to Login Page
    if(!userToken && request.nextUrl.pathname.startsWith('/alumni')) {
        const url = request.nextUrl.clone()
        url.pathname = '/login'
        return NextResponse.rewrite(url)
    }


//  If the user is already logged in then that user can not access Login and Registration Page before Logout
//  If user tries to access them manually by editing the url then they will be redirected to home page
    if(userToken && (request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/register'))) {
      const url = request.nextUrl.clone()
      url.pathname = '/'
      return NextResponse.rewrite(url)
    }
 
}
