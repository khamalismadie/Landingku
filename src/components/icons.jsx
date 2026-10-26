const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round' }

function Icon({ children, ...props }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      {children}
    </svg>
  )
}

export const GithubIcon = (props) => (
  <Icon {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" {...stroke} />
    <path d="M9 18c-4.51 2-5-2-7-2" {...stroke} />
  </Icon>
)

export const BriefcaseIcon = (props) => (
  <Icon {...props}>
    <rect x="2" y="7" width="20" height="14" rx="2" {...stroke} />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" {...stroke} />
  </Icon>
)

export const LayersIcon = (props) => (
  <Icon {...props}>
    <path d="M12 2 2 7l10 5 10-5-10-5Z" {...stroke} />
    <path d="m2 17 10 5 10-5" {...stroke} />
    <path d="m2 12 10 5 10-5" {...stroke} />
  </Icon>
)

export const CoffeeIcon = (props) => (
  <Icon {...props}>
    <path d="M10 2v2M14 2v2" {...stroke} />
    <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" {...stroke} />
  </Icon>
)

export const BotIcon = (props) => (
  <Icon {...props}>
    <path d="M12 8V4H8" {...stroke} />
    <rect width="16" height="12" x="4" y="8" rx="2" {...stroke} />
    <path d="M2 14h2M20 14h2M15 13v2M9 13v2" {...stroke} />
  </Icon>
)

export const ZapIcon = (props) => (
  <Icon {...props}>
    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" {...stroke} />
  </Icon>
)

export const CloudIcon = (props) => (
  <Icon {...props}>
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" {...stroke} />
  </Icon>
)

export const CodeIcon = (props) => (
  <Icon {...props}>
    <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" {...stroke} />
  </Icon>
)

export const ServerIcon = (props) => (
  <Icon {...props}>
    <rect width="20" height="8" x="2" y="2" rx="2" {...stroke} />
    <rect width="20" height="8" x="2" y="14" rx="2" {...stroke} />
    <path d="M6 6h.01M6 18h.01" {...stroke} />
  </Icon>
)

export const DatabaseIcon = (props) => (
  <Icon {...props}>
    <ellipse cx="12" cy="5" rx="9" ry="3" {...stroke} />
    <path d="M3 5V19A9 3 0 0 0 21 19V5" {...stroke} />
    <path d="M3 12A9 3 0 0 0 21 12" {...stroke} />
  </Icon>
)

export const WrenchIcon = (props) => (
  <Icon {...props}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" {...stroke} />
  </Icon>
)

export const LightbulbIcon = (props) => (
  <Icon {...props}>
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" {...stroke} />
    <path d="M9 18h6M10 22h4" {...stroke} />
  </Icon>
)

export const WalletIcon = (props) => (
  <Icon {...props}>
    <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" {...stroke} />
    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" {...stroke} />
  </Icon>
)

export const PenIcon = (props) => (
  <Icon {...props}>
    <path d="M12 20h9" {...stroke} />
    <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" {...stroke} />
  </Icon>
)

export const FlaskIcon = (props) => (
  <Icon {...props}>
    <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" {...stroke} />
    <path d="M8.5 2h7M7 16h10" {...stroke} />
  </Icon>
)

export const MapIcon = (props) => (
  <Icon {...props}>
    <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" {...stroke} />
    <path d="M15 5.764v15M9 3.236v15" {...stroke} />
  </Icon>
)

export const GraduationCapIcon = (props) => (
  <Icon {...props}>
    <path d="M21.42 10.92a1 1 0 0 0 0-1.84l-8.58-3.91a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0z" {...stroke} />
    <path d="M22 10v6" {...stroke} />
    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" {...stroke} />
  </Icon>
)
