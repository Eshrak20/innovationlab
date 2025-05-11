

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: May 10, 2025 at 01:55 PM
-- Server version: 8.0.40
-- PHP Version: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `innovationlabdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` bigint UNSIGNED NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `summary` text COLLATE utf8mb4_unicode_ci,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `published_by` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `profile_photo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `likes` int NOT NULL DEFAULT '0',
  `category` enum('technical','nontechnical') COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `admin_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `image`, `title`, `summary`, `description`, `date`, `published_by`, `profile_photo`, `likes`, `category`, `slug`, `admin_id`, `created_at`, `updated_at`) VALUES
(21, 'blogs/invixKnbjPTcaI9XmYW53dDgaPGUnIi0RsP20ujk.png', 'Vibe Coding: Redefining Developer Productivity for Tomorrow', 'Have you ever daydreamed about explaining your app idea to your laptop and watching it whip up the code for you? Well, that’s not just a fantasy anymore—it’s vibe coding, a groundbreaking approach that’s redefining developer productivity for tomorrow and it’s changing the game for how we build software. In an era where time is precious and innovation is relentless, vibe coding emerges as a beacon of efficiency, empowering developers to focus on what truly matters: bringing their visions to life. Let’s dive into this fresh take on coding and see what it’s all about.', 'Have you ever daydreamed about explaining your app idea to your laptop and watching it whip up the code for you? Well, that’s not just a fantasy anymore—it’s vibe coding, a groundbreaking approach that’s redefining developer productivity for tomorrow and it’s changing the game for how we build software. In an era where time is precious and innovation is relentless, vibe coding emerges as a beacon of efficiency, empowering developers to focus on what truly matters: bringing their visions to life. Let’s dive into this fresh take on coding and see what it’s all about.\r\n\r\nWhat’s Vibe Coding All About?\r\nPicture this: you’ve got a killer idea for a website or an app, but the thought of wrestling with code makes you groan. Vibe coding says, “No worries!” It lets you describe what you want in everyday words—like chatting with a friend—and an AI steps in to turn your thoughts into actual, functioning code. No need to memorize tricky commands or puzzle out the perfect logic. The AI’s got your back.\r\n\r\nAnd here’s the cool part: it’s not just for newbies. Even folks who’ve been coding for years can use vibe coding to skip the boring stuff and get straight to the fun, creative bits. It’s like a shortcut that keeps the good vibes flowing.\r\n\r\nWhy This Matters Today\r\nLet’s face it—building software isn’t getting any simpler. Projects are bigger, deadlines are tighter, and there just aren’t enough expert coders to go around. Vibe coding swoops in like a superhero, making it possible for more people to jump in and create. It’s not here to steal jobs from pros; it’s here to team up with them, boosting what they can do and inviting fresh faces into the mix.\r\n\r\nHow to Jump Into Vibe Coding\r\nReady to give it a spin? Here’s how to get going:\r\n\r\nPick Your Gear: There’s a bunch of vibe coding tools out there, from slick platforms to powerful AI helpers. Poke around online to find one that clicks for you.\r\nSet Things Up: Most of these tools are pretty chill about getting started. Follow their quick setup guides, and you’ll be good to go.\r\nTalk It Out: The trick is to explain your idea clearly—like you’re telling a pal what you need. The more details you give, the better the AI can nail it.\r\nRecommended Tools for Vibe Coding\r\nTo enhance your vibe coding experience, here are some powerful tools and AI agents that align with vibe coding’s emphasis on intuitive, AI-driven development:\r\n\r\nCursor: An AI-powered code editor built on VS Code’s foundation. Its Composer feature lets you instruct the AI to write, edit, or manage code using natural language—perfect for vibe coding’s intuitive approach.\r\nWebsite: cursor.sh\r\nDocumentation: docs.cursor.sh\r\nWindsurf: An AI-driven editor with an agentic mode that pulls relevant codebase sections, runs code, and displays results as it works. This hands-off automation is ideal for vibe coders.\r\nWebsite: windsurd.ai\r\nDocumentation: windsurd.ai/docs\r\nReplit Agent: A browser-based AI tool that builds projects from natural language descriptions. It’s great for vibe coders—especially beginners—who want to focus on ideas over syntax.\r\nWebsite: replit.com\r\nDocumentation: docs.replit.com/agent\r\nThese tools add value by simplifying interaction, boosting efficiency, and offering flexibility. Whether you prefer a VS Code-like setup (Cursor), an agentic approach (Windsurf), or a browser-based solution (Replit Agent), there’s an option for your style. Most offer free tiers or trials, so experiment to find your vibe. And don’t forget to check their documentation for new features to keep your setup cutting-edge.\r\n\r\nAI: Your Coding Sidekick\r\nThe magic behind vibe coding? That’s all AI. These smart systems have been fed mountains of code and regular human language, so they can figure out what you mean and churn out solid code to match. Plus, they’re always learning, getting sharper with every update. It’s like having a buddy who’s always ready to help—and getting better at it every day.\r\n\r\nWatch Out for the Bumps\r\nNow, vibe coding isn’t perfect. It’s tempting to lean on the AI too much and forget to double-check what it spits out. But here’s the deal: it’s a teammate, not a boss. You’ve still gotta peek under the hood, test everything, and tweak as needed. Stay in the driver’s seat, and you’ll be fine.\r\n\r\nWhat’s Next for Vibe Coding\r\nDown the road, vibe coding could flip the script on how we make software. As AI gets even cleverer, it might handle trickier projects and pick up on subtler hints. Imagine a world where anyone with a spark of an idea can whip up a program—no coding degree required. That’s the vibe we’re heading toward.\r\n\r\nGive It a Go!\r\nFeeling inspired? Start small—maybe a little note-taking app or a fun game. Tell the AI what you’re dreaming up, watch it work its magic, and play around with what you get. It’s a blast to see your ideas turn real, no sweat required.\r\n\r\nSo, there you have it—vibe coding in a nutshell. It’s not just some passing fad; it’s a peek at where coding’s headed. With AI by our side, we’re making software creation faster, friendlier, and open to everyone. Grab the chance, mess around with it, and who knows? Your next big idea might just come to life.', '2025-05-01', 'Eshrak', NULL, 0, 'technical', 'vibe-coding-redefining-developer-productivity-for-tomorrow', 1, '2025-05-01 08:05:45', '2025-05-01 08:08:43'),
(22, 'blogs/58MunlrXycMQ6JJFXMi3dhdEzq8LROxf8fnJCSZr.jpg', 'Unpacking the MCP Protocol: The Unsung Hero of Tomorrow’s Web', 'Picture this: you’re at a party where everyone speaks a different language. Chaos, right? Now imagine someone hands out magic earpieces that let everyone understand each other perfectly. That’s the vibe of the MCP Protocol—short for Modular Communication Protocol. It’s not flashy, it’s not hyped to death (yet), but it’s quietly shaping up to be a cornerstone of how web systems talk to each other. Whether you’re into decentralized apps, microservices, or just love a good tech story, MCP is worth your attention. Let’s dive in.', 'What’s MCP All About?\r\nThe MCP Protocol is like the ultimate wingman for digital systems. It’s a framework that lets apps, services, and even AI agents chat effortlessly, no matter how different they are under the hood. In a world where every developer seems to reinvent the wheel, MCP steps in with a bold idea: standardize the conversation, not the tools.\r\n\r\nIt’s modular—meaning you can mix and match components like LEGO bricks—and it’s built to handle the messy reality of modern web tech. From blockchain-powered dApps to sprawling microservice setups, MCP is the glue that keeps it all humming. But it’s not just about connecting stuff; it’s about doing it in a way that’s flexible, future-proof, and dare I say, kind of elegant.\r\n\r\nHow Does This Thing Actually Work?\r\nOkay, let’s pop the hood without getting too lost in the weeds. MCP is a client-server setup with a clever twist. Here’s the rundown:\r\n\r\nMCP Servers: Think of these as the ambassadors for each service or app. Every piece of your system—like a database, a payment gateway, or an AI model—gets its own MCP server. This server knows the service’s quirks and translates its abilities into a language MCP understands.\r\nMCP Clients: These are the messengers. When one part of your system needs to talk to another, the MCP client steps up. It formats the request, sends it to the right MCP server, and delivers the response back home. No fuss, no muss.\r\nThe Transport Bit: How does the data move? MCP’s chill about it. It can ride over HTTP for far-flung services or use STDIO if everything’s local. It’s like choosing between email or a quick shout across the room—whatever works.\r\nJSON-RPC Underneath: The secret sauce is JSON-RPC 2.0, a lightweight way to structure messages. It’s simple, universal, and keeps things tidy. A request might look like: {“method”: “getUser”, “params”: {“id”: 42}, “id”: 1}. Clean, right?\r\nThe magic happens because MCP wraps all this in modular adapters. These little helpers bridge the gap between a service’s native tongue and MCP’s common dialect. It’s like having a translator for every oddball API you’ve ever cursed at.\r\n\r\nWhy MCP Is a Big Deal for Decentralized Web Apps\r\nDecentralized web apps—dApps—are the wild west of tech. They’re free from big bosses like Google or AWS, but that freedom means chaos when parts need to sync up. Enter MCP.\r\n\r\nSay you’re building a dApp for a peer-to-peer marketplace. You’ve got a blockchain handling trades, an off-chain database for user profiles, and a slick front-end pulling it all together. Without MCP, you’d be stitching this mess with custom code, praying it holds. With MCP? Each piece gets an MCP server, and they talk like they’ve known each other forever.\r\n\r\nI’ve seen dApp devs wrestle with integrating smart contracts and external APIs—price oracles, identity verifiers, you name it. MCP smooths that out. Need to swap an oracle? Just plug in a new MCP server. No rewriting half your app. It’s freedom with structure, which is rare in the decentralized world.\r\n\r\nMicroservices and MCP: Besties Forever\r\nMicroservices are the rock stars of software design—small, independent, and scalable. But getting them to play nice? That’s where the headaches start. One service uses REST, another’s on gRPC, and good luck if they’re in different languages.\r\n\r\nMCP swoops in like a conductor for this orchestra. Wrap each microservice in an MCP server, and suddenly they’re all singing the same tune. Your user login service can ping your notification system without caring how it’s built. Need to scale your analytics service during a traffic spike? Spin up more MCP servers, and the rest of your stack doesn’t blink.\r\n\r\nI once worked on a project where swapping a third-party API broke everything because the old and new versions spoke different dialects. With MCP, that’s a non-issue. It’s like giving your microservices a universal plug—and I’m here for it.\r\n\r\nThe Human Touch\r\nLet’s zoom out from the tech for a sec. MCP isn’t just for machines—it’s for us. Developers, you know that soul-crushing moment when you’re debugging a communication snafu between two services? MCP takes that pain away. You focus on the fun stuff—building features, not babysitting integrations.\r\n\r\nFor ops folks, it’s a godsend too. When everything speaks MCP, logs are uniform, errors make sense, and you can automate monitoring without duct-taping scripts together. It’s less “why is this broken?” and more “look what we built!”\r\n\r\nEven end-users win. Imagine a travel app where the flight checker, hotel booker, and weather forecast all sync up flawlessly because MCP’s running the show. Smoother tech, happier humans.\r\n\r\nThe Rough Edges\r\nMCP isn’t flawless—nothing is. Setting it up can feel like herding cats, especially if you’re retrofitting an old system. I’ve heard devs groan about the initial lift, and fair enough—it’s not plug-and-play for legacy code.\r\n\r\nPerformance can also take a hit. That extra layer of abstraction? It’s not free. In crazy-high-speed setups, you might notice a lag. But the MCP crew’s on it—there’s talk of leaner encodings to speed things up.\r\n\r\nAnd security? Exposing services via MCP servers is powerful, but risky if you skimp on locks. You’ll want encryption, tight auth, and maybe some clever monitoring to spot trouble. It’s not a dealbreaker, just a “handle with care” sign.\r\n\r\nWhere’s MCP Heading?\r\nI’ve got a hunch MCP could be huge. As the web gets more decentralized and AI keeps popping up everywhere, we need a way to keep the chaos in check. MCP feels like the answer.\r\n\r\nPicture this: your AI home assistant books your vacation by chatting with a dozen MCP-enabled services—flights, hotels, even your smart fridge to restock when you’re back. Or a decentralized gaming platform where worlds built by different teams mesh seamlessly via MCP. It’s not sci-fi; it’s close.\r\n\r\nThe community’s buzzing too. Open-source devs are cranking out tools, and big players might weave MCP into the web’s fabric someday. HTTP started small once—why not MCP?\r\n\r\nJump In: Your MCP Adventure\r\nWant to mess around with MCP? Here’s your starter kit:\r\n\r\nRead Up: The MCP docs are solid—start there.\r\nExperiment: Grab an open-source MCP client or server and poke it. Break it. Learn it.\r\nDIY: Wrap a tiny service—like a to-do list API—in MCP. It’s a fun weekend project.\r\nConnect: Hit up MCP forums or Discord. The crowd’s friendly and full of ideas.\r\nKeep Exploring: It’s a moving target. Follow the updates.\r\nParting Words\r\nThe MCP Protocol isn’t loud or glamorous, but it’s got heart. It’s about making the web’s messy, brilliant pieces work together—smarter, not harder. For decentralized dreamers, microservice wranglers, or anyone who loves tech that works, MCP’s a quiet revolution.\r\n\r\nWhat’s your take? Could MCP change the game, or is it too niche? Leave a note below. Let’s talk shop.', '2025-05-01', 'Eshrak', NULL, 0, 'technical', 'unpacking-the-mcp-protocol-the-unsung-hero-of-tomorrow-s-web', 1, '2025-05-01 08:06:40', '2025-05-01 08:13:24'),
(23, 'blogs/8Ou5qahrQqLuA6i0QHhE4wUwvv49tdOj56Uq3gvp.jpg', 'AI Agents in Web Development: Revolutionizing How We Build the Web', 'What Are AI Agents in Web Development?\r\nAI agents are autonomous or semi-autonomous software powered by machine learning, natural language processing (NLP), and generative AI. Unlike traditional tools, they don’t just follow instructions—they learn from your workflow, adapt to your needs, and offer proactive solutions. In web development, AI agents assist with coding, testing, debugging, performance optimization, and even UI/UX design. They’re like a co-founder who never sleeps, helping you build better web apps faster.', 'How Are AI Agents Being Used in Web Development?\r\nLet’s look at some real-world examples of AI agents in action.\r\n\r\nCode Generation for Faster Development\r\nSuppose you’re building an e-commerce site using Next.js and need a product card component. Instead of coding from scratch, you use an AI agent like xAI’s Grok 3. You prompt, “Create a Next.js product card with image, title, price, and a ‘Buy Now’ button,” and it delivers: jsx\r\nimport styles from \'./ProductCard.module.css\';\r\n\r\nconst ProductCard = ({ image, title, price }) => {\r\n    return (\r\n        <div className={styles.card}>\r\n            <img src={image} alt={title} className={styles.image} />\r\n            <h3 className={styles.title}>{title}</h3>\r\n            <p className={styles.price}>${price}</p>\r\n            <button className={styles.button}>Buy Now</button>\r\n        </div>\r\n    );\r\n};\r\nexport default ProductCard;\r\nThe AI also generates a CSS module with responsive styles, saving you hours. It might even suggest adding lazy loading for the image to improve performance—a tip you might’ve overlooked.Debugging and Testing Automation\r\nOn a recent project, my team struggled with a bug in a React app where a form submission failed silently on Safari. An AI agent analyzed the code, identified a browser-specific issue with event.preventDefault(), and proposed a polyfill. It also generated Jest unit tests for the form, like:\r\n\r\ntest(\'form submits with valid data\', () => {\r\n    const handleSubmit = jest.fn();\r\n    render(<Form onSubmit={handleSubmit} />);\r\n    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: \'test@example.com\' } });\r\n    fireEvent.click(screen.getByText(/submit/i));\r\n    expect(handleSubmit).toHaveBeenCalled();\r\n});\r\nThis slashed our debugging time by half and ensured our app was rock-solid across browsers.\r\nUI/UX Design and Optimization\r\nAI agents aren’t just for code—they’re design wizards too. Tools like Uizard or AI-powered Figma plugins can generate wireframes from prompts like, “Design a clean dashboard for a fitness app.” On a recent client project, an AI agent analyzed user click patterns and recommended moving a CTA button higher on the page, increasing conversions by 12%. It also suggested a color contrast tweak to meet WCAG accessibility standards—something I’d missed.\r\nCurrent Concerns with AI Agents in Web Development\r\nDespite their promise, AI agents come with challenges we can’t ignore.\r\n\r\nReliability and Errors: AI can mess up. I’ve seen an agent suggest a SQL query for a web app that ignored indexes, tanking performance. Blindly trusting AI without understanding its logic can lead to costly mistakes.\r\nSecurity and Privacy Risks: Many AI agents need access to your codebase, raising red flags. What if they expose API keys or introduce vulnerabilities? A 2024 study found 35% of developers using AI tools worried about data leaks. Always vet your tools and use secure environments.\r\nOver-Dependence: Relying too much on AI can dull your skills. Junior devs, especially, might lean on AI instead of learning fundamentals, which could hurt them long-term.\r\nEthical and Job Concerns: There’s chatter about AI replacing developers. While AI handles repetitive tasks, it can’t replicate human creativity or strategic thinking—yet. Still, the fear of job displacement looms, especially in competitive markets.\r\nWill AI Agents Be Standard in All Web Apps Soon?\r\nAI agents are on a fast track to ubiquity. A 2024 Forrester report estimates that by 2028, 80% of web development teams will use AI-driven tools. Platforms like Vercel are already integrating AI for automated deployments, and WordPress plugins now use AI to optimize SEO in real-time. However, widespread adoption faces hurdles: cost (premium AI tools can be pricey), regulatory barriers in sectors like healthcare, and the need for better security standards.\r\n\r\nI predict that by 2032, AI agents will be as common as APIs in web apps. They’ll handle routine tasks—think auto-scaling servers, optimizing images, or generating meta tags—freeing devs to focus on innovation. Smaller teams might lag due to budget constraints, but open-source AI tools will likely bridge that gap.\r\n\r\nHow to Learn AI Agents for Web Development\r\nGetting started with AI agents is easier than you think. Here’s a roadmap:\r\n\r\nExperiment with Tools: Start with free or freemium options like GitHub Copilot, Replit AI, or xAI’s Grok 3 (available on grok.com with a free tier). They integrate with IDEs like VS Code and offer hands-on practice.\r\nOnline Courses and Tutorials: Platforms like Pluralsight and Codecademy offer courses on AI in development. Search for “AI-Assisted Web Development” to find relevant content. YouTube channels like Fireship also have quick, actionable tutorials.\r\nPractice with Real Projects: Build a simple web app—like a blog or portfolio—and use an AI agent to assist. Ask it to generate components, write tests, or optimize your site’s load time. Learning by doing is key.\r\nEngage with Communities: Join discussions on X, Reddit’s r/webdev, or developer Discords. I’ve picked up countless tips from devs sharing their AI workflows—like using AI to automate repetitive CSS tweaks.\r\nStay Curious: AI evolves fast. Follow blogs like CSS-Tricks, TechRadar, or xAI’s updates to stay on top of new tools and best practices.\r\nHow to Succeed with AI Agents in Web Development\r\nTo thrive with AI agents, you need strategy. Here’s how to stand out:\r\n\r\nMaster Prompt Engineering: The better your prompts, the better AI’s output. Instead of “write a function,” try “write a JavaScript function to validate email addresses with regex, handling edge cases like missing @ symbols.” Specificity wins.\r\nBlend AI with Human Insight: Use AI for speed, but apply your judgment. I once had an AI suggest a bloated library for a feature—I swapped it for a lighter alternative, cutting load time by 20%.\r\nFocus on High-Value Skills: Let AI handle the grunt work (like boilerplate code) while you focus on architecture, user experience, and business logic. Clients value devs who solve big-picture problems.\r\nBuild a Portfolio: Showcase AI-assisted projects on GitHub or a personal site. Highlight how AI helped you ship faster or improve quality—like using an AI agent to reduce bugs in a production app.\r\nStay Ethical: Be transparent about using AI in your work. If you’re freelancing, let clients know AI speeds up delivery but doesn’t replace your expertise. Trust builds reputation.\r\nThe Future of AI in Web Development\r\nLooking ahead, AI agents will get even smarter. Imagine agents that predict user behavior—suggesting features like dark mode before users ask—or auto-optimize your app for SEO based on Google’s latest algorithms. We might see AI agents collaborating in real-time, with one writing front-end code while another tunes the backend. In the Web3 space, AI agents could manage decentralized protocols, automating tasks like NFT minting or cross-chain data syncing.\r\n\r\nAccessibility is another frontier. AI agents could democratize web development, letting non-coders build apps via voice commands. Picture a teacher saying, “Create a quiz app for my students,” and an AI delivers a functional site with gamified features—all in minutes.\r\n\r\nWrapping Up: Embrace the AI Revolution\r\nAI agents are a game-changer for web development, blending efficiency with creativity in ways we’re only beginning to grasp. They’re not perfect—reliability, security, and ethical concerns need addressing—but their potential is undeniable. Whether you’re a solo dev or part of a team, learning to work with AI agents can set you apart in a crowded field.\r\n\r\nHave you used AI agents in your web projects? What’s been your experience? Share your thoughts in the comments —I’d love to hear your stories.', '2025-05-01', 'Eshrak', NULL, 0, 'technical', 'ai-agents-in-web-development-revolutionizing-how-we-build-the-web', 1, '2025-05-01 08:07:27', '2025-05-01 08:07:56'),
(24, 'blogs/ycpOXiYf6A0cGQrKktRQDvSrWR6SstXQluu6AYP5.png', 'Best MERN Stack Course in Bangladesh', 'বাংলাদেশে MERN Stack শিখতে চাইলে এখনই সেরা সময়। আপনার যদি ইচ্ছা থাকে ওয়েব ডেভেলপমেন্ট ক্যারিয়ার শুরু করার, তাহলে উপরের যেকোনো কোর্স আপনার জন্য কার্যকর হবে।একটা কথা মনে রাখবেন, কোর্স কিনেই আপনি ডেভেলপার হয়ে যাবেন না। কনসিস্টেন্সি, প্র্যাকটিস আর প্রজেক্ট', 'MERN Stack শব্দটা হয়তো একাধিকবার আপনার কানে এসেছে। আর সেটাই স্বাভাবিক, কারণ আজকের সময়ের সবচেয়ে জনপ্রিয় ও চাহিদাসম্পন্ন Full Stack প্রযুক্তির একটি নাম MERN Stack। ইন্টারনেটের এই যুগে আমরা প্রতিদিন বিভিন্ন ওয়েবসাইট, ওয়েব অ্যাপ, ই-কমার্স, নিউজ পোর্টাল কিংবা সোশ্যাল মিডিয়া ব্যবহার করি। এসব অ্যাপ্লিকেশন তৈরি হয় মূলত দুইটি ভাগে ফ্রন্টএন্ড (যেটা আমরা দেখি ও ব্যবহার করি) এবং ব্যাকএন্ড (যেটা ভিতরে কাজ করে, ইউজারের ইনফরমেশন প্রসেস করে)। আর এই পুরো সিস্টেমটা যদি আপনি একাই তৈরি করতে চান, মানে ফ্রন্টএন্ড থেকে শুরু করে ব্যাকএন্ড এবং ডাটাবেজ পর্যন্ত সবকিছু তাহলে MERN Stack আপনাকে সেই ক্ষমতা দেয়।\r\n\r\nBest Mern Stack Course in Bangladesh - 2025\r\nBest Mern Stack Course in Bangladesh – 2025\r\nবাংলাদেশেও এখন Web Development এ ক্যারিয়ার গড়ার আগ্রহ বেড়েছে অনেক, এবং তার সঙ্গেই MERN Stack Developer দের চাহিদাও। এই লেখায় আমরা বিস্তারিত জানবো MERN Stack আসলে কী, কেন এটা শিখবেন, কাদের জন্য উপযোগী, এবং বাংলাদেশে কোন কোর্সটি আপনার জন্য সেরা হতে পারে।\r\n\r\nMERN Stack কী?\r\nMERN Stack আসলে চারটি আধুনিক ওয়েব ডেভেলপমেন্ট টেকনোলজির সমন্বয়ে তৈরি একটি Full Stack টুলস সেট। এর পুরো অর্থ হচ্ছে:\r\n\r\nM = MongoDB\r\nE = Express.js\r\nR = React.js\r\nN = Node.js\r\nপ্রত্যেকটি অংশের নিজস্ব একটি কাজ রয়েছে, এবং তারা মিলে একটি সম্পূর্ণ ওয়েব অ্যাপ্লিকেশন গড়ে তোলে।\r\n\r\nএকটু বিস্তারিতভাবে বুঝি:\r\n MongoDB:\r\nএটা হচ্ছে একটা NoSQL ডেটাবেজ। আপনি সাধারণত যেসব অ্যাপে ইউজারের নাম, মেইল, অর্ডার হিস্ট্রি ইত্যাদি সংরক্ষিত থাকে, সেগুলোর জন্য MongoDB ব্যবহৃত হয়। এতে ডেটা রাখা হয় JSON-এর মত ফরম্যাটে, যার কারণে JavaScript -ভিত্তিক অ্যাপগুলোর সঙ্গে এটি খুবই সুন্দরভাবে কাজ করে।\r\n\r\nExpress.js:\r\nExpress.js হলো Node.js এর উপর ভিত্তি করে তৈরি একটি minimalist web framework, যেটা দিয়ে আপনি server-side logic লিখতে পারবেন। ধরুন কেউ আপনার ওয়েবসাইটে লগইন করতে চায় সে অনুরোধটা কোনভাবে প্রসেস হবে, কিভাবে ডেটাবেজে যাবে এসব কিছু handled করে Express।\r\n\r\n React.js:\r\nReact হল Facebook দ্বারা তৈরি একটি জনপ্রিয় Frontend লাইব্রেরি, যেটা ইউজার ইন্টারফেস (UI) তৈরির জন্য ব্যবহৃত হয়। আজকের ওয়েব অ্যাপ্লিকেশন গুলো এতটা স্মার্ট ও ইন্টারঅ্যাকটিভ কেন তার পেছনে অন্যতম কারণ হলো React।\r\n\r\n Node.js:\r\nNode.js হচ্ছে JavaScript এর জন্য একটি Runtime Environment, যার মাধ্যমে আপনি ব্রাউজারের বাইরে JavaScript চালাতে পারেন। আর এটার জন্যই এখন JavaScript দিয়ে শুধু Frontend না, Backend ও ডেভেলপ করা যায়।\r\n\r\n সব মিলিয়ে:\r\nMERN Stack এমন একটা প্যাকেজ যেখানে আপনি শুধু একটাই প্রোগ্রামিং ল্যাঙ্গুয়েজ (JavaScript) জানলেই Frontend থেকে Backend – সবকিছু শিখতে ও বানাতে পারবেন। আর এটাই এই স্ট্যাকের সবচেয়ে বড় শক্তি।\r\n\r\nকেন MERN Stack শেখা উচিত?\r\nআপনি যদি ক্যারিয়ারে ওয়েব ডেভেলপমেন্ট নিয়ে সিরিয়াস হন, তাহলে MERN Stack শেখাটা আপনার জন্য হতে পারে একদম Game Changer। এটি এমন একটি Stack যেটা দিয়ে আপনি পুরো একটি ওয়েব অ্যাপ্লিকেশন নিজেই তৈরি করতে পারবেন, শুধু JavaScript ব্যবহার করে।\r\n\r\nআর এখনকার যুগে JavaScript শুধু একটি Programming Language না, বরং Complete Web Solution এর ভিত্তি হয়ে দাঁড়িয়েছে। তাই MERN Stack শেখা মানে আপনি সময়, টাকা ও এফোর্ট সবকিছুর সর্বোচ্চ ব্যবহার করছেন।\r\n\r\nনিচে আমরা একে একে আলোচনা করবো  ঠিক কেন MERN Stack শেখাটা আপনার জন্য Best Investment হতে পারে।\r\n\r\n ১. Full Stack Developer হওয়া যায় একমাত্র JavaScript দিয়েই\r\nআগে একজন Web Developer হতে গেলে আপনাকে আলাদা আলাদা অনেক প্রযুক্তি শিখতে হতো যেমনঃ\r\n\r\nFrontend এর জন্য HTML, CSS, JavaScript\r\nBackend এর জন্য PHP, Python, Java বা Ruby\r\nDatabase এর জন্য MySQL বা PostgreSQL\r\nএইভাবে শেখা অনেক সময়সাপেক্ষ এবং বেশ জটিলও।\r\n\r\nকিন্তু MERN Stack আপনাকে একটা সরল, স্মার্ট ও শক্তিশালী রাস্তা দেখায়। কারণ, এখানে Frontend থেকে Backend পর্যন্ত সবকিছুই আপনি একটাই ভাষা — JavaScript দিয়ে শিখে ফেলতে পারবেন।\r\n\r\n মানে, আপনি যদি JavaScript ভালো করে শিখে ফেলেন, তাহলে আপনি একাই একটা পুরা Dynamic Website বা Application বানিয়ে ফেলতে পারবেন।\r\n\r\nএটা যেমন আপনার শেখার সময় বাঁচাবে, তেমনি কাজ করার সময়ও Productivity অনেক বেড়ে যাবে।\r\n\r\n২. চাকরির বাজারে প্রচুর চাহিদা\r\nএকটা ভালো Web Developer হওয়ার পর সবার প্রধান লক্ষ্য থাকে ভালো জব পাওয়া।\r\nএবং MERN Stack শেখা মানেই আপনি সরাসরি সেই Demand Zone এ ঢুকে যাচ্ছেন।\r\n\r\nবর্তমানে দেশের ছোট-বড় অনেক Software Company MERN Stack Developer খুঁজে। কারণ, তারা চায় এমন Developer, যিনি Frontend + Backend দুইটা কাজেই দক্ষ।\r\n\r\nFreelancing প্ল্যাটফর্ম যেমন:\r\n\r\nUpwork,\r\nFiverr,\r\nFreelancer.com,\r\nPeoplePerHour\r\nএখানেও MERN Stack ভিত্তিক জবের চাহিদা চোখে পড়ার মতো। শুধু তাই না  এখনকার দিনে অনেক Remote কোম্পানি MERN Stack Developer নিয়োগ করে খুব ভালো বেতনে।\r\n\r\nবিশ্বব্যাপী স্টার্টআপ ও বড় কোম্পানিগুলোর কাছেও MERN Stack একটা Industry Standard।\r\n\r\nতাই আপনি যদি নিজেকে একটা Full Package Developer বানাতে চান  MERN Stack শেখাটাই হতে পারে সবচেয়ে ভালো সিদ্ধান্ত।\r\n\r\n ৩. Fast Development এবং High Productivity\r\nMERN Stack দিয়ে কাজ করলে আপনি খুব দ্রুত নতুন একটি Application বা ওয়েবসাইট তৈরি করতে পারবেন।\r\nএর কারণ হলো প্রতিটা টুল (MongoDB, Express, React, Node) একে অন্যের সঙ্গে খুব সুন্দরভাবে মিলে কাজ করে।\r\n\r\nধরুন আপনি একটি Startup খুলেছেন, এবং MVP (Minimum Viable Product) তৈরি করতে চান।\r\nMERN Stack আপনাকে সেই কাজটা ১-২ মাসের মধ্যে করে ফেলার সুযোগ দেয়।\r\n\r\nReact এর Component-Based Structure আর Node/Express এর Scalability Development কে করে তোলে Fast এবং Flexible।\r\n\r\n এর মানে হচ্ছে  আপনি কম সময়ে বেশি প্রজেক্ট ডেলিভার করতে পারবেন। Freelancing হোক কিংবা Client Project  Productivity বাড়বে কয়েক গুণ।\r\n\r\n ৪. রিয়েল-টাইম অ্যাপ তৈরি করা সহজ\r\nআজকের দিনে ইউজাররা চায় Live Experience  চ্যাট করতে পারবে, রিয়েল-টাইম ডেটা দেখতে পারবে, কোনো Delay থাকবে না।\r\n\r\nMERN Stack ব্যবহার করে আপনি সহজেই এমন রিয়েল-টাইম অ্যাপ বানাতে পারেন।\r\nউদাহরণস্বরূপ:\r\n\r\nChat Application\r\nLive Score Tracking System\r\nReal-Time Delivery Status\r\nNotification System\r\nOnline Gaming Platform\r\nএই ধরণের অ্যাপ্লিকেশন গুলোর ক্ষেত্রে MERN Stack খুবই উপযোগী। কারণ, Node.js এবং MongoDB মিলেই Real-Time Data Handling করতে পারে খুব ইফিশিয়েন্টভাবে।\r\n\r\nআপনি যদি Interactive এবং Modern App বানাতে চান  MERN Stack আপনাকে সেই ক্ষমতা দেবে।\r\n\r\n৫. প্রচুর রিসোর্স ও কমিউনিটি সাপোর্ট\r\nনতুন কিছু শেখার সময় একটা বড় চ্যালেঞ্জ হলো  “জটিল জায়গায় সাহায্য পাবো কোথায়?”\r\nএই জায়গায় MERN Stack একেবারেই অনন্য।\r\n\r\nReact, Node.js, MongoDB, Express প্রতিটা টুলের জন্য হাজার হাজার ফ্রি রিসোর্স আছে:\r\n\r\nYouTube টিউটোরিয়াল\r\nGitHub ওপেন সোর্স প্রজেক্ট\r\nStackOverflow এর সমাধান\r\nReddit এর কমিউনিটি\r\nMedium ব্লগ ও ডকুমেন্টেশন\r\nএমনকি আপনি যেকোনো সমস্যায় পড়লে Google এ সার্চ দিলেই অনেক আলোচনা, সমাধান বা ভিডিও টিউটোরিয়াল পেয়ে যাবেন।\r\n\r\nমানে আপনি শেখার পথে একা নন একটা বড় Developer Community সবসময় পাশে থাকবে।\r\n\r\nবাংলাদেশে MERN Stack Developer এর চাহিদা কেমন?\r\nবর্তমান যুগটা হচ্ছে ডিজিটালাইজেশন আর অটোমেশনের।\r\nবাংলাদেশও এই দৌড়ে পিছিয়ে নেই বরং অনেক এগিয়ে যাচ্ছে! প্রতিনিয়ত তৈরি হচ্ছে নতুন নতুন স্টার্টআপ, সফটওয়্যার কোম্পানি, ফিনটেক, ই-কমার্স, এবং বিভিন্ন SaaS (Software as a Service) প্ল্যাটফর্ম।\r\n\r\nএই প্রতিষ্ঠানের প্রতিটিরই প্রয়োজন হয় এমন একজন ডেভেলপার, যিনি পুরো ওয়েব অ্যাপ্লিকেশন একাই তৈরি করতে পারেন Frontend, Backend, এবং Database সবকিছু মিলিয়ে।\r\n\r\nআর ঠিক এখানেই সবচেয়ে বড় চাহিদাটা তৈরি হয়েছে MERN Stack Developer দের জন্য।\r\n\r\nচলুন দেখে নেওয়া যাক কোন কোন ক্ষেত্রে এই চাহিদা বেশি এবং কীভাবে এই চাহিদা দিন দিন বাড়ছে:\r\n\r\n ১. স্টার্টআপ কোম্পানিগুলোর পছন্দের স্ট্যাক হচ্ছে MERN\r\nস্টার্টআপগুলো সাধারণত চায় এমন ডেভেলপার, যিনি একাই একটি Minimum Viable Product (MVP) তৈরি করে দিতে পারবেন। অর্থাৎ, শুধু ফ্রন্টএন্ড না ব্যাকএন্ড, ডেটাবেজ এবং API সবকিছু নিয়েই কাজ করতে পারবে।\r\n\r\nMERN Stack শেখা থাকলে একজন ডেভেলপার একাই পুরো এই ওয়েব অ্যাপ তৈরি করতে পারে।\r\nএই কারণে বাংলাদেশে নতুন-নতুন স্টার্টআপগুলো React.js এবং Node.js ভিত্তিক Developer খুঁজে।\r\n\r\nঅনেক ক্ষেত্রে তারা খরচ কমাতে একাধিক ডেভেলপারের জায়গায় একজন MERN Stack Developer রাখে।\r\n\r\n ২. সফটওয়্যার কোম্পানিগুলোর ক্লায়েন্ট চাহিদা অনুযায়ী MERN Stack ব্যবহৃত হচ্ছে\r\nবাংলাদেশে বর্তমানে অনেক সফটওয়্যার কোম্পানি রয়েছে যারা ইউরোপ, আমেরিকা বা মধ্যপ্রাচ্যের ক্লায়েন্টদের জন্য Web Application ডেভেলপ করে দেয়।\r\n\r\nএই ক্লায়েন্টরাও চায় modern, scalable, and fast-performing web apps যেগুলোর জন্য MERN Stack একটা দারুণ সমাধান।\r\n\r\nফলে কোম্পানিগুলো Full Stack JavaScript Developer নিয়োগ দেয় যারা MERN নিয়ে কাজ করতে পারে।\r\n\r\nঅনেক ক্ষেত্রেই তারা Internship থেকে শুরু করে Junior, Mid-Level এবং Senior MERN Stack Developer পর্যন্ত হায়ার করছে।\r\n\r\n৩. Freelancing মার্কেটপ্লেসে কাজের অফার প্রতিনিয়ত বাড়ছে\r\nFiverr, Upwork, Freelancer.com, PeoplePerHour – এইসব ফ্রিল্যান্সিং সাইটগুলোতে MERN Stack নিয়ে হাজার হাজার কাজ প্রতিদিন পোস্ট হয়।\r\n\r\nকিছু সাধারণ জব টাইটেল:\r\n\r\nMERN Stack Developer Needed for E-commerce Website\r\nFull Stack React Developer Required\r\nNode.js API Developer for Mobile App\r\nBuild Admin Dashboard using MERN\r\nCRUD Application with MongoDB, Express & React\r\nএইসব প্রজেক্টের জন্য ক্লায়েন্টরা সাধারণত এমন Developer খোঁজে, যিনি React দিয়ে Frontend এবং Node/Express দিয়ে Backend তৈরি করতে পারেন।\r\n\r\nঅর্থাৎ আপনি যদি MERN Stack জানেন, তাহলে Freelancing এ আপনার কাজ না থাকার সম্ভাবনা একেবারেই কম!\r\n\r\n৪. Remote Job এর বড় একটা সুযোগ তৈরি হয়েছে\r\nবর্তমানে অনেক আন্তর্জাতিক কোম্পানি Remote ভিত্তিতে MERN Stack Developer নিয়োগ দিচ্ছে।\r\nএইসব কোম্পানি দেশের সীমাবদ্ধতা ছাড়িয়ে গিয়ে ঘরে বসেই ভালো বেতনে চাকরির সুযোগ তৈরি করছে।\r\n\r\nবিশেষ করে LinkedIn, AngelList, Turing, Lemon.io এর মতো Remote Hiring Platform গুলোতে MERN Stack Developer দের প্রচুর Demand রয়েছে।\r\n\r\n যারা একটু অভিজ্ঞ, ভালো প্রজেক্ট বিল্ড করতে পারেন তাদের জন্য এই Remote সুযোগগুলো একটা বড় গেটওয়ে হয়ে উঠছে।\r\n\r\n৫. ই-কমার্স এবং সার্ভিস প্ল্যাটফর্ম গুলো MERN Stack এ তৈরি হচ্ছে\r\nবাংলাদেশে প্রতিনিয়ত ই-কমার্স, অনলাইন শপ, এবং সার্ভিস প্ল্যাটফর্ম তৈরি হচ্ছে:\r\n\r\nফুড ডেলিভারি অ্যাপ\r\nঅনলাইন গ্রোসারি\r\nকাস্টমার সার্ভিস পোর্টাল\r\nহোম সার্ভিস বুকিং সিস্টেম\r\nই-লার্নিং প্ল্যাটফর্ম\r\nএইসব অ্যাপ্লিকেশন বানাতে হয় ডায়নামিক, স্কেলযোগ্য এবং ফাস্ট পারফর্মিং প্রযুক্তি দিয়ে। MERN Stack এই জায়গাগুলোতে অসাধারণ পারফর্ম করে।\r\n\r\nতাই এই কোম্পানিগুলোর চাহিদা বাড়ছে এমন ডেভেলপারের প্রতি যিনি MERN দিয়ে একটি পূর্ণাঙ্গ অ্যাপ তৈরি করতে পারেন।\r\n\r\nচাহিদা কিন্তু দিন দিন বাড়ছেই…\r\n ২০২3-24 সালের বিভিন্ন চাকরির সার্কুলার, Job Portal (BdJobs, Jobs.bd, JobStreet), Freelance মার্কেটপ্লেস ও স্টার্টআপ হায়ারিং ট্রেন্ড বিশ্লেষণ করলে বোঝা যায় —\r\nMERN Stack Developer এর চাহিদা শুধুই বাড়ছে, কমছে না।\r\n\r\nবিশেষ করে নিচের বিষয়গুলোকে কেন্দ্র করে এই চাহিদা আরও বাড়বে:\r\n\r\nLocal Business গুলোর Digitalization\r\nFreelance ও Remote Culture এর বিস্তার\r\nSaaS ভিত্তিক স্টার্টআপ বাড়া\r\nAI ও Automation সিস্টেমের জন্য Fast Web Platform প্রয়োজন\r\nMERN Stack Developer দের গড় বেতন ও ইনকাম কত?\r\nবর্তমান সময়ের সবচেয়ে জনপ্রিয় Full Stack প্রযুক্তিগুলোর মধ্যে অন্যতম হলো MERN Stack।\r\nএই Stack জানলে আপনি Frontend, Backend এবং Database তিনটি লেভেলের কাজ একাই করতে পারবেন।\r\nআর এই কারণে MERN Stack Developer দের চাহিদা দিন দিন আকাশচুম্বী হয়ে উঠছে, এবং স্বাভাবিকভাবেই তাদের ইনকামও বেড়ে চলেছে।\r\n\r\nবাংলাদেশে এখন এমন কোনো সফটওয়্যার কোম্পানি খুঁজে পাওয়া মুশকিল, যারা MERN Stack ভিত্তিক কাজ করে না।\r\nঅনেক স্টার্টআপ এবং ক্লায়েন্ট-ভিত্তিক কোম্পানি MERN Stack কে তাদের প্রোডাক্ট ডেভেলপমেন্টের প্রধান টুল হিসেবে ব্যবহার করছে।\r\nএখন প্রশ্ন হলো এই Stack শেখার পর একজন ডেভেলপার ঠিক কতটা ইনকাম করতে পারে?\r\n\r\nএই প্রশ্নের উত্তরটা নির্ভর করে আপনি কোথায় কাজ করছেন:\r\n\r\nলোকাল কোম্পানিতে চাকরি করছেন?\r\nনাকি Freelancing করছেন?\r\nনা কি ঘরে বসেই Remote International Client এর কাজ করছেন?\r\nএছাড়া আপনার অভিজ্ঞতা ও স্কিল লেভেল অনুযায়ীও বেতন ভিন্ন হয়ে থাকে।\r\n\r\nসংক্ষেপে MERN Stack Developer দের গড় ইনকাম \r\n\r\nঅভিজ্ঞতা	লোকাল জব (BDT)	Remote জব (USD)	Freelancing (USD/মাস)	নিজের SaaS/প্রোডাক্ট (আয়)\r\nBeginner (০–১ বছর)	১৫,০০০ – ৩০,০০০	$500 – $1000	$200 – $500	$50 – $200\r\nMid-Level (১–৩ বছর)	৩০,০০০ – ৬০,০০০	$1200 – $2000	$500 – $1500	$200 – $800\r\nSenior (৩+ বছর)	৬০,০০০ – ১,২০,০০০+	$2500 – $5000+	$2000+	$1000+\r\nMERN Stack ডেভেলপমেন্ট শিখবেন কীভাবে?\r\nআপনি যখন ঠিক করেছেন MERN Stack ডেভেলপমেন্ট শিখবেন, তখন পরবর্তী প্রশ্ন হলো কোথা থেকে শিখবেন এবং কিভাবে শিখবেন?\r\nএই দুটি প্রশ্ন অনেকেই করেন। কিন্তু চিন্তা করার কিছু নেই, কারণ আজকের ইন্টারনেটে অসংখ্য ফ্রি এবং পেইড রিসোর্স রয়েছে যেগুলোর মাধ্যমে আপনি MERN Stack শেখার সমস্ত উপকরণ পেয়ে যাবেন।\r\n\r\nফ্রিতে MERN Stack শেখা যাবে?\r\nঅবশ্যই! আপনি চাইলে একদম ফ্রিতে MERN Stack শিখতে পারেন।\r\nইন্টারনেটে অনেক রিসোর্স রয়েছে যেগুলো থেকে আপনি MERN Stack-এর বিভিন্ন অংশ শিখতে পারবেন, যেমনঃ\r\n\r\nYouTube – এখানে বিভিন্ন ফ্রি টিউটোরিয়াল এবং প্রজেক্ট দেখিয়ে শেখানো হয়।\r\nfreeCodeCamp – MongoDB, Express, React, Node সম্পর্কিত বেশ কয়েকটি বিস্তারিত কোর্স রয়েছে।\r\nMDN Web Docs – JavaScript ও Web API এর বেসিক থেকে অ্যাডভান্সড বিষয়গুলো খুব ভালোভাবে ব্যাখ্যা করা হয়েছে।\r\nতবে, ফ্রি রিসোর্স থেকে শিখলে কিছু সীমাবদ্ধতা থাকে:\r\n\r\nআপনি সঠিক মেন্টরশিপ পাবেন না, যার মাধ্যমে ভুল গুলি সঠিক করা যাবে। কোর্সের স্ট্রাকচার বা গাইডলাইন হতে পারে অগোছালো। সাপোর্ট সিস্টেমের অভাব থাকে, ফলে যখন কোন সমস্যা হবে, তখন সাহায্য পাওয়া কঠিন।\r\n\r\nপেইড কোর্স কেন নেয়া ভালো?\r\nযদি আপনি প্রপার গাইডলাইন, লাইভ সাপোর্ট, মেন্টরশিপ, এবং ক্যারিয়ার ফোকাসড লার্নিং চান, তাহলে পেইড কোর্স নিঃসন্দেহে একটি ভালো অপশন।\r\nপেইড কোর্সে আপনি:\r\n\r\nসঠিক রোডম্যাপ ও স্ট্রাকচার্ড কনটেন্ট পাবেন।\r\nএক্সপেরিয়েন্সড মেন্টরশিপ এবং ইন্সট্রাক্টর থেকে সাপোর্ট পাবেন।\r\nপ্রজেক্টভিত্তিক শেখার মাধ্যমে রিয়েল-টাইম প্র্যাকটিস করতে পারবেন।\r\nকোর্স শেষ করার পর সার্টিফিকেটও পাবেন যা ক্যারিয়ারে সহায়ক হতে পারে।\r\nএছাড়া, পেইড কোর্সের মাধ্যমে আপনি দ্রুত এবং আরও প্রফেশনালভাবে শিখতে পারবেন। বাংলাদেশের অনেক ভালো মানের পেইড কোর্স রয়েছে, যেগুলো আপনাকে এই পথ পার করতে সাহায্য করবে।\r\n\r\nbest mern stack course in bangladesh - 2025\r\nBest Mern Stack Course in Bangladesh – 2025\r\nCreative IT Institute – MERN Stack Development Course\r\nআপনি যদি MERN Stack শিখতে চান এবং একজন দক্ষ Full Stack Developer হতে চান, তাহলে Creative IT Institute-এর MERN Stack Development কোর্সটি আপনার জন্য আদর্শ। এই কোর্সটি আধুনিক ওয়েব ডেভেলপমেন্টের মূল উপাদানগুলি শিখতে সহায়তা করবে, যেখানে React.js, Node.js, Express.js, MongoDB সহ অন্যান্য গুরুত্বপূর্ণ টেকনোলজি অন্তর্ভুক্ত থাকবে।\r\n\r\nকোর্সের ওভারভিউ:\r\nCreative IT Institute-এর এই কোর্সটি মোট ১২ মাস ব্যাপী, এবং এতে আপনাকে ফ্রন্ট-এন্ড এবং ব্যাক-এন্ড ডেভেলপমেন্টের মধ্যে ভারসাম্য বজায় রেখে শিখানো হয়। কোর্সটি বিভিন্ন প্রজেক্ট এবং প্র্যাকটিক্যাল অ্যাপ্লিকেশন ব্যবহার করে আপনাকে দক্ষ করে তুলবে।\r\n\r\nকোর্সে আপনি কী শিখবেন?\r\nএই কোর্সে আপনি প্রথমে ফ্রন্ট-এন্ড ডেভেলপমেন্টের মৌলিক বিষয়গুলো শিখবেন, যেমন HTML, CSS, JavaScript, এবং Figma দিয়ে ডিজাইন কনভার্শন। এরপর, আপনি React.js এর সাহায্যে UI ডিজাইন এবং Redux এর মাধ্যমে স্টেট ম্যানেজমেন্ট শিখবেন। এছাড়াও, আপনি Next.js এর মতো আধুনিক টুলস ব্যবহার করে সার্ভার সাইড রেন্ডারিং এবং SEO ফ্রেন্ডলি ওয়েবসাইট তৈরি করতে শিখবেন।\r\n\r\nব্যাক-এন্ড ডেভেলপমেন্টের জন্য, কোর্সটি আপনাকে Node.js ও Express.js ব্যবহার করে সার্ভার সাইড ডেভেলপমেন্ট এবং MongoDB এর মাধ্যমে ডেটাবেস ম্যানেজমেন্ট শিখাবে। এছাড়া, REST API তৈরি এবং JWT Authentication এর মাধ্যমে সিকিউরিটি ব্যবস্থাও শিখানো হবে।\r\n\r\nপ্রজেক্ট ও রিয়েল-ওয়ার্ল্ড অ্যাপ ডেভেলপমেন্ট:\r\nকোর্সের সবচেয়ে গুরুত্বপূর্ণ অংশ হল প্রজেক্ট ডেভেলপমেন্ট। আপনি কোর্স শেষে বাস্তব জীবনের প্রজেক্ট তৈরি করতে পারবেন যা আপনার ক্যারিয়ার শুরু করার জন্য শক্তিশালী প্রমাণ হবে। এছাড়া, আপনি React Native এর মাধ্যমে মোবাইল অ্যাপ ডেভেলপমেন্ট শিখবেন, যা আপনাকে মোবাইল ডেভেলপমেন্টে একটি বিশেষ দক্ষতা প্রদান করবে।\r\n\r\nকোর্সের সুবিধাসমূহ:\r\nলাইফটাইম সাপোর্ট: কোর্সের পরে সাপোর্ট পাওয়া যাবে এবং কোর্স সম্পর্কিত যে কোনো সমস্যা সমাধানের জন্য সাহায্য করা হবে।\r\nভার্চুয়াল ইন্টার্নশিপ: কোর্স শেষে ইন্টার্নশিপের সুযোগ পেতে পারেন।\r\nসার্টিফিকেট: কোর্স সম্পন্ন করার পর, একটি অফিসিয়াল সার্টিফিকেট প্রদান করা হবে যা আপনি জব বা ফ্রিল্যান্সিং কাজে ব্যবহার করতে পারবেন।\r\nক্যারিয়ার প্লেসমেন্ট সাপোর্ট: কোর্স শেষে চাকরি বা ফ্রিল্যান্সিং সংক্রান্ত সহায়তা পাবেন।\r\nআপনি যদি একজন দক্ষ MERN Stack Developer হতে চান এবং বাস্তব জীবনের প্রজেক্টের মাধ্যমে আপনার স্কিল ডেভেলপ করতে চান, তাহলে এই কোর্সটি আপনার জন্য উপযুক্ত।\r\n\r\nবিস্তারিত জানুন এবং রেজিস্টার করতে এখানে ক্লিক করুন\r\n\r\nOstad – Full Stack Web Development with JavaScript (MERN)\r\nআপনি যদি একজন দক্ষ MERN Stack Developer হতে চান, তাহলে Ostad-এর এই কোর্সটি আপনার জন্য উপযুক্ত। এই কোর্সটি আপনাকে ফ্রন্ট-এন্ড ও ব্যাক-এন্ড ডেভেলপমেন্টের পূর্ণাঙ্গ জ্ঞান প্রদান করবে, যা আপনাকে একজন পূর্ণাঙ্গ Full Stack Developer হিসেবে গড়ে তুলবে।\r\n\r\nকোর্সের ওভারভিউ:\r\nএই কোর্সে আপনি HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, এবং React.js সহ অন্যান্য আধুনিক টেকনোলজি শিখবেন। কোর্সটি মোট ৪৩টি মডিউলে বিভক্ত, যার মধ্যে ৫৮টি লাইভ ক্লাস, ১০টি প্রজেক্ট, এবং ৫৬৪টি প্রি-রেকর্ডেড ভিডিও রয়েছে। কোর্সটি লাইফটাইম এক্সেস সহ প্রদান করা হয়, যাতে আপনি যেকোনো সময় পুনরায় ক্লাসগুলো দেখতে পারেন।\r\n\r\nকোর্সের বিষয়বস্তু:\r\nএই কোর্সে আপনি প্রথমে HTML, CSS, এবং JavaScript-এর মৌলিক বিষয়গুলো শিখবেন। এরপর, আপনি Git & GitHub ব্যবহার করে ভার্সন কন্ট্রোল শিখবেন। পরবর্তীতে, React.js দিয়ে ফ্রন্ট-এন্ড ডেভেলপমেন্ট শিখবেন এবং Node.js ও Express.js দিয়ে ব্যাক-এন্ড ডেভেলপমেন্ট করবেন। শেষে, MongoDB দিয়ে ডেটাবেস ম্যানেজমেন্ট এবং JWT দিয়ে অথেন্টিকেশন শিখবেন।\r\n\r\nঅতিরিক্ত সুবিধাসমূহ:\r\nলাইভ সাপোর্ট ক্লাস: প্রতিদিন সকাল ১১টা ও রাত ৮টায় লাইভ সাপোর্ট ক্লাস।\r\nকমিউনিটি সাপোর্ট: প্রোগ্রেসিভ কমিউনিটির সাথে সবসময় যুক্ত থাকুন।\r\nজব প্লেসমেন্ট সাপোর্ট: সিভি ও কভার লেটার বিল্ডিং, পোর্টফোলিও বিল্ডিং, এবং ১-টু-১ কাস্টমাইজড ক্যারিয়ার কনসালটেশন।\r\nমাস্টারক্লাস: DSA & Problem Solving, AI Integration, এবং MERN Interview হ্যান্ডবুক নিয়ে ফ্রি মাস্টারক্লাস।\r\nবিস্তারিত জানতে ও রেজিস্টার করতে এখানে ক্লিক করুন\r\n\r\nInteractive Cares – MERN Stack Web Development Career Path\r\nআপনি যদি একজন দক্ষ MERN Stack Developer হতে চান, তাহলে Interactive Cares-এর এই কোর্সটি আপনার জন্য উপযুক্ত। এই কোর্সটি আপনাকে ফ্রন্ট-এন্ড ও ব্যাক-এন্ড ডেভেলপমেন্টের পূর্ণাঙ্গ জ্ঞান প্রদান করবে, যা আপনাকে একজন পূর্ণাঙ্গ Full Stack Developer হিসেবে গড়ে তুলবে।\r\n\r\nকোর্সের ওভারভিউ:\r\nএই কোর্সে আপনি HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, এবং React.js সহ অন্যান্য আধুনিক টেকনোলজি শিখবেন। কোর্সটি মোট ৬ মাস ব্যাপী, এবং এতে আপনাকে ফ্রন্ট-এন্ড ও ব্যাক-এন্ড ডেভেলপমেন্টের মধ্যে ভারসাম্য বজায় রেখে শিখানো হয়। কোর্সটি বিভিন্ন প্রজেক্ট এবং প্র্যাকটিক্যাল অ্যাপ্লিকেশন ব্যবহার করে আপনাকে দক্ষ করে তুলবে।\r\n\r\nকোর্সের বিষয়বস্তু:\r\nএই কোর্সে আপনি প্রথমে ফ্রন্ট-এন্ড ডেভেলপমেন্টের মৌলিক বিষয়গুলো শিখবেন, যেমন HTML, CSS, JavaScript, এবং Figma দিয়ে ডিজাইন কনভার্শন। এরপর, আপনি React.js এর সাহায্যে UI ডিজাইন এবং Redux এর মাধ্যমে স্টেট ম্যানেজমেন্ট শিখবেন। এছাড়াও, আপনি Next.js এর মতো আধুনিক টুলস ব্যবহার করে সার্ভার সাইড রেন্ডারিং এবং SEO ফ্রেন্ডলি ওয়েবসাইট তৈরি করতে শিখবেন।\r\n\r\nব্যাক-এন্ড ডেভেলপমেন্টের জন্য, কোর্সটি আপনাকে Node.js ও Express.js ব্যবহার করে সার্ভার সাইড ডেভেলপমেন্ট এবং MongoDB এর মাধ্যমে ডেটাবেস ম্যানেজমেন্ট শিখাবে। এছাড়া, REST API তৈরি এবং JWT Authentication এর মাধ্যমে সিকিউরিটি ব্যবস্থাও শিখানো হবে।\r\n\r\nঅতিরিক্ত সুবিধাসমূহ:\r\nলাইভ সাপোর্ট ক্লাস: প্রতিদিন সকাল ১১টা ও রাত ৮টায় লাইভ সাপোর্ট ক্লাস।\r\nকমিউনিটি সাপোর্ট: প্রোগ্রেসিভ কমিউনিটির সাথে সবসময় যুক্ত থাকুন।\r\nজব প্লেসমেন্ট সাপোর্ট: সিভি ও কভার লেটার বিল্ডিং, পোর্টফোলিও বিল্ডিং, এবং ১-টু-১ কাস্টমাইজড ক্যারিয়ার কনসালটেশন।\r\nমাস্টারক্লাস: DSA & Problem Solving, AI Integration, এবং MERN Interview হ্যান্ডবুক নিয়ে ফ্রি মাস্টারক্লাস।\r\nবিস্তারিত জানতে ও রেজিস্টার করতে এখানে ক্লিক করুন\r\n\r\nProgramming Hero – Complete Web Development with MERN Stack\r\nআপনি যদি শূন্য থেকে শুরু করে একজন দক্ষ MERN Stack ডেভেলপার হয়ে উঠতে চান, তাহলে Programming Hero-এর এই কোর্সটি আপনার জন্য পারফেক্ট চয়েস। কোর্সটি বিশেষভাবে ডিজাইন করা হয়েছে তাদের জন্য, যারা বিগিনার হলেও প্র‍্যাকটিক্যাল প্রজেক্ট ভিত্তিকভাবে শিখতে চান এবং ভবিষ্যতে চাকরি বা ফ্রিল্যান্সিং-এ ক্যারিয়ার গড়তে আগ্রহী।\r\n\r\nএই কোর্সটি শুধু টেকনিক্যাল স্কিল শেখায় না, বরং শেখায় কীভাবে একজন আত্মবিশ্বাসী, জব রেডি ও প্রফেশনাল ডেভেলপার হওয়া যায়। পুরো কোর্সে প্রতিটি ধাপেই থাকছে সাপোর্ট, মেন্টরশিপ, আর বাস্তব জীবনের প্রজেক্ট নিয়ে কাজ করার সুযোগ।\r\n\r\nকোর্সে আপনি যা যা শিখবেন:\r\nএই কোর্সটা একটা ফুলস্ট্যাক কোর্স তবে ফ্রন্টএন্ডের দিকে একটু বেশি ফোকাসড। এই পুরো কোর্স জুড়ে যা যা কিছু করানো হবে তার একটা ব্রিফ নিচে দিয়ে দিচ্ছি –\r\n\r\n HTML, CSS, Tailwind CSS\r\n Git and GitHub \r\n Dev Tool\r\n Javascript, DOM manipulation, Library \r\n API, ES6\r\n React.js, React router\r\n Firebase Authentication\r\n Server Side Technology, Node.js, Express js\r\n MongoDB \r\n Full Stack Project, Payment System Integration\r\n Prompt AI engineering\r\n Next.js\r\n Interview Module\r\nতাছাড়া বোনাস হিসেবে ACC(Advance Crash Course) তে Advanced JavaScript, Advanced React.js থাকবে।\r\n\r\n কোর্সের ফিচারসমূহ:\r\n\r\n ২৫ টিরও বেশি প্রজেক্ট: রিয়েল-ওয়ার্ল্ড কনসেপ্টে প্র্যাকটিস করার সুযোগ। প্রতিটি টপিকের উপর আলাদা প্রজেক্ট, যাতে আপনি শেখার পাশাপাশি বাস্তবে কিভাবে কাজে লাগে তা বুঝতে পারেন।\r\n ১১টি অ্যাসাইনমেন্ট ও কুইজ: প্রতিটি সেকশনের পর থাকছে অ্যাসাইনমেন্ট ও কুইজ যা আপনার শিখে রাখা কনসেপ্টগুলোর রিভিউ নিতে সাহায্য করবে।\r\n Structured Modules: প্রতিটি টপিক শেখানো হয় ধাপে ধাপে, একদম নতুনদের মাথায় রেখেই গাইড করা হয় যেন আপনি ধাক্কা না খান।\r\n বাংলা ভাষায় ভিডিও লেকচার: পুরো কোর্সটি বাংলায়, ফলে আপনি সহজে ও আত্মবিশ্বাসের সাথে শিখতে পারবেন।\r\nসাপোর্ট সেশন: প্রতিদিন তিনবেলা গুগল মিটে জয়েন করে স্ক্রিনশেয়ার করে হেল্প নিতে পারবেন এবং যেকোনো ধরনের হেল্প নিতে পারবেন সরাসরি সিনিয়রদের থেকে ।\r\n যে বিষয়গুলো Programming Hero কে আলাদা করে তোলে:\r\n Dedicated Support Team: যেকোনো প্রশ্ন বা সমস্যায় দ্রুত রিপ্লাই পাওয়া যায়।\r\n Job Placement Team: কোর্স শেষে জব রেডিনেস, সিভি রিভিউ এবং জব রিকমেন্ডেশন সাপোর্ট।\r\n Growth & Motivation Team: শেখার মাঝখানে ডিমোটিভেটেড হলে তারা আপনাকে গাইড করে, উৎসাহ দেয় আবার চালিয়ে যেতে।\r\n Career-Focused Mentorship: সময় অনুযায়ী মেন্টরদের পরামর্শ ও ক্যারিয়ার প্ল্যানিং সেশন পাওয়া যায়।\r\n Official Certificate: কোর্স সফলভাবে শেষ করলে আপনি পাবেন একটি অফিসিয়াল সার্টিফিকেট, যা ভবিষ্যতের চাকরি বা ফ্রিল্যান্সিং ক্লায়েন্টদের সামনে আপনার স্কিলের প্রমাণ হিসেবে কাজ করবে।', '2025-05-01', 'Eshrak', NULL, 0, 'technical', 'best-mern-stack-course-in-bangladesh', 1, '2025-05-01 08:12:28', '2025-05-01 08:12:56'),
(25, NULL, 'awd', 'awd', 'ad', '2025-05-08', 'awd', NULL, 0, 'technical', 'awd', 1, '2025-05-08 08:05:11', '2025-05-08 08:05:11'),
(26, NULL, 'adawdawdsad', 'adadadwad', 'adadadawdad', '2025-05-08', 'adawdad', NULL, 0, 'technical', 'awdadwadadadad', 1, '2025-05-08 08:05:22', '2025-05-08 08:05:22'),
(27, NULL, 'adawdasdasdawsda', 'asdasdawd', 'awdawdadadw', '2025-05-08', 'dawdasdasd', NULL, 0, 'technical', 'adwawdawdad', 1, '2025-05-08 08:05:31', '2025-05-08 08:05:31'),
(28, NULL, 'awdasdadwadad', 'adadwad', 'adadwadad', '2025-05-08', 'adadadwawd', NULL, 0, 'technical', 'adadwadadwad', 1, '2025-05-08 08:05:38', '2025-05-08 08:05:38'),
(29, NULL, 'awdadadadada', 'adadad', 'awdadad', '2025-05-08', 'dadadadad', NULL, 0, 'technical', 'adadadd', 1, '2025-05-08 08:05:44', '2025-05-08 08:05:44'),
(30, NULL, 'adadadad', 'adwawddwaad', 'dddaawdawd', '2025-05-08', 'adadawdwdadw', NULL, 0, 'technical', 'awdawdawd', 1, '2025-05-08 08:05:51', '2025-05-08 08:05:51'),
(31, NULL, 'awdawdawd', 'awdawdawdawda', 'adwawddawadwadwadw', '2025-05-08', 'awdawdawd', NULL, 0, 'technical', 'adwadwadwawddawawd', 1, '2025-05-08 08:05:59', '2025-05-08 08:05:59'),
(32, NULL, 'dfhrstgdfsgdfgdfdfgdg', 'dfgdfg', 'dgfgdfdfg', '2025-05-08', 'sdsra', NULL, 0, 'technical', 'dgfdfgdfg', 1, '2025-05-08 08:06:07', '2025-05-08 08:06:07'),
(33, NULL, 'awdawdawdawd', 'wdawdawdawd', 'awdawdawda', '2025-05-10', 'awdawda', NULL, 0, 'technical', 'awdddddddddddd', 1, '2025-05-10 00:08:52', '2025-05-10 00:08:52'),
(34, NULL, 'fffffawd', 'fffffawd', 'ffffawd', '2025-05-10', 'Eshrak', NULL, 0, 'technical', 'ffffawd', 1, '2025-05-10 00:10:08', '2025-05-10 00:12:48'),
(35, NULL, 'xxxxx', 'xxxxx', 'xxxxx', '2025-05-10', 'Eshrak', NULL, 0, 'technical', 'xxxxxxxx', 1, '2025-05-10 00:17:45', '2025-05-10 00:17:45'),
(36, NULL, 'fff', 'fff', 'f', '2025-05-10', 'Eshrak', NULL, 0, 'technical', 'f', 1, '2025-05-10 00:19:03', '2025-05-10 00:19:03'),
(37, NULL, 'nn', 'n', 'n', '2025-05-10', 'Eshrak', NULL, 0, 'technical', 'nn', 1, '2025-05-10 00:20:39', '2025-05-10 00:20:39'),
(38, NULL, 'hh', 'h', 'h', '2025-05-10', 'Eshrak', NULL, 0, 'technical', 'h', 1, '2025-05-10 00:21:40', '2025-05-10 00:21:40'),
(39, NULL, 'bb', 'b', 'b', '2025-05-10', 'Eshrak', NULL, 0, 'technical', 'b', 1, '2025-05-10 00:25:14', '2025-05-10 00:25:14'),
(40, NULL, 'fh', 'fh', 'fh', '2025-05-10', 'Eshrak', NULL, 0, 'technical', 'fh', 1, '2025-05-10 00:25:57', '2025-05-10 00:25:57'),
(41, NULL, 'nm', 'nm', 'nm', '2025-05-10', 'Eshrak', 'http://192.168.10.120:8000/storage//storage/profile_photos/0Bl0utKl5nBoOJvSjWrlk2wGpUbW3ixvUYfmvhMe.jpg', 0, 'technical', 'nm', 1, '2025-05-10 00:26:51', '2025-05-10 00:26:51'),
(42, NULL, 'tt', 't', 't', '2025-05-10', 'Eshrak', 'http://192.168.10.120:8000/storage//storage/profile_photos/0Bl0utKl5nBoOJvSjWrlk2wGpUbW3ixvUYfmvhMe.jpg', 0, 'technical', 't', 1, '2025-05-10 00:31:20', '2025-05-10 00:31:20'),
(43, NULL, 'k', 'k', 'k', '2025-05-10', 'Eshrak', 'http://192.168.10.120:8000/storage//storage/profile_photos/0Bl0utKl5nBoOJvSjWrlk2wGpUbW3ixvUYfmvhMe.jpg', 0, 'technical', 'k', 1, '2025-05-10 00:33:57', '2025-05-10 00:33:57'),
(44, NULL, 'y', 'y', 'y', '2025-05-10', 'Eshrak', 'http://192.168.10.120:8000/storage//storage/profile_photos/0Bl0utKl5nBoOJvSjWrlk2wGpUbW3ixvUYfmvhMe.jpg', 0, 'technical', 'y', 1, '2025-05-10 00:36:50', '2025-05-10 00:36:50'),
(45, NULL, 'v', 'v', 'v', '2025-05-10', 'Eshrak', 'http://192.168.10.120:8000/storage/profile_photos/0Bl0utKl5nBoOJvSjWrlk2wGpUbW3ixvUYfmvhMe.jpg', 0, 'technical', 'v', 1, '2025-05-10 00:36:59', '2025-05-10 00:36:59');

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `contact_infos`
--

