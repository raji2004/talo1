const form = document.getElementById('form')


form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    console.log(data)
    try {
        const res = await axios.post('https://server-flax-pi.vercel.app', {...data})
        console.log(res)
        alert('you have signed up successfully')
        return res
    } catch (error) {
        console.log(error.response)
        return error.response
    }


})