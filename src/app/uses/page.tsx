const toolGroups = [
  {
    category: 'Workstation',
    items: [
      {
        title: 'MacBook Pro 14" (M3 Pro)',
        link: 'https://www.apple.com/macbook-pro/',
        description: "It’s my main machine for development and everything else. It’s fast, runs cool (I didn’t even know it had a fan until someone mentioned it), and the battery comfortably lasts over 12 hours when I’m out.",
      },
      {
        title: 'RD320U｜32” 4K BenQ Monitor',
        link: 'https://www.benq.com/en-us/monitor/programming/rd320u.html',
        description: "The best monitor I’ve ever used. The colors are almost identical to macOS, and it offers tons of modes to switch between — I mostly use the reading and coding modes. They add layers of eye protection, which really helps during long night sessions. With a single USB-C cable for both power and casting, I barely use the charger anymore except on short trips, and my desk stays clean.",
      },
      {
        title: 'Logitech MX Master 3S',
        link: 'https://www.logitech.com/shop/p/mx-master-3s',
        description: 'It fits perfectly in my hand. The customizable buttons and smooth scrolling make navigating through code and documents a breeze. I like it.',
      },
    ],
  },
  {
    category: 'Development',
    items: [
      {
        title: 'Cursor',
        link: 'https://cursor.so/',
        description: 'I regret not switching from VS Code to Cursor earlier, the smart autocomplete and its huge context awareness make a big difference for me.',
      },
      {
        title: 'GoLand',
        link: 'https://www.jetbrains.com/go/',
        description: 'I never use anything else for Go projects. The built-in tools make me feel like I’m in the best environment.',
      },
      {
        title: 'TablePlus',
        link: 'https://tableplus.com/',
        description: 'I use it to manage all databases, its simple and clean inteface let me focus on the data rather than the tool itself. Never thought of something else.',
      },
      {
        title: 'Atom One Dark Theme (Night Flat)',
        link: 'https://github.com/Binaryify/OneDark-Pro?tab=readme-ov-file#night-flat-theme',
        description: 'I can’t work with JSX without it, my eyes love it, but for Go projects, I prefer JetBrains’ default dark theme.',
      },
      {
        title: 'Roboto Mono Font',
        link: 'https://fonts.google.com/specimen/Roboto+Mono',
        description: 'I tried many fonts, but this one feels just right for coding, I can quickly read and scan the code easily with it.',
      },
    ],
  },
  {
    category: 'Productivity',
    items: [
      {
        title: '1Password',
        link: 'https://1password.com/',
        description: 'I literally keep everything in it, passwords, secure notes, documents, silly photos of myself, and even certificates. I cannot imagine my digital life without it.',
      },
      {
        title: 'Obsidian',
        link: 'https://obsidian.md/',
        description: "I've been using Notion for a long time for my notes and random silly things, but I found Obsidian much better. The files are in markdown, which keeps me focused on the content rather than all the extra features I don’t really need.",
      },
      {
        title: 'Raycast',
        link: 'https://www.raycast.com/',
        description: "I didn't imagine there was a tool like it. I use it for everything, from launching apps and running actions to quick calculations, managing clipboard history, and many other I don't know features.",
      },
      {
        title: 'ChatGPT Atlas',
        link: 'https://chatgpt.com/atlas/',
        description: "I used to read the full docs of everything I work with, doing so with GPT and Claude’s assistance, but now Atlas solved the problem. It has page and selection awareness. I never close it.",
      },
    ],
  },
]

export default function UsesPage() {
  return (
    <section className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold text-neutral-900 font-display">Uses</h1>
        <p className="text-neutral-600">
          Tools and software I use daily to get my work done and stay productive.
        </p>
      </header>

      <div className="space-y-10">
        {toolGroups.map((group) => (
          <div key={group.category} className="space-y-6">
            <h2 className="text-xl font-bold text-neutral-900 font-display">{group.category}</h2>
            <div className="space-y-4">
              {group.items.map((tool) => (
                <div key={tool.title} className="flex gap-3">
                  <span className="text-neutral-400 mt-0.5">-</span>
                  <div className="flex-1 space-y-1">
                    <h3 className="font-bold font-display">
                      <a
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-900 underline hover:text-neutral-600 transition"
                      >
                        {tool.title}
                      </a>
                    </h3>
                    <p className="text-neutral-600">{tool.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
