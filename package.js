'use strict';

Package.describe({
  name: 'alexvandesande:identicon',
  summary: 'Client-side identicon generation.',
  version: '2.0.2',
  git: 'https://github.com/alexvandesande/meteor-identicon.git'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0.2.1'); 
  api.use('templating', {weak: true});
  api.addFiles([
    'vendor/blockies/blockies.js',
    'lib/identicon.js'
  ], 'client');
});
