# Graph Report - portfolio  (2026-09-07)

## Corpus Check
- Corpus is ~36,391 words - fits in a single context window. You may not need a graph.

## Summary
- 514 nodes · 592 edges · 76 communities (37 shown, 28 thin omitted)
- Extraction: 92% EXTRACTED · 8% INFERRED · 0% AMBIGUOUS · INFERRED: 48 edges (avg confidence: 0.82)
- Token cost: 1,500 input · 200 output

## Community Hubs (Navigation)
- Testing Assertions & Best Practices
- Composer Dependencies & Autoload
- Project Configuration & CI
- React Components & UI
- User Model & Auth Config
- Package Dependencies
- Package Metadata
- TypeScript Configuration
- UI Utility Libraries
- Inertia React Features
- Composer Scripts
- Laravel Error Handling & HTTP
- Inertia Middleware
- Database Migrations
- Service Providers
- Concurrency & Queue Patterns
- Convention Inference & Routing
- TypeScript Types & Auth
- Vite Build Plugins
- Tailwind CSS v4
- OpenCode Configuration
- Package Scripts
- DB Performance & Blade
- Wayfinder Route Generation
- Test Framework Setup
- Dev Dependencies
- Eloquent Models & Migrations
- Logging Configuration
- Optional Dependencies
- Architecture Patterns
- Caching Strategies
- Collections & Bulk Processing
- Notifications & HTTP Client
- Site Icons & Branding
- Eloquent Scopes
- Convention Detection Process
- Config & Security
- Artisan Console Routes
- Exception Context
- Migration Practices
- Validation Rules
- Robots.txt
- Base Controller
- Web Routes
- Inertia React App
- Composite Index Design
- Conditional Aggregates
- Subquery Patterns
- Concurrency Patterns
- Blade Attribute Merge
- Blade Fragments
- Cache Failover
- Collection Higher-Order Messages
- Exception Reporting
- Notification Locale
- On-Demand Notifications
- HTTP Pool
- Markdown Mailables
- Migration Rollbacks
- Queue Horizon
- Background Scheduling
- Query Parameter Binding
- CSRF Protection
- Upload Validation
- String Array Utilities

## God Nodes (most connected - your core abstractions)
1. `useReveal()` - 19 edges
2. `Laravel Best Practices Skill` - 17 edges
3. `compilerOptions` - 14 edges
4. `scripts` - 13 edges
5. `require-dev` - 12 edges
6. `Inertia React Development Skill` - 12 edges
7. `Assertions` - 11 edges
8. `Testing Rule Index` - 10 edges
9. `User` - 9 edges
10. `Agent Guidelines (AGENTS.md)` - 9 edges

## Surprising Connections (you probably didn't know these)
- `Main App Layout (app.blade.php)` --references--> `Apple Touch Icon (PNG)`  [EXTRACTED]
  resources/views/app.blade.php → public/apple-touch-icon.png
- `PHP 8.5 Setup (shivammathur/setup-php)` --conceptually_related_to--> `PHP Coding Rules`  [INFERRED]
  .github/workflows/tests.yml → AGENTS.md
- `Node 22 Setup (actions/setup-node)` --shares_data_with--> `pnpm publicHoistPattern for @inertiajs/core`  [INFERRED]
  .github/workflows/tests.yml → pnpm-workspace.yaml
- `CI Check Command (composer ci:check)` --conceptually_related_to--> `Pest Testing Rules`  [INFERRED]
  .github/workflows/tests.yml → AGENTS.md
- `pnpm publicHoistPattern for @inertiajs/core` --shares_data_with--> `Inertia Laravel Rules`  [INFERRED]
  pnpm-workspace.yaml → AGENTS.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Inertia v3 Client-Side Feature Set** — _agents_skills_inertia_react_development_skill_md_optimistic_updates, _agents_skills_inertia_react_development_skill_md_instant_visits, _agents_skills_inertia_react_development_skill_md_deferred_props, _agents_skills_inertia_react_development_skill_md_prefetching, _agents_skills_inertia_react_development_skill_md_when_visible, _agents_skills_inertia_react_development_skill_md_infinitescroll, _agents_skills_inertia_react_development_skill_md_polling [EXTRACTED 1.00]
