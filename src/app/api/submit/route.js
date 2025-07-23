export async function POST(request) {
  const formData = await request.formData()
  
  // Log the form submission (in production, Netlify will handle this)
  console.log('Form submission received:', Object.fromEntries(formData))
  
  // Redirect to thank you page
  return new Response(null, {
    status: 302,
    headers: {
      'Location': '/thank-you.html'
    }
  })
} 