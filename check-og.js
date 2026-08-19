const https = require('https');

https.get('https://vicaris-shop.vercel.app', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const ogImageMatch = data.match(/<meta property="og:image" content="([^"]+)"/);
    console.log('og:image ->', ogImageMatch ? ogImageMatch[1] : 'Not found');
    const twitterImageMatch = data.match(/<meta name="twitter:image" content="([^"]+)"/);
    console.log('twitter:image ->', twitterImageMatch ? twitterImageMatch[1] : 'Not found');
  });
}).on('error', (err) => {
  console.error(err);
});
