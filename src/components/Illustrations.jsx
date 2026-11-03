import React from 'react';

/**
 * HairPrint Kit Illustration (Clean, calm, premium SVG)
 * Depicts the physical kit: Calibration band, colour card, hair sample envelope, user guide.
 * Clearly marked with "Illustrative concept" label.
 */
export function HairPrintKitIllustration({ className = "" }) {
  return (
    <div className={`relative rounded-3xl bg-gradient-to-br from-[#FAF7F2] to-[#EAEFE9] p-6 sm:p-8 border border-sage-200/70 shadow-soft overflow-hidden group ${className}`}>
      {/* Decorative ambient background rings */}
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-champagne-100/40 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-sage-100/60 blur-2xl pointer-events-none" />

      {/* SVG Diagram */}
      <svg
        viewBox="0 0 600 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm select-none"
        aria-labelledby="kit-svg-title kit-svg-desc"
        role="img"
      >
        <title id="kit-svg-title">HairPrint Kit Components</title>
        <desc id="kit-svg-desc">Illustration of calibration band, colour reference card, and hair sample envelope.</desc>

        {/* Outer presentation box base */}
        <rect x="50" y="40" width="500" height="340" rx="24" fill="#FFFFFF" stroke="#D8E2D7" strokeWidth="2" />
        <rect x="62" y="52" width="476" height="316" rx="18" fill="#FDFCFB" stroke="#EAEFE9" strokeWidth="1.5" />

        {/* 1. Printed Calibration Band */}
        <g id="calibration-band">
          {/* Subtle curved headband ribbon */}
          <path
            d="M 100 130 C 220 85, 380 85, 500 130 L 490 175 C 375 135, 225 135, 110 175 Z"
            fill="#F4EFE2"
            stroke="#C5A059"
            strokeWidth="2"
          />
          {/* Scale tick marks */}
          {[125, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 475].map((x, i) => (
            <line
              key={i}
              x1={x}
              y1="128"
              x2={x}
              y2={i % 3 === 0 ? "148" : "138"}
              stroke="#8E6D38"
              strokeWidth={i % 3 === 0 ? "2" : "1.2"}
              strokeLinecap="round"
            />
          ))}
          {/* Optical fiducial alignment targets */}
          <circle cx="160" cy="148" r="7" fill="#FFFFFF" stroke="#382738" strokeWidth="2" />
          <circle cx="160" cy="148" r="2.5" fill="#382738" />
          <circle cx="300" cy="128" r="8" fill="#FFFFFF" stroke="#382738" strokeWidth="2" />
          <circle cx="300" cy="128" r="3" fill="#C5A059" />
          <circle cx="440" cy="148" r="7" fill="#FFFFFF" stroke="#382738" strokeWidth="2" />
          <circle cx="440" cy="148" r="2.5" fill="#382738" />
          <text x="300" y="152" textAnchor="middle" fill="#644C64" fontSize="10" fontFamily="sans-serif" fontWeight="600" letterSpacing="0.08em">
            HAIRPRINT CALIBRATION BAND
          </text>
        </g>

        {/* 2. Colour Reference Card (Left Bottom) */}
        <g id="colour-card" transform="translate(90, 210)">
          <rect x="0" y="0" width="180" height="130" rx="12" fill="#FFFFFF" stroke="#D8E2D7" strokeWidth="1.5" />
          <text x="14" y="24" fill="#382738" fontSize="11" fontFamily="sans-serif" fontWeight="600">
            Colour Reference Palette
          </text>
          <text x="14" y="38" fill="#7E637E" fontSize="9" fontFamily="sans-serif">
            Calibrated light balance & tonal swatches
          </text>

          {/* Color swatch grid */}
          <rect x="14" y="50" width="32" height="28" rx="6" fill="#1C1819" />
          <rect x="52" y="50" width="32" height="28" rx="6" fill="#382823" />
          <rect x="90" y="50" width="32" height="28" rx="6" fill="#604739" />
          <rect x="128" y="50" width="32" height="28" rx="6" fill="#87654C" />

          <rect x="14" y="86" width="32" height="28" rx="6" fill="#AA8763" />
          <rect x="52" y="86" width="32" height="28" rx="6" fill="#CFB799" />
          <rect x="90" y="86" width="32" height="28" rx="6" fill="#DCD0C0" />
          <rect x="128" y="86" width="32" height="28" rx="6" fill="#ECE5DA" />
        </g>

        {/* 3. Hair Sample Envelope (Right Bottom) */}
        <g id="sample-envelope" transform="translate(300, 210)">
          <rect x="0" y="0" width="200" height="130" rx="12" fill="#FFFFFF" stroke="#D8E2D7" strokeWidth="1.5" />
          {/* Envelope flap aesthetic */}
          <path d="M 0 0 L 100 65 L 200 0" stroke="#EAEFE9" strokeWidth="1.5" fill="none" />
          <circle cx="100" cy="65" r="14" fill="#F4EFE2" stroke="#C5A059" strokeWidth="1.5" />
          {/* CrownForm seal icon */}
          <path d="M 94 65 L 97 60 L 100 63 L 103 60 L 106 65 Z" fill="#8E6D38" />

          <text x="100" y="96" textAnchor="middle" fill="#382738" fontSize="11" fontFamily="sans-serif" fontWeight="600">
            Hair Sample Envelope
          </text>
          <text x="100" y="112" textAnchor="middle" fill="#7E637E" fontSize="9" fontFamily="sans-serif">
            Sealed physical strand reference
          </text>
        </g>
      </svg>

      {/* Label: Illustrative Concept */}
      <div className="mt-4 flex items-center justify-between border-t border-sage-200/80 pt-3">
        <span className="text-xs font-medium text-plum-600 tracking-wide">
          Kit components: Calibration band, colour card, sample pouch & guide
        </span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-champagne-100 text-champagne-800 border border-champagne-300">
          Illustrative concept
        </span>
      </div>
    </div>
  );
}

