import{_ as t,c as a,a2 as s,o}from"./chunks/framework.BVrlcXZz.js";const g=JSON.parse('{"title":"Class: PgDatabase","description":"","frontmatter":{},"headers":[],"relativePath":"reference/api/schema/classes/PgDatabase.md","filePath":"reference/api/schema/classes/PgDatabase.md"}'),d={name:"reference/api/schema/classes/PgDatabase.md"};function n(r,e,i,c,l,h){return o(),a("div",null,e[0]||(e[0]=[s(`<p><a href="./../../modules.html">monolayer-pg</a> / <a href="./../">schema</a> / PgDatabase</p><h1 id="class-pgdatabase" tabindex="-1">Class: PgDatabase <a class="header-anchor" href="#class-pgdatabase" aria-label="Permalink to &quot;Class: PgDatabase&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Property</th><th>Modifier</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>camelCase</code></td><td><code>readonly</code></td><td><code>boolean</code></td><td>Whether to convert camelCase column names to snake_case column names in the database. <strong>Default</strong> <code>false</code></td></tr><tr><td><code>extensions</code></td><td><code>readonly</code></td><td><a href="./PgExtension.html"><code>PgExtension</code></a>[]</td><td>Extensions to install in the database. <strong>Default</strong> <code>[]</code></td></tr><tr><td><code>generatePrismaSchema</code></td><td><code>readonly</code></td><td><code>boolean</code></td><td>Whether to generate a Prisma schema for the database after running migrations. <strong>Default</strong> <code>false</code></td></tr><tr><td><code>id</code></td><td><code>readonly</code></td><td><code>string</code></td><td>Id of the database.</td></tr><tr><td><code>prismaSchemaPath</code></td><td><code>readonly</code></td><td><code>string</code></td><td>Path to the Prisma schema to use when generating. <strong>Default</strong> <code>&quot;prisma/schema.prisma&quot;</code></td></tr><tr><td><code>schemas</code></td><td><code>readonly</code></td><td><code>AnySchema</code>[]</td><td>Schemas in the database. <strong>Default</strong> <code>[]</code></td></tr><tr><td><code>seeder?</code></td><td><code>readonly</code></td><td>(<code>db</code>: <code>Kysely</code>&lt;<code>any</code>&gt;) =&gt; <code>Promise</code>&lt;<code>void</code>&gt;</td><td>Function to seed the database with data.</td></tr></tbody></table><h2 id="accessors" tabindex="-1">Accessors <a class="header-anchor" href="#accessors" aria-label="Permalink to &quot;Accessors&quot;">​</a></h2><h3 id="connectionstring" tabindex="-1">connectionString <a class="header-anchor" href="#connectionstring" aria-label="Permalink to &quot;connectionString&quot;">​</a></h3><h4 id="get-signature" tabindex="-1">Get Signature <a class="header-anchor" href="#get-signature" aria-label="Permalink to &quot;Get Signature&quot;">​</a></h4><blockquote><p><strong>get</strong> <strong>connectionString</strong>(): <code>string</code></p></blockquote><p>Get the connection string for the database.</p><p>It will fetch he connection string from by inferring the environment variable in the following format:</p><p><code>MONO_PG_\${DATABASE_ID_TO_UPPER_CASE_AND_SNAKE_CASE}_DATABASE_URL</code>.</p><h5 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h5><p>For the following database:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> db</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineDatabase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	id: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;my-db&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	schemas: [],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>The connection string will be fetched from the environment variable: <code>MONO_PG_MY_DB_DATABASE_URL</code></p><h5 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>string</code></p>`,17)]))}const m=t(d,[["render",n]]);export{g as __pageData,m as default};
