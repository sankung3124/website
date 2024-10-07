document.getElementById('contact-form').addEventListener('submit', (event)=>{
    event.preventDefault();
    
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  }

  localStorage.setItem('store', JSON.stringify(formData))
  const formDataJson= localStorage.getItem('store')
  const forData= JSON.parse(formDataJson)
  console.log(forData)
})
