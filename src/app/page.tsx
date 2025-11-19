export default function Home() {
  return (
    <div className="tracking-tight">
      <h1 className="text-xl font-bold text-neutral-900">
        Hi, I&apos;m Salim Absi 👋
      </h1>

      <div className="mt-4 space-y-6 text-lg leading-relaxed text-neutral-700">
        <p>
          I&apos;m a software engineer, who builds fast and reliable web applications.
        </p>

        <p>
          I work mostly with <span className="font-semibold">Go</span> for backend services and{' '}
          <span className="font-semibold">React</span>, <span className="font-semibold">Next.js</span>, and{' '}
          <span className="font-semibold">Tailwind CSS</span> for the frontend. I build cloud-native applications
          that scale and deploy them on modern platforms.
        </p>

        <p>
          In my free time, you can find me testing internal std libs, or making hot chocolate with airpods on my head listening to podcasts in various topics.
        </p>
      </div>

      {/* Social links */}
      <div className="mt-8 flex items-center gap-4">
        <a
          href="https://linkedin.com/in/salimabsi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-500 transition hover:text-neutral-900"
        >
          <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="size-6">
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg>
        </a>
        <a
          href="https://github.com/salimabsi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-500 transition hover:text-neutral-900"
        >
          <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="size-6">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
          </svg>
        </a>
        <a
          href="https://x.com/SalimAbsiX"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-500 transition hover:text-neutral-900"
        >
          <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="size-6">
            <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"></path>
          </svg>
        </a>
      </div>
    </div>
  )
}