CREATE TABLE `contact_infos` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email3` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone3` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mapRoad` text COLLATE utf8mb4_unicode_ci,
  `mapDefault` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contact_infos`
--

INSERT INTO `contact_infos` (`id`, `title`, `email`, `email2`, `email3`, `address`, `phone`, `phone2`, `phone3`, `mapRoad`, `mapDefault`, `created_at`, `updated_at`) VALUES
(1, 'Main Info', 'info@innovationlabs360.com', 'support@innovationlabs360.com', NULL, 'Head Office Address: House # 5 \r\n                        Road # 01 Chaduddan, Mohammadpur,      \r\n                        Dhaka-1205', '+880 1521-498303', '+880 01309176398', NULL, 'https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d1103.3632018154497!2d90.35134892888405!3d23.75603838839133!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3755bf66b3c0a14f%3A0x777f459aa721862f!2sChadd%20Uddan%20Dhaka!3m2!1d23.7561906!2d90.3518903!5e0!3m2!1sen!2sbd!4v1746626675376!5m2!1sen!2sbd', 'https://www.google.com/maps/embed?pb=!4v1746626775144!6m8!1m7!1s6W7BqznYrnXkhpQCTiqXDQ!2m2!1d23.75607256148205!2d90.35256262395859!3f168.8878233473955!4f27.950931428239926!5f0.4000000000000002', NULL, '2025-05-07 08:06:50');

