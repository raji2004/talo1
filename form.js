const form = document.getElementById('form')
const body = document.getElementById('body')
const button = document.getElementById('container')

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    $("#myModal").modal("toggle");
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
  
    try {
      const [sendDataRes, sendMailRes] = await Promise.all([
        sendData(data),
        sendMail(data)
      ]);
  
      console.log(sendDataRes);
      console.log(sendMailRes);
  
      button.style.display = 'block';
      body.style.position = 'absolute';
      body.style.top = 0;
    } catch (error) {
      console.log(error.response);
    }
  });
  
  async function sendData(data) {
    try {
      const res = await axios.post('https://server-flax-pi.vercel.app', { ...data });
      return res;
    } catch (error) {
      console.log(error.response);
      throw error;
    }
  }
  
  async function sendMail(data) {
    try {
      const res = await axios.put('https://server-flax-pi.vercel.app', { ...data });
      return res;
    } catch (error) {
      console.log(error.response);
      throw error;
    }
  }
  