/**
 * Scalp Model & Cap Geometry Illustration (Clean, premium technical SVG)
 * Depicts the digital scalp curvature, crown whorl orientation, and precision cap boundary.
 * Clearly marked with "Illustrative concept" label.
 */
export function ScalpCapModelIllustration({ className = "" }) {
  return (
    <div className={`relative rounded-3xl bg-gradient-to-br from-[#FAF7F2] to-[#EAEFE9] p-6 sm:p-8 border border-sage-200/70 shadow-soft overflow-hidden group ${className}`}>
      {/* Decorative ambient background rings */}
      <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-sage-100/60 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-champagne-100/40 blur-2xl pointer-events-none" />

      {/* SVG Wireframe Diagram */}
      <svg
        viewBox="0 0 600 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm select-none"
        aria-labelledby="cap-svg-title cap-svg-desc"
        role="img"
      >
        <title id="cap-svg-title">Digital Scalp Model and Custom Cap Geometry</title>
        <desc id="cap-svg-desc">Curved geometric wireframe showing individualised scalp topography and crown whorl.</desc>

        {/* Anatomical head & scalp wireframe mesh */}
        <g id="scalp-mesh" opacity="0.9">
          {/* Base head silhouette contour */}
          <path
            d="M 170 340 C 140 240, 160 120, 300 90 C 440 120, 460 240, 430 340"
            stroke="#D8E2D7"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            fill="none"
          />

          {/* Latitude contours */}
          <path d="M 185 270 C 220 290, 380 290, 415 270" stroke="#BCCDBD" strokeWidth="1.2" fill="none" />
          <path d="M 195 220 C 235 245, 365 245, 405 220" stroke="#697A68" strokeWidth="1.4" fill="none" />
          <path d="M 210 170 C 245 195, 355 195, 390 170" stroke="#697A68" strokeWidth="1.4" fill="none" />
          <path d="M 235 130 C 265 145, 335 145, 365 130" stroke="#4A5B49" strokeWidth="1.6" fill="none" />

          {/* Longitudinal arc ribs */}
          <path d="M 300 90 C 290 160, 280 250, 270 330" stroke="#BCCDBD" strokeWidth="1.2" fill="none" />
          <path d="M 300 90 C 310 160, 320 250, 330 330" stroke="#BCCDBD" strokeWidth="1.2" fill="none" />
          <path d="M 300 90 C 250 160, 220 230, 200 310" stroke="#BCCDBD" strokeWidth="1" strokeDasharray="3 3" fill="none" />
          <path d="M 300 90 C 350 160, 380 230, 400 310" stroke="#BCCDBD" strokeWidth="1" strokeDasharray="3 3" fill="none" />

          {/* Precision Cap Perimeter Outline (Gold / Plum) */}
          <path
            d="M 190 270 C 210 240, 220 180, 260 160 C 290 145, 330 145, 350 165 C 385 195, 395 245, 410 270 C 390 300, 350 315, 300 315 C 250 315, 210 300, 190 270 Z"
            stroke="#C5A059"
            strokeWidth="2.5"
            fill="#C5A059"
            fillOpacity="0.08"
          />

          {/* Crown Whorl Vortex Center */}
          <g id="crown-whorl" transform="translate(315, 155)">
            <circle cx="0" cy="0" r="18" stroke="#8E6D38" strokeWidth="1" strokeDasharray="2 2" fill="none" />
            <circle cx="0" cy="0" r="10" stroke="#C5A059" strokeWidth="1.5" fill="none" />
            <circle cx="0" cy="0" r="3" fill="#8E6D38" />
            {/* Spiral strands */}
            <path d="M 0 0 C 4 -6, 12 -8, 16 -3" stroke="#8E6D38" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 0 0 C 6 4, 10 11, 6 15" stroke="#8E6D38" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 0 0 C -4 6, -11 6, -14 1" stroke="#8E6D38" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 0 0 C -5 -5, -8 -11, -3 -15" stroke="#8E6D38" strokeWidth="1.5" strokeLinecap="round" />
          </g>

          {/* Measurement Callouts / Annotations */}
          {/* Parting line */}
          <path d="M 285 170 C 280 200, 275 235, 270 260" stroke="#382738" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="270" cy="260" r="3" fill="#382738" />
          <line x1="270" y1="260" x2="160" y2="280" stroke="#382738" strokeWidth="1" strokeDasharray="2 2" />
          <rect x="80" y="270" width="76" height="22" rx="4" fill="#FFFFFF" stroke="#D8E2D7" strokeWidth="1" />
          <text x="118" y="285" textAnchor="middle" fill="#382738" fontSize="9" fontFamily="sans-serif" fontWeight="600">
            Natural Parting
          </text>

          {/* Crown whorl tag */}
          <line x1="325" y1="145" x2="430" y2="120" stroke="#8E6D38" strokeWidth="1" strokeDasharray="2 2" />
          <rect x="434" y="108" width="92" height="22" rx="4" fill="#FFFFFF" stroke="#C5A059" strokeWidth="1" />
          <text x="480" y="123" textAnchor="middle" fill="#8E6D38" fontSize="9" fontFamily="sans-serif" fontWeight="600">
            Crown Whorl Origin
          </text>

          {/* Perimeter silicone secure band tag */}
          <line x1="390" y1="285" x2="440" y2="285" stroke="#4A5B49" strokeWidth="1" strokeDasharray="2 2" />
          <rect x="444" y="274" width="100" height="22" rx="4" fill="#FFFFFF" stroke="#D8E2D7" strokeWidth="1" />
          <text x="494" y="289" textAnchor="middle" fill="#4A5B49" fontSize="9" fontFamily="sans-serif" fontWeight="600">
            Custom Cap Perimeter
          </text>
        </g>
      </svg>

      {/* Label: Illustrative Concept */}
      <div className="mt-4 flex items-center justify-between border-t border-sage-200/80 pt-3">
        <span className="text-xs font-medium text-plum-600 tracking-wide">
          Digital representation: Scalp topography, crown whorl & tailored perimeter
        </span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-champagne-100 text-champagne-800 border border-champagne-300">
          Illustrative concept
        </span>
      </div>
    </div>
  );
}