- **Laravel Data Access Performance Pattern Group** — _agents_skills_laravel_best_practices_rules_db_performance_md_eager_loading, _agents_skills_laravel_best_practices_rules_db_performance_md_prevent_lazy_loading, _agents_skills_laravel_best_practices_rules_db_performance_md_select_needed_columns, _agents_skills_laravel_best_practices_rules_db_performance_md_incremental_processing, _agents_skills_laravel_best_practices_rules_db_performance_md_with_count, _agents_skills_laravel_best_practices_rules_advanced_queries_md_subquery_pattern, _agents_skills_laravel_best_practices_rules_advanced_queries_md_composite_index_design [EXTRACTED 1.00]
- **Concurrency and Coordination Patterns** — _agents_skills_laravel_best_practices_rules_architecture_md_atomic_locks, _agents_skills_laravel_best_practices_rules_architecture_md_defer_post_response, _agents_skills_laravel_best_practices_rules_architecture_md_concurrency_run, _agents_skills_laravel_best_practices_rules_queue_jobs_md_rate_limited_middleware, _agents_skills_laravel_best_practices_rules_scheduling_md_without_overlapping, _agents_skills_laravel_best_practices_rules_scheduling_md_on_one_server [INFERRED 0.75]
- **Test Isolation Techniques Cluster** — agents_skills_testing_best_practices_rules_isolation_framework_fakes, agents_skills_testing_best_practices_rules_isolation_mocking, agents_skills_testing_best_practices_rules_isolation_outbound_http_testing, agents_skills_testing_best_practices_rules_isolation_time_randomness_control, agents_skills_testing_best_practices_rules_isolation_database_testing [EXTRACTED 0.90]
- **Security Boundary Testing Cases** — agents_skills_testing_best_practices_rules_security_cross_tenant_access_test, agents_skills_testing_best_practices_rules_security_unprivileged_role_test, agents_skills_testing_best_practices_rules_security_escaping_user_content, agents_skills_testing_best_practices_rules_security_injection_testing, agents_skills_testing_best_practices_rules_security_unexpected_key_testing [EXTRACTED 0.90]
- **Testing Best Practices Core Methodology** — agents_skills_testing_best_practices_skill_testing_best_practices, agents_skills_testing_best_practices_skill_consistency_first_principle, agents_skills_testing_best_practices_skill_what_to_test, agents_skills_testing_best_practices_skill_how_to_apply [EXTRACTED 0.90]
- **CI Pipeline: Automated Testing and Dependency Management** — _github_dependabot_yml, _github_workflows_tests_yml, github_workflows_tests_workflow_ci_job, github_workflows_tests_workflow_composer_setup, github_workflows_tests_workflow_ci_check [INFERRED 0.85]
- **Laravel Ecosystem Agent Guidelines** — _agents_md, laravel_boost_guidelines, laravel_core_rules, php_rules, pest_rules, pint_rules, wayfinder_rules, inertia_laravel_rules [EXTRACTED 1.00]
- **Inertia React Frontend Stack** — inertia_laravel_rules, inertia_v3_features, inertia_react_core_rules, pnpm_public_hoist_inertia, vite_bundling [INFERRED 0.85]
- **Portfolio Website Icon Set** — public_apple_touch_icon, public_apple_touch_icon_geometric_logo, public_favicon_svg, resources_views_app_blade_php [INFERRED 0.75]

## Communities (76 total, 28 thin omitted)

### Community 0 - "Testing Assertions & Best Practices"
Cohesion: 0.06
Nodes (49): Arrange Act Assert Pattern, Assert Complete Result Pattern, Assert Known Value Principle, Correct Assertion Selection Decision Flow, Assertions, Format Expectations over Regex, Named Response Assertions, Endpoint Test Coverage Cases (+41 more)

### Community 1 - "Composer Dependencies & Autoload"
Cohesion: 0.05
Nodes (43): pestphp/pest-plugin, php-http/discovery, autoload, autoload-dev, psr-4, psr-4, config, allow-plugins (+35 more)

### Community 2 - "Project Configuration & CI"
Cohesion: 0.06
Nodes (40): Agent Guidelines (AGENTS.md), Dependabot Configuration, CI Tests Workflow, pnpm Workspace Configuration, .ai/rules Directory Convention, Laravel Artisan CLI Commands, Boost database-query Tool, Boost database-schema Tool (+32 more)

### Community 3 - "React Components & UI"
Cohesion: 0.11
Nodes (25): react, About(), BENEFITS, Contact(), CONTACT_INFO, DAYS, Footer(), Hero() (+17 more)

### Community 4 - "User Model & Auth Config"
Cohesion: 0.10
Nodes (16): User, UserFactory, DatabaseSeeder, Illuminate\Database\Console\Seeds\WithoutModelEvents, Illuminate\Database\Eloquent\Attributes\Fillable, Illuminate\Database\Eloquent\Attributes\Hidden, Illuminate\Database\Eloquent\Factories\Factory, Illuminate\Database\Eloquent\Factories\HasFactory (+8 more)

