const apiBaseUrl = "http://localhost:800/api";

async function getUser() {
  try {
    const response = await fetch(`${apiBaseUrl}/userDetails`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Response Data:', data);
      return data;
    } else {
      const errorText = await response.text();
      alert(`Error: ${errorText}`);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred during the process.');
  }
}

export { getUser };
