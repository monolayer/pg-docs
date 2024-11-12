import{_ as e,c as t,a2 as s,o}from"./chunks/framework.BBV1ZMcZ.js";const u=JSON.parse('{"title":"Type Alias: PgDatabaseConfig","description":"","frontmatter":{},"headers":[],"relativePath":"reference/api/schema/type-aliases/PgDatabaseConfig.md","filePath":"reference/api/schema/type-aliases/PgDatabaseConfig.md"}'),i={name:"reference/api/schema/type-aliases/PgDatabaseConfig.md"};function l(n,a,d,r,c,h){return o(),t("div",null,a[0]||(a[0]=[s('<p><a href="./../../modules.html">monolayer</a> / <a href="./../">schema</a> / PgDatabaseConfig</p><h1 id="type-alias-pgdatabaseconfig" tabindex="-1">Type Alias: PgDatabaseConfig <a class="header-anchor" href="#type-alias-pgdatabaseconfig" aria-label="Permalink to &quot;Type Alias: PgDatabaseConfig&quot;">​</a></h1><blockquote><p><strong>PgDatabaseConfig</strong>: <code>object</code></p></blockquote><h2 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h2><h3 id="camelcase" tabindex="-1">camelCase? <a class="header-anchor" href="#camelcase" aria-label="Permalink to &quot;camelCase?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>camelCase</strong>: <code>boolean</code></p></blockquote><p>Whether to convert camelCase column names to snake_case column names in the database.</p><h4 id="default" tabindex="-1">Default <a class="header-anchor" href="#default" aria-label="Permalink to &quot;Default&quot;">​</a></h4><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span></code></pre></div><h3 id="extensions" tabindex="-1">extensions? <a class="header-anchor" href="#extensions" aria-label="Permalink to &quot;extensions?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>extensions</strong>: <a href="./../classes/PgExtension.html"><code>PgExtension</code></a>[]</p></blockquote><p>Extensions to install in the database.</p><h4 id="default-1" tabindex="-1">Default <a class="header-anchor" href="#default-1" aria-label="Permalink to &quot;Default&quot;">​</a></h4><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]</span></span></code></pre></div><h3 id="generateprismaschema" tabindex="-1">generatePrismaSchema? <a class="header-anchor" href="#generateprismaschema" aria-label="Permalink to &quot;generatePrismaSchema?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>generatePrismaSchema</strong>: <code>boolean</code></p></blockquote><p>Whether to generate a Prisma schema for the database after running migrations.</p><h4 id="default-2" tabindex="-1">Default <a class="header-anchor" href="#default-2" aria-label="Permalink to &quot;Default&quot;">​</a></h4><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span></code></pre></div><h3 id="id" tabindex="-1">id? <a class="header-anchor" href="#id" aria-label="Permalink to &quot;id?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>id</strong>: <code>string</code></p></blockquote><p>Id of the database.</p><h4 id="default-3" tabindex="-1">Default <a class="header-anchor" href="#default-3" aria-label="Permalink to &quot;Default&quot;">​</a></h4><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;default&quot;</span></span></code></pre></div><h3 id="prismaschemapath" tabindex="-1">prismaSchemaPath? <a class="header-anchor" href="#prismaschemapath" aria-label="Permalink to &quot;prismaSchemaPath?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>prismaSchemaPath</strong>: <code>string</code></p></blockquote><p>Path to the Prisma schema to use when generating.</p><h4 id="default-4" tabindex="-1">Default <a class="header-anchor" href="#default-4" aria-label="Permalink to &quot;Default&quot;">​</a></h4><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;prisma/schema.prisma&quot;</span></span></code></pre></div><h3 id="schemas" tabindex="-1">schemas? <a class="header-anchor" href="#schemas" aria-label="Permalink to &quot;schemas?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>schemas</strong>: <code>AnySchema</code>[]</p></blockquote><p>Schemas in the database.</p><h4 id="default-5" tabindex="-1">Default <a class="header-anchor" href="#default-5" aria-label="Permalink to &quot;Default&quot;">​</a></h4><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]</span></span></code></pre></div><h3 id="seeder" tabindex="-1">seeder()? <a class="header-anchor" href="#seeder" aria-label="Permalink to &quot;seeder()?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>seeder</strong>: (<code>db</code>) =&gt; <code>Promise</code>&lt;<code>void</code>&gt;</p></blockquote><p>Function to seed the database with data.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Parameter</th><th>Type</th></tr></thead><tbody><tr><td><code>db</code></td><td><code>Kysely</code>&lt;<code>any</code>&gt;</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p>',41)]))}const b=e(i,[["render",l]]);export{u as __pageData,b as default};
