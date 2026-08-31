# jarvis

Jarvis is an enterprise-grade, autonomous affiliate marketing automation ecosystem built on Next.js 15 (App Router), Supabase PostgreSQL, and Google Gemini models (`gemini-3.7-flash` for content generation with `gemini-3.5-flash-lite` for high-volume ingestion/classification). It is designed to remove manual friction from e-commerce content production and distribution by running an intelligent, self-healing pipeline that discovers products, generates optimized copy, builds trackable affiliate links, and deploys campaigns without manual intervention.

## Core Orchestrator

At the center of the platform is **Jarvis**, a specialized multi-agent orchestrator built with the official `@google/genai` SDK. Jarvis runs on structured event triggers and background cron workers in Vercel Serverless infrastructure.

## Workflow

1. **Data Ingestion & Scoring**  
   Jarvis ingests product catalogs, tech trends, and affiliate inventory from configured sources (Amazon Associates, merchant RSS feeds, and custom APIs).  
   Using `gemini-3.5-flash-lite`, it classifies high-volume input, extracts key specs, applies category taxonomy, and scores products by viral potential and commission yield.

2. **Agentic Content Engine**  
   After staging a product, `gemini-3.7-flash` generates platform-tailored assets via structured JSON output, including:
   - SEO-focused Pinterest pin descriptions
   - High-converting social copy
   - Email newsletter summaries
   - Structured metadata tags

3. **Secure Persistence & State Management**  
   All state transitions are logged immutably in Supabase PostgreSQL.  
   Granular Row Level Security (RLS) separates public consumer data (subscribers, storefront listings) from protected internal data (affiliate tokens, API logs, analytics).  
   Administrative actions and API routes are authenticated using `@supabase/ssr` session management.

4. **Multi-Channel Automated Deployment**  
   Jarvis publishes generated content through integrated distribution adapters:
   - Rich-media publishing to Pinterest API
   - Transactional campaign queuing through Resend
   - Internal storefront updates

## Modular, Zero-Lock-In Architecture

Jarvis decouples agent reasoning from presentation and distribution so teams can extend it with custom sub-agents, local LLM fallbacks (for example via Ollama), and additional channel adapters such as TikTok, X/Twitter, and Meta.
