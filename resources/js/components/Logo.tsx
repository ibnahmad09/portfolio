type LogoProps = {
    /** Sizing/utility classes applied to both theme variants. */
    className?: string;
};

export function Logo({ className = 'h-8' }: LogoProps) {
    return (
        <>
            <img
                src="/images/logo/logo-white (1).png"
                alt="Website Developer Team"
                className={`w-auto dark:hidden ${className}`}
            />
            <img
                src="/images/logo/logo-black.png"
                alt="Website Developer Team"
                className={`hidden w-auto dark:block ${className}`}
            />
        </>
    );
}
