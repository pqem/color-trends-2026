import { Heart, Github, Twitter, Linkedin } from 'lucide-react';
import { EXTERNAL_LINKS } from '../utils/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-700 text-neutral-300 border-t-2 border-primary">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-neutral-50 mb-4">
              Tendencias de Color 2026
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Una guía completa de paletas de colores para la era de la regeneración visual. Diseñada para diseñadores, desarrolladores y profesionales creativos.
            </p>
            <p className="text-xs text-neutral-400">
              Construido con Minimalismo Emocional
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-50 mb-4 uppercase tracking-wide">
              Recursos
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#palettes" className="hover:text-primary transition-colors">
                  Paletas de Colores
                </a>
              </li>
              <li>
                <a href={EXTERNAL_LINKS.DESIGN_SYSTEM} className="hover:text-primary transition-colors">
                  Sistema de Diseño
                </a>
              </li>
              <li>
                <a href={EXTERNAL_LINKS.DOCUMENTATION} className="hover:text-primary transition-colors">
                  Documentación
                </a>
              </li>
              <li>
                <a href={EXTERNAL_LINKS.ACCESSIBILITY} className="hover:text-primary transition-colors">
                  Accesibilidad
                </a>
              </li>
            </ul>
          </div>

          {/* Credits & Social */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-50 mb-4 uppercase tracking-wide">
              Créditos
            </h4>
            <ul className="text-sm space-y-2 mb-6">
              <li>Investigación: Pablo Quevedo</li>
              <li>Documentación: Claude (Anthropic)</li>
              <li>Fuentes: Pantone, WGSN, CMG</li>
            </ul>

            <div className="flex gap-4">
              <a
                href={EXTERNAL_LINKS.GITHUB}
                className="p-2 rounded-lg bg-neutral-600 hover:bg-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={EXTERNAL_LINKS.TWITTER}
                className="p-2 rounded-lg bg-neutral-600 hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={EXTERNAL_LINKS.LINKEDIN}
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
            © {currentYear} Tendencias de Color 2026. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-2 text-neutral-400">
            Hecho con <Heart className="w-4 h-4 text-primary fill-current" /> usando Claude Code
          </p>
        </div>
      </div>
    </footer>
  );
}