### Community 5 - "Package Dependencies"
Cohesion: 0.11
Nodes (19): dependencies, class-variance-authority, clsx, concurrently, @inertiajs/react, @inertiajs/vite, laravel-vite-plugin, lucide-react (+11 more)

### Community 6 - "Package Metadata"
Cohesion: 0.11
Nodes (17): private, $schema, type, babel-plugin-react-compiler, concurrently, @laravel/multiplex, lightningcss-linux-x64-gnu, motion (+9 more)

### Community 7 - "TypeScript Configuration"
Cohesion: 0.12
Nodes (15): compilerOptions, allowJs, esModuleInterop, forceConsistentCasingInFileNames, isolatedModules, jsx, module, moduleResolution (+7 more)

### Community 8 - "UI Utility Libraries"
Cohesion: 0.22
Nodes (11): class-variance-authority, clsx, lucide-react, tailwind-merge, GradientCard(), GradientCardProps, gradientVariants, gradientVariants (+3 more)

### Community 9 - "Inertia React Features"
Cohesion: 0.21
Nodes (13): Deferred Props, Inertia Form Component, Inertia React Development Skill, InfiniteScroll, Instant Visits, Layout Props, Inertia Link Component, Optimistic Updates (+5 more)

### Community 10 - "Composer Scripts"
Cohesion: 0.15
Nodes (13): scripts, ci:check, dev, lint, lint:check, post-autoload-dump, post-create-project-cmd, post-root-package-install (+5 more)

### Community 11 - "Laravel Error Handling & HTTP"
Cohesion: 0.17
Nodes (12): defer() Post-Response Work, Exception report()/render() Methods, ShouldDispatchAfterCommit, Explicit HTTP Timeouts, Retry Only Safe Operations, afterCommit() for Queued Mail, retry_after Timeout, Implicit Route Model Binding (+4 more)

### Community 12 - "Inertia Middleware"
Cohesion: 0.24
Nodes (7): HandleInertiaRequests, Illuminate\Foundation\Application, Illuminate\Foundation\Configuration\Exceptions, Illuminate\Foundation\Configuration\Middleware, Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets, Illuminate\Http\Request, Inertia\Middleware

### Community 13 - "Database Migrations"
Cohesion: 0.23
Nodes (3): Illuminate\Database\Migrations\Migration, Illuminate\Database\Schema\Blueprint, Illuminate\Support\Facades\Schema

### Community 14 - "Service Providers"
Cohesion: 0.22
Nodes (6): AppServiceProvider, Carbon\CarbonImmutable, Illuminate\Support\Facades\Date, Illuminate\Support\Facades\DB, Illuminate\Support\ServiceProvider, Illuminate\Validation\Rules\Password

### Community 15 - "Concurrency & Queue Patterns"
Cohesion: 0.20
Nodes (10): Atomic Locks, Atomic Conditional Write (Cache::add), Throttle Exception Reports, Job Batches (Bus::batch), RateLimited Queue Middleware, retryUntil() Time-Based Limits, ShouldBeUnique Jobs, onOneServer() Single Server Execution (+2 more)

### Community 16 - "Convention Inference & Routing"
Cohesion: 0.28
Nodes (9): Controllers & Routing Dimension, Convention Detection Checklist, Testing Dimension, Validation & HTTP Input Dimension, Focused Controllers, Resource Routes, Mass Assignment Control, Form Request Validation (+1 more)

### Community 17 - "TypeScript Types & Auth"
Cohesion: 0.28
Nodes (6): Auth, User, InertiaConfig, @inertiajs/core, InputHTMLAttributes, react

### Community 18 - "Vite Build Plugins"
Cohesion: 0.25
Nodes (7): @inertiajs/vite, laravel-vite-plugin, @laravel/vite-plugin-wayfinder, @rolldown/plugin-babel, @tailwindcss/vite, vite-plus, @vitejs/plugin-react

### Community 19 - "Tailwind CSS v4"
Cohesion: 0.52
Nodes (7): Common Tailwind CSS Pitfalls, CSS-First Configuration with @theme Directive, Dark Mode Variant Pattern, Tailwind v4 Import Syntax, Replaced Deprecated Utilities Table, Spacing with Gap Utilities, Tailwind CSS Development

### Community 20 - "OpenCode Configuration"
Cohesion: 0.29
Nodes (6): command, enabled, type, mcp, laravel-boost, $schema

### Community 21 - "Package Scripts"
Cohesion: 0.29
Nodes (7): scripts, build, build:ssr, check, check:fix, dev, types:check

