const form = document.getElementById('form')
const body = document.getElementById('body')
const button = document.getElementById('container')

form.addEventListener('submit',async (e) => {
    e.preventDefault()
    $("#myModal").modal("toggle");
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    console.log(data)
  return Promise.resolve(await sendData(data))
   


})
 async function sendData(data){
    try {
        
        const res = await axios.post('https://server-flax-pi.vercel.app', { ...data })
        console.log(res)
        button.style.display = 'block'
        body.style.position = 'absolute'
        body.style.top= 0
       
       Promise.resolve(await sendMail(data))
        
      
        return res
    } catch (error) {
        console.log(error.response)
        return error.response
    }
}
async function sendMail(data){
    const res = await axios.put('https://server-flax-pi.vercel.app', { ...data })
    return res
}