// Test with response.ok
// fetch('http://httpstat.us/404')
//   .then((res) => {
//     if (!response.ok) {
//       throw new Error('Requiest failed');
//     }
//   })
//   .then(() => {
//     console.log('success');
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Catch runs on a network error
// fetch('http://hello123.net/404')
//   .then((res) => {
//     return response;
//   })
//   .then(() => {
//     console.log('success');
//   })
//   .catch((error) => {
//     console.log(error);
//   });


// Check for specific code
fetch('http://httpstat.us/404')
  .then((res) => {
    if (response.status === 404) {
      throw new Error('Not Found');
    } else if (response.status === '500') {
      throw new Error('Server error');
    } else if (response.status !== 200) {
      throw new Error('The request failed');
    }
  })
  .then(() => {
    console.log('success');
  })
  .catch((error) => {
    console.log(error);
  });
