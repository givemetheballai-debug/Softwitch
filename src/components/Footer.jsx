export default function Footer() {
  return (
    <footer className="bg-midnight-aubergine text-champagne py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-2">
          <p className="text-sm opacity-80">
            A tiny cosmic universe built with intuition, product thinking, and AI.
          </p>
          <p className="text-xs opacity-60">
            © {new Date().getFullYear()} SoftWitch. A modern magic project by Jamie.
          </p>
        </div>
      </div>
    </footer>
  );
}
