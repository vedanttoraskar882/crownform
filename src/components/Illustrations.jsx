import React from 'react';

/**
 * HairPrint Kit Illustration (Clean, vibrant, premium SVG)
 * Depicts the physical kit: Calibration band, colour card, hair sample envelope, user guide.
 * Clearly marked with "Illustrative concept" label.
 */
export function HairPrintKitIllustration({ className = "" }) {
  return (
    <div className={`relative rounded-3xl bg-gradient-to-br from-white via-amber-50/40 to-emerald-50/40 p-6 sm:p-8 border border-amber-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group ${className}`}>
      {/* Decorative ambient background rings */}
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-amber-200/35 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-emerald-200/40 blur-2xl pointer-events-none" />

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
        <rect x="50" y="40" width="500" height="340" rx="24" fill="#FFFFFF" stroke="#D1E3D0" strokeWidth="2" />
        <rect x="62" y="52" width="476" height="316" rx="18" fill="#FDFEFC" stroke="#E6EFE5" strokeWidth="1.5" />

        {/* 1. Printed Calibration Band */}
        <g id="calibration-band">
          {/* Subtle curved headband ribbon */}
          <path
            d="M 100 130 C 220 85, 380 85, 500 130 L 490 175 C 375 135, 225 135, 110 175 Z"
            fill="#FEFBF3"
            stroke="#C5A059"
            strokeWidth="2.5"
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
              strokeWidth={i % 3 === 0 ? "2.2" : "1.4"}
              strokeLinecap="round"
            />
          ))}
          {/* Optical fiducial alignment targets with emerald & gold */}
          <circle cx="160" cy="148" r="7.5" fill="#FFFFFF" stroke="#1D6345" strokeWidth="2" />
          <circle cx="160" cy="148" r="2.8" fill="#1D6345" />
          <circle cx="300" cy="128" r="8.5" fill="#FFFFFF" stroke="#382738" strokeWidth="2" />
          <circle cx="300" cy="128" r="3.2" fill="#C5A059" />
          <circle cx="440" cy="148" r="7.5" fill="#FFFFFF" stroke="#1D6345" strokeWidth="2" />
          <circle cx="440" cy="148" r="2.8" fill="#1D6345" />
          <text x="300" y="152" textAnchor="middle" fill="#4B334B" fontSize="10" fontFamily="sans-serif" fontWeight="700" letterSpacing="0.08em">
            HAIRPRINT CALIBRATION BAND
          </text>
        </g>

        {/* 2. Colour Reference Card (Left Bottom) */}
        <g id="colour-card" transform="translate(90, 210)">
          <rect x="0" y="0" width="180" height="130" rx="12" fill="#FFFFFF" stroke="#CBDDC9" strokeWidth="1.5" />
          <text x="14" y="24" fill="#2E1C2E" fontSize="11" fontFamily="sans-serif" fontWeight="700">
            Colour Reference Palette
          </text>
          <text x="14" y="38" fill="#5F755E" fontSize="9" fontFamily="sans-serif" fontWeight="500">
            Calibrated light balance &amp; tonal swatches
          </text>

          {/* Color swatch grid - Rich, natural hair gradient tones */}
          <rect x="14" y="50" width="32" height="28" rx="6" fill="#171213" />
          <rect x="52" y="50" width="32" height="28" rx="6" fill="#3D2B24" />
          <rect x="90" y="50" width="32" height="28" rx="6" fill="#6E442B" />
          <rect x="128" y="50" width="32" height="28" rx="6" fill="#98683E" />

          <rect x="14" y="86" width="32" height="28" rx="6" fill="#BF8E54" />
          <rect x="52" y="86" width="32" height="28" rx="6" fill="#D6B47C" />
          <rect x="90" y="86" width="32" height="28" rx="6" fill="#E6CE9F" />
          <rect x="128" y="86" width="32" height="28" rx="6" fill="#F4E9D4" />
        </g>

        {/* 3. Hair Sample Envelope (Right Bottom) */}
        <g id="sample-envelope" transform="translate(300, 210)">
          <rect x="0" y="0" width="200" height="130" rx="12" fill="#FFFFFF" stroke="#CBDDC9" strokeWidth="1.5" />
          {/* Envelope flap aesthetic with gold trim */}
          <path d="M 0 0 L 100 65 L 200 0" stroke="#DFEADF" strokeWidth="1.5" fill="none" />
          <circle cx="100" cy="65" r="14" fill="#FAF5E8" stroke="#C5A059" strokeWidth="2" />
          {/* CrownForm seal icon */}
          <path d="M 94 65 L 97 60 L 100 63 L 103 60 L 106 65 Z" fill="#8E6D38" />

          <text x="100" y="96" textAnchor="middle" fill="#2E1C2E" fontSize="11" fontFamily="sans-serif" fontWeight="700">
            Hair Sample Envelope
          </text>
          <text x="100" y="112" textAnchor="middle" fill="#5F755E" fontSize="9" fontFamily="sans-serif" fontWeight="500">
            Sealed physical strand reference
          </text>
        </g>
      </svg>

      {/* Label: Illustrative Concept */}
      <div className="mt-4 flex items-center justify-between border-t border-amber-200/70 pt-3">
        <span className="text-xs font-semibold text-emerald-900 tracking-wide">
          Kit components: Calibration band, colour card, sample pouch &amp; guide
        </span>
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-300 shadow-sm">
          Illustrative concept
        </span>
      </div>
    </div>
  );
}

/**
 * Scalp Model & Cap Geometry Illustration (Clean, vibrant technical SVG)
 * Depicts the digital scalp curvature, crown whorl orientation, and precision cap boundary.
 * Clearly marked with "Illustrative concept" label.
 */
