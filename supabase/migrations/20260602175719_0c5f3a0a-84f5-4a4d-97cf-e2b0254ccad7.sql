UPDATE experiences
SET 
  role = 'Bio Protocol · Product Manager',
  meta_role = 'Bio Protocol · Product Manager',
  summary = 'Built the investor intelligence layer of a Scientific AI Agent funding platform from individual project pages to a market-wide dashboard, giving investors what they needed to make confident funding decisions in an emerging asset class with no established playbook.',
  objective = 'DeSci investing was opaque. Projects had no good way to present themselves. Investors had no way to read the market. We needed to build both.',
  objective_body = 'Bio Protocol was becoming the fundraising infrastructure for decentralized biotech — but infrastructure alone wasn''t enough. For the platform to work, investors needed to trust what they were seeing, and projects needed a credible surface to present themselves. Neither existed when I joined. The product challenge was to build the information layer that made DeSci investing legible - at the project level and the market level.',
  approach_intro = 'Two features. One thread: giving investors the signal they needed, at every level of zoom.',
  approach_body = 'Feature 1: Project detail pages — solving the information density problem for a dual audience

Built from zero, co-owning with the CPO from concept through delivery. The core tension: projects wanted to tell their full story; investors needed fast, reliable signal to make funding decisions. Too much information and the page became noise. Too little and investors couldn''t commit.

We resolved this through progressive disclosure — structuring the page so the most decision-critical information was immediately visible, with deeper detail available for investors who wanted it. To get there, we ran iterative user testing with both audiences to identify which sections drove decisions and which created friction.

One test result defined the approach: we had built a dynamic Twitter feed pulling each project''s latest social activity — a feature that seemed useful for gauging community momentum. Testing showed investors ignored it entirely and projects found it cluttered their page. We cut it and replaced that space with cleaner economic and project fundamentals. The lesson was clear: investors on this platform wanted bare-bones financial and scientific signal, not social proof.

Feature 2: Market Insights — a CoinGecko-style dashboard for the DeSci ecosystem

Conceived, defined, and shipped an investor-facing market dashboard aggregating data across all projects fundraising via Bio Protocol. The goal was to give investors a market-level view they couldn''t get anywhere else — fundraising volumes, project momentum, sector distribution across the DeSci landscape.

I owned the full concept: defining the use cases (what decisions should this dashboard help investors make?), the data model (what signals actually matter vs. what''s noise), and the UI concept - taking CoinGecko''s information density and legibility as a reference point for how to display a large number of projects without overwhelming the user.

The feature addressed a gap that the detail pages couldn''t: a single project page tells you about one opportunity, but investors needed to understand the relative landscape — which sectors were attracting capital, which projects were gaining momentum, where the platform''s activity was concentrated. Market Insights made that visible for the first time.',
  impact_body = NULL
WHERE slug = 'bio-protocol';