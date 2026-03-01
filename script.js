const aiTools = [
  {
    id: "ai_001",
    name: "ChatGPT",
    company: "OpenAI",
    country: "USA",
    category: "Conversational AI",
    pricing: "Freemium",
    pricingAmount: "Free; ChatGPT Plus $20/month; API: pay-as-you-go",
    website: "https://openai.com",
    logo: "https://cdn.brandfetch.io/idR3duQxYl/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1741166761458",
    rating: 4.9,
    tags: ["Chatbot", "Writing", "Coding"],
    isTrending: true,
    pros: [
      "Excellent responses",
      "Wide integrations",
      "Strong developer ecosystem",
    ],
    cons: ["Can be costly at scale", "API rate limits for some plans"],
  },
  {
    id: "ai_002",
    name: "Claude",
    company: "Anthropic",
    country: "USA",
    category: "Conversational AI",
    pricing: "Freemium",
    pricingAmount: "Free trial; business/enterprise custom pricing",
    website: "https://anthropic.com",
    logo: "https://cdn.brandfetch.io/idW5s392j1/w/338/h/338/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1738315794862",
    rating: 4.8,
    tags: ["AI Assistant", "Enterprise"],
    isTrending: true,
    pros: ["Safety-focused architecture", "Strong enterprise features"],
    cons: [
      "Less community tooling vs incumbents",
      "Enterprise pricing can be high",
    ],
  },
  {
    id: "ai_003",
    name: "Gemini",
    company: "Google DeepMind",
    country: "USA",
    category: "Multimodal AI",
    pricing: "Freemium",
    pricingAmount:
      "Free consumer tiers; Google Cloud API: pay-as-you-go (varies by usage)",
    website: "https://deepmind.google",
    logo: "https://cdn.brandfetch.io/idR3duQxYl/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1741166761458",
    rating: 4.7,
    tags: ["Search", "Code", "Image"],
    isTrending: true,
    pros: [
      "State-of-the-art multimodal capabilities",
      "Strong infra and scaling",
    ],
    cons: [
      "Complex enterprise pricing",
      "Data governance depends on Google Cloud terms",
    ],
  },
  {
    id: "ai_004",
    name: "Midjourney",
    company: "Midjourney Inc.",
    country: "USA",
    category: "Image Generation",
    pricing: "Paid",
    pricingAmount:
      "Starts around $10/month (hobby); higher commercial tiers available",
    website: "https://midjourney.com",
    logo: "https://cdn.brandfetch.io/idR3duQxYl/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1741166761458",
    rating: 4.7,
    tags: ["Art", "Design"],
    isTrending: false,
    pros: [
      "High-quality artistic outputs",
      "Active community and Discord-based workflows",
    ],
    cons: [
      "Subscription required for regular use",
      "Output consistency varies by prompt",
    ],
  },
  {
    id: "ai_005",
    name: "Stability AI",
    company: "Stability AI",
    country: "UK",
    category: "Image Generation",
    pricing: "Freemium",
    pricingAmount:
      "Open-source models free; hosted API tiers start at low monthly rates (varies)",
    website: "https://stability.ai",
    logo: "https://cdn.brandfetch.io/idR3duQxYl/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1741166761458",
    rating: 4.5,
    tags: ["Stable Diffusion", "Open Source"],
    isTrending: false,
    pros: [
      "Open models and community-driven",
      "Good for self-hosting and customization",
    ],
    cons: [
      "Self-hosting requires infra",
      "Hosted services have usage limits on free tier",
    ],
  },
  {
    id: "ai_006",
    name: "DeepSeek",
    company: "DeepSeek AI",
    country: "China",
    category: "Large Language Model",
    pricing: "Free",
    pricingAmount:
      "Free for core features; enterprise integrations may be paid",
    website: "https://deepseek.com",
    logo: "https://cdn.brandfetch.io/idR3duQxYl/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1741166761458",
    rating: 4.6,
    tags: ["LLM", "Coding"],
    isTrending: true,
    pros: ["Accessible entry point", "Good for experimentation"],
    cons: ["Limited enterprise controls", "May lack mature documentation"],
  },
  {
    id: "ai_007",
    name: "Mistral AI",
    company: "Mistral AI",
    country: "France",
    category: "Open Source LLM",
    pricing: "Freemium",
    pricingAmount:
      "Open models free; managed/hosted options priced by provider",
    website: "https://mistral.ai",
    logo: "https://cdn.brandfetch.io/idR3duQxYl/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1741166761458",
    rating: 4.6,
    tags: ["Open Model", "Enterprise"],
    isTrending: true,
    pros: ["Open and performant models", "Good for customization"],
    cons: ["Hosting costs for production", "Ecosystem still maturing"],
  },
  {
    id: "ai_008",
    name: "Runway",
    company: "Runway ML",
    country: "USA",
    category: "Video Generation",
    pricing: "Freemium",
    pricingAmount:
      "Free tier; paid plans (roughly from $12/month) for higher resolution and commercial use",
    website: "https://runwayml.com",
    logo: "https://cdn.brandfetch.io/idR3duQxYl/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1741166761458",
    rating: 4.6,
    tags: ["Video", "Editing"],
    isTrending: false,
    pros: ["Powerful video tools", "Easy-to-use UI for creators"],
    cons: [
      "Render times can be long on heavy projects",
      "Paid tiers required for commercial use",
    ],
  },
  {
    id: "ai_009",
    name: "Synthesia",
    company: "Synthesia",
    country: "UK",
    category: "AI Video Avatar",
    pricing: "Paid",
    pricingAmount:
      "Paid subscriptions; plans commonly start from roughly $30-$50/month depending on seats/minutes",
    website: "https://synthesia.io",
    logo: "https://cdn.brandfetch.io/idR3duQxYl/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1741166761458",
    rating: 4.5,
    tags: ["Avatars", "Video AI"],
    isTrending: false,
    pros: [
      "Professional avatar generation",
      "Fast turnaround for training videos",
    ],
    cons: [
      "Cost-prohibitive for small users",
      "Customization limited to offered avatars",
    ],
  },
  {
    id: "ai_010",
    name: "Perplexity AI",
    company: "Perplexity AI",
    country: "USA",
    category: "AI Search Engine",
    pricing: "Freemium",
    pricingAmount: "Free; Pro plans typically start around $9-$20/month",
    website: "https://perplexity.ai",
    logo: "https://cdn.brandfetch.io/idR3duQxYl/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1741166761458",
    rating: 4.7,
    tags: ["Search", "Research"],
    isTrending: true,
    pros: [
      "Excellent for quick research",
      "Conversational answers with citations",
    ],
    cons: [
      "May not be suitable for sensitive data",
      "Pro features behind paywall",
    ],
  },
  {
    id: "ai_011",
    name: "Jasper",
    company: "Jasper AI",
    country: "USA",
    category: "AI Writing",
    pricing: "Paid",
    pricingAmount: "Paid plans starting around $29/month (varies by tier)",
    website: "https://jasper.ai",
    logo: "https://cdn.brandfetch.io/idR3duQxYl/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1741166761458",
    rating: 4.4,
    tags: ["Marketing", "Copywriting"],
    isTrending: false,
    pros: ["Marketing-focused templates", "Good for content teams"],
    cons: ["Subscription required", "Quality depends on prompt engineering"],
  },
  {
    id: "ai_012",
    name: "Copy.ai",
    company: "Copy.ai",
    country: "USA",
    category: "AI Writing",
    pricing: "Freemium",
    pricingAmount:
      "Free tier; paid plans start around $36/month for higher usage/team features",
    website: "https://copy.ai",
    logo: "https://cdn.brandfetch.io/idR3duQxYl/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1741166761458",
    rating: 4.3,
    tags: ["Content", "Marketing"],
    isTrending: false,
    pros: ["Easy to use for marketing copy", "Affordable tiers"],
    cons: [
      "May require editing for quality",
      "Limited advanced features on lower tiers",
    ],
  },
  {
    id: "ai_013",
    name: "Character.AI",
    company: "Character Technologies",
    country: "USA",
    category: "AI Chatbots",
    pricing: "Freemium",
    pricingAmount: "Free; paid subscriptions for Pro features (varies)",
    website: "https://character.ai",
    logo: "https://cdn.brandfetch.io/idR3duQxYl/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1741166761458",
    rating: 4.6,
    tags: ["Roleplay", "Entertainment"],
    isTrending: true,
    pros: ["Fun, creative roleplay bots", "Large community-created characters"],
    cons: [
      "Moderation issues can occur",
      "Not ideal for business-critical tasks",
    ],
  },
  {
    id: "ai_014",
    name: "Notion AI",
    company: "Notion",
    country: "USA",
    category: "Productivity AI",
    pricing: "Paid",
    pricingAmount:
      "Paid add-on or included in higher-tier Notion plans; Notion plans commonly start around $8-$15/user/month",
    website: "https://notion.so",
    logo: "https://cdn.brandfetch.io/idR3duQxYl/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1741166761458",
    rating: 4.5,
    tags: ["Docs", "Productivity"],
    isTrending: false,
    pros: [
      "Seamless inside Notion workspace",
      "Boosts productivity and drafting",
    ],
    cons: [
      "Cost added to Notion subscription",
      "Feature set tied to Notion ecosystem",
    ],
  },
  {
    id: "ai_015",
    name: "GrammarlyGO",
    company: "Grammarly",
    country: "USA",
    category: "Writing Assistant",
    pricing: "Freemium",
    pricingAmount:
      "Free; Grammarly Premium starts around $12/month billed annually",
    website: "https://grammarly.com",
    logo: "https://cdn.brandfetch.io/idR3duQxYl/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1741166761458",
    rating: 4.4,
    tags: ["Grammar", "Writing"],
    isTrending: false,
    pros: ["Strong grammar & style tools", "Easy browser integration"],
    cons: [
      "Premium required for advanced features",
      "Privacy concerns for sensitive text",
    ],
  },
  {
    id: "ai_016",
    name: "Hugging Face",
    company: "Hugging Face",
    country: "USA",
    category: "AI Model Hub",
    pricing: "Freemium",
    pricingAmount:
      "Open-source access free; hosted inference billed by usage (varies)",
    website: "https://huggingface.co",
    logo: "https://cdn.brandfetch.io/idR3duQxYl/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1741166761458",
    rating: 4.8,
    tags: ["Models", "Open Source"],
    isTrending: true,
    pros: ["Huge model hub", "Great for researchers and engineers"],
    cons: [
      "Hosted inference costs at scale",
      "Some enterprise features are paid",
    ],
  },
  {
    id: "ai_017",
    name: "Cohere",
    company: "Cohere",
    country: "Canada",
    category: "Enterprise LLM",
    pricing: "Paid",
    pricingAmount:
      "Paid API with pay-as-you-go pricing; enterprise plans have custom pricing",
    website: "https://cohere.com",
    logo: "https://cdn.brandfetch.io/idR3duQxYl/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1741166761458",
    rating: 4.6,
    tags: ["Enterprise", "NLP"],
    isTrending: false,
    pros: ["Enterprise-grade APIs", "Focused on production use cases"],
    cons: ["Paid-only for production", "Less hobbyist-friendly"],
  },
  {
    id: "ai_018",
    name: "Replit AI",
    company: "Replit",
    country: "USA",
    category: "AI Coding Assistant",
    pricing: "Freemium",
    pricingAmount:
      "Free tier; Pro/Teams plans start around $7-$20/month depending on features",
    website: "https://replit.com",
    logo: "https://cdn.brandfetch.io/idR3duQxYl/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1741166761458",
    rating: 4.5,
    tags: ["Coding", "IDE"],
    isTrending: true,
    pros: ["Integrated coding environment", "Quick prototyping"],
    cons: [
      "Advanced features require subscription",
      "Resource limits on free tier",
    ],
  },
  {
    id: "ai_019",
    name: "Canva Magic Studio",
    company: "Canva",
    country: "Australia",
    category: "Design AI",
    pricing: "Freemium",
    pricingAmount:
      "Free tier; Canva Pro commonly $12.99/month per user (approx)",
    website: "https://canva.com",
    logo: "https://cdn.brandfetch.io/idR3duQxYl/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1741166761458",
    rating: 4.6,
    tags: ["Design", "Creativity"],
    isTrending: false,
    pros: ["Easy for non-designers", "Fast templates and assets"],
    cons: [
      "Pro needed for full asset library",
      "Some exports limited on free tier",
    ],
  },
  {
    id: "ai_020",
    name: "Zoho Zia",
    company: "Zoho",
    country: "India",
    category: "Business AI",
    pricing: "Paid",
    pricingAmount:
      "Bundled in Zoho paid plans; typical starting pricing around $10/user/month (varies)",
    website: "https://zoho.com",
    logo: "https://cdn.brandfetch.io/idR3duQxYl/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1741166761458",
    rating: 4.4,
    tags: ["CRM", "Automation"],
    isTrending: false,
    pros: ["Tight CRM integration", "Business-focused automation"],
    cons: ["Requires Zoho subscription", "Customization learning curve"],
  },
];

