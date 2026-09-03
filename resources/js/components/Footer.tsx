export function Footer() {
    return (
        <footer className="border-t border-cream-200 bg-cream-50 py-10 dark:border-warm-700 dark:bg-warm-900">
            <div className="mx-auto flex max-w-full flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:px-10 md:text-left">
                <div>
                    <span className="font-serif text-lg font-bold text-ink-900 dark:text-cream-50">
                        Arsitektura<span className="text-accent-600">.</span>
                    </span>
                    <p className="mt-1 text-xs text-ink-500 dark:text-ink-300">
                        {/* mock: tahun & nama studio sesungguhnya */}
                        © {new Date().getFullYear()} Arsitektura. Web design untuk UMKM Indonesia.
                    </p>
                </div>
                <div className="text-xs text-ink-500 dark:text-ink-300">
                    Dibuat dengan hangat di Bandung.
                </div>
            </div>
        </footer>
    );
}
