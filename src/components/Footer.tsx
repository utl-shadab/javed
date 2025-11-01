export default function Footer(){
  return (
    <footer className="mt-24 border-t bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-6 text-sm text-tila-lightText">
          <div>
            <h4 className="font-medium text-tila-text">Contact</h4>
            <p>theindianlegalnetwork@gmail.com • +91-8826879144</p>
          </div>
          <div>
            <h4 className="font-medium text-tila-text">Offices</h4>
            <p>New Delhi · Noida</p>
          </div>
          <div>
            <h4 className="font-medium text-tila-text">Legal</h4>
            <p>© {2025} The Indian Legal Associates</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
