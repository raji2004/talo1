const form = document.getElementById('form')
const body = document.getElementById('body')
const button = document.getElementById('container')

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    console.log(data)
    try {
        const res = await axios.post('https://server-flax-pi.vercel.app', { ...data })
        console.log(res)
        button.style.display = 'block'
        body.style.position = 'absolute'
        body.style.top= 0
        
        $("#myModal").modal("toggle");
        return res
    } catch (error) {
        console.log(error.response)
        return error.response
    }


})