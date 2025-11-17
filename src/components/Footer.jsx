export default function Footer() {
  return (
    <footer className="bg-midnight-aubergine text-champagne py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-2">
          <p className="text-sm opacity-80">
            Built with intention and a little help from AI — all vibes and meaning are 100% human.
          </p>
          <p className="text-xs opacity-60">
            © {new Date().getFullYear()} SoftWitch. Made by a Product Manager who reads tarot privately.
          </p>
        </div>
      </div>
    </footer>
  );
}