export function ScalpCapModelIllustration({ className = "" }) {
  return (
    <div className={`relative rounded-3xl bg-gradient-to-br from-white via-purple-50/40 to-teal-50/40 p-6 sm:p-8 border border-purple-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group ${className}`}>
      {/* Decorative ambient background rings */}
      <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-teal-200/35 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-purple-200/35 blur-2xl pointer-events-none" />

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
        <g id="scalp-mesh" opacity="0.95">
          {/* Base head silhouette contour */}
          <path
            d="M 170 340 C 140 240, 160 120, 300 90 C 440 120, 460 240, 430 340"
            stroke="#B6D1B5"
            strokeWidth="1.8"
            strokeDasharray="4 4"
            fill="none"
          />

          {/* Latitude contours with turquoise & sage tones */}
          <path d="M 185 270 C 220 290, 380 290, 415 270" stroke="#719C6E" strokeWidth="1.3" fill="none" />
          <path d="M 195 220 C 235 245, 365 245, 405 220" stroke="#3D7D5E" strokeWidth="1.6" fill="none" />
          <path d="M 210 170 C 245 195, 355 195, 390 170" stroke="#387766" strokeWidth="1.6" fill="none" />
          <path d="M 235 130 C 265 145, 335 145, 365 130" stroke="#1D6345" strokeWidth="1.8" fill="none" />

          {/* Longitudinal arc ribs */}
          <path d="M 300 90 C 290 160, 280 250, 270 330" stroke="#8CAE8A" strokeWidth="1.3" fill="none" />
          <path d="M 300 90 C 310 160, 320 250, 330 330" stroke="#8CAE8A" strokeWidth="1.3" fill="none" />
          <path d="M 300 90 C 250 160, 220 230, 200 310" stroke="#8CAE8A" strokeWidth="1" strokeDasharray="3 3" fill="none" />
          <path d="M 300 90 C 350 160, 380 230, 400 310" stroke="#8CAE8A" strokeWidth="1" strokeDasharray="3 3" fill="none" />

          {/* Precision Cap Perimeter Outline (Vibrant Gold / Purple) */}
          <path
            d="M 190 270 C 210 240, 220 180, 260 160 C 290 145, 330 145, 350 165 C 385 195, 395 245, 410 270 C 390 300, 350 315, 300 315 C 250 315, 210 300, 190 270 Z"
            stroke="#C5A059"
            strokeWidth="3"
            fill="#C5A059"
            fillOpacity="0.12"
          />

          {/* Crown Whorl Vortex Center */}
          <g id="crown-whorl" transform="translate(315, 155)">
            <circle cx="0" cy="0" r="18" stroke="#8E6D38" strokeWidth="1.2" strokeDasharray="2 2" fill="none" />
            <circle cx="0" cy="0" r="10" stroke="#C5A059" strokeWidth="1.8" fill="none" />
            <circle cx="0" cy="0" r="3.5" fill="#8E6D38" />
            {/* Spiral strands */}
            <path d="M 0 0 C 4 -6, 12 -8, 16 -3" stroke="#8E6D38" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 0 0 C 6 4, 10 11, 6 15" stroke="#8E6D38" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 0 0 C -4 6, -11 6, -14 1" stroke="#8E6D38" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 0 0 C -5 -5, -8 -11, -3 -15" stroke="#8E6D38" strokeWidth="1.8" strokeLinecap="round" />
          </g>

          {/* Measurement Callouts / Annotations with vivid colored badges */}
          {/* Parting line */}
          <path d="M 285 170 C 280 200, 275 235, 270 260" stroke="#4B284A" strokeWidth="2.5" strokeDasharray="3 3" />
          <circle cx="270" cy="260" r="3.5" fill="#4B284A" />
          <line x1="270" y1="260" x2="160" y2="280" stroke="#4B284A" strokeWidth="1.2" strokeDasharray="2 2" />
          <rect x="75" y="270" width="82" height="24" rx="6" fill="#FFFFFF" stroke="#8E5E8B" strokeWidth="1.2" shadow="sm" />
          <text x="116" y="286" textAnchor="middle" fill="#3D1D3C" fontSize="9.5" fontFamily="sans-serif" fontWeight="700">
            Natural Parting
          </text>

          {/* Crown whorl tag */}
          <line x1="325" y1="145" x2="430" y2="120" stroke="#8E6D38" strokeWidth="1.2" strokeDasharray="2 2" />
          <rect x="430" y="106" width="102" height="24" rx="6" fill="#FFFFFF" stroke="#C5A059" strokeWidth="1.2" shadow="sm" />
          <text x="481" y="122" textAnchor="middle" fill="#755620" fontSize="9.5" fontFamily="sans-serif" fontWeight="700">
            Crown Whorl Origin
          </text>

          {/* Perimeter silicone secure band tag */}
          <line x1="390" y1="285" x2="440" y2="285" stroke="#1D6345" strokeWidth="1.2" strokeDasharray="2 2" />
          <rect x="442" y="272" width="112" height="24" rx="6" fill="#FFFFFF" stroke="#458E6B" strokeWidth="1.2" shadow="sm" />
          <text x="498" y="288" textAnchor="middle" fill="#154B33" fontSize="9.5" fontFamily="sans-serif" fontWeight="700">
            Custom Cap Perimeter
          </text>
        </g>
      </svg>

      {/* Label: Illustrative Concept */}
      <div className="mt-4 flex items-center justify-between border-t border-purple-200/70 pt-3">
        <span className="text-xs font-semibold text-purple-950 tracking-wide">
          Digital representation: Scalp topography, crown whorl &amp; tailored perimeter
        </span>
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-[11px] font-bold bg-purple-100 text-purple-900 border border-purple-300 shadow-sm">
          Illustrative concept
        </span>
      </div>
    </div>
  );
}
