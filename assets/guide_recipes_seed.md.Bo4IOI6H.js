import{_ as a,c as i,a2 as e,o as t}from"./chunks/framework.C5GEIE5F.js";const c=JSON.parse('{"title":"Seeding your database","description":"","frontmatter":{},"headers":[],"relativePath":"guide/recipes/seed.md","filePath":"guide/recipes/seed.md"}'),n={name:"guide/recipes/seed.md"};function h(d,s,l,p,o,k){return t(),i("div",null,s[0]||(s[0]=[e(`<h1 id="seeding-your-database" tabindex="-1">Seeding your database <a class="header-anchor" href="#seeding-your-database" aria-label="Permalink to &quot;Seeding your database&quot;">​</a></h1><p>You can seed your database with initial data though the CLI.</p><p>Seeding the database is useful to:</p><ul><li>Reload the data frequently the database in development or test.</li><li>Set initial data in production.</li></ul><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Migrations can be used to add or modify data to an existing database (<code>data</code> migration phase).</p></div><h2 id="configuring-the-seeder-function" tabindex="-1">Configuring the seeder function <a class="header-anchor" href="#configuring-the-seeder-function" aria-label="Permalink to &quot;Configuring the seeder function&quot;">​</a></h2><p>Each database can be configured with a seeder function.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark has-highlighted vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineDatabase } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@monolayer/pg/schema&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { dbSchema } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./schema&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { dbSchema } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./seeds&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineDatabase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  id: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;default&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  schemas: [dbSchema],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  extensions: [],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  camelCase: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  seeder: dbSeed, </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="loading-seed-data" tabindex="-1">Loading seed data <a class="header-anchor" href="#loading-seed-data" aria-label="Permalink to &quot;Loading seed data&quot;">​</a></h2><p>To load the seed data into the database execute the <a href="./../cli.html#db-seed"><code>db seed</code></a> command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> monolayer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> db</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> seed</span></span></code></pre></div><p>This command will call the <code>seeder</code> function defined in your database definition.</p>`,12)]))}const g=a(n,[["render",h]]);export{c as __pageData,g as default};
