const toolGroups = [
  {
    category: 'Workstation',
    items: [
      {
        title: 'MacBook Pro 14" (M3 Pro)',
        link: 'https://www.apple.com/macbook-pro/',
        description:
          "My main machine for development and everything else. It's fast, runs cool (I didn't even know it had a fan until someone mentioned it), and the battery comfortably lasts over 12 hours when I'm out.",
      },
      {
        title: 'RD320U｜32” 4K BenQ Monitor',
        link: 'https://www.benq.com/en-us/monitor/programming/rd320u.html',
        description:
          'My favorite! The colors feel identical to my Mac. It offers several color modes to switch between, with eye protection layers that help during long night sessions. I mostly use the reading and coding modes. I love how its single USB-C cable handles both power and display, which keeps my desk clean.',
      },
      {
        title: 'Logitech MX Master 3S',
        link: 'https://www.logitech.com/shop/p/mx-master-3s',
        description:
          'It fits perfectly in my hand. The customizable buttons and smooth scrolling make navigating through code and web pages easier. I like it.',
      },
    ],
  },
  {
    category: 'Development',
    items: [
      {
        title: 'Cursor',
        link: 'https://cursor.so/',
        description:
          'I regret not switching from VS Code to Cursor earlier. The smart autocomplete and its huge context awareness make a big difference for me, especially for frontend stuff.',
      },
      {
        title: 'GoLand',
        link: 'https://www.jetbrains.com/go/',
        description:
          "I never use anything else for Go projects. The built-in tools make me feel like I'm in the right Go environment, everything is close at hand.",
      },
      {
        title: 'TablePlus',
        link: 'https://tableplus.com/',
        description:
          'I use it to manage all databases. Its simple and clean interface lets me focus on the data rather than the tool itself. It does the job very well. I never thought of something else.',
      },
      {
        title: 'Islands Dark Theme',
        link: 'https://github.com/gu-xiaohui/islands-theme',
        description: 'I used it recently for all codebases, my eyes just love it.',
      },
      {
        title: 'Roboto Mono Font',
        link: 'https://fonts.google.com/specimen/Roboto+Mono',
        description:
          'I used many fonts, but this one works best for me. It helps my eyes quickly scan and jump around the code.',
      },
    ],
  },
  {
    category: 'Productivity',
    items: [
      {
        title: '1Password',
        link: 'https://1password.com/',
        description:
          'I literally keep everything in it, passwords, secure notes, documents, silly photos of myself, and even certificates. I cannot imagine my digital life without it.',
      },
      {
        title: 'Raycast',
        link: 'https://www.raycast.com/',
        description:
          "My #1 tool for productivity. I use it a lot for dates and calculations, and I've set up hotkeys for all the apps and commands I frequently use which made me much faster. Huge thanks to Raycast and its community.",
      },
      {
        title: 'CleanShot X',
        link: 'https://cleanshot.com/',
        description:
          'I tried it once and immediately bought the lifetime license. The annotation editor that pops up right after taking the screenshot is awesome. It allows me quickly write notes, highlight the things I want, and share with others instantly.',
      },
      {
        title: 'Obsidian',
        link: 'https://obsidian.md/',
        description:
          "I've been using Notion for a long time for my notes and random silly things, but I found Obsidian much better. The files are in markdown, which keeps me focused on the content rather than all the extra features I don't really need.",
      },
      {
        title: 'ChatGPT Atlas',
        link: 'https://chatgpt.com/atlas/',
        description:
          'I used to read the full docs of everything I work with, usually with ChatGPT and Claude\'s assistance, but now Atlas solved the problem. The built-in "Ask ChatGPT" side window has page and selection awareness. I just select and ask, it\'s that simple',
      },
    ],
  },
]

export default function UsesPage() {
  return (
    <section className="space-y-8 leading-relaxed">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
          Uses
        </h1>
        <p className="text-neutral-600 dark:text-neutral-300">
          Tools and software I use daily to get my work done and stay productive.
        </p>
      </header>

      <div className="space-y-8">
        {toolGroups.map((group) => (
          <div key={group.category} className="space-y-5">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
              {group.category}
            </h2>
            <div className="space-y-4">
              {group.items.map((tool) => (
                <div key={tool.title} className="flex gap-3">
                  <span className="text-neutral-400  mt-0.5">-</span>
                  <div className="flex-1 space-y-1">
                    <h3 className="font-bold">
                      <a
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-900 dark:text-neutral-100 underline hover:text-neutral-600 dark:hover:text-neutral-300"
                      >
                        {tool.title}
                      </a>
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300">{tool.description}</p>
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