const search = document.querySelector("#search");

search.addEventListener("input", () => {
  const searchTerm = search.value.toLowerCase();

  const filteredTools = aiTools.filter((tool) => {
    return (
      tool.name.toLowerCase().includes(searchTerm) ||
      tool.company.toLowerCase().includes(searchTerm) ||
      tool.category.toLowerCase().includes(searchTerm) ||
      tool.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
    );
  });

  document.querySelector(".cards").innerHTML = "";
  renderCards(filteredTools);
});

function renderCards(tools) {
  const cardContainer = document.querySelector(".cards");

  tools.forEach((tool) => {
    cardContainer.innerHTML += `  <div class="card">
          <div class="card-header">
            <img
              src=${tool.logo}
              alt="Logo"
              srcset="
                ${tool.logo} 1x,
                ${tool.logo} 2x
              "
            />
            <div class="card-header-container">
              <div class="card-title">
                <h3>${tool.name}</h3>
                <p>${tool.company} · ${tool.country}</p>
              </div>
              <div class="ratings">
                <p class="badge">${tool.category}</p>
                <div class="star">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="goldenrod"
                    width="32"
                    height="32"
                  >
                    <path
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    />
                  </svg>
                </div>
                <p>${tool.rating}</p>
              </div>
            </div>
          </div>
          <div class="content">
            <div class="pricing">
              <h5>${tool.pricing}</h5>
              <div class="pricing-amount">
                  ${tool.pricingAmount
                    .split(";")
                    .map((line) => `<p>${line.trim()}</p>`)
                    .join("")}
              </div>
            </div>
            <div class="tags">
              ${tool.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
            <div class="pros">
              <h5>Pros</h5>
              <ul>
                ${tool.pros.map((pro) => `<li><span class="check">&check;</span>${pro}</li>`).join("")}
              </ul>
            </div>
            <div class="cons">
              <h5>Cons</h5>
              <ul>
                ${tool.cons.map((con) => `<li><span class="check">&times;</span>${con}</li>`).join("")}
              </ul>
            </div>
          </div>
        </div>`;
  });
}

renderCards(aiTools);
