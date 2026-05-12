export function AccentUnderline({ children }: { children: React.ReactNode }) {
    return (
        <span className="accent-underline">
            {children}
            <svg viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="6" />
            </svg>
        </span>
    )
}