-- --------------------------------------------------------

--
-- Table structure for table `experience_statuses`
--

CREATE TABLE `experience_statuses` (
  `id` bigint UNSIGNED NOT NULL,
  `label` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `experience_statuses`
--

INSERT INTO `experience_statuses` (`id`, `label`, `value`, `created_at`, `updated_at`) VALUES
(1, 'Months', 6, NULL, '2025-05-07 09:16:27'),
(2, 'Countries', 55, NULL, '2025-05-01 23:16:37'),
(3, 'Professionals', 45, NULL, '2025-05-01 23:16:40'),
(4, 'Projects', 75, NULL, '2025-05-01 23:16:42');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `forms`
--

CREATE TABLE `forms` (
  `id` bigint UNSIGNED NOT NULL,
  `is_read` tinyint(1) NOT NULL DEFAULT '0',
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `forms`
--

INSERT INTO `forms` (`id`, `is_read`, `name`, `company`, `phone`, `email`, `description`, `created_at`, `updated_at`) VALUES
(1, 0, 'Eshrak G', 'Innovation Lab', '01309176398', 'eshrakg62@gmail.com', 'I like your company', '2025-04-21 04:33:20', '2025-04-21 04:33:20');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint UNSIGNED NOT NULL,
  `reserved_at` int UNSIGNED DEFAULT NULL,
  `available_at` int UNSIGNED NOT NULL,
  `created_at` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `management`
--

CREATE TABLE `management` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `number` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `management`
--

INSERT INTO `management` (`id`, `title`, `number`, `created_at`, `updated_at`) VALUES
(1, 'Project Management', 2, NULL, '2025-04-21 04:28:26'),
(2, 'Development', 7, NULL, NULL),
(3, 'Implementation', 2, NULL, NULL),
(4, 'Service & Support', 3, NULL, NULL),
(5, 'Sales & Marketing', 4, NULL, NULL),
(6, 'Administration', 2, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2025_04_16_233953_experience_status', 1),
(5, '2025_04_17_005759_create_profiles_table', 1),
(6, '2025_04_17_102253_add_profile_photo_path_to_profiles_table', 1),
(7, '2025_04_18_002835_create_forms_table', 1),
(8, '2025_04_18_011307_add_is_read_to_forms_table', 1),
(9, '2025_04_19_111749_create_management_table', 2),
(10, '2025_04_19_140054_create_missions_table', 2),
(11, '2025_04_19_154417_create_contact_infos_table', 2),
(12, '2025_04_19_160126_add_map_fields_to_contact_infos_table', 2),
(13, '2025_04_21_095926_add_extra_emails_and_phones_to_contact_infos_table', 3),
(14, '2025_04_23_130737_create_personal_access_tokens_table', 4),
(20, '2025_04_23_152037_create_blogs_table', 5),
(21, '2025_04_30_151051_create_services_table', 6),
(22, '2025_05_10_061539_add_profile_photo_to_blogs_table', 7);

-- --------------------------------------------------------

--
-- Table structure for table `missions`
--

CREATE TABLE `missions` (
  `id` bigint UNSIGNED NOT NULL,
  `text` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `missions`
--

INSERT INTO `missions` (`id`, `text`, `created_at`, `updated_at`) VALUES
(1, 'To provide the most advanced and affordable IT Solutions.', NULL, '2025-05-01 10:19:28'),
(2, 'Establish the Foundation That Empowers Clients to Succeed.', NULL, NULL),
(3, 'Enhance collaboration with innovative technology solutions.', NULL, NULL),
(4, 'Build lasting partnerships based on trust and transparency.', NULL, NULL),
(5, 'Deliver tailored solutions to meet the unique needs of each client.', NULL, '2025-04-21 04:22:08'),
(6, 'Create a culture of continuous improvement and innovation.', NULL, '2025-04-21 04:22:29');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `profiles`
--

CREATE TABLE `profiles` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subtitle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `profilePhotoPath` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `experience_years` int DEFAULT NULL,
  `specialization` text COLLATE utf8mb4_unicode_ci,
  `skills` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `certifications` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `age` int DEFAULT NULL,
  `education` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `language_preference` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linkedin` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `github` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `portfolio_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `current_stack` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tools` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `programming_languages` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `employment_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `projects` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `hourly_rate` int DEFAULT NULL,
  `bio` text COLLATE utf8mb4_unicode_ci,
  `security_clearance` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ;

--
-- Dumping data for table `profiles`
--

INSERT INTO `profiles` (`id`, `user_id`, `title`, `subtitle`, `profilePhotoPath`, `experience_years`, `specialization`, `skills`, `certifications`, `age`, `education`, `location`, `language_preference`, `linkedin`, `github`, `portfolio_url`, `current_stack`, `tools`, `programming_languages`, `employment_type`, `projects`, `hourly_rate`, `bio`, `security_clearance`, `created_at`, `updated_at`) VALUES
(1, 1, 'Eshrak', 'A Good Problem Solver', '/storage/profile_photos/0Bl0utKl5nBoOJvSjWrlk2wGpUbW3ixvUYfmvhMe.jpg', 1, 'Laravel & ReactJS', '[\"React JS\",\"Laravel\",\"C\",\"C++\",\"Git\",\"Tailwind\"]', '[\"Ostad\",\"Programming Hero\"]', 21, 'Daffodil Polytechnice Institute', 'Chadduddan,Mohammdpur,Dhaka', NULL, 'https://www.linkedin.com/in/eshrak-g-2967a9278/', 'https://github.com/Eshrak20', 'https://eshrakg.netlify.app/', 'Laravel and Mern', NULL, NULL, 'Junior Developer', NULL, NULL, '🔹 Hey, I\'m Eshrak! | Full-Stack Developer | Tech Enthusiast | Content Creator', NULL, '2025-04-20 13:56:27', '2025-05-04 06:25:22'),
(3, 3, 'Fardin', 'A Good UI Designer', '/storage/profile_photos/ynDxjpJo2ZwiRWBWGGortoTkhWfC4yODJYGx9tDh.jpg', 1, 'Flutter &Figma', '[\"Dart\",\"Flutter\",\"Git\",\"Html\",\"Css\",\"Bootstrap\",\"Tailwind\",\"Trello\",\"Post Man\"]', '[\"Udemy\",\"Ostad\",\"PSC\",\"JSC\",\"SSC\"]', 21, 'Daffodil Polytechnice Institute', 'Future Town,Mohammdpur,Dhaka', NULL, 'https://www.google.com', 'https://www.google.com', 'https://www.google.com', 'Flutter', NULL, NULL, 'Junior App Developer', NULL, NULL, '💻 I love coding, solving problems, and building cool projects! Currently working with Flutter, Dart, Tailwind CSS to create awesome web apps. Also, I enjoy working with APIs, authentication, and database management.', NULL, '2025-04-23 07:45:11', '2025-05-05 08:37:25'),
(4, 4, 'MD. Mizanur Rahman Jisan', 'All Rounder', '/storage/profile_photos/3vpByZzlw9jsVhwgfBCdhkdKqvg7clBLv29NRlUp.jpg', 3, 'Laravel & Flutter', '[\"C\",\"C++\",\"PHP\",\"Python\",\"Laravel\",\"Django\",\"Flutter\",\"Git\"]', '[\"Programming Hero\",\"Phitron\",\"Asia pasific\"]', 23, 'asia pacific university', 'Chanmia Housing ,Mohammdpur,Dhaka', NULL, 'https://www.google.com', 'https://www.google.com', 'https://www.google.com', 'Laravel and Flutter', NULL, NULL, 'Senior Web & App developer', NULL, NULL, '💻 I love coding, solving problems, and building cool projects! Currently working with Laravel ,Flutter, Dart, Tailwind CSS to create awesome web apps. Also, I enjoy working with APIs, authentication, and database management.', NULL, '2025-04-23 07:50:47', '2025-05-07 05:51:46'),
(5, 5, 'Shohag', 'A Good Problem Solver', '/storage/profile_photos/fcq42O6uXVBAWfqpsxpJC1IPrwtqHvMOCPjoGYyN.jpg', 10, 'Laravel & ReactJS', NULL, NULL, NULL, NULL, NULL, NULL, 'https://www.google.com', 'https://www.google.com', 'https://www.google.com', 'Laravel and Mern', NULL, NULL, 'CEO and Founder', NULL, NULL, '💻 I love coding, solving problems, and building cool projects! Currently working with Laravel ,Flutter, Dart, Tailwind CSS to create awesome web apps. Also, I enjoy working with APIs, authentication, and database management.', NULL, '2025-04-23 08:08:46', '2025-05-05 08:39:08'),
(6, 6, 'Mostafiz', NULL, '/storage/profile_photos/3NzXcbAOIZvtx9je5rEk6O8QJCcT5EtY0H6WFAG7.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2025-04-23 08:09:46', '2025-04-23 08:10:13'),
(7, 7, 'Mahmud', NULL, '/storage/profile_photos/qu6XHhNAz2EqOLegKRB09LC52mMgwORu0474O0Tl.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2025-04-23 08:10:33', '2025-05-05 09:27:30');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_description` text COLLATE utf8mb4_unicode_ci,
  `description` longtext COLLATE utf8mb4_unicode_ci,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_featured` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `title`, `short_description`, `description`, `icon`, `image`, `is_featured`, `created_at`, `updated_at`) VALUES
(1, 'Web Application', 'A web application is a software program that runs on a web server and is accessed through a web browser, enabling users to perform specific functions or tasks online.', 'A web application is a client-server software application in which the client (or user interface) runs in a web browser. Unlike traditional desktop applications, web applications do not need to be installed on a user\'s device, making them easily accessible from any internet-connected device. These applications are developed using a combination of frontend (HTML, CSS, JavaScript) and backend technologies (such as PHP, Python, Node.js, Ruby, or Java), often supported by a database like MySQL or MongoDB.\r\n\r\nWeb applications can range from simple websites with interactive forms to complex enterprise-level platforms like CRMs, HR systems, and e-commerce solutions. They are widely used in modern businesses for their scalability, cross-platform compatibility, and ease of deployment and maintenance.\r\n\r\nWould you like this tailored to a specific type of web application (e.g., e-commerce, HRM, school management)?', NULL, 'services/xeU16S46nTg1gDsPyGymdw8Db3Yma4DYNwTCl7te.webp', 0, '2025-05-07 09:51:59', '2025-05-07 09:51:59'),
(2, 'Mobile APP', 'Mobile app development is the process of creating software applications designed to run on mobile devices like smartphones and tablets. It involves various stages, including planning, designing, developing, testing, and releasing the app. Two main approaches are native and cross-platform development.', 'Key Aspects of Mobile App Development:\r\nNative Development:\r\nCreating apps specifically for one platform (e.g., iOS or Android) using its native language (Swift for iOS, Kotlin/Java for Android). This offers the best performance and access to platform-specific features, but requires separate development for each platform. \r\nCross-Platform Development:\r\nBuilding apps that can run on multiple platforms using a single codebase. Frameworks like Flutter and React Native are used for this. This approach reduces development time and costs. \r\nWeb App Development:\r\nBuilding apps using web technologies (HTML, CSS, JavaScript) that can be accessed through a mobile browser. This is a quick and cost-effective option. \r\nAI-Powered App Builders:\r\nTools like Appy Pie allow users to create apps without coding skills.', NULL, 'services/etrapPJwANvo0IRKnbi6AXXQn5o1qluZolJBKM8w.webp', 1, '2025-05-01 00:06:32', '2025-05-07 06:04:01'),
(3, 'Web Development', 'Web development is the process of creating and building websites and web applications. It involves both the front-end (client-side) and back-end (server-side) aspects of a website, encompassing tasks like coding, designing, and maintaining the site. Web developers use programming languages like HTML, CSS, and JavaScript, along with other tools and frameworks, to bring websites to life.', 'Web development is the process of creating and building websites and web applications. It involves both the front-end (client-side) and back-end (server-side) aspects of a website, encompassing tasks like coding, designing, and maintaining the site. Web developers use programming languages like HTML, CSS, and JavaScript, along with other tools and frameworks, to bring websites to life. \r\nHere\'s a more detailed look at web development:\r\nWhat it involves:\r\nCoding:\r\nWeb developers write code using languages like HTML (for structure), CSS (for styling), and JavaScript (for interactivity) to create the foundation and functionality of a website. \r\nDesign:\r\nWeb development also involves designing the user interface (UI) and user experience (UX) of a website, ensuring it is visually appealing and user-friendly.\r\nDatabase Management:\r\nSome web development projects involve working with databases to store and retrieve information, especially for dynamic websites and web applications. \r\nMaintenance:\r\nWeb developers also play a role in maintaining and updating websites, ensuring they are functional and up-to-date. \r\nKey areas of web development:\r\nFront-end development: Focuses on the client-side of a website, what users see and interact with. \r\nBack-end development: Focuses on the server-side, handling data processing, logic, and database interactions. \r\nFull-stack development: Involves expertise in both front-end and back-end development, allowing developers to build entire web applications from scratch. \r\nTools and technologies:\r\nProgramming languages: HTML, CSS, JavaScript, Python, PHP, Ruby.\r\nFrameworks: AngularJS, React, Vue.js, Django, Node.js.\r\nContent Management Systems (CMS): WordPress, Joomla!, Drupal.\r\nVersion control: Git, GitHub. \r\nIn essence, web development is a multifaceted process that involves a combination of programming, design, and technical skills to create and maintain websites and web applications that users interact with on the internet.', NULL, 'services/4l5eDzwbh2XhCNYj8bsu4fBMTK2KXO4dMcN8GU7o.jpg', 0, '2025-05-01 01:05:19', '2025-05-05 10:12:45'),
(4, 'AI', 'We provide AI solutions to automate tasks, analyze data, and boost efficiency. Our smart systems are tailored to your business needs.', 'At Innovation Lab, we specialize in delivering cutting-edge AI solutions that transform the way businesses operate. Our services are designed to automate repetitive tasks, uncover insights from complex data, and enhance overall productivity. By combining the power of machine learning, natural language processing, and data analytics, we build intelligent systems that adapt to your unique goals and challenges.', NULL, 'services/LQS77bDtRcu4DRE3L1N6ZkpJmUsSkOZsNMiUAu2x.jpg', 0, '2025-05-07 05:54:31', '2025-05-07 06:04:13'),
(5, 'UI/UX', 'UI and UX design are two closely related but distinct fields that focus on different aspects of creating user-friendly digital products', 'User Interface (UI) Design:\r\nFocus: The visual and interactive elements of a product. \r\nWhat it involves: Designing the layout, functionality, and visual aspects (e.g., color, icons, typography) of each screen. \r\nGoal: To create a visually appealing and easy-to-use interface. \r\nUser Experience (UX) Design:\r\nFocus: The overall user journey and experience with a product. \r\nWhat it involves: Understanding user needs, goals, and expectations, conducting user research, creating wireframes, and usability testing. \r\nGoal: To ensure that the product meets users\' needs, is intuitive, and provides a positive overall experience. \r\nKey Differences:\r\nScope:\r\nUI focuses on the surface-level appearance and interaction, while UX encompasses the entire user journey. \r\nFocus:\r\nUI focuses on visuals and interaction, while UX focuses on user needs and goals. \r\nTools:\r\nUI designers often use tools like Figma, Sketch, and Adobe XD for designing visual mockups and interactive prototypes. UX designers use tools like Optimal Workshop for user research and testing. \r\nIn essence: UI is a part of UX, but UX encompasses a much broader range of considerations. A great product has both a well-designed UI and a well-thought-out UX.', NULL, 'services/fmbgOa7NL7JalYxqmyg3YOZ1kVsdmh3ylUzAB8bY.jpg', 0, '2025-05-01 01:06:19', '2025-05-07 06:24:19'),
(15, 'Digital Marketing Services', 'We offer result-driven digital marketing services to boost your online presence. From SEO and social media marketing to paid ads and email campaigns, we help you reach the right audience and grow your business.', 'Our services include Search Engine Optimization (SEO) to improve your website\'s visibility, Social Media Marketing to engage with your audience on platforms like Facebook and Instagram, Pay-Per-Click (PPC) advertising for instant traffic and leads, and Email Marketing to nurture customer relationships. We also offer content marketing, branding strategy, and analytics to track performance and ensure real results .With a focus on creativity, data, and consistency, we don’t just market—we create lasting impressions that convert visitors into loyal customers.', NULL, 'services/JtwMaWWVmWrm9ifrbiuldFTTHNf43NUrNfImMzwP.png', 0, '2025-05-07 06:17:24', '2025-05-07 06:18:54');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('k3DvvjvcjZMoZrXjPnVjdwneO9OyLnjsx0JNLtbz', NULL, '192.168.10.120', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 OPR/118.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiSVJSQTdNc2VWMTBQdURQN3NieUI1dUpWQUhQZ0xvYkZZa1pncFhEOCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzQ6Imh0dHA6Ly8xOTIuMTY4LjEwLjEyMDo4MDAwL2NvbnRhY3QiO319', 1746884950),
('MeKAuLUqqad2KgpGMWXjIcaUiUkdR9hy9KMihiWb', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 OPR/118.0.0.0', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiWnZtd3RQRXZjQ1lteEFMOHZmNDExUlFha2VBZmtzdXlHYXlyTjllaiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjc6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9sb2dpbiI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6MzoidXJsIjthOjE6e3M6ODoiaW50ZW5kZWQiO3M6MzE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9kYXNoYm9hcmQiO319', 1746885024);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Eshrak', 'e@gmail.com', NULL, '$2y$12$3pN0wMLHAuvG8HTdLa4cduMRtR5xRAErfmypPXrfs.wvwB.0vklrC', NULL, '2025-04-20 13:56:27', '2025-04-20 13:56:27'),
(3, 'Fardin', 'Fardin@gmail.com', NULL, '$2y$12$3wQ7x6.WKJjOMf0pWvy7CuldHoCFr2oiXfeIDz9Hdb5Rp3KuEiSse', NULL, '2025-04-23 07:45:11', '2025-04-23 07:45:11'),
(4, 'Mizanur Rhaman Jisan', 'j@gmail.com', NULL, '$2y$12$5rgS9Wa6QowqwpDjRpO0RezoT0A.UlOHP/vf7y69H/7v3YDXV6Hzy', NULL, '2025-04-23 07:50:47', '2025-04-23 07:50:47'),
(5, 'Shohag', 'Shohag.cse3@gmail.com', NULL, '$2y$12$wnEzfvxct16roa60inwvq.LvdXbR300vtkulCLuBBwQbdaF0RqJV2', NULL, '2025-04-23 08:08:46', '2025-04-23 08:08:46'),
(6, 'Mostafiz', 'mostafizur@gmail.com', NULL, '$2y$12$K2wOgm/qPNtvRQlds3nDRubWhCwPHuFJpbdt8ilpJ1secmj7a77s6', NULL, '2025-04-23 08:09:46', '2025-04-23 08:09:46'),
(7, 'Mahmud', 'mahmud@gmail.com', NULL, '$2y$12$KVqH2.6PD6lfSaBQi7QoWuHN.QLSvfEUr.KeuS9plQdyiBw8.hbXC', NULL, '2025-04-23 08:10:33', '2025-04-23 08:10:33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `blogs_slug_unique` (`slug`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `contact_infos`
--
ALTER TABLE `contact_infos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `experience_statuses`
--
ALTER TABLE `experience_statuses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `forms`
--
ALTER TABLE `forms`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `forms_email_unique` (`email`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `management`
--
ALTER TABLE `management`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `missions`
--
ALTER TABLE `missions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `profiles_user_id_foreign` (`user_id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `contact_infos`
--
ALTER TABLE `contact_infos`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `experience_statuses`
--
ALTER TABLE `experience_statuses`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `forms`
--
ALTER TABLE `forms`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `management`
--
ALTER TABLE `management`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `missions`
--
ALTER TABLE `missions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `profiles`
--
ALTER TABLE `profiles`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `profiles`
--
ALTER TABLE `profiles`
  ADD CONSTRAINT `profiles_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
