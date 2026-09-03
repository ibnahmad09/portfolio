import { useState, type FormEvent } from 'react';
import { useReveal } from '@/hooks/use-reveal';

// Single source of truth for the business WhatsApp number (international format).
// mock: ganti nomor WhatsApp sesungguhnya
const WHATSAPP_NUMBER = '6281234567890';

const CONTACT_INFO = [
    {
        label: 'WhatsApp',
        value: '0812-3456-7890',
        // display value; actual number lives in WHATSAPP_NUMBER above
    },
    {
        label: 'Email',
        value: 'halo@arsitektura.id',
        // mock: alamat email sesungguhnya
    },
    {
        label: 'Lokasi',
        value: 'Bandung, Indonesia',
        // mock: kota/alamat studio
    },
];

const DAYS = [
    {
        label: 'Senin–Jumat',
        value: '09.00–18.00 WIB',
    },
    {
        label: 'Sabtu',
        value: '09.00–12.00 WIB',
    },
];

export function Contact() {
    const ref = useReveal(0.15);
    const [form, setForm] = useState({ name: '', phone: '', message: '' });
    const [errors, setErrors] = useState<{ name?: string; phone?: string; message?: string }>(
        {},
    );
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const next: typeof errors = {};
        if (!form.name.trim()) next.name = 'Nama perlu diisi.';
        if (!form.phone.trim()) next.phone = 'Nomor WhatsApp perlu diisi.';
        if (!form.message.trim()) next.message = 'Ceritakan sedikit kebutuhan Anda.';
        setErrors(next);
        if (Object.keys(next).length > 0) return;

        const { name, phone, message } = form;
        const text = [
            `Halo, saya ${name}. Saya mau konsultasi pembuatan website.`,
            '',
            message,
            '',
            `Nomor saya: ${phone}`,
        ].join('\n');
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank', 'noopener');

        setSubmitted(true);
    };

    const inputStyles =
        'w-full rounded-xl border bg-cream-50 px-4 py-3 text-[0.95rem] text-ink-900 placeholder:text-ink-500/60 transition-colors focus:outline-none focus:ring-2 dark:bg-warm-900 dark:text-cream-50 dark:placeholder:text-ink-300/60';

    return (
        <section id="kontak" className="bg-cream-100 py-24 dark:bg-warm-800 md:py-28">
            <div className="mx-auto max-w-6xl px-6 md:px-10">
                <div
                    ref={ref}
                    className="reveal grid grid-cols-1 gap-12 rounded-3xl border border-cream-200 bg-cream-50 p-8 md:p-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 dark:border-warm-700 dark:bg-warm-900"
                >
                    {/* Left: intro & info */}
                    <div>
                        <h2 className="font-serif text-[clamp(1.9rem,3vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-ink-900 dark:text-cream-50">
                            Mau mulai? Mari ngobrol dulu.
                        </h2>
                        <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-ink-500 dark:text-ink-300">
                            Ceritakan kebutuhan dan kondisi bisnis Anda. Kami akan
                            mencari tahu apa yang paling membantu, tanpa biaya dan tanpa
                            kewajiban untuk lanjut.
                        </p>

                        <dl className="mt-9 space-y-4">
                            {CONTACT_INFO.map((c) => (
                                <div key={c.label} className="flex flex-col gap-0.5">
                                    <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-ink-500 dark:text-ink-300">
                                        {c.label}
                                    </dt>
                                    <dd className="text-[0.95rem] font-medium text-ink-900 dark:text-cream-50">
                                        {c.value}
                                    </dd>
                                </div>
                            ))}
                        </dl>

                        <div className="mt-8 border-t border-cream-200 pt-6 dark:border-warm-700">
                            <div className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-ink-500 dark:text-ink-300">
                                Jam respons
                            </div>
                            <div className="mt-2 max-w-[240px] space-y-1">
                                {DAYS.map((d) => (
                                    <div
                                        key={d.label}
                                        className="flex justify-between text-[0.9rem] text-ink-700 dark:text-ink-300"
                                    >
                                        <span>{d.label}</span>
                                        <span>{d.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: form */}
                    <div>
                        {submitted ? (
                            <div className="flex h-full flex-col items-start justify-center rounded-2xl border border-accent-600/30 bg-accent-600/5 p-8 text-ink-900 dark:text-cream-50">
                                <h3 className="font-serif text-2xl font-bold">Terima kasih!</h3>
                                <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-ink-500 dark:text-ink-300">
                                    Pesan Anda sudah kami terima. Tim kami akan menghubungi
                                    Anda secepatnya melalui WhatsApp.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate className="space-y-5">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-1.5 block text-sm font-semibold text-ink-900 dark:text-cream-50"
                                    >
                                        Nama
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        placeholder="Nama Anda"
                                        className={`${inputStyles} ${
                                            errors.name
                                                ? 'border-red-700 focus:ring-red-700/30 dark:border-red-500'
                                                : 'border-cream-200 focus:border-accent-600 focus:ring-accent-600/25 dark:border-warm-700'
                                        }`}
                                        aria-invalid={!!errors.name}
                                    />
                                    {errors.name && (
                                        <p className="mt-1.5 text-sm font-medium text-red-700 dark:text-red-500">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="mb-1.5 block text-sm font-semibold text-ink-900 dark:text-cream-50"
                                    >
                                        Nomor WhatsApp
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        value={form.phone}
                                        onChange={(e) =>
                                            setForm({ ...form, phone: e.target.value })
                                        }
                                        placeholder="Contoh: 0812 3456 7890"
                                        className={`${inputStyles} ${
                                            errors.phone
                                                ? 'border-red-700 focus:ring-red-700/30 dark:border-red-500'
                                                : 'border-cream-200 focus:border-accent-600 focus:ring-accent-600/25 dark:border-warm-700'
                                        }`}
                                        aria-invalid={!!errors.phone}
                                    />
                                    {errors.phone && (
                                        <p className="mt-1.5 text-sm font-medium text-red-700 dark:text-red-500">
                                            {errors.phone}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="mb-1.5 block text-sm font-semibold text-ink-900 dark:text-cream-50"
                                    >
                                        Ceritakan kebutuhan Anda
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        value={form.message}
                                        onChange={(e) =>
                                            setForm({ ...form, message: e.target.value })
                                        }
                                        placeholder="Contoh: Saya ingin membuka toko online untuk produk kerajinan saya."
                                        className={`${inputStyles} resize-none ${
                                            errors.message
                                                ? 'border-red-700 focus:ring-red-700/30 dark:border-red-500'
                                                : 'border-cream-200 focus:border-accent-600 focus:ring-accent-600/25 dark:border-warm-700'
                                        }`}
                                        aria-invalid={!!errors.message}
                                    />
                                    {errors.message && (
                                        <p className="mt-1.5 text-sm font-medium text-red-700 dark:text-red-500">
                                            {errors.message}
                                        </p>
                                    )}
                                </div>

                                <p className="text-xs leading-relaxed text-ink-500 dark:text-ink-300">
                                    Dengan mengirim, Anda setuju kami menghubungi Anda
                                    terkait kebutuhan di atas. Tidak ada spam.
                                </p>

                                <button
                                    type="submit"
                                    className="w-full rounded-full bg-accent-600 px-7 py-3.5 text-sm font-semibold leading-tight text-cream-50 shadow-[0_2px_8px_rgba(160,90,44,0.25)] transition-all duration-200 hover:bg-accent-700 hover:shadow-[0_4px_16px_rgba(160,90,44,0.3)] active:scale-[0.98]"
                                >
                                    Kirim & dapatkan balasan cepat
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
