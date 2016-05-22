Router.configure(
{
	layoutTemplate: 'layout'
}
);

Router.map(function(){
	this.route('posts', {
		path: '/', // root = "posts" homepage
		template: 'posts'
	});
	this.route('about');
	this.route('profile');
});
