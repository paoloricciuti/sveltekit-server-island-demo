export const prerender = false;

export function POST({ cookies }) {
	let cart_cookie = cookies.get('cart');
	let count = parseInt(cart_cookie ?? '0');
	let new_count = count + 1;

	cookies.set('cart', new_count.toString(), {
		path: '/',
	});

	return new Response(null, {
		status: 200,
	});
}