### Community 22 - "DB Performance & Blade"
Cohesion: 0.33
Nodes (6): View Composer, Eager Loading, Keep Queries Out of Blade Templates, preventLazyLoading() Guard, Select Only Needed Columns, withCount() Relationship Counting

### Community 23 - "Wayfinder Route Generation"
Cohesion: 0.47
Nodes (6): Wayfinder Import Patterns for Tree-Shaking, Route Generation with wayfinder:generate, Route Model Binding with Wayfinder, Wayfinder Development, Wayfinder + Inertia Integration, Wayfinder Common Methods

### Community 24 - "Test Framework Setup"
Cohesion: 0.33
Nodes (3): Illuminate\Foundation\Testing\RefreshDatabase, Illuminate\Foundation\Testing\TestCase, TestCase

### Community 25 - "Dev Dependencies"
Cohesion: 0.33
Nodes (6): devDependencies, babel-plugin-react-compiler, @laravel/vite-plugin-wayfinder, @rolldown/plugin-babel, @types/node, vite-plus

### Community 26 - "Eloquent Models & Migrations"
Cohesion: 0.40
Nodes (5): Attribute Casts, Model-Aware Queries, Precise Relationship Types, whereBelongsTo() Query, Foreign Key Constraints

### Community 27 - "Logging Configuration"
Cohesion: 0.40
Nodes (4): Monolog\Handler\NullHandler, Monolog\Handler\StreamHandler, Monolog\Handler\SyslogUdpHandler, Monolog\Processor\PsrLogMessageProcessor

### Community 28 - "Optional Dependencies"
Cohesion: 0.40
Nodes (5): optionalDependencies, @laravel/multiplex, lightningcss-linux-x64-gnu, @rollup/rollup-linux-x64-gnu, @tailwindcss/oxide-linux-x64-gnu

### Community 29 - "Architecture Patterns"
Cohesion: 0.50
Nodes (4): Architecture & Organization Dimension, Action Class Pattern, Constructor Injection, Contract Boundaries

### Community 30 - "Caching Strategies"
Cohesion: 0.50
Nodes (4): Cache-Aside Read (Cache::remember), Cache Tags, Cache::memo() and once() Memoization, Cache::flexible() Stale-While-Revalidate

### Community 31 - "Collections & Bulk Processing"
Cohesion: 0.50
Nodes (4): cursor() vs lazy() Tradeoffs, lazyById() for Safe Iteration, toQuery() Bulk Operations, Incremental Data Processing (chunk/lazy)

### Community 32 - "Notifications & HTTP Client"
Cohesion: 0.50
Nodes (4): Queued Notifications, Explicit HTTP Error Handling, Http::fake() for Testing, ShouldQueue Mailable

### Community 33 - "Site Icons & Branding"
Cohesion: 0.67
Nodes (4): Apple Touch Icon (PNG), Hexagonal Geometric Logo Mark, SVG Favicon (Geometric Hexagonal Logo), Main App Layout (app.blade.php)

### Community 34 - "Eloquent Scopes"
Cohesion: 0.67
Nodes (3): Eloquent & Models Dimension, Global Scopes (Sparingly), Local Scopes

### Community 35 - "Convention Detection Process"
Cohesion: 0.67
Nodes (3): Convention Detection Process, Infer Conventions Skill, record-rule MCP Tool

### Community 36 - "Config & Security"
Cohesion: 0.67
Nodes (3): env() Only in Config Files, Production Secret Protection, Encrypted Model Attributes

## Knowledge Gaps
- **211 isolated node(s):** `Controller`, `$schema`, `name`, `type`, `description` (+206 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 283 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **28 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Laravel Best Practices Skill` connect `Laravel Error Handling & HTTP` to `Notifications & HTTP Client`, `Eloquent Scopes`, `Convention Detection Process`, `Inertia React Features`, `Concurrency & Queue Patterns`, `Convention Inference & Routing`, `DB Performance & Blade`, `Eloquent Models & Migrations`, `Architecture Patterns`, `Caching Strategies`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Package Dependencies` to `Package Metadata`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **Why does `react` connect `React Components & UI` to `UI Utility Libraries`, `Package Metadata`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Laravel Best Practices Skill` (e.g. with `Inertia React Development Skill` and `Infer Conventions Skill`) actually correct?**
  _`Laravel Best Practices Skill` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Controller`, `$schema`, `name` to the rest of the system?**
  _211 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Testing Assertions & Best Practices` be split into smaller, more focused modules?**
  _Cohesion score 0.0563265306122449 - nodes in this community are weakly interconnected._
- **Should `Composer Dependencies & Autoload` be split into smaller, more focused modules?**
  _Cohesion score 0.045454545454545456 - nodes in this community are weakly interconnected._