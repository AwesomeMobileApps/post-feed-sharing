Router.configure(
{
	layoutTemplate: 'layout'
}
);

Router.map(function(){
	this.route('posts', {
		path: '/', // homepage
		template: 'posts'
	});
	this.route('about');
});