const { override, adjustWorkbox } = require('customize-cra');
// if service worker are necessary and there is other stuff on the server (like cockpit cms)

module.exports = override(
  adjustWorkbox(wb => {
    console.log(wb);
    return Object.assign(wb, {
      skipWaiting: true,
      exclude: (wb.exclude || []).concat(['index.html', /\.mp4$/]),
      navigateFallbackBlacklist: (wb.navigateFallbackBlacklist || []).concat(
        /cockpit-cms/
      ),
      runtimeCaching: (wb.runtimeCaching || []).concat([
        {
          urlPattern: /token=/,
          handler: 'NetworkFirst'
        },
        {
          urlPattern: /.jpg$/,
          handler: 'CacheFirst'
        },
        {
          urlPattern: /.png$/,
          handler: 'CacheFirst'
        },
        {
          urlPattern: /.mp4$/,
          handler: 'CacheFirst'
        }
      ])
      // globPatterns: ['cockpit-cms/*.{jpg,mp4,png}']
      // navigateFallbackWhitelist: [/.jpg$/, /.mp4$/, /.png$/, /token=/]
    });
  })
);
