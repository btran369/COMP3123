// Fake API

export function loginApi(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Demo only
      if (password === 'password') {
        const payload = {
          sub: username,
          role: 'student',
          iat: Math.floor(Date.now() / 1000),
        };
        const token = createFakeJwt(payload);
        resolve(token);
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 500); // Simulate network delay
  });
}

// Create fake JWT: header.payload.signature
function createFakeJwt(payloadObj) {
  const header = { alg: 'HS256', typ: 'JWT' };

  const base64Header = btoa(JSON.stringify(header));
  const base64Payload = btoa(JSON.stringify(payloadObj));
  const signature = 'fake-signature'; // demo only

  return `${base64Header}.${base64Payload}.${signature}`;
}
