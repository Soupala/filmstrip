Package.describe({
  name: 'mica:filmstrip-reactive',
  summary: 'Adapting HTML5 video filmstrip library to reactive video projects.',
  version: '0.0.1',
  git: 'https://github.com/Soupala/filmstrip.git'
});

Package.onUse(function(api) {
	api.versionsFrom('1.0.2.1');
		api.use(['mica:jquery-ui','jquery']);
	api.addFiles(['filmstrip.js']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mica:filmstrip-reactive');
});