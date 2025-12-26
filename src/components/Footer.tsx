import { Heart, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-700 text-neutral-300 border-t-2 border-primary">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-neutral-50 mb-4">
              2026 Color Trends
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              A comprehensive guide to color palettes for the era of visual regeneration. Designed for designers, developers, and creative professionals.
            </p>
            <p className="text-xs text-neutral-400">
              Built with Emotional Minimalism
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-50 mb-4 uppercase tracking-wide">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#palettes" className="hover:text-primary transition-colors">
                  Color Palettes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Design System
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>

          {/* Credits & Social */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-50 mb-4 uppercase tracking-wide">
              Credits
            </h4>
            <ul className="text-sm space-y-2 mb-6">
              <li>Research: Pablo</li>
              <li>Documentation: Claude (Anthropic)</li>
              <li>Sources: Pantone, WGSN, CMG</li>
            </ul>

            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-neutral-600 hover:bg-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-neutral-600 hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-neutral-600 hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-neutral-600 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-neutral-400">
            © {currentYear} 2026 Color Trends. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-neutral-400">
            Made with <Heart className="w-4 h-4 text-primary fill-current" /> using Claude Code
          </p>
        </div>
      </div>
    </footer>
  );
}
