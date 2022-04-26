function Footer() {

    const footerYear = new Date().getFullYear()

  return (
    <footer className="footer p-10 bg-gray-700 text-white footer-center">
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
        </svg>
        <p>CopyRight &copy; {footerYear} All Right Reserved</p>
        </div>
    </footer>
  )
}

export default Footer